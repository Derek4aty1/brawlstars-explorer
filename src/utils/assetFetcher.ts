import { BrawlerData, PortraitData } from '@/types/BrawlerTypes';
import { readFileSync } from 'fs';
import { join } from 'path';
import { cache } from 'react';

export const getCachedAllBrawlerData = cache(async (): Promise<BrawlerData[]> => {
  const filePath = join(process.cwd(), 'public', 'data', 'brawlerData.json');
  const fileContents = readFileSync(filePath, 'utf8');
  const allBrawlerData: BrawlerData[] = JSON.parse(fileContents);
  allBrawlerData.forEach(brawler => {
    brawler.skins.forEach(skin => {
      skin.imageSrc = `/images/skins/${skin.imageSrc}`;
    });
  });
  return allBrawlerData;
});

export const getCachedAllPortraitData = cache(async (): Promise<PortraitData[]> => {
  const allBrawlerData = await getCachedAllBrawlerData();
  const allPortraitData: PortraitData[] = allBrawlerData.map(brawler => ({
    name: brawler.name,
    imageSrc: `/images/portraits/${brawler.portrait}`,
    rarity: brawler.rarity
  }));
  return allPortraitData;
});

export async function getBrawlerData(brawlerName: string): Promise<BrawlerData | undefined> {
  const allBrawlerData = await getCachedAllBrawlerData();
  const brawlerData = allBrawlerData.find(data => data.name.toLowerCase() === brawlerName.toLowerCase());
  return brawlerData;
}

export async function getAllBrawlerNames(): Promise<string[]> {
  const allBrawlerData = await getCachedAllBrawlerData();
  const allBrawlerNames = allBrawlerData.map(brawler => brawler.name);
  return allBrawlerNames;
}
