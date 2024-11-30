import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faCheck , faChevronDown} from '@fortawesome/free-solid-svg-icons'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
const servicesData = [
  {
      id: 1,
      image: '/images/winner1.jpg',
      description: 'Connect like a pro. Get super fast and reliable business broadband and ethernet connectivity',
      text: 'Connectivity and Data'
  },
  {
      id: 2,
      image: '/images/winner2.jpg',
      description: 'We have the know-how. Let us procure and manage your business energy requirements.',
      text: 'Energy Solutions'
  },
  {
      id: 3,
      image: '/images/winner3.jpg',
      description: 'Let your business roam with us. We have business mobile plans and services that won’t let you down.',
      text: 'Mobile Services'
  },
  {
      id: 4,
      image: '/images/contact.jpg',
      description: 'IoT is changing the way we do business. We can manage volume of SIMs that connect to a range of different devices via mobile connectivity.',
      text: 'IoT Solutions'
  }
];
const VoiceOverIP = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
      {
          question: "Who are Fidelity Group?",
          answer: "The Fidelity name has been trusted in the telecoms market for over 40 years. Over that time, we have developed a highly successful partnership model dedicated to delivering exceptional B2B telecom, utility, energy, IoT, broadband, and utility solutions for our partners. The awards that we have won speak volumes about our ongoing success story. We have been featured twice in The Sunday Times TechTrack 100 listing and are regularly awarded by our industry peers."
      },
      {
          question: "What services do we provide?",
          answer: "We provide a comprehensive range of services, including telecom solutions, utility services, energy management, and IoT solutions to help businesses thrive."
      },
      {
          question: "How can I become a partner?",
          answer: "You can become a partner by contacting us through our website or reaching out to our partnership team directly to discuss the opportunities available."
      },
      {
          question: "What is the partnership model?",
          answer: "Our partnership model is designed to deliver exceptional value to both our partners and their customers, focusing on collaboration and mutual success."
      },
      {
          question: "How do I contact customer support?",
          answer: "You can contact our customer support team through our website, email, or phone. We are available 24/7 to assist you."
      }
  ];
  const toggleAnswer = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
  };
    return (
      <div>
      <Header />
<div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/home.jpg')" }}>
 <div className="absolute inset-0 bg-black opacity-50"></div>
 
 <div className="relative z-10 flex flex-col items-start justify-center min-h-screen text-left p-8 text-white">

     <h1 className="text-6xl font-bold mb-4">
   
VoIP for business
     </h1>
     <p className="text-2xl font-bold mb-4">Maximise customer satisfaction with VoIP solutions <br />
     customised for your business.</p>
     <div className="flex space-x-4 mt-4">
     <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-900 hover:scale-105">
             Speak with an Expert
         </button>
         </Link>
     </div>
 </div>
</div>
<section className="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
   
    <div className="md:w-1/2 md:ml-6"> {/* Add margin-left for spacing */}
        <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-500">What is VoIP?</span>
        </h2>
        <p className="text-lg text-gray-700">
        VoIP (Voice over Internet Protocol) transmits voice calls over IP networks using an internet connection instead of traditional telephone lines. These systems convert analogue voice signals into digital data by compressing sound into smaller packets, which are then transmitted over an IP network to devices such as smartphones, computers, and tablets.
            <br /><br />
            For businesses, VoIP allows call routing through a secure, internet-connected data centre, removing the need for physical hardware on-site. This internet-based solution is straightforward to install, with no initial connection fees, and offers easy maintenance and upgrades. Its flexibility ensures the system can expand with your business and provides robust call management features.
            <br /><br />
            Cloud-hosted IP phone systems offer reliability that conventional phone systems often lack. For businesses that depend on call tracking, support for hybrid work environments, and detailed call analytics, adopting IP telephony is an excellent way to enhance operational efficiency and reliability.
        </p>
    </div>
    <div className="md:w-1/2 md:flex md:items-center">
        <img src="/images/contact.jpg" alt="Description" className="w-full h-auto object-cover" />
    </div>
</section>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 mx-auto px-4">
    {servicesData.slice(0, 4).map(({ id, image, description, text }) => (
        <div key={id} className="relative overflow-hidden bg-white rounded-lg shadow transition-transform duration-300 group hover:scale-105">
            <a href="#" className="block relative group">
                <img
                    className="w-full h-80 object-cover transition-transform duration-300 transform group-hover:scale-110 opacity-70"
                    src={image}
                    alt={text}
                />
                {/* Red overlay with zoom effect */}
                <div className="absolute inset-0 bg-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-70 group-hover:scale-110 transform origin-center"></div>
                {/* Text on image */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-0">
                    <span className="text-lg font-bold">{text}</span>
                </div>
                {/* Learn more button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <button className="bg-white text-red-600 font-bold py-2 px-4 rounded-lg transition duration-300">
                        {text}
                    </button>
                </div>
            </a>
        </div>
    ))}
</div>

<section className="py-10">
            <h2 className="text-center text-gray-700 text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8">
                {faqs.map((faq, index) => (
                    <div key={index}>
                        <div
                            className={`flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer transition duration-300 ease-in-out 
                                ${activeIndex === index ? 'bg-blue-800 text-white' : 'hover:bg-blue-800 hover:text-white'}`}
                            onClick={() => toggleAnswer(index)}
                        >
                            <FontAwesomeIcon icon={faChevronDown} className={`mr-2 ${activeIndex === index ? 'rotate-180' : ''}`} />
                            <span className={`transition duration-300 ${activeIndex === index ? 'text-white' : 'text-black'}`}>{faq.question}</span>
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
        <Testimonials />
        <ContactUs />
<Footer />
        </div>
    );
};

export default VoiceOverIP;
