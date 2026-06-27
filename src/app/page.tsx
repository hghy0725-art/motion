"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplineHero from "@/components/SplineHero";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    title: "Punk",
    desc: "반항적이고 규범을 깨는 태도. 메이크업은 규칙이 아니라 표현이다.",
  },
  {
    title: "Vibrant",
    desc: "선명하고 생동감 있는 컬러. 립스틱 컬러 자체가 브랜드의 언어.",
  },
  {
    title: "Authoritarian",
    desc: "당당하고 자신감 있는 태도. 화면을 지배하는 대담한 비주얼.",
  },
];

const shades = [
  {
    name: "Ruby Woo",
    tone: "Cool Red",
    tag: "Iconic",
    desc: "블루 언더톤 레드. 아이코닉. 대담한. 세계적인 인기.",
    accent: "#BE0F1B",
  },
  {
    name: "Velvet Teddy",
    tone: "Warm Nude",
    tag: "Best Seller",
    desc: "MLBB의 대명사. 센슈얼. 로열. 모든 피부톤에 어울리는.",
    accent: "#A67B6A",
  },
  {
    name: "Russian Red",
    tone: "Cool Red",
    tag: "Heritage",
    desc: "Madonna 레전드 컬러. 1984년부터 이어진 MAC의 역사.",
    accent: "#9B1B2E",
  },
];

