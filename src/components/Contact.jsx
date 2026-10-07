import { Phone, MessageSquare, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Eyebrow";

const methods = [
  { icon: Phone, label: "Phone", value: "+961 701 23456", href: "tel:+96170123456" },
  { icon: MessageSquare, label: "WhatsApp", value: "+961 701 23456", href: "https://wa.me/96170123456" },
  { icon: MapPin, label: "Location", value: "Lebanon" },
];

export const Contact = () => (
  <section id="contact" className="border-t border-line bg-white">
    <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
            Get in touch with the <em className="italic text-pine-700">clinic</em>.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            The easiest way to reach us is by phone or WhatsApp. Send us a message and we will get
            back to you as soon as we can.
          </p>

          <div className="mt-10 space-y-6">
            {methods.map((method) => (
              <div key={method.label} className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pine-50">
                  <method.icon className="h-[18px] w-[18px] text-pine-700" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted">
                    {method.label}
                  </p>
                  {method.href ? (
                    <a
                      href={method.href}
                      className="text-base font-medium text-ink transition-colors hover:text-pine-700"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-base font-medium text-ink">{method.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80"
            alt="Dentist consulting with a patient at SmileCare dental clinic"
            className="h-full w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </Reveal>
      </div>
    </div>
  </section>
);
