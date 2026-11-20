import Link from "next/link";
import Arrow from "@/components/Arrow";
import Frame from "@/components/Frame";
import Stage from "@/components/Stage";
import AboutModalButton from "@/components/AboutModalButton";

export default function SobreMi() {
  return (
    <main className="min-h-dvh bg-white">
      <Stage w={1920} h={1080}>
        <Frame>
          <p className="absolute left-[265px] top-[225px] w-[660px] text-[100px] leading-[130px]">
            Tengo un hambre insaciable de desafíos.
          </p>

          <p className="absolute left-[1060px] top-[145px] w-[690px] text-center text-[80px] leading-[110px]">
            Felipe Maierowicz
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/foto.svg" alt="Retrato de Felipe Maierowicz" className="absolute left-[1135px] top-[278px] w-[560px]" />

          <Link
            href="/logros/quimica"
            className="group absolute left-[265px] top-[858px] flex h-[112px] w-[660px] items-center justify-between
              border-[6px] border-bronce bg-[#d9d9d9] px-[26px] text-[54px] shadow-[12px_12px_0_#956b38]
              transition-all duration-200 hover:translate-x-[6px] hover:translate-y-[6px] hover:bg-celeste hover:shadow-[6px_6px_0_#956b38]
              active:translate-x-[12px] active:translate-y-[12px] active:shadow-none
              focus-visible:outline-[6px] focus-visible:outline-offset-[10px] focus-visible:outline-black"
          >
            <span>Ver mis logros</span>
            <Arrow className="h-[44px] w-[78px] text-bronce transition-transform duration-300 group-hover:translate-x-[10px] group-hover:text-black" />
          </Link>
          <AboutModalButton />
        </Frame>
      </Stage>
    </main>
  );
}
