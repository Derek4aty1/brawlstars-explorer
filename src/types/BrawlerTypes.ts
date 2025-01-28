export type BrawlerData = {
    name: string;
    rarity: BrawlerRarity;
    class: BrawlerClass;
    description: string;
    masteryTitle: string;
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

export type BrawlerClass =
    | 'Artillery'
    | 'Assassin'
    | 'Controller'
    | 'Damage Dealer'
    | 'Marksman'
    | 'Support'
    | 'Tank';

export enum BrawlerRarity {
    Common,
    Rare,
    SuperRare,
    Epic,
    Mythic,
    Legendary
};
