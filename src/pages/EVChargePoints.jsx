import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCogs, faShieldAlt, faUsers, faArrowRight } from '@fortawesome/free-solid-svg-icons';
const EVChargePoints = () => {
      // State for counting numbers
      const [grants, setGrants] = useState(0);
      const [vehicles, setVehicles] = useState(0);
      const [businesses, setBusinesses] = useState(0);
      const [registrations, setRegistrations] = useState(0);
  
      // Function to animate the counting
      const animateCount = (target, setter) => {
          let count = 0;
          const increment = Math.ceil(target / 100); // Adjust for speed of counting
          const interval = setInterval(() => {
              count += increment;
              if (count >= target) {
                  clearInterval(interval);
                  setter(target); // Set final value
              } else {
                  setter(count);
              }
          }, 50); // Adjust the delay for speed
      };
  
      useEffect(() => {
          animateCount(14000, setGrants);
          animateCount(9000000, setVehicles);
          animateCount(223000, setBusinesses);
          animateCount(75, setRegistrations);
      }, []);
    return (
      <div>
      <Header /> {/* Import the Header component */}

      <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/partner.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white p-8">
              <h1 className="text-5xl font-bold mb-4 text-white">
                 
*Get £350 support for every socket installed.
              </h1>
              <h1 className="text-9xl font-bold mb-4 text-white">
              EV Charging Stations for Business
              </h1>
              <p className="text-xl font-bold mb-4 text-white">
              Electric vehicles are happening. Your workforce wants them, your customers would like them. Support them with EV charging stations at your business.</p>
              <div className="flex space-x-4 mt-4">
              <Link to="/quotes"> <button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-900 hover:scale-105">
                      Get an EV Quote
                  </button></Link>
                  <Link to="/quote"><button className="bg-white text-red-400 font-semibold py-4 px-16 rounded transition duration-300 ease-in-out transform hover:bg-red-600 hover:text-white hover:scale-105">
               Speak with an Expert
                  </button>
                  </Link>
              </div>
          </div>
      </div>
      <div className="flex flex-col items-center justify-center p-8 bg-gray-100 mt-8">
            <h2 className="text-lg font-bold text-gray-500 mb-4">EV Charging Stations in the UK.</h2>
            <h2 className="text-5xl font-bold text-center mb-16">
                <span className="text-gray-500">We work alongside handpicked experts to install </span>
                <span className="text-red-500">EV charging stations</span>
                <span className="text-gray-500"> on your premises.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl">
                {/* Count 1 */}
                <div className="flex flex-col items-center text-lg">
                    <h1 className="text-5xl font-bold text-red-600">£{grants}</h1>
                    <p className="text-blue-900 text-2xl text-center">potential government grants</p>
                </div>
                {/* Count 2 */}
                <div className="flex flex-col items-center text-lg">
                    <h1 className="text-5xl font-bold text-red-600">{vehicles.toLocaleString()}</h1>
                    <p className="text-blue-900 text-2xl text-center">electric vehicles predicted to be on the road by 2030</p>
                </div>
                {/* Count 3 */}
                <div className="flex flex-col items-center text-lg">
                    <h1 className="text-5xl font-bold text-red-600">{businesses.toLocaleString()}</h1>
                    <p className="text-blue-900 text-2xl text-center">businesses plan to introduce more EVs into their fleets</p>
                </div>
                {/* Count 4 */}
                <div className="flex flex-col items-center text-lg">
                    <h1 className="text-5xl font-bold text-red-600">{registrations}%</h1>
                    <p className="text-blue-900 text-2xl text-center">of new registrations completed by July 2019 – an increase of 6200% in just six years</p>
                </div>
            </div>
        </div>
        <section className="py-10">
            

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col md:col-span-2 ml-10">
                        <div className="flex items-center mb-4">
                            <div className="h-32 w-2 bg-blue-900 mr-4"></div> {/* Vertical Blue Line */}
                            <p className="font-bold text-3xl">
                           <span className="text-gray-500">From 2030 it will no longer ne possible to buy new cars and vans powered only by petrol or diesel.</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col md:col-span-3">
    <p className="text-gray-500 mb-4 text-lg">
    With access to Europe’s largest and most diverse range of products, you can charge all fully electric and hybrid vehicles – Fidelity has supplied and installed over 150,000 charge points at EV Charging Stations to date. You can also rely on support from one of the most comprehensive maintenance and warranty programmes in the industry.
    <br /><br />*To support the installation of EV points at your workplace the WCS government grant provides up to £350 per socket for a maximum of 40 sockets. That is up to £14,000!
    <br /><br />26% of all carbon emissions are generated from transport, the largest source in the UK. Some EV solutions allow you to report on expenditure, energy and CO2 savings.
    </p>
    <div className="self-start"> {/* Align button to the start of the column */}
    <Link to="/quotes"><button className="bg-red-600 text-white font-semibold py-4 px-14 rounded transition duration-300 ease-in-out hover:bg-blue-900">
            Find Out More
        </button></Link>
    </div>
</div>

                </div>
            </section>
            <div className="py-16 bg-white">
    <div className="container mx-auto px-4">
       

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faLightbulb} className="text-red-600 text-5xl" />
                </div>
                <h3 className="text-gray-600 font-semibold text-2xl">Support, Service and Guidance</h3>
                <p className="text-gray-600 mt-2 flex-grow">
                Benefit from one of the most comprehensive support, maintenance and warranty programmes in the industry.

                </p>
             
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-red-600 text-3xl" />
                </div>
                <h3 className="text-gray-600 font-semibold text-2xl">EV Charging</h3>
                <p className="text-gray-600 mt-2 flex-grow">
                Provide support for the government backed Workplace Charging Scheme (WCS) that gives your business up to £500 per socket to install EV charging points at workplaces.
                </p>
              
            </div>

            {/* Card 3 */}
     
            <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faCogs} className="text-red-600 text-5xl" />
                </div>
                <h3 className="text-gray-600 font-semibold text-2xl">Custom Designed Solutions</h3>
                <p className="text-gray-600 mt-2 flex-grow">
                Customise a wide range of charging points to suit your business requirements, specifications and branding, enabling you to provide the best solution for you, your employees or your customers.
                </p>
               
            </div>
         
        </div>

     

    </div>
