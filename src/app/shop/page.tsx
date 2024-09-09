"use client"
import React, { useState, useEffect } from 'react';
import { Grid, List } from 'lucide-react';
import Sidebar from '../components/sidebar/Sidebar';
import ProductCard from '../components/productCard/ProductCard';
import Pagination from '../components/pagination/Pagination';
import QuickView from '../components/quickview/QuickView';
import HeroBanner from '../components/herobanner/HeroBanner';

interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice?: number | null;
    image: string;
    rating: string;
    description: string;
    category: number;
}

interface Category {
    id: number;
    name: string;
}

interface PriceRange {
    min: number;
    max: number;
}

const generateMockProducts = (count: number): Product[] => {
    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        name: `Product ${i + 1}`,
        price: Math.floor(Math.random() * 200) + 50,
        originalPrice: Math.random() > 0.5 ? Math.floor(Math.random() * 300) + 100 : null,
        image: `/pro${i + 1}.jpg`,
        rating: (Math.random() * 2 + 3).toFixed(1),
        description: `This is a detailed description for Product ${i + 1}. It showcases the product's features and benefits.`,
        category: Math.floor(Math.random() * 4) + 1
    }));
};

const categories: Category[] = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothing' },
    { id: 3, name: 'Home & Garden' },
    { id: 4, name: 'Sports & Outdoors' },
];

// const Sidebar: React.FC<{ categories: Category[]; priceRange: PriceRange; onCategoryChange: (id: number) => void; onPriceRangeChange: (range: [number, number]) => void }> = () => null;
// const ProductCard: React.FC<{ product: Product; onQuickView: (product: Product) => void }> = () => null;
// const Pagination: React.FC<{ currentPage: number; totalPages: number; onPageChange: (pageNumber: number) => void }> = () => null;
// const QuickViewModal: React.FC<{ product: Product; onClose: () => void }> = () => null;
// const HeroBanner: React.FC = () => null;

const ShopPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [view, setView] = useState<'grid' | 'list'>('grid');
    const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
    const [priceRange, setPriceRange] = useState<PriceRange>({ min: 0, max: 1000 });
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

    const productsPerPage = 12;
    const totalPages = Math.ceil(products.length / productsPerPage);

    useEffect(() => {
        const fetchedProducts = generateMockProducts(50);
        setProducts(fetchedProducts);
    }, []);

    const handleQuickView = (product: Product) => {
        setQuickViewProduct(product);
    };

    const handleCloseQuickView = () => {
        setQuickViewProduct(null);
    };

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handleCategoryChange = (categoryId: number) => {
        setSelectedCategories(prev =>
            prev.includes(categoryId)
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    const handlePriceRangeChange = ([min, max]: [number, number]) => {
        setPriceRange({ min, max });
    };

    const filteredProducts = products.filter(product => {
        const priceInRange = product.price >= priceRange.min && product.price <= priceRange.max;
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        return priceInRange && categoryMatch;
    });

    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <HeroBanner />
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/4">
                    <Sidebar
                        categories={categories}
                        priceRange={priceRange}
                        onCategoryChange={handleCategoryChange}
                        onPriceRangeChange={handlePriceRangeChange}
                    />
                </div>
                <div className="w-full md:w-3/4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">All Products</h2>
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setView('grid')}
                                className={`p-2 rounded ${view === 'grid' ? 'bg-primary text-white' : 'bg-background text-text'}`}
                            >
                                <Grid className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setView('list')}
                                className={`p-2 rounded ${view === 'list' ? 'bg-primary text-white' : 'bg-background text-text'}`}
                            >
                                <List className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    <div className={`grid gap-6 ${view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                        {paginatedProducts.map(product => (
                            <ProductCard key={product.id} product={product} onQuickView={handleQuickView} />
                        ))}
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
            {quickViewProduct && (
                <QuickView product={quickViewProduct} onClose={handleCloseQuickView} />
            )}
        </div>
    );
};

export default ShopPage;
