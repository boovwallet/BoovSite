import type { Metadata } from "next";
import { ImpactStats } from "@/components/ImpactStats";
import { Manifesto } from "@/components/Manifesto";

export const metadata: Metadata = {
  title: "Story — Boov",
  description: "The manifesto and the impact ledger behind the card.",
};

export default function StoryPage() {
  return (
    <main>
      <h1 className="sr-only">The Boov story — manifesto and impact</h1>
      <Manifesto />
      <ImpactStats />
    </main>
  );
}
