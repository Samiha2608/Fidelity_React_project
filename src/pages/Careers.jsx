import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import { Link } from 'react-router-dom';

const Careers = () => {
    return (
        <div>
            <Header />
            <h1 className="text-center text-gray-500 text-4xl my-8 font-bold mb-14 mt-14 ml-64 mr-64 leading-relaxed">
                Do you have the <span className="text-red-600">X factor?</span> Check back soon for any new open positions to become part of our family of professional experts that are leading change and making our customers smile.
            </h1>
            <ContactUs />
            <Footer />
     
        </div>
    );
};

export default Careers;
