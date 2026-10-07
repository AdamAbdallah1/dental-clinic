import { Fragment, useRef } from "react";
import { motion as Motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Eyebrow } from "./Eyebrow";
import { ScrollWord } from "./ScrollWord";

const headingWords = ["A", "calm,", "modern", "approach", "to", "dental", "care."];
const headingAccent = new Set([5, 6]);

const paragraphWords =
  "SmileCare was created with a simple goal — to make quality dental care a comfortable, straightforward experience. From your first visit, we focus on listening: understanding your concerns, explaining your options clearly, and building a treatment plan that fits your needs.".split(
    " "
  );

// Map each word to a slice of the section's scroll progress.
const rangeFor = (i, total, start, end, spread = 1.6) => {
  const step = (end - start) / total;
  return [start + i * step, start + i * step + step * spread];
};

export const About = () => {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <section id="about" ref={ref} className="border-t border-line bg-white lg:h-[300vh]">
      <div className="lg:sticky lg:top-0 lg:flex lg:h-svh lg:items-center">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-0">
          <Motion.div style={reduce ? undefined : { y: imgY }} className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80"
                alt="Modern treatment room at SmileCare dental clinic"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Motion.div>

          <div className="order-1 lg:order-2">
            <Eyebrow>About the Clinic</Eyebrow>

            <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              {headingWords.map((word, i) => (
                <Fragment key={i}>
                  <ScrollWord
                    progress={scrollYProgress}
                    range={rangeFor(i, headingWords.length, 0, 0.24, 1.4)}
                    y={6}
                  >
                    <span className={headingAccent.has(i) ? "italic text-pine-700" : ""}>
                      {word}
                    </span>
                  </ScrollWord>{" "}
                </Fragment>
              ))}
            </h2>

            <p className="mt-6 max-w-lg leading-relaxed text-muted">
              {paragraphWords.map((word, i) => (
                <Fragment key={i}>
                  <ScrollWord
                    progress={scrollYProgress}
                    range={rangeFor(i, paragraphWords.length, 0.32, 0.95, 2)}
                    y={4}
                  >
                    {word}
                  </ScrollWord>{" "}
                </Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
