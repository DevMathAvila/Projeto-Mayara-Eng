import Link from "next/link";
import { Quote } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/lib/site";

// Mostra depoimentos reais aprovados (approved) e exemplos ilustrativos (sample).
// Os exemplos ganham uma etiqueta "Exemplo" para não se passarem por reais.
export default function Testimonials() {
  const items = testimonials.filter((t) => t.approved || t.sample);
  if (items.length === 0) return null;

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel>Quem constrói com a Mayara</SectionLabel>
        <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold text-navy leading-tight max-w-2xl">
          O que os construtores dizem sobre projetar com ela.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((t, i) => (
            <Reveal key={`${t.name}-${i}`} delay={i * 0.06}>
              <figure className="relative h-full bg-paper rounded-2xl p-7 flex flex-col">
                {t.sample && !t.approved && (
                  <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider text-ink/40 border border-ink/15 rounded-full px-2 py-0.5">
                    Exemplo
                  </span>
                )}
                <Quote size={26} className="text-orange" />
                <blockquote className="mt-4 text-ink/80 leading-relaxed flex-grow text-[15px]">{t.quote}</blockquote>
                <figcaption className="mt-6 pt-5 border-t border-ink/10">
                  <span className="block font-semibold text-navy">{t.name}</span>
                  <span className="block text-sm text-ink/55">{t.location}</span>
                  {t.project &&
                    (t.projectHref ? (
                      <Link href={t.projectHref} className="mt-1 inline-block text-sm font-semibold text-orange hover:text-orange-dark">
                        {t.project}
                      </Link>
                    ) : (
                      <span className="mt-1 block text-sm text-ink/55">{t.project}</span>
                    ))}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
