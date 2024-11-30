import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCogs, faShieldAlt, faUsers, faChevronDown, faCheck  } from '@fortawesome/free-solid-svg-icons';
const LeasedLineFibre = () => {
    const [visibleSection, setVisibleSection] = useState(null);

    const handleSectionToggle = (section) => {
        setVisibleSection(visibleSection === section ? null : section);
    };

    return (
      <div>
      <Header /> {/* Import the Header component */}

      <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/partner.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white p-8">
              <h1 className="text-5xl font-bold mb-4 text-white">
           
Leased Line Broadband: Unlock super fast speeds
              </h1>
              <h1 className="text-8xl font-bold mb-4 text-white">
              Starting from £160 for
              </h1>
              <h1 className="text-8xl font-bold mb-4 text-white">
              100/100
              </h1>
              <p>Uncapped, uncontended, and symmetrical leased line broadband fibre for your business, with wide range of speed options available.</p>
              <div className="flex space-x-4 mt-4">
              <Link to="/quote"> <button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-900 hover:scale-105">
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
                  
services in the UK
                    </p>
                    <h2 className="text-4xl font-bold mt-2 text-gray-600">
                        <span className="text-gray-500">Leased line broadband is the perfect solution for businesses demanding </span>
                        <span className="text-red-500">high-quality, high-speed, and reliable internet connectivity.</span>
   
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col md:col-span-2 ml-10">
                        <div className="flex items-center mb-4 font-bold">
                            <div className="h-24 w-2 bg-blue-900 mr-4"></div> {/* Vertical Blue Line */}
                            <p className="text-gray-800 font-bold text-2xl">
                         <span className="text-gray-600">Leased line broadband is the most reliable internet connection for businesses that need the very best broadband option.</span>
                            </p>
                        </div>
                        
                   
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col md:col-span-3">
 
    <p className="text-gray-500 mb-4 text-lg">
    Our <span className="text-red-500">eased Line Broadband Connection</span> services are designed to provide optimal connectivity with speeds of up to 1Gbps, guaranteeing a seamless internet experience. <br /> Fidelity Group’s ethernet services are the perfect solution for accessing cloud-based applications, voice and collaboration tools, or fast internet access.<br /><br />With IP telephony, video and conferencing services, and instant messaging capabilities, our leased line broadband solutions for business, make us the perfect end-to-end supplier for your connectivity and communication requirements. <br /><br />We understand businesses have unique requirements, and our fibre leased line broadband solutions are customisable to fit specific needs and budgets.
    </p>
    <div className="self-start"> {/* Align button to the start of the column */}
    <Link to="/quote"> <button className="bg-red-600 text-white font-semibold py-4 px-14 rounded transition duration-300 ease-in-out hover:bg-blue-900">
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
                    <span className="text-red-600"> Leased Line Broadband?</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faLightbulb} className="text-red-600 text-3xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">Dedicated and uncontended bandwidth</h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        Enjoy fast speeds, no matter what you're doing. Because you don't share your line with anyone else, there's no variable quality – and that means speeds of up to 10Gbps, all the time.

                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faCogs} className="text-red-600 text-3xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">Highly reliable connections
                        </h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        With availability starting at 99.9% our services are ideal for your business-critical applications.

                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faShieldAlt} className="text-red-600 text-3xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">Award-winning 24/7/365 business support</h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        Whatever the time, wherever you are, you will be able to contact our support desk for any assistance you require.

                        </p>
                    </div>

             
                    
                </div>

            </div>
        </div>
        <section className="py-10">
     
         

            {/* Tabs Section */}
            <div className="flex justify-center space-x-20 mt-8">
           
            <button 
    onClick={() => handleSectionToggle('sogeaBroadband')}
    className={`bg-white border border-gray-300 text-gray-800 text-lg font-semibold py-2 px-20 rounded transition duration-300 ease-in-out hover:text-red-500 hover:border-red-600 ${
        visibleSection === 'sogeaBroadband' ? 'bg-red-600 text-red-600 border-red-600' : 'hover:bg-white hover:text-red-600 hover:border-red-600'
    }`}
>
What is a leased line broadband?
</button>
<button 
    onClick={() => handleSectionToggle('whySogea')}
    className={`bg-white border border-gray-300 text-gray-800 text-lg font-semibold py-2 px-20 rounded transition duration-300 ease-in-out ${
        visibleSection === 'whySogea' ? 'bg-red-600 text-red-600 border-red-600' : 'hover:bg-white hover:text-red-600 hover:border-red-600'
    }`}
>
How can a leased line broadband help your business?
</button>


            </div>

     

            {/* SoGEA Broadband Section */}
            {visibleSection === 'sogeaBroadband' && (
                <div className="mt-10 flex transition-opacity duration-500">
                 
                    <div className="w-1/2 p-4">
                   
                        <p className="text-gray-500 text-xl mb-4 leading-relaxed">
                        A leased line broadband is a dedicated fibre connection between two points rented from your ISP. <br />
                        This means dedicated internet access, so no one else shares your connection. It’s also symmetrical, so your business will receive equal upload and download speeds.
                        </p>
                  
                    </div>
                    <div className="w-1/2 pr-4"> {/* Added padding-right to create space */}
                        <img src="/images/mission.jpg" alt="SoGEA Broadband" className="w-full h-auto rounded-lg" />
                    </div>
                </div>
            )}

 

            {/* Why You Need SoGEA Section */}
            {visibleSection === 'whySogea' && (
                <div className="mt-10 flex transition-opacity duration-500">
                    <div className="w-1/2 pr-4"> {/* Added padding-right to create space */}
                        <img src="/images/winner2.jpg" alt="Why you need SoGEA" className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="w-1/2 p-4">
                        <h3 className="text-3xl font-bold mb-4">Why do you need SoGEA?</h3>
                        <p className="text-gray-500 text-xl mb-4 leading-relaxed">
                        If your business is reliant on a good connection to communicate with customers or stakeholders, you can’t afford for it to let you down.
With leased line broadband, your business will get a more consistent connection, faster repair times and less downtime.
<br /><br />
Plus, with symmetrical speeds up to 10Gbps, leased line broadband will future-proof your business and keep you ahead of the competition.
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

export default LeasedLineFibre;
