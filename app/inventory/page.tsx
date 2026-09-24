import { Suspense } from "react";
import { projects } from "@/data/projects";
import { activities } from "@/data/activities";
import { tools, toolNotes } from "@/data/tools";
import { designs } from "@/data/designs";
import { buildMetadata } from "@/lib/seo";
import SectionTitle from "@/components/section-title";
import InventoryTabs from "@/components/inventory/inventory-tabs";

export const metadata = buildMetadata({
  title: "Inventory — Firdaus Ramdan",
  description: "Kumpulan project, aktivitas, dan tools.",
  path: "/inventory",
});

export default function InventoryPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <SectionTitle
        title="Inventory"
        subtitle="Pusat arsip untuk project, aktivitas, pembelajaran, dan tools. Gunakan tab untuk menelusuri setiap catatan secara terstruktur."
      />
      <Suspense fallback={<p className="text-sm text-gray-500">Loading…</p>}>
        <InventoryTabs
          projects={projects}
          activities={activities}
          tools={tools}
          notes={toolNotes}
          designs={designs}
        />
      </Suspense>
    </div>
  );
}