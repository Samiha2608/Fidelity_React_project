import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const CloudFault = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-col md:flex-row flex-grow p-8">
                {/* Left Side Content */}
                <div className="md:w-1/2 p-8 bg-gray-100">
                    <h1 className="text-3xl font-bold text-gray-600">
                        Log a <span className="text-red-600">Support</span> Request
                    </h1>
                    <p className="text-gray-600 mt-4">
                        Scan the below QR code to open a new text message to send our way.
                    </p>
                    <p className="text-gray-600 mt-4">E-mail: <span className="text-red-600">cloud@fidelity-group.co.uk</span></p>
                    <p className="text-gray-600">Tel: <span className="text-red-600">03330 15 15 01</span></p>
                    {/* Placeholder for the barcode */}
                   
                </div>
                
                {/* Right Side Form */}
                <div className="md:w-1/2 p-8 bg-gray-100 shadow-md">
                    <p className="text-gray-600 text-xl mb-8">Please fill out the form below to report an issue.</p>
                    <form>
                        <div className="mb-6">
                            <input
                                type="text"
                                name="fullname"
                                id="fullname"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Your First and Last Name"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Your Phone Number"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="text"
                                name="company"
                                id="company"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Your Company Name"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Your Email Address"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <select
                                name="faultType"
                                id="faultType"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                                required
                            >
                                <option value="" disabled selected>Select Fault Type</option>
                                <option value="Admin Change">Admin Change</option>
                                <option value="Single Extension Fault">Single Extension Fault</option>
                                <option value="Affecting All Extensions">Affecting All Extensions</option>
                                <option value="Connectivity Issue">Connectivity Issue</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <textarea
                                name="faultDescription"
                                id="faultDescription"
                                rows="4"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Fault Description"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="text-white bg-red-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CloudFault;
