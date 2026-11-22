import Label from "@/components/Label";
import Shape from "@/components/Shape";
import Stage from "@/components/Stage";

const t = "text-[44px] leading-[56px]";

export default function Matematica() {
  return (
    <Stage w={1920} h={1080} mode="width" reserve={64} referenceHeight={1080} background="/fondos/matematica.svg">
      <Label x={44} y={99} w={692}>Matemática</Label>

      <Shape kind="rect" x={312} y={330} w={380} h={378} className={t}>
        <span>5 años compitiendo en OMA</span>
      </Shape>
      <Shape kind="rect" x={770} y={330} w={380} h={378} className={t}>Mención honorífica en el certamen metropolitano</Shape>
      <Shape kind="rect" x={1228} y={330} w={380} h={378} className={t}>Mención honorífica en el certamen nacional</Shape>
      <Shape kind="rect" x={535} y={752} w={850} h={168} className={t}>Convocado para el selectivo de IMO</Shape>
    </Stage>
  );
}
