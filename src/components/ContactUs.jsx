// src/components/ContactUs.jsx
import React from 'react';

const ContactUs = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <div className="max-w-xl w-full p-8 bg-transparent shadow-md">
                <h2 className="text-3xl font-bold text-center text-gray-600 mb-4">Connect with Us</h2>
                <p className="text-gray-600 text-center mb-6">
                    If you’d like to find out more, why not call us now on 0800 840 6800 or simply fill in our contact form below and we’ll be in touch.
                </p>
                <form>
                    <div className="grid grid-cols-2 gap-4 mb-5">
                        <div className="relative z-0 w-full group">
                            <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600" placeholder="Name" required />
                        </div>
                        <div className="relative z-0 w-full group">
                            <input type="text" name="company" id="company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600" placeholder="Company" required />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-5">
                        <div className="relative z-0 w-full group">
                            <input type="tel" name="contact_number" id="contact_number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600" placeholder="Contact Number" required />
                        </div>
                        <div className="relative z-0 w-full group">
                            <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600" placeholder="Email" required />
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <textarea name="description" id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 h-28" placeholder="Description" required></textarea>
                    </div>
                    <div className="mb-5">
                        <input type="checkbox" id="agree" className="mr-2" required />
                        <label htmlFor="agree" className="text-gray-600">I agree to the terms and conditions</label>
                    </div>
                    <button type="submit" className="text-white bg-red-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                </form>
            </div>
            <div className="hidden md:flex md:w-1/2 h-screen">
                <img src="/images/contact.jpg" alt="Contact Us" className="object-cover w-full h-full rounded-lg" />
            </div>
        </div>
    );
};

export default ContactUs;
