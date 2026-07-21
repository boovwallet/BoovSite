import type { Metadata } from "next";
import { CtaWaitlist } from "@/components/CtaWaitlist";
import { ImpactStats } from "@/components/ImpactStats";
import { Manifesto } from "@/components/Manifesto";
import { SpendingControls } from "@/components/SpendingControls";

export const metadata: Metadata = {
  title: "Story — Boov",
  description: "Spending controls, the manifesto, and the impact ledger.",
};

export default function StoryPage() {
  return (
    <main>
      <h1 className="sr-only">The Boov story — spending controls, manifesto, and impact</h1>
      <SpendingControls />
      <Manifesto />
      <ImpactStats />
      <CtaWaitlist />
    </main>
  );
}
