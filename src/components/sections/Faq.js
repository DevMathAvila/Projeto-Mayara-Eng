import { Plus } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const faqs = [
  {
    q: "Quanto custa um projeto?",
    a: "Depende do tamanho da casa, do terreno e do que você precisa, se é só o projeto, o projeto com aprovação, ou uma regularização. Por isso o orçamento é feito caso a caso, depois de entender o que você tem em mente. É sem compromisso: você conta o projeto e recebe o valor.",
  },
  {
    q: "Quanto tempo leva?",
    a: "Varia com o tamanho do trabalho e com a agilidade da prefeitura em cada etapa. Na primeira conversa a Mayara já te passa uma estimativa realista para o seu caso, sem promessa vazia só para fechar.",
  },
  {
    q: "Vocês atendem a minha região?",
    a: "O atendimento presencial cobre Indaiatuba, Campinas, Salto e Itu. Para outras cidades, dá para tocar o projeto de forma remota sob consulta, então vale conversar mesmo se você não estiver nessa região.",
  },
  {
    q: "Como eu começo?",
    a: "Você chama no WhatsApp ou preenche o formulário aqui do site. A Mayara entende a sua necessidade, tira as primeiras dúvidas e monta o orçamento. Não precisa de cadastro nem de compromisso para dar esse primeiro passo.",
  },
  {
    q: "O que acontece depois que eu entro em contato?",
    a: "Você fala direto com a Mayara, e não com atendente ou robô. Ela faz algumas perguntas sobre o imóvel e o seu objetivo e já explica os próximos passos. A primeira resposta costuma sair no mesmo dia.",
  },
  {
    q: "Preciso já ter o terreno ou uma planta pronta?",
    a: "Não. Dá para começar desde a ideia. Se você já tem terreno, uma planta antiga ou a documentação do imóvel, melhor ainda: é só levar para a conversa que a Mayara parte dali.",
  },
];

export default function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="bg-paper py-24 md:py-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style dangerouslySetInnerHTML={{ __html: ".faq-item[open] .faq-icon{transform:rotate(45deg)}" }} />
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center">
            <SectionLabel>Perguntas frequentes</SectionLabel>
          </div>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold text-navy leading-tight">
            As dúvidas que quase todo mundo tem antes de chamar.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="faq-item bg-white rounded-xl border border-ink/5 overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5">
                <span className="font-semibold text-navy">{f.q}</span>
                <Plus size={20} className="faq-icon text-orange shrink-0 transition-transform duration-300" />
              </summary>
              <div className="px-6 pb-6 -mt-1 text-ink/70 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
