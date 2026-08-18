import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { waLink, waMessages } from "@/lib/whatsapp";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-navy">
      {/* Foto real de obra em destaque */}
      <Image
        src="/images/piemonte/Projeto6.jpeg"
        alt="Residência projetada por Mayara Gaspareto"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Contraste para o texto, sem gradiente colorido genérico */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/30" />
      <div className="absolute inset-0 bg-navy-deep/20" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-12 sm:pb-16 md:pb-24 pt-28 md:pt-32">
        <p className="eyebrow text-orange mb-5 sm:mb-6">Projeto de Casas e Engenharia para construtores · {site.baseCity}</p>

        <h1 className="text-white font-[family-name:var(--font-display)] font-semibold leading-[1.08] sm:leading-[1.05] tracking-tight text-[2.1rem] sm:text-5xl md:text-6xl lg:text-[4.4rem] max-w-4xl">
          Casas que o comprador visita e já quer fechar.
        </h1>

        <p className="mt-5 sm:mt-7 text-white/75 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
          Mayara Gaspareto projeta para quem constrói para vender em Indaiatuba e região.
          Um projeto que valoriza a casa na hora da venda, com a engenharia que mantém a obra
          no custo, no prazo e dentro da aprovação.
        </p>

        <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            href="/projetos"
            className="inline-flex items-center justify-center gap-2 bg-paper text-navy hover:bg-white font-semibold px-7 py-3.5 sm:py-4 rounded-full transition-colors"
          >
            Ver os projetos
            <ArrowRight size={18} />
          </Link>
          <a
            href={waLink(waMessages.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-7 py-3.5 sm:py-4 rounded-full transition-colors"
          >
            <FaWhatsapp size={19} />
            Falar agora no WhatsApp
          </a>
        </div>

        <div className="mt-8 sm:mt-12 hidden sm:flex flex-wrap gap-x-10 gap-y-4">
          {site.stats.map((s) => (
            <div key={s.label} className="flex items-baseline gap-2">
              <span className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                {s.value}
              </span>
              <span className="text-white/60 text-sm">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
