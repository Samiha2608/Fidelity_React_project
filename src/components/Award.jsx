// src/components/Award.jsx
import React, { useEffect, useState } from 'react';

const Award = () => {
    const images = [
        '/images/winner1.jpg',
        '/images/winner2.jpg',
        '/images/winner3.jpg',
        '/images/winner1.jpg',
        '/images/winner2.jpg',
        '/images/winner3.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="py-10">
            <h2 className="text-center text-gray-700 text-3xl font-bold mb-6">
                Fidelity Group – Multi-award winners
            </h2>
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * (100 / 5)}%)` }} // Adjusting based on visible images
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-1/5 flex-shrink-0 p-2"> {/* Set width to 1/5 for 5 images at a time */}
                            <img src={image} alt={`Award ${index + 1}`} className="w-full h-auto rounded-lg" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center space-x-6 mt-10">
                <button className="border border-gray-400 text-red-600 text-sm font-semibold py-4 px-8 rounded transition-transform duration-300 ease-in-out transform hover:bg-red-600 hover:text-white hover:border-red-600 hover:scale-105">
                    Find out more
                </button>
            </div>
        </section>
    );
};

export default Award;
