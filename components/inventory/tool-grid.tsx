import { ExternalLink, FileText, Info, StickyNote } from "lucide-react";
import type { Tool, ToolNote } from "@/lib/types";
import { cn } from "@/lib/utils";

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
        <h3 className="text-lg font-semibold">Tools</h3>
        <p className="text-sm text-gray-500">Tools yang aku pakai sehari-hari.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <a
              key={t.name}
              href={t.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-blue-500 hover:bg-blue-50/50"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-sm font-bold uppercase text-gray-700">
                {t.name.slice(0, 2)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{t.name}</p>
                <p className="truncate text-xs text-gray-500">{t.category}</p>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400 transition-colors group-hover:text-blue-600" />
            </a>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold">Catatan & Info</h3>
        <p className="text-sm text-gray-500">
          Catatan, file, dan informasi pribadi.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {notes.map((n) => {
            const Icon = noteIcons[n.type];
            const content = (
              <>
                <Icon className="h-5 w-5 shrink-0 text-gray-500" />
                <div>
                  <p className="text-sm font-medium">{n.title}</p>
                  <p className="mt-0.5 text-xs text-gray-500">
                    {n.description}
                  </p>
                </div>
              </>
            );
            const className = cn(
              "flex gap-3 rounded-xl border border-gray-200 bg-white p-4",
              n.url &&
                "transition-colors hover:border-blue-500 hover:bg-blue-50/50"
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