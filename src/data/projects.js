// Projetos reais. Título, categoria, local, área, ano e imagens são dados
// verídicos preservados do acervo. As descrições foram reescritas em tom mais
// direto, sem adicionar fatos que não estejam confirmados.
export const projects = [
  {
    id: "1",
    title: "Residência Evidências",
    category: "Arquitetura",
    serviceType: "arquitetura",
    image: "/images/denis/projeto1.webp",
    summary: "Residência de 180m² pensada para conectar os ambientes internos ao quintal e trazer luz natural para o dia a dia.",
    description:
      "Projeto residencial de 180m² em Indaiatuba com foco na continuidade entre a área interna e o quintal. A planta abre os ambientes sociais para o exterior e trabalha materiais naturais para deixar a casa acolhedora sem abrir mão de uma leitura contemporânea.",
    details: { location: "Indaiatuba, SP", area: "180m²", year: "2025" },
    gallery: [
      "/images/denis/projeto1.webp",
      "/images/denis/projeto1img2.webp",
      "/images/denis/projeto1img3.webp",
    ],
  },
  {
    id: "2",
    title: "Residência Evidências",
    category: "Arquitetura",
    serviceType: "arquitetura",
    image: "/images/emerson/projeto2.webp",
    summary: "Casa de 180m² com volumetria marcante e planta aberta, equilibrando presença e leveza na fachada.",
    description:
      "Residência de 180m² em Indaiatuba que parte de uma volumetria imponente, mas resolvida com planos abertos para manter a sensação de leveza. A paleta de materiais foi escolhida para valorizar a experiência dos ambientes sociais.",
    details: { location: "Indaiatuba, SP", area: "180m²", year: "2024" },
    gallery: [
      "/images/emerson/projeto2.webp",
      "/images/emerson/projeto2img3.jpg",
      "/images/emerson/projeto2img2.webp",
    ],
  },
  {
    id: "3",
    title: "Residência Bom Sucesso",
    category: "Arquitetura",
    serviceType: "arquitetura",
    image: "/images/daiton/projeto3img2.webp",
    summary: "Casa urbana de 105m² com fechamento minimalista e pedra natural para garantir privacidade sem pesar a fachada.",
    description:
      "Residência urbana de 105m² em Indaiatuba onde a privacidade foi resolvida pelo desenho, e não por muros altos. O fechamento minimalista e o uso pontual de pedra natural mantêm a casa reservada e ao mesmo tempo bem resolvida esteticamente.",
    details: { location: "Indaiatuba, SP", area: "105m²", year: "2024" },
    gallery: [
      "/images/daiton/projeto3img2.webp",
      "/images/daiton/projeto3.jpg",
      "/images/daiton/projeto3img3.jpg",
    ],
  },
  {
    id: "4",
    title: "Residência Maria Candida",
    category: "Arquitetura",
    serviceType: "arquitetura",
    image: "/images/candida/projeto4img2.webp",
    summary: "Projeto de 200m² com gestão completa da aprovação junto ao condomínio e à prefeitura.",
    description:
      "Projeto residencial de 200m² em Indaiatuba conduzido do desenho até a aprovação. Além do projeto em si, o trabalho incluiu a gestão do processo de alvará e a conformidade com as normas do condomínio e da prefeitura, para que a obra começasse com tudo em ordem.",
    details: { location: "Indaiatuba, SP", area: "200m²", year: "2024" },
    gallery: [
      "/images/candida/projeto4img2.webp",
      "/images/candida/projeto4img3.webp",
      "/images/candida/projeto4.webp",
    ],
  },
  {
    id: "5",
    title: "Residência Salto",
    category: "Arquitetura",
    serviceType: "arquitetura",
    image: "/images/paulo/projeto4.webp",
    summary: "Casa de 140m² em Salto com estudo 3D fotorrealista para visualizar volumes e luz antes da obra.",
    description:
      "Residência de 140m² em Salto apresentada com modelagem 3D fotorrealista. Antes de qualquer tijolo, os moradores puderam entender volumes, texturas e a incidência de sol nos ambientes, o que reduz surpresas e ajuda a tomar decisões com segurança.",
    details: { location: "Salto, SP", area: "140m²", year: "2026" },
    gallery: [
      "/images/paulo/projeto4.webp",
      "/images/paulo/projeto4img2.jpg",
      "/images/paulo/projeto4img3.webp",
    ],
  },
  {
    id: "6",
    title: "Regularização de Imóvel",
    category: "Regularização",
    serviceType: "tecnico",
    isSpecial: true,
    image: "/images/aprovacao/approve.jpg",
    summary: "Gestão técnica para transformar irregularidades em segurança jurídica, do diagnóstico à averbação em cartório.",
    description:
      "A regularização de um imóvel é o que protege o seu patrimônio no papel. O trabalho aqui é técnico e conduzido de ponta a ponta: partindo do diagnóstico da documentação, passando pelo levantamento da construção real e chegando até a averbação em cartório, para que o imóvel fique em conformidade e sem pendências.",
    details: {
      location: "Indaiatuba e região",
      area: "Consultoria técnica",
      year: "2025",
    },
    risks: [
      "Impedimento de venda por meio de financiamento bancário.",
      "Risco de multas administrativas pela prefeitura.",
      "Dificuldades em processos de inventário ou partilha de bens.",
      "Impossibilidade de obter alvará de funcionamento para comércios.",
    ],
    steps: [
      {
        title: "Diagnóstico documental",
        desc: "Análise da matrícula e do histórico do imóvel junto aos órgãos competentes.",
      },
      {
        title: "Levantamento as-built",
        desc: "Medição técnica no local para atualizar a planta conforme a realidade construída.",
      },
      {
        title: "Protocolo de aprovação",
        desc: "Condução da tramitação burocrática até a emissão do habite-se.",
      },
      {
        title: "Segurança final",
        desc: "Suporte para a averbação no cartório de registro de imóveis, garantindo a regularidade.",
      },
    ],
    gallery: ["/images/aprovacao/reg-imovel.jpg", "/images/aprovacao/reg-tecnica.jpg"],
  },
  {
    id: "7",
    title: "Residência Piemonte",
    category: "Arquitetura",
    serviceType: "arquitetura",
    image: "/images/piemonte/Projeto6.jpeg",
    summary: "Térrea moderna em condomínio de alto padrão, com iluminação LED linear e fachada bem resolvida.",
    description:
      "Fachada de casa térrea moderna em condomínio de alto padrão, de 180m² em Indaiatuba. O projeto autoral trabalha iluminação em LED linear e garagem para dois carros, compondo uma frente limpa e bem iluminada à noite.",
    details: { location: "Indaiatuba, SP", area: "180m²", year: "2025" },
    gallery: [
      "/images/piemonte/Projeto6.jpeg",
      "/images/piemonte/Projeto6img2.jpeg",
      "/images/piemonte/Projeto6img3.jpeg",
    ],
  },
];

export const projectCategories = ["Todos", "Arquitetura", "Regularização"];
