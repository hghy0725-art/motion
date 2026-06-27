import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M·A·C — Macximal Lipstick Rebrand",
  description:
    "Maximum Color, Maximum Impact. M·A·C Macximal Silky Matte Lipstick 리브랜딩 소개.",
  openGraph: {
    title: "M·A·C — Macximal Lipstick Rebrand",
    description:
      "Maximum Color, Maximum Impact. M·A·C Macximal Silky Matte Lipstick 리브랜딩 소개.",
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
      <body className="bg-mac-black antialiased">{children}</body>
    </html>
  );
}
