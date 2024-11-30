import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ContactUs from '../components/ContactUs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faRocket ,faLightbulb, faCogs, faShieldAlt, faUsers,  faChevronRight, faArrowRight, faBagShopping, faCalendar, faDashboard , faChevronDown} from '@fortawesome/free-solid-svg-icons';
const PayByLink = () => {
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
           
              Pay by Link
              </h1>
              <p className="text-4xl font-bold mb-4 text-white">
              The Ultimate Solution to collect payments for Order Processing <br />and Timed Payments</p>
              <div className="flex space-x-4 mt-4">
              <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-900 hover:scale-105">
                      Speak with an Expert
                  </button>
                  </Link>
                  <Link to="/quote"><button className="bg-white text-red-400 font-semibold py-4 px-16 rounded transition duration-300 ease-in-out transform hover:bg-red-600 hover:text-white hover:scale-105">
               Get a Quote
                  </button>
                  </Link>
              </div>
          </div>
      </div>
      <section className="py-10">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left Column */}
        <div className="flex flex-col md:col-span-2 ml-10">
            <div className="flex items-center mb-4 font-bold">
                <div className="h-32 w-2 bg-blue-900 mr-4"></div> {/* Vertical Blue Line */}
                <p className="text-gray-800 font-bold text-2xl">
                <span className="text-gray-600">Many take-aways and restaurants in the UK use</span><span className="text-red-500"> Pay-by-link  </span><span className="text-gray-600">systems to secure deposit payments for reservations.
                </span>
                </p>
            </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col md:col-span-3">
            {/* Section Heading */}
            <div className="text-left mb-10">
               
                <h2 className="text-2xl font-bold mt-2 text-gray-600">
                <span className="text-red-500">Contactless Payments </span> 
                    <span className="text-gray-500">Made <br />Easy: discover the advantages of</span><br />
      
                    <span className="text-red-500">Pay-by-Link</span>
                </h2>
            </div>

            <p className="text-gray-500 mb-4 text-lg">
            A pay link enables businesses to send their customers a safe and encrypted link via email or text message. This pay by link empowers customers to conveniently settle any outstanding balance at their own convenience. The payment is secure as customers not only input their card details but also receive the pay link through their preferred communication channel, be it an email address or mobile number they provided.
            <br /><br /> Normally, pay-by-link transactions are processed through virtual terminals. However, at Fidelity Group, we have developed our own approach within our merchant panel to support pay-by-link functionality. With our merchant panel, you have the ability to customise your page with your business’ brand and colours, creating a tailored online payment experience for your customers.
            </p>
            <div className="self-start"> {/* Align button to the start of the column */}
            <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-14 rounded transition duration-300 ease-in-out hover:bg-blue-900">
                    Apply Now
                </button>
                </Link>
            </div>
        </div>
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
        </button>
        </Link>
        <button className="bg-blue-900 text-white py-4 px-14 rounded-lg transition duration-300 transform hover:bg-blue-900 hover:scale-105 ml-6">
            Call Us Now
        </button>
    </div>
</div>
            {/* New Section: More than Just Billing */}
            <div className="flex flex-col md:flex-row p-8">
    {/* Left Column - Image */}
    <div className="md:w-1/2 p-4 flex justify-start items-start"> {/* Adjust width and align to start */}
        <img src="/images/bill.jpg" alt="Billing Management" className="w-96 h-auto rounded-lg" /> {/* Adjust the width here */}
    </div>

    {/* Right Column - Text */}
    <div className="md:w-1/2 p-4 flex flex-col justify-center items-start"> {/* Adjust width and align text to start */}

        <p className="text-gray-600 mb-4">
        Pay-by-link is the ultimate solution for effortlessly collecting payments from customers, whether it’s for processing orders or capturing timely payments. <br /> <br />With a pay by link, you can swiftly and securely request customers to pay by card, ensuring a smooth, easy and branded payment experience.
        </p>
        <button className="bg-red-600 text-white py-4 px-8 rounded transition duration-300 ease-in-out hover:bg-blue-800">
            Call us Today
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

        </div>
    );
};

export default PayByLink;
