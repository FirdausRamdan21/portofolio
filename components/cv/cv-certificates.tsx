import { Award } from "lucide-react";
import type { Certificate } from "@/lib/types";

export default function CvCertificates({
  items,
}: {
  items: Certificate[];
}) {
  if (!items.length) {
    return (
      <p className="text-xs text-foam-500 print:text-gray-500">
        Belum ada sertifikat.
      </p>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 print:grid-cols-2 print:gap-2">
      {items.map((c) => {
        const content = (
          <>
            <Award className="h-4 w-4 shrink-0 text-abyss-300 print:text-gray-500" />
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold leading-tight text-foam-100 print:text-black">
                {c.title}
              </h3>
              <p className="mt-0.5 text-[11px] text-foam-500 print:text-gray-600">
                {c.issuer} · {c.date}
              </p>
            </div>
          </>
        );

        const className =
          "flex items-start gap-2 rounded-lg border border-abyss-700/40 bg-abyss-900/40 p-3 break-inside-avoid print:border-gray-200 print:bg-white";

        return c.credentialUrl ? (
          <a
            key={c.id}
            href={c.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className={`${className} transition-colors hover:border-abyss-500/60 hover:bg-abyss-800/60 print:hover:bg-white`}
          >
            {content}
          </a>
        ) : (
          <div key={c.id} className={className}>
            {content}
          </div>
        );
      })}
    </div>
  );
}