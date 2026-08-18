import { FileWarning, TrendingDown, FileX2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { waLink, waMessages } from "@/lib/whatsapp";

const dores = [
  {
    icon: FileWarning,
    title: "A casa encalha no mercado",
    text: "Um projeto que não conversa com o que o comprador procura deixa a obra parada e o seu capital preso por meses.",
  },
  {
    icon: TrendingDown,
    title: "A obra come a margem",
    text: "Sem projeto executivo e com material escolhido no chute, o custo sobe e o lucro da venda derrete no meio do caminho.",
  },
  {
    icon: FileX2,
    title: "A papelada trava a venda",
    text: "Casa sem aprovação ou sem regularização não fecha financiamento e segura a escritura bem na hora de assinar.",
  },
];

export default function Problema() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <SectionLabel>Onde o lucro escapa</SectionLabel>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold text-navy leading-tight">
            Construir pra vender tem armadilha em cada etapa.
          </h2>
          <p className="mt-4 text-ink/70 text-lg leading-relaxed">
            A maior parte do prejuízo de quem constrói pra vender começa antes do primeiro tijolo, na
            parte técnica e na leitura do que o comprador quer. É aí que a Mayara entra.
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
          <p className="text-ink/80 text-lg">É esse tipo de problema que a Mayara resolve pra quem vive de construir.</p>
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