const rebrandPoints = [
  "Trade Gothic → Ano Bold 타이포그래피 현대화",
  "Retro Matte → Macximal Silky Matte 라인 업그레이드",
  "12시간 컬러 지속 · 실크보다 얇은 피팅감",
  "Nicola Formichetti 글로벌 크리에이티브 디렉터 영입",
  "키네틱 타이포 · 3D 모노리스 비주얼 강화",
];

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-copy > *", {
        y: 32,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.8,
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="bg-mac-black text-white">
      <Header />

      {/* Hero — Spline 3D full screen */}
      <section className="relative h-screen min-h-[640px] w-full">
        <SplineHero />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-mac-black via-transparent to-mac-black/40" />
        <div className="hero-copy absolute bottom-0 left-0 right-0 z-10 px-6 pb-16 md:px-12 lg:px-20">
          <p className="text-[10px] uppercase tracking-widest3 text-mac-gray">
            Rebrand Project 2024 — 2025
          </p>
          <h1 className="mt-3 font-display text-[clamp(4rem,14vw,11rem)] leading-[0.85] tracking-wide">
            M·A·C
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
            Maximum Color, Maximum Impact
            <br />
            Macximal Silky Matte Lipstick
          </p>
          <div className="pointer-events-auto mt-8 flex flex-wrap gap-4">
            <a
              href="#concept"
              className="border border-white px-8 py-3 text-[10px] uppercase tracking-widest2 transition-colors hover:bg-white hover:text-mac-black"
            >
              Rebrand Story
            </a>
            <a
              href="#shades"
              className="px-8 py-3 text-[10px] uppercase tracking-widest2 text-white/60 transition-colors hover:text-white"
            >
              Iconic Shades
            </a>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="overflow-hidden border-y border-mac-border py-5">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <p
              key={i}
              className="px-8 font-display text-4xl tracking-wider text-white/20 md:text-6xl"
            >
              ALL AGES · ALL RACES · ALL GENDERS · MAXIMUM COLOR · MAXIMUM
              IMPACT · RUBY WOO · VELVET TEDDY · RUSSIAN RED · VIVA GLAM ·
            </p>
          ))}
        </div>
      </section>

      {/* Concept */}
      <section id="concept" className="px-6 py-28 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="reveal grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-[10px] uppercase tracking-widest3 text-mac-red">
                Brand Credo
              </p>
              <h2 className="mt-4 font-display text-5xl leading-none tracking-wide md:text-7xl">
                ALL AGES
                <br />
                ALL RACES
                <br />
                ALL GENDERS
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-8">
              <p
                className="hidden text-[10px] uppercase tracking-widest3 lg:block lg:invisible"
                aria-hidden="true"
              >
                Brand Credo
              </p>
              <p className="text-base leading-[1.9] text-white/65 md:text-lg lg:mt-4">
                M·A·C은 1984년 토론토에서 탄생한 프리스티지 메이크업 브랜드입니다.
                립스틱은 초기부터 브랜드의 핵심이었고, Madonna 촬영에 사용된
                Russian Red로 전설이 시작되었습니다. 2024년 40주년을 맞아
                Macximal 라인으로 리뉴얼하며, 디지털·비주얼·패키징 전반을
                현대화했습니다.
              </p>
              <p className="mt-6 text-sm italic text-mac-gray">
                &ldquo;메이크업 브랜드가 아닌 문화 브랜드&rdquo;
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-px bg-mac-border md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="reveal bg-mac-black p-8 md:p-10"
              >
                <h3 className="font-display text-4xl tracking-wide text-mac-red">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {pillar.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Macximal Product */}
      <section id="shades" className="border-t border-mac-border bg-mac-surface px-6 py-28 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-widest3 text-mac-gray">
                Hero Product
              </p>
              <h2 className="mt-4 font-display text-5xl tracking-wide md:text-7xl">
                MACXIMAL
              </h2>
              <p className="mt-2 text-sm uppercase tracking-widest2 text-mac-red">
                Silky Matte Lipstick
              </p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/50">
              기존 Retro Matte를 대체하는 메인 라인. 40가지 시그니처 컬러,
              12시간 지속, 실크보다 얇은 피팅감.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {shades.map((shade, i) => (
              <article
                key={shade.name}
                className="reveal group border border-mac-border bg-mac-black p-8 transition-colors hover:border-white/30"
              >
                <div
                  className="mb-10 aspect-[3/5] transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{
                    background: `linear-gradient(180deg, ${shade.accent} 0%, #111 60%)`,
                  }}
                />
                <span className="text-[10px] uppercase tracking-widest2 text-mac-gray">
                  {shade.tag} · {shade.tone}
                </span>
                <h3 className="mt-2 font-display text-3xl tracking-wide">
                  {shade.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {shade.desc}
                </p>
                <p className="mt-6 text-[10px] text-mac-gray">0{i + 1} / 03</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Rebrand */}
      <section className="px-6 py-28 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="reveal grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-[10px] uppercase tracking-widest3 text-mac-gray">
                Rebrand Direction
              </p>
              <h2 className="mt-4 font-display text-5xl leading-none tracking-wide md:text-6xl">
                MAXIMUM
                <br />
                IMPACT
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-white/55">
                MediaMonks 디지털 플래그십 리디자인을 기반으로, 이커머스를
                브랜드 매거진으로 재정의합니다. 검은 배경 위 선명한 컬러,
                대형 키네틱 타이포, 3D 모노리스 비주얼이 새로운 MAC의 언어입니다.
              </p>
            </div>
            <ul className="space-y-0 border-t border-white">
              {rebrandPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-4 border-b border-mac-border py-5 text-sm text-white/70"
                >
                  <span className="mt-1.5 h-px w-6 shrink-0 bg-mac-red" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Viva Glam */}
      <section className="border-t border-mac-border px-6 py-28 md:px-12 lg:px-20">
        <div className="reveal mx-auto max-w-4xl text-center">
          <p className="text-[10px] uppercase tracking-widest3 text-mac-red">
            Since 1994
          </p>
          <h2 className="mt-4 font-display text-6xl tracking-wide md:text-8xl">
            VIVA GLAM
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-white/55">
            판매 수익 100% 기부. RuPaul부터 Chappell Roan까지, Viva Glam은
            MAC이 믿는 가치를 증명하는 캠페인입니다. 삶을 화려하게, 긍정적으로
            살다 — Viva la Glam.
          </p>
          <p className="mt-8 font-display text-2xl tracking-wider text-white/30">
            $545M+ DONATED
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 md:px-12 lg:px-20">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="font-display text-5xl leading-tight tracking-wide md:text-7xl">
            YOUR LIP.
            <br />
            YOUR RULE.
          </h2>
          <p className="mt-6 text-sm text-white/50">
            이 페이지는 MAC 립스틱 리브랜딩 프로젝트 소개용입니다.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 mix-blend-difference">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12 lg:px-20">
        <a href="#" className="font-display text-2xl tracking-widest text-white">
          M·A·C
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {[
            { label: "Story", href: "#concept" },
            { label: "Macximal", href: "#shades" },
            { label: "Viva Glam", href: "#concept" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[10px] uppercase tracking-widest2 text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-mac-border px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-display text-2xl tracking-widest">M·A·C</p>
        <p className="text-[10px] uppercase tracking-widest2 text-mac-gray">
          © 2026 Rebrand Showcase · Not affiliated with Estée Lauder
        </p>
      </div>
    </footer>
  );
}
