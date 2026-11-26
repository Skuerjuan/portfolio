import type { IconType } from "react-icons";
import { SiCplusplus, SiJavascript, SiNextdotjs, SiPostgresql, SiPython, SiTypescript, SiUnity } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import Label from "@/components/Label";
import Shape from "@/components/Shape";
import Stage from "@/components/Stage";

const nodes = {
  n4: { cx: 724, cy: 514, r: 160, text: <span>4 años programando</span> },
  ioi: { cx: 1369, cy: 492, r: 153, text: "Convocado al selectivo para IOI" },
  oia: { cx: 520, cy: 910, r: 169, text: "Medalla de bronce en el certamen nacional de OIA" },
  n3: { cx: 1084, cy: 840, r: 170, text: "3 años de experiencia en:" },
  sis: { cx: 1630, cy: 794, r: 170, text: "Programación de sistemas embebidos de bajo nivel" },
  poo: { cx: 1553, cy: 1193, r: 153, text: "Programación Orientada a Objetos" },
  web: { cx: 1128, cy: 1395, r: 153, text: "Programación Web Full-Stack" },
  alg: { cx: 724, cy: 1256, r: 166, text: "Especializado en el diseño de algoritmos con teoria de grafos" },
  oiai: { cx: 298, cy: 1346, r: 170, text: "Participante de la Olimpíada Iberoamericana de Informática" },
} as const;
type Id = keyof typeof nodes;
const edges: [Id, Id][] = [
  ["n4", "ioi"], ["n4", "oia"], ["n4", "alg"], ["n4", "n3"],
  ["oia", "oiai"], ["n3", "sis"], ["n3", "poo"], ["n3", "web"],
];

const techs: [string, IconType][] = [
  ["JavaScript", SiJavascript], ["C++", SiCplusplus], ["PostgreSQL", SiPostgresql], ["Unity", SiUnity],
  ["TypeScript", SiTypescript], ["Next.js", SiNextdotjs], ["Python", SiPython], ["C#", TbBrandCSharp],
];
const RING = { cx: 960, cy: 2461, r: 551 };

export default function Computacion() {
  return (
    <Stage w={1920} h={3422} mode="width" scaleFactor={0.75} background="/fondos/computacion.png">
      <Label x={37} y={114} w={800}>Computación</Label>

      <svg className="absolute inset-0" width={1920} height={3422} aria-hidden>
        {edges.map(([a, b]) => (
          <line key={a + b} x1={nodes[a].cx} y1={nodes[a].cy} x2={nodes[b].cx} y2={nodes[b].cy} stroke="#956b38" strokeWidth={12} />
        ))}
        <circle cx={RING.cx} cy={RING.cy} r={RING.r} fill="none" stroke="#a0c9d6" strokeWidth={19} />
      </svg>

      {(Object.keys(nodes) as Id[]).map((k) => {
        const n = nodes[k];
        return (
          <Shape key={k} kind="circle" x={n.cx - n.r} y={n.cy - n.r} w={n.r * 2} h={n.r * 2}
            className="text-[32px] leading-[36px]">
            {n.text}
          </Shape>
        );
      })}

      <h2 className="absolute w-[760px] text-center text-[56px] leading-[68px] underline decoration-bronce decoration-[9px] underline-offset-[12px]"
        style={{ left: RING.cx - 380, top: RING.cy - 124 }}>
        Lenguajes y herramientas
      </h2>
      {techs.map(([name, Icon], k) => {
        const a = (k * Math.PI) / 4;
        return (
          <div key={name} title={name} role="img" aria-label={name}
            className="absolute flex h-[240px] w-[240px] items-center justify-center rounded-full border-2 border-neutral-400 bg-white"
            style={{ left: RING.cx + RING.r * Math.sin(a) - 120, top: RING.cy - RING.r * Math.cos(a) - 120 }}>
            <Icon size={96} color="#161616" />
          </div>
        );
      })}
    </Stage>
  );
}
