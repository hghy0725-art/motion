"use client";

const SPLINE_URL =
  "https://my.spline.design/maclipstick-3bZRMqCnhTuAkiySpyKgfJ4I/";

export default function SplineHero() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-mac-black">
      <iframe
        src={SPLINE_URL}
        title="M.A.C. Lipstick 3D"
        className="h-full w-full border-0"
        loading="eager"
        allow="autoplay; fullscreen"
      />
    </div>
  );
}
