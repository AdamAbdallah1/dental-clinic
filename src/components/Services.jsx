import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Eyebrow";

const treatments = [
  {
    name: "Teeth Cleaning",
    desc: "Professional cleaning that keeps your teeth and gums healthy — and your breath fresh.",
  },
  {
    name: "Teeth Whitening",
    desc: "Safe, professional whitening treatments for a naturally brighter smile.",
  },
  {
    name: "Dental Implants",
    desc: "Permanent, natural-looking replacements for missing teeth.",
  },
  {
    name: "Emergency Dental Care",
    desc: "Prompt care for pain, infections, and dental accidents.",
  },
];

export const Services = () => (
  <section id="treatments" className="border-t border-line bg-white">
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
      <Reveal className="max-w-2xl">
        <Eyebrow>Treatments</Eyebrow>
        <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
          Comprehensive care, <em className="italic text-pine-700">under one roof</em>.
        </h2>
        <p className="mt-6 leading-relaxed text-muted">
          From routine preventive care to advanced restorative work, we offer a focused range of
          treatments to keep your smile healthy.
        </p>
      </Reveal>

      <div className="mt-12">
        {treatments.map((treatment, i) => (
          <Reveal key={treatment.name} delay={i * 0.05}>
            <a
              href="#contact"
              aria-label={`Book an appointment for ${treatment.name}`}
              className="group flex items-baseline gap-6 border-t border-line py-8 sm:gap-10"
            >
              <span className="w-8 font-display text-sm text-pine-700" aria-hidden="true">
                0{i + 1}
              </span>
              <span className="flex-1">
                <span className="font-display text-2xl font-medium text-ink">
                  {treatment.name}
                </span>
                <span className="mt-2 block max-w-xl leading-relaxed text-muted">
                  {treatment.desc}
                </span>
              </span>
              <ArrowUpRight
                className="h-5 w-5 shrink-0 self-center text-ink/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-pine-700"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
