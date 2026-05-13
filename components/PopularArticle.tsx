import Image from "next/image";
import { Section } from "@/components/Section";
import { PullQuote } from "@/components/ui/PullQuote";

type PopularArticleProps = {
  content: string;
};

function paragraphsFrom(content: string) {
  return content
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export function PopularArticle({ content }: PopularArticleProps) {
  const paragraphs = paragraphsFrom(content);

  return (
    <Section id="article" label="05 · Popular Research Article" className="bg-paper">
      <article>
        <div className="max-w-4xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent-deep">
            Profile · NCSSM Research
          </p>
          <h2 className="mt-5 text-[clamp(2.2rem,5vw,4.6rem)] leading-[1.04]">
            When AR Meets AI: A Duke Lab is Teaching Headsets to Build Worlds on Command
          </h2>
          <div className="mt-6 flex items-center gap-4">
            <Image
              src="/assets/portrait.jpg"
              alt="Hadi Abdul"
              width={72}
              height={72}
              className="h-14 w-14 rounded-full border border-rule object-cover"
            />
            <div>
              <p className="text-base font-semibold text-ink">Written by Hadi Abdul</p>
              <p className="text-sm text-muted">NCSSM Research in Computational Science Mentorship</p>
            </div>
          </div>
          <p className="mt-5 max-w-3xl font-serif text-2xl italic leading-snug text-muted">
            A look inside an augmented-reality research project where spoken prompts become
            generated 3D worlds.
          </p>
        </div>

        <div className="mt-12 article-columns text-lg leading-[1.72] text-ink-soft md:columns-2">
          {paragraphs.map((paragraph, index) => (
            <div key={`${paragraph.slice(0, 24)}-${index}`}>
              {index === 3 ? (
                <PullQuote>
                  Image-to-3D methods outperform text-to-3D for overall user satisfaction,
                  despite higher latencies.
                </PullQuote>
              ) : null}
              <p
                className={[
                  index === 0 ? "dropcap" : "",
                  paragraph.startsWith("Joshua Chilukuri is") ? "mt-8 italic text-muted" : "mb-6",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {paragraph}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 no-print">
          <a
            href="/assets/popular-article.pdf"
            target="_blank"
            rel="noopener"
            className="inline-flex rounded-md border border-rule bg-white px-4 py-2 text-sm font-semibold text-ink-soft transition hover:border-accent hover:text-accent-deep"
          >
            Open original article PDF
          </a>
        </div>
      </article>
    </Section>
  );
}
