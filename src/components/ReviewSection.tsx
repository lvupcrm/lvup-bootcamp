"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const reviews = [
  {
    file: "review-1.png",
    quotes: ["AI 강의 들었어요", "제대로 사용할 수 있게 됐다", "더 잘 활용하겠습니다!"],
  },
  {
    file: "review-2.jpg",
    quotes: ["AI는 도구가 아니라 직원", "워크플로우로 실수 감소", "3단계 정리 완료!"],
  },
  {
    file: "review-3.png",
    quotes: ["노하우 감사합니다!", "돈 주고 배울 걸 무료로..", "갓준봅니다..!"],
  },
  {
    file: "review-4.jpg",
    quotes: ["피트니스에 AI 적용법", "집에서도 좋은 강의!", "멋진 강의 감사 :)"],
  },
  {
    file: "review-5.jpg",
    quotes: ["AI 안 쓰면 안 되겠구나", "쉽게 설명해줘서 좋았어요", "더 기대됩니다"],
  },
  {
    file: "review-6.png",
    quotes: ["적용 사례가 명확했다", "장단점 → 적재적소", "뜻깊은 시간 감사!"],
  },
  {
    file: "review-7.png",
    quotes: ["AI 교육 총정리 느낌", "방향에 확신이 생겼다", "유익한 시간!"],
  },
  {
    file: "review-8.jpg",
    quotes: ["생각이 바뀌었어요", "광고·문의·상담까지", "당장 자동화 가능!"],
  },
  {
    file: "review-9.jpg",
    quotes: ["기초부터 쉽게 설명", "바로 활용 가능한 강의", "노하우 아낌없이!"],
  },
  {
    file: "review-10.jpg",
    quotes: ["AI 이해도 한 스푼!", "시스템이 확실히 보였다", "감사합니다 :)"],
  },
  {
    file: "review-11.jpg",
    quotes: ["노력이 느껴지는 자료", "무조건 해야한다 느꼈다", "유익! 따라할게요"],
  },
  {
    file: "review-12.jpg",
    quotes: ["아는 것과 모르는 것의 차이", "점점 벌어질 거라 느꼈다", "인사이트 감사!"],
  },
];

const row1 = reviews.slice(0, 6);
const row2 = reviews.slice(6, 12);

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <div className="relative rounded-2xl overflow-hidden shrink-0 w-48 sm:w-56 group">
      <img
        src={`/images/${review.file}`}
        alt="수강생 후기"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/65 flex items-center justify-center p-3 sm:p-4">
        <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 sm:px-5 sm:py-4 flex flex-col items-center gap-1.5 text-center">
          {review.quotes.map((q, i) => (
            <p
              key={i}
              className="text-primary-light text-[11px] sm:text-sm font-bold leading-snug"
            >
              {q}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ReviewSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reviews" className="py-16 md:py-24 lg:py-32 overflow-hidden">
      <div ref={ref} className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-12"
        >
          <p className="text-sm text-primary font-medium tracking-widest uppercase mb-4">
            Reviews
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            실제 수강생 <span className="gradient-text">후기</span>
          </h2>
        </motion.div>
      </div>

      {/* Row 1 - slides left */}
      <div className="mb-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ x: { duration: 25, repeat: Infinity, ease: "linear" } }}
        >
          {[...row1, ...row1].map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        </motion.div>
      </div>

      {/* Row 2 - slides right */}
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <motion.div
          className="flex gap-4"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ x: { duration: 30, repeat: Infinity, ease: "linear" } }}
        >
          {[...row2, ...row2].map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
