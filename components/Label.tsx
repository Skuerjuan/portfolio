
export default function Label({ x, y, w, children }: { x: number; y: number; w: number; children: string }) {
  return (
    <h1 className="absolute flex h-[117px] items-center bg-celeste pl-[60px] text-[120px] leading-none" style={{ left: x, top: y, width: w }}>
      {children}
    </h1>
  );
}
