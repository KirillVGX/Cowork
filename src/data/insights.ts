type Insight = {
    id: number;
    src: string;
    alt: string;
    category: string;
    minutes: number;
    text: string;
};

export const insights: Insight[] = [
    {
        id: 1,
        src: '/insights/1.jpg',
        alt: 'Article image',
        category: 'Trending',
        minutes: 7,
        text: 'Navigating the Future: Trends in Modern Coworking Spaces',
    },
    {
        id: 2,
        src: '/insights/2.jpg',
        alt: 'Article image',
        category: 'Productivity',
        minutes: 5,
        text: "Mastering Productivity: Tips from Cowork's High Achievers",
    },
    {
        id: 3,
        src: '/insights/3.jpg',
        alt: 'Article image',
        category: 'Talk',
        minutes: 10,
        text: "Tech Talk: The Backbone of Cowork's Seamless Experience",
    },
];
