import { Eyebrow } from "./Eyebrow";

const chapters = [
  {
    n: "01",
    title: "Personalized Care",
    desc: "Every treatment plan is tailored to your needs — never a one-size-fits-all approach.",
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=1200&q=80",
    alt: "Dentist giving one-on-one attention to a patient",
  },
  {
    n: "02",
    title: "Modern Techniques",
    desc: "Current dental technology and methods, for precise and comfortable treatment.",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80",
    alt: "Dentist reviewing a 3D digital scan",
  },
  {
    n: "03",
    title: "Clear Communication",
    desc: "You understand your options, the process, and the costs before we begin.",
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80",
    alt: "Dentist explaining an X-ray to a patient",
  },
  {
    n: "04",
    title: "Comfortable Experience",
    desc: "A calm environment and an unhurried pace, designed to make every visit easier.",
    img: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=80",
    alt: "Bright, calm modern dental clinic",
  },
];

export const WhyUs = () => (
  <section id="why-us" className="border-t border-line">
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
      <div className="max-w-2xl">
        <Eyebrow>Why Choose Us</Eyebrow>
        <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
          Dentistry built on <em className="italic text-pine-700">trust</em> and transparency.
        </h2>
        <p className="mt-6 leading-relaxed text-muted">
          We believe great dental care starts with trust. Here is what you can expect when you
          visit SmileCare.
        </p>
      </div>

      <div className="mt-14">
        {chapters.map((ch) => (
          <div
            key={ch.n}
            className="grid items-center gap-5 border-t border-line py-8 last:border-b sm:grid-cols-[1fr_180px] sm:gap-10"
          >
            <div className="flex items-start gap-5">
              <span className="mt-1 font-display text-sm text-pine-700">{ch.n}</span>
              <div>
                <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">{ch.title}</h3>
                <p className="mt-1.5 max-w-md leading-relaxed text-muted">{ch.desc}</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl bg-pine-50">
              <img
                src={ch.img}
                alt={ch.alt}
                className="aspect-[2/1] w-full object-cover sm:aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
