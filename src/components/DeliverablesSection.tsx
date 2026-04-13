"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CheckCircle,
  Sparkle,
} from "@phosphor-icons/react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function DeliverablesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-surface/50">
      <div ref={ref} className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-16"
        >
          <p className="text-sm text-success font-medium tracking-widest uppercase mb-4">
            Deliverables
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            부트캠프가 끝나도,
            <br className="hidden sm:block" />
            <span className="gradient-text">시스템은 계속 돌아갑니다.</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {[
            "미등록 회원 후속 메시지 자동 발송",
            "PT 만료 임박 회원 리마인드 알림",
            "수업 후 만족도 조사 & 리뷰 요청 자동화",
            "신규 회원 환영 메시지 / 이용 안내 자동 발송",
            "휴면 회원 재방문 유도 캠페인",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="glass-card p-5 md:p-6 flex items-start gap-4"
            >
              <CheckCircle
                size={24}
                weight="fill"
                className="text-success shrink-0 mt-0.5"
              />
              <span className="text-base md:text-lg">{item}</span>
            </motion.div>
          ))}
        </div>

        {/* Expansion hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className="mt-10 glass-card p-6 md:p-8 border-accent/20 text-center"
        >
          <Sparkle
            size={28}
            weight="fill"
            className="text-accent mx-auto mb-3"
          />
          <p className="text-lg font-semibold mb-2">
            여기서 끝이 아닙니다
          </p>
          <p className="text-text-muted leading-relaxed">
            부트캠프에서 배운 노션 + Make + AI 조합으로
            <br className="hidden sm:block" />
            위 시나리오를 직접 세팅할 수 있습니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
