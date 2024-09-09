"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RatingStars from "../ratingstars/RatingStars";

const testimonials = [
    {
        name: "Sarah Zubair",
        rating: 5,
        comment: "Absolutely love the quality of the clothes! Fast shipping too.",
        avatar: "/api/placeholder/100/100"
    },
    {
        name: "Mike Husstle",
        rating: 4,
        comment: "Great selection and excellent customer service. Will shop again!",
        avatar: "/api/placeholder/100/100"
    },
    {
        name: "Emma Lura",
        rating: 5,
        comment: "The fit is perfect and the styles are so trendy. Highly recommend!",
        avatar: "/api/placeholder/100/100"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextTestimonial = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }
    };

    const previousTestimonial = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    const { name, rating, comment } = testimonials[currentIndex];

    return (
        <section className="my-28 mx-auto max-w-7xl">
            <div className="mb-8">
                <h2 className="text-2xl font-bold md:font-extrabold md:text-4xl mb-4 text-center">Customers Feedback</h2>
                <div className="text-center text-sm md:text-base text-textLight">
                    <p>
                        Discover what our satisfied customers are saying about our products and services.
                    </p>
                </div>
            </div>
            <div className="relative flex flex-col justify-center bg-background h-80 rounded-2xl bg-opacity-50 items-center p-8 max-w-2xl mx-auto">
                <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="flex justify-center">
                        <RatingStars showNumber={false} rating={rating} />
                    </div>
                    <div className="h-32 md:h-24 lg:h-20 mt-6">
                        <p className="text-text text-sm max-w-md text-center">{`${comment}`}</p>
                    </div>
                    <h4 className="text-base mt-2 text-center font-medium">{name}</h4>
                </div>
                <button
                    onClick={previousTestimonial}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 hover:bg-opacity-80 transition-colors duration-200"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="w-6 h-6 text-textLight" />
                </button>
                <button
                    onClick={nextTestimonial}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-opacity-80 transition-colors duration-200"
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="w-6 h-6 text-textLight" />
                </button>
                <div className="flex justify-center mt-10">
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${index === currentIndex ? 'bg-secondary' : 'bg-border'}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
