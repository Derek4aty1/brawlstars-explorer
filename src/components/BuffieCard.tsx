import { BrawlerBuffie, BrawlerSkin } from '@/types/BrawlerTypes';
import FadeInImage from '@/components/FadeInImage';

export default function BuffieCard({ buffie }: { buffie: BrawlerBuffie }) {
  return (
    <figure className="flex h-full w-full flex-col items-center">
      <FadeInImage
        src={buffie.imageSrc}
        alt={buffie.name}
        fill
        draggable={false}
        wrapperClassName="h-[128px] w-[256px]"
        className="object-contain"
      />
      <figcaption className="mt-2 w-full text-lg uppercase">{buffie.name}</figcaption>
    </figure>
  );
}
