"use client"
import React, { useState, useEffect } from 'react';
import Pagination from '@/app/components/pagination/Pagination';
import ProductGrid from '@/app/components/productGrid/ProductGrid';
import SortOptions from '@/app/components/sort/SortOptions';
import Filters from '@/app/components/filters/Filters';
import CategoryHeader from '@/app/components/categoryHeader/CategoryHeader';
import { useParams } from 'next/navigation';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}

interface Filters {
    [key: string]: any;
}

interface CategoryData {
    title: string;
    description: string;
}

const categoryData: Record<string, CategoryData> = {
    1: { title: "Electronics", description: "Find the latest gadgets and devices." },
    2: { title: "Clothing", description: "Discover trendy and comfortable clothing for all seasons." },
};

const generateMockProducts = (categoryId: string, count: number): Product[] => {
    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        name: `Product ${i + 1}`,
        price: Math.floor(Math.random() * 200) + 50,
        image: `/pro${i + 1}.jpg`,
        category: categoryId,
    }));
};

const CategoryProducts: React.FC = () => {
    const { id } = useParams();
    const [products, setProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [filters, setFilters] = useState<Filters>({});
    const [sort, setSort] = useState<string>('');

    const productsPerPage = 12;
    const totalPages = Math.ceil(products.length / productsPerPage);

    useEffect(() => {
        if (typeof id === 'string') {
            const fetchedProducts = generateMockProducts(id, 50);
            setProducts(fetchedProducts);
        }
    }, [id]);

    const handleFilterChange = (filterType: string, value: any) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterType]: value,
        }));
        setCurrentPage(1);
    };

    const handleSortChange = (sortOption: string) => {
        setSort(sortOption);
        setCurrentPage(1);
    };

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const filteredAndSortedProducts = products
        .filter((product: Product) => {
            return true;
        })
        .sort((a: Product, b: Product) => {
            if (sort === 'price-asc') return a.price - b.price;
            if (sort === 'price-desc') return b.price - a.price;
            return 0;
        });

    const paginatedProducts = filteredAndSortedProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    if (!id || typeof id !== 'string' || !categoryData[id]) {
        return <div>Category not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <CategoryHeader title={categoryData[id].title} description={categoryData[id].description} />
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/4">
                    <Filters onFilterChange={handleFilterChange} />
                </div>
                <div className="w-full md:w-3/4">
                    <SortOptions onSortChange={handleSortChange} />
                    <ProductGrid products={paginatedProducts} />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default CategoryProducts;
