import React from 'react';
import { ShoppingCart, CreditCard, Store, ThumbsUp } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description, color }: any) => (
    <div className="flex flex-col items-center lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
        <div
            className="min-w-16 min-h-16 max-h-16 max-w-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: color }}
        >
            <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="text-center lg:text-left">
            <h3 className="text-base font-semibold text-text whitespace-nowrap">{title}</h3>
            <p className="text-sm text-textLight">{description}</p>
        </div>
    </div>
);

const BenefitsSection = () => {
    const features = [
        { icon: ShoppingCart, title: "Fast Shipping", description: "Secure", color: "#BDFDB9" },
        { icon: CreditCard, title: "Quick Payment", description: "100% Secure Payment", color: "#FFC8C3" },
        { icon: Store, title: "24/7 Support", description: "Ready For You", color: "#B7E4FF" },
        { icon: ThumbsUp, title: "Satisfaction", description: "Quality you can trust", color: "#FF928B" },
    ];

    return (
        <section className="lg:py-8 mx-auto max-w-7xl py-4 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FeatureItem key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
