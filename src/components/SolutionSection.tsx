"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Megaphone,
  Browser,
  Database,
  PaperPlaneTilt,
  ArrowDown,
} from "@phosphor-icons/react";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  { icon: Megaphone, label: "광고 소재 제작" },
  { icon: Browser, label: "랜딩 페이지 제작" },
  { icon: Database, label: "노션 DB 자동 저장" },
  { icon: PaperPlaneTilt, label: "알림톡 자동화" },
];

export default function SolutionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solution" className="py-16 md:py-24 lg:py-32">
      <div ref={ref} className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">
            Solution
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="gradient-text">6시간</span> 만에 이 시스템을,
            <br className="hidden sm:block" />
            직접 만듭니다.
          </h2>
        </motion.div>

        {/* Vertical flow */}
        <div className="flex flex-col items-center gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15, ease }}
                className="glass-card tech-glow px-5 sm:px-8 py-5 flex items-center gap-4 w-full sm:min-w-[280px] sm:w-auto"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <step.icon size={24} className="text-primary" weight="duotone" />
                </div>
                <span className="text-base md:text-lg font-semibold">{step.label}</span>
              </motion.div>
              {i < steps.length - 1 && (
                <ArrowDown
                  size={20}
                  className="text-primary/40 my-2"
                />
              )}
            </div>
          ))}
        </div>

        {/* Emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease }}
          className="mt-16 glass-card p-6 md:p-8 text-center"
        >
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
            남이 만들어준 시스템이 아닙니다.
            <br className="hidden sm:block" />
            <strong>내 센터 이름, 내 프로그램, 내 연락처</strong>가 들어간{" "}
            <strong>진짜 내 시스템</strong>을 직접 만들어 가져갑니다.
          </p>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0, ease }}
          className="mt-12 text-center"
        >
          <p className="text-xl md:text-2xl text-foreground/80 font-medium italic leading-relaxed">
            &ldquo;수업 들으면서 만든 랜딩페이지가 진짜 인터넷에
            <br className="hidden sm:block" />
            뜨는 걸 보고 소름 돋았어요&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
