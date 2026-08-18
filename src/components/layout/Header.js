"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { waLink, waMessages } from "@/lib/whatsapp";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur-sm shadow-lg shadow-navy-deep/20" : "bg-navy"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative w-9 h-9 shrink-0">
            <Image src="/images/favicon/logo-brand.png" alt="Mayara Gaspareto" fill className="object-contain" priority />
          </span>
          <span className="leading-tight">
            <span className="block text-white font-semibold tracking-tight text-sm md:text-[15px] font-[family-name:var(--font-display)]">
              Mayara Gaspareto
            </span>
            <span className="block text-orange text-[10px] font-semibold uppercase tracking-[0.22em]">
              Projetos e Engenharia
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/75 hover:text-white text-[13px] font-medium tracking-wide transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={waLink(waMessages.orcamento)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange hover:bg-orange-dark text-white text-[13px] font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Falar no WhatsApp
          </a>
        </nav>

        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden overflow-hidden bg-navy-deep transition-[max-height] duration-300 ${
          open ? "max-h-96 border-t border-white/10" : "max-h-0"
        }`}
      >
        <nav className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white text-base font-medium"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={waLink(waMessages.orcamento)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 bg-orange text-white text-center font-semibold px-5 py-3 rounded-full"
          >
            Falar no WhatsApp
          </a>
          <span className="text-muted text-xs">{site.whatsapp.display}</span>
        </nav>
      </div>
    </header>
  );
}
