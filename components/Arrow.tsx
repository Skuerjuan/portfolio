
export default function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 510 125" className={className} fill="none" aria-hidden>
      <path d="M12 42 C45 62 75 112 118 92 C163 72 182 22 228 38 C268 52 285 102 325 90 L405 62"
        stroke="currentColor" strokeWidth="22" strokeLinecap="round" />
      <polygon points="403,8 500,65 403,119" fill="currentColor" />
    </svg>
  );
}
