"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "@phosphor-icons/react";

const ease = [0.16, 1, 0.3, 1] as const;

const curriculum = [
  {
    time: "20분",
    part: "오프닝",
    title: "강사 소개 + 부트캠프 개요 + 완성물 미리보기",
    desc: "",
    deliverable: "오늘의 목표 확인",
    peak: false,
  },
  {
    time: "50분",
    part: "Part 1",
    title: "광고소재 제작",
    desc: "AI 활용 카드뉴스/리스 제작",
    deliverable: "내 센터 광고 소재",
    peak: false,
  },
  {
    time: "60분",
    part: "Part 2",
    title: "AI로 랜딩페이지 제작 + 실제 배포",
    desc: "",
    deliverable: "내 센터 랜딩페이지 URL",
    peak: true,
  },
  {
    time: "60분",
    part: "Part 3",
    title: "노션 리드 관리 시스템 구축",
    desc: "",
    deliverable: "노션 CRM 데이터베이스",
    peak: false,
  },
  {
    time: "50분",
    part: "Part 4",
    title: "노션 시스템 연동",
    desc: "폼 → DB 자동 저장",
    deliverable: "자동 저장 시스템",
    peak: false,
  },
  {
    time: "50분",
    part: "Part 5",
    title: "메시지 자동화 세팅",
    desc: "이메일 + 카톡 알림톡",
    deliverable: "자동 메시지 시스템",
    peak: true,
  },
  {
    time: "30분",
    part: "Part 6",
    title: "전체 파이프라인 라이브 테스트",
    desc: "",
    deliverable: "풀 시스템 작동 확인",
    peak: true,
  },
  {
    time: "20분",
    part: "마무리",
    title: "확장 팁 + Q&A",
    desc: "",
    deliverable: "가이드 자료 수령",
    peak: false,
  },
];

export default function CurriculumSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="curriculum" className="py-16 md:py-24 lg:py-32">
      <div ref={ref} className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">
            Curriculum
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            6시간, 이렇게 진행됩니다.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-6">
            {curriculum.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                className="relative pl-12 md:pl-16"
              >
                {/* Dot */}
                <div
                  className="absolute left-2.5 md:left-4.5 top-2 w-3 h-3 rounded-full border-2 bg-primary border-primary shadow-[0_0_12px_rgba(0,191,255,0.4)]"
                />

                <div
                  className={`glass-card p-5 md:p-6 ${
                    item.peak ? "border-primary/20 tech-glow" : ""
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs text-text-muted font-mono">
                      {item.time}
                    </span>
                    {item.part && (
                      <span className="text-xs text-primary font-semibold">
                        {item.part}
                      </span>
                    )}
                    {item.peak && (
                      <Star
                        size={14}
                        weight="fill"
                        className="text-gold"
                      />
                    )}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-1">
                    {item.title}
                  </h3>
                  {item.desc && (
                    <p className="text-sm text-text-muted">{item.desc}</p>
                  )}
                  {item.deliverable && (
                    <p className="text-xs text-primary/80 mt-2 font-medium">
                      → 완성물: {item.deliverable}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Peak moment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0, ease }}
          className="mt-12 glass-card p-6 md:p-8 border-primary/20 text-center"
        >
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
            마지막 30분, 내가 만든 랜딩페이지에서 직접 폼을 제출하면
            <br className="hidden sm:block" />
            노션에 기록되고, 내 메일함에 자동 메시지가 도착합니다.
            <br className="hidden sm:block" />
            <strong>그 순간의 짜릿함을 직접 경험하세요.</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
