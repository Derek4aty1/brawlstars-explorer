import { BrawlerClass, BrawlerRarity, BrawlerSkinRarity, BrawlerSkinTheme } from '@/types/BrawlerTypes';

const rarityTextColors: Record<BrawlerRarity, string> = {
  'Common': 'text-common',
  'Rare': 'text-rare',
  'Super Rare': 'text-super-rare',
  'Epic': 'text-epic',
  'Mythic': 'text-mythic',
  'Legendary': 'text-legendary',
  'Ultra Legendary': 'text-ultra-legendary',
};

export function getRarityTextColor(rarity: BrawlerRarity): string {
  return rarityTextColors[rarity] || '';
}

const rarityBackgroundColors: Record<BrawlerRarity, string> = {
  'Common': 'bg-common',
  'Rare': 'bg-rare',
  'Super Rare': 'bg-super-rare',
  'Epic': 'bg-epic',
  'Mythic': 'bg-mythic',
  'Legendary': 'bg-legendary',
  'Ultra Legendary': 'bg-ultra-legendary',
};

export function getRarityBackgroundColor(rarity: BrawlerRarity): string {
  return rarityBackgroundColors[rarity] || '';
}

const classesFolderPath = '/images/ui/classes';
const brawlerClassImagePaths: Record<BrawlerClass, string> = {
  'Artillery': `${classesFolderPath}/artillery.png`,
  'Assassin': `${classesFolderPath}/assassin.png`,
  'Controller': `${classesFolderPath}/controller.png`,
  'Damage Dealer': `${classesFolderPath}/damage-dealer.png`,
  'Marksman': `${classesFolderPath}/marksman.png`,
  'Support': `${classesFolderPath}/support.png`,
  'Tank': `${classesFolderPath}/tank.png`,
};

export function getBrawlerClassIcon(brawlerClass: BrawlerClass): string {
  return brawlerClassImagePaths[brawlerClass] || '';
}

const skinRaritiesFolderPath = '/images/ui/skins/rarities';
const skinRarityIconPaths: Record<BrawlerSkinRarity, string> = {
  'Rare': `${skinRaritiesFolderPath}/rare.png`,
  'Super Rare': `${skinRaritiesFolderPath}/super-rare.png`,
  'Epic': `${skinRaritiesFolderPath}/epic.png`,
  'Mythic': `${skinRaritiesFolderPath}/mythic.png`,
  'Legendary': `${skinRaritiesFolderPath}/legendary.png`,
  'Hypercharge': `${skinRaritiesFolderPath}/hypercharge.png`,
};

export function getSkinRarityIcon(rarity: BrawlerSkinRarity): string {
  return skinRarityIconPaths[rarity] || '';
}

