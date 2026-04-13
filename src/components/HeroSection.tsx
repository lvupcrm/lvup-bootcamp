"use client";

import { motion } from "framer-motion";
import { Rocket } from "@phosphor-icons/react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center py-32">
        {/* Kick copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="text-sm md:text-base text-primary font-medium tracking-widest uppercase mb-6"
        >
          피트니스 센터 대표님을 위한 AI 부트캠프
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-8"
        >
          광고, 문의, 상담까지
          <br />
          <span className="gradient-text">AI가 대신 일하는 센터를 만드세요</span>
        </motion.h1>

        {/* Hero banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mb-8"
        >
          <img
            src="/images/hero-banner.jpeg"
            alt="피트니스 AI 자동화 시스템 미리보기"
            className="rounded-xl w-full max-w-md mx-auto"
          />
        </motion.div>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          소재 제작부터 랜딩페이지, 문의 관리, 자동 메시지까지.
          <br className="hidden sm:block" />
          하루 만에 완성하고 바로 실전에 쓸 수 있습니다.
        </motion.p>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base text-text-muted mb-10"
        >
          <span className="flex items-center gap-2">
            <span className="text-primary font-semibold">일시</span>
            5월 2일 (토) 오후 12시 ~ 6시
          </span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="flex items-center gap-2">
            <span className="text-primary font-semibold">장소</span>
            강남 부근 (확정 시 안내)
          </span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="https://tally.so/r/ob7Q6X"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary-light transition-all hover:shadow-[0_0_40px_rgba(0,191,255,0.3)]"
          >
            <Rocket size={22} weight="fill" />
            25명 한정 · 부트캠프 신청하기 →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
