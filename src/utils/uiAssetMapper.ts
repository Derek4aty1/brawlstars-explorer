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

const brawlerClassImagePaths: Record<BrawlerClass, string> = {
  'Artillery': '/images/ui/classes/artillery.png',
  'Assassin': '/images/ui/classes/assassin.png',
  'Controller': '/images/ui/classes/controller.png',
  'Damage Dealer': '/images/ui/classes/damage-dealer.png',
  'Marksman': '/images/ui/classes/marksman.png',
  'Support': '/images/ui/classes/support.png',
  'Tank': '/images/ui/classes/tank.png',
};

export function getBrawlerClassIcon(brawlerClass: BrawlerClass): string {
  return brawlerClassImagePaths[brawlerClass] || '';
}

const skinRarityIconPaths: Record<BrawlerSkinRarity, string> = {
  'Rare': '/images/ui/skins/rarities/rare.png',
  'Super Rare': '/images/ui/skins/rarities/super-rare.png',
  'Epic': '/images/ui/skins/rarities/epic.png',
  'Mythic': '/images/ui/skins/rarities/mythic.png',
  'Legendary': '/images/ui/skins/rarities/legendary.png',
  'Hypercharge': '/images/ui/skins/rarities/hypercharge.png',
};

export function getSkinRarityIcon(rarity: BrawlerSkinRarity): string {
  return skinRarityIconPaths[rarity] || '';
}

