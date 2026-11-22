import Label from "@/components/Label";
import Shape from "@/components/Shape";
import Stage from "@/components/Stage";

const t = "text-[44px] leading-[56px]";

export default function Quimica() {
  return (
    <Stage w={1920} h={1080} reserve={64} background="/fondos/quimica.svg">
      <Label x={33} y={118} w={635}>Química</Label>

      <Shape kind="hex" x={684} y={320} w={348} h={380} className={t}>Medalla de oro en el nacional (Nivel 1)</Shape>
      <Shape kind="hex" x={1096} y={234} w={426} h={464} className={t}>
        <span>2 años participando en la OAQ</span>
      </Shape>
      <Shape kind="hex" x={498} y={670} w={315} h={342} className={t}>Convocado al selectivo para ICHO</Shape>
      <Shape kind="hex" x={888} y={652} w={346} h={378} className={t}>Medalla de plata en el nacional (Nivel 2)</Shape>
    </Stage>
  );
}
