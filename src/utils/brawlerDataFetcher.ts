import { BrawlerData, BrawlerPortrait } from '@/types/BrawlerTypes';
import { readFileSync } from 'fs';
import { join } from 'path';
import { cache } from 'react';

export const getCachedAllBrawlerData = cache(async (): Promise<BrawlerData[]> => {
  const filePath = join(process.cwd(), 'public/data/brawlerData.json');
  const fileContents = readFileSync(filePath, 'utf8');
  const allBrawlerData: BrawlerData[] = JSON.parse(fileContents);
  allBrawlerData.forEach((brawler) => {
    brawler.portraitImageSrc = `/images/portraits/${brawler.portraitImageSrc}`;
    brawler.gadgets.forEach((gadget) => {
      gadget.imageSrc = `/images/ui/gadgets/${gadget.imageSrc}`;
    });
    brawler.buffies?.forEach((buffy) => {
      buffy.imageSrc = `/images/buffies/${buffy.imageSrc}`;
    });
    brawler.skins.forEach((skin) => {
      skin.imageSrc = `/images/skins/${skin.imageSrc}`;
      if (skin.additionalImages) {
        skin.additionalImages.forEach((additionalImage) => {
          additionalImage.src = `/images/skins/${additionalImage.src}`;
        });
      }
    });
  });
  return allBrawlerData;
});

export const getCachedAllBrawlerPortraits = cache(async (): Promise<BrawlerPortrait[]> => {
  const allBrawlerData = await getCachedAllBrawlerData();
  const allBrawlerPortrait: BrawlerPortrait[] = allBrawlerData.map((brawler) => ({
    name: brawler.name,
    rarity: brawler.rarity,
    imageSrc: brawler.portraitImageSrc,
  }));
  return allBrawlerPortrait;
});

export async function getBrawlerData(brawlerName: string): Promise<BrawlerData | undefined> {
  const allBrawlerData = await getCachedAllBrawlerData();
  const brawlerData = allBrawlerData.find((data) => data.name.toLowerCase() === brawlerName.toLowerCase());
  return brawlerData;
}

export async function getAllBrawlerNames(): Promise<string[]> {
  const allBrawlerData = await getCachedAllBrawlerData();
  const allBrawlerNames = allBrawlerData.map((brawler) => brawler.name);
  return allBrawlerNames;
}
