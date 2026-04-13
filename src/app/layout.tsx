import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: [
    {
      path: "../fonts/PretendardVariable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LVUP Bootcamp | AI 자동화 부트캠프",
  description:
    "피트니스 센터 대표를 위한 AI 자동화 부트캠프. 6시간 만에 광고소재→랜딩페이지→노션 CRM→자동 메시지까지 완성하는 실습형 부트캠프.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} antialiased`}>{children}</body>
    </html>
  );
}
