"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="mb-1">
              <Image
                src="/images/lvup-logo.png"
                alt="LVUP"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
            <p className="text-sm text-text-muted">
              LVUP · AI 자동화 부트캠프
            </p>
          </div>
          <div className="text-sm text-text-muted text-center md:text-right">
            <p>
              &copy; {new Date().getFullYear()} LVUP. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
