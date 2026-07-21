"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
  type Variant,
} from "framer-motion";
import {
  Check,
  Droplets,
  Nfc,
  Pill,
  ShieldCheck,
  ShoppingBasket,
  TrainFront,
  Wine,
  X,
  type LucideIcon,
} from "lucide-react";
import { TransitionPanel } from "@/components/motion-primitives/transition-panel";
import NeuralBackground from "@/components/ui/flow-field-background";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import styles from "./SpendingControls.module.css";

type Transaction = {
  id: "groceries" | "pharmacy" | "transit" | "hygiene" | "alcohol";
  label: string;
  merchant: string;
  amount: string;
  category: string;
  rule: string;
  status: "approved" | "declined";
  Icon: LucideIcon;
};

const TRANSACTIONS: Transaction[] = [
  {
    id: "groceries",
    label: "Groceries",
    merchant: "9th Street Market",
    amount: "$18.40",
    category: "Grocery stores",
    rule: "Essential food merchant",
    status: "approved",
    Icon: ShoppingBasket,
  },
  {
    id: "pharmacy",
    label: "Pharmacy",
    merchant: "Central Pharmacy",
    amount: "$12.75",
    category: "Pharmacies",
    rule: "Health and pharmacy",
    status: "approved",
    Icon: Pill,
  },
  {
    id: "transit",
    label: "Transit",
    merchant: "City Transit",
    amount: "$2.50",
    category: "Public transit",
    rule: "Approved transportation",
    status: "approved",
    Icon: TrainFront,
  },
  {
    id: "hygiene",
    label: "Hygiene",
    merchant: "Neighborhood Market",
    amount: "$9.20",
    category: "Personal care",
    rule: "Essential hygiene",
    status: "approved",
    Icon: Droplets,
  },
  {
    id: "alcohol",
    label: "Alcohol",
    merchant: "Corner Wine & Spirits",
    amount: "$12.60",
    category: "Alcohol retailers",
    rule: "Blocked category: alcohol",
    status: "declined",
    Icon: Wine,
  },
];

const ACCESSIBLE_STEPS = [
  "Tap received.",
  "Merchant recognized.",
  "Essentials rule matched.",
  "Purchase approved or declined.",
] as const;

const STATUS_VARIANTS: { enter: Variant; center: Variant; exit: Variant } = {
  enter: { opacity: 0, y: 10, filter: "blur(6px)" },
  center: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -7, filter: "blur(4px)" },
};

function CardMark() {
  return (
    <span className={styles.cardBrand}>
      <span className={styles.orbitMark} aria-hidden="true"><i /></span>
      boov
    </span>
  );
}

