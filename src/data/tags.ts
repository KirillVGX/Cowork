export type FooterLink = {
    title: string;
    href: string;
};

export type FooterSection = {
    title: string;
    links: FooterLink[];
};

export const tags: FooterSection[] = [
    {
        title: 'Explore More',
        links: [
            { title: 'Home', href: '/' },
            { title: 'About', href: '/about' },
            { title: 'Pricing', href: '/pricing' },
            { title: 'Blog', href: '/blog' },
            { title: 'Events', href: '/events' },
        ],
    },
    {
        title: 'Stay Connected',
        links: [
            { title: 'Subscribe', href: '/subscribe' },
            { title: 'Member Stories', href: '/stories' },
            { title: 'Locations', href: '/locations' },
            { title: 'Write for Us', href: '/write-for-us' },
        ],
    },
    {
        title: 'Follow Us',
        links: [
            { title: 'Facebook', href: 'https://facebook.com' },
            { title: 'Instagram', href: 'https://instagram.com' },
            { title: 'X', href: 'https://x.com' },
            { title: 'LinkedIn', href: 'https://linkedin.com' },
            { title: 'YouTube', href: 'https://youtube.com' },
        ],
    },
];
