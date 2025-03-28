import { BrawlerSkin } from '@/types/BrawlerTypes';
import { getSkinThemeIcon, getSkinRarityIcon } from '@/utils/uiAssetMapper';
import FadeInImage from '@/components/FadeInImage';

export default function SkinCard({ skin }: { skin: BrawlerSkin }) {
  const secondarySizeClasses = skin.secondaryImageSize
    ? `w-[${skin.secondaryImageSize}px] h-[${skin.secondaryImageSize}px]`
    : 'w-[128px] h-[128px]';

  const icons = [
    ...(skin.rarity ? [{ key: skin.rarity, src: getSkinRarityIcon(skin.rarity), alt: `${skin.rarity} skin rarity icon` }] : []),
    ...skin.themes.map((theme) => ({ key: theme, src: getSkinThemeIcon(theme), alt: `${theme} skin theme icon` })),
  ];

  return (
    <figure className="flex h-full w-full flex-col items-center">
      <FadeInImage
        src={skin.imageSrc}
        alt={`${skin.name} skin`}
        fill
        draggable={false}
        wrapperClassName="h-[256px] w-[256px]"
        className="object-contain"
      />
      {skin.secondaryImageSrc && (
        <FadeInImage
          src={skin.secondaryImageSrc}
          alt={`${skin.name} secondary`}
          fill
          draggable={false}
          wrapperClassName={`mt-4 ${secondarySizeClasses}`}
          className="object-contain"
        />
      )}
      <figcaption className="mt-2 w-full text-lg uppercase">{skin.name}</figcaption>
      {icons.length > 0 && (
        <div className="mt-1 flex w-full place-content-center items-center gap-1.5">
          {icons.map(({ key, src, alt }) => (
            <FadeInImage
              key={key}
              src={src}
              alt={alt}
              title={key}
              width={32}
              height={32}
              draggable={false}
              wrapperClassName="w-[32px] h-[32px] flex items-center justify-center"
              className="h-auto max-h-[32px] w-auto max-w-[32px] select-none"
            />
          ))}
        </div>
      )}
    </figure>
  );
}
