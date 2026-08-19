import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { waLink, waMessages } from "@/lib/whatsapp";

export default function Footer() {
  const year = new Date().getFullYear();
  const hasLinkedin = !site.placeholders.linkedin.startsWith("PLACEHOLDER");

  return (
    <footer className="bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-[family-name:var(--font-display)] text-2xl font-semibold">Mayara Gaspareto</p>
            <p className="text-orange text-sm font-semibold mt-1">{site.role}</p>
            <p className="text-white/60 text-sm leading-relaxed mt-5 max-w-sm">
              Projetos residenciais, regularização de imóveis e vistoria técnica em {site.baseCity} e região.
              Atendimento presencial em {site.servesPresencial.join(", ")} e projetos remotos sob consulta.
            </p>
            <a
              href={waLink(waMessages.orcamento)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-7 bg-orange hover:bg-orange-dark text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors"
            >
              Pedir um orçamento
            </a>
          </div>

          <div>
            <p className="eyebrow text-white/40 mb-5">Navegação</p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-white/40 mb-5">Contato</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={waLink(waMessages.floating)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  WhatsApp {site.whatsapp.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="text-white/70 hover:text-white transition-colors break-all">
                  {site.email}
                </a>
              </li>
              <li className="text-white/70">{site.baseCity}</li>
              <li className="text-white/50 text-xs pt-1">{site.crea}</li>
            </ul>

            <div className="flex items-center gap-4 mt-6">
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/60 hover:text-orange transition-colors"
              >
                <Instagram size={20} />
              </a>
              {hasLinkedin && (
                <a
                  href={site.placeholders.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white/60 hover:text-orange transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/40">
          <p>© {year} Mayara Gaspareto. Todos os direitos reservados.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacidade" className="hover:text-white transition-colors">
              Política de privacidade
            </Link>
            <span>{site.instagram.handle}</span>
          </div>
        </div>

        <p className="mt-6 text-center text-[11px] text-white/30">
          Desenvolvido por <span className="text-white/55 font-medium">AvilaCore</span>
        </p>
      </div>
    </footer>
  );
}
