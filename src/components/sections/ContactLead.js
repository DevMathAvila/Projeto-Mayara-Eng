import { MapPin, MessageCircle, CheckCircle2 } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import SectionLabel from "@/components/ui/SectionLabel";
import LeadForm from "@/components/forms/LeadForm";
import { site } from "@/lib/site";
import { waLink, waMessages } from "@/lib/whatsapp";

export default function ContactLead() {
  return (
    <section id="contato" className="bg-navy-deep text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-20">
        <div>
          <SectionLabel dark>Fale com a Mayara</SectionLabel>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold leading-tight">
            Peça um orçamento sem compromisso.
          </h2>
          <p className="mt-4 text-white/70 text-lg leading-relaxed max-w-lg">
            Conte o que você está pensando em construir ou resolver, seja a casa pra sua família morar ou
            um projeto pra vender. Preencha os campos e a conversa já abre no WhatsApp com o seu recado
            pronto. Sem cadastro, sem custo, e a primeira resposta costuma sair no mesmo dia.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href={waLink(waMessages.orcamento)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <span className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                <FaWhatsapp size={20} />
              </span>
              <span>
                <span className="block text-sm text-white/50">WhatsApp</span>
                <span className="block font-semibold group-hover:text-orange transition-colors">
                  {site.whatsapp.display}
                </span>
              </span>
            </a>

            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <span className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white/10 text-white group-hover:bg-orange transition-colors">
                <FaInstagram size={20} />
              </span>
              <span>
                <span className="block text-sm text-white/50">Instagram</span>
                <span className="block font-semibold group-hover:text-orange transition-colors">
                  {site.instagram.handle}
                </span>
              </span>
            </a>

            <div className="flex items-center gap-4">
              <span className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-white/10 text-white">
                <MapPin size={20} />
              </span>
              <span>
                <span className="block text-sm text-white/50">Atendimento</span>
                <span className="block font-semibold">{site.servesPresencial.join(" · ")}</span>
              </span>
            </div>
          </div>

          {/* Sinais de confiança reais, junto do ponto de decisão */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} className="text-orange" />
              {site.stats[0].value} projetos entregues
            </span>
            <span className="inline-flex items-center gap-2">
              <MessageCircle size={16} className="text-orange" />
              Resposta no mesmo dia
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} className="text-orange" />
              {site.crea}
            </span>
          </div>
        </div>

        <div>
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
