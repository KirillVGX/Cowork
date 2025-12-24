type Plan = {
    name: string;
    popular?: boolean;
    start?: string;
    info: string;
    price: number;
    features: string[];
    bonuses: string[];
};

export const plans: Plan[] = [
    {
        name: 'Hot Desk',
        info: 'For the ultimate in flexibility, go with a hot desk.',
        price: 29,
        features: [
            '✓ Access to any available hot desk',
            '✓ Fast Wi-Fi and utilities included',
            '✓ 24/7 entry with keycard access',
            '✓ Use of common areas and amenities',
        ],
        bonuses: ['Coffee', 'Tea', 'Water'],
    },
    {
        name: 'Dedicated Desk',
        popular: true,
        info: 'Claim your own dedicated workspace with this plan.',
        price: 199,
        features: [
            '✓ Your own reserved desk',
            '✓ Lockable file cabinet',
            '✓ 2 Day Office credits per month',
            '✓ All Hot Desk plan benefits and freebies',
        ],
        bonuses: ['Printing', 'Copying', 'Weekly Cleaning'],
    },
    {
        name: 'Private Office',
        info: 'Professional private offices for maximum privacy and quiet.',
        start: 'Starting at',
        price: 499,
        features: [
            '✓ Private furnished office with standing desk',
            '✓ 24/7 access',
            '✓ 4 Day Office credits per month',
            '✓ Mail and package service',
            '✓ All Dedicated Desk plan benefits and freebies',
        ],
        bonuses: ['Monthly Parking Pass'],
    },
];
