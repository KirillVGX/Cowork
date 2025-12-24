type Advantage = {
    id: number;
    src: string;
    alt: string;
    title: string;
    info: string;
};

export const advantages: Advantage[] = [
    {
        id: 1,
        src: '/advantages/planet.svg',
        alt: 'planet',
        title: 'Flexible Spaces',
        info: "Whether you're a solopreneur, startup, or an established enterprise, our flexible office solutions cater to your evolving needs.",
    },
    {
        id: 2,
        src: '/advantages/card.svg',
        alt: 'card',
        title: 'Transparent Pricing',
        info: 'Choose a plan that suits your budget and business objectives, and experience the value of a premium coworking space without breaking the bank.',
    },
    {
        id: 3,
        src: '/advantages/id.svg',
        alt: 'id',
        title: 'Tailored Memberships',
        info: 'Whether you prefer the flexibility of a hot desk or the exclusivity of a private office, Cowork offers tailored solutions to suit every working style.',
    },
];
