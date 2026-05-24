import ProductCard from '../Shop/ProductCard';

function RelatedCards() {
    const contents = [
        {
            id: 1,

            title: 'Green Apple',

            price: 14.99,
            oldPrice: 20.99,

            image: '/images/apple.png',
            stock: true,
        },
        {
            id: 1,

            title: 'Fresh Cauliflower',

            price: 14.99,

            image: '/images/cauliflower.jpg',
            stock: true,
        },
        {
            id: 1,

            title: 'Green Capsicum',

            price: 14.99,
            oldPrice: 20.99,

            image: '/images/capsicum.jpg',
            stock: true,
        },
        {
            id: 1,

            title: 'Green Capsicum',

            price: 14.99,
            oldPrice: 20.99,

            image: '/images/ocra.jpg',
            stock: true,
        },
    ];
    return (
        <div className='flex justify-center gap-5'>
            {contents.map((content) => (
                <ProductCard key={content.id} product={content} />
            ))}
        </div>
    );
}

export default RelatedCards;
