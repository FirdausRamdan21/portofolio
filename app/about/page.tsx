import { profile } from "@/data/profile";
import { history } from "@/data/history";
import { projects } from "@/data/projects";
import { activities } from "@/data/activities";
import { certificates } from "@/data/certificates";
import { buildMetadata } from "@/lib/seo";
import CvHeader from "@/components/cv/cv-header";
import CvSection from "@/components/cv/cv-section";
import CvEducation from "@/components/cv/cv-education";
import CvProjects from "@/components/cv/cv-projects";
import CvActivities from "@/components/cv/cv-activities";
import CvCertificates from "@/components/cv/cv-certificates";
import CvSkills from "@/components/cv/cv-skills";
import CvLanguages from "@/components/cv/cv-languages";
import PrintButton from "@/components/cv/print-button";

export const metadata = buildMetadata({
  title: "CV — Firdaus Ramdan",
  description:
    "Curriculum Vitae Firdaus Ramdan — Software Engineering Student & Aspiring Data Analyst.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="cv-print-root mx-auto max-w-6xl px-4 py-12 print:max-w-none print:px-0 print:py-0">
      <div className="no-print mb-6 flex justify-end">
        <PrintButton />
      </div>

      <article className="rounded-2xl border border-abyss-700/40 bg-abyss-900/60 p-6 backdrop-blur-sm print:rounded-none print:border-0 print:bg-white print:p-0 print:backdrop-blur-none md:p-10">
        <CvHeader />

        <div className="mt-10 grid gap-10 lg:grid-cols-3 print:grid-cols-3 print:gap-8">
          {/* MAIN */}
          <main className="space-y-10 lg:col-span-2 print:col-span-2">
            <CvSection number="01" title="Profile">
              <p className="text-sm leading-relaxed text-foam-300 print:text-gray-800">
                {profile.summary}
              </p>
            </CvSection>

            <CvSection number="02" title="Education">
              <CvEducation items={history} />
            </CvSection>

            <CvSection number="03" title="Projects">
              <CvProjects items={projects} />
            </CvSection>

            <CvSection number="04" title="Certificates">
              <CvCertificates items={certificates} />
            </CvSection>

            <CvSection number="05" title="Activities">
              <CvActivities items={activities} />
            </CvSection>
          </main>

          {/* SIDEBAR */}
          <aside className="space-y-10">
            <CvSection number="06" title="Skills">
              <CvSkills skills={profile.skills} />
            </CvSection>

            <CvSection number="07" title="Languages">
              <CvLanguages items={profile.languages} />
            </CvSection>
          </aside>
        </div>
      </article>
    </div>
  );
}