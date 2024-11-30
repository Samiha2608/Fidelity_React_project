// src/components/PartnerPrograms.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; // Adjust the import path based on your project structure
import Footer from '../components/Footer';
import Award from '../components/Award'; // Import the Footer component
import Mission from '../components/Mission';
import ContactUs from '../components/ContactUs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faCheck , faChevronDown} from '@fortawesome/free-solid-svg-icons'; // Import the check icon

const PartnerPrograms = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const faqs = [
        {
            question: "Who are Fidelity Group?",
            answer: "The Fidelity name has been trusted in the telecoms market for over 40 years. Over that time, we have developed a highly successful partnership model dedicated to delivering exceptional B2B telecom, utility, energy, IoT, broadband, and utility solutions for our partners. The awards that we have won speak volumes about our ongoing success story. We have been featured twice in The Sunday Times TechTrack 100 listing and are regularly awarded by our industry peers."
        },
        {
            question: "What services do we provide?",
            answer: "We provide a comprehensive range of services, including telecom solutions, utility services, energy management, and IoT solutions to help businesses thrive."
        },
        {
            question: "How can I become a partner?",
            answer: "You can become a partner by contacting us through our website or reaching out to our partnership team directly to discuss the opportunities available."
        },
        {
            question: "What is the partnership model?",
            answer: "Our partnership model is designed to deliver exceptional value to both our partners and their customers, focusing on collaboration and mutual success."
        },
        {
            question: "How do I contact customer support?",
            answer: "You can contact our customer support team through our website, email, or phone. We are available 24/7 to assist you."
        }
    ];
    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div>
            <Header /> {/* Import the Header component */}

            <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/partner.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-start justify-center min-h-screen text-left text-white p-8">
                    <h1 className="text-6xl font-bold mb-4 text-white">
                        Unlock New Revenue <br /> Opportunities with Our <br /> Channel Partnership Program​
                    </h1>
                    <div className="flex space-x-4 mt-4">
                        <button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-800 hover:scale-105">
                            Enquire Now
                        </button>
                        <button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-800 hover:scale-105">
                            Download our Partnership Brochure
                        </button>
                    </div>
                </div>
            </div>

            {/* New Section with Two Columns */}
            <div className="flex flex-col md:flex-row p-8">
                {/* Left Column */}
                <div className="md:w-2/3 p-4">
                    <h2 className="text-gray-700 text-3xl font-bold mb-4">
                        Partner Inspired Software, Telecoms, Energy and Billing Solutions.
                    </h2>
                    <p className="text-gray-600 mb-4">
                        With over 40 years of experience in the telecom market, we have developed a dynamic partnership model dedicated to delivering exceptional B2B telecom, utility, energy, IoT, Broadband and Utility solutions.
                    </p>
                    <p className="text-gray-600">
                        Our collaborative approach is designed to provide your business with greater value for both existing and new customers who require these essential services.
                    </p>
                </div>

                {/* Right Column */}
                <div className="md:w-1/3 p-4 flex flex-col items-center space-y-4">
                    <button className="bg-gray-200 text-gray-700 font-semibold py-3 rounded transition duration-300 ease-in-out hover:bg-gray-300 w-full">
                        Dealer Programme
                    </button>
                    <button className="bg-gray-200 text-gray-700 font-semibold py-3 rounded transition duration-300 ease-in-out hover:bg-gray-300 w-full">
                        Wholesale Partnership
                    </button>
                    <button className="bg-gray-200 text-gray-700 font-semibold py-3 rounded transition duration-300 ease-in-out hover:bg-gray-300 w-full">
                        Referral Programme
                    </button>
                </div>
            </div>
