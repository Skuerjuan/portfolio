import Link from "next/link";
import Arrow from "@/components/Arrow";
import Frame from "@/components/Frame";
import Stage from "@/components/Stage";

export default function Intro() {
  return (
    <main className="min-h-dvh bg-white">
      <Stage w={1920} h={1080}>
        <Frame>
          <p className="absolute left-[108px] top-[235px] whitespace-nowrap text-[150px] leading-[195px]">
            Soy Felipe y<br />
            me dedico a<br />
            <em className="font-bold">aprender</em>.
          </p>
          <Link
            href="/sobre-mi"
            aria-label="Continuar"
            className="group absolute left-[1160px] top-[475px] h-[125px] w-[510px] focus-visible:outline-[6px] focus-visible:outline-offset-[16px] focus-visible:outline-bronce"
          >
            <Arrow className="h-full w-full transition-transform duration-300 ease-out group-hover:translate-x-[28px] group-active:translate-x-[60px]" />
          </Link>
        </Frame>
      </Stage>
    </main>
  );
}
