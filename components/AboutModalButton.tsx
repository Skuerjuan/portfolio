"use client";

import { useEffect, useState } from "react";

const bio = [
  "Desde mis primeras interacciones con la ciencia supe que esto era a lo que me quería dedicar. A lo largo de mi trayecto por la escuela secundaria fui explorando la matemática, la física, la química y la computación, a través de oportunidades académicas como talleres y olimpiadas. Hoy en día sigo el camino de la academia para convertirme en investigador en el campo de la matemática, y me intereso también por la docencia universitaria.",
  "Por otro lado, tuve diversas ocasiones que aproveché para entrenar mis habilidades de speaking público, con competencias de emprededurismo, debate, argumentación y divulgación científica en el ámbito escolar.",
  "Me apasiona la competencia y los desafíos, y quiero seguir superándome toda la vida.",
];

export default function AboutModalButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="absolute left-[1060px] top-[858px] h-[112px] w-[690px]
          border-[6px] border-bronce bg-[#d9d9d9] px-[24px] text-[50px] shadow-[12px_12px_0_#956b38]
          transition-all duration-200 hover:translate-x-[6px] hover:translate-y-[6px] hover:bg-celeste hover:shadow-[6px_6px_0_#956b38]
          active:translate-x-[12px] active:translate-y-[12px] active:shadow-none
          focus-visible:outline-[6px] focus-visible:outline-offset-[10px] focus-visible:outline-black"
      >
        Sobre mí
      </button>

      {open && (
        <div
          className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 px-[100px] py-[70px]"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-modal-title"
            className="relative max-h-full w-full max-w-[1280px] overflow-y-auto border-[8px] border-bronce bg-white px-[72px] py-[64px] shadow-[18px_18px_0_#956b38]"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="absolute right-[22px] top-[10px] text-[56px] leading-none text-bronce hover:text-black focus-visible:outline-[4px] focus-visible:outline-bronce"
            >
              ×
            </button>
            <h2 id="about-modal-title" className="mb-[32px] pr-[60px] text-[64px] leading-[1.1]">
              Sobre mí
            </h2>
            <div className="space-y-[24px] text-[38px] leading-[1.35]">
              {bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
