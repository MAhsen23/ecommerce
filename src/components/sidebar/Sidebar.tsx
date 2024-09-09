import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Sidebar = () => {
    const [openCategories, setOpenCategories] = useState<any>({
        category: true,
        weight: true,
        color: true,
        price: true,
        tags: true,
    });

    const [checkedCategories, setCheckedCategories] = useState<any>({});

    const toggleCategory = (category: string) => {
        setOpenCategories((prev: any) => ({ ...prev, [category]: !prev[category] }));
    };

    const handleCheckboxChange = (item: string) => {
        setCheckedCategories((prev: any) => ({ ...prev, [item]: !prev[item] }));
    };

    const categories = ['Clothes', 'Bags', 'Shoes', 'Cosmetics', 'Electrics', 'Phone', 'Watch'];
    const tags = ['Clothes', 'Fruits', 'Snacks', 'Dairy', 'Seafood', 'Toys', 'Perfumes', 'Jewelry', 'Bags'];

    return (
        <div className="bg-background bg-opacity-20 p-5 rounded-xl border-border border-opacity-50 border">
            <SidebarSection
                title="Category"
                isOpen={openCategories.category}
                onToggle={() => toggleCategory('category')}
            >
                <ul className="space-y-3">
                    {categories.map((item) => (
                        <li key={item} className="flex items-center">
                            <label htmlFor={item} className="flex items-center cursor-pointer">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        id={item}
                                        checked={checkedCategories[item] || false}
                                        onChange={() => handleCheckboxChange(item)}
                                        className="sr-only"
                                    />
                                    <div className={`w-5 h-5 border rounded-sm mr-3 flex items-center justify-center ${checkedCategories[item] ? 'bg-secondary border-secondary' : 'bg-white border-border'
                                        }`}>
                                        {checkedCategories[item] && (
                                            <svg
                                                className="w-3 h-3 text-white pointer-events-none"
                                                viewBox="0 0 17 12"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path d="M1 5.5L5.5 10L15 1" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                                <span className="text-text hover:text-hover">{item}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </SidebarSection>

            <SidebarSection
                title="Price"
                isOpen={openCategories.price}
                onToggle={() => toggleCategory('price')}
            >
                <div className="flex items-center space-x-4">
                    <input
                        type="range"
                        min="0"
                        max="500"
                        className="w-full accent-secondary"
                    />
                </div>
                <div className="flex justify-between mt-2">
                    <span className="text-textLight">$0</span>
                    <span className="text-textLight">$500</span>
                </div>
            </SidebarSection>

            <SidebarSection
                title="Tags"
                isOpen={openCategories.tags}
                onToggle={() => toggleCategory('tags')}
            >
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-[0.7rem] border hover:font-medium hover:text-hover border-border py-[0.4rem] text-textLight text-sm rounded-md cursor-pointer transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </SidebarSection>
        </div>
    );
};

const SidebarSection: React.FC<{
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onToggle: () => void;
}> = ({ title, children, isOpen, onToggle }) => {
    return (
        <div className="mb-8">
            <div
                className="flex justify-between items-center cursor-pointer mb-4"
                onClick={onToggle}
            >
                <h3 className="text-lg font-medium text-text">{title}</h3>
                {isOpen ? (
                    <ChevronUp className="text-primary" />
                ) : (
                    <ChevronDown className="text-primary" />
                )}
            </div>
            {isOpen && <div className="mt-2">{children}</div>}
        </div>
    );
};

export default Sidebar;