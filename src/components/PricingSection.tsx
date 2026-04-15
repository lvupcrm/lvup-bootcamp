"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket } from "@phosphor-icons/react";

const ease = [0.16, 1, 0.3, 1] as const;

const pricingRows = [
  {
    label: "정가",
    price: "990,000",
    note: "",
    strikethrough: true,
    highlight: false,
  },
  {
    label: "1차 얼리버드",
    price: "499,000",
    note: "10명",
    strikethrough: false,
    highlight: true,
  },
  {
    label: "2차 얼리버드",
    price: "599,000",
    note: "15명",
    strikethrough: false,
    highlight: false,
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="py-16 md:py-24 lg:py-32">
      <div ref={ref} className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            직원 한 명 월급 vs.
            <br className="hidden sm:block" />
            <span className="gradient-text">24시간 일하는 시스템</span>
          </h2>
        </motion.div>

        {/* Pricing table */}
        <div className="space-y-4">
          {pricingRows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease }}
              className={`glass-card p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${
                row.highlight ? "border-primary/30 tech-glow" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg font-semibold">{row.label}</span>
                {row.note && (
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {row.note}
                  </span>
                )}
              </div>
              <div
                className={`text-3xl font-extrabold ${
                  row.strikethrough
                    ? "line-through text-text-muted"
                    : row.highlight
                    ? "gradient-text"
                    : ""
                }`}
              >
                {row.price}원
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA + 마감 안내 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="text-center mt-14"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            다음 기수부터
            <br />
            <span className="gradient-text">강의료가 인상됩니다.</span>
          </h3>

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
            하루 투자로, 매달 반복하던 수동 업무가 사라집니다.
            <br className="hidden sm:block" />
            <span className="text-primary font-semibold">
              광고 소재부터 문의 관리까지 — 전부 직접 세팅하고 가져가세요.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
