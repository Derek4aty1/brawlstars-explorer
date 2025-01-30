import Image from "next/image";
import SkinCard from "@/components/SkinCard";
import { getBrawlerData, getAllBrawlerNames } from "@/utils/assetFetcher";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { BrawlerClass } from "@/types/BrawlerTypes";

type Params = Promise<{ brawlerName: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { brawlerName } = await params;
  const decodedBrawlerName = decodeURIComponent(brawlerName);

  return {
    title: `Brawlstars Explorer | ${decodedBrawlerName}`
  }
}

export async function generateStaticParams() {
  const brawlerNames = await getAllBrawlerNames();
  return brawlerNames.map(name => ({
    brawlerName: name
  }));
}

const classImagePaths: Record<BrawlerClass, string> = {
  'Artillery': '/images/ui/icon-class-artillery.png',
  'Assassin': '/images/ui/icon-class-assassin.png',
  'Controller': '/images/ui/icon-class-controller.png',
  'Damage Dealer': '/images/ui/icon-class-damage-dealer.png',
  'Marksman': '/images/ui/icon-class-marksman.png',
  'Support': '/images/ui/icon-class-support.png',
  'Tank': '/images/ui/icon-class-tank.png'
};

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
    <section className="p-8 flex flex-col justify-center items-center">
      <h1 className="w-full text-3xl uppercase">
        {brawlerData.name} ({brawlerData.skins.length})
      </h1>
      <h2 className="pt-1 w-full text-xl uppercase flex justify-center ">
        <Image
          src={`${classImagePaths[brawlerData.class]}`}
          alt={`${brawlerData.class} class icon`}
          width={28}
          height={28}
          draggable={false}
          style={{ objectFit: "contain" }}
          className="select-none mr-1"
        />
        {brawlerData.class}
      </h2>
      <h2 className="pt-1 w-full text-xl">
        Mastery Title: {brawlerData.masteryTitle}
      </h2>
      <h3 className="pt-1 w-full text-lg whitespace-pre-line xl:max-w-[50%]">
        {brawlerData.description}
      </h3>
      <div className="pt-6 w-fit grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {brawlerData.skins.map((skin, index) => (
          <SkinCard key={`${index}-${skin.name}`} skin={skin} />
        ))}
      </div>
    </section>
  );
}
