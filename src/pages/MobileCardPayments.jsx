import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCogs, faShieldAlt, faUsers,  faChevronRight, faArrowRight, faBagShopping, faCalendar, faDashboard , faChevronDown} from '@fortawesome/free-solid-svg-icons';
const MobileCardPayments = () => {
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
      <Header />
      <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/home.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          
          <div className="relative z-10 flex flex-col items-start justify-center min-h-screen text-left p-8">
         
              <h1 className="text-6xl font-bold mb-4">
                  The Best Payment Terminals<br /> <span className="text-red-600">for a Seamless Checkout Experience</span>
              </h1>
              <p className="text-xl font-bold mb-4 text-white">Tap, Swipe or Insert: Card Machines that Cater to Every <br />Payment Preference</p>
              <div className="flex space-x-4 mt-4">
                  <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-800 hover:scale-105">
                      Get Started
                  </button>
                  </Link>
              </div>
          </div>
      </div>
      <div className="flex flex-col items-center my-8">
                <div className="flex flex-col space-y-4">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse-dot delay-400"></div>
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse-dot delay-200"></div>
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse-dot"></div>
                    </div>
                    </div>
                    <div className="py-16 bg-white">
            <div className="container mx-auto px-4 items-center text-center">
            

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faLightbulb} className="text-red-600 text-9xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">Accept payments</h3>
                      
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faCogs} className="text-red-600 text-9xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">EPOS</h3>
                     
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faShieldAlt} className="text-red-600 text-9xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">E-Commerce</h3>
                    
                    </div>
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faBagShopping} className="text-red-600 text-9xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">E-Commerce</h3>
                    
                    </div>
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faCalendar} className="text-red-600 text-9xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">E-Commerce</h3>
                    
                    </div>

             
                    
                </div>
                


            </div>
        </div>
        <div className="flex flex-col items-center my-8">
                <div className="flex flex-col space-y-4">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse-dot delay-400"></div>
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse-dot delay-200"></div>
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse-dot"></div>
                    </div>
                    </div>
                    <section className="py-10">
                {/* Section Heading */}
                <div className="text-center mb-14">
                    <p className="text-lg font-bold text-gray-400">
                    The PAX A920 Card Payment Machine: Sleek Design, App driven, Powerful Performance

                    </p>
                    <h2 className="text-3xl font-bold mt-2 text-gray-600">
                        <span className="text-gray-500">The Ultimate Flexibility: Take card payments from</span>
                        <span className="text-red-500"> anywhere in your building.</span>
                  
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col md:col-span-2 ml-10">
                        <div className="flex items-center mb-4">
                            <div className="h-32 w-2 bg-blue-900 mr-4"></div> {/* Vertical Blue Line */}
                            <p className="text-gray-800 font-bold text-2xl">
                            The <span className="text-red-600">portable card payment machine</span><br /> is perfect for hospitality venues such as bars, restaurants, and pubs.
                            </p>
                        </div>
                  
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col md:col-span-3">
  
    <p className="text-gray-500 mb-4 text-lg">
    The PAX A920, Card Payment Machine, a cutting-edge Android-based portable card machine, boasts a touch screen interface and is exceptionally user-friendly. Ideal for various settings such as hospitality, retail, and beauty, this versatile device seamlessly integrates into any environment. Designed with merchant convenience in mind, the compact PAX A920 can be easily held or carried in a pocket, allowing for effortless mobility around a venue to process faster payments. Alternatively, it can be placed in its holder on a countertop, ready to accept transactions with just a few taps on its 5-inch Android display. Experience unparalleled ease and efficiency with the PAX A920 Card Payment Machine.
    </p>
    <div className="self-start"> {/* Align button to the start of the column */}
    <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-14 rounded transition duration-300 ease-in-out hover:bg-blue-900">
            Apply Now
        </button>
        </Link>
        <button className="bg-blue-900 text-white font-semibold py-4 px-14 rounded transition duration-300 ease-in-out hover:bg-red-600 ml-6">
            Datesheet
        </button>
    </div>
</div>

                </div>
            </section>
            <section className="flex flex-col md:flex-row items-center py-10">
  {/* Left Side: Image and Text */}
  <div className="md:w-1/2 flex flex-col items-center text-center md:text-left px-4 md:px-8">
    <img 
      src="/images/bill.jpg" 
      alt="Card Payment Machine" 
      className="w-full h-auto mb-4"
    />
    <h3 className="text-4xl font-bold text-gray-700 mb-2">Faster card payments on the go</h3>
    <p className="text-gray-600">
      The A920 card payment machine provides GPRS connectivity for on-the-go faster payments for any occasion, making it perfect for businesses that require a feature-rich, high-speed processing device.
    </p>
  </div>

  {/* Right Side: FAQ Section */}
  <div className="md:w-1/2 mt-10 md:mt-0">
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
<section className="bg-white p-10">
  {/* Centered Heading */}
  <div className="text-center mb-8">
    <h2 className="text-4xl font-bold">
      <span className="text-gray-500">The Perfect Fit for Mini-POS Solutions: Introducing the Pax A920 Pro </span>
    
    </h2>
  </div>

  {/* Flex Container */}
  <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Right Column: Image */}
        <div className="md:w-1/2 md:flex md:items-center">
      <img src="/images/contact.jpg" alt="Description" className="w-full h-auto object-cover" />
    </div>
    {/* Left Column: Text Content */}
    <div className="md:w-1/2 md:ml-6">
      <p className="text-lg text-gray-700">
      The Pax A920 offers multifunctionality, serving as both a mini EPOS system and a payments device. With its swift processor, payments can be processed in a matter of seconds. For those seeking a mini-POS solution, the A920 Pro version comes equipped with a larger processor and a slightly larger screen. The true game-changer, however, is the Pax Store – similar to Apple’s App Store for payment devices. The Pax Store is a treasure trove of value-added apps, including loyalty apps and mini epos software, that can be remotely pushed to your payment terminal, transforming your Pax A920 into an exceptional payment gateway.
      </p>
    </div>


  </div>
</section>
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

export default MobileCardPayments;
