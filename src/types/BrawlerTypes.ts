export type BrawlerData = {
    name: string;
    rarity: BrawlerRarity;
    class: string;
    description: string;
    portrait: string;
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
    Common,
    Rare,
    SuperRare,
    Epic,
    Mythic,
    Legendary
};
