import { Reveal } from "./Reveal";

export const Cta = () => (
  <section className="bg-pine-900 text-cream">
    <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8 sm:py-24">
      <Reveal>
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Ready to take the <em className="italic">next step</em>?
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-cream/70">
          Book your appointment today — we will help you find a time that works.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://wa.me/96170123456"
            className="inline-flex items-center justify-center rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-pine-900 transition-colors hover:bg-white"
          >
            Book on WhatsApp
          </a>
          <a
            href="tel:+96170123456"
            className="inline-flex items-center justify-center rounded-full border border-cream/30 px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:border-cream/60"
          >
            Call the Clinic
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);
