# 파일 저장 경로 가이드

> 무엇을 어디에 두면 좋은지 — 디자이너용 정리

프로젝트 루트(기준 폴더):

```
/Users/jihyeon/Desktop/지현/dev/motion/project1/
```

---

## 🔐 비밀 정보 (토큰)

| 저장할 것 | 경로 | GitHub 업로드 |
|-----------|------|:-------------:|
| GitHub·Vercel 토큰 | `.env.local` | ❌ 절대 안 됨 |
| 템플릿(빈 양식) | `.env.local.example` | ✅ 가능 |

```
project1/
├── .env.local              ← 토큰·배포 설정 (여기만 입력)
└── .env.local.example      ← 항목 설명용 (참고만)
```

---

## 🖼️ 웹에 보이는 이미지·영상·폰트

사이트에 **실제로 쓰이는** 파일은 `public/` 아래에 둡니다.

```
project1/
└── public/
    ├── images/
    │   ├── hero/           ← 첫 화면 배경·메인 비주얼
    │   ├── works/          ← 작업물 썸네일 (work-01.jpg 등)
    │   ├── og/             ← 링크 공유 미리보기 (1200×630)
    │   └── misc/           ← 아이콘, 장식 이미지
    ├── videos/
    │   ├── hero/           ← Hero 루프 영상 (.mp4, .webm)
    │   └── works/          ← 작업물 미리보기 영상
    ├── fonts/              ← 직접 넣는 폰트 (.woff2 권장)
    ├── lottie/             ← AE → Lottie JSON
    ├── favicon.ico         ← 브라우저 탭 아이콘
    └── apple-touch-icon.png ← iOS 홈 화면 아이콘 (180×180)
```

### 파일 이름 팁

| 용도 | 이름 예시 |
|------|-----------|
| Hero 배경 | `public/images/hero/main-bg.webp` |
| 작업물 1 | `public/images/works/project-alpha.webp` |
| OG 이미지 | `public/images/og/share-preview.jpg` |
| Hero 영상 | `public/videos/hero/intro-loop.webm` |

> **WebP** 이미지, **WebM** 영상이 가볍고 로딩이 빠릅니다.

---

## 🎨 디자인 원본 (Figma, PSD, 레퍼런스)

웹 코드와 **분리**해 두는 게 좋습니다. 용량이 커서 GitHub에 안 올라갈 수 있어요.

```
project1/
└── design/
    ├── figma-export/       ← Figma에서 뽑은 PNG/SVG
    ├── references/         ← 레퍼런스 스크린샷·URL 메모
    ├── sketches/           ← Hero 스케치, 와이어프레임
    └── brand/              ← 로고 원본, 컬러 팔레트, 폰트 파일
```

| 저장할 것 | 추천 경로 |
|-----------|-----------|
| Figma export | `design/figma-export/` |
| 레퍼런스 캡처 | `design/references/` |
| 로고 AI/SVG 원본 | `design/brand/logo/` |
| 컬러·폰트 가이드 | `design/brand/` |

---

## 📝 작업물(Works) 텍스트·목록

이미지는 `public/images/works/`, **글(제목·설명)** 은 코드 쪽 데이터 파일에 적습니다.

```
project1/
└── src/
    └── data/
        └── works.ts        ← 작업물 제목, 설명, 이미지 경로 목록
```

예시 (나중에 코드 만들 때):

```
썸네일: public/images/works/project-alpha.webp
텍스트: src/data/works.ts 에서 "제목", "설명" 입력
```

---

## 📋 기획·메모 문서

```
project1/
├── PLAN.md                 ← 전체 프로젝트 계획
├── PATHS.md                ← 이 파일 (경로 가이드)
└── docs/
    └── notes.md            ← 회의 메모, 수정 요청, TODO
```

---

## 🚀 배포·설정 관련 (건드릴 일 적음)

```
project1/
├── .gitignore              ← .env.local 등 업로드 금지 목록
├── next.config.ts          ← Next.js 설정 (나중에 생성)
├── package.json            ← 사용 라이브러리 목록 (나중에 생성)
└── .vercel/                ← Vercel 연결 정보 (자동 생성, 업로드 ❌)
```

---

## ❌ GitHub에 올리면 안 되는 것

| 경로 | 이유 |
|------|------|
| `.env.local` | 토큰·비밀키 |
| `.vercel/` | Vercel 내부 설정 |
| `node_modules/` | 용량 큼, 자동 설치됨 |
| `design/` (선택) | 원본 파일이 크면 `.gitignore`에 추가 |

---

## ✅ 한눈에 — “이 파일 어디에?”

| 넣고 싶은 것 | 저장 경로 |
|--------------|-----------|
| GitHub / Vercel 토큰 | `.env.local` |
| Hero 이미지 | `public/images/hero/` |
| 작업물 썸네일 | `public/images/works/` |
| 루프 영상 | `public/videos/` |
| 웹폰트 파일 | `public/fonts/` |
| Lottie 애니메이션 | `public/lottie/` |
| OG·공유 미리보기 | `public/images/og/` |
| 파비콘 | `public/favicon.ico` |
| Figma export | `design/figma-export/` |
| 레퍼런스 | `design/references/` |
| 작업물 제목·설명 | `src/data/works.ts` (코드 생성 후) |

---

*프로젝트 세팅 후 위 폴더들이 자동으로 만들어집니다.*
