export const Eyebrow = ({ children }) => (
  <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-pine-700">
    <span className="h-px w-8 bg-pine-700" aria-hidden="true" />
    {children}
  </p>
);
