
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';

const VM2M = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const handleSectionToggle = (section) => {
      setVisibleSection(visibleSection === section ? null : section);
  };
    return (
        <div>
               <Header />
      <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/home.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          
          <div className="relative z-10 flex flex-col items-start justify-center min-h-screen text-left p-8">
       
              <h1 className="text-6xl font-bold mb-4">
              Global IoT Solutions <br />
              with a difference
              </h1>
              <p className="text-2xl font-bold mb-4">IoT now powered by our latest platform – quote, order and <br /> manage your IoT SIM estate entirely online, 24/7 – it <br />couldn’t be easier!</p>
              <div className="flex space-x-4 mt-4">
                  <button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-900 hover:scale-105">
                      Request an Online Demo
                  </button>
              </div>
          </div>
      </div>
      <section className="flex flex-col items-center p-10 bg-white">
    {/* Centered Heading */}
    <h1 className="text-6xl font-bold text-center mb-10">It's as Simple as <span className="text-red-500"> 1, 2, 3</span></h1>
    
    {/* Main Content Section */}
    <div className="flex flex-col md:flex-row items-center justify-between w-full relative">
        {/* Left Side - Text Content */}
        <div className="md:w-2/3 md:ml-6 relative">
            {/* Large "1" Background */}
            <div className="absolute top-0 left-0 transform -translate-y-32 translate-x-[-32px] text-[145px] text-red-600 z-0">
                1
            </div>

            <h2 className="text-4xl font-bold mb-4 relative z-10">
                <span className="relative"> {/* This wraps "Get" to overlap with "1" */}
                    <span className="inline-block transform translate-x-[0px]">G</span>
                    et your quote in minutes
                </span>
            </h2>

            <p className="text-lg text-gray-700 relative z-10">
                Getting a quote for your IoT SIM cards is quick and simple – and can be completed at a time that suits you. 
                In fact, you can order from us 24 hours a day, 7 days a week thanks to our vM2M platform.
                <br /><br />
                On our easy-to-use and intuitive platform, you can choose from a wide range of options, allowing you to fine-tune your 
                preferences to ensure you receive an optimised connectivity solution.
                <br /><br />
                Choose from geographic coverage requirements, network technologies, data tiering, data aggregation, and a wide range of 
                additional configurable parameters. Whatever you need, we can help.
            </p>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/3 md:flex md:items-center mt-10 md:mt-0">
            <img src="/images/contact.jpg" alt="Description" className="w-full h-auto object-cover" />
        </div>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-between w-full relative mt-20">
             {/* Right Side - Image */}
             <div className="md:w-1/3 md:flex md:items-center mt-10 md:mt-0">
            <img src="/images/contact.jpg" alt="Description" className="w-full h-auto object-cover" />
        </div>
        {/* Left Side - Text Content */}
        <div className="md:w-2/3 md:ml-6 relative">
            {/* Large "1" Background */}
            <div className="absolute top-0 left-0 transform -translate-y-32 translate-x-[-8px] text-[145px] text-red-600 z-0">
                2
            </div>

            <h2 className="text-4xl font-bold mb-4 relative z-10">
                <span className="relative"> {/* This wraps "Get" to overlap with "1" */}
                    <span className="inline-block transform translate-x-[0px]">S</span>
                    imple, one click ordering
                </span>
            </h2>

            <p className="text-lg text-gray-700 relative z-10">
            Once you’ve chosen your perfect IoT solution from Fidelity Group’s vM2M platform you can place your order, with a simple click. You do not need to phone anyone or wait for quote confirmation. The price you see is the price you pay.
                <br /><br />
                And this includes your own, dedicated management platform.
                <br /><br />
                With your order placed, you will have full visibility of the delivery process, allowing you schedule our IoT product delivery around your business requirements. Your order will be processed and shipped by Fidelity Group’s own Customer Operations team.
            </p>
        </div>

 
    </div>
    <div className="flex flex-col md:flex-row items-center justify-between w-full relative mt-20">
     
        {/* Left Side - Text Content */}
        <div className="md:w-2/3 md:ml-6 relative">
            {/* Large "1" Background */}
            <div className="absolute top-0 left-0 transform -translate-y-32 translate-x-[-8px] text-[145px] text-red-600 z-0">
                3
            </div>

            <h2 className="text-4xl font-bold mb-4 relative z-10">
                <span className="relative"> {/* This wraps "Get" to overlap with "1" */}
                    <span className="inline-block transform translate-x-[0px]">24/7</span>
                    Management of your IoT estate
                </span>
            </h2>

            <p className="text-lg text-gray-700 relative z-10">
            With Fidelity’s vM2M platform, management of your IoT SIM estate could not be easier.
                <br /><br />
                Incorporating a comprehensive suite of tools designed for visualising IoT SIM estates, vM2M will allow you to view, at a glance, your connectivity landscape. This includes everything from SIM statuses and data consumption trends to usage and distribution of SIM packages.
                <br /><br />
                With these data-driven, decision-making capabilities, our platform also facilitates forecasting and optimisation of pools for enhanced IoT management.
                <br /><br />Not only will you have full management access to your data reporting but you will also be able to make changes to your IoT products and order new products directly through your dashboard. Managing your IoT SIM estate could not be easier.
            </p>
        </div>
        {/* Right Side - Image */}
        <div className="md:w-1/3 md:flex md:items-center mt-10 md:mt-0">
            <img src="/images/contact.jpg" alt="Description" className="w-full h-auto object-cover" />
        </div>
 
    </div>
</section>
<section className="py-10">
            {/* Additional Text Section */}
            <div className="text-center mt-10">
                <p className="text-lg font-bold text-gray-400">Discover Fidelity Group</p>
                <h2 className="text-3xl font-bold mt-2">
                    <span className="text-gray-800">We’ve been thriving </span>
                    <span className="text-red-600">since 2008.</span>
                </h2>
            </div>

            {/* Tabs Section */}
            <div className="flex justify-center space-x-20 mt-8">
                <button 
                    onClick={() => handleSectionToggle('Quote')}
                    className={`bg-gray-800 text-white text-lg font-semibold py-4 px-20 rounded transition duration-300 ease-in-out hover:bg-red-600 ${
                        visibleSection === 'sogeaBroadband' ? 'bg-red-600' : ''
                    }`}
                >Quote
                </button>
                <button 
                    onClick={() => handleSectionToggle('Order')}
                    className={`bg-gray-800 text-white text-lg font-semibold py-2 px-20 rounded transition duration-300 ease-in-out hover:bg-red-600 ${
                        visibleSection === 'whySogea' ? 'bg-red-600' : ''
                    }`}
                >
                    Order
                </button>
                <button 
                    onClick={() => handleSectionToggle('Manage')}
                    className={`bg-gray-800 text-white text-lg font-semibold py-2 px-20 rounded transition duration-300 ease-in-out hover:bg-red-600 ${
                        visibleSection === 'needSogea' ? 'bg-red-600' : ''
                    }`}
                >
                   Manage

                </button>
            </div>

            {/* Sections Content */}
            {visibleSection && (
                <div className="mt-10 border border-gray-300 bg-white p-8 rounded-lg w-full">
                    <div className="flex">
                        <div className="w-2/3">
                            <h3 className="text-red-600 text-3xl font-bold mb-4">
                                {visibleSection === 'Quote' && 'Streamline IoT data package design, review, modification, and comparison effortlessly.'}
                                {visibleSection === 'Order' && 'Order anytime, with full visibility into progress. SIM orders managed by Fidelity Group; automated provisioning for customer-created IoT data orders'}
                                {visibleSection === 'Manage' && 'Cultivate deep understanding, invaluable insight, and complete control over your IoT connectivity with our comprehensive solution.'}
                            </h3>
                            <p className="text-gray-500 text-xl mb-4 leading-relaxed">
                                {visibleSection === 'Quote' && 'We have leveraged our relationships with the carriers to obtain competitive pricing and simplified the complex matrix of options, such as contract lengths, data limits, coverage zones, available networks, and present the best available options and prices in one simple to understand pricing model.'}
                                {visibleSection === 'Order' && 'No need to talk to an IoT sales specialist, no need to place the order during business hours, and no worries or concerns about knowing exactly what has been ordered.'}
                                {visibleSection === 'Manage' && 'The data and operational status of each individual SIM can be viewed in an editable list format. You can also bespoke your SIM management through group visualisation, giving you the ability to group, rename, and arrange to your specific requirements.'}
                            </p>
                            <ul className="flex flex-wrap list-none text-gray-500 text-xl">
                                <li className="w-1/2 flex items-center mb-4">
                                    <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2" />
                                    Term options
                                </li>
                                <li className="w-1/2 flex items-center mb-4">
                                    <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2" />
                                    IP options​
                                </li>
                                <li className="w-1/2 flex items-center mb-4">
                                    <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2" />
                                    Data requirements
                                </li>
                                <li className="w-1/2 flex items-center mb-4">
                                    <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2" />
                                    Multi & Single networks
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/3 flex flex-col items-start space-y-4 text-xl">
                            <div className="flex items-center bg-gray-200 text-black p-4 w-full">
                                <FontAwesomeIcon icon={faArrowRight} className="text-red-600 mr-2" />
                                <span>
                                Customisation</span>
                            </div>
                            <div className="flex items-center bg-gray-200 text-black p-4 w-full">
                                <FontAwesomeIcon icon={faArrowRight} className="text-red-600 mr-2" />
                                <span>
                                Pricing on Demand</span>
                            </div>
                            <div className="flex items-center bg-gray-200 text-black p-4 w-full">
                                <FontAwesomeIcon icon={faArrowRight} className="text-red-600 mr-2" />
                                <span>Supplier Selection</span>
                            </div>
                            <button className="bg-red-600 text-white text-lg font-semibold py-4 px-8 rounded mt-8 transition duration-300 ease-in-out hover:bg-blue-900">
                                Request an online demo
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
        <section className="flex flex-col md:flex-row items-center justify-between px-10 bg-gray-100">
   
    <div className="md:w-2/3 md:ml-6"> {/* Add margin-left for spacing */}
        <h2 className="text-4xl font-bold mb-4">
            <span>Find out more</span>
          
        </h2>
        <p className="text-lg text-gray-700">
        Simply call 0800 840 6800 to speak directly with one of our senior IoT specialists.
            <br /><br />
            Alternatively, why not book a free, no-obligation demonstration of our IoT platform? You’ll see for yourself how easy it is to use and have the opportunity to ask any questions. To book your demonstration please call us on the number above or fill in the form below.
          
        </p>
    </div>
    <div className="md:w-1/3 md:flex md:items-center">
        <img src="/images/contact.jpg" alt="Description" className="w-full h-auto object-cover" />
    </div>
</section>

<div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="w-full px-8 bg-gray-100 shadow-md">
     

        <form>
            {/* First Row - Name and Company */}
            <div className="relative z-0 w-full mb-6 group">
                <div className="relative z-0 w-full group">
                    <input type="text" name="name" id="name" 
                        className="block py-3 px-4 w-full text-lg text-gray-900 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-red-600" 
                        placeholder="Name*" required />
                </div>
          
            </div>

            {/* Second Row - Contact Number and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="relative z-0 w-full group">
                    <input type="tel" name="contact_number" id="contact_number" 
                        className="block py-3 px-4 w-full text-lg text-gray-900 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-red-600" 
                        placeholder="Phone" required />
                </div>
                <div className="relative z-0 w-full group">
                    <input type="email" name="email" id="email" 
                        className="block py-3 px-4 w-full text-lg text-gray-900 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-red-600" 
                        placeholder="Email" required />
                </div>
            </div>

            {/* Third Row - Message */}
            <div className="relative z-0 w-full mb-6 group">
                <textarea name="message" id="message" 
                    className="block py-3 px-4 w-full text-lg text-gray-900 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-red-600 h-40" 
                    placeholder="Message" required></textarea>
            </div>

          

            {/* Submit Button */}
            <button type="submit" 
                className="text-white bg-red-600 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg w-full py-3 text-center">
                Submit
            </button>
        </form>
    </div>
</div>
      <Footer />
        </div>
    );
};

export default VM2M;
