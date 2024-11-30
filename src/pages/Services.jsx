import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import { Link } from 'react-router-dom';

const servicesData = [
    {
        id: 1,
        image: '/images/winner1.jpg',
        description: 'Connect like a pro. Get super fast and reliable business broadband and ethernet connectivity',
        text: 'Connectivity and Data',
          link: '/connectivity'
    },
    {
        id: 2,
        image: '/images/winner2.jpg',
        description: 'We have the know-how. Let us procure and manage your business energy requirements.',
        text: 'Energy Solutions',
             link: '/energy'
    },
    {
        id: 3,
        image: '/images/winner3.jpg',
        description: 'Let your business roam with us. We have business mobile plans and services that won’t let you down.',
        text: 'Mobile Services',
             link: '/business-mobile'
    },
    {
        id: 4,
        image: '/images/contact.jpg',
        description: 'IoT is changing the way we do business. We can manage volume of SIMs that connect to a range of different devices via mobile connectivity.',
        text: 'IoT Solutions',
             link: '/iot'
    },
    {
        id: 5,
        image: '/images/home.jpg',
        description: 'Get your business in the cloud. We build and implement bespoke cloud strategies to enhance your business operations and save on costs',
        text: 'Cloud Services',
             link: '/cloud-and-hosting'
    },
    {
        id: 6,
        image: '/images/mission.jpg',
        description: 'Community like a king! Lets get your business using the latest VoIP and cloud solutions',
        text: 'Voice and Telephony',
             link: '/voice'
    },
    {
        id: 7,
        image: '/images/mission.jpg',
        description: 'We are expert in saving money with state-of-the-art payment software solutions and technology',
        text: 'Merchant Payment Services',
             link: '/payments'
    }
    ,
    {
        id: 8,
        image: '/images/winner1.jpg',
        description: 'Become a reseller. Benefit from a compelling margin share and an oppertunity to drive new digital revenues with unique product offerings.',
        text: 'Partner Programme',
             link: '/partner-programmes'
    }
];

const Services = () => {
    return (
        <div className="pt-0 bg-white">
            <Header />
            <div className="px-4 py-8">
                <p className="text-gray-300 text-xl font-bold text-center mb-4">
                    Customer inspired software, telecoms and energy services in the UK.
                </p>
                <h2 className="text-center text-5xl mb-8">
                    <span className="text-gray-500">Empowering </span>
                    <span className="text-red-600">everything as a service.</span>
                </h2>

                {/* First Row of Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 ml-12">
            {servicesData.slice(0, 3).map(({ id, image, description, text, link }) => (
                <div
                    key={id}
                    className="relative overflow-hidden bg-white rounded-lg shadow transition-transform duration-300 group hover:scale-105 w-80"
                >
                    <a href={link} className="block relative group">
                        <img
                            className="w-full h-80 object-cover transition-transform duration-300 transform group-hover:scale-110 opacity-70"
                            src={image}
                            alt={text}
                        />
                        {/* Blue overlay with zoom effect */}
                        <div className="absolute inset-0 bg-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-70 group-hover:scale-110 transform origin-center"></div>
                        {/* Text on image */}
                        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-0">
                            <span className="text-lg font-bold">{text}</span>
                        </div>
                        {/* Learn more button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg transition duration-300">
                                Learn more
                            </button>
                        </div>
                    </a>
                    <div className="p-5">
                        <p className="mb-3 text-gray-700">{description}</p>
                    </div>
                </div>
            ))}
        </div>

                {/* Second Row of Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 ml-12">
            {servicesData.slice(3, 6).map(({ id, image, description, text, link }) => (
                <div
                    key={id}
                    className="relative overflow-hidden bg-white rounded-lg shadow transition-transform duration-300 group hover:scale-105 w-80"
                >
                    <a href={link} className="block relative group">
                        <img
                            className="w-full h-80 object-cover transition-transform duration-300 transform group-hover:scale-110 opacity-70"
                            src={image}
                            alt={text}
                        />
                        {/* Blue overlay with zoom effect */}
                        <div className="absolute inset-0 bg-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-70 group-hover:scale-110 transform origin-center"></div>
                        {/* Text on image */}
                        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-0">
                            <span className="text-lg font-bold">{text}</span>
                        </div>
                        {/* Learn more button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg transition duration-300">
                                Learn more
                            </button>
                        </div>
                    </a>
                    <div className="p-5">
                        <p className="mb-3 text-gray-700">{description}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 ml-12">
            {servicesData.slice(6, 8).map(({ id, image, description, text, link }) => (
                <div
                    key={id}
                    className="relative overflow-hidden bg-white rounded-lg shadow transition-transform duration-300 group hover:scale-105 w-80"
                >
                    <a href={link} className="block relative group">
                        <img
                            className="w-full h-80 object-cover transition-transform duration-300 transform group-hover:scale-110 opacity-70"
                            src={image}
                            alt={text}
                        />
                        {/* Blue overlay with zoom effect */}
                        <div className="absolute inset-0 bg-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-70 group-hover:scale-110 transform origin-center"></div>
                        {/* Text on image */}
                        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-0">
                            <span className="text-lg font-bold">{text}</span>
                        </div>
                        {/* Learn more button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg transition duration-300">
                                Learn more
                            </button>
                        </div>
                    </a>
                    <div className="p-5">
                        <p className="mb-3 text-gray-700">{description}</p>
                    </div>
                </div>
            ))}
        </div>
                <h2 className="text-center text-xl mb-8 mt-16">
    <span className="text-gray-500">Get the </span>
    <span className="text-red-600">X factor</span>
    <span className="text-gray-500"> for your business today </span>
    <span className="text-red-600 underline hover:text-red-700 cursor-pointer transition duration-300">
        Start now
    </span>
</h2>
<div className="flex flex-col lg:flex-row items-center justify-between p-8 bg-white">
            <div className="flex-1 mb-8 lg:mb-0">
                <p className="text-gray-400 text-xl font-bold">Do not settle for less. partner with the best</p>
                <h2 className="text-5xl my-4">
                    <span className="text-gray-500">Become a</span><span className="text-red-600"> partner</span> <span className="text-gray-500">and re-sell our range of products and services.</span>
                </h2>
                <Link to="/get-copy"><button className="bg-red-600 text-white py-6 px-8 rounded-lg transition duration-300 transform hover:bg-blue-800 hover:scale-105">
                    Get Copy Now
                </button>
                </Link>
            </div>
            <div className="flex-1">
                <img 
                    src="/images/home.jpg" // Replace with your image path
                    alt="Partner"
                    className="w-full h-auto rounded-lg"
                />
            </div>
        </div>


        <div className="flex flex-col lg:flex-row items-start justify-between p-8 bg-white">
    <div className="flex-1 mb-8 lg:mb-0">
        <h2 className="text-5xl my-4">
            <span className="text-red-500">Award winning</span>
            <span className="text-gray-600"> solutions and service. We thrive for </span>
            <span className="text-red-500">success</span>
            <span className="text-gray-500">.</span>
        </h2>
        {/* Become a Partner Link */}
        <a href="#" className="inline-flex text-lg items-center mt-4 text-red-500 underline decoration-gray-400 hover:decoration-red-500">
            Become a Partner
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 12h12"></path>
            </svg>
        </a>
    </div>
    <div className="flex-1 flex justify-end">
    <Link to="/get-copy"><button className="bg-red-600 text-white py-5 px-7 rounded-lg transition duration-300 transform hover:bg-blue-800 hover:scale-105">
            Get Copy Now
        </button></Link>
    </div>
</div>

<ContactUs />


            </div>
            <Footer />
        </div>
    );
};

export default Services;
