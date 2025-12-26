import { Hero } from "@/components/homepage/Hero";
import { FeatureTiles } from "@/components/homepage/FeatureTiles";
import { FreeTools } from "@/components/homepage/FreeTools";
import { RadarPreview } from "@/components/homepage/RadarPreview";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeatureTiles />
      <FreeTools />
      <RadarPreview />
    </div>
  );
}
