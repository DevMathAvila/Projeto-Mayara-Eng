import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Problema from "@/components/sections/Problema";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Testimonials from "@/components/sections/Testimonials";
import Entregaveis from "@/components/sections/Entregaveis";
import Faq from "@/components/sections/Faq";
import ContactLead from "@/components/sections/ContactLead";

export default function Home() {
  return (
    <>
      {/* Hero: problema + promessa + CTA */}
      <Hero />
      {/* Quem é + prova rápida (números) */}
      <About />
      {/* A dor que o visitante reconhece */}
      <Problema />
      {/* A solução, por benefício */}
      <Services />
      {/* Como funciona, passo a passo */}
      <Process />
      {/* Cases reais */}
      <FeaturedProjects />
      {/* Depoimentos (aparecem quando aprovados pelo cliente) */}
      <Testimonials />
      {/* Oferta: o que você recebe */}
      <Entregaveis />
      {/* Quebra de objeções */}
      <Faq />
      {/* CTA final + captura de lead */}
      <ContactLead />
    </>
  );
}
