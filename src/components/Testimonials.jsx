import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
    return (
        <section className="py-10">
            {/* Section Heading */}
            <div className="text-center">
                <p className="text-lg font-bold text-gray-400">Testimonials</p>
                <h2 className="text-3xl font-bold mt-2 text-gray-600">
                    What our customers have to say.
                </h2>
            </div>

            {/* Testimonials Cards Section */}
            <div className="flex justify-center space-x-6 mt-10 max-w-screen-xl mx-auto">
                {/* Testimonial Card 1 */}
                <div className="bg-white rounded-lg shadow-lg p-6 w-1/2 h-64 transition-transform transform hover:scale-105">
                    <div className="flex items-center mb-2">
                        <div className="flex">
                            {[...Array(5)].map((_, index) => (
                                <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-400" />
                            ))}
                        </div>
                    </div>
                    <p className="text-lg font-semibold text-gray-800">John Doe</p>
                    <p className="text-gray-600 mt-2">
                        "This service has significantly improved our business efficiency. Highly recommended!"
                    </p>
                </div>

                {/* Testimonial Card 2 */}
                <div className="bg-white rounded-lg shadow-lg p-6 w-1/2 h-64 transition-transform transform hover:scale-105">
                    <div className="flex items-center mb-2">
                        <div className="flex">
                            {[...Array(5)].map((_, index) => (
                                <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-400" />
                            ))}
                        </div>
                    </div>
                    <p className="text-lg font-semibold text-gray-800">Jane Smith</p>
                    <p className="text-gray-600 mt-2">
                        "Exceptional quality and outstanding support! Our team couldn’t be happier."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
