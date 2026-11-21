import type { ReactNode } from "react";

type Props = { kind: "hex" | "rect" | "circle"; x: number; y: number; w: number; h: number; className?: string; children: ReactNode };
const BORDE = 10;

export default function Shape({ kind, x, y, w, h, className = "", children }: Props) {
  const box = "absolute flex items-center justify-center text-center";
  const style = { left: x, top: y, width: w, height: h };
  if (kind !== "hex") {
    return (
      <div className={`${box} border-[10px] border-bronce bg-white px-[30px] ${kind === "circle" ? "rounded-full" : ""} ${className}`} style={style}>
        {children}
      </div>
    );
  }
  const i = BORDE / 2;
  const pts = [[w / 2, i], [w - i, h * 0.25], [w - i, h * 0.75], [w / 2, h - i], [i, h * 0.75], [i, h * 0.25]].map((p) => p.join(",")).join(" ");
  return (
    <div className={`${box} ${className}`} style={style}>
      <svg className="absolute inset-0" viewBox={`0 0 ${w} ${h}`} aria-hidden>
        <polygon points={pts} fill="white" stroke="#956b38" strokeWidth={BORDE} strokeLinejoin="miter" />
      </svg>
      <div className="relative px-[75px]">{children}</div>
    </div>
  );
}
