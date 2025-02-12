'use client';
import { BrawlerPortrait } from "@/types/BrawlerTypes";
import { getRarityBackgroundColor } from "@/utils/uiAssetMapper";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function PortraitCard({ portrait }: { portrait: BrawlerPortrait }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true
  });

  // Pearl's portrait is narrower than the others...not sure if this will get fixed in the future
  const objectFit = portrait.name === 'Pearl' ? 'cover' : 'contain';

  return (
    <Link href={`/${portrait.name}`} draggable={false} className="transition-transform active:scale-95">
      <figure draggable={false} className="flex flex-col items-center gap-2 border-[3px] border-transparent rounded-md transition-transform 
                                           hover:scale-105 hover:border-white hover:bg-white">
        <div ref={ref} className={`relative w-[160px] aspect-[16/10] border-[3px] border-black shadow-2xl rounded ${getRarityBackgroundColor(portrait.rarity)}`}>
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
          <figcaption className="absolute px-1 bottom-0 right-0 text-sm leading-5 uppercase">
            {portrait.name}
          </figcaption>
        </div>
      </figure>
    </Link>
  );
}
