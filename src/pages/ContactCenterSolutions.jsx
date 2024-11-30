import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck , faChevronDown} from '@fortawesome/free-solid-svg-icons';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import { Link } from 'react-router-dom';
const ContactCenterSolutions = () => {
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
  const [visibleSection, setVisibleSection] = useState(null);

  const handleSectionToggle = (section) => {
      setVisibleSection(visibleSection === section ? null : section);
  };
    return (
        <div>
      <Header />
<div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/home.jpg')" }}>
 <div className="absolute inset-0 bg-black opacity-50"></div>
 
 <div className="relative z-10 flex flex-col items-start justify-center min-h-screen text-left p-8 text-white">

     <h1 className="text-6xl font-bold mb-4">
     Contact centre <br /> solutions
     </h1>
     <p className="text-lg mb-4">Simplify customer engagement with Horizon Contact. <br />
The Cloud-Based Contact Centre is built for your business.

</p>
     <div className="flex space-x-4 mt-4">
     <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-900 hover:scale-105">
             Speak With an Expert
         </button></Link>
     </div>
 </div>
</div>
<section className="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
   
    <div className="md:w-1/2 md:ml-6"> {/* Add margin-left for spacing */}
       
        <p className="text-lg text-gray-700">
        Horizon Contact is a comprehensive contact centre solution specifically designed to integrate seamlessly with Horizon, delivering a unified experience and shared feature set for all users. This solution provides a rich customer contact experience across voice, email, webchat, and outbound SMS. Horizon Contact supports a wide range of handsets and utilizes WebRTC technology to enable the use of softphones, ensuring versatile and efficient communication options for your contact centre.
        </p>
    </div>
    <div className="md:w-1/2 md:flex md:items-center">
        <img src="/images/contact.jpg" alt="Description" className="w-full h-auto object-cover" />
    </div>
</section>
<section className="py-10">
    {/* Additional Text Section */}
    <div className="text-center mt-10">
        <p className="text-lg font-bold text-gray-400">Discover Fidelity Group</p>
        <h2 className="text-3xl font-bold mt-2">
            <span className="text-gray-800">We’ve been thriving </span>
            <span className="text-red-600">since 2008.</span>
        </h2>
    </div>

    {/* Tabs Section */}
    <div className="flex justify-center space-x-20 mt-8">
        <button 
            onClick={() => handleSectionToggle('simple')}
            className={`bg-gray-800 text-white text-lg font-semibold py-4 px-20 rounded transition duration-300 ease-in-out hover:bg-red-600 ${
                visibleSection === 'simple' ? 'bg-red-600' : ''
            }`}
        >
            SIMPLE TO USE INTERFACES
        </button>
        <button 
            onClick={() => handleSectionToggle('building')}
            className={`bg-gray-800 text-white text-lg font-semibold py-4 px-20 rounded transition duration-300 ease-in-out hover:bg-red-600 ${
                visibleSection === 'building' ? 'bg-red-600' : ''
            }`}
        >
            BUILDING A BETTER EXPERIENCE HUB
        </button>
        <button 
            onClick={() => handleSectionToggle('improved')}
            className={`bg-gray-800 text-white text-lg font-semibold py-4 px-20 rounded transition duration-300 ease-in-out hover:bg-red-600 ${
                visibleSection === 'improved' ? 'bg-red-600' : ''
            }`}
        >
           IMPROVED CUSTOMER SERVICE
        </button>
    </div>

    {/* Sections Content */}
    {visibleSection && (
        <div className="mt-10 border border-gray-300 bg-white p-8 rounded-lg w-full">
            <div className="flex">
                {/* Content for "Simple to use interfaces" */}
                {visibleSection === 'simple' && (
                    <>
                        <div className="w-1/2">
                            <h3 className="text-red-600 text-3xl font-bold mb-4">
                                Agent, Supervisor, and Admin Interfaces
                            </h3>
                            <p className="text-gray-500 text-xl mb-4 leading-relaxed">
                                Agent Interface
                                <br />
                                Agents can view all the queues they have been given access to. Agents can take calls via an Horizon handset or a softphone using the Horizon Contact portal.
                                <br /><br />
                                Supervisor Interface
                                <br />
                                The Supervisor user has full agent functionality but can manage all agent users. Within the Horizon Contact Portal, the Supervisor’s main screen shows live data for both the queues and the agents that they manage.
                                <br /><br />
                                Admin Interface
                                <br />
                                Horizon Contact is managed using its web interface, which provides information and management control to authenticated operations users. The Administrator Portal part of the interface allows users logged in at the Administrator level to customise their Contact Centre features and functionality.
                            </p>
                        </div>
                        <div className="w-1/2">
                            <img src="/images/home.jpg" alt="Simple to use interface" className="w-full h-auto object-cover rounded" />
                        </div>
                    </>
                )}

{/* Content for "Building a better experience hub" */}
{visibleSection === 'building' && (
    <div className="mt-10 border border-gray-300 bg-white p-8 rounded-lg w-full">
        {/* Image */}
        <div className="w-full mb-8 flex justify-center">
            <img src="/images/bill.jpg" alt="Building a better experience hub" className="w-1/3 h-auto object-cover rounded" />
        </div>
        {/* Text Sections */}
        <div className="flex space-x-8">
            <div className="w-1/2">
                <p className="text-gray-500 text-xl mb-4 leading-relaxed">
                    Transforming customer interactions, Horizon Contact offers a comprehensive Omnichannel menu view, empowering employees with real-time status updates, detailed call information, and intuitive call controls. Seamlessly integrated with CRM systems, staff gain access to vital customer information.
                </p>
            </div>
            <div className="w-1/2">
                <p className="text-gray-500 text-xl mb-4 leading-relaxed">
                    and personalised scripts, enabling them to navigate tasks effortlessly. With customisable prompts guiding them at every stage, staff deliver exceptional customer experiences with every interaction, ensuring a seamless and informed service journey.
                </p>
            </div>
        </div>
    </div>
)}



                {/* Content for "Improved customer service" */}
                {visibleSection === 'improved' && (
                    <>
                        <div className="w-1/2">
                            <p className="text-gray-500 text-xl mb-4 leading-relaxed">
                                Horizon Contact provides a consistent quality Omnichannel solution. The interface gives agents a master view of customer communication across all channels, so they can ensure a seamless experience. Horizon Contact supports inbound and outbound voice channels, web chat and email, enabling a highly personalised customer experience.
                                <br /><br />
                                With easy to create complex interaction flows, dynamic skills-based routing and IVR self-service options, Horizon Contact allows you to connect your customers to the most appropriate person faster, improving first contact resolution and delivering an enhanced level of customer care.
                                <br /><br />
                                The shared phonebook and presence information between agents and back-office staff allows agents to transfer calls with full consult functionality. All interaction history is stored within the included CRM and available to the agent when connected to a recognised customer.
                            </p>
                        </div>
                        <div className="w-1/2">
                            <img src="/images/mission.jpg" alt="Improved customer service" className="w-full h-auto object-cover rounded" />
                        </div>
                    </>
                )}
            </div>
        </div>
    )}
</section>

    <Testimonials />
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
    <ContactUs />
<Footer />
        </div>
    );
};

export default ContactCenterSolutions;
