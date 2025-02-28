import { BrawlerClass, BrawlerRarity, BrawlerSkinRarity, BrawlerSkinTheme } from "@/types/BrawlerTypes";

const rarityTextColors: Record<BrawlerRarity, string> = {
  'Common': 'text-common',
  'Rare': 'text-rare',
  'Super Rare': 'text-super-rare',
  'Epic': 'text-epic',
  'Mythic': 'text-mythic',
  'Legendary': 'text-legendary'
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
  'Legendary': 'bg-legendary'
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
  'Tank': '/images/ui/classes/tank.png'
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
  'Hypercharge': '/images/ui/skins/rarities/hypercharge.png'
};

export function getSkinRarityIcon(rarity: BrawlerSkinRarity): string {
  return skinRarityIconPaths[rarity] || '';
}

const skinThemeIconPaths: Record<BrawlerSkinTheme, string> = {
  'Pro Pass': '/images/ui/skins/themes/pro-pass.png',
  'True Gold': '/images/ui/skins/themes/true-gold.png',
  'True Silver': '/images/ui/skins/themes/true-silver.png'
};

export function getSkinThemeIcon(theme: BrawlerSkinTheme): string {
  return skinThemeIconPaths[theme] || '';
}
