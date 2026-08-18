import { NextResponse } from "next/server";

// Endpoint de captação de lead.
//
// PLACEHOLDER DE INTEGRAÇÃO: hoje o formulário do site já entrega o lead
// direto no WhatsApp da Mayara (abrindo a conversa com a mensagem preenchida).
// Esta rota existe como gancho para, no futuro, também registrar o lead por
// e-mail ou CRM. Para ativar, plugue aqui um serviço (ex.: Resend, Formspree,
// planilha, etc.) usando uma variável de ambiente com a chave/segredo.
export async function POST(request) {
  try {
    const data = await request.json();
    const { nome, telefone } = data || {};

    if (!nome || !telefone) {
      return NextResponse.json(
        { ok: false, error: "Nome e telefone são obrigatórios." },
        { status: 400 }
      );
    }

    // TODO: enviar o lead por e-mail / CRM aqui.
    // Enquanto não há integração, apenas registramos no log do servidor.
    console.log("[lead] Novo contato recebido:", data);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Requisição inválida." }, { status: 400 });
  }
}
