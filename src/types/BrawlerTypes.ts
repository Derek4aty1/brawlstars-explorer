export type BrawlerRarity = 'Common' | 'Rare' | 'Super Rare' | 'Epic' | 'Mythic' | 'Legendary';
export type BrawlerClass = 'Artillery' | 'Assassin' | 'Controller' | 'Damage Dealer' | 'Marksman' | 'Support' | 'Tank';
export type BrawlerSkinRarity = 'N/A' | 'Rare' | 'Super Rare' | 'Epic' | 'Mythic' | 'Legendary' | 'Hypercharge';

export type BrawlerData = {
    name: string;
    rarity: BrawlerRarity;
    class: BrawlerClass;
    description: string;
    masteryTitle: string;
    portraitImageSrc: string;
    skins: BrawlerSkin[];
};

export type BrawlerPortrait = {
    name: string,
    rarity: BrawlerRarity,
    imageSrc: string
};

export type BrawlerSkin = {
    name: string;
    rarity: BrawlerSkinRarity;
    imageSrc: string;
};
