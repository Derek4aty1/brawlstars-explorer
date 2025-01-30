'use client';
import { BrawlerSkin, BrawlerSkinRarity } from "@/types/BrawlerTypes";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const skinRarityIconPaths: Record<BrawlerSkinRarity, string> = {
  'N/A': '',
  'Rare': '/images/ui/icon-skin-rare.png',
  'Super Rare': '/images/ui/icon-skin-super-rare.png',
  'Epic': '/images/ui/icon-skin-epic.png',
  'Mythic': '/images/ui/icon-skin-mythic.png',
  'Legendary': '/images/ui/icon-skin-legendary.png',
  'Hypercharge': '/images/ui/icon-skin-hypercharge.png'
};

export default function SkinCard({ skin }: { skin: BrawlerSkin }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true
  });

  return (
    <figure className="flex flex-col w-full justify-center items-center">
      <div ref={ref} className="relative h-[256px] w-[256px]">
        <Image
          src={skin.imageSrc}
          alt={`${skin.name} skin`}
          fill={true}
          draggable={false}
          onLoad={() => setIsLoaded(true)}
          style={{ objectFit: "contain" }}
          className={`select-none transition-opacity ease-linear ${isLoaded && inView ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
      <figcaption className="w-full pt-2 text-lg uppercase">
        {skin.name}
      </figcaption>
      {skin.rarity !== 'N/A' && (
        <Image
          src={`${skinRarityIconPaths[skin.rarity]}`}
          alt={`${skin.rarity} skin rarity icon`}
          width={28}
          height={28}
          draggable={false}
          style={{ objectFit: "contain" }}
          className="select-none pt-1"
        />
      )}
    </figure>
  );
}
