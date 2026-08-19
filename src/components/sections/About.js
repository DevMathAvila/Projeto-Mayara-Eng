import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export default function About() {
  return (
    <section id="sobre" className="bg-paper py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/sobre/profiss.jpeg"
                alt="Mayara Gaspareto, engenheira civil"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_30%]"
              />
            </div>
            {/* Selo de crédito discreto, sem ícone flutuante genérico */}
            <div className="absolute -bottom-5 left-6 right-6 md:left-10 md:right-auto bg-navy text-white rounded-xl px-6 py-4 shadow-lg">
              <p className="font-[family-name:var(--font-display)] text-lg font-semibold">Mayara Gaspareto</p>
              <p className="text-orange text-sm font-medium">{site.role}</p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionLabel>Sobre</SectionLabel>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold text-navy leading-tight">
            Uma casa bem resolvida começa no projeto.
          </h2>

          <div className="mt-6 space-y-5 text-ink/75 leading-relaxed text-[17px]">
            <p>
              A Mayara é engenheira civil e assina o projeto da casa de ponta a ponta. O desenho pensa em
              como a casa vai ser vivida no dia a dia, e a engenharia garante que ela seja possível de
              erguer e de aprovar sem susto. Uma coisa sustenta a outra.
            </p>
            <p>
              O trabalho começa muito antes da planta bonita. Envolve entender o terreno, as regras do
              condomínio e da prefeitura e o orçamento real de quem vai construir, pra que o projeto não
              vire uma surpresa cara no meio da obra. Isso vale tanto pra quem está construindo pra morar
              quanto pra quem constrói pra vender.
            </p>
            <p className="bg-white border-l-4 border-orange rounded-r-lg px-6 py-4 text-ink/80 italic">
              Sediada em {site.baseCity}, com atendimento presencial em {site.servesPresencial.join(", ")}.{" "}
              {site.servesRemote}
            </p>
          </div>

          <div className="mt-9 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            {site.stats.map((s) => (
              <div key={s.label}>
                <span className="block font-[family-name:var(--font-display)] text-3xl font-semibold text-navy">
                  {s.value}
                </span>
                <span className="text-ink/55 text-xs font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
