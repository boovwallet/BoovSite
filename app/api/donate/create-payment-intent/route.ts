import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MIN_AMOUNT_CENTS = 100; // $1
const MAX_AMOUNT_CENTS = 50_000; // $500

function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }
  return new Stripe(secretKey, {
    apiVersion: "2026-06-24.dahlia",
  });
}

type Body = {
  amountCents?: number;
  campaign?: string;
  tag?: string;
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Body;
    const amountCents = Math.round(Number(body.amountCents));

    if (!Number.isFinite(amountCents) || !Number.isInteger(amountCents)) {
      return NextResponse.json(
        { error: "amountCents must be an integer" },
        { status: 400 },
      );
    }

    if (amountCents < MIN_AMOUNT_CENTS || amountCents > MAX_AMOUNT_CENTS) {
      return NextResponse.json(
        {
          error: `Donations must be between $${MIN_AMOUNT_CENTS / 100} and $${MAX_AMOUNT_CENTS / 100}`,
        },
        { status: 400 },
      );
    }

    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if (!publishableKey) {
      return NextResponse.json(
        { error: "Stripe publishable key is not configured" },
        { status: 500 },
      );
    }

    const stripe = getStripe();
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountCents,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      metadata: {
        purpose: "donation",
        source: "app_clip",
        ...(body.campaign ? { campaign: String(body.campaign).slice(0, 200) } : {}),
        ...(body.tag ? { tag: String(body.tag).slice(0, 200) } : {}),
      },
      description: body.campaign
        ? `Donation — ${String(body.campaign).slice(0, 100)}`
        : "Boov donation",
    });

    return NextResponse.json(
      {
        clientSecret: paymentIntent.client_secret,
        publishableKey,
        paymentIntentId: paymentIntent.id,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      },
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to create payment";
    console.error("[donate/create-payment-intent]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
