import React from 'react';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#FCFCFC] text-opacity-90 py-8 px-8">
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-primary">MyStore</h3>
                        <p className="mb-6 text-textLight text-xs">Your one-stop shop for all your needs. We provide quality products at the best prices.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="transition-colors text-textLight duration-300"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="transition-colors text-textLight duration-300"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="transition-colors text-textLight duration-300"><Instagram className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-base font-normal mb-4 ">Quick Links</h3>
                        <ul className="space-y-2 text-textLight">
                            <li><a href="/" className="text-xs transition-colors duration-300">Home</a></li>
                            <li><a href="/products" className="text-xs transition-colors duration-300">Products</a></li>
                            <li><a href="/categories" className="text-xs transition-colors duration-300">Categories</a></li>
                            <li><a href="/about" className="text-xs transition-colors duration-300">About Us</a></li>
                            <li><a href="/contact" className="text-xs transition-colors duration-300">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base font-normal mb-4 ">Customer Service</h3>
                        <ul className="space-y-2 text-textLight">
                            <li><a href="/faq" className="text-xs transition-colors duration-300">FAQ</a></li>
                            <li><a href="/shipping" className="text-xs transition-colors duration-300">Shipping Policy</a></li>
                            <li><a href="/returns" className="text-xs transition-colors duration-300">Returns & Exchanges</a></li>
                            <li><a href="/terms" className="text-xs transition-colors duration-300">Terms & Conditions</a></li>
                            <li><a href="/privacy" className="text-xs transition-colors duration-300">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base font-normal mb-4 ">Contact Us</h3>
                        <ul className="space-y-2 text-textLight">
                            <li className="flex items-center space-x-2">
                                <span className='text-xs'>123 Main Street, Anytown, USA</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className='text-xs'>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span className='text-xs'>support@mystore.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-xs pt-8 border-t border-border text-center text-textLight">
                    <p>&copy; 2024 MyStore. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;