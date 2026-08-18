"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { track } from "@vercel/analytics";
import { sendGAEvent } from "@next/third-parties/google";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

const tipos = [
  "Projeto de casa para vender",
  "Projeto de casa para morar",
  "Estudo / maquete 3D",
  "Regularização e aprovação",
  "Vistoria técnica",
  "Ainda não sei / outro",
];

export default function LeadForm() {
  const router = useRouter();
  const [form, setForm] = useState({ nome: "", telefone: "", tipo: tipos[0], mensagem: "" });
  const [sending, setSending] = useState(false);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.telefone.trim()) return;
    setSending(true);

    // Evento de conversão (o lead do formulário).
    track("lead_submit", { tipo: form.tipo });
    try {
      sendGAEvent("event", "lead_submit", { tipo: form.tipo });
    } catch {
      // GA não configurado; ignora
    }

    // Gancho para registro futuro por e-mail/CRM (não bloqueia o envio).
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {
      // segue mesmo se o gancho falhar; o WhatsApp é o canal principal
    }

    // Monta a mensagem e abre a conversa no WhatsApp com tudo preenchido.
    const texto =
      `Olá, Mayara! Meu nome é ${form.nome}.` +
      `\nTelefone: ${form.telefone}` +
      `\nInteresse: ${form.tipo}` +
      (form.mensagem.trim() ? `\n\n${form.mensagem.trim()}` : "");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    router.push("/obrigado");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Seu nome" required>
          <input
            name="nome"
            value={form.nome}
            onChange={update}
            required
            placeholder="Como posso te chamar?"
            className="form-input"
          />
        </Field>
        <Field label="WhatsApp / telefone" required>
          <input
            name="telefone"
            value={form.telefone}
            onChange={update}
            required
            inputMode="tel"
            placeholder="(19) 90000-0000"
            className="form-input"
          />
        </Field>
      </div>

      <Field label="O que você precisa">
        <select name="tipo" value={form.tipo} onChange={update} className="form-input">
          {tipos.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </Field>

      <Field label="Conte um pouco (opcional)">
        <textarea
          name="mensagem"
          value={form.mensagem}
          onChange={update}
          rows={3}
          placeholder="Local do imóvel, tamanho, prazo, o que já tem em mente..."
          className="form-input resize-none"
        />
      </Field>

      <button
        type="submit"
        disabled={sending}
        className="w-full bg-orange hover:bg-orange-dark disabled:opacity-60 text-white font-semibold py-3.5 rounded-full transition-colors"
      >
        {sending ? "Preparando sua mensagem..." : "Continuar no WhatsApp"}
      </button>
      <p className="text-xs text-ink/50 text-center">
        Seus dados vão direto para a Mayara. Sem cadastro, sem spam.
      </p>

      <style jsx>{`
        :global(.form-input) {
          width: 100%;
          border: 1px solid rgba(22, 32, 46, 0.14);
          border-radius: 0.75rem;
          padding: 0.7rem 0.9rem;
          font-size: 0.95rem;
          color: #16202e;
          background: #fff;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        :global(.form-input:focus) {
          outline: none;
          border-color: #ff6a3d;
          box-shadow: 0 0 0 3px rgba(255, 106, 61, 0.15);
        }
      `}</style>
    </form>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block text-[13px] font-semibold text-navy mb-1.5">
        {label}
        {required && <span className="text-orange"> *</span>}
      </span>
      {children}
    </label>
  );
}
