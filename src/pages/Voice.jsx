import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faNetworkWired, faShieldAlt, faMobileAlt , faChevronDown} from '@fortawesome/free-solid-svg-icons';

const Voice = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
      {
          question: "What is required to enable the integration of Microsoft Teams with Horizon?",
          answer: "1. Office 365 Enterprise subscription: You need an Office 365 Enterprise subscription, specifically E1, E3, or E5. 2. Microsoft Phone system add-on: With E1 or E3 subscriptions, you need to have the Microsoft Phone system add-on. 3. Horizon subscription with Horizon for Microsoft Teams bolt-on: A Horizon subscription is required, along with the Horizon for Microsoft Teams bolt-on. 4. The Gamma Voice app: You need to have the Gamma Voice app installed."
      },
      {
          question: "What services do we provide?",
          answer: "We provide a comprehensive range of services, including telecom solutions, utility services, energy management, and IoT solutions to help businesses thrive."
      },
      {
          question: "Is a Horizon subscription necessary?",
          answer: "Yes, a Horizon subscription is a prerequisite for Horizon for Microsoft Teams."
      },
      {
          question: "What minutes bundle is available with Horizon for Microsoft Teams?",
          answer: "Horizon for Microsoft Teams offers a minutes bundle that includes 2000 minutes to UK geographic numbers per user, per month on a 30-day rolling term. Additionally, there are 2000 minutes to UK mobile numbers per user, per month on a 3 or 5-year term."
      },
      {
          question: "If I add the Horizon for Microsoft Teams bolt-on to an existing Horizon subscription, will it initiate a new contract?",
          answer: "No, adding the Horizon for Microsoft Teams bolt-on to an existing Horizon subscription will not initiate a new contract. This service is considered a bolt-on and will not impact your existing Horizon contract."
      },
      {
        question: "Can Horizon for Microsoft Teams be deployed internationally?",
        answer: "While the primary focus of Horizon for Microsoft Teams is UK-based businesses, it is possible to deploy it internationally with some important considerations. Calls between MS Teams users who are part of the same MS tenant will be on-net calls and free of charge. Calls from MS Teams users based outside of the UK to UK geographic or mobile numbers will use the available minutes bundles where applicable. Calls from MS Teams users based outside the UK calling local numbers in their respective countries will be charged as international calls."
    }
  ];
  const toggleAnswer = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
  };
    return (
        <div>
            <Header />
            <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/partner.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-start justify-center min-h-screen text-left text-white p-8">
                    <h1 className="text-6xl font-bold mb-4">
                        Hosted Telephony<br /> Systems For Business
                    </h1>
                    <p className="text-xl font-bold mb-4">
                        Maximise customer satisfaction with VoIP solutions <br />customised for your business.
                    </p>
                    <div className="flex space-x-4 mt-4">
                    <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-800 hover:scale-105">
                            Speak with an Expert
                        </button></Link>
                    </div>
                </div>
            </div>
            <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
                <div className="md:w-1/3 md:flex md:items-center">
                    <img src="/images/contact.jpg" alt="Description" className="w-full h-auto object-cover" />
                </div>
                <div className="md:w-2/3 md:ml-6">
                    <p className="text-lg text-gray-700">
                        Fidelity Group offers an extensive range of hosted telephony solutions that deliver scalability and exceptional functionality to meet the critical voice service needs of our customers. Enjoy effortless communication with clients, suppliers, and your internal team, all without the hassle and expense of setting up and maintaining a traditional phone system on your business premises.
                    </p>
                </div>
            </section>

            {/* Business Voice Features Section */}
            <section className="bg-gray-200 py-10">
                <h2 className="text-3xl font-bold text-center">
                    <span className="text-gray-600">Business Voice </span>
                    <span className="text-red-600">Features</span>
                </h2>
                <div className="flex flex-col items-center mt-6">
                    <div className="flex space-x-8 mb-4">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faCloud} className="text-red-600 mr-2" />
                            <span className="font-bold">Cloud-Based Solutions</span>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faNetworkWired} className="text-red-600 mr-2" />
                            <span className="font-bold">Network Reliability</span>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faShieldAlt} className="text-red-600 mr-2" />
                            <span className="font-bold">Security Features</span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faMobileAlt} className="text-red-600 mr-2" />
                        <span className="font-bold">Mobile Accessibility</span>
                    </div>
                </div>
            </section>

            {/* Voice Services for Business Section */}
            <section className="bg-white py-10 text-center">
                <h2 className="text-3xl font-bold text-center text-gray-600 mb-10">Voice Services for Business</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
                    {/* Card 1 */}
                    <div className="bg-white shadow-md hover:shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
                        <img src="/images/bill.jpg" alt="Service 1" className="w-full h-48 object-cover mb-4" />
                        <h3 className="text-xl font-bold text-gray-600 mb-2">VoIP Phone Systems</h3>
                        <a href="/voice-over-IP" className="text-red-600 font-bold hover:text-blue-600 transition-colors duration-300">
                            Learn More &rarr;
                        </a>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white shadow-md hover:shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
                        <img src="/images/contact.jpg" alt="Service 2" className="w-full h-48 object-cover mb-4" />
                        <h3 className="text-xl font-bold text-gray-600 mb-2">SIP Trunking</h3>
                        <a href="/trunk-call-manager" className="text-red-600 font-bold hover:text-blue-600 transition-colors duration-300">
                            Learn More &rarr;
                        </a>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white shadow-md hover:shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
                        <img src="/images/home.jpg" alt="Service 3" className="w-full h-48 object-cover mb-4" />
                        <h3 className="text-xl font-bold text-gray-600 mb-2">Microsoft Teams</h3>
                        <a href="#" className="text-red-600 font-bold hover:text-blue-600 transition-colors duration-300">
                            Learn More &rarr;
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 mt-10">
                    {/* Card 4 */}
                    <div className="bg-white shadow-md hover:shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
                        <img src="/images/mission.jpg" alt="Service 4" className="w-full h-48 object-cover mb-4" />
                        <h3 className="text-xl font-bold text-gray-600 mb-2">Non-Geographic Numbers</h3>
                        <a href="/non-geographic-numbers" className="text-red-600 font-bold hover:text-blue-600 transition-colors duration-300">
                            Learn More &rarr;
                        </a>
                    </div>
                    {/* Card 5 */}
                    <div className="bg-white shadow-md hover:shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
                        <img src="/images/partner.jpg" alt="Service 5" className="w-full h-48 object-cover mb-4" />
                        <h3 className="text-xl font-bold text-gray-600 mb-2">Contact center solutions</h3>
                        <a href="/contact-center-solutions" className="text-red-600 font-bold hover:text-blue-600 transition-colors duration-300">
                            Learn More &rarr;
                        </a>
                    </div>
                    {/* Card 6 */}
                    <div className="bg-white shadow-md hover:shadow-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
                        <img src="/images/winner1.jpg" alt="Service 6" className="w-full h-48 object-cover mb-4" />
                        <h3 className="text-xl font-bold text-gray-600 mb-2">Keep in Touch</h3>
                        <a href="#" className="text-red-600 font-bold hover:text-blue-600 transition-colors duration-300">
                            Learn More &rarr;
                        </a>
                    </div>
                </div>
            </section>
<Testimonials />
<section className="py-10">
    <h2 className="text-center text-gray-700 text-3xl font-bold mb-6">Frequently Asked Questions</h2>
    <div className="space-y-4 px-8">
        {faqs.map((faq, index) => (
            <div key={index}>
                <div
                    className={`flex items-center justify-between p-4 border border-gray-300 rounded-lg cursor-pointer transition duration-300 ease-in-out 
                        ${activeIndex === index ? 'bg-blue-900 text-white' : 'hover:bg-blue-900 hover:text-white'}`}
                    onClick={() => toggleAnswer(index)}
                >
                    <span className={`${activeIndex === index ? 'text-white' : 'text-black'}`}>
                        {faq.question}
                    </span>
                    <FontAwesomeIcon icon={faChevronDown} className={`ml-2 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-white' : 'text-black'}`} />
                </div>
                {activeIndex === index && (
                    <div className="mt-2 p-4 bg-white text-black border border-gray-300 rounded-lg">
                        {faq.answer}
                    </div>
                )}
            </div>
        ))}
    </div>
</section>


<ContactUs />
            <Footer />
        </div>
    );
};

export default Voice;
