import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCloud, faNetworkWired, faShieldAlt, faUsers, faClipboardList, faMobileAlt, faLightbulb, faCogs , faCheck} from '@fortawesome/free-solid-svg-icons';
const IoTStarterPack = () => {
    return (
      <div>
      <Header />
      <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/home.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          
          <div className="relative z-10 flex flex-col items-start justify-center min-h-screen text-left p-8">
       
              <h1 className="text-6xl font-bold mb-4">
              Your FREE 60-Day <br />
              IoT Starter Pack
              </h1>
              <div className="flex space-x-4 mt-4">
                  <button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-900 hover:scale-105">
                      Get yours now
                  </button>
              </div>
          </div>
      </div>
      <div className="py-16 bg-gray-200">
    <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-left">
            <span className="text-gray-500">What is in our IoT starter pack?</span>
          
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-200 p-8 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer text-center">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faLightbulb} className="text-red-600 text-6xl" />
                </div>
                <h3 className="text-gray-600 font-semibold text-2xl mb-4">IoT connectivity</h3>
                <ul className="text-left text-gray-600 flex-grow space-y-2">
                    <li className="flex items-start">
                        <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1" />
                        Our multi-network SIM cards provide optimized network coverage.
                    </li>
                    <li className="flex items-start">
                        <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1" />
                        Ensuring you can connect to anything, anywhere, at any time.
                    </li>
                </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-200 p-8 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer text-center">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faCogs} className="text-red-600 text-6xl" />
                </div>
                <h3 className="text-gray-600 font-semibold text-2xl mb-4">Aggregated Data</h3>
                <ul className="text-left text-gray-600 flex-grow space-y-2">
                    <li className="flex items-start">
                        <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1" />
                        Try our SIMs FREE of charge for 60 days.
                    </li>
                    <li className="flex items-start">
                        <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1" />
                        Experience optimized data aggregation.
                    </li>
                </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-200 p-8 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer text-center">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-red-600 text-6xl" />
                </div>
                <h3 className="text-gray-600 font-semibold text-2xl mb-4">Partner Programme</h3>
                <ul className="text-left text-gray-600 flex-grow space-y-2">
                    <li className="flex items-start">
                        <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1" />
                        Benefit from a compelling margin share.
                    </li>
                    <li className="flex items-start">
                        <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1" />
                        Resell market-disrupting IoT connectivity.
                    </li>
                </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-200 p-8 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer text-center">
                <div className="mb-4">
                    <FontAwesomeIcon icon={faUsers} className="text-red-600 text-6xl" />
                </div>
                <h3 className="text-gray-600 font-semibold text-2xl mb-4">vM2M IoT Platform</h3>
                <ul className="text-left text-gray-600 flex-grow space-y-2">
                    <li className="flex items-start">
                        <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1" />
                        We’ve made IoT as easy as; Quote – Order – Manage - 24/7.
                    </li>
                    <li className="flex items-start">
                        <FontAwesomeIcon icon={faCheck} className="text-red-600 mr-2 mt-1" />
                        Simplified IoT management at your fingertips.
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div className="flex items-center justify-center h-screen bg-white">
    <div className="w-full p-8 bg-white shadow-md">
        {/* Top Heading */}
        <h2 className="text-3xl font-bold text-left text-gray-600 mb-4">
            Get started with your FREE 60-day IoT Starter Pack
        </h2>
        
        {/* Required Fields Notice */}
        <p className="text-sm text-gray-500 text-left mb-6">* indicates required fields</p>

        <form>
            {/* First Row - Name and Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="relative z-0 w-full group">
                    <input type="text" name="name" id="name" 
                        className="block py-3 px-4 w-full text-lg text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-red-600" 
                        placeholder="Name*" required />
                </div>
                <div className="relative z-0 w-full group">
                    <input type="text" name="company" id="company" 
                        className="block py-3 px-4 w-full text-lg text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-red-600" 
                        placeholder="Company" required />
                </div>
            </div>

            {/* Second Row - Contact Number and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div className="relative z-0 w-full group">
                    <input type="tel" name="contact_number" id="contact_number" 
                        className="block py-3 px-4 w-full text-lg text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-red-600" 
                        placeholder="Contact Number*" required />
                </div>
                <div className="relative z-0 w-full group">
                    <input type="email" name="email" id="email" 
                        className="block py-3 px-4 w-full text-lg text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-red-600" 
                        placeholder="Email" required />
                </div>
            </div>

            {/* Third Row - Message */}
            <div className="relative z-0 w-full mb-6 group">
                <textarea name="message" id="message" 
                    className="block py-3 px-4 w-full text-lg text-gray-900 bg-transparent border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-red-600 h-40" 
                    placeholder="Message" required></textarea>
            </div>

            {/* Privacy Policy Agreement */}
            <div className="mb-6">
                <input type="checkbox" id="agree" className="mr-2" required />
                <label htmlFor="agree" className="text-gray-600">I agree to the privacy policy</label>
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

export default IoTStarterPack;
