import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ContactUs from '../components/ContactUs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCogs, faShieldAlt, faUsers, faArrowRight } from '@fortawesome/free-solid-svg-icons';
const GreenEnergy = () => {
    return (
      <div>
      <Header /> {/* Import the Header component */}

      <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/partner.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white p-8">
          
              <h1 className="text-4xl font-bold mb-4 text-white">
              Your business needs
              </h1>
              <h1 className="text-8xl font-bold mb-4 text-white">
              Green Energy.
              </h1>
              <p className="text-xl font-bold mb-4 text-white">
              Reduce the impact your business has on the environment with green energy.</p>
              <div className="flex space-x-4 mt-4">
              <Link to="/quote"><button className="bg-green-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-white hover:text-green-600 hover:scale-105">
                      Speak with an Expert
                  </button>
                  </Link>
                  <button className="bg-white text-green-600 font-semibold py-4 px-16 rounded transition duration-300 ease-in-out transform hover:bg-green-600 hover:text-white hover:scale-105">
               Call Us
                  </button>
              </div>
          </div>
      </div>
      <section className="py-10 mt-14">
                {/* Section Heading */}
                <div className="text-center mb-14">
                    <p className="text-xl font-bold text-gray-400 mb-5">
                      BUSINESS ENERGY IN THE UK
                    </p>
                    <h2 className="text-4xl font-bold mt-2 text-gray-600 text-center">
                       
                        <span className="text-gray-500">We Work With Many Trusted Suppliers To Help Find You The Best Business Green Energy Rates.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col md:col-span-2 ml-10">
                        <div className="flex items-center mb-4">
                            <div className="h-36 w-2 bg-blue-900 mr-4"></div> {/* Vertical Blue Line */}
                            <p className="font-bold text-3xl">
                            <span className="text-gray-500">Switching to a green energy tariff allows you to meet the GHG Protocol Corporate Standards.</span>
                           
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col md:col-span-3">
    <p className="text-gray-500 mb-4 text-lg">
    Choose the Green Energy deal you need from our extensive range of tariffs. All Green Energy Products from Fidelity use power generated from 100% renewable sources. <br />Every Energy tariff comes with a zero emissions rating and is backed by a “Guarantee of Origin”, certifying that the electricity has been generated exclusively through wind or hydro assets.
    </p>
    <div className="self-start"> {/* Align button to the start of the column */}
    <Link to="/quotes"><button className="bg-green-600 text-white font-semibold py-4 px-14 rounded transition duration-300 ease-in-out hover:bg-white hover:text-green-600">
            Find Out More
        </button>
        </Link>
    </div>
</div>

                </div>
            </section>
            <div className="py-16 bg-white">
    <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-8 text-center">
            <span className="text-green-600">The business benefits of going <br />green</span>
        
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faLightbulb} className="text-green-600 text-5xl" />
                </div>
                <h3 className="text-gray-600 font-semibold text-2xl">Gas</h3>
                <p className="text-gray-600 mt-2 flex-grow">
                  Say goodbye to confusing gas tariffs and time-consuming paperwork. We'll support you with everything from metre reading to understanding you bill.
                </p>
            
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faCogs} className="text-green-600 text-5xl" />
                </div>
                <h3 className="text-gray-600 font-semibold text-2xl">Electricity</h3>
                <p className="text-gray-600 mt-2 flex-grow">
                    A new way to procure business electricity - with access to some of the UK's top electricity suppliers, you can leave lengthy price comparison process to us.
                </p>
         
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-green-600 text-5xl" />
                </div>
                <h3 className="text-gray-600 font-semibold text-2xl">EV Charging</h3>
                <p className="text-gray-600 mt-2 flex-grow">
                 Install EV charging points on your premises and see immediate benefits, including cost savings on employee travel and incentives provided by the Workplace Charging Scheme (WCS).
                </p>
             
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faUsers} className="text-green-600 text-5xl" />
                </div>
                <h3 className="text-gray-600 font-semibold text-2xl">Green Energy</h3>
                <p className="text-gray-600 mt-2 flex-grow">
                   Looking to reduce your carbon footprint by sourcing energy from renewable sources? We have access to suppliers offering solar, wind, hydro and many more types of Green energy.
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

export default GreenEnergy;
