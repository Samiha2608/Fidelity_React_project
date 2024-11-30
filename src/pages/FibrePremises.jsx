import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCogs, faShieldAlt, faUsers, faChevronDown, faCheck  } from '@fortawesome/free-solid-svg-icons';
const FibrePremises = () => {
    const [visibleSection, setVisibleSection] = useState(null);

    const handleSectionToggle = (section) => {
        setVisibleSection(visibleSection === section ? null : section);
    };


    return (
      <div>
      <Header /> {/* Import the Header component */}

      <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/home.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white p-8">
              <h1 className="text-5xl font-bold mb-4 text-white">
              
FTTP: Fibre to the Premises, super fast business broadband
              </h1>
              <h1 className="text-8xl font-bold mb-4 text-white">
              starting from <br /> £32/month
              </h1>
              <p>FTTP helps improve productivity with superior bandwidth, and is available in a variety of speeds.</p>
              <div className="flex space-x-4 mt-4">
              <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-900 hover:scale-105">
                      Speak with an Expert
                  </button>
                  </Link>
                  <button className="bg-white text-red-500 font-semibold py-4 px-16 rounded transition duration-300 ease-in-out transform hover:bg-red-500 hover:text-white hover:scale-105">
                    Call Us
                  </button>
              </div>
          </div>
      </div>
      <section className="py-10">
                {/* Section Heading */}
                <div className="text-center mb-14">
                    <p className="text-lg font-bold text-gray-400">
                
FTTP – Fibre to the Premises – services in the UK.
                    </p>
                    <h2 className="text-4xl font-bold mt-2 text-gray-600">
                        <span className="text-gray-500 text-center">Experience superior business fibre broadband with our FTTP internet connection, providing a fast data connectivity internet speed.</span>
                      
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col md:col-span-2 ml-10">
                        <div className="flex items-center mb-4 font-bold">
                            <div className="h-24 w-2 bg-blue-900 mr-4"></div> {/* Vertical Blue Line */}
                            <p className="text-gray-800 font-bold text-2xl">
                            <span className="text-gray-600">FTTP: Highly-reliable, secure and </span>
                                <span className="text-red-500"> fast data connectivity. </span><span className="text-gray-600">Internet speeds up to 1Gbps.</span>
                            </p>
                        </div>
                        
                   
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col md:col-span-3">
 
    <p className="text-gray-500 mb-4 text-lg">
    Our market leading FTTP business broadband solutions provide an unparalleled level of reliability.<br />Elevate your business’ connectivity with Fidelity Group, choosing from the fastest and most reliable FTTP (Fibre to the Premises) broadband deals from the best internet providers in your area.

<br /><br />Get in touch to discover more and experience the unparalleled advantages of FTTP internet.
    </p>
    <div className="self-start"> {/* Align button to the start of the column */}
    <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-14 rounded transition duration-300 ease-in-out hover:bg-blue-900">
            Get a quote
        </button>
        </Link>
    </div>
</div>

                </div>
            </section>
            <div className="py-16 bg-gray-200">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    <span className="text-gray-600">Why Fidelity for your</span>
                    <span className="text-red-600">  FTTP connection</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faLightbulb} className="text-red-600 text-3xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">High capacity and flexible connectivity</h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        FTTP service delivers up to 1Gbps dedicated bandwidth. Not only is it fast, but also flexible, as bandwidth can be quickly upgraded when needed.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faCogs} className="text-red-600 text-3xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">Dedicated and uncontended broadband</h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        Experience lightning-fast speeds with our dedicated and uncontended FTTP broadband. Enjoy high-quality internet speeds, regardless of your online data demands.

                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faShieldAlt} className="text-red-600 text-3xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">Highly reliable connections
                        </h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        Boost your critical business applications with our superfast FTTP broadband, offering a remarkable 99.9% coverage availability.


                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faUsers} className="text-red-600 text-3xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">Maximise productivity
                        </h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        Provide employees with quick and reliable access to the critical files and applications they need so that your business can perform at optimum levels of efficiency, thanks to FTTP connectivity.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faUsers} className="text-red-600 text-3xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">Award-winning 24/7/365 business support
                        </h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        Our award-winning business support is available 24/7/365, providing you with round-the-clock assistance, no matter where you are.
                        </p>
                    </div>
                    
                </div>

            </div>
        </div>
        <section className="py-10">
            {/* Additional Text Section */}

            {/* Tabs Section */}
            <div className="flex justify-center space-x-20 mt-8">
           
            <button 
    onClick={() => handleSectionToggle('sogeaBroadband')}
    className={`bg-white border border-gray-300 text-gray-800 text-lg font-semibold py-2 px-20 rounded transition duration-300 ease-in-out hover:text-red-500 hover:border-red-600 ${
        visibleSection === 'sogeaBroadband' ? 'bg-red-600 text-red-600 border-red-600' : 'hover:bg-white hover:text-red-600 hover:border-red-600'
    }`}
