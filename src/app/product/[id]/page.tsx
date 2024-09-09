"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import RatingStars from '@/components/ratingstars/RatingStars';

const ProductImage = ({ src, alt, className }: any) => (
    <div className={`relative w-full pt-[110%]`}>
        <Image
            src={src}
            alt={alt}
            className="object-cover rounded-md"
            layout="fill"
            quality={100}
        />
    </div>
);

const ProductGallery = ({ images, onSelectImage }: any) => (
    <div className="flex space-x-2 mt-4">
        {images.map((img: any, index: any) => (
            <Image
                key={index}
                src={img}
                alt={`Product view ${index + 1}`}
                className="w-16 h-16 object-cover cursor-pointer rounded-md hover:opacity-80 transition-opacity duration-300"
                onClick={() => onSelectImage(img)}
                width={64}
                height={64}
                quality={100}
            />
        ))}
    </div>
);

const TabContent = ({ activeTab, longDescription, reviews }: any) => (
    <div className="">
        {activeTab === 'details' ? (
            <p className="text-textLight font-normal text-justify leading-relaxed mt-6 text-sm">{longDescription}</p>
        ) : (
            <div>
                {reviews.map((review: any, index: any) => (
                    <div className='mt-6 border-b border-border border-opacity-50 pb-4' key={index}>
                        <div className='flex items-center space-x-2 mb-1'>
                            <p className='text-text font-medium text-sm'>{review.name}</p>
                            <p className='text-textLight font-normal text-xs'>3 days ago</p>
                        </div>
                        <RatingStars showNumber={false} rating={review.rating} />
                        <div>
                            <p className="text-textLight mt-4 text-sm font-normal leading-relaxed">{review.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
);

const SingleProduct = () => {
    const product = {
        id: 1,
        name: 'Shoes Reebok Zig Kinetica 3',
        category_id: 101,
        category: 'Footwear',
        shortDescription: "These shoes are designed for both comfort and style. Perfect for any occasion!",
        longDescription: `The Reebok Zig Kinetica 3 is engineered with the latest footwear technology to provide unmatched comfort and support for your feet. 
                          The upper is crafted from breathable mesh, ensuring your feet stay cool during intense workouts. 
                          The midsole features Zig Energy Shell, which wraps around the foam to channel and return kinetic energy with every step. 
                          Whether you're running, training, or just on the go, these shoes offer the perfect blend of performance and style.
                          The durable rubber outsole provides excellent grip on various surfaces, making it versatile for different environments. 
                          Available in multiple colors and sizes to suit your style preferences.`,
        reviews: [
            {
                rating: 5,
                name: 'John Doe',
                comment: 'Amazing product! The comfort level is out of this world. Highly recommend to anyone looking for quality footwear.'
            },
            {
                rating: 4,
                name: 'Jane Smith',
                comment: 'Very comfortable and stylish. The only downside is that the sizing runs a bit small.'
            },
            {
                rating: 4,
                name: 'Alice Johnson',
                comment: 'Great shoes for running. They are light and provide good support. Would give it 5 stars if they had more color options.'
            },
            {
                rating: 3,
                name: 'Bob Brown',
                comment: 'Decent shoes, but I expected more cushioning. They’re okay for short runs but not for long-distance running.'
            }
        ],
        regularPrice: 149.99,
        salePrice: 99.99,
        images: [
            '/product1.jpg',
            '/product2.jpg',
            '/product3.jpg',
            '/product4.jpg'
        ]
    };

    const [activeTab, setActiveTab] = useState('details');
    const [mainImage, setMainImage] = useState(product.images[0]);

    return (
        <div className="min-h-screen max-w-7xl mx-auto px-8 py-20">
            <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2">
                    <ProductImage src={mainImage} alt={product.name} className="w-full h-auto" />
                    <ProductGallery images={product.images} onSelectImage={setMainImage} />
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold text-text mb-2">{product.name}</h1>
                    <div className="flex items-center mt-4 mb-8">
                        {Array.from({ length: 5 }, (_, index) => (
                            <Star
                                key={index}
                                className={`${index < product.reviews.reduce((acc: any, review: any) => acc + review.rating, 0) / product.reviews.length ? 'text-secondary' : 'text-border'
                                    } w-5 h-5`}
                            />
                        ))}
                        <span className="ml-2 text-textLight">({(product.reviews.reduce((acc: any, review: any) => acc + review.rating, 0) / product.reviews.length).toFixed(1)}) {product.reviews.length} reviews</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <p className="text-3xl font-semibold text-primary mb-4">
                            {product.salePrice && (
                                <>
                                    <span className="text-border line-through mr-2">Rs {product.regularPrice}</span>
                                    <span>Rs {product.salePrice}</span>
                                </>
                            )}
                            {!product.salePrice && (
                                <span>Rs {product.regularPrice}</span>
                            )}
                        </p>
                    </div>
                    <p className="text-textLight mb-10">
                        {product.shortDescription}
                    </p>
                    <div className="flex space-x-4 mb-4">
                        <button className="bg-primary text-white px-8 py-[0.6rem] rounded-md flex items-center justify-center hover:bg-hover transition-colors duration-300">
                            <ShoppingCart className="w-5 h-5 mr-2" />
                            Add to Cart
                        </button>
                        <button className="border border-border text-text px-4 py-2 rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors duration-300">
                            <Heart className="w-5 h-5" />
                        </button>
                    </div>
                    <p className="text-success font-normal">Best seller in its category!</p>
                </div>
            </div>
            <div className="mt-12">
                <div className="flex space-x-4 border-b border-border">
                    <button
                        className={`pb-2 font-normal ${activeTab === 'details' ? 'text-primary border-b-2 border-primary' : 'text-textLight'}`}
                        onClick={() => setActiveTab('details')}
                    >
                        Details
                    </button>
                    <button
                        className={`pb-2 font-medium ${activeTab === 'reviews' ? 'text-primary border-b-2 border-primary' : 'text-textLight'}`}
                        onClick={() => setActiveTab('reviews')}
                    >
                        Reviews
                    </button>
                </div>
                <TabContent activeTab={activeTab} longDescription={product.longDescription} reviews={product.reviews} />
            </div>
        </div>
    );
};

export default SingleProduct;