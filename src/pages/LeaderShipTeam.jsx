import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; // Adjust the path as needed
import Footer from '../components/Footer'; // Adjust the path as needed
import ContactUs from '../components/ContactUs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Correct import for LinkedIn icon

const teamMembers = [
    {
        name: 'Alan Shraga',
        position: 'Managing Director',
        image: '/images/winner2.jpg', // Replace with actual image paths
    },
    {
        name: 'Ian McNamara',
        position: 'Transformation Director',
        image: '/images/winner2.jpg',
    },
    {
        name: 'Aron Teacher',
        position: 'Commercial Director',
        image: '/images/winner2.jpg',
    },
    {
        name: 'James Shraga',
        position: 'Director of Sales and Partnerships',
        image: '/images/winner2.jpg',
    },
    {
        name: 'Dan Miles',
        position: 'UK Service Director',
        image: '/images/winner2.jpg',
    },
    {
        name: 'Cristian Siminea',
        position: 'Head of Mobile',
        image: '/images/winner2.jpg',
    },
    {
        name: 'Pamela Murray',
        position: 'Group Finance Manager',
        image: '/images/winner2.jpg',
    },
    {
        name: 'Niki Foote',
        position: 'Head of Customer Marketing and Retentions',
        image: '/images/winner2.jpg',
    },
];

const LeaderShipTeam = () => {
    return (
        <div>
            <Header />
            <h1 className="text-center text-gray-400 text-4xl my-8 font-bold mb-14 mt-14">
                We live an ethos of trus,<span className="text-red-600">loyalty</span> and delivery.
            </h1>
            <div className="grid grid-cols-3 gap-4 mb-8">
                {teamMembers.slice(0, 3).map((member, index) => (
                    <div className="relative" key={index}>
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-auto rounded-md"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <div className="relative">
                                <span className="absolute bottom-12 bg-gray-800 text-white text-sm p-1 rounded hidden group-hover:block">
                                    LinkedIn
                                </span>
                                <button className="bg-blue-900 text-white py-3 px-16 hover:scale-105">
                                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                                </button>
                            </div>
                        </div>
                        <div className="text-center text-gray-600">
                            <h2 className="text-lg">{member.name}</h2>
                            <p>{member.position}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-5 gap-4 mb-8">
                {teamMembers.slice(3).map((member, index) => (
                    <div className="relative" key={index}>
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-auto rounded-md"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <div className="relative">
                                <span className="absolute bottom-12 bg-gray-800 text-white text-sm p-1 rounded hidden group-hover:block">
                                    LinkedIn
                                </span>
                                <button className="bg-blue-900 text-white py-3 px-10 hover:scale-105">
                                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                                </button>
                            </div>
                        </div>
                        <div className="text-center text-gray-600">
                            <h2 className="text-lg">{member.name}</h2>
                            <p>{member.position}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col lg:flex-row items-start justify-between p-8 bg-gray-300">
    <div className="flex-1 mb-8 lg:mb-0">
        <h2 className="text-5xl my-4">
   
            <span className="text-gray-600"> The UK’s fastest growing,</span>
            <span className="text-red-500">customer centric</span>
            <span className="text-gray-500">service provider.
            </span>
        </h2>
 
    </div>
    <div className="flex-1 flex justify-end">
    <Link to="/quote"><button className="bg-red-600 text-white py-4 px-8 rounded-lg transition duration-300 transform hover:bg-blue-800 hover:scale-105 mt-14">
            Let's Connect
        </button></Link>
    </div>
</div>
<ContactUs />
            <Footer />
        </div>
    );
};

export default LeaderShipTeam;
