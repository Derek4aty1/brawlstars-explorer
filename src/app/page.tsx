import PortraitCard from '@/components/PortraitCard';
import { BrawlerPortrait } from '@/types/BrawlerTypes';
import { getCachedAllBrawlerPortraits } from '@/utils/brawlerDataFetcher';
import { getRarityTextColor } from '@/utils/uiAssetMapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brawlstars Explorer | All Brawlers',
};

function RaritySection({ title, portraits }: { title: string; portraits: BrawlerPortrait[] }) {
  return (
    <div className="flex flex-col items-center gap-2 py-4">
      <h2 className={`w-full text-xl ${getRarityTextColor(portraits[0].rarity)}`}>{title}</h2>
      <div className="grid w-fit grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {portraits.map((portrait) => (
          <PortraitCard key={portrait.name} portrait={portrait} />
        ))}
      </div>
    </div>
  );
}

export default async function AllBrawlersPage() {
  const allBrawlerPortraits = await getCachedAllBrawlerPortraits();
  const commonPortraits = allBrawlerPortraits.filter((portrait) => portrait.rarity === 'Common');
  const rarePortraits = allBrawlerPortraits.filter((portrait) => portrait.rarity === 'Rare');
  const superRarePortraits = allBrawlerPortraits.filter((portrait) => portrait.rarity === 'Super Rare');
  const epicPortraits = allBrawlerPortraits.filter((portrait) => portrait.rarity === 'Epic');
  const mythicPortraits = allBrawlerPortraits.filter((portrait) => portrait.rarity === 'Mythic');
  const legendaryPortraits = allBrawlerPortraits.filter((portrait) => portrait.rarity === 'Legendary');

  return (
    <section className="flex flex-col justify-center p-8">
      <h1 className="w-full text-3xl">ALL BRAWLERS ({allBrawlerPortraits.length})</h1>
      <RaritySection title={`Starting Brawlers (${commonPortraits.length})`} portraits={commonPortraits} />
      <RaritySection title={`Rare (${rarePortraits.length})`} portraits={rarePortraits} />
      <RaritySection title={`Super Rare (${superRarePortraits.length})`} portraits={superRarePortraits} />
      <RaritySection title={`Epic (${epicPortraits.length})`} portraits={epicPortraits} />
      <RaritySection title={`Mythic (${mythicPortraits.length})`} portraits={mythicPortraits} />
      <RaritySection title={`Legendary (${legendaryPortraits.length})`} portraits={legendaryPortraits} />
    </section>
  );
}
