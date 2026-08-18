import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "Política de Privacidade",
  description:
    "Como os dados enviados pelo site de Mayara Gaspareto são tratados, conforme a LGPD.",
};

export default function PrivacidadePage() {
  const updated = "agosto de 2026";
  const hasCnpj = !site.placeholders.cnpj.startsWith("PLACEHOLDER");

  return (
    <div className="pt-[72px] bg-paper">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-navy leading-tight">
          Política de Privacidade
        </h1>
        <p className="mt-3 text-ink/55 text-sm">Última atualização: {updated}</p>

        <div className="mt-10 space-y-8 text-ink/75 leading-relaxed">
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-navy mb-2">
              Quem trata os seus dados
            </h2>
            <p>
              Este site é de Mayara Gaspareto, engenheira civil, sediada em {site.baseCity}.
              {hasCnpj ? ` CNPJ ${site.placeholders.cnpj}.` : ""} Para qualquer assunto sobre os seus
              dados, o contato é pelo e-mail{" "}
              <a href={`mailto:${site.email}`} className="text-orange font-medium">
                {site.email}
              </a>{" "}
              ou pelo WhatsApp {site.whatsapp.display}.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-navy mb-2">
              Quais dados coletamos
            </h2>
            <p>
              Coletamos apenas o que você mesmo informa no formulário de contato: nome, telefone,
              o tipo de projeto e a mensagem que você escrever. O formulário funciona abrindo uma
              conversa no WhatsApp com esses dados, então eles também passam a fazer parte do seu
              atendimento por lá.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-navy mb-2">
              Para que usamos
            </h2>
            <p>
              Os dados servem para responder o seu contato, entender a sua necessidade e preparar um
              orçamento. Não vendemos, não alugamos e não compartilhamos as suas informações com
              terceiros para fins de publicidade.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-navy mb-2">
              Medição de acesso
            </h2>
            <p>
              Usamos ferramentas de análise de audiência do provedor de hospedagem (Vercel Analytics e
              Speed Insights) para entender, de forma agregada e anônima, como o site é usado e onde
              melhorar. Essa medição não identifica você pessoalmente.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-navy mb-2">
              Os seus direitos
            </h2>
            <p>
              Pela Lei Geral de Proteção de Dados (LGPD), você pode pedir a qualquer momento para
              confirmar, corrigir ou excluir os dados que compartilhou, além de retirar o seu
              consentimento. É só entrar em contato pelos canais acima que atendemos o seu pedido.
            </p>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-ink/10">
          <Link href="/" className="text-orange font-semibold hover:text-orange-dark">
            ← Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
