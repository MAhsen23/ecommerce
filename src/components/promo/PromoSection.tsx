import React from 'react';
import { ArrowRight } from 'lucide-react';

const PromoSection = () => {
    return (
        <section className="my-28 px-4">
            <div>
                <div className="bg-background border border-border rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12">
                        <div className="mb-4 md:mb-0">
                            <h2 className="text-4xl font-extrabold text-primary mb-2">Summer Sale is Live!</h2>
                            <p className="text-lg text-textLight">Get up to <span className="text-secondary font-semibold">50% off</span> on selected items</p>
                        </div>
                        <button className="bg-primary text-white py-3 px-8 text-sm font-medium rounded-full hover:bg-hover transition-colors duration-300 flex items-center">
                            Shop Now
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoSection;