>What is Fibre to the Premises (FTTP)?

</button>
<button 
    onClick={() => handleSectionToggle('whySogea')}
    className={`bg-white border border-gray-300 text-gray-800 text-lg font-semibold py-2 px-20 rounded transition duration-300 ease-in-out ${
        visibleSection === 'whySogea' ? 'bg-red-600 text-red-600 border-red-600' : 'hover:bg-white hover:text-red-600 hover:border-red-600'
    }`}
>
Why choose FTTP?
</button>
<button 
    onClick={() => handleSectionToggle('needSogea')}
    className={`bg-white border border-gray-300 text-gray-800 text-lg font-semibold py-2 px-20 rounded transition duration-300 ease-in-out ${
        visibleSection === 'needSogea' ? 'bg-red-600 text-red-600 border-red-600' : 'hover:bg-white hover:text-red-600 hover:border-red-600'
    }`}
>
FTTP vs. FTTC?
</button>

            </div>

     

            {/* SoGEA Broadband Section */}
            {visibleSection === 'sogeaBroadband' && (
                <div className="mt-10 flex transition-opacity duration-500">
                    <div className="w-1/2 pr-4"> {/* Added padding-right to create space */}
                        <img src="/images/mission.jpg" alt="SoGEA Broadband" className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="w-1/2 p-4">
                    
                        <p className="text-gray-500 text-xl mb-4 leading-relaxed">
                        FTTP stands for fibre to the premises, and is optical fibre broadband that is wired directly to the premises, instead of a broadband cabinet that services the local area.
<br></br> <br />
FTTP uses fibre optic cables, making it the fastest broadband type with speeds up to 1GBps (1000Mbps), and providing businesses with one of the very best business broadband solutions on the market.
                        </p>
                   
                    </div>
                </div>
            )}

            {/* Why SoGEA Created Section */}
            {visibleSection === 'whySogea' && (
                <div className="mt-10 flex transition-opacity duration-500">
                    <div className="w-1/2 pr-4"> {/* Added padding-right to create space */}
                        <img src="/images/partner.jpg" alt="Why SoGEA was created" className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="w-1/2 p-4">
                        
                        <p className="text-gray-500 text-xl mb-4 leading-relaxed">
                        Connect to an extensive next generation network and receive dedicated, low latency and high availability services, with full resilience, supported by robust, end-to-end SLAs that include 24/7 UK-based support. FTTP services can help reduce the cost of private networking while improving the quality of service and support. We offer scalability and flexibility unavailable from legacy services. And we deliver dedicated, secure, uncontended business-class connections for all your voice and data traffic
                        </p>
                  
                    </div>
                </div>
            )}

            {/* Why You Need SoGEA Section */}
            {visibleSection === 'needSogea' && (
                <div className="mt-10 flex transition-opacity duration-500">
                       <div className="w-1/2 p-4">
                     
                        <p className="text-gray-500 text-xl mb-4 leading-relaxed">
                        FTTP, uses all fibre optic cables to the business premises. FTTC, fibre to the cabinet, uses fibre optic cables to a broadband cabinet in the business’ area, but then connects to the actual premises by older, non-optical, cables. Meaning that while FTTC is good, FTTP is better.
                        </p>
                   
                    </div>
                    <div className="w-1/2 p-4">
                   
                        <p className="text-gray-500 text-xl mb-4 leading-relaxed">
                        With FTTP there is no “up to” bandwidth. The bandwidth that you buy is the bandwidth that you will obtain over your connection.

                        </p>
                   
                    </div>
                </div>
            )}
        </section>

<div className="flex flex-col lg:flex-row items-start justify-between p-8 bg-gray-200">
    <div className="flex-1 mb-8 lg:mb-0">
        <h2 className="text-4xl my-4 font-bold">
            <span className="text-gray-600"> Connect to our latest</span>
            <span className="text-red-500"> business Internet</span>
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

<Testimonials />
<ContactUs />
      <Footer />
        </div>
    );
};

export default FibrePremises;
