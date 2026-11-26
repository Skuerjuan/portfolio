"use client";

import { usePathname } from "next/navigation";

const backgrounds: Record<string, { src: string; opacity?: number }> = {
  computacion: { src: "/fondos/computacion.png", opacity: 0.3 },
  matematica: { src: "/fondos/matematica.svg" },
  quimica: { src: "/fondos/quimica.svg" },
};

export default function LogrosBackground() {
  const pathname = usePathname();
  const area = pathname.split("/").filter(Boolean).at(-1) ?? "";
  const background = backgrounds[area];

  if (!background) return null;

  return (
    <img
      src={background.src}
      alt=""
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full object-cover object-center"
      style={{ opacity: background.opacity ?? 1 }}
    />
  );
}
