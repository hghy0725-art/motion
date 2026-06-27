"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: "Ceramide Barrier Cream",
    tag: "고보습",
    desc: "장벽 강화 세라마이드 복합체",
  },
  {
    name: "Gentle Foam Cleanser",
    tag: "저자극",
    desc: "pH 밸런스 약산성 클렌저",
  },
  {
    name: "Derma Relief Serum",
    tag: "진정",
    desc: "판테놀 · 마데카소사이드 함유",
  },
];

const ingredients = [
  { label: "Ceramide NP", value: "2.5%" },
  { label: "Panthenol", value: "5.0%" },
  { label: "Madecassoside", value: "0.3%" },
  { label: "Squalane", value: "8.0%" },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(".hero-visual", {
        scale: 1.05,
        opacity: 0,
        duration: 1.6,
        ease: "power2.out",
        delay: 0.5,
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 48,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={heroRef}>
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen px-6 pb-20 pt-28 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="hero-line mb-4 text-xs uppercase tracking-widest2 text-sand-500">
              Comfort Derma by Lab
            </p>
            <h1 className="hero-line font-serif text-5xl font-light leading-[1.05] text-ink-900 md:text-7xl lg:text-8xl">
              LUMÉRA
            </h1>
            <p className="hero-line mt-6 max-w-md text-base leading-relaxed text-sand-600 md:text-lg">
              피부 본연의 편안함을 찾아주는
              <br />
              저자극 고보습 더마 케어
            </p>
            <div className="hero-line mt-10 flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center border border-ink-900 px-8 py-3 text-xs uppercase tracking-widest2 transition-colors hover:bg-ink-900 hover:text-cream-50"
              >
                Collection
              </a>
              <a
                href="#concept"
                className="inline-flex items-center px-8 py-3 text-xs uppercase tracking-widest2 text-sand-600 transition-colors hover:text-ink-900"
              >
                Our Lab
              </a>
            </div>
          </div>

          {/* Spline 3D / Video — MP4 넣으면 자동 재생 */}
          <div className="hero-visual order-1 lg:order-2">
            <HeroVisual />
            <p className="mt-3 text-center text-[10px] uppercase tracking-widest2 text-sand-400">
              Spline에서 export한 MP4 → public/videos/hero/
            </p>
          </div>
        </div>
      </section>

      {/* Concept */}
      <section id="concept" className="border-t border-cream-200 px-6 py-28 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="reveal grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-widest2 text-sand-500">
                Brand Concept
              </p>
              <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-ink-900 md:text-5xl">
                Comfort
                <br />
                Derma Lab
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base leading-[1.9] text-sand-600 md:text-lg">
                LUMÉRA는 연구소에서 시작된 더마 사이언스 브랜드입니다.
                고기능 성분과 저자극 포뮬러의 균형을 통해, 피부가 스스로
                건강해지는 환경을 만듭니다. 사선의 조형은 과학적 정밀함을,
                부드러운 곡선은 피부에 닿는 편안함을 상징합니다.
              </p>
              <ul className="mt-10 space-y-3 border-t border-cream-200 pt-10">
                {["브랜드 컨셉 개발", "패키지 디자인", "3D 모션 비주얼"].map(
                  (item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-ink-800"
                    >
                      <span className="h-px w-6 bg-sand-400" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-cream-100 px-6 py-28 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="reveal mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-widest2 text-sand-500">
                Product Line
              </p>
              <h2 className="mt-4 font-serif text-4xl font-light text-ink-900 md:text-5xl">
                Collection
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-sand-600">
              연구 차트에서 영감을 받은 정돈된 레이아웃과
              라인별 핵심 성분을 강조한 라벨 디자인.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product, i) => (
              <article
                key={product.name}
                className="reveal group cursor-pointer border border-cream-200 bg-cream-50 p-8 transition-colors hover:border-sand-400"
              >
                <div className="mb-12 aspect-[3/4] bg-gradient-to-b from-cream-200 to-cream-100 transition-transform duration-500 group-hover:scale-[1.02]" />
                <span className="text-[10px] uppercase tracking-widest2 text-sand-500">
                  {product.tag}
                </span>
                <h3 className="mt-2 font-serif text-2xl font-light text-ink-900">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm italic text-sand-500">
                  {product.desc}
                </p>
                <p className="mt-6 text-[10px] text-sand-400">
                  0{i + 1} / 03
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="px-6 py-28 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="reveal grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-widest2 text-sand-500">
                Key Ingredients
              </p>
              <h2 className="mt-4 font-serif text-4xl font-light text-ink-900">
                Lab Formula
              </h2>
            </div>
            <div className="space-y-0 border-t border-ink-900">
              {ingredients.map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between border-b border-cream-200 py-5"
                >
                  <span className="font-serif text-xl italic text-ink-800">
                    {item.label}
                  </span>
                  <span className="text-xs uppercase tracking-widest2 text-sand-500">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Motion showcase — Spline 브랜드 모션 */}
      <section className="px-6 py-8 md:px-12 lg:px-20">
        <div className="reveal mx-auto max-w-7xl">
          <MotionVisual />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 md:px-12 lg:px-20">
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-widest2 text-sand-500">
            Coming Soon
          </p>
          <h2 className="mt-6 font-serif text-4xl font-light leading-tight text-ink-900 md:text-6xl">
            Your skin,
            <br />
            naturally comforted.
          </h2>
          <form
            className="mx-auto mt-12 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="이메일을 입력하세요"
              className="flex-1 border border-cream-200 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-ink-900"
            />
            <button
              type="submit"
              className="border border-ink-900 bg-ink-900 px-8 py-3 text-xs uppercase tracking-widest2 text-cream-50 transition-colors hover:bg-transparent hover:text-ink-900"
            >
              Notify Me
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-cream-200/80 bg-cream-50/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12 lg:px-20">
        <a
          href="#"
          className="font-serif text-xl tracking-wide text-ink-900"
        >
          LUMÉRA
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {[
            { label: "Concept", href: "#concept" },
            { label: "Collection", href: "#products" },
            { label: "Lab", href: "#concept" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[10px] uppercase tracking-widest2 text-sand-600 transition-colors hover:text-ink-900"
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
    <footer className="border-t border-cream-200 px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-serif text-lg text-ink-900">LUMÉRA</p>
        <p className="text-[10px] uppercase tracking-widest2 text-sand-400">
          © 2026 LUMÉRA. Temporary brand showcase.
        </p>
      </div>
    </footer>
  );
}

function HeroVisual() {
  const [ready, setReady] = useState(false);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream-200 md:aspect-square">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setReady(true)}
        onError={() => setReady(false)}
      >
        <source src="/videos/hero/intro-loop.mp4" type="video/mp4" />
      </video>
      {!ready && <SplinePlaceholder />}
    </div>
  );
}

function MotionVisual() {
  const [ready, setReady] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-cream-200">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setReady(true)}
        onError={() => setReady(false)}
      >
        <source src="/videos/works/brand-motion.mp4" type="video/mp4" />
      </video>
      {!ready && <SplinePlaceholder label="Spline 브랜드 모션" />}
    </div>
  );
}

function SplinePlaceholder({ label = "Spline 3D" }: { label?: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-cream-100 via-cream-200 to-sand-400/30">
      <div className="relative h-32 w-32">
        <div className="absolute inset-0 animate-pulse rounded-full border border-sand-400/40" />
        <div
          className="absolute inset-4 animate-spin rounded-full border border-dashed border-sand-500/50"
          style={{ animationDuration: "12s" }}
        />
        <div className="absolute inset-8 rounded-full bg-cream-50/80 shadow-inner" />
      </div>
      <p className="mt-8 text-[10px] uppercase tracking-widest2 text-sand-500">
        {label}
      </p>
      <p className="mt-2 text-xs text-sand-400">
        public/videos/ 에 MP4를 넣으면 자동 재생
      </p>
    </div>
  );
}
