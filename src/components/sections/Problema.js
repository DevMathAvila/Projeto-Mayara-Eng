import { FileWarning, TrendingDown, FileX2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { waLink, waMessages } from "@/lib/whatsapp";

const dores = [
  {
    icon: FileWarning,
    title: "A planta trava na prefeitura",
    text: "Um projeto que não respeita recuo, taxa de ocupação ou a norma do condomínio volta pra estaca zero e atrasa tudo.",
  },
  {
    icon: TrendingDown,
    title: "A obra estoura o orçamento",
    text: "Sem projeto executivo e com material escolhido no chute, o custo sobe e o susto aparece bem no meio da obra.",
  },
  {
    icon: FileX2,
    title: "O imóvel fica irregular",
    text: "Quando a construção não bate com a matrícula, a venda emperra, o financiamento não sai e o inventário complica.",
  },
];

export default function Problema() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <SectionLabel>Onde a obra costuma dar errado</SectionLabel>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold text-navy leading-tight">
            Construir não precisa virar dor de cabeça.
          </h2>
          <p className="mt-4 text-ink/70 text-lg leading-relaxed">
            A maior parte dos perrengues de uma obra começa antes do primeiro tijolo, na parte técnica
            que costuma ser deixada de lado. É aí que a Mayara entra.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {dores.map((d, i) => {
            const Icon = d.icon;
            return (
              <Reveal key={d.title} delay={i * 0.08}>
                <div className="h-full bg-paper rounded-2xl p-8 border-t-4 border-orange/70">
                  <Icon size={26} className="text-orange" />
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold text-navy">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-ink/70 leading-relaxed">{d.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-5">
          <p className="text-ink/80 text-lg">É esse tipo de problema que a Mayara resolve todo dia.</p>
          <a
            href={waLink(waMessages.duvida)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-deep text-white font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap"
          >
            <FaWhatsapp size={18} />
            Contar o meu caso
          </a>
        </div>
      </div>
    </section>
  );
}
