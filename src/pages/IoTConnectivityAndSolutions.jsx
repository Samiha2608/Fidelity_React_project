import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactUs from '../components/ContactUs';

import { faShieldAlt, faChartLine, faClock,faMoneyBillWave, faSimCard, faChartBar, faCloud, faNetworkWired, faUsers, faClipboardList, faMobileAlt, faLightbulb, faCogs} from '@fortawesome/free-solid-svg-icons';
const IoTConnectivityAndSolutions = () => {
    return (
        <div>
           <Header /> {/* Import the Header component */}

<div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/partner.jpg')" }}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10 flex flex-col items-start justify-center min-h-screen text-left text-white p-8 ml-12">
        <h1 className="text-6xl font-bold mb-4 text-white">
          
Join our IoT Provider<br /> Partner Program
        </h1>
        <h3 className="text-3xl font-bold mb-4 text-white">Unlock advanced collaboration <br />opportunities to propel your IoT <br />solutions forward</h3>
        <div className="flex space-x-4 mt-4">
        <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-900 hover:scale-105">
                Become a partner
            </button></Link>
            <Link to="/get-copy"><button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-900 hover:scale-105">
                Download our brochure
            </button>
            </Link>
        </div>
    </div>
</div>
<section className="relative p-10 bg-white">
    {/* Full-Width Heading */}
    <div className="absolute top-0 left-0 w-full bg-white bg-opacity-90 p-4">
        <h2 className="text-4xl font-bold text-left">
            <span className="text-gray-500">
                Staying ahead of the curve means more than just keeping pace — it’s about embracing cutting-edge technologies that drive transformation.
            </span>
        </h2>
    </div>

    {/* Content Section */}
    <div className="flex flex-col md:flex-row items-center justify-between mt-4"> {/* Adjust margin-top to fit the heading */}
        {/* Text Content */}
        <div className="md:w-1/2">
            <p className="text-lg text-gray-700">
                As a valued partner, you’ll have a unique opportunity to elevate your offerings by providing comprehensive global IoT solutions to your customers.
                <br /><br />
                Powered by our latest platform, vM2M, our integrated suite includes IoT SIM management, robust IoT software, and a wide range of IoT supplier services — all conveniently housed under one roof.
                <br /><br />
                Whether your clients are seeking reliable IoT connectivity, scalable management solutions, or innovative hardware options, our platform ensures they have access to everything they need, 24/7.
                <br /><br />
                Partnering with us means delivering unparalleled value and staying at the forefront of the IoT revolution.
            </p>
        </div>
        
        {/* Image */}
        <div className="md:w-1/2 md:flex md:items-center mt-8 md:mt-0">
            <img src="/images/contact.jpg" alt="Description" className="w-full h-auto object-cover" />
        </div>
    </div>
</section>
<section className="py-10 bg-white">
    <div className="container mx-auto">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Column 1 */}
            <div className="flex items-center">
                <FontAwesomeIcon icon={faChartLine} className="text-red-600 text-3xl mr-4" />
                <span className="text-gray-600 text-lg font-semibold">Manage data overages</span>
            </div>

            {/* Column 2 */}
            <div className="flex items-center">
                <FontAwesomeIcon icon={faClock} className="text-red-600 text-3xl mr-4" />
                <span className="text-gray-600 text-lg font-semibold">Quote live in seconds</span>
            </div>

            {/* Column 3 */}
            <div className="flex items-center">
                <FontAwesomeIcon icon={faSimCard} className="text-red-600 text-3xl mr-4" />
                <span className="text-gray-600 text-lg font-semibold">True SIM estate management</span>
            </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="flex items-center">
                <FontAwesomeIcon icon={faMoneyBillWave} className="text-red-600 text-3xl mr-4" />
                <span className="text-gray-600 text-lg font-semibold">Create additional revenue</span>
            </div>

            {/* Column 2 */}
            <div className="flex items-center">
                <FontAwesomeIcon icon={faChartBar} className="text-red-600 text-3xl mr-4" />
                <span className="text-gray-600 text-lg font-semibold">Data driven insights</span>
            </div>

            {/* Column 3 */}
            <div className="flex items-center">
                <FontAwesomeIcon icon={faShieldAlt} className="text-red-600 text-3xl mr-4" />
                <span className="text-gray-600 text-lg font-semibold">Secure SIMs</span>
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
                        <h3 className="text-gray-600 font-semibold text-2xl">Mobile</h3>
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
                        <h3 className="text-gray-600 font-semibold text-2xl">Built for Business</h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        With Fidelity, you will have access to the very best business-grade networks in the UK.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer text-center">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faUsers} className="text-red-600 text-6xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">M2M
                        </h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        If a machine can signal its requirements without intervention, processes can be streamlined significantly.
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

export default IoTConnectivityAndSolutions;
