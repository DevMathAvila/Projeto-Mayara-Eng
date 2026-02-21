export const projects = [
  {
    id: "1",
    title: "Residência Evidências",
    category: "Arquitetura",
    serviceType: "arquitetura",
    image: "/images/denis/projeto1.jpg", 
    description: "Um manifesto de integração e luz. Este projeto residencial foca na fluidez entre os espaços internos e externos, utilizando materiais naturais para criar um refúgio contemporâneo e acolhedor.",
    details: {
      location: "Indaiatuba, SP",
      area: "180m²",
      year: "2025"
    },
    gallery: [
      "/images/denis/projeto1.jpg", 
      "/images/denis/projeto1img2.jpg", 
      "/images/denis/projeto1img3.jpg"
    ]
  },
  {
    id: "2",
    title: "Residência Horizon", // Mudei o nome para não repetir o ID 1
    category: "Arquitetura",
    serviceType: "arquitetura",
    image: "/images/emerson/projeto2.jpg",
    description: "Equilíbrio perfeito entre volumetria imponente e leveza visual. Esta residência explora o conceito de planos abertos, elevando a experiência do morar através de uma paleta de materiais nobres.",
    details: {
      location: "Indaiatuba, SP",
      area: "180m²",
      year: "2024"
    },
    gallery: ["/images/emerson/projeto2.jpg", "/images/emerson/projeto2img3.jpg", "/images/emerson/projeto2img2.jpg"]
  },
  {
    id: "3",
    title: "Residência Bom Sucesso",
    category: "Arquitetura",
    serviceType: "arquitetura",
    image: "/images/daiton/projeto3img2.jpg",
    description: "Segurança e estética em total harmonia. Esta residência urbana destaca-se pelo fechamento minimalista e o uso estratégico de pedra natural, garantindo privacidade sem abrir mão da sofisticação.",
    details: {
      location: "Indaiatuba, SP",
      area: "105m²",
      year: "2024"
    },
    gallery: ["/images/daiton/projeto3img2.jpg", "/images/daiton/projeto3.jpg", "/images/daiton/projeto3img3.jpg"]
  },
  {
    id: "4",
    title: "Consultoria Técnica e Aprovação",
    category: "Legalização",
    serviceType: "tecnico",
    image: "/images/projeto4.jpg",
    description: "Viabilidade e segurança técnica para projetos de alto padrão. Gestão completa do processo de aprovação e alvará, garantindo conformidade total com as normas do condomínio e prefeitura.",
    details: {
      location: "Indaiatuba, SP",
      area: "420m²",
      year: "2024"
    },
    gallery: ["/images/projeto4.jpg", "/images/projeto4-detalhe1.jpg"]
  },
  {
    id: "5",
    title: "Visualização 3D Avançada",
    category: "Visualização",
    serviceType: "arquitetura",
    image: "/images/paulo/projeto4.jpg",
    description: "A antecipação do sonho através do realismo. Modelagem fotorrealista que permite a compreensão exata de volumes, texturas e incidência solar antes mesmo do início da obra.",
    details: {
      location: "Indaiatuba, SP",
      area: "210m²",
      year: "2026"
    },
    gallery: ["/images/paulo/projeto4.jpg", "/images/paulo/projeto4img2.jpg", "/images/paulo/projeto4img3.jpg"]
  },
  {
    id: "6",
    title: "Regularização de Imóvel",
    category: "Prefeitura",
    serviceType: "tecnico",
    image: "/images/aprovacao/approve.jpg",
    description: "Transformamos a burocracia em tranquilidade. Um processo rigoroso que garante a segurança jurídica do seu patrimônio e a plena regularidade do seu imóvel perante os órgãos competentes.",
    details: {
      location: "Salto, SP",
      area: "Processo Legal",
      year: "2025"
    },
    steps: [
      "1. Análise Documental: Verificação minuciosa de matrículas e histórico do imóvel.",
      "2. Levantamento Técnico: Medição in loco (as-built) para atualização precisa da planta.",
      "3. Aprovação Final: Gestão do protocolo até a emissão do Habite-se e averbação."
    ],
    gallery: [
      "/images/aprovacao/reg-imovel.jpg", 
      "/images/aprovacao/reg-tecnica.jpg"
    ]
  },
  {
      id: "7", 
      title: "Nome do Novo Projeto",
      category: "Arquitetura",
      image: "/projects/novo-projeto/foto1.jpg", // <--- ADICIONE ESTA LINHA
      description: "Descrição do projeto...",
      gallery: [
        "/projects/novo-projeto/foto1.jpg",
        "/projects/novo-projeto/foto2.jpg",
      ],
      details: {
        location: "Indaiatuba, SP",
        area: "250m²"
      }
    }

];