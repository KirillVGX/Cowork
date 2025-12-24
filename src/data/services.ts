type Service = {
    title: string;
    info: string;
    price: string;
    description: string;
    quote: string;
};

export const services: Service[] = [
    {
        title: 'Day Office',
        info: 'Rent a private office for just the day',
        price: '25',
        description: 'maximum 15 days/month',
        quote: 'Require minimum Hot Desk subscription',
    },
    {
        title: 'Conference Room',
        info: 'Book rooms for meetings or presentations',
        price: '35/hr',
        description: '24-hour cancellation required',
        quote: 'Require minimum Hot Desk subscription',
    },
    {
        title: 'Dedicated Desk Assistant',
        info: 'Get support from a dedicated assistant',
        price: '99/mo',
        description: 'Pause or cancel anytime',
        quote: 'Require minimum Dedicated Desk subscription',
    },
];
