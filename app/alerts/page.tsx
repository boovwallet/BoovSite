import type { Metadata } from "next";
import { AlertsFeed } from "@/components/AlertsFeed";

export const metadata: Metadata = {
  title: "Alerts — Boov",
  description:
    "What members see on the street — a live, verified ledger of directed aid, from donation to purchase.",
};

export default function AlertsPage() {
  return (
    <main className="page-content">
      <section id="alerts" aria-labelledby="alerts-heading">
        <AlertsFeed />
      </section>
    </main>
  );
}