const skinThemeIconPaths: Record<BrawlerSkinTheme, string> = {
  'Angels vs. Demons': '/images/ui/skins/themes/angels-vs-demons.png',
  'Animal Kingdom': '/images/ui/skins/themes/animal-kingdom.png',
  'Anniversary': '/images/ui/skins/themes/anniversary.png',
  "April Fool's": '/images/ui/skins/themes/april-fools.png',
  'Baby Shark': '/images/ui/skins/themes/baby-shark.png',
  'Battle For Katana Kingdom': '/images/ui/skins/themes/battle-for-katana-kingdom.png',
  'Biodome': '/images/ui/skins/themes/biodome.png',
  'Bizarre Circus': '/images/ui/skins/themes/bizarre-circus.png',
  'Bountiful Harvest': '/images/ui/skins/themes/bountiful-harvest.png',
  'Brawl Academy': '/images/ui/skins/themes/brawl-academy.png',
  'Brawl Unite': '/images/ui/skins/themes/brawl-unite.png',
  'Brawl Pass': '/images/ui/skins/themes/brawl-pass.png',
  'Brawl Stars Championship': '/images/ui/skins/themes/brawl-stars-championship.png',
  'Brawl-o-ween': '/images/ui/skins/themes/brawl-o-ween.png',
  'Brawlidays': '/images/ui/skins/themes/brawlidays.png',
  'Brawlnaval': '/images/ui/skins/themes/brawlnaval.png',
  'Brown & Friends': '/images/ui/skins/themes/brown-&-friends.png',
  'BT21': '/images/ui/skins/themes/bt21.png',
  'Bunny Brigade': '/images/ui/skins/themes/bunny-brigade.png',
  'Carreta': '/images/ui/skins/themes/carreta.png',
  'Cartoon Studios': '/images/ui/skins/themes/cartoon-studios.png',
  'City Troubles': '/images/ui/skins/themes/city-troubles.png',
  'Clash Stories': '/images/ui/skins/themes/clash-stories.png',
  'Come Play With Us!': '/images/ui/skins/themes/come-play-with-us.png',
  'Cursed Pirates': '/images/ui/skins/themes/cursed-pirates.png',
  'CyberBrawl': '/images/ui/skins/themes/cyberbrawl.png',
  'Dark Sands': '/images/ui/skins/themes/dark-sands.png',
  'Dark Winter Tales': '/images/ui/skins/themes/dark-winter-tales.png',
  'Deep Sea League': '/images/ui/skins/themes/deep-sea-league.png',
  'Enchanted Woods': '/images/ui/skins/themes/enchanted-woods.png',
  'Flaming': '/images/ui/skins/themes/flaming.png',
  'Freedom!': '/images/ui/skins/themes/freedom.webp',
  'Gaming': '/images/ui/skins/themes/gaming.png',
  'Gift Shop': '/images/ui/skins/themes/gift-shop.png',
  'Godzilla': '/images/ui/skins/themes/godzilla.png',
  'Golden Brawl Ball': '/images/ui/skins/themes/golden-brawl-ball.png',
  'Gym Rats': '/images/ui/skins/themes/gym-rats.png',
  'Kaiju Invasion': '/images/ui/skins/themes/kaiju-invasion.png',
  'Knights!': '/images/ui/skins/themes/knights.png',
  'Latin America Master League': '/images/ui/skins/themes/latin-america-master-league.png',
  'Legends of Hades': '/images/ui/skins/themes/legends-of-hades.png',
  'Legends of Olympus': '/images/ui/skins/themes/legends-of-olympus.png',
  'License to Brawl': '/images/ui/skins/themes/license-to-brawl.png',
  'Lunar Brawl': '/images/ui/skins/themes/lunar-brawl.png',
  'Lunar Stories': '/images/ui/skins/themes/lunar-stories.png',
  'Max Force': '/images/ui/skins/themes/max-force.png',
  'Mecha Squad': '/images/ui/skins/themes/mecha-squad.png',
  'Misc': '/images/ui/skins/themes/misc.png',
  'My Brawlentine': '/images/ui/skins/themes/my-brawlentine.png',
  'Northern Saga': '/images/ui/skins/themes/northern-saga.png',
  'Once Upon': '/images/ui/skins/themes/once-upon.png',
  'Outlaws': '/images/ui/skins/themes/outlaws.png',
  'Pro Pass': '/images/ui/skins/themes/pro-pass.png',
  'PSG': '/images/ui/skins/themes/psg.png',
  'Ranked': '/images/ui/skins/themes/ranked.png',
  'Retropolis Nights': '/images/ui/skins/themes/retropolis-nights.png',
  'Royals': '/images/ui/skins/themes/royals.png',
  'Rumble Jungle Heroes': '/images/ui/skins/themes/rumble-jungle-heroes.png',
  'Sands of Time': '/images/ui/skins/themes/sands-of-time.png',
  'Skull Cave Clan': '/images/ui/skins/themes/skull-cave-clan.png',
  'SpongeBob': '/images/ui/skins/themes/spongebob.png',
  'Squad Busters': '/images/ui/skins/themes/squad-busters.png',
  'Starr Park Origins': '/images/ui/skins/themes/starr-park-origins.png',
  'StarrForce Assemble': '/images/ui/skins/themes/starrforce-assemble.png',
  'Starrs of Brawlywood': '/images/ui/skins/themes/starrs-of-brawlywood.png',
  'Starry Meal': '/images/ui/skins/themes/starry-meal.png',
  'Stranger Things': '/images/ui/skins/themes/stranger-things.png',
  'Streetwear': '/images/ui/skins/themes/streetwear.png',
  'Stunt Show': '/images/ui/skins/themes/stunt-show.png',
  'Subway Surfers': '/images/ui/skins/themes/subway-surfers.png',
  'Sugar Rush': '/images/ui/skins/themes/sugar-rush.png',
  'Summer of Brawl': '/images/ui/skins/themes/summer-of-brawl.png',
  'Super Brawl': '/images/ui/skins/themes/super-brawl.png',
  'Supercell Make': '/images/ui/skins/themes/supercell-make.png',
  'Tales of the Sea': '/images/ui/skins/themes/tales-of-the-sea.png',
  'The Ayakashi Clan': '/images/ui/skins/themes/the-ayakashi-clan.png',
  'The Bad Randoms': '/images/ui/skins/themes/the-bad-randoms.png',
  'The Calamity Gang': '/images/ui/skins/themes/the-calamity-gang.png',
  'The Golden Kawaii': '/images/ui/skins/themes/the-golden-kawaii.png',
  'The Good Randoms': '/images/ui/skins/themes/the-good-randoms.png',
  'The Mega': '/images/ui/skins/themes/the-mega.png',
  'The Omega': '/images/ui/skins/themes/the-omega.png',
  'The Red': '/images/ui/skins/themes/the-red.png',
  'The Worst Bunch': '/images/ui/skins/themes/the-worst-bunch.png',
  'Toy Story': '/images/ui/skins/themes/toy-story.png',
  'True Gold': '/images/ui/skins/themes/true-gold.png',
  'True Silver': '/images/ui/skins/themes/true-silver.png',
  'Uno': '/images/ui/skins/themes/uno.png',
  'Vibing': '/images/ui/skins/themes/vibing.png',
  "Warrior's Journey": '/images/ui/skins/themes/warriors-journey.png',
  'Wasteland': '/images/ui/skins/themes/wasteland.png',
};

export function getSkinThemeIcon(theme: BrawlerSkinTheme): string {
  return skinThemeIconPaths[theme] || '';
}