<Award />
            {/* New Section for Partnership Options */}
            <div className="text-center py-10">
                <h2 className="text-gray-700 text-4xl font-bold mb-8">
                    Choose the Perfect Partnership for Your Business
                </h2>
                <div className="flex flex-col md:flex-row justify-around">
                    {/* First Column - Dealer Partnership */}
                    <div className="md:w-1/3 p-4 flex flex-col items-center">
                        <h3 className="text-gray-700 text-2xl font-bold mb-4">Dealer Partnership</h3>
                        <ul className="text-gray-600 mb-4 text-center">
                            <li className="flex items-center mb-2">
                                <FontAwesomeIcon icon={faCheck} className="text-gray-700 mr-2" />
                                Incentive and growth programmes
                            </li>
                            <li className="flex items-center mb-2">
                                <FontAwesomeIcon icon={faCheck} className="text-gray-700 mr-2" />
                                Sales and product training
                            </li>
                            <li className="flex items-center mb-2">
                                <FontAwesomeIcon icon={faCheck} className="text-gray-700 mr-2" />
                                Full product suite access
                            </li>
                            <li className="flex items-center mb-2">
                                <FontAwesomeIcon icon={faCheck} className="text-gray-700 mr-2" />
                                Anvil Access and training
                            </li>
                            <li className="flex items-center mb-2">
                                <FontAwesomeIcon icon={faCheck} className="text-gray-700 mr-2" />
                                24/7/365 customer support service
                            </li>
                            <li className="flex items-center mb-2">
                                <FontAwesomeIcon icon={faCheck} className="text-gray-700 mr-2" />
                                Inside track market update
                            </li>
                        </ul>
                        <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-800">
                            Enquire Now
                        </button>
                    </div>

                    {/* Second Column - Referral Partnership */}
                    <div className="md:w-1/3 p-4 flex flex-col items-center">
                        <h3 className="text-gray-700 text-2xl font-bold mb-4">Referral Partnership</h3>
                        <ul className="text-gray-600 mb-4 text-center">
                            <li className="flex items-center mb-2">
                                <FontAwesomeIcon icon={faCheck} className="text-gray-700 mr-2" />
                                Incentive and growth programmes
                            </li>
                            <li className="flex items-center mb-2">
                                <FontAwesomeIcon icon={faCheck} className="text-gray-700 mr-2" />
                                Sales and product training
                            </li>
                            <li className="flex items-center mb-2">
                                <FontAwesomeIcon icon={faCheck} className="text-gray-700 mr-2" />
                                Full product suite access
                            </li>
                            <li className="flex items-center mb-2">
                                <FontAwesomeIcon icon={faCheck} className="text-gray-700 mr-2" />
                                Dual branded customer billing
                            </li>
                            <li className="flex items-center mb-2">
                                <FontAwesomeIcon icon={faCheck} className="text-gray-700 mr-2" />
                                24/7/365 customer support service
                            </li>
                            <li className="flex items-center mb-2">
                                <FontAwesomeIcon icon={faCheck} className="text-gray-700 mr-2" />
                                24/7/365 customer support service
                            </li>
                            
                        </ul>
                        <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-800">
                            Enquire Now
                        </button>
                    </div>

                    {/* Third Column - Wholesale Partnership */}
                    <div className="md:w-1/3 p-4 flex flex-col items-center">
                        <h3 className="text-gray-700 text-2xl font-bold mb-4">Wholesale Partnership</h3>
                        <ul className="text-gray-600 mb-4 text-center">
                            <li className="flex items-center mb-2">
                                <FontAwesomeIcon icon={faCheck} className="text-gray-700 mr-2" />
                                Bulk purchasing discounts
                            </li>
                            <li className="flex items-center mb-2">
                                <FontAwesomeIcon icon={faCheck} className="text-gray-700 mr-2" />
                                Flexible payment options
                            </li>
                            <li className="flex items-center mb-2">
                                <FontAwesomeIcon icon={faCheck} className="text-gray-700 mr-2" />
                                Access to a wide range of products
                            </li>
                            <li className="flex items-center mb-2">
                                <FontAwesomeIcon icon={faCheck} className="text-gray-700 mr-2" />
                                24/7/365 customer support service
                            </li>
                            <li className="flex items-center mb-2">
                                <FontAwesomeIcon icon={faCheck} className="text-gray-700 mr-2" />
                                24/7/365 customer support service
                            </li>
                            <li className="flex items-center mb-2">
                                <FontAwesomeIcon icon={faCheck} className="text-gray-700 mr-2" />
                                24/7/365 customer support service
                            </li>
                        </ul>
                        <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-800">
                            Enquire Now
                        </button>
                    </div>
                </div>
            </div>
            {/* New Section: More than Just Billing */}
            <div className="flex flex-col md:flex-row p-8">
    {/* Left Column - Image */}
    <div className="md:w-1/3 p-4 flex justify-start items-start"> {/* Adjust width and align to start */}
        <img src="/images/bill.jpg" alt="Billing Management" className="w-96 h-auto rounded-lg" /> {/* Adjust the width here */}
    </div>

    {/* Right Column - Text */}
    <div className="md:w-2/3 p-4 flex flex-col justify-center items-start"> {/* Adjust width and align text to start */}
        <h2 className="text-gray-600 text-4xl font-bold mb-4">More than just billing</h2>
        <p className="text-gray-600 mb-4">
            Fidelity leverages the market-leading billing management software, Anvil—a comprehensive business management platform that empowers our resellers to quote, order, and bill their end users according to their specific requirements. Supported by our 24/7/365 customer support service, we ensure that driving revenue growth for your business becomes effortless.
        </p>
        <button className="bg-red-600 text-white py-4 px-8 rounded transition duration-300 ease-in-out hover:bg-blue-800">
            Find Out More
        </button>
    </div>
</div>
<Mission />
<section className="py-10">
            <h2 className="text-center text-gray-700 text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8">
                {faqs.map((faq, index) => (
                    <div key={index}>
                        <div
                            className={`flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer transition duration-300 ease-in-out 
                                ${activeIndex === index ? 'bg-blue-800 text-white' : 'hover:bg-blue-800 hover:text-white'}`}
                            onClick={() => toggleAnswer(index)}
                        >
                            <FontAwesomeIcon icon={faChevronDown} className={`mr-2 ${activeIndex === index ? 'rotate-180' : ''}`} />
                            <span className={`transition duration-300 ${activeIndex === index ? 'text-white' : 'text-black'}`}>{faq.question}</span>
                        </div>
                        {activeIndex === index && (
                            <div className="mt-2 p-4 bg-white text-black border border-gray-300 rounded-lg">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
        <ContactUs />

            <Footer /> {/* Add the Footer component at the end */}
        </div>
    );
};

export default PartnerPrograms;
