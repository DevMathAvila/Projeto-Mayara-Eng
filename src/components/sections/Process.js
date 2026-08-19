import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { FaWhatsapp } from "react-icons/fa";
import { waLink, waMessages } from "@/lib/whatsapp";

const steps = [
  {
    n: "01",
    title: "Conversa e viabilidade",
    desc: "A gente entende o que você quer, olha o terreno e as regras da prefeitura e do condomínio pra saber, já no começo, o que dá pra fazer ali.",
  },
  {
    n: "02",
    title: "Projeto e 3D",
    desc: "A casa ganha forma e você vê em imagens realistas antes da obra, o que ajuda a decidir com calma e ainda serve pra vender na planta, se for o caso.",
  },
  {
    n: "03",
    title: "Aprovação técnica",
    desc: "A parte burocrática fica comigo. Cuido dos protocolos junto aos órgãos competentes até o alvará, pra obra começar em ordem.",
  },
  {
    n: "04",
    title: "Execução e suporte",
    desc: "Você recebe o projeto executivo, o manual da obra, e conta com suporte técnico pra tudo sair como planejado e dentro do custo previsto.",
  },
];

export default function Process() {
  return (
    <section className="bg-navy text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <SectionLabel dark>Como funciona</SectionLabel>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold leading-tight">
            Do primeiro papo até a obra em pé, você sabe onde está.
          </h2>
          <p className="mt-4 text-white/65 text-lg leading-relaxed">
            Nada de etapa surpresa ou custo escondido no meio do caminho. O processo é transparente da
            primeira conversa até a entrega.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="h-full border-t border-white/15 pt-6">
                <span className="font-[family-name:var(--font-display)] text-4xl font-semibold text-orange">
                  {s.n}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-white/60 leading-relaxed text-[15px]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center gap-5">
          <p className="text-white/80 text-lg">Ficou com alguma dúvida sobre o seu caso?</p>
          <a
            href={waLink(waMessages.duvida)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-navy hover:bg-orange hover:text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            <FaWhatsapp size={18} />
            Tirar uma dúvida
          </a>
        </div>
      </div>
    </section>
  );
}
