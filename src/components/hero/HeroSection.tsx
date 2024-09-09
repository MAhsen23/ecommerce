import React from 'react';

const HeroSection = () => {
    return (
        <div
            className="p-6 sm:p-8 md:p-12 rounded-3xl h-[400px] sm:h-[450px] md:h-[500px] flex flex-col justify-center bg-cover bg-left"
            style={{ backgroundImage: "url('/banner.png')" }}
        >
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">WOMEN FASHION</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2 sm:mb-4">Look Perfect</h1>
            <p className="text-base sm:text-lg mb-4 sm:mb-6">Discover amazing deals on top products!</p>
            <button className="bg-primary w-32 sm:w-36 text-background py-2 sm:py-3 rounded-sm hover:bg-hover transition-colors text-sm sm:text-base">
                Shop Now
            </button>
        </div>
    );
};

export default HeroSection;