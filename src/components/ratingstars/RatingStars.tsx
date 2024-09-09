import React from 'react';
import Image from 'next/image';
import { Star, ShoppingCart } from 'lucide-react';

const RatingStars = ({ rating, showNumber = true }: any) => {
    return (
        <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`w-4 h-4 ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                />
            ))}
            {showNumber &&
                < span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
            }
        </div >
    );
};
export default RatingStars;