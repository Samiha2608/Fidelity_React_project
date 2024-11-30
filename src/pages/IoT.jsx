import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCloud, faNetworkWired, faShieldAlt, faUsers, faClipboardList, faMobileAlt, faLightbulb, faCogs } from '@fortawesome/free-solid-svg-icons';


const IoT = () => {
    return (
        <div>
            <Header />
            <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/partner.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                
                <div className="relative z-10 flex flex-col items-start justify-center min-h-screen text-left text-white p-8">
                   <h1 className="text-6xl mb-4">
                    A Global IoT Solution<br /> – Data everywhere <br />for everything
                    </h1>
                    <p className="text-xl mb-4">Our IoT solutions are driving connectivity and growth <br/>everywhere, from CCTV cameras to hand held payment<br/> devices. And from the UK to the farthest reaches of the globe.
                      <br /><br />If your business needs the very best in IoT connectivity,<br /> choosing our solution will be the easiest decision <br />you’ll ever make.


                      </p> 
                    <div className="flex space-x-4 mt-4">
                        <button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-800 hover:scale-105">
                         Find Out More
                        </button>
                    </div>
                </div>

                {/* Box with Red Border and Skin Background Color */}
                <div className="absolute top-1/4 right-0 bg-red-100 border-4 border-red-600 px-12 py-12 w-1/2 h-auto rounded-lg z-20"> {/* Increased height with py-12 */}
                    <h2 className="text-4xl font-bold text-red-600 text-center mb-4">FREE Starter Pack</h2>
                    <div className="grid grid-cols-2 gap-6">
                        {/* Row 1 */}
                        <div className="flex items-center text-lg font-bold">
                            <FontAwesomeIcon icon={faLightbulb} className="text-red-600 text-3xl mr-2" />
                            <span className="text-red-600">Upto 4 SIMS</span>
                        </div>
                        <div className="flex items-center text-lg font-bold">
                            <FontAwesomeIcon icon={faCogs} className="text-red-600 text-3xl mr-2" />
                            <span className="text-red-600">250MB SIMS</span>
                        </div>
                        {/* Row 2 */}
                        <div className="flex items-center text-lg font-bold">
                            <FontAwesomeIcon icon={faLightbulb} className="text-red-600 text-3xl mr-2" />
                            <span className="text-red-600">ACCESS TO ALL 4 UK NETWORKS</span>
                        </div>
                        <div className="flex items-center text-lg font-bold">
                            <FontAwesomeIcon icon={faCogs} className="text-red-600 text-3xl mr-2" />
                            <span className="text-red-600">VM2M MANAGEMENT PLATFORM</span>
                        </div>
                    </div>
                    <Link to="/iot-starter-pack"><button className="mt-12 bg-red-600 text-white font-semibold py-4 px-4 rounded transition duration-300 ease-in-out transform hover:bg-blue-900 hover:scale-105 mt-4 w-full">
                        Start Now
                    </button>
                    </Link>
                </div>
            </div>
              {/* New Section Below */}
              <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">
                        <span className="text-red-600">Quote, order & manage</span> – <span className="text-gray-600">ENTIRELY ONLINE!</span>
                    </h2>
                    <p className="text-lg text-gray-700">
                    Fidelity’s new platform, named<a href="/link1" className="text-red-600 underline hover:underline hover:scale-105 transition duration-200"> VM2M</a>, allows you to create your perfect IoT solution and get a quote whenever you need it. No phone calls, no waiting for pricing to come back to you. It’s all in your hands.
           <br /><br />
           And once you have your quote, you can order your IoT SIM cards, entirely online too.
           <br /><br />
           Getting started with IoT has never been easier for you. Find out more about vM2M <a href="/link2" className="text-red-600 underline hover:underline hover:scale-105 transition duration-200"> here</a>.
           <br /><br />
           Or enjoy our outstanding customer service. vM2M is the only totally online IoT management portal but we recognise that for some people, talking directly to one of our IoT specialists is preferable.
           <br /><br />
           With a team of Fidelity’s experts on hand to help you get started on your IoT journey  and answer any questions you may have you can rest assured that we’ll help you get started with vM2M and our leading IoT connectivity technology.

                    </p>
                </div>
                <div className="md:w-1/2 md:flex md:items-center">
                    <img src="/images/contact.jpg" alt="Description" className="w-full h-auto md:h-full object-cover" />
                </div>
            </section>
            <section className="bg-gray-100 py-10">
            <h2 className="text-4xl font-bold text-center text-gray-500 mb-8">
                IoT SIMs from Fidelity Group with vM2M<br /> – Data with a difference
            </h2>
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                {/* Column 1 */}
                <div className="flex items-start">
                    <FontAwesomeIcon icon={faCloud} className="text-red-600 text-md mr-4 mt-2" />
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-500">24/7 Online Quoting</h1>
                        <p className="text-gray-500">
                        You’ve selected your idea IoT SIM options and now you just want to know the cost? No problem, vM2M provides immediate pricing on screen – whenever you need. Get started right away.
                        </p>
                    </div>
                </div>
                {/* Column 2 */}
                <div className="flex items-start">
                    <FontAwesomeIcon icon={faNetworkWired} className="text-red-600 text-md mr-4 mt-2" />
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-500">
                        Outstanding customer support</h3>
                        <p className="text-gray-500">
                        vM2M allows you to do everything online but there are real people behind our IoT solutions. If you need to talk to one of our experts you can be sure that you can pick up the phone and speak to one of them 24/7!
                        </p>
                    </div>
                </div>
                {/* Column 3 */}
                <div className="flex items-start">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-red-600 text-md mr-4 mt-2" />
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-500">
                        24/7 Online Ordering</h3>
                        <p className="text-gray-500">
                        A few clicks on the keyboard and your IoT SIMs will be on the way. Your order will be processed and shipped by Fidelity Group’s own customer operations team.
                        </p>
                    </div>
                </div>
                {/* Column 4 */}
                <div className="flex items-start">
                    <FontAwesomeIcon icon={faUsers} className="text-red-600 text-md mr-4 mt-2" />
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-500">Choose your ideal IoT SIM solution</h3>
                        <p className="text-gray-500">
                        We won’t tell you what to order or which data provider to use – the choice is entirely your own. However, if you’d like assistance, were always here to help.
                        </p>
                    </div>
                </div>
                {/* Column 5 */}
                <div className="flex items-start">
                    <FontAwesomeIcon icon={faClipboardList} className="text-red-600 text-md mr-4 mt-2" />
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-500">
                        24/7 Online Management</h3>
                        <p className="text-gray-500">
                        Do you need to order more SIMs? Do you want to check data usage, check for connectivity issues and more? No problem. vM2M will provide you with the ability to do that anytime, anywhere.
                        </p>
                    </div>
                </div>
                {/* Column 6 */}
                <div className="flex items-start">
                    <FontAwesomeIcon icon={faMobileAlt} className="text-red-600 text-md mr-4 mt-2" />
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-500">
                        Secure SIMs</h3>
                        <p className="text-gray-500">
                        Your data is as important to us as it is to you and in today’s IoT environment security threats can be impact everything from your assets and IPR to data and privacy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
    <div className="md:w-1/3 md:flex md:items-center">
        <img src="/images/contact.jpg" alt="Description" className="w-full h-auto object-cover" />
    </div>
    <div className="md:w-2/3 md:ml-6"> {/* Add margin-left for spacing */}
        <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-500">We’re completely </span>
            <span className="text-red-500">independent</span>
            <span className="text-gray-500">...</span>
        </h2>
        <p className="text-lg text-gray-700">
            There are a huge range of IoT solutions available to you, from a wide range of suppliers. Find the ideal solution for you and your business by using our vM2M platform. Just log in, select the SIM specification of your choice and you’ll get an instant quote. Our independence means that we always ensure that you make the best possible choice.
            <br /><br />
            At Fidelity Group, our trusted network provides you with the peace of mind that you will always be making the best choice for you and your business.
        </p>
    </div>
</section>

<section className="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
   
    <div className="md:w-2/3 md:ml-6"> {/* Add margin-left for spacing */}
        <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-500">…trusted in telecoms for over </span>
            <span className="text-red-500">40</span>
            <span className="text-gray-500"> years</span>
        </h2>
        <p className="text-lg text-gray-700">
        IoT may be relatively new to the telecoms marketplace but we’ve been here much longer than that.
            <br /><br />
            With over 40 years of telecoms experience and success, working closely with some of the UK’s leading companies to supporting tens of thousands of end users, Fidelity Group’s network expertise is trusted by businesses everywhere.
            <br /><br />
            Your decision to work with us will not only provide you with the very best IoT solution but also give you access to a wide range of other outstanding telecoms solutions to help your business.
        </p>
    </div>
    <div className="md:w-1/3 md:flex md:items-center">
        <img src="/images/contact.jpg" alt="Description" className="w-full h-auto object-cover" />
    </div>
</section>

<Testimonials />
{/* New Section with Gray Background */}
<div className="py-16 bg-gray-200">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    <span className="text-gray-600">The future is now and</span>
                    <span className="text-red-600"> IoT is changing</span>
                    <span className="text-gray-600">how business is done</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer text-center">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faLightbulb} className="text-red-600 text-6xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">IoT connectivity</h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        Our multi-network SIM cards provide optimised network coverage, ensuring you can connect to anything, anywhere, at any time.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer text-center">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faCogs} className="text-red-600 text-6xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">Aggregated Data</h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        Our SIMs can share pooled data allowances across your IoT SIM estate, helping to eliminate unwelcome data overage charges.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer text-center">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faShieldAlt} className="text-red-600 text-6xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">Partner Programme</h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        Benefit from a compelling margin share by reselling market-disrupting, customer centric IoT connectivity.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer text-center">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faUsers} className="text-red-600 text-6xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">vM2M IoT Platform
                        </h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        In simple terms we’ve made IoT as easy as; Quote – Order – Manage - 24/7
                        </p>
                    </div>
                    
                </div>


            </div>
        </div>
<ContactUs />
            <Footer />
        </div>
    );
};

export default IoT;
