import { history } from "@/data/history";
import { buildMetadata } from "@/lib/seo";
import SectionTitle from "@/components/section-title";
import Timeline from "@/components/timeline";

export const metadata = buildMetadata({
  title: "History — Firdaus Ramdan",
  description: "Pendidikan dan riwayat akademik.",
  path: "/history",
});

export default function HistoryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <SectionTitle title="History" subtitle="Perjalanan pendidikan aku." />
      <Timeline items={history} />
    </div>
  );
}