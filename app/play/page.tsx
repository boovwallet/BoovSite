import type { Metadata } from "next";
import Link from "next/link";
import { GsapExhibit } from "@/components/lab/GsapExhibit";
import { MagicExhibit } from "@/components/lab/MagicExhibit";
import { MotionExhibit } from "@/components/lab/MotionExhibit";
import { SpringExhibit } from "@/components/lab/SpringExhibit";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "The Lab — Boov",
  description:
    "Four live experiments — every motion system on the Boov site, isolated on the bench with its parameters exposed.",
};

export default function PlayPage() {
  return (
    <main className={styles.main}>
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>04 — THE LAB</p>
          <h1 className={styles.headline}>
            <span className={styles.headlineLine}>Instruments,</span>
            <span className={`${styles.headlineLine} ${styles.headlineShift}`}>
              not ornaments.
            </span>
          </h1>
          <p className={styles.lead}>
            Every motion system on this site, pulled apart and mounted on the bench. Four live
            experiments — springs, scrubs, shared elements, view transitions — each with its
            parameters exposed. Touch everything.
          </p>
          <Link href="/" className={styles.back}>
            ← BOOV / HOME
          </Link>
        </div>

        <aside className={styles.heroSpec} aria-hidden="true">
          <p>BENCH — 4 EXPERIMENTS</p>
          <p>SPRING · GSAP · MOTION · MAGIC UI</p>
          <p>MODE: LIVE</p>
          <p>REDUCED-MOTION: RESPECTED</p>
        </aside>
      </header>

      <SpringExhibit />
      <GsapExhibit />
      <MotionExhibit />
      <MagicExhibit />

      <footer className={styles.endnote} aria-hidden="true">
        <p>END OF BENCH — 04/04 EXPERIMENTS NOMINAL</p>
      </footer>
    </main>
  );
}
