import { Compass, ScrollText, ClipboardCheck, Boxes } from "lucide-react";

// Serviços reais oferecidos, descritos pelo benefício prático para quem
// contrata. Sem jargão, sem lista numerada dentro do texto.
export const services = [
  {
    id: "projeto",
    icon: Compass,
    title: "Projeto de casa",
    text: "Do briefing à planta executiva, o projeto nasce da forma como a casa vai ser usada, seja pra morar ou pra vender. A ideia é resolver circulação, iluminação e conforto antes da obra, com escolhas que valorizam sem inflar o custo, pra construção seguir um plano claro.",
    href: "/projetos",
    hrefLabel: "Ver projetos",
    waKey: "orcamento",
  },
  {
    id: "3d",
    icon: Boxes,
    title: "Estudo e maquete 3D",
    text: "Antes de investir na construção, você enxerga a casa como ela vai ficar. A modelagem 3D fotorrealista mostra volumes, materiais e a luz nos ambientes, o que ajuda a decidir com segurança, evita retrabalho e ainda serve de material de venda.",
    href: "/projetos",
    hrefLabel: "Ver exemplos",
    waKey: "duvida",
  },
  {
    id: "regularizacao",
    icon: ScrollText,
    title: "Regularização e aprovação",
    text: "Quando a construção não bate com o que está registrado, a venda trava, o financiamento não sai e o inventário complica. A gestão da documentação e da aprovação, do diagnóstico à averbação em cartório, devolve a segurança sobre o imóvel.",
    href: "/projeto/6",
    hrefLabel: "Como funciona",
    waKey: "regularizacao",
  },
  {
    id: "vistoria",
    icon: ClipboardCheck,
    title: "Vistoria técnica",
    text: "Antes de receber as chaves, comprar um imóvel ou fechar um contrato, vale um olhar técnico. A vistoria gera um laudo detalhado, com fotos e descritivo de cada ponto, seguindo as normas da ABNT, pra você negociar e assinar com base em fatos.",
    href: "/vistoria",
    hrefLabel: "Sobre a vistoria",
    waKey: "vistoria",
  },
];
