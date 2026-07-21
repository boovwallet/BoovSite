import { AlertsFeed } from "@/components/AlertsFeed";
import { BoovExperience } from "@/components/BoovExperience";
import { CtaWaitlist } from "@/components/CtaWaitlist";
import { SpendingControls } from "@/components/SpendingControls";

/**
 * One continuous story, told in scroll order:
 * preloader → the wordmark → the card itself (tap to pay) → what the card
 * locks to (spending controls) → what the card reports (the alerts ledger) →
 * the release (waitlist). Deeper reading lives on /story; the animation bench
 * on /play.
 */
export default function Home() {
  return (
    <>
      <BoovExperience />
      <SpendingControls />
      <section id="alerts" aria-labelledby="alerts-heading">
        <AlertsFeed />
      </section>
      <CtaWaitlist />
    </>
  );
}
