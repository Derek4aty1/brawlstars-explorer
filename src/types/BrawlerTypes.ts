export type BrawlerData = {
    name: string;
    rarity: BrawlerRarity;
    portrait: string;
    description: string;
    skins: {
        name: string;
        imageSrc: string;
    }[];
};

export type PortraitData = {
    name: string,
    imageSrc: string,
    rarity: BrawlerRarity
};

export enum BrawlerRarity {
    TrophyRoad,
    Rare,
    SuperRare,
    Epic,
    Mythic,
    Legendary
};
