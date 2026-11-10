import Hero from "@/components/home/hero";
import PinnedGallery from "@/components/home/pinned-gallery";
import WhatIDo from "@/components/home/what-i-do";
import SkillsTools from "@/components/home/skills-tools";
import CTA from "@/components/home/cta";

export default function Home() {
  return (
    <div className="space-y-4">
      <Hero />
      <PinnedGallery />
      <WhatIDo />
      <SkillsTools />
      <CTA />
    </div>
  );
}
