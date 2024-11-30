import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faRocket ,faLightbulb, faCogs, faShieldAlt, faUsers,  faChevronRight, faArrowRight, faBagShopping, faCalendar, faDashboard , faChevronDown} from '@fortawesome/free-solid-svg-icons';
const VirtualTerminal = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
      {
          question: "How it looks",
          answer: "In our expert view, this portable card machine currently available on the market exudes an undeniable sense of allure, making it the epitome of elegance. Its visually appealing design has garnered immense popularity among beauty salons and hair salons, seamlessly blending with their captivating environments."
      },
      {
          question: "Functionality",
          answer: "This feature-rich device encompasses all the essential capabilities of a card machine, while also offering the distinct advantage of the Pax Store. With this remarkable feature, you can conveniently install applications onto your device, expanding its potential even further."
      },
      {
          question: "Dual connectivity",
          answer: "Experience a robust and expedient processing journey by effortlessly connecting through either GPRS or Wi-Fi."
      },
      {
          question: "Innovation",
          answer: "The Pax Store remains in a constant state of evolution, regularly receiving new application releases and updates to existing ones. This perpetual enhancement of applications ensures that the Pax A920 user benefits from ever-improving performance, enhanced speed, and heightened security."
      },
      {
          question: "Hands off Agnostics",
          answer: "With the remarkable functionality of the Pax Store, your technical support desk gains the ability to remotely access and troubleshoot your payment terminal. This advanced feature ensures seamless problem-solving and optimized performance for your device."
      },
      {
        question: "5 inch android touch screen",
        answer: "The Pax A920 boasts a user-friendly, visible touch screen that simplifies the input of required details for the user."
    },
    {
      question: "Battery Life",
      answer: "Equipped with a high capacity 5250mAh battery, the Pax A920 ensures you remain fully charged throughout a bustling day of processing payments, providing up to 8 hours of uninterrupted usage."
  },
  {
      question: "Acquirer agnostic",
      answer: "Fidelity Group will initially introduce a mobile credit card terminal in partnership with Elavon as the acquiring bank. However, we are actively working towards becoming acquirer agnostic. This means that our payment terminals are certified with multiple acquiring banks, including Elavon, Worldpay, Clover, E-Merchant Pay, among others. As a result, if the card machine has been distributed from Fidelity's head office, we can seamlessly switch your acquiring bank without requiring any hardware changes."
  }
  ];
  const toggleAnswer = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
  };
    return (
      <div>
      <Header /> {/* Import the Header component */}

      <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/partner.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white p-8">
          
              <h1 className="text-8xl font-bold mb-4 text-white">
           
Take payments anywhere.
              </h1>
              <p className="text-xl font-bold mb-4 text-white">
              Seamless Payment Processing: Empowering Businesses with Virtual Terminals for MOTO Transactions</p>
              <div className="flex space-x-4 mt-4">
              <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-900 hover:scale-105">
                      Speak with an Expert
                  </button>
                  </Link>
                  <Link to="/quote"> <button className="bg-white text-red-400 font-semibold py-4 px-16 rounded transition duration-300 ease-in-out transform hover:bg-red-600 hover:text-white hover:scale-105">
               Get a Quote
                  </button>
                  </Link>
              </div>
          </div>
      </div>
      <div className="container mx-auto px-4 text-center mt-8 mb-8">
  <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
    {/* Card 1 */}
    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer hover:text-blue-600">
      <div className="mb-4">
        <FontAwesomeIcon icon={faLightbulb} className="text-red-600 text-9xl transition-colors duration-300 hover:text-blue-600" />
      </div>
      <h3 className="text-gray-600 font-semibold text-2xl mb-4">Accept payments</h3>
      <a href="/quote" className="text-red-600 hover:text-blue-600 font-semibold transition-colors duration-300">
        Apply Now <FontAwesomeIcon icon={faArrowRight} />
      </a>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer hover:text-blue-600">
      <div className="mb-4">
        <FontAwesomeIcon icon={faCogs} className="text-red-600 text-9xl transition-colors duration-300 hover:text-blue-600" />
      </div>
      <h3 className="text-gray-600 font-semibold text-2xl mb-4">EPOS</h3>
      <a href="/quote" className="text-red-600 hover:text-blue-600 font-semibold transition-colors duration-300">
        Apply Now <FontAwesomeIcon icon={faArrowRight} />
      </a>
    </div>

    {/* Card 3 */}
    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer hover:text-blue-600">
      <div className="mb-4">
        <FontAwesomeIcon icon={faShieldAlt} className="text-red-600 text-9xl transition-colors duration-300 hover:text-blue-600" />
      </div>
      <h3 className="text-gray-600 font-semibold text-2xl mb-4">E-Commerce</h3>
      <a href="/quote" className="text-red-600 hover:text-blue-600 font-semibold transition-colors duration-300">
        Apply Now <FontAwesomeIcon icon={faArrowRight} />
      </a>
    </div>

    {/* Card 4 */}
    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer hover:text-blue-600">
      <div className="mb-4">
        <FontAwesomeIcon icon={faBagShopping} className="text-red-600 text-9xl transition-colors duration-300 hover:text-blue-600" />
      </div>
      <h3 className="text-gray-600 font-semibold text-2xl mb-4">Retail</h3>
      <a href="/quote" className="text-red-600 hover:text-blue-600 font-semibold transition-colors duration-300">
        Apply Now <FontAwesomeIcon icon={faArrowRight} />
      </a>
    </div>

    {/* Card 5 */}
    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer hover:text-blue-600">
      <div className="mb-4">
        <FontAwesomeIcon icon={faCalendar} className="text-red-600 text-9xl transition-colors duration-300 hover:text-blue-600" />
      </div>
      <h3 className="text-gray-600 font-semibold text-2xl mb-4">Scheduling</h3>
      <a href="/quote" className="text-red-600 hover:text-blue-600 font-semibold transition-colors duration-300">
        Apply Now <FontAwesomeIcon icon={faArrowRight} />
      </a>
    </div>

    {/* Card 6 */}
    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer hover:text-blue-600">
      <div className="mb-4">
        <FontAwesomeIcon icon={faRocket} className="text-red-600 text-9xl transition-colors duration-300 hover:text-blue-600" />
      </div>
      <h3 className="text-gray-600 font-semibold text-2xl mb-4">Innovation</h3>
      <a href="/quote" className="text-red-600 hover:text-blue-600 font-semibold transition-colors duration-300">
        Apply Now <FontAwesomeIcon icon={faArrowRight} />
      </a>
    </div>
  </div>
</div>
<section className="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
    <div className="md:w-1/2 md:flex md:items-center">
        <img src="/images/contact.jpg" alt="Description" className="w-full h-auto object-cover" />
    </div>
    <div className="md:w-1/2 md:ml-6"> {/* Add margin-left for spacing */}
        <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-500">Secure and Seamless: How Virtual Terminal Payments Transform the Way You Transact</span>
          
        </h2>
        <p className="text-lg text-gray-700">
        A virtual terminal is a secure web portal that enables businesses to process payments through card details provided over the phone or in-person. With this system, payments can be made from anywhere the user logs in, making it a convenient and efficient way to collect payments. Moreover, multiple users can access the virtual terminal, which can be a cost-effective solution for businesses.
            <br /><br />

            Typically, virtual terminals are offered by acquirers on their platforms, but at Fidelity Group, our merchant platform includes a built-in virtual terminal, which not only saves merchants money but also simplifies the payment acceptance process. Additionally, your virtual terminal payment page can be customised to reflect your branding or that of our white label payments partner.
        </p>
    </div>
</section>
<div className="flex flex-col lg:flex-row items-start justify-between p-8 bg-gray-200">
    <div className="flex-1 mb-8 lg:mb-0">
        <h2 className="text-4xl my-4 font-bold">
            <span className="text-gray-600">We can help your business </span>
            <span className="text-red-500">save money </span>
            <span className="text-gray-600">on rates. Book a review today!</span>
        </h2>
  
    </div>
    <div className="flex-1 flex justify-end mt-10">
    <Link to="/quote"><button className="bg-red-600 text-white py-4 px-10 rounded-lg transition duration-300 transform hover:bg-blue-900 hover:scale-105">
            Request Review
        </button></Link>
        <button className="bg-blue-900 text-white py-4 px-14 rounded-lg transition duration-300 transform hover:bg-blue-900 hover:scale-105 ml-6">
            Call Us Now
        </button>
    </div>
</div>
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
<section className="py-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {/* First Column */}
        <div className="flex flex-col">
            <p className="text-gray-400 text-lg font-bold">PAYMENTS AS A SERVICE</p>
            <h2 className="text-gray-500 text-3xl font-bold mt-2">
            Press releases,<span className="text-red-500">blogs</span> and videos
            </h2>
            <ul className="mt-4 space-y-2">
                {[
                    "4 Key Factors to Consider When Choosing A Payment Option for Your Business",
                    "The Evolution of Merchant Payments",
                    "What is EPOS? | Electronic Point of Sale | Fidelity Group UK",
                    "What are continuous payment authorities (CPAS)",
                    "Using EPOS to improve customer retention"
                ].map((item, index) => (
                    <li key={index} className="flex items-center text-red-500 hover:text-red-700 transition duration-300 cursor-pointer"> {/* Added cursor-pointer */}
                        <FontAwesomeIcon icon={faArrowRight} className="mr-2 transition-transform duration-300 transform hover:translate-x-1" /> {/* Arrow icon */}
                        {item}
                    </li>
                ))}
            </ul>
        </div>

        {/* Second Column */}
        <div className="flex flex-col">
            <img src="/images/winner2.jpg" alt="Description" className="h-42 w-full object-cover mb-2" /> {/* Fixed height and width */}
            <h3 className="text-gray-500 text-xl font-bold">4 Key Factors to Consider When Choosing A Payment Option for Your Business</h3>
            <a href="#" className="text-red-500 underline hover:no-underline">Read more <FontAwesomeIcon icon={faChevronRight} className="inline" /></a>
        </div>

        {/* Third Column */}
        <div className="flex flex-col">
            <img src="/images/winner1.jpg" alt="Description" className="h-45 w-full object-cover mb-2" /> {/* Fixed height and width */}
            <h3 className="text-gray-500 text-xl font-bold">The Evolution of Merchant Payments</h3>
            <a href="#" className="text-red-500 underline hover:no-underline">Read more <FontAwesomeIcon icon={faChevronRight} className="inline" /></a>
        </div>
    </div>
</section>
<ContactUs />
      <Footer />
        </div>
    );
};

export default VirtualTerminal;
