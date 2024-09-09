import React from 'react';

const SortOptions = ({ onSortChange }: any) => (
    <div className="mb-8">
        <select
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full md:w-auto px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
            <option value="">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="popularity">Popularity</option>
            <option value="newest">Newest</option>
        </select>
    </div>
);
export default SortOptions;
