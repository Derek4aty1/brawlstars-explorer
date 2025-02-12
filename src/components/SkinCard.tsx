'use client';
import { BrawlerSkin } from "@/types/BrawlerTypes";
import { getSkinCollectionIcon, getSkinRarityIcon } from "@/utils/uiAssetMapper";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

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
      {(skin.rarity !== 'N/A' || skin.collections.length > 0) && (
        <div className="flex flex-wrap gap-2 pt-1">
          {skin.rarity !== 'N/A' && (
            <Image
              src={getSkinRarityIcon(skin.rarity)}
              alt={`${skin.rarity} skin rarity icon`}
              width={28}
              height={28}
              priority={true}
              draggable={false}
              style={{ objectFit: "contain" }}
              className="select-none"
            />
          )}
          {skin.collections.map((collection) => (
            <Image
              key={collection}
              src={getSkinCollectionIcon(collection)}
              alt={`${collection} skin collection icon`}
              width={28}
              height={28}
              priority={true}
              draggable={false}
              style={{ objectFit: "contain" }}
              className="select-none"
            />
          ))}
        </div>
      )}
    </figure>
  );
}
