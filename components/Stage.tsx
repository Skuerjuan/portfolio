"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

export default function Stage({ w, h, mode = "fit", reserve = 0, scaleFactor = 1, referenceHeight, background, children }: {
  w: number; h: number; mode?: "fit" | "width"; reserve?: number; scaleFactor?: number; referenceHeight?: number; background?: string; children: ReactNode;
}) {
  const [s, setS] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const calc = () => {
      const availableWidth = stageRef.current?.clientWidth || document.documentElement.clientWidth;
      const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
      const sw = availableWidth / w;
      const availableHeight = viewportHeight - reserve;
      const heightLimit = referenceHeight ?? h;
      setS((mode === "width" && !referenceHeight ? sw : Math.min(sw, availableHeight / heightLimit)) * scaleFactor);
    };
    calc();
    window.addEventListener("resize", calc);
    window.visualViewport?.addEventListener("resize", calc);
    const observer = stageRef.current ? new ResizeObserver(calc) : null;
    if (stageRef.current && observer) observer.observe(stageRef.current);
    return () => {
      window.removeEventListener("resize", calc);
      window.visualViewport?.removeEventListener("resize", calc);
      observer?.disconnect();
    };
  }, [w, h, mode, reserve, scaleFactor, referenceHeight]);

  return (
    <div
      ref={stageRef}
      className={`relative flex w-full justify-center ${background ? "bg-transparent" : "bg-white"} ${mode === "fit" ? "items-center" : "items-start"}`}
      style={{
        ...(mode === "fit" ? { height: `calc(100dvh - ${reserve}px)` } : {}),
      }}
    >
      <div className="relative z-0 shrink-0 overflow-hidden" style={{ width: w * s, height: h * s, opacity: s ? 1 : 0 }}>
        <div className="absolute left-0 top-0 origin-top-left" style={{ width: w, height: h, transform: `scale(${s})` }}>
          {children}
        </div>
      </div>
    </div>
  );
}
