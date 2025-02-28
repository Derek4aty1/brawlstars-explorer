export type BrawlerRarity = 'Common' | 'Rare' | 'Super Rare' | 'Epic' | 'Mythic' | 'Legendary';
export type BrawlerClass = 'Artillery' | 'Assassin' | 'Controller' | 'Damage Dealer' | 'Marksman' | 'Support' | 'Tank';
export type BrawlerSkinRarity = 'Rare' | 'Super Rare' | 'Epic' | 'Mythic' | 'Legendary' | 'Hypercharge';

export type BrawlerSkinTheme = 
    | 'Pro Pass'
    | 'True Gold'
    | 'True Silver';

export type BrawlerData = {
    name: string;
    rarity: BrawlerRarity;
    class: BrawlerClass;
    description: string;
    masteryTitle: string;
    portraitImageSrc: string;
    skins: BrawlerSkin[];
};

export type BrawlerSkin = {
    name: string;
    rarity?: BrawlerSkinRarity;
    imageSrc: string;
    secondaryImageSrc?: string; // Hypercharge/pets/turrets/etc.
    themes: BrawlerSkinTheme[];
};

export type BrawlerPortrait = {
    name: string,
    rarity: BrawlerRarity,
    imageSrc: string
};
