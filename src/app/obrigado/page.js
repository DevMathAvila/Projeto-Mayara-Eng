import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { site } from "@/lib/site";
import { waLink, waMessages } from "@/lib/whatsapp";

export const metadata = {
  title: "Recado enviado",
  description: "Obrigada pelo contato. A Mayara responde no mesmo dia.",
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <div className="pt-[72px] min-h-screen bg-navy-deep text-white flex items-center">
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <span className="inline-flex w-16 h-16 items-center justify-center rounded-full bg-orange/15 text-orange">
          <CheckCircle2 size={32} />
        </span>

        <h1 className="mt-8 font-[family-name:var(--font-display)] text-3xl md:text-5xl font-semibold leading-tight">
          Recado a caminho da Mayara.
        </h1>
        <p className="mt-5 text-white/70 text-lg leading-relaxed">
          Abrimos o seu WhatsApp com a mensagem já preenchida. É só apertar enviar na conversa que
          preparamos. Se a janela não abriu por algum bloqueio do navegador, use o botão abaixo.
        </p>

        <a
          href={waLink(waMessages.orcamento)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-4 rounded-full transition-colors"
        >
          <FaWhatsapp size={20} />
          Abrir o WhatsApp
        </a>

        <div className="mt-14 pt-10 border-t border-white/10">
          <p className="text-white/50 text-sm">Enquanto isso, você pode</p>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Ver os projetos
              <ArrowRight size={17} />
            </Link>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              <FaInstagram size={18} />
              Seguir no Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
