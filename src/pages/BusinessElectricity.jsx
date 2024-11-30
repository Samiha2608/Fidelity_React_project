import React from 'react';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCogs, faShieldAlt, faUsers, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const BusinessElectricity = () => {
    return (

            <div>
      <Header /> {/* Import the Header component */}

      <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/partner.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white p-8">
          
              <h1 className="text-4xl font-bold mb-4 text-white">
              Stop paying more for your
              </h1>
              <h1 className="text-8xl font-bold mb-4 text-white">
              Business Electricity.
              </h1>
              <p className="text-4xl font-bold mb-4 text-white">
              We will make the process of finding and switching tariffs painless.</p>
              <div className="flex space-x-4 mt-4">
              <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-900 hover:scale-105">
                      Speak with an Expert
                  </button></Link>
                  <button className="bg-white text-red-400 font-semibold py-4 px-16 rounded transition duration-300 ease-in-out transform hover:bg-red-600 hover:text-white hover:scale-105">
               Call Us
                  </button>
              </div>
          </div>
      </div>
      <section className="py-10">
                {/* Section Heading */}
                <div className="text-center mb-14">
                    <p className="text-xl font-bold text-gray-400 mb-5">

                    BUSINESS ELECTRICITY PROCUREMENT AND MANAGEMENT
                    </p>
                    <h2 className="text-4xl font-bold mt-2 text-gray-600 text-center">
                       
                        <span className="text-gray-500">We manage the whole process so you can focus on your business and customers instead of being tied up with electricity tariffs and paperwork.
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col md:col-span-2 ml-10">
                        <div className="flex items-center mb-4">
                            <div className="h-32 w-2 bg-blue-900 mr-4"></div> {/* Vertical Blue Line */}
                            <p className="font-bold text-3xl">
                            <span className="text-gray-500">We work with many </span>
                            <span className="text-red-600">trusted suppliers  </span><span className="text-gray-500"></span>to help find you the best business energy rates.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col md:col-span-3">
    <p className="text-gray-500 mb-4 text-lg">
    Working with a wide range of suppliers ensures we have access to the best market pricing available. Every supplier picked by Fidelity Group has been carefully selected by us based on their long-term financial viability, billing accuracy, ease to do business with and responsiveness to our customers. Rather than have dozens of unproven and untested business gas suppliers, we only let the very best partner with us. The cost of placing business with a financially unstable or unethical supplier can be catastrophic to your business, so let us guide you in this vital decision.
    </p>
    <div className="self-start"> {/* Align button to the start of the column */}
    <Link to="/quotes"><button className="bg-red-600 text-white font-semibold py-4 px-14 rounded transition duration-300 ease-in-out hover:bg-blue-900">
            Find Out More
        </button></Link>
    </div>
</div>

                </div>
            </section>
            <div className="py-16 bg-gray-200">
    <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-gray-600">How we can help your business</span>
         
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faLightbulb} className="text-red-600 text-5xl" />
                </div>
                <h3 className="text-gray-600 font-semibold text-2xl">Electricity Procurement</h3>
                <p className="text-gray-600 mt-2 flex-grow">
                Through our customer-focussed approach, we will work with you to review your Electricity usage and save you money on future contracts.


                </p>
              
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faCogs} className="text-red-600 text-5xl" />
                </div>
                <h3 className="text-gray-600 font-semibold text-2xl">Consultancy</h3>
                <p className="text-gray-600 mt-2 flex-grow">
                With our unique, customer-focused, consultancy approach we will support you from initial consultation, through the entire lifetime of an account.

                </p>
              
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-red-600 text-5xl" />
                </div>
                <h3 className="text-gray-600 font-semibold text-2xl">Half Hourly Meterage</h3>
                <p className="text-gray-600 mt-2 flex-grow">
                Consume less energy and secure cheaper rates with our half hourly meters.

                </p>
              
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faUsers} className="text-red-600 text-5xl" />
                </div>
                <h3 className="text-gray-600 font-semibold text-2xl">Metering</h3>
                <p className="text-gray-600 mt-2 flex-grow">
                Our team of experts will check on your energy meters to help you to calculate and reduce your usage.

                </p>
              
            </div>
            {/* card 5 */}
            <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faUsers} className="text-red-600 text-5xl" />
                </div>
                <h3 className="text-gray-600 font-semibold text-2xl">Smart Metering
                </h3>
                <p className="text-gray-600 mt-2 flex-grow">
                Automatically view your usage and help cut your energy bills with our smart metering.

                </p>
            
            </div>
        </div>

     

    </div>
</div>
<section className="py-10 mx-6">
    {/* Top Text and Heading */}
    <div className="flex justify-between items-center mb-10 px-6 md:px-10">
        <div>
            <p className="text-gray-600 font-bold">Let's get started</p>
            <h2 className="text-3xl font-bold mt-2">
                <span className="text-gray-600">Switching is as easy as </span>
                <span className="text-red-600">3 simple steps</span>
            </h2>
        </div>
        <div className="text-gray-600 text-3xl font-bold">steps</div>
    </div>

    {/* Cards Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-10">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer group">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-200 text-gray-800 font-bold text-xl transition duration-300 ease-in-out group-hover:bg-red-600 group-hover:text-white">
                1
            </div>
            <h3 className="text-gray-600 font-semibold text-xl mb-4 transition-colors duration-300 ease-in-out group-hover:text-red-600">
                01. Send us a bill
            </h3>
            <p className="text-gray-700">
                Using our smart technology, we will search the market on your behalf to find a tariff that best suits your business.
            </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer group">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-200 text-gray-800 font-bold text-xl transition duration-300 ease-in-out group-hover:bg-red-600 group-hover:text-white">
                2
            </div>
            <h3 className="text-gray-600 font-semibold text-xl mb-4 transition-colors duration-300 ease-in-out group-hover:text-red-600">
                02. Choose a tariff
            </h3>
            <p className="text-gray-700">
                We will send over a selection of the best available rates and help you choose the right tariff and contract length.
            </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer group">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-gray-200 text-gray-800 font-bold text-xl transition duration-300 ease-in-out group-hover:bg-red-600 group-hover:text-white">
                3
            </div>
            <h3 className="text-gray-600 font-semibold text-xl mb-4 transition-colors duration-300 ease-in-out group-hover:text-red-600">
                03. Leave the rest to us
            </h3>
            <p className="text-gray-700">
                Our energy experts will take care of everything, from supplier negotiations to managing your energy contracts.
            </p>
        </div>
    </div>
    <div className="text-center items-center mt-8"> {/* Align button to the start of the column */}
    <Link to="/quotes"><button className="bg-red-600 text-white font-semibold py-4 px-14 rounded transition duration-300 ease-in-out hover:bg-blue-900 text-center items-center">
            Switch Today
        </button>
        </Link>
    </div>
</section>
<ContactUs />
<Footer />
        </div>
    );
};

export default BusinessElectricity;
