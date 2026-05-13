import { AbstractSection } from "@/components/Abstract";
import { Achievements } from "@/components/Achievements";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MotionEnhancer } from "@/components/MotionEnhancer";
import { Nav } from "@/components/Nav";
import { PopularArticle } from "@/components/PopularArticle";
import { Presentation } from "@/components/Presentation";
import { Reflection } from "@/components/Reflection";
import { ResearchOverview } from "@/components/ResearchOverview";
import { Resume } from "@/components/Resume";
import { getContent } from "@/lib/content";

export default function Home() {
  const reflection = getContent("reflection");
  const abstract = getContent("abstract");
  const article = getContent("popular-article");

  return (
    <>
      <Nav />
      <MotionEnhancer />
      <Hero />
      <main>
        <Reflection content={reflection} />
        <ResearchOverview />
        <AbstractSection content={abstract} />
        <Presentation />
        <PopularArticle content={article} />
        <Resume />
        <Achievements />
      </main>
      <Footer />
    </>
  );
}
