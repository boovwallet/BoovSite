import { NextResponse } from "next/server";

// Backing route for https://boov.ai/.well-known/apple-app-site-association
// (rewritten in next.config.mjs). Enables Universal Links (applinks) and
// App Clip invocation (appclips) for Boov Pay.
// Team ID PBF7P892U7; parent app com.boov.pay; App Clip com.boov.pay.Clip.
const appleAppSiteAssociation = {
  applinks: {
    details: [
      {
        appIDs: ["PBF7P892U7.com.boov.pay"],
        components: [
          {
            "/": "/donate",
            comment: "Matches Boov Pay donation links.",
          },
        ],
      },
    ],
  },
  appclips: {
    apps: ["PBF7P892U7.com.boov.pay.Clip"],
  },
};

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json(appleAppSiteAssociation, {
    headers: {
      "content-type": "application/json",
      "cache-control": "public, max-age=3600",
    },
  });
}
