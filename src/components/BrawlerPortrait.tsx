import Image from "next/image";
import { BrawlerPortrait, BrawlerRarity } from "@/app/page";

export default function Portrait({portrait}: {portrait: BrawlerPortrait}) {
    function getBackgroundColor(rarity: BrawlerRarity) {
        switch (rarity) {
            case BrawlerRarity.TrophyRoad:
                return '#94d7f4';
            case BrawlerRarity.Rare:
                return '#2edd1b';
            case BrawlerRarity.SuperRare:
                return '#0087fa';
            case BrawlerRarity.Epic:
                return '#b116ec';
            case BrawlerRarity.Mythic:
                return '#ff0021';
            case BrawlerRarity.Legendary:
                return '#fff11e';
        }
    }

    return (
        <figure className="flex flex-col items-center gap-2">
            <div className="relative w-[160px] h-[100px]">
              <Image
                src={portrait.path}
                alt={portrait.name}
                fill={true}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "contain", objectPosition: "left", backgroundColor: getBackgroundColor(portrait.rarity) }}
                className="border-[3px] border-black shadow-2xl rounded"
              />
              <figcaption className="absolute px-[6px] bottom-0 right-0 text-center text-white text-sm text-shadow-outline leading-6">
                {portrait.name}
              </figcaption>
            </div>
          </figure>
    )
}
