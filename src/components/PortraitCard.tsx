import { BrawlerPortrait } from "@/types/BrawlerTypes";
import { getRarityBackgroundColor } from "@/utils/uiAssetMapper";
import Link from "next/link";
import FadeInImage from "@/components/FadeInImage";

export default function PortraitCard({ portrait }: { portrait: BrawlerPortrait }) {
  // Couple of portraits are narrower than the others...not sure if this will get fixed in the future
  const objectFit = ['Pearl', 'Finx'].includes(portrait.name) ? 'cover' : 'contain';

  return (
    <Link href={`/${portrait.name}`} draggable={false} className="transition-transform active:scale-95">
      <figure draggable={false} className="flex flex-col items-center gap-2 border-[3px] border-transparent rounded-md transition-transform 
                                           hover:scale-105 hover:border-white hover:bg-white">
        <FadeInImage
          wrapperClassName={`w-[160px] aspect-[16/10] border-[3px] border-black shadow-2xl rounded ${getRarityBackgroundColor(portrait.rarity)}`}
          src={portrait.imageSrc}
          alt={`${portrait.name} portrait`}
          fill={true}
          draggable={false}
          className={`object-${objectFit} object-left`}
        >
          <figcaption className="absolute px-1 bottom-0 right-0 text-sm leading-5 uppercase">
            {portrait.name}
          </figcaption>
        </FadeInImage>
      </figure>
    </Link>
  );
}
