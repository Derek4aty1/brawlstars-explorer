import Image from "next/image";

export type PortraitData = {
  name: string,
  path: string,
  rarity: BrawlerRarity
};

export enum BrawlerRarity {
  TrophyRoad,
  Rare,
  SuperRare,
  Epic,
  Mythic,
  Legendary
};

export default function BrawlerPortrait({ portrait }: { portrait: PortraitData }) {
  const colorVariants = {
    [BrawlerRarity.TrophyRoad]: 'bg-trophy-road',
    [BrawlerRarity.Rare]: 'bg-rare',
    [BrawlerRarity.SuperRare]: 'bg-super-rare',
    [BrawlerRarity.Epic]: 'bg-epic',
    [BrawlerRarity.Mythic]: 'bg-mythic',
    [BrawlerRarity.Legendary]: 'bg-legendary',
  };

  // Pearl's portrait is narrower than the others...not sure if this will get fixed in the future
  const objectFit = portrait.name === 'PEARL' ? 'cover' : 'contain';

  return (
    <figure className="flex flex-col items-center gap-2">
      <div className="relative w-[160px] h-[100px]">
        <Image
          src={portrait.path}
          alt={`${portrait.name} portrait`}
          fill={true}
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: objectFit, objectPosition: "left" }}
          className={`border-[3px] border-black shadow-2xl rounded ${colorVariants[portrait.rarity]}`}
        />
        <figcaption className="absolute px-[6px] bottom-0 right-0 text-center text-white text-sm text-shadow-outline leading-6">
          {portrait.name}
        </figcaption>
      </div>
    </figure>
  )
}
