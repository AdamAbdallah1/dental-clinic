import { useEffect, useState } from "react";
import { Menu, X, Plus, Phone } from "lucide-react";

const navItems = [
  { label: "Treatments", id: "treatments" },
  { label: "About", id: "about" },
  { label: "Why Us", id: "why-us" },
  { label: "Contact", id: "contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="bg-pine-900 text-cream/90">
        <div className="mx-auto flex h-9 max-w-6xl items-center justify-between px-5 text-xs sm:px-8">
          <a
            href="tel:+96170123456"
            className="flex items-center gap-2 transition-colors hover:text-cream"
          >
            <Phone className="h-3 w-3" aria-hidden="true" />
            <span>+961 701 23456</span>
          </a>
          <span className="hidden text-cream/60 sm:block">Dental Clinic — Lebanon</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 border-b bg-cream/95 backdrop-blur-sm transition-colors duration-300 ${
          scrolled ? "border-line" : "border-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex h-16 items-center justify-between sm:h-[4.5rem]">
            <button
              onClick={() => go("home")}
              className="flex items-center gap-2.5"
              aria-label="SmileCare — back to top"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-pine-700">
                <Plus className="h-4 w-4 text-cream" strokeWidth={2.5} aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-semibold tracking-tight text-ink">
                SmileCare
              </span>
            </button>

            <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => go("contact")}
                className="hidden rounded-full bg-pine-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-pine-800 md:inline-flex"
              >
                Book Appointment
              </button>
              <button
                onClick={() => setOpen(!open)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 md:hidden"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div className="border-t border-line bg-cream md:hidden">
            <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8" aria-label="Mobile">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className="border-b border-line py-4 text-left text-base font-medium text-ink/80 transition-colors hover:text-ink"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => go("contact")}
                className="mb-4 mt-4 rounded-full bg-pine-700 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-pine-800"
              >
                Book Appointment
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
