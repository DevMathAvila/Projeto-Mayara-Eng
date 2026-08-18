import { Compass, ScrollText, ClipboardCheck, Boxes } from "lucide-react";

// Serviços reais oferecidos, descritos pelo benefício prático para quem
// contrata. Sem jargão, sem lista numerada dentro do texto.
export const services = [
  {
    id: "projeto",
    icon: Compass,
    title: "Projeto de casa pra vender",
    text: "O projeto nasce pensando em quem vai comprar. Planta que agrada na visita, fachada que chama atenção e escolhas que valorizam sem inflar o custo da obra, pra você vender mais rápido e com uma margem melhor no bolso.",
    href: "/projetos",
    hrefLabel: "Ver projetos",
    waKey: "orcamento",
  },
  {
    id: "3d",
    icon: Boxes,
    title: "Estudo e maquete 3D",
    text: "Vender na planta fica muito mais fácil quando o comprador enxerga a casa pronta. A modelagem 3D fotorrealista vira material de venda e ainda antecipa decisões, o que evita retrabalho e atraso na hora de construir.",
    href: "/projetos",
    hrefLabel: "Ver exemplos",
    waKey: "duvida",
  },
  {
    id: "regularizacao",
    icon: ScrollText,
    title: "Regularização e aprovação",
    text: "Casa irregular não fecha financiamento e trava a venda na reta final. A gestão da documentação e da aprovação, do diagnóstico à averbação em cartório, mantém o negócio andando e a escritura pronta pra sair.",
    href: "/projeto/6",
    hrefLabel: "Como funciona",
    waKey: "regularizacao",
  },
  {
    id: "vistoria",
    icon: ClipboardCheck,
    title: "Vistoria técnica",
    text: "Na entrega da obra ou na compra de um terreno com benfeitoria, o laudo técnico protege o seu negócio. Relatório com fotos e descritivo de cada ponto, seguindo as normas da ABNT, pra você negociar e assinar com base em fato.",
    href: "/vistoria",
    hrefLabel: "Sobre a vistoria",
    waKey: "vistoria",
  },
];
