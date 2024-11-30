import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const EmergencyLocation = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-col md:flex-row flex-grow mt-32 mb-32">
                <div className="md:w-1/2 p-8 bg-gray-100">
                    <h1 className="text-3xl font-bold text-gray-600">
                        Log a <span className="text-red-600">Support</span> Request
                    </h1>
                    <p className="text-gray-600 mt-4">Why location address information is needed?</p>
                    <p className="text-gray-600 mt-4">
                        Accurate location address information is needed to ensure that accurate and precise location information is presented to the 999 operator (or even an organisational internal safety desk) when an emergency call is made from a VoIP telephone. The reason that the automatic provision of reliable location information is important is to cater for emergency situations where the caller is:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-4">
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2" />
                            Unable to speak
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2" />
                            Disoriented
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2" />
                            Has difficulty making themselves understood due to language or dialect issues.
                        </li>
                    </ul>
                    <p className="text-gray-600 mt-4">E-mail: <span className="text-red-600">support@fidelity-group.co.uk</span></p>
                    <p className="text-gray-600">Tel: <span className="text-red-600">0800 840 6800</span></p>
                </div>
                <div className="md:w-1/2 p-8 bg-gray-100 shadow-md">
                    <p className="text-gray-600 text-xl mb-8">Please use this form to provide us with your exact location.</p>
                    <form>
                        <div className="mb-6">
                            <input
                                type="text"
                                name="firstname"
                                id="firstname"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Your first Name"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="text"
                                name="lastname"
                                id="lastname"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Your Last name"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="email"
                                name="Email"
                                id="Email"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Your E-mail"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="text"
                                name="associated"
                                id="associated"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Associated DDI"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="text"
                                name="Address1"
                                id="Address1"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Address Line 1"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="text"
                                name="Address2"
                                id="Address2"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Address Line 2"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="text"
                                name="Address3"
                                id="Address3"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Address Line 3"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="text"
                                name="town"
                                id="town"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Town"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="number"
                                name="postcode"
                                id="postcode"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600"
                                placeholder="Postcode"
                                required
                            />
                        </div>

                        <div className="mb-6">
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
            <div className="text-3xl font-bold text-gray-600 text-center">
              <h1>Moral Obligations</h1></div>
              <div className="flex flex-col items-center justify-center text-left text-gray-500 p-8 bg-white">
                <p className="text-lg text-center mx-25 mt-8">
                    At Fidelity Group, we are dedicated to transforming the way people connect. Founded over 30 years ago, with a vision to bring unparalleled communication services to our clients, we pride ourselves on being at the forefront of technological innovation and customer satisfaction.
                    Our team comprises seasoned industry professionals with extensive expertise in designing, deploying, and managing advanced telecom infrastructure.
                    We are committed to offering reliable, high-quality services that meet the diverse needs of businesses and individuals alike.
                </p>

            </div>
            <Footer className="w-full" />
        </div>
    );
};

export default EmergencyLocation;
