"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket } from "@phosphor-icons/react";

export default function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
        >
          <a
            href="https://tally.so/r/ob7Q6X"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold text-base shadow-[0_4px_30px_rgba(0,191,255,0.4)] hover:bg-primary-light hover:shadow-[0_4px_50px_rgba(0,191,255,0.55)] transition-all"
          >
            <Rocket size={20} weight="fill" />
            부트캠프 신청하기 →
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
