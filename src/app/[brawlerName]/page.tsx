import Image from 'next/image';
import SkinCard from '@/components/SkinCard';
import { getBrawlerData, getAllBrawlerNames } from '@/utils/brawlerDataFetcher';
import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { getBrawlerClassIcon } from '@/utils/uiAssetMapper';

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
      <h2 className="flex w-full justify-center pt-1 text-xl uppercase">
        <Image
          src={getBrawlerClassIcon(brawlerData.class)}
          alt={`${brawlerData.class} class icon`}
          width={28}
          height={28}
          priority
          draggable={false}
          className="mr-1 select-none object-contain"
        />
        {brawlerData.class}
      </h2>
      <h2 className="w-full pt-1 text-xl">Mastery Title: {brawlerData.masteryTitle}</h2>
      <h3 className="w-full whitespace-pre-line pt-1 text-lg xl:max-w-[50%]">{brawlerData.description}</h3>
      <div className="grid w-fit grid-cols-1 items-start gap-8 pt-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {brawlerData.skins.map((skin, index) => (
          <SkinCard key={`${skin.name}-${index}`} skin={skin} />
        ))}
      </div>
    </section>
  );
}
