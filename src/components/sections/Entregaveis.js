import { Check } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

// O que o cliente leva ao contratar um projeto. Itens genéricos o suficiente
// para serem verdadeiros no padrão de trabalho, sem prometer especificidade
// que dependa de cada contrato.
const itens = [
  "Projeto pensado na forma como a casa vai ser vivida no dia a dia",
  "Imagens 3D realistas pra decidir antes da obra, que ainda ajudam na venda",
  "Projeto executivo detalhado, o manual da obra que evita retrabalho",
  "Escolhas de material medidas pelo que agrega sem estourar o custo",
  "Gestão da aprovação e da regularização junto aos órgãos",
  "Suporte técnico durante a obra, do início à entrega",
];

export default function Entregaveis() {
  return (
    <section className="bg-navy text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
        <div>
          <SectionLabel dark>O que você leva</SectionLabel>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold leading-tight">
            Muito além de uma planta bonita.
          </h2>
          <p className="mt-4 text-white/65 text-lg leading-relaxed">
            Contratar a Mayara é ter projeto e engenharia na mesma mão, pra você construir com um plano
            claro, o custo sob controle e a casa bem resolvida do começo ao fim.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
          {itens.map((item, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <li className="flex gap-3">
                <span className="inline-flex w-6 h-6 shrink-0 items-center justify-center rounded-full bg-orange text-white mt-0.5">
                  <Check size={15} strokeWidth={3} />
                </span>
                <span className="text-white/85 leading-relaxed">{item}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
