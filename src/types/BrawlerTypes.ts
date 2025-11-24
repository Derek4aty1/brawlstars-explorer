export type BrawlerRarity = 'Common' | 'Rare' | 'Super Rare' | 'Epic' | 'Mythic' | 'Legendary' | 'Ultra Legendary';
export type BrawlerClass = 'Artillery' | 'Assassin' | 'Controller' | 'Damage Dealer' | 'Marksman' | 'Support' | 'Tank';
export type BrawlerSkinRarity = 'Rare' | 'Super Rare' | 'Epic' | 'Mythic' | 'Legendary' | 'Hypercharge';

const SKIN_THEMES = [
  'Angels vs. Demons',
  'Animal Kingdom',
  'Anniversary',
  "April Fool's",
  'Baby Shark',
  'Battle For Katana Kingdom',
  'Biodome',
  'Bizarre Circus',
  'Bountiful Harvest',
  'Brawl Academy',
  'Brawl Unite',
  'Brawl Pass',
  'Brawl Stars Championship',
  'Brawl-o-ween',
  'Brawlidays',
  'Brawlnaval',
  'Brown & Friends',
  'BT21',
  'Bunny Brigade',
  'Carreta',
  'Cartoon Studios',
  'City Troubles',
  'Clash Stories',
  'Come Play With Us!',
  'Cursed Pirates',
  'CyberBrawl',
  'Dark Sands',
  'Dark Winter Tales',
  'Deep Sea League',
  'Enchanted Woods',
  'Flaming',
  'Freedom!',
  'Gaming',
  'Gift Shop',
  'Godzilla',
  'Golden Brawl Ball',
  'Gym Rats',
  'Kaiju Invasion',
  'Knights!',
  'Latin America Master League',
  'Legends of Hades',
  'Legends of Olympus',
  'License to Brawl',
  'Lunar Brawl',
  'Lunar Stories',
  'Max Force',
  'Mecha Squad',
  'Misc',
  'My Brawlentine',
  'Northern Saga',
  'Once Upon',
  'Outlaws',
  'Pro Pass',
  'PSG',
  'Ranked',
  'Retropolis Nights',
  'Royals',
  'Rumble Jungle Heroes',
  'Sands of Time',
  'Skull Cave Clan',
  'SpongeBob',
  'Squad Busters',
  'Starr Park Origins',
  'StarrForce Assemble',
  'Starrs of Brawlywood',
  'Starry Meal',
  'Streetwear',
  'Stunt Show',
  'Subway Surfers',
  'Sugar Rush',
  'Summer of Brawl',
  'Super Brawl',
  'Supercell Make',
  'Tales of the Sea',
  'The Ayakashi Clan',
  'The Bad Randoms',
  'The Calamity Gang',
  'The Golden Kawaii',
  'The Good Randoms',
  'The Mega',
  'The Omega',
  'The Red',
  'The Worst Bunch',
  'Toy Story',
  'True Gold',
  'True Silver',
  'Uno',
  'Vibing',
  "Warrior's Journey",
  'Wasteland',
] as const;

export type BrawlerSkinTheme = (typeof SKIN_THEMES)[number];

export type BrawlerGadget = {
  name: string;
  imageSrc: string;
  description: string;
};

export type AdditionalSkinImage = {
  src: string;
  label: string;
  size: 128 | 256;
};

export type BrawlerSkin = {
  name: string;
  rarity?: BrawlerSkinRarity;
  imageSrc: string;
  additionalImages?: AdditionalSkinImage[]; // Hypercharge/pets/turrets/etc.
  themes: BrawlerSkinTheme[];
};

export type BrawlerData = {
  name: string;
  rarity: BrawlerRarity;
  class: BrawlerClass;
  description: string;
  recordTitle: string;
  portraitImageSrc: string;
  gadgets: BrawlerGadget[];
  skins: BrawlerSkin[];
};

export type BrawlerPortrait = {
  name: string;
  rarity: BrawlerRarity;
  imageSrc: string;
};
