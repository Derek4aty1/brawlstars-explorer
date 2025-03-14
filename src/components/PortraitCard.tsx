import { BrawlerPortrait } from '@/types/BrawlerTypes';
import { getRarityBackgroundColor } from '@/utils/uiAssetMapper';
import Link from 'next/link';
import FadeInImage from '@/components/FadeInImage';

export default function PortraitCard({ portrait }: { portrait: BrawlerPortrait }) {
  // Couple of portraits are narrower than the others...not sure if this will get fixed in the future
  const objectFit = ['Pearl', 'Finx'].includes(portrait.name) ? 'cover' : 'contain';

  return (
    <Link
      href={`/${portrait.name}`}
      draggable={false}
      className="rounded-md border-[3px] border-transparent transition-transform hover:scale-105 hover:border-white hover:bg-white active:scale-100"
    >
      <figure className={`relative rounded border-[3px] border-black shadow-2xl ${getRarityBackgroundColor(portrait.rarity)}`}>
        <FadeInImage
          src={portrait.imageSrc}
          alt={`${portrait.name} portrait`}
          fill
          draggable={false}
          wrapperClassName="w-[160px] h-[100px]"
          className={`object-${objectFit} object-left`}
        />
        <figcaption className="absolute bottom-0 right-0 mr-1 text-sm uppercase leading-5">{portrait.name}</figcaption>
      </figure>
    </Link>
  );
}
