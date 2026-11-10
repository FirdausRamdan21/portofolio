import { history } from "@/data/history";
import { certificates } from "@/data/certificates";
import { buildMetadata } from "@/lib/seo";
import SectionTitle from "@/components/section-title";
import Timeline from "@/components/timeline";
import { Award, GraduationCap } from "lucide-react";

export const metadata = buildMetadata({
  title: "Riwayat Pendidikan & Sertifikasi — Firdaus Ramdan",
  description: "Riwayat pendidikan formal, pelatihan terstruktur, dan sertifikasi rekayasa perangkat lunak Firdaus Ramdan.",
  path: "/history",
});

export default function HistoryPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
      {/* Education Timeline */}
      <div className="mb-14">
        <SectionTitle
          title="Pendidikan & Pelatihan"
          subtitle="Jejak pendidikan formal dan pembelajaran terstruktur dalam bidang rekayasa perangkat lunak."
        />
        <Timeline items={history} />
      </div>

      {/* Certifications Section */}
      <div className="border-t border-abyss-800/80 pt-12">
        <div className="flex items-center gap-2 mb-6">
          <Award className="h-5 w-5 text-sky-400" />
          <h2 className="text-xl font-bold text-foam-50">Sertifikasi &amp; Lisensi Teknis</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="card-glow rounded-xl border border-abyss-800/80 bg-abyss-900/60 p-5 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="inline-block rounded-full bg-sky-500/10 px-2.5 py-0.5 text-[10px] font-bold text-sky-300 border border-sky-500/20 mb-2">
                    {cert.issuer}
                  </span>
                  <h3 className="text-sm font-bold text-foam-50 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="mt-2 text-xs text-foam-400">Diterbitkan: {cert.date}</p>
                </div>
              </div>

              {cert.credentialUrl && (
                <div className="mt-4 pt-3 border-t border-abyss-800/80">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300"
                  >
                    Lihat Bukti Kredensial &rarr;
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
