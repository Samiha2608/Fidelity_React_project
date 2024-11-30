import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCogs, faShieldAlt, faUsers, faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Energy = () => {
    return (
      <div>
      <Header /> {/* Import the Header component */}

      <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/partner.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white p-8">
              <h1 className="text-5xl font-bold mb-4 text-white">
                 Stop paying more for your
              </h1>
              <h1 className="text-9xl font-bold mb-4 text-white">
              Business Energy Solutions.
              </h1>
              <p className="text-xl font-bold mb-4 text-white">
              We work for you to get your business energy costs reduced, while you focus on your customers.</p>
              <div className="flex space-x-4 mt-4">
              <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-900 hover:scale-105">
                      Book A Free Review
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
                        
                        Business Energy Solutions in the UK.
                    </p>
                    <h2 className="text-4xl font-bold mt-2 text-gray-600">
                        <span className="text-gray-500">
                        We work for you to get your </span>
                        <span className="text-red-500">business energy costs reduced </span>
                        <span className="text-gray-500"> , while you focus on your customers. </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col md:col-span-2 ml-10">
                        <div className="flex items-center mb-4">
                            <div className="h-32 w-2 bg-blue-900 mr-4"></div> {/* Vertical Blue Line */}
                            <p className="font-bold text-3xl">
                            <span className="text-red-600">Affordable business energy</span><span className="text-gray-500"> doesn’t have to be difficult to procure.</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col md:col-span-3">
    <p className="text-gray-500 mb-4 text-lg">
    Discover the unparalleled advantages of choosing Fidelity Group for your Business Energy Procurement needs. Take the first step towards a transformative business energy management experience. <br />
    <br />At Fidelity Group, we are not just another energy procurement service provider. We are pioneers in the UK’s business energy procurement sector, setting the industry standard for excellence. Our holistic approach combines cutting-edge technology with deep industry knowledge, resulting in tailor-made business energy solutions that surpass your expectations. <br /><br />From the very first consultation, we focus on understanding your unique requirements, challenges, and goals. This personalised attention ensures that we develop a bespoke business energy solution that perfectly aligns with your business objectives. <br /><br />But our commitment doesn’t stop there. We are your trusted energy ally throughout the entire lifecycle of your account. Our experts handle the intricate process of managing businss energy contracts, leaving you free to concentrate on what truly matters – your customers, and growing your business. With our meticulous oversight, you can rest easy knowing that every detail is taken care of, right from negotiating the most advantageous energy rates to ensuring accurate billing. <br /><br />What truly sets us apart is our unwavering dedication to delivering maximum value to our customers. We go beyond procurement, actively assisting you in reducing business energy consumption and minimising your carbon footprint. By optimising your energy usage, we help you achieve cost savings and sustainability goals simultaneously.
    </p>
    <div className="self-start"> {/* Align button to the start of the column */}
    <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-14 rounded transition duration-300 ease-in-out hover:bg-blue-900">
            Book A Free Review
        </button></Link>
    </div>
</div>

                </div>
            </section>
            <div className="py-16 bg-gray-200">
    <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-gray-600">We’ll make</span>
            <span className="text-red-600"> switching your business energy </span>
            <span className="text-gray-600">easy.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faLightbulb} className="text-red-600 text-3xl" />
                </div>
                <h3 className="text-gray-600 font-semibold text-lg">Gas</h3>
                <p className="text-gray-600 mt-2 flex-grow">
                  Say goodbye to confusing gas tariffs and time-consuming paperwork. We'll support you with everything from metre reading to understanding you bill.
                </p>
                <a href="/business-gas" className="mt-4 text-red-600 hover:text-blue-900 hover:underline flex items-center transition-colors duration-300">
                    Find out more <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faCogs} className="text-red-600 text-3xl" />
                </div>
                <h3 className="text-gray-600 font-semibold text-lg">Electricity</h3>
                <p className="text-gray-600 mt-2 flex-grow">
                    A new way to procure business electricity - with access to some of the UK's top electricity suppliers, you can leave lengthy price comparison process to us.
                </p>
                <a href="/business-electricity" className="mt-4 text-red-600 hover:text-blue-900 hover:underline flex items-center transition-colors duration-300">
                    Find out more <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-red-600 text-3xl" />
                </div>
                <h3 className="text-gray-600 font-semibold text-lg">EV Charging</h3>
                <p className="text-gray-600 mt-2 flex-grow">
                 Install EV charging points on your premises and see immediate benefits, including cost savings on employee travel and incentives provided by the Workplace Charging Scheme (WCS).
                </p>
                <a href="/ev-charge-points" className="mt-4 text-red-600 hover:text-blue-900 hover:underline flex items-center transition-colors duration-300">
                    Find out more <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </a>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faUsers} className="text-red-600 text-3xl" />
                </div>
                <h3 className="text-gray-600 font-semibold text-lg">Green Energy</h3>
                <p className="text-gray-600 mt-2 flex-grow">
                   Looking to reduce your carbon footprint by sourcing energy from renewable sources? We have access to suppliers offering solar, wind, hydro and many more types of Green energy.
                </p>
                <a href="/green-energy" className="mt-4 text-red-600 hover:text-blue-900 hover:underline flex items-center transition-colors duration-300">
                    Find out more <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </a>
            </div>
        </div>

     

    </div>
</div>
<div className="flex flex-col lg:flex-row items-start justify-between p-8 bg-white">
            <div className="flex-1 mb-8 lg:mb-0">
                <h2 className="text-4xl my-4 font-bold text-gray-500">
                  Experience the financial and environmental benefits of our comprehensive approach to business energy management.
                   
                </h2>
                <p className="text-gray-500">
                Contact Fidelity Group today for a free review of your Business Energy bill. Together, we can create a brighter, greener future while boosting your bottom line.</p>
            </div>
            <div className="flex-1 flex justify-end mt-16">
            <Link to="/quote"><button className="bg-red-600 text-white py-4 px-10 rounded-lg transition duration-300 transform hover:bg-blue-900 hover:scale-105">
                    Switch Now
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

export default Energy;
