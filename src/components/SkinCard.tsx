import { BrawlerSkin } from '@/types/BrawlerTypes';
import { getSkinThemeIcon, getSkinRarityIcon } from '@/utils/uiAssetMapper';
import Image from 'next/image';
import FadeInImage from '@/components/FadeInImage';

export default function SkinCard({ skin }: { skin: BrawlerSkin }) {
  // TODO: Change...this sucks and is only temporary.
  const spawnableSizeClasses = skin.secondaryImageSrc?.match(/-bruce\.|-astral\.|-no-clyde\.|-lawrie\.|-mecha\.|-hypercharged\./)
    ? 'w-[256px] h-[256px]'
    : 'w-[128px] h-[128px]';

  return (
    <figure className="flex h-full w-full flex-col items-center">
      <FadeInImage
        wrapperClassName="h-[256px] w-[256px]"
        src={skin.imageSrc}
        alt={`${skin.name} skin`}
        fill={true}
        draggable={false}
        className="object-contain"
      />
      {skin.secondaryImageSrc && (
        <FadeInImage
          wrapperClassName={`mt-4 ${spawnableSizeClasses}`}
          src={skin.secondaryImageSrc}
          alt={`${skin.name} spawn`}
          fill={true}
          draggable={false}
          className="object-contain"
        />
      )}
      <figcaption className="mt-2 w-full text-lg uppercase">{skin.name}</figcaption>
      {(skin.rarity || skin.themes.length > 0) && (
        <div className="mt-1 flex place-content-center items-center gap-2">
          {skin.rarity && (
            <Image
              src={getSkinRarityIcon(skin.rarity)}
              alt={`${skin.rarity} skin rarity icon`}
              width={32}
              height={32}
              priority={true}
              draggable={false}
              className="h-auto max-h-[32px] w-auto max-w-[32px] select-none object-contain"
            />
          )}
          {skin.themes.map((theme) => (
            <Image
              key={theme}
              src={getSkinThemeIcon(theme)}
              alt={`${theme} skin theme icon`}
              width={32}
              height={32}
              priority={true}
              draggable={false}
              className="h-auto max-h-[32px] w-auto max-w-[32px] select-none object-contain"
            />
          ))}
        </div>
      )}
    </figure>
  );
}
