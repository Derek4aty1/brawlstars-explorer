import { readFileSync } from 'fs';
import { join } from 'path';

export function getBrawlerData(brawlerName: string): BrawlerData {
  const filePath = join(process.cwd(), 'public', 'data', 'brawlerData.json');
  const fileContents = readFileSync(filePath, 'utf8');
  const allBrawlerData: BrawlerData[] = JSON.parse(fileContents);
  const brawlerData = allBrawlerData.find(data => data.name.toLowerCase() === brawlerName.toLowerCase());

  if (!brawlerData) {
    throw new Error(`Brawler data not found for brawler "${brawlerName}".`);
  }

  brawlerData.skins.forEach(skin => {
    skin.file = `/images/skins/${skin.file}`;
  });

  return brawlerData;
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