</div>
<div className="py-16 bg-gray-200">
    <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-gray-600">The</span>
            <span className="text-red-600"> benefits</span>
            <span className="text-gray-600"> of EV Charging Station</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faLightbulb} className="text-red-600 text-5xl" />
                </div>
                <h3 className="text-gray-600 font-semibold text-2xl">Government Grants</h3>
                <p className="text-gray-600 mt-2 flex-grow">
                Government grants are available to subsidise installation costs.
                </p>
          
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faCogs} className="text-red-600 text-5xl" />
                </div>
                <h3 className="text-gray-600 font-semibold text-2xl">Build Your Reputation
                </h3>
                <p className="text-gray-600 mt-2 flex-grow">
                Build your brand reputation by adopting EVs and reducing emissions.

                </p>
       
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-red-600 text-5xl" />
                </div>
                <h3 className="text-gray-600 font-semibold text-2xl">Competitive</h3>
                <p className="text-gray-600 mt-2 flex-grow">
                Create a competitive advantage over other businesses who do not have charge points installed.

                </p>
              
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faUsers} className="text-red-600 text-5xl" />
                </div>
                <h3 className="text-gray-600 font-semibold text-2xl">All-round Satisfaction</h3>
                <p className="text-gray-600 mt-2 flex-grow">
                Improve customer and employee satisfaction whilst generating indirect profits for your business.

                </p>
                
            </div>
        </div>

     

    </div>
</div>
<div className="flex flex-col lg:flex-row items-start justify-between p-8 bg-white">
            <div className="flex-1 mb-8 lg:mb-0">
                <h2 className="text-4xl my-4 font-bold text-gray-500">
                We’ll search for the <span className="text-red-500">best EV Charging Station prices </span>, and support you through the process.
                   
                </h2>
            
            </div>
            <div className="flex-1 flex justify-end mt-16">
            <Link to="/contact"><button className="bg-red-600 text-white py-4 px-10 rounded-lg transition duration-300 transform hover:bg-blue-900 hover:scale-105">
                    Contact Us
                </button>
                </Link>
                <button className="bg-blue-900 text-white py-4 px-14 rounded-lg transition duration-300 transform hover:bg-blue-900 hover:scale-105 ml-6">
                    Call Us
                </button>
            </div>
        </div>
        <ContactUs />
        <Footer />
        </div>
    );
};

export default EVChargePoints;
