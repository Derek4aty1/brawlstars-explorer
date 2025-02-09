import PortraitCard from "@/components/PortraitCard";
import { BrawlerPortrait, BrawlerRarity } from "@/types/BrawlerTypes";
import { getCachedAllBrawlerPortraits } from "@/utils/assetFetcher";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Brawlstars Explorer | All Brawlers`
  }
}

const rarityTextColors: Record<BrawlerRarity, string> = {
  'Common': 'text-common',
  'Rare': 'text-rare',
  'Super Rare': 'text-super-rare',
  'Epic': 'text-epic',
  'Mythic': 'text-mythic',
  'Legendary': 'text-legendary'
};

function RaritySection({ title, portraits }: { title: string, portraits: BrawlerPortrait[] }) {
  return (
    <div className="py-4 flex flex-col items-center gap-2">
      <h2 className={`w-full text-xl ${rarityTextColors[portraits[0].rarity]}`}>{title}</h2>
      <div className="w-fit grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {portraits.map(portrait => (
          <PortraitCard key={portrait.name} portrait={portrait} />
        ))}
      </div>
    </div>
  );
}

export default async function AllBrawlersPage() {
  const allBrawlerPortraits = await getCachedAllBrawlerPortraits();
  const commonPortraits = allBrawlerPortraits.filter(portrait => portrait.rarity === 'Common');
  const rarePortraits = allBrawlerPortraits.filter(portrait => portrait.rarity === 'Rare');
  const superRarePortraits = allBrawlerPortraits.filter(portrait => portrait.rarity === 'Super Rare');
  const epicPortraits = allBrawlerPortraits.filter(portrait => portrait.rarity === 'Epic');
  const mythicPortraits = allBrawlerPortraits.filter(portrait => portrait.rarity === 'Mythic');
  const legendaryPortraits = allBrawlerPortraits.filter(portrait => portrait.rarity === 'Legendary');

  return (
    <section className="p-8 flex flex-col justify-center">
      <h1 className="w-full text-3xl">
        ALL BRAWLERS ({allBrawlerPortraits.length})
      </h1>
      <RaritySection title={`Starting Brawlers (${commonPortraits.length})`} portraits={commonPortraits} />
      <RaritySection title={`Rare (${rarePortraits.length})`} portraits={rarePortraits} />
      <RaritySection title={`Super Rare (${superRarePortraits.length})`} portraits={superRarePortraits} />
      <RaritySection title={`Epic (${epicPortraits.length})`} portraits={epicPortraits} />
      <RaritySection title={`Mythic (${mythicPortraits.length})`} portraits={mythicPortraits} />
      <RaritySection title={`Legendary (${legendaryPortraits.length})`} portraits={legendaryPortraits} />
    </section>
  );
}
