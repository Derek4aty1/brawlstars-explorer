'use client';
import { BrawlerRarity, PortraitData } from "@/types/BrawlerTypes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";

const colorVariants = {
  [BrawlerRarity.TrophyRoad]: 'bg-trophy-road',
  [BrawlerRarity.Rare]: 'bg-rare',
  [BrawlerRarity.SuperRare]: 'bg-super-rare',
  [BrawlerRarity.Epic]: 'bg-epic',
  [BrawlerRarity.Mythic]: 'bg-mythic',
  [BrawlerRarity.Legendary]: 'bg-legendary',
};

export default function PortraitCard({ portrait }: { portrait: PortraitData }) {
  const router = useRouter()
  const { ref, inView } = useInView({
    triggerOnce: true
  });

  // Pearl's portrait is narrower than the others...not sure if this will get fixed in the future
  const objectFit = portrait.name === 'PEARL' ? 'cover' : 'contain';

  return (
    <figure onClick={() => router.push(`/${portrait.name}`)} className="flex flex-col items-center gap-2 border-[3px] border-transparent rounded-md transition-transform 
                       hover:scale-105 hover:border-white hover:bg-white">
      <div ref={ref} className={`relative w-[160px] aspect-[16/10] border-[3px] border-black shadow-2xl rounded ${colorVariants[portrait.rarity]}`}>
        <Image
          src={portrait.path}
          alt={`${portrait.name} portrait`}
          fill={true}
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: objectFit, objectPosition: "left" }}
          className={`transition-opacity ease-linear ${inView ? 'opacity-100' : 'opacity-0'}`}
        />
        <figcaption className="absolute px-1 bottom-0 right-0 text-sm leading-5">
          {portrait.name}
        </figcaption>
      </div>
    </figure>
  )
}