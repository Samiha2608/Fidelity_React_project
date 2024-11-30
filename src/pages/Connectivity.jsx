import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Award from '../components/Award';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCogs, faShieldAlt, faUsers } from '@fortawesome/free-solid-svg-icons';


const Connectivity = () => {
    return (
        <div>
            <Header />
            <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/partner.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                
                <div className="relative z-10 flex flex-col items-start justify-center min-h-screen text-left text-white p-8">
                    <p className="text-xl font-bold mb-4">Trusted business fibre broadband and ethernet cable services.</p>
                    <h1 className="text-6xl font-bold mb-4">
                        Get the best business<br /> fibre broadband
                    </h1>
                    <div className="flex space-x-4 mt-4">
                    <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-800 hover:scale-105">
                            Speak with an Expert
                        </button></Link>
                    </div>
                </div>
            </div>

            {/* New Section with Three Columns */}
            <div className="py-16 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1 */}
                    <div className="text-center">
                        <a href="/leased-line-fibre" className="text-red-600 flex items-center justify-center mb-2 relative group transition-transform transform hover:scale-105 text-lg font-bold">
                        Dedicated Fibre Internet<span className="ml-2">→</span>
                            <span className="block w-full h-0.5 bg-red-600 absolute bottom-0 left-0 scale-0 transition-transform duration-300 group-hover:scale-100"></span> {/* Underline */}
                        </a>
                        <p className="text-gray-600 mt-2 text-lg">The UK’s no.1 dedicated leased line internet access for business. No sharing, unrivalled reliability, and market-leading service availability to help your business thrive. Internet speeds up to 10Gbps.</p>
                        <Link to="/leased-line-fibre"><button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-800 hover:scale-105 mt-4">
                            Find Out More
                        </button>
                        </Link>
                    </div>

                    {/* Column 2 */}
                    <div className="text-center">
                        <a href="/fibre-to-the-premises" className="text-red-600 flex items-center justify-center mb-2 relative group transition-transform transform hover:scale-105 text-lg font-bold">
                        Fibre to the Premises (FTTP) <span className="ml-2">→</span>
                            <span className="block w-full h-0.5 bg-red-600 absolute bottom-0 left-0 scale-0 transition-transform duration-300 group-hover:scale-100"></span> {/* Underline */}
                        </a>
                        <p className="text-gray-600 mt-2 text-lg">Premium business fibre broadband service for businesses demanding high-availability and high-capacity. Internet speeds up to 1Gbps.</p>
                        <Link to="/fibre-to-the-premises"><button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-800 hover:scale-105 mt-4">
                        Find Out More
                        </button>
                        </Link>
                    </div>

                    {/* Column 3 */}
                    <div className="text-center">
                        <a href="/sogea-broadband" className="text-red-600 flex items-center justify-center mb-2 relative group transition-transform transform hover:scale-105 text-lg font-bold">
                        SoGEA Broadband <span className="ml-2">→</span>
                            <span className="block w-full h-0.5 bg-red-600 absolute bottom-0 left-0 scale-0 transition-transform duration-300 group-hover:scale-100"></span> {/* Underline */}
                        </a>
                        <p className="text-gray-600 mt-2 text-lg">Business broadband without the need for a traditional phone line. So, everything you require is covered in a single order, with one supplier.</p>
                        <Link to="/sogea-broadband"><button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-800 hover:scale-105 mt-4">
                        Find Out More
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
           {/* New Section with Two Columns */}
{/* New Section with Two Columns */}
<div className="py-16 px-4">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8"> {/* Using grid-cols-5 for more precise control */}
        {/* Left Column */}
        <div className="flex items-center md:col-span-2"> {/* Set left column to span 2 out of 5 */}
            <div className="h-full w-3 bg-blue-900 mr-4"></div> {/* Vertical Blue Line */}
            <p className="text-gray-800 font-bold text-2xl">
                Work smarter and faster, not harder, 
                <span className="text-red-600 font-bold"> with the fastest and most reliable business fibre broadband speeds.</span>
            </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col md:col-span-3"> {/* Set right column to span 3 out of 5 */}
            <p className="text-gray-500 mb-4 text-lg">
                We have hand-picked specialist suppliers to provide our clients with superfast, business fibre broadband connectivity solutions. Whether you’re looking for a specific product or service that will benefit your team’s productivity and collaboration, or hope to achieve the fastest internet speeds possible, we’ll do the hard work for you and find the best business fibre broadband deals.
            </p>
            <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-6 rounded transition duration-300 ease-in-out transform hover:bg-blue-800 hover:scale-105">
                Speak with an Expert About Fibre Broadband in Your Area
            </button>
            </Link>
        </div>
    </div>
</div>

<Award />
{/* New Section with Gray Background */}
<div className="py-16 bg-gray-200">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    <span className="text-gray-600">Why Fidelity for your</span>
                    <span className="text-red-600"> business fibre broadband?</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faLightbulb} className="text-red-600 text-3xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-lg">Improved Productivity</h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                            Empower your teams with seamless communication via high-performing applications such as video and voice conferencing. Upgrade to full business fibre broadband for improved internet speeds and increased reliability at competitive pricing.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faCogs} className="text-red-600 text-3xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-lg">Scalable Business Fibre Broadband</h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                            A selection of broadband options based on your business needs, including Leased Lines, Dedicated fibre to the premises (FTTP), and fibre ethernet. Our smart business solutions are scalable and can be tailored to the specific size and requirements of each individual site. Upgrade your business to fibre business broadband today and experience improved internet speeds and reliability.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faShieldAlt} className="text-red-600 text-3xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-lg">Better Security</h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                            Benefit from secure communication and protection against the latest web threats. Our systems are compliant with industry-specific cyber security requirements and feature a resilient central firewall and antivirus protection for enhanced safeguarding.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faUsers} className="text-red-600 text-3xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-lg">Award-winning 24/7/365 Business Support</h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                            Our dedicated support team is on hand to assist you with any issues at any time, from anywhere.
                        </p>
                    </div>
                    
                </div>
                
        <div className="flex flex-col lg:flex-row items-start justify-between p-8 ">
    <div className="flex-1 mb-8 lg:mb-0">
        <h2 className="text-4xl my-4 font-bold">
            <span className="text-gray-600"> Connect to our latest</span>
            <span className="text-red-500"> business Fibre Broadband </span>
            <span className="text-gray-600">deals</span>
        </h2>
  
    </div>
    <div className="flex-1 flex justify-end">
    <Link to="/quote"><button className="bg-red-600 text-white py-4 px-10 rounded-lg transition duration-300 transform hover:bg-blue-900 hover:scale-105">
            Get Promo
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

export default Connectivity;
