export default function CvSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="cv-section">
      <header className="mb-4 flex items-center gap-3">
        <span className="font-mono text-[10px] font-semibold tracking-widest text-abyss-400 print:text-gray-400">
          {number}
        </span>
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-foam-500 print:text-gray-500">
          {title}
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-abyss-500/40 to-transparent print:from-gray-300" />
      </header>
      {children}
    </section>
  );
}