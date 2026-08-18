// Rótulo de seção com traço laranja. Aceita tema claro ou escuro.
export default function SectionLabel({ children, dark = false }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="h-px w-8 bg-orange" />
      <span className={`eyebrow ${dark ? "text-white/60" : "text-navy/55"}`}>{children}</span>
    </span>
  );
}
