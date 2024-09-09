"use client"
import HeroSection from '@/components/hero/HeroSection';
import ProductList from '@/components/productList/ProductList';
import Sidebar from '@/components/sidebar/Sidebar';
import { Grid, List } from 'lucide-react';

const ShopPage = () => {
    return (
        <>
            <HeroSection height={'small'} isRounded={false} showContent={false} />
            <div className="container mx-auto px-4">
                <div className="max-w-7xl my-28 mx-auto flex">
                    <div className="w-1/4">
                        <Sidebar />
                    </div>
                    <div className="w-3/4 ml-6">
                        <ProductList />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopPage;
