import { useRef } from "react";
import { motion as Motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Eyebrow } from "./Eyebrow";
import { useMediaQuery } from "../hooks/useMediaQuery";

const steps = [
  { n: "01", title: "Consultation", desc: "We listen to your concerns and assess your oral health." },
  { n: "02", title: "Treatment Plan", desc: "You receive a clear, personalized plan — with transparent options and costs." },
  { n: "03", title: "Ongoing Care", desc: "We support your long-term oral health with continued, attentive care." },
];

const Step = ({ step, index, progress, total }) => {
  const reduce = useReducedMotion();
  const center = (index + 0.5) / total;
  const isFirst = index === 0;
  const isLast = index === total - 1;
  const range = isFirst
    ? [0, center, center + 0.15]
    : isLast
      ? [center - 0.15, center, 1]
      : [center - 0.15, center, center + 0.15];
  const outputs = isFirst ? [1, 1, 0.3] : isLast ? [0.3, 1, 1] : [0.3, 1, 0.3];
  const opacity = useTransform(progress, range, outputs);
  const bg = useTransform(progress, [center - 0.15, center + 0.05], ["#ffffff", "#13554c"]);
  const text = useTransform(progress, [center - 0.15, center + 0.05], ["#6f6a60", "#ffffff"]);
  const scale = useTransform(opacity, [0.3, 1], [0.9, 1.05]);

  return (
    <div className="relative flex gap-6">
      <Motion.div
        style={reduce ? { backgroundColor: "#13554c", color: "#ffffff", scale: 1 } : { backgroundColor: bg, color: text, scale }}
        className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-white font-display text-sm"
      >
        {step.n}
      </Motion.div>
      <div style={reduce ? { opacity: 1 } : { opacity }} className="pt-1.5">
        <h3 className="font-display text-xl font-medium text-ink">{step.title}</h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{step.desc}</p>
      </div>
    </div>
  );
};

const ProcessDesktop = () => {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <div ref={ref} className="lg:h-[220vh]">
      <div className="lg:sticky lg:top-0 lg:flex lg:h-svh lg:items-center">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow>How It Works</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
              A simple, <em className="italic text-pine-700">three-step</em> process.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="relative">
              <div className="absolute bottom-8 left-[27px] top-8 w-px bg-line" />
              <Motion.div
                style={reduce ? { scaleY: 1 } : { scaleY: scrollYProgress }}
                className="absolute bottom-8 left-[27px] top-8 w-px origin-top bg-pine-700"
              />
              <div className="space-y-14 lg:space-y-20">
                {steps.map((s, i) => (
                  <Step key={s.n} step={s} index={i} progress={scrollYProgress} total={steps.length} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProcessMobile = () => (
  <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
    <Eyebrow>How It Works</Eyebrow>
    <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
      A simple, <em className="italic text-pine-700">three-step</em> process.
    </h2>
    <div className="relative mt-12">
      <div className="absolute bottom-6 left-[27px] top-6 w-px bg-line" />
      <div className="space-y-12">
        {steps.map((s) => (
          <div key={s.n} className="relative flex gap-6">
            <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-white font-display text-sm text-ink">
              {s.n}
            </div>
            <div className="pt-1.5">
              <h3 className="font-display text-xl font-medium text-ink">{s.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const Process = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <section className="border-t border-line">
      {isDesktop ? <ProcessDesktop /> : <ProcessMobile />}
    </section>
  );
};
