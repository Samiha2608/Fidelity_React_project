import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLightbulb, faCogs, faShieldAlt, faUsers,  faChevronRight, faArrowRight} from '@fortawesome/free-solid-svg-icons';

const Payments = () => {
    return (
        <div>
            <Header />
            <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/partner.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                
                <div className="relative z-10 flex flex-col items-start justify-center min-h-screen text-left p-8">
                    <p className="text-xl font-bold mb-4 text-gray-500">PAYMENT-SOLUTIONS-AS-A SERVICE</p>
                    <h1 className="text-6xl font-bold mb-4">
                        <span className="text-white font-bold">Comprehensive payment Solutions </span><br /><span className="text-red-500 font-bold">for Business of All Sizes:</span>
                    </h1>
                    <h3 className="text-3xl font-bold mb-4 text-white">Card Machines, ePOS System, and more</h3>
                    <div className="flex space-x-4 mt-14">
                    <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-800 hover:scale-105">
                            Get a Quote
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
            
            {/* Loading Dots Section */}
            <div className="flex flex-col items-center my-8">
                <div className="flex flex-col space-y-4">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse-dot delay-400"></div>
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse-dot delay-200"></div>
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse-dot"></div>
                </div>
            </div>
            <div className="py-16 bg-white">
            <div className="container mx-auto px-4 ">
            

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faLightbulb} className="text-red-600 text-5xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">Accept payments</h3>
                        <p className="text-gray-600 mt-2 flex-grow text-lg">
                        Anywhere, anytime with our adaptable fixed, mobile, and portable card machines!
                        </p>
                        <a href="/quote" className="mt-8 text-red-600 font-bold hover:text-blue-900 transition-colors duration-300">
                            Get a Quote &rarr;
                        </a>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faCogs} className="text-red-600 text-5xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">EPOS</h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        Elevate your customer experience with our feature-packed EPOS
                        </p>
                        <a href="/quote" className="text-red-600 font-bold hover:text-blue-900 transition-colors duration-300">
                            Get a Quote &rarr;
                        </a>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faShieldAlt} className="text-red-600 text-5xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">E-Commerce</h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        Boost your online business with a secure and efficient ecommerce online payment system.
                        </p>
                        <a href="/quote" className="text-red-600 font-bold hover:text-blue-900 transition-colors duration-300">
                            Get a Quote &rarr;
                        </a>
                    </div>

             
                    
                </div>
                


            </div>
        </div>
        <div className="flex flex-col items-center my-8">
                <div className="flex flex-col space-y-4">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse-dot delay-400"></div>
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse-dot delay-200"></div>
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse-dot"></div>
                    </div>
                    </div>
  {/* New Section with Two Columns */}
   
            <section className="py-10">
                {/* Section Heading */}
                <div className="text-center mb-14">
                    <p className="text-lg font-bold text-gray-400">
                        Payment Solutions: Card Machines | Online Payment Gateways | EPOS | E-Commerce
                    </p>
                    <h2 className="text-3xl font-bold mt-2 text-gray-600">
                        <span className="text-gray-500">UK Merchant </span>
                        <span className="text-red-500">Payment Solutions</span>
                        <span className="text-gray-500"> Specialists </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col md:col-span-2 ml-10">
                        <div className="flex items-center mb-4">
                            <div className="h-16 w-1 bg-blue-900 mr-4"></div> {/* Vertical Blue Line */}
                            <p className="text-gray-800 font-bold text-2xl">
                                Improve efficiency and make <br />savings.
                            </p>
                        </div>
                        
                        {/* Links Section */}
                        <div className="flex flex-col space-y-2 ml-3">
                            <a href="/pay-by-link" className="text-red-600 hover:underline">
                                Pay by Link Solutions &gt;
                            </a>
                            <a href="/virtual-terminal" className="text-red-600 hover:underline">
                                Virtual Terminal Solutions &gt;
                            </a>
                            <a href="/mobile-card-payment" className="text-red-600 hover:underline">
                                Credit Card Terminals &gt;
                            </a>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col md:col-span-3">
    <p className="text-gray-600 mb-4 text-2xl font-bold">
        Unmatched <span className="text-red-500 font-bold">Merchant Services</span>: Choice and reliable payment solutions with Fidelity Group.
    </p>
    <p className="text-gray-500 mb-4 text-lg">
        Discover the Fidelity Group difference in payment solutions as we empower our merchant partners with a range of card, ePOS, and other payment solution choices.<br />
        By offering a diverse selection of products and services, we ensure the provision of reliable, payment solutions that add value to the entire value chain – banks, our partner network, and, most importantly, the end customers.
    </p>
    <div className="self-start"> {/* Align button to the start of the column */}
    <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-14 rounded transition duration-300 ease-in-out hover:bg-blue-900">
            Get a Quote
        </button>
        </Link>
    </div>
