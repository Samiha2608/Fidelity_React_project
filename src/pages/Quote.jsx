// src/components/Quote.jsx
import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Quote = () => {
    return (
      
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-8">
          
            {/* Heading Section */}
            <div className="w-full max-w-4xl mb-8">
              
                <div className="flex items-center mb-4">
                    <div className="h-12 w-1 bg-blue-900 mr-4"></div>
                    <h2 className="text-3xl font-bold text-gray-600">Talk to us today</h2>
                </div>
                <p className="text-gray-600 text-left">
                    We’d love to talk to you if you are considering using one of our outstanding services. 
                    Or if you’d like to find out how you can become one of our trusted partners. 
                    We have a team of experts ready to help you.
                </p>
            </div>

            {/* Contact Form Section */}
            <div className="w-full max-w-4xl p-8 bg-transparent shadow-md">
                <form>
                    <div className="grid grid-cols-2 gap-4 mb-5">
                        <div className="relative z-0 w-full group">
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600" 
                                placeholder="Name" 
                                required 
                            />
                        </div>
                        <div className="relative z-0 w-full group">
                            <input 
                                type="text" 
                                name="company" 
                                id="company" 
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600" 
                                placeholder="Company Name" 
                                required 
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-5">
                        <div className="relative z-0 w-full group">
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600" 
                                placeholder="Email Address" 
                                required 
                            />
                        </div>
                        <div className="relative z-0 w-full group">
                            <input 
                                type="tel" 
                                name="contact_number" 
                                id="contact_number" 
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600" 
                                placeholder="Contact Number" 
                                required 
                            />
                        </div>
                    </div>

                    {/* Checkbox Section */}
                    <div className="mb-5">
                        <p className="text-gray-600 text-left mb-2">Required Business Services:</p>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="flex items-center">
                                <input type="checkbox" id="service1" className="mr-2" />
                                <label htmlFor="service1" className="text-gray-600">Service 1</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="service2" className="mr-2" />
                                <label htmlFor="service2" className="text-gray-600">Service 2</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="service3" className="mr-2" />
                                <label htmlFor="service3" className="text-gray-600">Service 3</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="service4" className="mr-2" />
                                <label htmlFor="service4" className="text-gray-600">Service 4</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="service5" className="mr-2" />
                                <label htmlFor="service5" className="text-gray-600">Service 5</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="service6" className="mr-2" />
                                <label htmlFor="service6" className="text-gray-600">Service 6</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="service7" className="mr-2" />
                                <label htmlFor="service7" className="text-gray-600">Service 7</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="service8" className="mr-2" />
                                <label htmlFor="service8" className="text-gray-600">Service 8</label>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" id="service9" className="mr-2" />
                                <label htmlFor="service9" className="text-gray-600">Service 9</label>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="text-white bg-red-600 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                    >
                        Send
                    </button>
                </form>
            </div>

            {/* Image and Text Section */}
            <div className="w-full max-w-4xl flex flex-col md:flex-row items-center mt-8">
                <div className="md:w-1/2 mb-4 md:mb-0">
                    <img src="/images/contact.jpg" alt="Your Alt Text" className="object-cover w-full h-auto rounded-lg" />
                </div>
                <div className="md:w-1/2 md:pl-8">
                    <h3 className="text-2xl font-bold text-gray-600 mb-2">Your Heading Here</h3>
                    <p className="text-gray-600">Your additional text goes here. Provide details about your services, offers, or any other relevant information.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Quote;
