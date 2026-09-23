import Hero from "@/components/home/hero";
import WhatIDo from "@/components/home/what-i-do";
import SkillsTools from "@/components/home/skills-tools";
import PinnedGallery from "@/components/home/pinned-gallery";
import CTA from "@/components/home/cta";
import WaveDivider from "@/components/wave-divider";

export default function Home() {
  return (
    <div>
      <Hero />
      <WaveDivider className="text-abyss-950" />
      <WhatIDo />
      <SkillsTools />
      <PinnedGallery />
      <CTA />
    </div>
  );
}