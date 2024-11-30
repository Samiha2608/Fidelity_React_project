import React from 'react';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
const Contact = () => {
    return (
        <div className="m-0 p-0">
            {/* Multi-color line with increased thickness */}
            <div className="h-8 bg-gradient-to-r from-red-600 via-red-900 to-red-600"></div>

     <ContactUs />
     <Footer />
        </div>

    );
};

export default Contact;
