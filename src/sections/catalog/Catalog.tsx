import Arlicle from '@/components/article/Article';
import Slider from '@/components/slider/Slider';
import styles from './catalog.module.css'

// Все 5 секций с продуктами
const sections = [
    [
        {
            id: 1,
            title: 'Продукт 1',
            price: '100',
            imageUrl: '/articles/1.jpg',
        },
        {
            id: 2,
            title: 'Продукт 2',
            price: '200',
            imageUrl: '/articles/2.jpg',
        },
        {
            id: 3,
            title: 'Продукт 3',
            price: '300',
            imageUrl: '/articles/3.jpg',
        },
        {
            id: 4,
            title: 'Продукт 4',
            price: '400',
            imageUrl: '/articles/4.jpg',
        },
        {
            id: 5,
            title: 'Продукт 5',
            price: '500',
            imageUrl: '/articles/5.jpg',
        },
        {
            id: 6,
            title: 'Продукт 6',
            price: '600',
            imageUrl: '/articles/6.jpg',
        },
        {
            id: 7,
            title: 'Продукт 7',
            price: '700',
            imageUrl: '/articles/7.jpg',
        },
        {
            id: 8,
            title: 'Продукт 8',
            price: '800',
            imageUrl: '/articles/8.jpg',
        },
        {
            id: 9,
            title: 'Продукт 9',
            price: '900',
            imageUrl: '/articles/9.jpg',
        },
    ],
    [
        {
            id: 10,
            title: 'Продукт 1',
            price: '100',
            imageUrl: '/articles/1.jpg',
        },
        {
            id:11,
            title: 'Продукт 2',
            price: '200',
            imageUrl: '/articles/2.jpg',
        },
        {
            id: 12,
            title: 'Продукт 3',
            price: '300',
            imageUrl: '/articles/3.jpg',
        },
        {
            id: 13,
            title: 'Продукт 4',
            price: '400',
            imageUrl: '/articles/4.jpg',
        },
        {
            id: 14,
            title: 'Продукт 5',
            price: '500',
            imageUrl: '/articles/5.jpg',
        },
        {
            id: 15,
            title: 'Продукт 6',
            price: '600',
            imageUrl: '/articles/6.jpg',
        },
        {
            id: 16,
            title: 'Продукт 7',
            price: '700',
            imageUrl: '/articles/7.jpg',
        },
        {
            id: 17,
            title: 'Продукт 8',
            price: '800',
            imageUrl: '/articles/8.jpg',
        },
        {
            id: 18,
            title: 'Продукт 9',
            price: '900',
            imageUrl: '/articles/9.jpg',
        },
    ],
    [
        {
            id: 19,
            title: 'Продукт 1',
            price: '100',
            imageUrl: '/articles/1.jpg',
        },
        {
            id: 20,
            title: 'Продукт 2',
            price: '200',
            imageUrl: '/articles/2.jpg',
        },
        {
            id: 21,
            title: 'Продукт 3',
            price: '300',
            imageUrl: '/articles/3.jpg',
        },
        {
            id: 22,
            title: 'Продукт 4',
            price: '400',
            imageUrl: '/articles/4.jpg',
        },
        {
            id: 23,
            title: 'Продукт 5',
            price: '500',
            imageUrl: '/articles/5.jpg',
        },
        {
            id: 24,
            title: 'Продукт 6',
            price: '600',
            imageUrl: '/articles/6.jpg',
        },
        {
            id: 25,
            title: 'Продукт 7',
            price: '700',
            imageUrl: '/articles/7.jpg',
        },
        {
            id: 26,
            title: 'Продукт 8',
            price: '800',
            imageUrl: '/articles/8.jpg',
        },
        {
            id: 27,
            title: 'Продукт 9',
            price: '900',
            imageUrl: '/articles/9.jpg',
        },
    ],
    [
        {
            id: 28,
            title: 'Продукт 1',
            price: '100',
            imageUrl: '/articles/1.jpg',
        },
        {
            id: 29,
            title: 'Продукт 2',
            price: '200',
            imageUrl: '/articles/2.jpg',
        },
        {
            id: 30,
            title: 'Продукт 3',
            price: '300',
            imageUrl: '/articles/3.jpg',
        },
        {
            id: 31,
            title: 'Продукт 4',
            price: '400',
            imageUrl: '/articles/4.jpg',
        },
        {
            id: 32,
            title: 'Продукт 5',
            price: '500',
            imageUrl: '/articles/5.jpg',
        },
        {
            id:33,
            title: 'Продукт 6',
            price: '600',
            imageUrl: '/articles/6.jpg',
        },
        {
            id: 34,
            title: 'Продукт 7',
            price: '700',
            imageUrl: '/articles/7.jpg',
        },
        {
            id: 35,
            title: 'Продукт 8',
            price: '800',
            imageUrl: '/articles/8.jpg',
        },
        {
            id: 36,
            title: 'Продукт 9',
            price: '900',
            imageUrl: '/articles/9.jpg',
        },
    ],
    [
        {
            id: 37,
            title: 'Продукт 1',
            price: '100',
            imageUrl: '/articles/1.jpg',
        },
        {
            id: 38,
            title: 'Продукт 2',
            price: '200',
            imageUrl: '/articles/2.jpg',
        },
        {
            id: 39,
            title: 'Продукт 3',
            price: '300',
            imageUrl: '/articles/3.jpg',
        },
        {
            id: 40,
            title: 'Продукт 4',
            price: '400',
            imageUrl: '/articles/4.jpg',
        },
        {
            id: 41,
            title: 'Продукт 5',
            price: '500',
            imageUrl: '/articles/5.jpg',
        },
        {
            id: 42,
            title: 'Продукт 6',
            price: '600',
            imageUrl: '/articles/6.jpg',
        },
        {
            id: 43,
            title: 'Продукт 7',
            price: '700',
            imageUrl: '/articles/7.jpg',
        },
        {
            id: 44,
            title: 'Продукт 8',
            price: '800',
            imageUrl: '/articles/8.jpg',
        },
        {
            id: 45,
            title: 'Продукт 9',
            price: '900',
            imageUrl: '/articles/9.jpg',
        },
    ],
];

export default function Catalog() {
    return (
        <section>
            <h1>Каталог продуктов</h1>
            <Slider showNumbers={true}>
                {sections.map((sectionProducts, sectionIndex) => (
                    <div key={sectionIndex} className={styles.sectionContainer}>
                        <h2 className={styles.sectionTitle}>
                            Секция {sectionIndex + 1}
                        </h2>
                        <div className={styles.productsGrid}>
                            {sectionProducts.map((product) => (
                                <Arlicle
                                    key={product.id}
                                    {...product}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}
