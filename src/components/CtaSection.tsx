"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket } from "@phosphor-icons/react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function CtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="cta"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/8 blur-[150px]" />
      </div>

      <div ref={ref} className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            <span className="gradient-text">25명.</span>
            <br />
            이 숫자가 마감되면 끝입니다.
          </h2>

          <p className="text-lg text-text-muted mb-10 leading-relaxed">
            실습 품질을 위해 선착순 25명으로 마감합니다.
            <br className="hidden sm:block" />
            노트북만 가져오세요. 나머지는 저희가 준비합니다.
          </p>

          <a
            href="https://lvupfitness.kr/shop_view?idx=30"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary-light transition-all hover:shadow-[0_0_50px_rgba(0,191,255,0.35)]"
          >
            <Rocket size={22} weight="fill" />
            지금 바로 신청하기 →
          </a>

          <p className="mt-8 text-text-muted leading-relaxed">
            코딩 몰라도 됩니다. 노션 처음이어도 됩니다.
            <br className="hidden sm:block" />
            오늘 하루, 내 센터의 디지털 전환을 시작하세요.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
