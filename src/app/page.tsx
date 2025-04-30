import PortraitCard from '@/components/PortraitCard';
import { BrawlerPortrait } from '@/types/BrawlerTypes';
import { getCachedAllBrawlerPortraits } from '@/utils/brawlerDataFetcher';
import { getRarityTextColor } from '@/utils/uiAssetMapper';
import { Metadata } from 'next';
import { memo } from 'react';

export const metadata: Metadata = {
  title: 'Brawlstars Explorer | All Brawlers',
};

const RaritySection = memo(function RaritySection({ title, portraits }: { title: string; portraits: BrawlerPortrait[] }) {
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
});

export default async function AllBrawlersPage() {
  const allBrawlerPortraits = await getCachedAllBrawlerPortraits();
  const portraitsByRarity = allBrawlerPortraits.reduce(
    (acc, portrait) => {
      acc[portrait.rarity] = [...(acc[portrait.rarity] || []), portrait];
      return acc;
    },
    {} as Record<string, BrawlerPortrait[]>,
  );

  return (
    <section className="flex flex-col justify-center p-8">
      <h1 className="w-full text-3xl">ALL BRAWLERS ({allBrawlerPortraits.length})</h1>
      <RaritySection title={`Starting Brawlers (${portraitsByRarity['Common'].length})`} portraits={portraitsByRarity['Common']} />
      <RaritySection title={`Rare (${portraitsByRarity['Rare'].length})`} portraits={portraitsByRarity['Rare']} />
      <RaritySection title={`Super Rare (${portraitsByRarity['Super Rare'].length})`} portraits={portraitsByRarity['Super Rare']} />
      <RaritySection title={`Epic (${portraitsByRarity['Epic'].length})`} portraits={portraitsByRarity['Epic']} />
      <RaritySection title={`Mythic (${portraitsByRarity['Mythic'].length})`} portraits={portraitsByRarity['Mythic']} />
      <RaritySection title={`Legendary (${portraitsByRarity['Legendary'].length})`} portraits={portraitsByRarity['Legendary']} />
      <RaritySection
        title={`Ultra Legendary (${portraitsByRarity['Ultra Legendary'].length})`}
        portraits={portraitsByRarity['Ultra Legendary']}
      />
    </section>
  );
}
