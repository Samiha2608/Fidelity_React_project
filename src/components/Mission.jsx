// src/components/Mission.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Mission = () => {
    const [isMissionVisible, setMissionVisible] = useState(false);

    const handleMissionToggle = () => {
        setMissionVisible(!isMissionVisible);
    };

    return (
        <section className="py-10">
            {/* Additional Text Section */}
            <div className="text-center mt-10">
                <p className="text-lg font-bold text-gray-400">Discover Fidelity Group</p>
                <h2 className="text-3xl font-bold mt-2">
                    <span className="text-gray-800">We’ve been thriving </span>
                    <span className="text-red-600">since 2008.</span>
                </h2>
            </div>

            {/* Tabs Section */}
            <div className="flex justify-center space-x-20 mt-8">
                <button 
                    onClick={handleMissionToggle}
                    className="bg-white border border-white text-gray-800 text-lg font-semibold py-2 px-20 rounded transition duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:border-red-600"
                >
                    Our Mission
                </button>
                <button className="bg-white border border-white text-gray-800 text-lg font-semibold py-2 px-20 rounded transition duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:border-red-600">
                    Tech and Telecom Partners
                </button>
                <button className="bg-white border border-white text-gray-800 text-lg font-semibold py-2 px-20 rounded transition duration-300 ease-in-out hover:bg-white hover:text-red-600 hover:border-red-600">
                    Energy Partners
                </button>
            </div>

            {/* Mission Card Section */}
            {isMissionVisible && (
                <div className="mt-10 flex transition-opacity duration-500">
                    <div className="w-1/2 pr-4"> {/* Added padding-right to create space */}
                        <img src="/images/mission.jpg" alt="Mission" className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="w-1/2 p-4">
                        <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                        <p className="text-gray-500 text-xl mb-4 leading-relaxed"> {/* Added leading-relaxed for line spacing */}
                            To be the UK’s most customer-centric service provider, helping businesses grow by providing and supporting them with innovative and trusted solutions.
                        </p>
                        <ul className="list-disc pl-6 text-lg space-y-2"> {/* Added space-y-2 for spacing between list items */}
                            {[
                                "Industry leading service against global benchmarks (ISO 9001 Certified)",
                                "Partnered with the best-of-the best industry suppliers",
                                "Delivering the latest technology and tools for business success",
                                "Over 30 years of experience in the channel partner space"
                            ].map((item, index) => (
                                <li key={index} className="text-gray-700 flex items-center">
                                    <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Mission;
