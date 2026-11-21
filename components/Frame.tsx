import type { ReactNode } from "react";

const corner = "absolute h-[104px] w-[104px] bg-[#858585] shadow-[inset_0_0_0_8px_#aaa,inset_0_0_0_14px_#555]";
const cuts = [
  "[clip-path:polygon(0_0,100%_0,100%_20%,72%_20%,20%_72%,20%_100%,0_100%)]",
  "[clip-path:polygon(0_0,100%_0,100%_100%,80%_100%,80%_72%,28%_20%,0_20%)]",
  "[clip-path:polygon(0_0,0_100%,100%_100%,100%_80%,72%_80%,20%_28%,20%_0)]",
  "[clip-path:polygon(100%_0,100%_100%,0_100%,0_80%,28%_80%,80%_28%,80%_0)]",
];

export default function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="absolute inset-[32px] bg-black">
      <div className="absolute inset-[25px] bg-white" style={{ clipPath: "polygon(48px 0,calc(100% - 48px) 0,100% 48px,100% calc(100% - 48px),calc(100% - 48px) 100%,48px 100%,0 calc(100% - 48px),0 48px)" }} />
      {cuts.map((cut, i) => <i key={i} className={`${corner} z-[1] ${cut} ${i < 2 ? "top-0" : "bottom-0"} ${i % 2 === 0 ? "left-0" : "right-0"}`} />)}
      {children}
    </div>
  );
}
