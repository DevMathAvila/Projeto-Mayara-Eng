'use client';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloating() {
  return (
    <motion.a
      href="https://wa.me/5519994092433" // Substitua pelo seu número real
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20ba5a] transition-colors"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp size={28} />
      {/* Tooltip opcional que aparece no hover */}
      <span className="absolute right-16 bg-white text-dark-text text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md shadow-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Fale comigo
      </span>
    </motion.a>
  );
}