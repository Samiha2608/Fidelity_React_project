import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import { faLightbulb, faCogs, faShieldAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

const CloudAndHosting = () => {
    return (
        <div>
            <Header />
            <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/partner.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                
                <div className="relative z-10 flex flex-col items-start justify-center min-h-screen text-left text-white p-8">
                    <p className="text-xl font-bold mb-4">Empowering everything as a service.</p>
                    <h1 className="text-6xl font-bold mb-4">
                        Get your business in <br />the <span className="underline decoration-white">cloud</span>
                    </h1>
                    <div className="flex space-x-4 mt-4">
                    <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-800 hover:scale-105 flex items-center space-x-2 mt-14">
                            <FontAwesomeIcon icon={faPhone} className="mr-2" />
                            <span>Speak with an Expert</span>
                        </button></Link>
                    </div>
                </div>
            </div>
            <section className="py-10">
                {/* Section Heading */}
                <div className="text-center mb-14">
                    <p className="text-xl font-bold text-gray-400 mb-5">
                    Cloud services, cloud hosting and strategy in the UK.
                    </p>
                    <h2 className="text-4xl font-bold mt-2 text-gray-600">
                        <span className="text-gray-500">
                        Connect to </span>
                        <span className="text-red-500">limitless possibilities. </span>
                        <span className="text-gray-500">Limitless opportunities. </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col md:col-span-2 ml-10">
                        <div className="flex items-center mb-4">
                            <div className="h-32 w-2 bg-blue-900 mr-4"></div> {/* Vertical Blue Line */}
                            <p className="font-bold text-3xl">
                            <span className="text-gray-500"> Our relationships with the major </span>
                            <span className="text-red-600">cloud technology providers </span>
                            <span className="text-gray-500">enable us to continually innovate.</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col md:col-span-3">
    <p className="text-gray-500 mb-4 text-lg">
  
Our relationships with the major cloud technology providers enable us to continually innovate.
Bespoke design and implementation of IT and cloud strategies for flexible working, data storage and data security; including desktop support, hosted email services and data back-up.
    </p>
    <div className="self-start"> {/* Align button to the start of the column */}
        <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-14 rounded transition duration-300 ease-in-out hover:bg-blue-900 mt-8">
            Get a Quote
        </button>
        </Link>
    </div>
</div>

                </div>
            </section>
            {/* New Section with Gray Background */}
<div className="py-16 bg-gray-200">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    <span className="text-gray-600">Why Fidelity for your</span>
                    <span className="text-red-600"> Cloud services?</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faLightbulb} className="text-red-600 text-3xl" />
                        </div>
                        <h3 className="text-gray-500 font-semibold text-xl">Flexible Services
                        </h3>
                        <p className="text-gray-500 mt-2 flex-grow">
                        Cloud hosting is a flexible service providing tangible cost-savings from cloud computing, including virtual servers, a virtual shared platform, and Software as a Service (SaaS) provision of services such as Office 365.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faCogs} className="text-red-600 text-3xl" />
                        </div>
                        <h3 className="text-gray-500 font-semibold text-xl">IT Outsourcing
                       </h3>
                        <p className="text-gray-500 mt-2 flex-grow">
                        Fidelity provide IT outsourcing, cloud and managed services. We ensure business continuity and optimisation whilst managing existing infrastructure or providing a fully outsourced solution. We understand the importance of day-to-day IT operations helping our customers to embrace innovation and drive growth.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faShieldAlt} className="text-red-600 text-3xl" />
                        </div>
                        <h3 className="text-gray-500 font-semibold text-xl">Applications</h3>
                        <p className="text-gray-500 mt-2 flex-grow">
                        Your company can We can help identify your company goals, assist with a complimentary IT plan and help you to execute it, choosing the right system tools, projects and hardware to help you to get there.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faUsers} className="text-red-600 text-3xl" />
                        </div>
                        <h3 className="text-gray-500 font-semibold text-xl">Proactive Solutions</h3>
                        <p className="text-gray-500 mt-2 flex-grow">
                        We offer a full range of Application Outsourcing Services covering application management, development and maintenance. Our relationships with the major software and hardware providers enable us to continually incorporate innovations in areas such as cloud, analytics and mobility.
                        </p>
                    </div>
                    
                </div>
                
        <div className="flex flex-col lg:flex-row items-start justify-between p-8 ">
    <div className="flex-1 mb-8 lg:mb-0">
        <h2 className="text-3xl my-4 font-bold">
            <span className="text-gray-600">Bespoke design and implementation of</span>
            <span className="text-red-500"> cloud strategies</span>
        </h2>
  
    </div>
    <div className="flex-1 flex justify-end mt-6">
    <Link to="/quote"> <button className="bg-red-600 text-white py-4 px-10 rounded-lg transition duration-300 transform hover:bg-blue-900 hover:scale-105">
            Get a Quote
        </button>
        </Link>
        <button className="bg-blue-900 text-white py-4 px-14 rounded-lg transition duration-300 transform hover:bg-blue-900 hover:scale-105 ml-6">
            Call Us
        </button>
    </div>
</div>

            </div>
        </div>
        <Testimonials />
        <ContactUs />
            <Footer />
        </div>
    );
};

export default CloudAndHosting;
