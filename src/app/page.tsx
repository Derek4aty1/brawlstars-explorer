import PortraitCard from "@/components/PortraitCard";
import { BrawlerRarity, PortraitData } from "@/types/BrawlerTypes";
import { getCachedAllPortraitData } from "@/utils/assetFetcher";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Brawlstars Explorer | All Brawlers`
  }
}

const rarityTextColors = {
  [BrawlerRarity.Common]: 'text-common',
  [BrawlerRarity.Rare]: 'text-rare',
  [BrawlerRarity.SuperRare]: 'text-super-rare',
  [BrawlerRarity.Epic]: 'text-epic',
  [BrawlerRarity.Mythic]: 'text-mythic',
  [BrawlerRarity.Legendary]: 'text-legendary',
};

function RaritySection({ title, brawlers }: { title: string, brawlers: PortraitData[] }) {
  return (
    <div className="py-4 flex flex-col items-center gap-2">
      <h2 className={`w-full text-xl ${rarityTextColors[brawlers[0].rarity]}`}>{title}</h2>
      <div className="w-fit grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {brawlers.map(portrait => (
          <PortraitCard key={portrait.name} portrait={portrait} />
        ))}
      </div>
    </div>
  );
}

export default async function AllBrawlersPage() {
  const allBrawlers = await getCachedAllPortraitData();
  const commonBrawlers = allBrawlers.filter(portrait => portrait.rarity === BrawlerRarity.Common);
  const rareBrawlers = allBrawlers.filter(portrait => portrait.rarity === BrawlerRarity.Rare);
  const superRareBrawlers = allBrawlers.filter(portrait => portrait.rarity === BrawlerRarity.SuperRare);
  const epicBrawlers = allBrawlers.filter(portrait => portrait.rarity === BrawlerRarity.Epic);
  const mythicBrawlers = allBrawlers.filter(portrait => portrait.rarity === BrawlerRarity.Mythic);
  const legendaryBrawlers = allBrawlers.filter(portrait => portrait.rarity === BrawlerRarity.Legendary);

  return (
    <section className="p-8 flex flex-col justify-center">
      <h1 className="w-full text-3xl">
        ALL BRAWLERS ({allBrawlers.length})
      </h1>
      <RaritySection title={`Starting Brawlers (${commonBrawlers.length})`} brawlers={commonBrawlers} />
      <RaritySection title={`Rare (${rareBrawlers.length})`} brawlers={rareBrawlers} />
      <RaritySection title={`Super Rare (${superRareBrawlers.length})`} brawlers={superRareBrawlers} />
      <RaritySection title={`Epic (${epicBrawlers.length})`} brawlers={epicBrawlers} />
      <RaritySection title={`Mythic (${mythicBrawlers.length})`} brawlers={mythicBrawlers} />
      <RaritySection title={`Legendary (${legendaryBrawlers.length})`} brawlers={legendaryBrawlers} />
    </section>
  );
}
