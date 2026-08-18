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
            Projeto bom é o que ajuda a vender a casa.
          </h2>

          <div className="mt-6 space-y-5 text-ink/75 leading-relaxed text-[17px]">
            <p>
              A Mayara é engenheira civil e assina o projeto da casa de ponta a ponta, e pra quem
              constrói isso vale ouro. O desenho pensa no que o comprador procura, aquilo que faz a
              pessoa bater o olho e se decidir na visita, e a engenharia garante que a casa seja possível
              de erguer e de aprovar sem susto. Uma coisa sustenta a outra.
            </p>
            <p>
              Ela também pensa no seu bolso de construtor. Cada escolha de material e de solução é medida
              pelo que realmente valoriza na venda, sem gastar com exagero que não volta pra você. A parte
              técnica e a burocracia ficam com ela, pra você focar em tocar a obra e o próximo lançamento.
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
