export const projects = [
  {
    id: "1",
    title: "Residência Evidências",
    category: "Arquitetura",
    serviceType: "arquitetura",
    image: "/images/denis/projeto1.webp", 
    description: "Um manifesto de integração e luz. Este projeto residencial foca na fluidez entre os espaços internos e externos, utilizando materiais naturais para criar um refúgio contemporâneo e acolhedor.",
    details: {
      location: "Indaiatuba, SP",
      area: "180m²",
      year: "2025"
    },
    gallery: [
      "/images/denis/projeto1.webp", 
      "/images/denis/projeto1img2.webp", 
      "/images/denis/projeto1img3.webp"
    ]
  },
  {
    id: "2",
    title: "Residência Evidências",
    category: "Arquitetura",
    serviceType: "arquitetura",
    image: "/images/emerson/projeto2.webp",
    description: "Equilíbrio perfeito entre volumetria imponente e leveza visual. Esta residência explora o conceito de planos abertos, elevando a experiência do morar através de uma paleta de materiais nobres.",
    details: {
      location: "Indaiatuba, SP",
      area: "180m²",
      year: "2024"
    },
    gallery: ["/images/emerson/projeto2.webp", "/images/emerson/projeto2img3.jpg", "/images/emerson/projeto2img2.webp"]
  },
  {
    id: "3",
    title: "Residência Bom Sucesso",
    category: "Arquitetura",
    serviceType: "arquitetura",
    image: "/images/daiton/projeto3img2.webp",
    description: "Segurança e estética em total harmonia. Esta residência urbana destaca-se pelo fechamento minimalista e o uso estratégico de pedra natural, garantindo privacidade sem abrir mão da sofisticação.",
    details: {
      location: "Indaiatuba, SP",
      area: "105m²",
      year: "2024"
    },
    gallery: ["/images/daiton/projeto3img2.webp", "/images/daiton/projeto3.jpg", "/images/daiton/projeto3img3.jpg"]
  },
  {
    id: "4",
    title: "Residência Maria Candida",
    category: "Arquitetura",
    serviceType: "arquitetura",
    image: "/images/candida/projeto4img2.webp",
    description: "Viabilidade e segurança técnica para projetos de alto padrão. Gestão completa do processo de aprovação e alvará, garantindo conformidade total com as normas do condomínio e prefeitura.",
    details: {
      location: "Indaiatuba, SP",
      area: "200m²",
      year: "2024"
    },
    gallery: ["/images/candida/projeto4img2.webp", "/images/candida/projeto4img3.webp", "/images/candida/projeto4.webp"]
  },
  {
    id: "5",
    title: "Residência Salto",
    category: "Arquitetura",
    serviceType: "arquitetura",
    image: "/images/paulo/projeto4.webp",
    description: "A antecipação do sonho através do realismo. Modelagem fotorrealista que permite a compreensão exata de volumes, texturas e incidência solar antes mesmo do início da obra.",
    details: {
      location: "Salto, SP",
      area: "140m²",
      year: "2026"
    },
    gallery: ["/images/paulo/projeto4.webp", "/images/paulo/projeto4img2.jpg", "/images/paulo/projeto4img3.webp"]
  },
  {
    id: "6",
    title: "Regularização de Imóvel",
    category: "Regularização",
    serviceType: "tecnico",
    isSpecial: true, // Tag para o componente identificar o layout novo
    image: "/images/aprovacao/approve.jpg",
    description: "A regularização imobiliária vai muito além de papéis: é a proteção do seu patrimônio. Mayara Gaspareto oferece gestão técnica especializada para converter irregularidades em segurança jurídica.",
    details: {
      location: "Indaiatuba e Região",
      area: "Consultoria Técnica",
      year: "2025"
    },
    risks: [
      "Impedimento de venda através de financiamento bancário.",
      "Risco de multas administrativas pesadas pela prefeitura.",
      "Dificuldades em processos de inventário ou partilha de bens.",
      "Impossibilidade de obter alvará de funcionamento para comércios."
    ],
    steps: [
      { 
        title: "Diagnóstico Documental", 
        desc: "Análise minuciosa da matrícula e histórico do imóvel junto aos órgãos competentes." 
      },
      { 
        title: "Levantamento 'As-Built'", 
        desc: "Medição técnica in loco para atualizar a planta de acordo com a realidade construída." 
      },
      { 
        title: "Protocolo de Aprovação", 
        desc: "Gestão completa da tramitação burocrática até a emissão do Habite-se." 
      },
      { 
        title: "Segurança Final", 
        desc: "Suporte para averbação no Cartório de Registro de Imóveis, garantindo a regularidade total." 
      }
    ],
    gallery: [
      "/images/aprovacao/reg-imovel.jpg", 
      "/images/aprovacao/reg-tecnica.jpg"
    ]
  },
  {
      id: "7", 
      title: "Residência Piemonte",
      category: "Arquitetura",
      serviceType: "arquitetura",
      image: "/images/piemonte/Projeto6.jpeg",
      description: "Fachada de casa térrea moderna em condomínio de alto padrão, com iluminação em LED linear, garagem para dois carros e paisagismo contemporâneo. Projeto arquitetônico autoral de Mayara Gaspareto.",
      gallery: [
        "/images/piemonte/Projeto6.jpeg",
        "/images/piemonte/Projeto6img2.jpeg",
        "/images/piemonte/Projeto6img3.jpeg",
      ],
      details: {
        location: "Indaiatuba, SP",
        area: "180m²",
        year: "2025"
      }
    }
];