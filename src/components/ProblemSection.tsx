"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { XCircle } from "@phosphor-icons/react";

const ease = [0.16, 1, 0.3, 1] as const;

const problems = [
  "광고 돌리고 싶은데, 소재 만들 시간도 감각도 없다",
  "랜딩페이지 하나 만들려면 외주비 100만원, 수정은 또 따로",
  "문의가 들어왔는데 확인이 늦어서 이미 다른 센터로 갔다",
  "누가 이 상담을 맡았는지, 어디까지 진행됐는지 아무도 모른다",
  "상담 후 감사 메시지, 리마인드 문자… 매번 수동으로 보내고 있다",
];

export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="problem" className="py-16 md:py-24 lg:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-16"
        >
          <p className="text-sm text-danger font-medium tracking-widest uppercase mb-4">
            Problem
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            이런 경험, 한 번쯤
            <br className="hidden sm:block" />
            있지 않으셨나요?
          </h2>
        </motion.div>

        {/* 상단 3개 */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.slice(0, 3).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease }}
              className="glass-card p-4 sm:p-6 md:p-8 flex gap-4"
            >
              <XCircle
                size={28}
                weight="fill"
                className="text-danger shrink-0 mt-1"
              />
              <p className="text-base md:text-lg leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>

        {/* 하단 2개 — 중앙 정렬 */}
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {problems.slice(3).map((item, i) => (
            <motion.div
              key={i + 3}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: (i + 3) * 0.15, ease }}
              className="glass-card p-4 sm:p-6 md:p-8 flex gap-4"
            >
              <XCircle
                size={28}
                weight="fill"
                className="text-danger shrink-0 mt-1"
              />
              <p className="text-base md:text-lg leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="text-center mt-12 space-y-4"
        >
          <p className="text-text-muted text-lg">
            문의 1건을 놓치면,{" "}
            <span className="text-danger font-semibold">
              60만원짜리 PT 계약이 사라집니다.
            </span>{" "}
            한 달이면 수백만 원입니다.
          </p>
          <p className="text-lg text-foreground/80 font-medium">
            그런데 만약, 문의가 들어오는 순간 자동으로 노션에 기록되고,
            <br className="hidden sm:block" />
            메시지까지 발송된다면?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
