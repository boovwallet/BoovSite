import { AlertsFeed } from "@/components/AlertsFeed";
import { BoovExperience } from "@/components/BoovExperience";
import { CtaWaitlist } from "@/components/CtaWaitlist";
import { HorizontalChapterTransition } from "@/components/HorizontalChapterTransition";
import { SpendingControls } from "@/components/SpendingControls";

/**
 * One continuous story, told in scroll order:
 * preloader → the wordmark → the card itself (tap to pay) → what the card
 * reports (the donor activity feed) → what the card locks to (spending
 * controls) → the release (waitlist).
 */
export default function Home() {
  return (
    <>
      <BoovExperience />
      <HorizontalChapterTransition />
      <section id="alerts" aria-labelledby="alerts-heading">
        <AlertsFeed />
      </section>
      <SpendingControls />
      <CtaWaitlist />
    </>
  );
}
