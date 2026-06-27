import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LUMÉRA — Comfort Derma Lab",
  description:
    "저자극 고보습 더마 케어 브랜드 LUMÉRA. 피부 본연의 편안함을 연구합니다.",
  openGraph: {
    title: "LUMÉRA — Comfort Derma Lab",
    description:
      "저자극 고보습 더마 케어 브랜드 LUMÉRA. 피부 본연의 편안함을 연구합니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
