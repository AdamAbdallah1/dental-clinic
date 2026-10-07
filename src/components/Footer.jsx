import { Plus, Phone, MessageSquare, MapPin } from "lucide-react";

const navItems = [
  { label: "Treatments", id: "treatments" },
  { label: "About", id: "about" },
  { label: "Why Us", id: "why-us" },
  { label: "Contact", id: "contact" },
];

export const Footer = () => {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
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
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              A modern dental clinic in Lebanon, focused on comfortable, high-quality care.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => go(item.id)}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="tel:+96170123456"
                  className="flex items-center gap-2 text-muted transition-colors hover:text-ink"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  +961 701 23456
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/96170123456"
                  className="flex items-center gap-2 text-muted transition-colors hover:text-ink"
                >
                  <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                Lebanon
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 sm:flex-row">
          <p className="text-xs text-muted">© 2025 SmileCare Dental Clinic</p>
          <p className="text-xs text-muted">Designed &amp; developed by Cedars Tech</p>
        </div>
      </div>
    </footer>
  );
};
