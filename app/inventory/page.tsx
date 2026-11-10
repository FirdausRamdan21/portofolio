import { Suspense } from "react";
import { projects } from "@/data/projects";
import { activities } from "@/data/activities";
import { tools, toolNotes } from "@/data/tools";
import { designs } from "@/data/designs";
import { buildMetadata } from "@/lib/seo";
import SectionTitle from "@/components/section-title";
import InventoryTabs from "@/components/inventory/inventory-tabs";

export const metadata = buildMetadata({
  title: "Portofolio Proyek & Arsip Rekayasa — Firdaus Ramdan",
  description: "Eksplorasi proyek aplikasi web Full-Stack, sistem enterprise, aktivitas kepengurusan, dan perangkat rekayasa perangkat lunak.",
  path: "/inventory",
});

export default function InventoryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <SectionTitle
        title="Portofolio Proyek &amp; Karya"
        subtitle="Eksplorasi proyek aplikasi web, arsitektur basis data, aktivitas organisasi, dan perangkat rekayasa perangkat lunak yang telah saya bangun."
      />
      <Suspense fallback={<p className="text-sm text-foam-400">Memuat data proyek…</p>}>
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
