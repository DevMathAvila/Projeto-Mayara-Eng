'use client';
import { motion } from 'framer-motion';

export default function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }} // A animação acontece apenas uma vez ao scrollar
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}