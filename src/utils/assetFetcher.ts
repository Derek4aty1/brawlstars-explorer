import { readFileSync } from 'fs';
import { join } from 'path';
import { cache } from 'react';

export const getCachedAllBrawlerData = cache(async () => {
  const filePath = join(process.cwd(), 'public', 'data', 'brawlerData.json');
  const fileContents = readFileSync(filePath, 'utf8');
  const allBrawlerData: BrawlerData[] = JSON.parse(fileContents);
  allBrawlerData.forEach(brawler => {
    brawler.skins.forEach(skin => {
      skin.file = `/images/skins/${skin.file}`;
    });
  });
  return allBrawlerData;
});

export async function getBrawlerData(brawlerName: string): Promise<BrawlerData | undefined> {
  const allBrawlerData = await getCachedAllBrawlerData();
  const brawlerData = allBrawlerData.find(data => data.name.toLowerCase() === brawlerName.toLowerCase());
  return brawlerData;
}

export function getAllBrawlerNames(): string[] {
  const filePath = join(process.cwd(), 'public', 'data', 'brawlerData.json');
  const fileContents = readFileSync(filePath, 'utf8');
  const allBrawlerData: BrawlerData[] = JSON.parse(fileContents);
  const allBrawlerNames = allBrawlerData.map(brawler => brawler.name);
  return allBrawlerNames;
}

type BrawlerData = {
  name: string;
  rarity: string;
  portrait: string;
  skins: {
    name: string;
    file: string;
  }[];
}