</div>

                </div>
            </section>
            <div className="flex flex-col lg:flex-row items-start justify-between p-8 bg-gray-200">
    <div className="flex-1 mb-8 lg:mb-0">
        <h2 className="text-5xl my-4 font-bold">
            <span className="text-gray-600">We can help your business</span>
            <span className="text-red-500"> save money</span>
            <span className="text-gray-600"> on rates. Book a review today!
            </span>
        </h2>
  
    </div>
    <div className="flex-1 flex justify-end">
        <button className="bg-red-600 text-white py-4 px-10 rounded-lg transition duration-300 transform hover:bg-blue-900 hover:scale-105">
            Request Review
        </button>
        <button className="bg-blue-900 text-white py-4 px-14 rounded-lg transition duration-300 transform hover:bg-blue-900 hover:scale-105 ml-6">
            Call Us Now
        </button>
    </div>
</div>
<section className="py-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {/* First Column */}
        <div className="flex flex-col">
            <p className="text-gray-400 text-lg font-bold">PAYMENT SOLUTIONS AS A SERVICE</p>
            <h2 className="text-gray-500 text-3xl font-bold mt-2">
                Press releases, <span className="text-red-500">blogs</span> and videos about payment solutions
            </h2>
            <ul className="mt-4 space-y-2">
                {[
                    "4 Key Factors to Consider When Choosing A Payment Option for Your Business",
                    "The Evolution of Merchant Payments",
                    "What is EPOS? | Electronic Point of Sale | Fidelity Group UK",
                    "What are continuous payment authorities (CPAS)",
                    "Using EPOS to improve customer retention"
                ].map((item, index) => (
                    <li key={index} className="flex items-center text-red-500 hover:text-red-700 transition duration-300 cursor-pointer"> {/* Added cursor-pointer */}
                        <FontAwesomeIcon icon={faArrowRight} className="mr-2 transition-transform duration-300 transform hover:translate-x-1" /> {/* Arrow icon */}
                        {item}
                    </li>
                ))}
            </ul>
        </div>

        {/* Second Column */}
        <div className="flex flex-col">
            <img src="/images/winner2.jpg" alt="Description" className="h-42 w-full object-cover mb-2" /> {/* Fixed height and width */}
            <h3 className="text-gray-500 text-xl font-bold">4 Key Factors to Consider When Choosing A Payment Option for Your Business</h3>
            <a href="#" className="text-red-500 underline hover:no-underline">Read more <FontAwesomeIcon icon={faChevronRight} className="inline" /></a>
        </div>

        {/* Third Column */}
        <div className="flex flex-col">
            <img src="/images/winner1.jpg" alt="Description" className="h-45 w-full object-cover mb-2" /> {/* Fixed height and width */}
            <h3 className="text-gray-500 text-xl font-bold">The Evolution of Merchant Payments</h3>
            <a href="#" className="text-red-500 underline hover:no-underline">Read more <FontAwesomeIcon icon={faChevronRight} className="inline" /></a>
        </div>
    </div>
</section>
<div className="flex flex-col lg:flex-row items-start justify-between p-8 bg-gray-200">
    <div className="flex-1 mb-8 lg:mb-0">
        <h2 className="text-4xl my-4 font-bold">
            <span className="text-gray-600">Unlock the power of payment solutions with Fidelity Group’s</span>
            <span className="text-red-500"> Partner Payments</span>
            <span className="text-gray-600">.
            </span>
        </h2>
  
    </div>
    <div className="flex-1 flex justify-end">
        <Link to="/get-copy"><button className="bg-red-600 text-white py-4 px-10 rounded-lg transition duration-300 transform hover:bg-blue-900 hover:scale-105">
            Download Our Brochure
        </button>
        </Link>
     
    </div>
</div>
<ContactUs />
            <Footer />
        </div>
    );
};

export default Payments;
