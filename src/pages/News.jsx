import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Importing arrow icon

const newsData = [
    {
        title: "News Title 1",
        image: "/images/home.jpg", // Replace with actual image paths
        description: "This is a brief description of news item 1.",
    },
    {
        title: "News Title 2",
        image: "/images/mission.jpg",
        description: "This is a brief description of news item 2.",
    },
    {
        title: "News Title 3",
        image: "/images/partner.jpg",
        description: "This is a brief description of news item 3.",
    },
];

const News = () => {
    return (
        <div>
            <Header />
            <h1 className="text-blue-800 text-7xl text-center my-6">Fidelity Group News</h1>
            <p className="text-gray-500 text-center mb-8 text-xl">The latest news and insight from Fidelity Group</p>
            <div className="grid grid-cols-3 gap-4 p-4">
                {newsData.map((newsItem, index) => (
                    <div 
                        key={index} 
                        className="border rounded-md shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                        <img
                            src={newsItem.image}
                            alt={newsItem.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-gray-600 text-lg">{newsItem.title}</h2>
                            <p className="text-gray-600">{newsItem.description}</p>
                            <button className="w-full bg-white text-red-600 px-4 py-2 rounded mt-4 flex items-center justify-center transition-all duration-300 hover:bg-red-600 hover:text-white">
                                Read More
                                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <ContactUs />
            <Footer />
        </div>
    );
};

export default News;
