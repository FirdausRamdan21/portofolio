import { Suspense } from "react";
import { projects } from "@/data/projects";
import { activities } from "@/data/activities";
import { tools, toolNotes } from "@/data/tools";
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
        subtitle="Arsip project, aktivitas, dan tools yang aku pakai."
      />
      <Suspense fallback={<p className="text-sm text-gray-500">Loading…</p>}>
        <InventoryTabs
          projects={projects}
          activities={activities}
          tools={tools}
          notes={toolNotes}
        />
      </Suspense>
    </div>
  );
}