export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="h-3 w-28 animate-pulse rounded bg-abyss-800" />
      <div className="mt-3 h-8 w-56 animate-pulse rounded-lg bg-abyss-800/80" />
      <div className="mt-3 h-4 w-80 max-w-full animate-pulse rounded bg-abyss-900" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-72 animate-pulse rounded-2xl border border-abyss-800/70 bg-abyss-900/60"
          />
        ))}
      </div>
    </div>
  );
}
