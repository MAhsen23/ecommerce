"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Star, ShoppingCart, Heart } from 'lucide-react';

const ProductImage = ({ src, alt, onClick, className }: any) => (
    <Image
        src={src}
        alt={alt}
        className={`object-cover cursor-pointer ${className}`}
        onClick={onClick}
        width={300}
        height={300}
        layout="responsive"
        quality={100}
    />
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

const TabContent = ({ activeTab }: any) => (
    <div className="mt-4">
        {activeTab === 'details' ? (
            <p className="text-textLight">Detailed product description goes here...</p>
        ) : (
            <div>
                <div className="flex items-center mb-2">
                    <Star className="text-secondary w-5 h-5" />
                    <Star className="text-secondary w-5 h-5" />
                    <Star className="text-secondary w-5 h-5" />
                    <Star className="text-secondary w-5 h-5" />
                    <Star className="text-border w-5 h-5" />
                    <span className="ml-2 text-textLight">(4.0) 24 reviews</span>
                </div>
                <p className="text-textLight">Customer reviews go here...</p>
            </div>
        )}
    </div>
);

const SingleProduct = () => {
    const [activeTab, setActiveTab] = useState('details');
    const [mainImage, setMainImage] = useState('/product1.jpg');

    const productImages = [
        '/product1.jpg',
        '/product2.jpg',
        '/product3.jpg',
        '/product4.jpg'
    ];

    return (
        <div className="min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/2">
                        <ProductImage src={mainImage} alt="Main product image" className="w-full h-auto" />
                        <ProductGallery images={productImages} onSelectImage={setMainImage} />
                        <div className="mt-6">
                            <div className="flex space-x-4 border-b border-border">
                                <button
                                    className={`pb-2 font-medium ${activeTab === 'details' ? 'text-primary border-b-2 border-primary' : 'text-textLight'}`}
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
                            <TabContent activeTab={activeTab} />
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <h1 className="text-3xl font-bold text-text mb-2">Product Title</h1>
                        <div className="flex items-center mb-4">
                            <Star className="text-secondary w-5 h-5" />
                            <Star className="text-secondary w-5 h-5" />
                            <Star className="text-secondary w-5 h-5" />
                            <Star className="text-secondary w-5 h-5" />
                            <Star className="text-border w-5 h-5" />
                            <span className="ml-2 text-textLight">(4.0) 24 reviews</span>
                        </div>
                        <p className="text-2xl font-semibold text-primary mb-4">$99.99</p>
                        <p className="text-textLight mb-6">
                            Short product description goes here. This product is amazing and you'll love it!
                        </p>
                        <div className="flex space-x-4 mb-6">
                            <button className="bg-primary text-white px-6 py-2 rounded-md flex items-center justify-center hover:bg-hover transition-colors duration-300">
                                <ShoppingCart className="w-5 h-5 mr-2" />
                                Add to Cart
                            </button>
                            <button className="border border-border text-text px-4 py-2 rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors duration-300">
                                <Heart className="w-5 h-5" />
                            </button>
                        </div>
                        <p className="text-success font-medium">Best seller in its category!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
