type Review = {
    id: number;
    color: string
    avatarSrc: string;
    avatarAlt: string;
    review: string;
    name: string;
    role: string;
};

export const reviews: Review[] = [
    {
        id: 1,
        avatarSrc: '/persons/person-1.svg',
        avatarAlt: 'Liam Brown photo',
        review: `"The 24/7 access and secure facilities have been incredibly convenient for my team's flexible schedules. We love the coworking space!"`,
        name: 'Liam Brown',
        role: 'Software Engineer, TechStartup Innovations',
        color: 'var(--color-blue)',
    },
    {
        id: 2,
        avatarSrc: '/persons/person-2.svg',
        avatarAlt: 'Michael Rodriguez photo',
        review: `“The aesthetics of Cowork are inspiring. The attention to detail in the design creates an atmosphere that sparks creativity. It's a place where ideas flow effortlessly, and collaboration happens organically.”`,
        name: 'Michael Rodriguez',
        role: ' Creative Director, DesignCraft Studio',
        color: 'var(--color-yellow)',
    },
    {
        id: 3,
        avatarSrc: '/persons/person-3.svg',
        avatarAlt: 'Michael Thompson photo',
        review: '"As a freelance designer, I was getting tired of working from home or coffee shops. The coworking space has provided me with a productive and professional environment to focus on my work."',
        name: 'Michael Thompson',
        role: 'Graphic Designer, DesignCo',
        color: 'var(--color-blue)',
    },
    {
        id: 4,
        avatarSrc: '/persons/person-4.svg',
        avatarAlt: 'David Wilson photo',
        review: '"The coworking space has been a wonderful resource for my team. The open floor plan and dedicated private offices allow us to collaborate and concentrate as needed."',
        name: 'David Wilson',
        role: 'Project Manager, SoftwareSolutions LLC',
        color: 'var(--color-yellow)',
    },
    {
        id: 5,
        avatarSrc: '/persons/person-5.svg',
        avatarAlt: 'Alex Nguyen photo',
        review: '"The flexible membership options and amenities like high-speed internet, printers, and meeting rooms have made this coworking space a perfect fit for my small business."',
        name: 'Alex Nguyen',
        role: 'Marketing Consultant, Maverick Marketing',
        color: 'var(--color-blue)',
    },
];
