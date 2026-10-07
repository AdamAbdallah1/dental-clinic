import { useRef } from "react";
import { motion as Motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

const EASE = [0.22, 1, 0.36, 1];

export const Hero = () => {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -24]);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" ref={ref} className="relative flex flex-col overflow-hidden lg:min-h-svh">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-5 py-12 sm:px-8 sm:py-16 lg:flex-1 lg:justify-center lg:py-20">
        <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-16">
          {/* text */}
          <div>
            <Motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <Eyebrow>Dental Clinic — Lebanon</Eyebrow>
            </Motion.div>

            <h1 className="mt-5 font-display text-[clamp(2.1rem,4.5vw,3.5rem)] font-medium leading-[1.08] tracking-tight text-ink sm:mt-6">
              <Motion.span
                className="block"
                initial={reduce ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
              >
                Exceptional dentistry,
              </Motion.span>
              <Motion.span
                className="block"
                initial={reduce ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.18, ease: EASE }}
              >
                <em className="italic text-pine-700">thoughtfully delivered</em>.
              </Motion.span>
            </h1>

            <Motion.p
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
              className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:mt-6 sm:text-base lg:text-lg"
            >
              SmileCare is a dental clinic in Lebanon offering comprehensive care — from routine
              check-ups to implants and whitening — in a calm, modern environment designed around
              your comfort.
            </Motion.p>

            <Motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.42, ease: EASE }}
              className="mt-7 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:items-center"
            >
              <button
                onClick={() => go("contact")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-pine-700 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-pine-800 lg:py-3.5"
              >
                Book an Appointment
              </button>
              <button
                onClick={() => go("treatments")}
                className="group inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-ink transition-colors hover:text-pine-700 lg:py-3.5"
              >
                Explore Treatments
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>
            </Motion.div>
          </div>

          {/* image */}
          <Motion.div
            initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
            className="relative"
          >
            <Motion.div
              initial={reduce ? false : { scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, ease: EASE }}
            >
              <Motion.img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80"
                alt="Dentist walking a patient through their X-ray at SmileCare dental clinic"
                style={reduce ? undefined : { y: imgY }}
                className="h-[22vh] w-full rounded-2xl object-cover lg:h-[54vh]"
              />
            </Motion.div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};
