import React from 'react';
import FeaturedProducts from '@/components/featured/FeaturedProducts';
import PromoSection from '@/components/promo/PromoSection';
import LatestProducts from '@/components/latest/LatestProducts';
import HeroSection from '@/components/hero/HeroSection';
import Testimonials from '@/components/testimonials/Testimonials';
import BenefitsSection from '@/components/keybenfits/BenefitsSection';

const Home = () => {
  return (
    <>
      <div className='mx-4'>
        <HeroSection showContent={true} isRounded={true} />
      </div>
      <div className="container mx-auto px-4">
        <FeaturedProducts />
        <PromoSection />
        <LatestProducts />
        <BenefitsSection />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;