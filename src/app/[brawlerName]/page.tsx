import SkinCard from "@/components/SkinCard";
import { getBrawlerData } from "@/utils/assetFetcher";

export default function BrawlerPage({ params: { brawlerName } }: { params: { brawlerName: string } }) {
    const decodedBrawlerName = decodeURIComponent(brawlerName);
    const brawlerData = getBrawlerData(decodedBrawlerName);
    
    // Data file should be sorted already, but if not then sort alphabetically after default skin
    const skins = brawlerData.skins.sort((a, b) => {
        const aNameLower = a.name.toLowerCase();
        const bNameLower = b.name.toLowerCase();
        const decodedLower = decodedBrawlerName.toLowerCase();

        if (aNameLower === decodedLower && bNameLower === decodedLower) {
            return 0;
        } else if (aNameLower === decodedLower) {
            return -1;
        } else if (bNameLower === decodedLower) {
            return 1;
        } else {
            return a.name.localeCompare(b.name);
        }
    });

    return (
        <section className="px-12 flex flex-col justify-center items-center">
            <h1 className="pb-6 w-full text-3xl font-semibold">
                {brawlerData.name.toUpperCase()} ({skins.length})
            </h1>
            <div className="w-fit grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {skins.map(skin => (
                    <SkinCard key={skin.name} name={skin.name} file={skin.file} />
                ))}
            </div>
        </section>
    );
}
