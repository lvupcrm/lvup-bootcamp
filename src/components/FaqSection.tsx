"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";

const ease = [0.16, 1, 0.3, 1] as const;

const faqs = [
{
    q: "노트북 없으면 태블릿으로 참여할 수 있나요?",
    a: "죄송합니다. 실습 특성상 노트북(Windows/Mac) 지참이 필수입니다. 노션, Make 등 여러 창을 동시에 사용해야 하기 때문입니다.",
  },
  {
    q: "부트캠프 후 혼자서도 유지/확장할 수 있나요?",
    a: "네, 모든 템플릿 + 블루프린트 + 녹화본 + 카카오 연동 가이드를 드립니다. 현장에서 만든 시스템은 바로 실전 투입 가능합니다.",
  },
  {
    q: "노션이나 Make를 한 번도 써본 적 없는데 괜찮나요?",
    a: "전혀 문제 없습니다. 계정 생성부터 세팅까지 하나하나 같이 진행합니다. 처음 접하시는 분 기준으로 커리큘럼을 설계했습니다.",
  },
  {
    q: "이미 운영 중인 센터에도 적용할 수 있나요?",
    a: "오히려 운영 중인 센터에 더 효과적입니다. 기존에 들어오는 문의를 바로 자동화할 수 있어서 당일부터 실전 적용이 가능합니다.",
  },
  {
    q: "만들어진 시스템에 추가 비용이 드나요?",
    a: "노션은 Plus 요금제, Make는 무료 플랜으로 충분합니다. 알림톡 발송 비용(건당 13원)만 실사용 시 발생합니다.",
  },
];

function FaqItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left"
      >
        <span className="text-base md:text-lg font-semibold pr-4">
          {faq.q}
        </span>
        <CaretDown
          size={20}
          className={`text-text-muted shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            <p className="px-5 md:px-6 pb-5 md:pb-6 text-text-muted leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="py-16 md:py-24 lg:py-32 bg-surface/50">
      <div ref={ref} className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            자주 묻는 질문
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease }}
            >
              <FaqItem faq={faq} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
