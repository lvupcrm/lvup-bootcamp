"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "문제", href: "#problem" },
  { label: "솔루션", href: "#solution" },
  { label: "커리큘럼", href: "#curriculum" },
  { label: "가격", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#">
          <Image
            src="/images/lvup-logo.png"
            alt="LVUP"
            width={36}
            height={36}
            className="w-9 h-9"
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://tally.so/r/ob7Q6X" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-light transition-colors"
          >
            신청하기
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface border-b border-white/5 px-6 pb-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://tally.so/r/ob7Q6X" target="_blank" rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block text-center px-5 py-4 rounded-full bg-primary text-white font-semibold"
          >
            신청하기
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
