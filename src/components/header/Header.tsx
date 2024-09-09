"use client"
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="py-4 max-w-7xl mx-auto">
            <div className="container mx-auto px-4 lg:px-12">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-2xl font-bold text-primary">
                            MyStore
                        </a>
                    </div>

                    <nav className="hidden md:flex space-x-4 lg:space-x-8">
                        {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                            <a key={item} href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-text hover:text-primary transition-colors duration-200">
                                {item}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-4 lg:space-x-6">
                        <div className="hidden md:flex items-center">
                            <input
                                type="text"
                                placeholder="Search"
                                className="px-4 bg-transparent text-sm h-9 w-40 lg:w-64 border border-border rounded-l-full focus:outline-none"
                            />
                            <button className="bg-primary text-white px-4 h-9 rounded-r-full hover:bg-primary-dark transition-colors duration-200">
                                <Search className="w-5 h-5" />
                            </button>
                        </div>
                        <button className="hidden md:block text-text hover:text-primary transition-colors duration-200">
                            <User className="w-5 h-5" />
                        </button>
                        <button className="text-text hover:text-primary transition-colors duration-200 relative">
                            <ShoppingCart className="w-5 h-5" />
                            <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">3</span>
                        </button>
                        <button className="md:hidden text-text hover:text-primary transition-colors duration-200" onClick={toggleMenu}>
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <nav className="md:hidden py-4 space-y-2">
                        {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                            <a key={item} href={`/${item.toLowerCase().replace(' ', '-')}`} className="block text-text hover:text-primary py-2 transition-colors duration-200">
                                {item}
                            </a>
                        ))}
                        <div className="pt-4 flex">
                            <input
                                type="text"
                                placeholder="Search"
                                className="flex-grow px-4 text-sm py-2 border border-border rounded-l-full focus:outline-none"
                            />
                            <button className="bg-primary text-white px-4 py-2 rounded-r-full hover:bg-primary-dark transition-colors duration-200">
                                <Search className="w-5 h-5" />
                            </button>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;