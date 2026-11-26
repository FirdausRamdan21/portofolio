import { ExternalLink, FileText, Info, StickyNote } from "lucide-react";
import type { Tool, ToolNote } from "@/lib/types";
import { cn } from "@/lib/utils";
import ToolIcon from "@/components/tool-icon";

const noteIcons = {
  Note: StickyNote,
  File: FileText,
  Info: Info,
};

export default function ToolGrid({
  tools,
  notes,
}: {
  tools: Tool[];
  notes: ToolNote[];
}) {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-lg font-semibold text-foam-50">Tools</h2>
        <p className="mt-1 text-sm text-foam-400">
          Perangkat dan layanan yang saya gunakan sehari-hari dalam pengembangan dan publikasi.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <a
              key={t.name}
              href={t.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-3.5 rounded-xl border border-abyss-800/80 bg-abyss-900/60 p-4 backdrop-blur-sm transition-colors hover:border-sky-500/40 hover:bg-abyss-800/60"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-abyss-700/60 bg-abyss-800 text-sky-300 transition-transform group-hover:scale-105">
                <ToolIcon icon={t.icon} name={t.name} className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-foam-50 group-hover:text-sky-300 transition-colors">
                    {t.name}
                  </p>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0 text-foam-500 transition-colors group-hover:text-sky-400" />
                </div>
                <p className="text-xs font-medium text-sky-400/90">
                  {t.category}
                </p>
                {t.description && (
                  <p className="mt-1 text-xs leading-relaxed text-foam-400">
                    {t.description}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foam-50">Catatan &amp; Info</h2>
        <p className="mt-1 text-sm text-foam-400">
          Catatan teknis, berkas pendukung, dan tautan informasi pribadi.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {notes.map((n) => {
            const Icon = noteIcons[n.type];
            const content = (
              <>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-abyss-700/60 bg-abyss-800/80 text-sky-300">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-foam-50">
                      {n.title}
                    </p>
                    {n.url && (
                      <ExternalLink className="h-3.5 w-3.5 shrink-0 text-foam-500 group-hover:text-sky-400" />
                    )}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-foam-300">
                    {n.description}
                  </p>
                </div>
              </>
            );
            const className = cn(
              "group flex items-start gap-3 rounded-xl border border-abyss-800/80 bg-abyss-900/60 p-4 backdrop-blur-sm",
              n.url &&
                "transition-colors hover:border-sky-500/40 hover:bg-abyss-800/60"
            );
            return n.url ? (
              <a
                key={n.id}
                href={n.url}
                target="_blank"
                rel="noreferrer"
                className={className}
              >
                {content}
              </a>
            ) : (
              <div key={n.id} className={className}>
                {content}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
