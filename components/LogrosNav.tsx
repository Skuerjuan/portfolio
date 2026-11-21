"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AREAS } from "@/lib/logros";

export default function LogrosNav() {
  const path = usePathname();
  const links = [
    { href: "/", label: "Inicio" },
    ...AREAS.map(({ slug, label }) => ({ href: `/logros/${slug}`, label })),
  ];

  return (
    <nav aria-label="Navegación de logros" className="fixed inset-x-0 bottom-0 z-10 flex min-h-16 items-center justify-center border-t-[3px] border-bronce bg-white px-2 py-2">
      <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              aria-current={path === href ? "page" : undefined}
              className={`block px-3 py-1.5 text-lg transition-colors focus-visible:outline-2 focus-visible:outline-bronce sm:text-xl ${path === href ? "bg-bronce text-white" : "bg-celeste/40 hover:bg-celeste"}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
