export default function Loading() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="h-8 w-48 animate-pulse rounded bg-gray-200" />
      <div className="mt-4 h-4 w-72 animate-pulse rounded bg-gray-100" />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-64 animate-pulse rounded-xl bg-gray-100"
          />
        ))}
      </div>
    </div>
  );
}