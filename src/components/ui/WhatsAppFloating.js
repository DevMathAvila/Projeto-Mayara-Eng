"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { waLink, waMessages } from "@/lib/whatsapp";

export default function WhatsAppFloating() {
  const [hover, setHover] = useState(false);

  return (
    <motion.a
      href={waLink(waMessages.floating)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="fixed bottom-6 right-6 z-[60] flex items-center gap-3 bg-[#25D366] hover:bg-[#1eb457] text-white rounded-full shadow-xl shadow-black/20 pl-4 pr-5 py-3.5 transition-colors"
    >
      <FaWhatsapp size={24} />
      <motion.span
        initial={false}
        animate={{ width: hover ? "auto" : 0, opacity: hover ? 1 : 0 }}
        className="overflow-hidden whitespace-nowrap text-sm font-semibold hidden sm:block"
      >
        Fale comigo
      </motion.span>
    </motion.a>
  );
}
