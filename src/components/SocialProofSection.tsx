"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Buildings, Robot, ChartLineUp } from "@phosphor-icons/react";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  {
    icon: Buildings,
    value: "2개 지점",
    label: "운영",
    desc: "둔전점 · 고림점",
  },
  {
    icon: Robot,
    value: "자동화",
    label: "파이프라인",
    desc: "상담 문의 → 노션 DB 자동 적재 → 카카오 알림톡 자동 발송",
  },
  {
    icon: ChartLineUp,
    value: "통합",
    label: "관리 시스템",
    desc: "리드 관리, 상담 현황, 트레이너별 KPI까지 한 곳에서 관리",
  },
];

export default function SocialProofSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-surface/50">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">
            Social Proof
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            이미 작동 중인
            <br className="hidden sm:block" />
            <span className="gradient-text">시스템입니다.</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease }}
              className="glass-card p-8 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon size={28} className="text-primary" weight="duotone" />
              </div>
              <div className="text-3xl font-extrabold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-text-muted">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Transition copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="text-center text-lg text-text-muted leading-relaxed mb-16"
        >
          이 부트캠프는 이론이 아닙니다.
          <br className="hidden sm:block" />
          실제로 매일 돌아가는 시스템을 만든 사람이, 그 시스템을 그대로 알려드립니다.
        </motion.p>

        {/* Instructor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="glass-card p-6 md:p-8 lg:p-10 lg:flex lg:items-center lg:gap-10"
        >
          <img
            src="/images/profile.jpg"
            alt="심준보"
            className="w-36 h-48 sm:w-44 sm:h-56 lg:w-52 lg:h-64 rounded-2xl object-cover object-top mx-auto lg:mx-0 mb-6 lg:mb-0 shrink-0"
          />
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h3 className="text-xl font-bold">심준보</h3>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  STAY FITNESS
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  LVUP
                </span>
              </div>
            </div>
            <ul className="text-text-muted leading-relaxed space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5 shrink-0">—</span>
                피트니스센터 2개 지점 운영
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5 shrink-0">—</span>
                노션·AI 시스템 구축 컨설팅
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5 shrink-0">—</span>
                노션 템플릿 제작 &amp; 판매
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5 shrink-0">—</span>
                웰링크 서비스 선행 POC 서비스 개발
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
