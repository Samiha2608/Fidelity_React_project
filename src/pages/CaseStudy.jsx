import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import { Link } from 'react-router-dom';

// Sample case studies data
const caseStudiesData = {
    "All Billing Platform": [
        {
            title: "Billing Platform Case Study 1",
            image: "/images/winner1.jpg",
            description: "This is a brief description of the Billing Platform Case Study 1.",
        },
        {
            title: "Billing Platform Case Study 2",
            image: "/images/winner2.jpg",
            description: "This is a brief description of the Billing Platform Case Study 2.",
        },
        {
            title: "Billing Platform Case Study 3",
            image: "/images/winner3.jpg",
            description: "This is a brief description of the Billing Platform Case Study 3.",
        },
    ],
    "Cloud Services": [
        {
            title: "Cloud Services Case Study 1",
            image: "/images/bill.jpg",
            description: "This is a brief description of the Cloud Services Case Study 1.",
        },
        // Add more case studies here as needed
    ],
    // Add more categories and their respective case studies
};

const CaseStudy = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <Header />
            <h1 className="text-gray-400 text-2xl mb-4 ml-4">Case Study</h1>
            <div className="text-center mb-8">
                {Object.keys(caseStudiesData).map((category) => (
                    <button
                        key={category}
                        className="text-red-600 mx-2"
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            {selectedCategory && (
                <div className="grid grid-cols-3 gap-4 p-4">
                    {caseStudiesData[selectedCategory].map((caseStudy, index) => (
                        <div key={index} className="border rounded-md shadow-lg">
                            <img
                                src={caseStudy.image}
                                alt={caseStudy.title}
                                className="w-full h-96 object-cover rounded-t-md" // Increased height
                            />
                            <div className="p-4">
                                <h2 className="text-gray-600 text-lg">{caseStudy.title}</h2>
                                <p className="text-red-600">{caseStudy.description}</p>
                                <button className="bg-red-600 text-white px-4 py-2 rounded w-full mt-2"> {/* Full width button */}
                                    View Case Study
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <ContactUs />
            <Footer />
        </div>
    );
};

export default CaseStudy;
