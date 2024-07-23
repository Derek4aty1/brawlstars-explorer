import BrawlerPortrait from "@/components/BrawlerPortrait";
import { BrawlerRarity, PortraitData } from "@/types/BrawlerTypes";

const allBrawlers: PortraitData[] = [
  { name: '8-BIT', path: '/images/portraits/8bit.png', rarity: BrawlerRarity.SuperRare },
  { name: 'AMBER', path: '/images/portraits/amber.png', rarity: BrawlerRarity.Legendary },
  { name: 'ANGELO', path: '/images/portraits/angelo.png', rarity: BrawlerRarity.Epic },
  { name: 'ASH', path: '/images/portraits/ash.png', rarity: BrawlerRarity.Epic },
  { name: 'BARLEY', path: '/images/portraits/barley.png', rarity: BrawlerRarity.Rare },
  { name: 'BEA', path: '/images/portraits/bea.png', rarity: BrawlerRarity.Epic },
  { name: 'BELLE', path: '/images/portraits/belle.png', rarity: BrawlerRarity.Epic },
  { name: 'BERRY', path: '/images/portraits/berry.png', rarity: BrawlerRarity.Epic },
  { name: 'BIBI', path: '/images/portraits/bibi.png', rarity: BrawlerRarity.Epic },
  { name: 'BO', path: '/images/portraits/bo.png', rarity: BrawlerRarity.Epic },
  { name: 'BONNIE', path: '/images/portraits/bonnie.png', rarity: BrawlerRarity.Epic },
  { name: 'BROCK', path: '/images/portraits/brock.png', rarity: BrawlerRarity.Rare },
  { name: 'BULL', path: '/images/portraits/bull.png', rarity: BrawlerRarity.Rare },
  { name: 'BUSTER', path: '/images/portraits/buster.png', rarity: BrawlerRarity.Mythic },
  { name: 'BUZZ', path: '/images/portraits/buzz.png', rarity: BrawlerRarity.Mythic },
  { name: 'BYRON', path: '/images/portraits/byron.png', rarity: BrawlerRarity.Mythic },
  { name: 'CARL', path: '/images/portraits/carl.png', rarity: BrawlerRarity.SuperRare },
  { name: 'CHARLIE', path: '/images/portraits/charlie.png', rarity: BrawlerRarity.Mythic },
  { name: 'CHESTER', path: '/images/portraits/chester.png', rarity: BrawlerRarity.Legendary },
  { name: 'CHUCK', path: '/images/portraits/chuck.png', rarity: BrawlerRarity.Mythic },
  { name: 'CLANCY', path: '/images/portraits/clancy.png', rarity: BrawlerRarity.Mythic },
  { name: 'COLETTE', path: '/images/portraits/colette.png', rarity: BrawlerRarity.Epic },
  { name: 'COLT', path: '/images/portraits/colt.png', rarity: BrawlerRarity.Rare },
  { name: 'CORDELIUS', path: '/images/portraits/cordelius.png', rarity: BrawlerRarity.Legendary },
  { name: 'CROW', path: '/images/portraits/crow.png', rarity: BrawlerRarity.Legendary },
  { name: 'DARRYL', path: '/images/portraits/darryl.png', rarity: BrawlerRarity.SuperRare },
  { name: 'DOUG', path: '/images/portraits/doug.png', rarity: BrawlerRarity.Mythic },
  { name: 'DRACO', path: '/images/portraits/draco.png', rarity: BrawlerRarity.Legendary },
  { name: 'DYNAMIKE', path: '/images/portraits/dynamike.png', rarity: BrawlerRarity.SuperRare },
  { name: 'EDGAR', path: '/images/portraits/edgar.png', rarity: BrawlerRarity.Epic },
  { name: 'EL PRIMO', path: '/images/portraits/elprimo.png', rarity: BrawlerRarity.Rare },
  { name: 'EMZ', path: '/images/portraits/emz.png', rarity: BrawlerRarity.Epic },
  { name: 'EVE', path: '/images/portraits/eve.png', rarity: BrawlerRarity.Mythic },
  { name: 'FANG', path: '/images/portraits/fang.png', rarity: BrawlerRarity.Mythic },
  { name: 'FRANK', path: '/images/portraits/frank.png', rarity: BrawlerRarity.Epic },
  { name: 'GALE', path: '/images/portraits/gale.png', rarity: BrawlerRarity.Epic },
  { name: 'GENE', path: '/images/portraits/gene.png', rarity: BrawlerRarity.Mythic },
  { name: 'GRAY', path: '/images/portraits/gray.png', rarity: BrawlerRarity.Mythic },
  { name: 'GRIFF', path: '/images/portraits/griff.png', rarity: BrawlerRarity.Epic },
  { name: 'GROM', path: '/images/portraits/grom.png', rarity: BrawlerRarity.Epic },
  { name: 'GUS', path: '/images/portraits/gus.png', rarity: BrawlerRarity.SuperRare },
  { name: 'HANK', path: '/images/portraits/hank.png', rarity: BrawlerRarity.Epic },
  { name: 'JACKY', path: '/images/portraits/jacky.png', rarity: BrawlerRarity.SuperRare },
  { name: 'JANET', path: '/images/portraits/janet.png', rarity: BrawlerRarity.Mythic },
  { name: 'JESSIE', path: '/images/portraits/jessie.png', rarity: BrawlerRarity.SuperRare },
  { name: 'KIT', path: '/images/portraits/kit.png', rarity: BrawlerRarity.Legendary },
  { name: 'LARRY & LAWRIE', path: '/images/portraits/larry&lawrie.png', rarity: BrawlerRarity.Epic },
  { name: 'LEON', path: '/images/portraits/leon.png', rarity: BrawlerRarity.Legendary },
  { name: 'LILY', path: '/images/portraits/lily.png', rarity: BrawlerRarity.Mythic },
  { name: 'LOLA', path: '/images/portraits/lola.png', rarity: BrawlerRarity.Epic },
  { name: 'LOU', path: '/images/portraits/lou.png', rarity: BrawlerRarity.Mythic },
  { name: 'MAISIE', path: '/images/portraits/maisie.png', rarity: BrawlerRarity.Epic },
  { name: 'MANDY', path: '/images/portraits/mandy.png', rarity: BrawlerRarity.Epic },
  { name: 'MAX', path: '/images/portraits/max.png', rarity: BrawlerRarity.Mythic },
  { name: 'MEG', path: '/images/portraits/meg.png', rarity: BrawlerRarity.Legendary },
  { name: 'MELODIE', path: '/images/portraits/melodie.png', rarity: BrawlerRarity.Mythic },
  { name: 'MICO', path: '/images/portraits/mico.png', rarity: BrawlerRarity.Mythic },
  { name: 'MORTIS', path: '/images/portraits/mortis.png', rarity: BrawlerRarity.Mythic },
  { name: 'MR. P', path: '/images/portraits/mrp.png', rarity: BrawlerRarity.Mythic },
  { name: 'NANI', path: '/images/portraits/nani.png', rarity: BrawlerRarity.Epic },
  { name: 'NITA', path: '/images/portraits/nita.png', rarity: BrawlerRarity.Rare },
  { name: 'OTIS', path: '/images/portraits/otis.png', rarity: BrawlerRarity.Mythic },
  { name: 'PAM', path: '/images/portraits/pam.png', rarity: BrawlerRarity.Epic },
  { name: 'PEARL', path: '/images/portraits/pearl.png', rarity: BrawlerRarity.Epic },
  { name: 'PENNY', path: '/images/portraits/penny.png', rarity: BrawlerRarity.SuperRare },
  { name: 'PIPER', path: '/images/portraits/piper.png', rarity: BrawlerRarity.Epic },
  { name: 'POCO', path: '/images/portraits/poco.png', rarity: BrawlerRarity.Rare },
  { name: 'RICO', path: '/images/portraits/rico.png', rarity: BrawlerRarity.SuperRare },
  { name: 'ROSA', path: '/images/portraits/rosa.png', rarity: BrawlerRarity.Rare },
  { name: 'R-T', path: '/images/portraits/rt.png', rarity: BrawlerRarity.Mythic },
  { name: 'RUFFS', path: '/images/portraits/ruffs.png', rarity: BrawlerRarity.Mythic },
  { name: 'SAM', path: '/images/portraits/sam.png', rarity: BrawlerRarity.Epic },
  { name: 'SANDY', path: '/images/portraits/sandy.png', rarity: BrawlerRarity.Legendary },
  { name: 'SHELLY', path: '/images/portraits/shelly.png', rarity: BrawlerRarity.TrophyRoad },
  { name: 'SPIKE', path: '/images/portraits/spike.png', rarity: BrawlerRarity.Legendary },
  { name: 'SPROUT', path: '/images/portraits/sprout.png', rarity: BrawlerRarity.Mythic },
  { name: 'SQUEAK', path: '/images/portraits/squeak.png', rarity: BrawlerRarity.Mythic },
  { name: 'STU', path: '/images/portraits/stu.png', rarity: BrawlerRarity.Epic },
  { name: 'SURGE', path: '/images/portraits/surge.png', rarity: BrawlerRarity.Legendary },
  { name: 'TARA', path: '/images/portraits/tara.png', rarity: BrawlerRarity.Mythic },
  { name: 'TICK', path: '/images/portraits/tick.png', rarity: BrawlerRarity.SuperRare },
  { name: 'WILLOW', path: '/images/portraits/willow.png', rarity: BrawlerRarity.Mythic }
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
    <div className="flex flex-col items-center gap-2 py-4">
      <h2 className={`w-full text-xl ${colorVariants[brawlers[0].rarity]}`}>{title}</h2>
      <div className="w-fit grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {brawlers.map(portrait => (
          <BrawlerPortrait key={portrait.name} portrait={portrait} />
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
