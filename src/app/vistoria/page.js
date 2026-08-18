import { ClipboardCheck, ShieldCheck, HardHat, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { waLink, waMessages } from "@/lib/whatsapp";

export const metadata = {
  title: "Vistoria Técnica",
  description:
    "Vistoria técnica com laudo detalhado seguindo as normas da ABNT, em Indaiatuba e região. Segurança para receber chaves, negociar e proteger o seu imóvel.",
};

const pontos = [
  {
    icon: ClipboardCheck,
    title: "Laudo detalhado",
    desc: "Relatório completo, com fotos e descritivo técnico de cada ponto observado no imóvel, do acabamento à estrutura.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança na negociação",
    desc: "Documentação firme para a entrega de chaves ou uma vistoria de vizinhança, para você assinar sabendo exatamente o que está recebendo.",
  },
  {
    icon: HardHat,
    title: "Olhar de engenheira",
    desc: "A análise é feita por engenheira, seguindo as normas da ABNT, então o laudo tem peso técnico quando você precisar apresentá-lo.",
  },
];

export default function VistoriaPage() {
  return (
    <div className="pt-[72px]">
      {/* Cabeçalho */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <SectionLabel dark>Serviço especializado</SectionLabel>
          <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl md:text-6xl font-semibold leading-[1.05] max-w-3xl">
            Vistoria técnica para você decidir com base em fatos.
          </h1>
          <p className="mt-6 text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl">
            Antes de receber as chaves ou fechar um contrato, vale ter um laudo que mostre a real
            condição do imóvel. É o tipo de documento que evita dor de cabeça e protege o valor do que é seu.
          </p>
          <a
            href={waLink(waMessages.vistoria)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-7 py-4 rounded-full transition-colors"
          >
            <FaWhatsapp size={19} />
            Pedir uma vistoria
          </a>
        </div>
      </section>

      {/* Pontos */}
      <section className="bg-paper py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {pontos.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="h-full bg-white rounded-2xl p-8 border border-ink/5">
                    <span className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-navy text-white">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-semibold text-navy">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-ink/70 leading-relaxed">{p.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-navy-deep text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold leading-tight max-w-2xl mx-auto">
            Precisa de um laudo que ninguém possa contestar?
          </h2>
          <a
            href={waLink(waMessages.vistoria)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Falar com a Mayara
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
