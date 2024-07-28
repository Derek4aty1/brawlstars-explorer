import PortraitCard from "@/components/PortraitCard";
import { BrawlerRarity, PortraitData } from "@/types/BrawlerTypes";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Brawlstars Explorer | All Brawlers`
  }
}

const allBrawlers: PortraitData[] = [
  { name: '8-Bit', path: '/images/portraits/8-bit.png', rarity: BrawlerRarity.SuperRare },
  { name: 'Amber', path: '/images/portraits/amber.png', rarity: BrawlerRarity.Legendary },
  { name: 'Angelo', path: '/images/portraits/angelo.png', rarity: BrawlerRarity.Epic },
  { name: 'Ash', path: '/images/portraits/ash.png', rarity: BrawlerRarity.Epic },
  { name: 'Barley', path: '/images/portraits/barley.png', rarity: BrawlerRarity.Rare },
  { name: 'Bea', path: '/images/portraits/bea.png', rarity: BrawlerRarity.Epic },
  { name: 'Belle', path: '/images/portraits/belle.png', rarity: BrawlerRarity.Epic },
  { name: 'Berry', path: '/images/portraits/berry.png', rarity: BrawlerRarity.Epic },
  { name: 'Bibi', path: '/images/portraits/bibi.png', rarity: BrawlerRarity.Epic },
  { name: 'Bo', path: '/images/portraits/bo.png', rarity: BrawlerRarity.Epic },
  { name: 'Bonnie', path: '/images/portraits/bonnie.png', rarity: BrawlerRarity.Epic },
  { name: 'Brock', path: '/images/portraits/brock.png', rarity: BrawlerRarity.Rare },
  { name: 'Bull', path: '/images/portraits/bull.png', rarity: BrawlerRarity.Rare },
  { name: 'Buster', path: '/images/portraits/buster.png', rarity: BrawlerRarity.Mythic },
  { name: 'Buzz', path: '/images/portraits/buzz.png', rarity: BrawlerRarity.Mythic },
  { name: 'Byron', path: '/images/portraits/byron.png', rarity: BrawlerRarity.Mythic },
  { name: 'Carl', path: '/images/portraits/carl.png', rarity: BrawlerRarity.SuperRare },
  { name: 'Charlie', path: '/images/portraits/charlie.png', rarity: BrawlerRarity.Mythic },
  { name: 'Chester', path: '/images/portraits/chester.png', rarity: BrawlerRarity.Legendary },
  { name: 'Chuck', path: '/images/portraits/chuck.png', rarity: BrawlerRarity.Mythic },
  { name: 'Clancy', path: '/images/portraits/clancy.png', rarity: BrawlerRarity.Mythic },
  { name: 'Colette', path: '/images/portraits/colette.png', rarity: BrawlerRarity.Epic },
  { name: 'Colt', path: '/images/portraits/colt.png', rarity: BrawlerRarity.Rare },
  { name: 'Cordelius', path: '/images/portraits/cordelius.png', rarity: BrawlerRarity.Legendary },
  { name: 'Crow', path: '/images/portraits/crow.png', rarity: BrawlerRarity.Legendary },
  { name: 'Darryl', path: '/images/portraits/darryl.png', rarity: BrawlerRarity.SuperRare },
  { name: 'Doug', path: '/images/portraits/doug.png', rarity: BrawlerRarity.Mythic },
  { name: 'Draco', path: '/images/portraits/draco.png', rarity: BrawlerRarity.Legendary },
  { name: 'Dynamike', path: '/images/portraits/dynamike.png', rarity: BrawlerRarity.SuperRare },
  { name: 'Edgar', path: '/images/portraits/edgar.png', rarity: BrawlerRarity.Epic },
  { name: 'El Primo', path: '/images/portraits/el-primo.png', rarity: BrawlerRarity.Rare },
  { name: 'Emz', path: '/images/portraits/emz.png', rarity: BrawlerRarity.Epic },
  { name: 'Eve', path: '/images/portraits/eve.png', rarity: BrawlerRarity.Mythic },
  { name: 'Fang', path: '/images/portraits/fang.png', rarity: BrawlerRarity.Mythic },
  { name: 'Frank', path: '/images/portraits/frank.png', rarity: BrawlerRarity.Epic },
  { name: 'Gale', path: '/images/portraits/gale.png', rarity: BrawlerRarity.Epic },
  { name: 'Gene', path: '/images/portraits/gene.png', rarity: BrawlerRarity.Mythic },
  { name: 'Gray', path: '/images/portraits/gray.png', rarity: BrawlerRarity.Mythic },
  { name: 'Griff', path: '/images/portraits/griff.png', rarity: BrawlerRarity.Epic },
  { name: 'Grom', path: '/images/portraits/grom.png', rarity: BrawlerRarity.Epic },
  { name: 'Gus', path: '/images/portraits/gus.png', rarity: BrawlerRarity.SuperRare },
  { name: 'Hank', path: '/images/portraits/hank.png', rarity: BrawlerRarity.Epic },
  { name: 'Jacky', path: '/images/portraits/jacky.png', rarity: BrawlerRarity.SuperRare },
  { name: 'Janet', path: '/images/portraits/janet.png', rarity: BrawlerRarity.Mythic },
  { name: 'Jessie', path: '/images/portraits/jessie.png', rarity: BrawlerRarity.SuperRare },
  { name: 'Kit', path: '/images/portraits/kit.png', rarity: BrawlerRarity.Legendary },
  { name: 'Larry & Lawrie', path: '/images/portraits/larry-&-lawrie.png', rarity: BrawlerRarity.Epic },
  { name: 'Leon', path: '/images/portraits/leon.png', rarity: BrawlerRarity.Legendary },
  { name: 'Lily', path: '/images/portraits/lily.png', rarity: BrawlerRarity.Mythic },
  { name: 'Lola', path: '/images/portraits/lola.png', rarity: BrawlerRarity.Epic },
  { name: 'Lou', path: '/images/portraits/lou.png', rarity: BrawlerRarity.Mythic },
  { name: 'Maisie', path: '/images/portraits/maisie.png', rarity: BrawlerRarity.Epic },
  { name: 'Mandy', path: '/images/portraits/mandy.png', rarity: BrawlerRarity.Epic },
  { name: 'Max', path: '/images/portraits/max.png', rarity: BrawlerRarity.Mythic },
  { name: 'Meg', path: '/images/portraits/meg.png', rarity: BrawlerRarity.Legendary },
  { name: 'Melodie', path: '/images/portraits/melodie.png', rarity: BrawlerRarity.Mythic },
  { name: 'Mico', path: '/images/portraits/mico.png', rarity: BrawlerRarity.Mythic },
  { name: 'Mortis', path: '/images/portraits/mortis.png', rarity: BrawlerRarity.Mythic },
  { name: 'Mr. P', path: '/images/portraits/mr.-p.png', rarity: BrawlerRarity.Mythic },
  { name: 'Nani', path: '/images/portraits/nani.png', rarity: BrawlerRarity.Epic },
  { name: 'Nita', path: '/images/portraits/nita.png', rarity: BrawlerRarity.Rare },
  { name: 'Otis', path: '/images/portraits/otis.png', rarity: BrawlerRarity.Mythic },
  { name: 'Pam', path: '/images/portraits/pam.png', rarity: BrawlerRarity.Epic },
  { name: 'Pearl', path: '/images/portraits/pearl.png', rarity: BrawlerRarity.Epic },
  { name: 'Penny', path: '/images/portraits/penny.png', rarity: BrawlerRarity.SuperRare },
  { name: 'Piper', path: '/images/portraits/piper.png', rarity: BrawlerRarity.Epic },
  { name: 'Poco', path: '/images/portraits/poco.png', rarity: BrawlerRarity.Rare },
  { name: 'Rico', path: '/images/portraits/rico.png', rarity: BrawlerRarity.SuperRare },
  { name: 'Rosa', path: '/images/portraits/rosa.png', rarity: BrawlerRarity.Rare },
  { name: 'R-T', path: '/images/portraits/r-t.png', rarity: BrawlerRarity.Mythic },
  { name: 'Ruffs', path: '/images/portraits/ruffs.png', rarity: BrawlerRarity.Mythic },
  { name: 'Sam', path: '/images/portraits/sam.png', rarity: BrawlerRarity.Epic },
  { name: 'Sandy', path: '/images/portraits/sandy.png', rarity: BrawlerRarity.Legendary },
  { name: 'Shelly', path: '/images/portraits/shelly.png', rarity: BrawlerRarity.TrophyRoad },
  { name: 'Spike', path: '/images/portraits/spike.png', rarity: BrawlerRarity.Legendary },
  { name: 'Sprout', path: '/images/portraits/sprout.png', rarity: BrawlerRarity.Mythic },
  { name: 'Squeak', path: '/images/portraits/squeak.png', rarity: BrawlerRarity.Mythic },
  { name: 'Stu', path: '/images/portraits/stu.png', rarity: BrawlerRarity.Epic },
  { name: 'Surge', path: '/images/portraits/surge.png', rarity: BrawlerRarity.Legendary },
  { name: 'Tara', path: '/images/portraits/tara.png', rarity: BrawlerRarity.Mythic },
  { name: 'Tick', path: '/images/portraits/tick.png', rarity: BrawlerRarity.SuperRare },
  { name: 'Willow', path: '/images/portraits/willow.png', rarity: BrawlerRarity.Mythic }
];
allBrawlers.sort((a, b) => a.rarity - b.rarity);

const trophyRoadBrawlers = allBrawlers.filter(portrait => portrait.rarity === BrawlerRarity.TrophyRoad);
const rareBrawlers = allBrawlers.filter(portrait => portrait.rarity === BrawlerRarity.Rare);
const superRareBrawlers = allBrawlers.filter(portrait => portrait.rarity === BrawlerRarity.SuperRare);
const epicBrawlers = allBrawlers.filter(portrait => portrait.rarity === BrawlerRarity.Epic);
const mythicBrawlers = allBrawlers.filter(portrait => portrait.rarity === BrawlerRarity.Mythic);
const legendaryBrawlers = allBrawlers.filter(portrait => portrait.rarity === BrawlerRarity.Legendary);

const colorVariants = {
  [BrawlerRarity.TrophyRoad]: 'text-trophy-road',
  [BrawlerRarity.Rare]: 'text-rare',
  [BrawlerRarity.SuperRare]: 'text-super-rare',
  [BrawlerRarity.Epic]: 'text-epic',
  [BrawlerRarity.Mythic]: 'text-mythic',
  [BrawlerRarity.Legendary]: 'text-legendary',
};

function RaritySection({ title, brawlers }: { title: string, brawlers: PortraitData[] }) {
  return (
    <div className="py-4 flex flex-col items-center gap-2">
      <h2 className={`w-full text-xl ${colorVariants[brawlers[0].rarity]}`}>{title}</h2>
      <div className="w-fit grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {brawlers.map(portrait => (
          <PortraitCard key={portrait.name} portrait={portrait} />
        ))}
      </div>
    </div>
  );
}

export default function AllBrawlersPage() {
  return (
    <section className="px-12 flex flex-col justify-center">
      <h1 className="w-full text-3xl font-semibold">
        ALL BRAWLERS ({allBrawlers.length})
      </h1>
      <RaritySection title={`Trophy Road (${trophyRoadBrawlers.length})`} brawlers={trophyRoadBrawlers} />
      <RaritySection title={`Rare (${rareBrawlers.length})`} brawlers={rareBrawlers} />
      <RaritySection title={`Super Rare (${superRareBrawlers.length})`} brawlers={superRareBrawlers} />
      <RaritySection title={`Epic (${epicBrawlers.length})`} brawlers={epicBrawlers} />
      <RaritySection title={`Mythic (${mythicBrawlers.length})`} brawlers={mythicBrawlers} />
      <RaritySection title={`Legendary (${legendaryBrawlers.length})`} brawlers={legendaryBrawlers} />
    </section>
  );
}
