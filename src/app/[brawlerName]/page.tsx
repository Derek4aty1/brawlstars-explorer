import Image from "next/image";
import SkinCard from "@/components/SkinCard";
import { getBrawlerData, getAllBrawlerNames } from "@/utils/brawlerDataFetcher";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getBrawlerClassIcon } from "@/utils/uiAssetMapper";

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
          src={getBrawlerClassIcon(brawlerData.class)}
          alt={`${brawlerData.class} class icon`}
          width={28}
          height={28}
          priority={true}
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
      <div className="pt-6 w-fit grid items-start gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {brawlerData.skins.map((skin, index) => (
          <SkinCard key={`${skin.name}-${index}`} skin={skin} />
        ))}
      </div>
    </section>
  );
}
