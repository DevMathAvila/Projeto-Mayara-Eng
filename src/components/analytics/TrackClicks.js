"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";
import { sendGAEvent } from "@next/third-parties/google";

// Envia o evento para o Vercel Analytics e, se o GA4 estiver ativo, também
// para o Google Analytics. sendGAEvent é seguro mesmo sem o GA carregado.
function report(name, params) {
  track(name, params);
  try {
    sendGAEvent("event", name, params);
  } catch {
    // GA não configurado; ignora
  }
}

// Rastreia cliques de conversão em toda a página, sem precisar transformar cada
// link em client component. Escuta cliques em links de WhatsApp, telefone,
// e-mail e Instagram e envia eventos para o Vercel Analytics.
export default function TrackClicks() {
  const pathname = usePathname();

  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";

      if (href.includes("wa.me")) report("whatsapp_click", { path: pathname });
      else if (href.startsWith("tel:")) report("phone_click", { path: pathname });
      else if (href.startsWith("mailto:")) report("email_click", { path: pathname });
      else if (href.includes("instagram.com")) report("instagram_click", { path: pathname });
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, [pathname]);

  return null;
}
