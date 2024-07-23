export type PortraitData = {
    name: string,
    path: string,
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
