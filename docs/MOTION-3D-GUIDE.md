# 3D 모션 만들기 — 디자이너용 가이드

> [오세븐 일리윤](https://ohseven.co.kr/work/ILLIYOON/)처럼 웹에 올릴 3D 모션을 만드는 전체 흐름

---

## 한 줄 요약

```
3D 툴에서 만든다 → MP4(또는 WebM)로 뽑는다 → public/videos/ 에 넣는다 → 웹에 자동 재생
```

코드로 3D를 직접 짤 필요는 **없어요**.  
일리윤 페이지도 **미리 만든 영상 파일**을 `<video>`로 꽂은 방식입니다.

---

## 전체 흐름 (5단계)

```
① 기획·스토리보드
        ↓
② 3D 제작 (모델링 · 라이팅 · 애니메이션 · 렌더)
        ↓
③ 영상으로 내보내기 (Export)
        ↓
④ 파일 최적화 (용량 줄이기)
        ↓
⑤ 웹 폴더에 넣기 → 사이트에 배치
```

---

## 1단계 — 기획 (만들기 전)

### 정할 것

| 항목 | 예시 |
|------|------|
| **길이** | 5~15초 루프 (웹용은 짧을수록 좋음) |
| **비율** | 16:9 (가로) — 일리윤과 동일 |
| **무드** | 클린 / 연구소 / 제품 클로즈업 / 로고 reveal |
| **색** | 브랜드 컬러 팔레트 |
| **루프** | 처음과 끝이 자연스럽게 이어지게 |

### 스토리보드 (간단히)

- Figma 또는 종이에 **4~8컷** 스케치
- 각 컷: 카메라 각도 + 무엇이 움직이는지
- `design/sketches/` 폴더에 저장

---

## 2단계 — 어떤 툴로 만들까?

### 입문·포트폴리오용 (추천 순)

| 툴 | 특징 | 비용 |
|----|------|------|
| **Blender** | 업계에서도 많이 씀, 3D 풀 파이프라인 | 무료 |
| **Cinema 4D** | 모션그래픽·브랜드 영상에 많음 | 유료 |
| **Spline** | 브라우저 3D, 가볍고 빠른 프로토타입 | 무료~유료 |
| **After Effects + Element 3D** | 2.5D 느낌, AE 익숙하면 진입 쉬움 | AE 구독 |

### 역할 나누기

| 작업 | 하는 툴 |
|------|---------|
| 3D 모델·씬·애니·렌더 | Blender, C4D |
| 2D 모션 + 3D 합성 | After Effects |
| 가벼운 3D 인터랙션 | Spline → export video 또는 embed |

> **처음이면 Blender** 로 10초 루프 하나 만드는 연습부터 추천.

---

## 3단계 — 제작 (3D 안에서)

### 기본 체크리스트

- [ ] **모델링** — 제품, 로고, 추상 오브젝트
- [ ] **머티리얼** — 매트/글로시, 브랜드 색
- [ ] **라이팅** — 부드러운 스튜디오 조명 (일리윤: 클린·전문)
- [ ] **카메라** — 천천히 돌리거나, 줌인/패럴랙스
- [ ] **애니메이션** — 5~15초, **루프 가능**하게
- [ ] **렌더** — 아래 export 설정 참고

### 일리윤 스타일 참고

- 연구소·차트 느낌의 **정돈된 레이아웃**
- **사선 + 곡선** 조형
- **저채도·화이트/베이지** 톤
- 과한 이펙트보다 **정제된 움직임**

---

## 4단계 — 영상으로 내보내기 (Export)

웹용은 **MP4**가 기본. 가능하면 **WebM**도 같이.

### 권장 설정

| 항목 | 권장값 |
|------|--------|
| **해상도** | 1920×1080 (Full HD) |
| **프레임** | 24fps 또는 30fps |
| **코덱** | H.264 (MP4) |
| **길이** | 5~15초 루프 |
| **파일 크기** | **5MB 이하** 목표 (10MB 넘으면 최적화) |

### Blender 예시

1. **Render Properties** → Format: **FFmpeg video**
2. Encoding: **H.264 in MP4**
3. Resolution: **1920×1080**, 24fps
4. Output → 렌더

### After Effects 예시

1. **Composition Settings** → 1920×1080, 24fps
2. **File → Export → Add to Media Encoder**
3. Preset: **H.264**, Match Source, High Quality
4. 또는 **H.264** + **WebM (VP9)** 두 벌 export

### 루프 팁

- 타임라인 **첫 프레임 = 마지막 프레임** 맞추기
- 또는 AE에서 **Loop Expression** / Blender에서 cyclic animation

---

## 5단계 — 용량 줄이기 (중요)

웹은 **용량 = 로딩 속도**. 일리윤 `IllI_mov_8` 도 ~7MB — 더 줄이면 좋음.

### 방법

| 도구 | 용도 |
|------|------|
| [HandBrake](https://handbrake.fr/) | MP4 압축 (무료) |
| [CloudConvert](https://cloudconvert.com/) | WebM 변환 |
| Adobe Media Encoder | CRF 올려서 용량↓ |

### HandBrake 간단 설정

- Preset: **Web → Gmail Large 3 Minutes 720p30** 또는 Custom 1080p
- **Web Optimized** 체크
- 목표: **3~5MB** (15초 기준)

---

## 6단계 — 우리 프로젝트에 넣기

### 저장 경로

```
project1/
└── public/
    └── videos/
        ├── hero/
        │   └── intro-loop.mp4      ← 첫 화면용
        └── works/
            └── project-01.mp4      ← 작업물별
```

### 파일 이름 규칙

- 영문 소문자, 하이픈: `illiyoon-logo-reveal.mp4`
- 공백·한글 피하기

### 웹에서 보이는 방식 (일리윤과 동일)

- **자동 재생**, **소리 없음**, **반복**, **모바일에서도 본문 안 재생**
- 유튜브 플레이어 UI 없음 — 갤러리처럼 깔끔

---

## 7단계 — AI에게 요청할 때

영상 파일을 `public/videos/`에 넣은 뒤:

> 「Hero에 `intro-loop.mp4` 넣어줘. 일리윤 페이지처럼 가로 꽉 차게, 자동 재생 루프로」

이렇게 **디자인 언어**로 말하면 됩니다.

---

## 난이도별 로드맵

### 🟢 1주 — 연습

- Blender 튜토리얼 1개 따라하기
- 5초 루프 (회전하는 단순 오브젝트)
- MP4 export → `public/videos/hero/`에 넣기

### 🟡 2~3주 — 포트폴리오 1개

- 브랜드 컬러 + 로고/제품 모티브
- 10초 루프, 1080p, 5MB 이하
- Works 섹션에 1개 배치

### 🔴 1~2개월 — 일리윤급

- C4D/Blender + AE 합성
- 여러 클립을 페이지 흐름에 배치 (글 → 이미지 → **모션** → 글)
- 3D/Motion 전담 역할 분담 또는 외주

---

## 3D vs 영상만 — 뭐가 나한테 맞을까?

| 상황 | 추천 |
|------|------|
| 3D 처음 | **AE 모션** 또는 **짧은 Blender 루프**부터 |
| 제품·로고 입체 연출 | **Blender / C4D** |
| 빠르게 웹에 올리기 | **Spline** 또는 **AE** → MP4 |
| 스크롤에 반응하는 3D | 나중 단계 (Three.js — 개발 쪽) |

**일리윤 페이지 수준** = 대부분 **미리 렌더한 MP4** → 3D 툴 익히기 + export만 하면 웹 연동은 간단.

---

## 학습 리소스

| 리소스 | 내용 |
|--------|------|
| [Blender Guru — Donut Tutorial](https://www.youtube.com/watch?v=B0JqptcU1Vg) | Blender 입문 |
| [Spline Tutorials](https://spline.design/) | 가벼운 3D |
| [Motion Design School](https://motiondesign.school/) | C4D·모션 (유료) |
| YouTube: "product animation loop blender" | 제품 루프 참고 |

---

## 다음 액션

1. **툴 하나 정하기** — Blender(무료) 또는 이미 쓰는 AE
2. **5초 루프 1개** 스토리보드 — `design/sketches/`
3. **Export** → `public/videos/hero/test-loop.mp4`
4. **「이 영상 Hero에 넣어줘」** — 프로젝트 세팅 후 요청

---

*웹 코드·배포는 AI가 담당. 당신은 3D 제작 + MP4 export + 폴더에 넣기.*
