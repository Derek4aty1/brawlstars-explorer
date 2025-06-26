import Image from 'next/image';
import SkinCard from '@/components/SkinCard';
import { getBrawlerData, getAllBrawlerNames } from '@/utils/brawlerDataFetcher';
import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { getBrawlerClassIcon } from '@/utils/uiAssetMapper';
import FadeInImage from '@/components/FadeInImage';
import { BrawlerSkin } from '@/types/BrawlerTypes';

type Params = Promise<{ brawlerName: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { brawlerName } = await params;
  const decodedBrawlerName = decodeURIComponent(brawlerName);

  return {
    title: `Brawlstars Explorer | ${decodedBrawlerName}`,
  };
}

export async function generateStaticParams() {
  const brawlerNames = await getAllBrawlerNames();
  return brawlerNames.map((name) => ({
    brawlerName: name,
  }));
}

function SkinGrid({ skins }: { skins: BrawlerSkin[] }) {
  return (
    <div className="mt-6 grid w-fit grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {skins.map((skin, index) => (
        <SkinCard key={`${skin.name}-${index}`} skin={skin} />
      ))}
    </div>
  );
}

export default async function BrawlerPage({ params }: { params: Params }) {
  const { brawlerName } = await params;
  const decodedBrawlerName = decodeURIComponent(brawlerName);
  const brawlerData = await getBrawlerData(decodedBrawlerName);

  if (!brawlerData) {
    return notFound();
  }

  // Redirect for casing differences
  if (decodedBrawlerName !== brawlerData.name) {
    return redirect(`/${brawlerData.name}`);
  }

  return (
    <section className="flex flex-col items-center justify-center p-8">
      <h1 className="w-full text-3xl uppercase">
        {brawlerData.name} ({brawlerData.skins.length})
      </h1>
      <h2 className="mt-1 flex w-full items-center justify-center text-xl uppercase">
        <FadeInImage
          src={getBrawlerClassIcon(brawlerData.class)}
          alt={`${brawlerData.class} class icon`}
          width={32}
          height={32}
          draggable={false}
          wrapperClassName="mr-1 h-[32px] w-[32px] flex items-center justify-center"
          className="select-none"
        />
        {brawlerData.class}
      </h2>
      <h2 className="mt-1 w-full text-xl">Record Title: {brawlerData.recordTitle}</h2>
      <h3 className="mt-1 w-full whitespace-pre-line text-lg xl:max-w-[50%]">{brawlerData.description}</h3>
      <SkinGrid skins={brawlerData.skins} />
    </section>
  );
}