function MemberCard({
  activeStep,
  reducedMotion,
  tiltX,
  tiltY,
}: {
  activeStep: number;
  reducedMotion: boolean;
  tiltX: MotionValue<number>;
  tiltY: MotionValue<number>;
}) {
  const baseY = [8, 2, -3, 0][activeStep];
  const baseScale = [0.94, 0.97, 1, 1][activeStep];

  return (
    <motion.div
      className={styles.card}
      layout
      layoutId="boov-authorization-card"
      role="img"
      aria-label="Navy Boov Essentials card"
      style={{ rotateX: reducedMotion ? 0 : tiltX, rotateY: reducedMotion ? 0 : tiltY }}
      animate={{
        rotate: [-7, -3, 0, 0][activeStep],
        y: reducedMotion ? baseY : [baseY - 3, baseY + 4, baseY - 3],
        scale: baseScale,
      }}
      transition={{
        rotate: { duration: reducedMotion ? 0 : 0.48, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: reducedMotion ? 0 : 0.48, ease: [0.22, 1, 0.36, 1] },
        y: reducedMotion
          ? { duration: 0 }
          : { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <span className={styles.cardRibbon} aria-hidden="true" />
      <CardMark />
      <span className={styles.cardChip} aria-hidden="true"><i /></span>
      <span className={styles.cardDigits}>•••• 0427</span>
      <Nfc className={styles.cardContactless} aria-hidden="true" />
      <span className={styles.cardType}>essentials</span>
    </motion.div>
  );
}

export function SpendingControls() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = Boolean(useReducedMotion());
  const [activeStep, setActiveStep] = useState(prefersReducedMotion ? 3 : 0);
  const [transactionId, setTransactionId] = useState<Transaction["id"]>("groceries");
  const [announcement, setAnnouncement] = useState("");
  const [fieldActive, setFieldActive] = useState(false);
  const pointerX = useSpring(useMotionValue(0), { stiffness: 180, damping: 24, mass: 0.45 });
  const pointerY = useSpring(useMotionValue(0), { stiffness: 180, damping: 24, mass: 0.45 });
  const tiltY = useTransform(pointerX, [-1, 1], [-6, 6]);
  const tiltX = useTransform(pointerY, [-1, 1], [5, -5]);
  const burstControls = useAnimationControls();

  const transaction = useMemo(
    () => TRANSACTIONS.find((item) => item.id === transactionId) ?? TRANSACTIONS[0],
    [transactionId],
  );
  const approved = transaction.status === "approved";
  const StatusIcon = approved ? Check : X;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 170,
    damping: 32,
    mass: 0.28,
    restDelta: 0.001,
  });
  const fieldOpacity = useTransform(
    smoothProgress,
    [0, 0.08, 0.9, 1],
    [0.16, 1, 1, 0],
  );

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (prefersReducedMotion) return;
    const nextStep = Math.min(3, Math.max(0, Math.floor(latest * 4)));
    setActiveStep((current) => (current === nextStep ? current : nextStep));
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const root = document.documentElement;
    const chromeObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) root.dataset.controlsActive = "true";
        else delete root.dataset.controlsActive;
      },
      { rootMargin: "-46% 0px -46% 0px", threshold: 0 },
    );
    const fieldObserver = new IntersectionObserver(
      ([entry]) => setFieldActive(entry.isIntersecting),
      { rootMargin: "45% 0px", threshold: 0 },
    );

    chromeObserver.observe(section);
    fieldObserver.observe(section);
    return () => {
      chromeObserver.disconnect();
      fieldObserver.disconnect();
      delete root.dataset.controlsActive;
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) setActiveStep(3);
  }, [prefersReducedMotion]);

  const selectTransaction = (value: string) => {
    const next = TRANSACTIONS.find((item) => item.id === value);
    if (!next) return;
    setTransactionId(next.id);
    setAnnouncement(
      `${next.merchant}, ${next.amount}. Purchase ${next.status}. ${next.rule}.`,
    );
  };

  const updateCardTilt = (event: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
  };

  const resetCardTilt = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const reactToBurst = () => {
    if (prefersReducedMotion) return;
    void burstControls.start({
      scale: [1, 1.025, 1],
      transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
    });
  };

  const finalStatus = approved
    ? `Approved · ${transaction.amount} at ${transaction.merchant}.`
    : "Declined · Alcohol is a blocked category.";
  const statuses = [
    "Tap received.",
    "Merchant recognized.",
    "Essentials rule matched.",
    finalStatus,
  ];

  return (
    <section
      id="controls"
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="controls-heading"
    >
      <div
        className={styles.stickyStage}
        onPointerMove={updateCardTilt}
        onPointerLeave={resetCardTilt}
      >
        <motion.div className={styles.fieldLayer} style={{ opacity: prefersReducedMotion ? 0.72 : fieldOpacity }}>
          <NeuralBackground
            className={styles.flowField}
            color="#b8a7e8"
            trailOpacity={0.13}
            particleCount={500}
            speed={0.72}
            active={fieldActive}
            reducedMotion={prefersReducedMotion}
            onPointerBurst={reactToBurst}
          />
        </motion.div>
        <div className={styles.vignette} aria-hidden="true" />

        <div className={styles.sceneContent}>
          <header className={styles.copy}>
            <h2 id="controls-heading">Every tap, checked.</h2>
            <TransitionPanel
              activeIndex={activeStep}
              className={styles.statusTransition}
              variants={prefersReducedMotion ? undefined : STATUS_VARIANTS}
              transition={{ duration: prefersReducedMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              {statuses.map((status, index) => (
                <p key={`${index}-${status}`} data-status={index === 3 ? transaction.status : undefined}>
                  {index === 3 ? <StatusIcon aria-hidden="true" /> : <span aria-hidden="true">0{index + 1}</span>}
                  {status}
                </p>
              ))}
            </TransitionPanel>
          </header>

          <div className={styles.visual}>
            <motion.div
              className={styles.terminal}
              animate={{ opacity: 1, scale: activeStep === 0 ? 0.94 : 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.46, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden="true"
            >
              <Nfc />
              <span>Tap</span>
            </motion.div>

            <motion.span
              className={styles.connection}
              aria-hidden="true"
              initial={false}
              animate={{ opacity: activeStep >= 1 ? 1 : 0, scaleX: activeStep >= 1 ? 1 : 0.12 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.46, ease: [0.22, 1, 0.36, 1] }}
            ><i /></motion.span>

            <motion.div className={styles.cardInteraction} animate={burstControls}>
              <MemberCard
                activeStep={activeStep}
                reducedMotion={prefersReducedMotion}
                tiltX={tiltX}
                tiltY={tiltY}
              />
            </motion.div>

            <AnimatePresence mode="wait" initial={false}>
              {activeStep >= 2 ? (
                <motion.div
                  key={`${transaction.id}-rule`}
                  className={styles.ruleLabel}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ShieldCheck aria-hidden="true" />
                  <span><small>Category</small>{transaction.category}</span>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <AnimatePresence mode="wait" initial={false}>
              {activeStep === 3 ? (
                <motion.div
                  key={`${transaction.id}-result`}
                  className={styles.resultLabel}
                  data-status={transaction.status}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <StatusIcon aria-hidden="true" />
                  <span><small>{approved ? "Approved" : "Declined"}</small>{transaction.merchant}</span>
                  <strong>{transaction.amount}</strong>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <Tabs value={transactionId} onValueChange={selectTransaction}>
            <TabsList className={styles.tabsList} aria-label="Try another purchase">
              {TRANSACTIONS.map((item) => {
                const Icon = item.Icon;
                return (
                  <TabsTrigger className={styles.tabTrigger} value={item.id} key={item.id}>
                    <Icon aria-hidden="true" />
                    <span>{item.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </div>
      </div>

      <ol className={styles.srOnly} aria-label="How Boov authorizes a purchase">
        {ACCESSIBLE_STEPS.map((step, index) => (
          <li key={step} aria-current={index === activeStep ? "step" : undefined}>{step}</li>
        ))}
      </ol>
      <p className={styles.srOnly} role="status" aria-live="polite" aria-atomic="true">
        {announcement}
      </p>
    </section>
  );
}
