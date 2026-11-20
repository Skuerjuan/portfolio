// Se re-monta en cada navegación: da la transición de entrada entre páginas.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-[entrar_.45s_ease-out]">{children}</div>;
}
