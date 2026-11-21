import LogrosNav from "@/components/LogrosNav";
import LogrosBackground from "@/components/LogrosBackground";

export default function LogrosLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-dvh">
      <LogrosBackground />
      <div className="relative z-10 min-h-dvh pb-16">
        {children}
        <LogrosNav />
      </div>
    </div>
  );
}