const skinThemesFolderPath = '/images/ui/skins/themes';
const skinThemeIconPaths: Record<BrawlerSkinTheme, string> = {
  'Angels vs. Demons': `${skinThemesFolderPath}/angels-vs-demons.png`,
  'Animal Kingdom': `${skinThemesFolderPath}/animal-kingdom.png`,
  'Anniversary': `${skinThemesFolderPath}/anniversary.png`,
  "April Fool's": `${skinThemesFolderPath}/april-fools.png`,
  'Baby Shark': `${skinThemesFolderPath}/baby-shark.png`,
  'Battle For Katana Kingdom': `${skinThemesFolderPath}/battle-for-katana-kingdom.png`,
  'Biodome': `${skinThemesFolderPath}/biodome.png`,
  'Bizarre Circus': `${skinThemesFolderPath}/bizarre-circus.png`,
  'Bountiful Harvest': `${skinThemesFolderPath}/bountiful-harvest.png`,
  'Brawl Academy': `${skinThemesFolderPath}/brawl-academy.png`,
  'Brawl Unite': `${skinThemesFolderPath}/brawl-unite.png`,
  'Brawl Pass': `${skinThemesFolderPath}/brawl-pass.png`,
  'Brawl Stars Championship': `${skinThemesFolderPath}/brawl-stars-championship.png`,
  'Brawl-o-ween': `${skinThemesFolderPath}/brawl-o-ween.png`,
  'Brawlidays': `${skinThemesFolderPath}/brawlidays.png`,
  'Brawlnaval': `${skinThemesFolderPath}/brawlnaval.png`,
  'Brown & Friends': `${skinThemesFolderPath}/brown-&-friends.png`,
  'BT21': `${skinThemesFolderPath}/bt21.png`,
  'Bunny Brigade': `${skinThemesFolderPath}/bunny-brigade.png`,
  'Carreta': `${skinThemesFolderPath}/carreta.png`,
  'Cartoon Studios': `${skinThemesFolderPath}/cartoon-studios.png`,
  'City Troubles': `${skinThemesFolderPath}/city-troubles.png`,
  'Clash Stories': `${skinThemesFolderPath}/clash-stories.png`,
  'Come Play With Us!': `${skinThemesFolderPath}/come-play-with-us.png`,
  'Cursed Pirates': `${skinThemesFolderPath}/cursed-pirates.png`,
  'CyberBrawl': `${skinThemesFolderPath}/cyberbrawl.png`,
  'Dark Sands': `${skinThemesFolderPath}/dark-sands.png`,
  'Dark Winter Tales': `${skinThemesFolderPath}/dark-winter-tales.png`,
  'Deep Sea League': `${skinThemesFolderPath}/deep-sea-league.png`,
  'Enchanted Woods': `${skinThemesFolderPath}/enchanted-woods.png`,
  'Flaming': `${skinThemesFolderPath}/flaming.png`,
  'Freedom!': `${skinThemesFolderPath}/freedom.webp`,
  'Gaming': `${skinThemesFolderPath}/gaming.png`,
  'Gift Shop': `${skinThemesFolderPath}/gift-shop.png`,
  'Godzilla': `${skinThemesFolderPath}/godzilla.png`,
  'Golden Brawl Ball': `${skinThemesFolderPath}/golden-brawl-ball.png`,
  'Gym Rats': `${skinThemesFolderPath}/gym-rats.png`,
  'Kaiju Invasion': `${skinThemesFolderPath}/kaiju-invasion.png`,
  'Knights!': `${skinThemesFolderPath}/knights.png`,
  'Latin America Master League': `${skinThemesFolderPath}/latin-america-master-league.png`,
  'Legends of Hades': `${skinThemesFolderPath}/legends-of-hades.png`,
  'Legends of Olympus': `${skinThemesFolderPath}/legends-of-olympus.png`,
  'License to Brawl': `${skinThemesFolderPath}/license-to-brawl.png`,
  'Lunar Brawl': `${skinThemesFolderPath}/lunar-brawl.png`,
  'Lunar Stories': `${skinThemesFolderPath}/lunar-stories.png`,
  'Max Force': `${skinThemesFolderPath}/max-force.png`,
  'Mecha Squad': `${skinThemesFolderPath}/mecha-squad.png`,
  'Misc': `${skinThemesFolderPath}/misc.png`,
  'My Brawlentine': `${skinThemesFolderPath}/my-brawlentine.png`,
  'Northern Saga': `${skinThemesFolderPath}/northern-saga.png`,
  'Once Upon': `${skinThemesFolderPath}/once-upon.png`,
  'Outlaws': `${skinThemesFolderPath}/outlaws.png`,
  'Pro Pass': `${skinThemesFolderPath}/pro-pass.png`,
  'PSG': `${skinThemesFolderPath}/psg.png`,
  'Ranked': `${skinThemesFolderPath}/ranked.png`,
  'Retropolis Nights': `${skinThemesFolderPath}/retropolis-nights.png`,
  'Royals': `${skinThemesFolderPath}/royals.png`,
  'Rumble Jungle Heroes': `${skinThemesFolderPath}/rumble-jungle-heroes.png`,
  'Sands of Time': `${skinThemesFolderPath}/sands-of-time.png`,
  'Skull Cave Clan': `${skinThemesFolderPath}/skull-cave-clan.png`,
  'SpongeBob': `${skinThemesFolderPath}/spongebob.png`,
  'Squad Busters': `${skinThemesFolderPath}/squad-busters.png`,
  'Starr Park Origins': `${skinThemesFolderPath}/starr-park-origins.png`,
  'StarrForce Assemble': `${skinThemesFolderPath}/starrforce-assemble.png`,
  'Starrs of Brawlywood': `${skinThemesFolderPath}/starrs-of-brawlywood.png`,
  'Starry Meal': `${skinThemesFolderPath}/starry-meal.png`,
  'Steampunk': `${skinThemesFolderPath}/steampunk.png`,
  'Stranger Things': `${skinThemesFolderPath}/stranger-things.png`,
  'Streetwear': `${skinThemesFolderPath}/streetwear.png`,
  'Stunt Show': `${skinThemesFolderPath}/stunt-show.png`,
  'Subway Surfers': `${skinThemesFolderPath}/subway-surfers.png`,
  'Sugar Rush': `${skinThemesFolderPath}/sugar-rush.png`,
  'Summer of Brawl': `${skinThemesFolderPath}/summer-of-brawl.png`,
  'Super Brawl': `${skinThemesFolderPath}/super-brawl.png`,
  'Supercell Make': `${skinThemesFolderPath}/supercell-make.png`,
  'Tales of the Sea': `${skinThemesFolderPath}/tales-of-the-sea.png`,
  'The Ayakashi Clan': `${skinThemesFolderPath}/the-ayakashi-clan.png`,
  'The Bad Randoms': `${skinThemesFolderPath}/the-bad-randoms.png`,
  'The Calamity Gang': `${skinThemesFolderPath}/the-calamity-gang.png`,
  'The Golden Kawaii': `${skinThemesFolderPath}/the-golden-kawaii.png`,
  'The Good Randoms': `${skinThemesFolderPath}/the-good-randoms.png`,
  'The Mega': `${skinThemesFolderPath}/the-mega.png`,
  'The Omega': `${skinThemesFolderPath}/the-omega.png`,
  'The Red': `${skinThemesFolderPath}/the-red.png`,
  'The Worst Bunch': `${skinThemesFolderPath}/the-worst-bunch.png`,
  'Toy Story': `${skinThemesFolderPath}/toy-story.png`,
  'True Gold': `${skinThemesFolderPath}/true-gold.png`,
  'True Silver': `${skinThemesFolderPath}/true-silver.png`,
  'Uno': `${skinThemesFolderPath}/uno.png`,
  'Vibing': `${skinThemesFolderPath}/vibing.png`,
  "Warrior's Journey": `${skinThemesFolderPath}/warriors-journey.png`,
  'Wasteland': `${skinThemesFolderPath}/wasteland.png`,
};

export function getSkinThemeIcon(theme: BrawlerSkinTheme): string {
  return skinThemeIconPaths[theme] || '';
}
