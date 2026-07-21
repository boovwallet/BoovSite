import { AppShell } from "@/components/AppShell";
import { BoovExperience } from "@/components/BoovExperience";
import { CtaWaitlist } from "@/components/CtaWaitlist";
import { ImpactStats } from "@/components/ImpactStats";
import { Manifesto } from "@/components/Manifesto";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { SpendingControls } from "@/components/SpendingControls";

export default function Home() {
  return (
    <>
      <SiteNav />
      <div id="top" />
      <AppShell>
        <BoovExperience />
        <SpendingControls />
        <Manifesto />
        <ImpactStats />
        <CtaWaitlist />
        <SiteFooter />
      </AppShell>
    </>
  );
}
