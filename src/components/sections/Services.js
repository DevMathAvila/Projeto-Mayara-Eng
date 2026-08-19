import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="servicos" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <SectionLabel>Serviços</SectionLabel>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold text-navy leading-tight">
            Do projeto da casa à papelada resolvida.
          </h2>
          <p className="mt-4 text-ink/70 text-lg leading-relaxed">
            Seja pra erguer uma casa do zero ou colocar a documentação em ordem, o atendimento é o mesmo:
            técnico, direto e pensado no resultado prático pra você.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.id} delay={i * 0.08}>
                <div className="group h-full bg-paper rounded-2xl p-8 border border-transparent hover:border-orange/30 transition-colors">
                  <span className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-navy text-white group-hover:bg-orange transition-colors">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-semibold text-navy">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-ink/70 leading-relaxed">{s.text}</p>
                  <Link
                    href={s.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-orange hover:text-orange-dark transition-colors"
                  >
                    {s.hrefLabel}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
