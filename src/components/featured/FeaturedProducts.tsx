import Link from "next/link";
import ProductCard from "../productCard/ProductCard";
import { ArrowRight } from "lucide-react";

const FeaturedProducts = () => {
    const products = [
        { id: 1, name: "Elegant Timepiece", price: 19999, rating: 4.5, image: "/product1.jpg" },
        { id: 2, name: "Stylish Sunglasses", price: 2999, rating: 4.2, image: "/product2.jpg" },
        { id: 3, name: "Leather Wallet", price: 1499, rating: 4.8, image: "/product3.jpg" },
        { id: 4, name: "Classic Perfume", price: 5999, rating: 4.0, image: "/product4.jpg" },
    ];

    return (
        <section className="my-28 mx-auto max-w-7xl px-4">
            <div>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold md:font-extrabold md:text-4xl mb-4 text-center">Featured Products</h2>
                    <div className="text-center text-sm md:text-base text-textLight">
                        <p>Discover our top-rated products, trusted by many for their exceptional quality.</p>
                    </div>
                </div>
                <div className="mb-4 flex justify-end">
                    <Link href="/products" className="text-primary hover:text-hover transition-colors duration-200 flex items-center">
                        View All <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default FeaturedProducts;