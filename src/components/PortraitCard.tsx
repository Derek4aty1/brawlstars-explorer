'use client';
import { BrawlerRarity, PortraitData } from "@/types/BrawlerTypes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const rarityBackgroundColors = {
  [BrawlerRarity.TrophyRoad]: 'bg-trophy-road',
  [BrawlerRarity.Rare]: 'bg-rare',
  [BrawlerRarity.SuperRare]: 'bg-super-rare',
  [BrawlerRarity.Epic]: 'bg-epic',
  [BrawlerRarity.Mythic]: 'bg-mythic',
  [BrawlerRarity.Legendary]: 'bg-legendary',
};

export default function PortraitCard({ portrait }: { portrait: PortraitData }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true
  });

  const upperCaseName = portrait.name.toUpperCase();
  // Pearl's portrait is narrower than the others...not sure if this will get fixed in the future
  const objectFit = upperCaseName === 'PEARL' ? 'cover' : 'contain';

  return (
    <Link href={`/${portrait.name}`} prefetch={false} draggable={false} className="transition-transform active:scale-95">
      <figure draggable={false} className="flex flex-col items-center gap-2 border-[3px] border-transparent rounded-md transition-transform 
                       hover:scale-105 hover:border-white hover:bg-white">
        <div ref={ref} className={`relative w-[160px] aspect-[16/10] border-[3px] border-black shadow-2xl rounded ${rarityBackgroundColors[portrait.rarity]}`}>
          <Image
            src={portrait.imageSrc}
            alt={`${portrait.name} portrait`}
            fill={true}
            draggable={false}
            sizes="(max-width: 768px) 100vw, 50vw"
            onLoad={() => setIsLoaded(true)}
            style={{ objectFit: objectFit, objectPosition: "left" }}
            className={`select-none transition-opacity ease-linear ${isLoaded && inView ? 'opacity-100' : 'opacity-0'}`}
          />
          <figcaption className="absolute px-1 bottom-0 right-0 text-sm leading-5">
            {upperCaseName}
          </figcaption>
        </div>
      </figure>
    </Link>
  );
}
