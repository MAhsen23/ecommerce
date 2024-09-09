import React from 'react';
import { Grid, List } from 'lucide-react';
import ProductCard from '../productCard/ProductCard';

const products = [
    { id: 1, name: "Elegant Timepiece", price: 19999, rating: 4.5, image: "/product1.jpg" },
    { id: 2, name: "Stylish Sunglasses", price: 2999, rating: 4.2, image: "/product2.jpg" },
    { id: 3, name: "Leather Wallet", price: 1499, rating: 4.8, image: "/product3.jpg" },
    { id: 4, name: "Classic Perfume", price: 5999, rating: 4.0, image: "/product4.jpg" },
    { id: 5, name: "Classic Perfume", price: 5999, rating: 4.0, image: "/product5.jpg" },
    { id: 6, name: "Classic Perfume", price: 5999, rating: 4.0, image: "/product6.jpg" },
    { id: 7, name: "Classic Perfume", price: 5999, rating: 4.0, image: "/product7.jpg" },
    { id: 8, name: "Classic Perfume", price: 5999, rating: 4.0, image: "/product8.jpg" },
];

const ProductList = () => {
    return (
        <section className="flex-1">
            <div className="flex justify-between items-center mb-6 border border-border border-opacity-50 px-2 py-2 bg-background bg-opacity-20 rounded-lg">
                <div className='flex items-center space-x-2'>
                    <button className="p-2 bg-accent rounded-md">
                        <Grid className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-2 ">
                        <List className="w-5 h-5" />
                    </button>
                </div>
                <div>
                    <select className="bg-transparent font-normal text-textLight text-sm py-2">
                        <option value="newest">Newest</option>
                        <option value="price-low-high">Price, Low to High</option>
                        <option value="price-high-low">Price, High to Low</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProductList;
