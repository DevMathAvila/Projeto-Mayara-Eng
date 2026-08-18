// Número oficial de WhatsApp (atualizado): 19 98610-1624
export const WHATSAPP_NUMBER = "5519986101624";

// Mensagens contextuais por origem do clique. A intenção muda conforme
// onde a pessoa está no site: explorar no topo, tirar dúvida no meio,
// pedir orçamento no fim.
export const waMessages = {
  hero: "Olá, Mayara! Vi seu site e queria conhecer melhor seu trabalho de arquitetura e engenharia.",
  floating: "Olá, Mayara! Vim pelo site e queria tirar uma dúvida com você.",
  duvida: "Olá, Mayara! Estou pensando em um projeto e tenho algumas dúvidas. Pode me ajudar?",
  orcamento: "Olá, Mayara! Gostaria de solicitar um orçamento para o meu projeto.",
  regularizacao: "Olá, Mayara! Preciso regularizar um imóvel e queria entender como você conduz o processo.",
  vistoria: "Olá, Mayara! Tenho interesse em uma vistoria técnica. Pode me passar mais detalhes?",
};

// Monta o link do WhatsApp com a mensagem já preenchida.
export function waLink(message = waMessages.floating) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

// Mensagem específica para um projeto ("quero algo parecido com este").
export function waProjectLink(projectTitle) {
  return waLink(
    `Olá, Mayara! Vi o projeto "${projectTitle}" no seu site e queria conversar sobre algo parecido.`
  );
}
