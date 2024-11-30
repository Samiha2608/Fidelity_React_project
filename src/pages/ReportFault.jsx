import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ReportFault = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-col md:flex-row flex-grow mt-32 mb-32">
                <div className="md:w-1/2 p-8 bg-gray-100">
                    <h1 className="text-3xl font-bold text-gray-600">
                        Log a <span className="text-red-600">Support</span> Request
                    </h1>
                    <p className="text-gray-600 mt-4">
                        You can also report faults by calling our freephone number 0800 840 6800 or 0333 323 0404. Your fault will be logged and responded to within the terms of your service level agreement.
                    </p>
                    <p className="text-gray-600 mt-4">E-mail: <span className="text-red-600">support@fidelity-group.co.uk</span></p>
                    <p className="text-gray-600">Tel: <span className="text-red-600">0800 840 6800</span></p>
                </div>
                <div className="md:w-1/2 p-8 bg-gray-100 shadow-md">
                    <form>
                        <div className="mb-6"> {/* Increased spacing here */}
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Your first and last name"
                                required
                            />
                        </div>
                        <div className="mb-6"> {/* Increased spacing here */}
                            <input
                                type="text"
                                name="company"
                                id="company"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Your company name"
                                required
                            />
                        </div>
                        <div className="mb-6"> {/* Increased spacing here */}
                            <input
                                type="tel"
                                name="contact_number"
                                id="contact_number"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Your contact number"
                                required
                            />
                        </div>
                        <div className="mb-6"> {/* Increased spacing here */}
                            <textarea
                                name="description"
                                id="description"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 h-28"
                                placeholder="Description"
                                required
                            ></textarea>
                        </div>
                        <div className="mb-6"> {/* Increased spacing here */}
                            <input type="checkbox" id="agree" className="mr-2" required />
                            <label htmlFor="agree" className="text-gray-600">I agree to the terms and conditions</label>
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
            <Footer className="w-full" />
        </div>
    );
};

export default ReportFault;
