import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

// Constantes do site. Onde não há informação confirmada, o campo fica como
// PLACEHOLDER e não é renderizado até ser preenchido com dado real.
export const site = {
  name: "Mayara Gaspareto",
  role: "Arquiteta e Engenheira Civil",
  url: "https://www.mayaragaspareto.com.br",

  // Localização e atendimento (confirmado)
  baseCity: "Indaiatuba, SP",
  servesPresencial: ["Indaiatuba", "Campinas", "Salto", "Itu"],
  servesRemote: "Projetos remotos para todo o Brasil sob consulta.",

  // Contato
  whatsapp: {
    number: WHATSAPP_NUMBER,
    display: "(19) 98610-1624",
    e164Display: "+55 19 98610-1624",
  },
  instagram: {
    handle: "@eng.mayaragaspareto",
    url: "https://instagram.com/eng.mayaragaspareto",
  },

  // Números de destaque (confirmados pela profissional)
  stats: [
    { value: "20+", label: "Projetos entregues" },
    { value: "7+", label: "Anos de experiência" },
    { value: "4", label: "Cidades atendidas" },
  ],

  // Contato profissional (confirmados)
  email: "eng.mayaragaspareto@gmail.com",
  crea: "CREA/SP 5071247704",

  // ---- PLACEHOLDERS: preencher com dados reais antes de publicar ----
  placeholders: {
    linkedin: "PLACEHOLDER_LINKEDIN_URL", // perfil no LinkedIn
    cnpj: "PLACEHOLDER_CNPJ", // se atuar como PJ (usado na política de privacidade)
  },
};

// Depoimentos de clientes reais.
// Os clientes autorizaram o uso do nome e delegaram a redação do texto.
// Recomenda-se um ok final de cada um antes de grandes divulgações.
//
// - approved:true -> aparece no site (sem etiqueta).
// - sample:true   -> aparece com etiqueta "Exemplo" (uso apenas ilustrativo).
// - sem flag       -> não aparece.
export const testimonials = [
  {
    name: "Edenilson",
    location: "Construtor · Indaiatuba",
    project: "Residência Evidências",
    projectHref: "/projeto/1",
    approved: true,
    quote:
      "Eu construo pra vender, então preciso de projeto que o comprador olha na visita e já se imagina morando ali. A Mayara entende como poucos o que faz uma casa vender, pensou cada ambiente pra impressionar. Essa girou rápido no mercado.",
  },
  {
    name: "Daiton",
    location: "Construtor · Indaiatuba",
    project: "Residência Bom Sucesso",
    projectHref: "/projeto/3",
    approved: true,
    quote:
      "Num terreno urbano o desafio era entregar privacidade sem deixar a casa pesada, porque isso afasta comprador. A Mayara resolveu no desenho e ainda cuidou de toda a parte técnica e da aprovação. Pra quem constrói pra vender, isso é tempo e dinheiro no bolso.",
  },
  {
    name: "Emerson",
    location: "Construtor · Indaiatuba",
    project: "Residência Evidências",
    projectHref: "/projeto/2",
    approved: true,
    quote:
      "O que me prendeu com a Mayara foi ela projetar pensando em quem vai comprar a casa. Planta bem resolvida, material na medida certa, sem exagero que encarece a obra e não valoriza na venda. O resultado é casa que roda no mercado.",
  },
  {
    name: "Edivaldo",
    location: "Construtor · Indaiatuba",
    project: "Residência Piemonte",
    projectHref: "/projeto/7",
    approved: true,
    quote:
      "Já é a segunda casa que faço com ela. A Mayara sabe o que o comprador procura numa fachada e numa planta, e entrega isso com a parte técnica toda no lugar. Pra construtor, trabalhar com quem entende de venda faz toda a diferença no giro.",
  },
];

// Navegação principal
export const navLinks = [
  { label: "Projetos", href: "/projetos" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Vistoria", href: "/vistoria" },
  { label: "Sobre", href: "/#sobre" },
];
