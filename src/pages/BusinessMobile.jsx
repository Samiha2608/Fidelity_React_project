import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faNetworkWired, faShieldAlt, faMobileAlt , faChevronDown} from '@fortawesome/free-solid-svg-icons';
const BusinessMobile = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
      {
          question: "How can I retrieve my SIM card's PIN code?",
          answer: "Our sims are PIN free. If you add a PIN to your sim, please remember, after three incorrect PIN attempts, your SIM card will be temporarily blocked."
      },
      {
          question: "What should I do if my SIM card gets blocked?",
          answer: "To unblock your SIM card, you'll require a PUK (Personal Unblocking Key) code. Call us at 0800 480 6800 to obtain your PUK code."
      },
      {
          question: "What's the number for accessing voicemail?",
          answer: "Voicemail number is different for each network. Call us at 0800 480 6800 or email mobilesupport@fidelity-group.co.uk for more information. Please note that voicemail reset will erase all your stored voicemail messages."
      },
      {
          question: "I'm unable to connect to the internet on my phone. What can I do?",
          answer: "Call us at 0800 480 6800 or email mobilesupport@fidelity-group.co.uk and let us know if you are in the UK or abroad. Our team will check all network settings for your number and advise accordingly."
      },
      {
          question: "What's the procedure if my phone is lost or stolen?",
          answer: "Call us on 0800 480 6800 or email mobilesupport@fidelity-group.co.uk to report a lost or stolen phone. We will then block your SIM card and bar the last IMEI used with your number."
      },
      {
        question: "My device isn't working with the new SIM. What's the solution?",
        answer: "Phones from different network providers might be locked to their networks. Contact your previous provider to unlock your phone for compatibility."
    }
  ];
  const toggleAnswer = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
  };
    return (
        <div>
          <Header />
          <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/partner.jpg')" }}>
    {/* Black Overlay */}
    <div className="absolute inset-0 bg-black opacity-50"></div>
    
    {/* Blue Overlay */}
    <div className="absolute inset-0 bg-blue-500 opacity-20"></div>
    
    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white p-8">
        <h1 className="text-xl font-bold mb-8 text-white mt-4">
           
Business Mobile Services in the UK
        </h1>
        <h1 className="text-4xl font-bold mb-4">
        <span className="text-white">Competitive deals on bespoke</span><span className="text-red-600"> business mobile plans </span><span className="text-white">from all the major UK mobile providers.
        </span>
        </h1>
       
        <div className="flex space-x-4 mt-4">
        <Link to="/quotes"><button className="bg-red-600 text-white font-semibold py-4 px-16 rounded transition duration-300 ease-in-out transform hover:bg-blue-900 hover:scale-105">
                Chat To Us
            </button>
            </Link>
            <Link to="/get-copy"> <button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-900 hover:scale-105">
                Download Our Brochure
            </button>
            </Link>
        </div>
    </div>
</div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-16 mb-16">
                    {/* Left Column */}
                    <div className="flex flex-col md:col-span-2 ml-10">
                        <div className="flex items-center mb-4">
                            <div className="h-32 w-2 bg-blue-900 mr-4"></div> {/* Vertical Blue Line */}
                            <p className="font-bold text-3xl">
                            <span className="text-gray-500">Get </span>
                            <span className="text-red-600"> business mobile service and support</span><span className="text-gray-500">  that won’t let you down.</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col md:col-span-3">
    <p className="text-gray-500 mb-4 text-lg">
    Business mobile – experience uninterrupted calls and swift data with our bespoke solutions, backed by the strength of the UK’s top network providers, including O2, Vodafone, and Three, powered by Gamma.
    </p>
    <div className="self-start"> {/* Align button to the start of the column */}
    <Link to="/quotes"><button className="bg-red-600 text-white font-semibold py-4 px-14 rounded transition duration-300 ease-in-out hover:bg-blue-900">
            Switch Now
        </button></Link>
    </div>
</div>

                </div>
                <div className="py-16 bg-gray-200">
            <div className="container mx-auto px-4">
                <h2 className="text-xl font-bold mb-8 text-center">
                    <span className="text-gray-500">Fidelity Group as your business mobile partner</span>
                
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer text-center">
                        <div className="mb-4">
                        <img src="/images/bill.jpg" alt="Service 1" className="w-full h-48 object-cover mb-4" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">Superior 5G Network</h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        Experience heightened internet speeds through our trusted business mobile partners. Seamlessly send & receive large files, and stream with uninterrupted connectivity. Enjoy an impressive median 5G download speed of 282Mbps, ensuring swift performance (subject to coverage & local factors).
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer text-center">
                    <div className="mb-4">
                        <img src="/images/bill.jpg" alt="Service 1" className="w-full h-48 object-cover mb-4" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">99% UK Coverage</h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        Stay seamlessly connected with network switch capability, ensuring uninterrupted network signals wherever you travel across the country.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer text-center">
                    <div className="mb-4">
                        <img src="/images/bill.jpg" alt="Service 1" className="w-full h-48 object-cover mb-4" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">Unlimited UK Texts and Calls</h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        Wave farewell to unexpected expenses on your business mobile bill and embrace worry-free communication with boundless text and data bundles.
                        </p>
                    </div>

              
                    
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {/* Card 4 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer text-center">
                        <div className="mb-4">
                        <img src="/images/bill.jpg" alt="Service 1" className="w-full h-48 object-cover mb-4" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">EU & RoW Roaming</h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        Embarking on international journeys? Our partner networks ensure you stay connected wherever your work takes you, making global travel a breeze. Just get in touch to check which countries are covered by our roaming bolt-ons, before you travel.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer text-center">
                    <div className="mb-4">
                        <img src="/images/bill.jpg" alt="Service 1" className="w-full h-48 object-cover mb-4" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">Effortless Number Transfer</h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        Adapt your business mobile plan as your needs change. Effortlessly transfer phone number ownership between individuals or plans.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer text-center">
                    <div className="mb-4">
                        <img src="/images/bill.jpg" alt="Service 1" className="w-full h-48 object-cover mb-4" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">Versatile Data Sharing</h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        Why confine data access by user when you can enjoy flexible, shared plans across your entire business? Simplify data management with one plan for multiple devices.
                        </p>
                    </div>

              
                    
                </div>

            </div>
        </div>
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold mb-8 text-center">
                    <span className="text-gray-500">Tariffs as adaptable as your Business</span>
                
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left item-left">
                    {/* Card 1 */}
                    <div className="bg-red-700 text-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                       
                        <h3 className="font-semibold text-lg">Tailored Solutions</h3>
                        <p className=" mt-2 flex-grow">
                        Understanding the needs of the business mobile user, we offer a comprehensive range of versatile mobile tariffs. Additionally, we can tailor a solution to your specific needs, should you require one.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-red-700 text-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                       
                       <h3 className="font-semibold text-lg">Shared and Pooled Data Bundles
                       </h3>
                       <p className=" mt-2 flex-grow">
                       Effortlessly distribute data throughout your complete business mobile network, or enable colleagues within the company to combine their data quotas to make the very best use of your data.
                       </p>
                   </div>

                    {/* Card 3 */}
                    <div className="bg-red-700 text-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                       
                       <h3 className="font-semibold text-lg">Data Only, Fast Start, and Backup
                       </h3>
                       <p className=" mt-2 flex-grow">
                       Data-exclusive packages tailored for a range of devices, encompassing routers, USB dongles, MiFi units, laptops, and mobile phones.
                       </p>
                   </div>

                    {/* Card 4 */}
                    <div className="bg-red-700 text-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                       
                       <h3 className="font-semibold text-lg">Unlimited UK 01, 02, 03, 07 Calls & SMS</h3>
                       <p className=" mt-2 flex-grow">
                       For a consistent and predictable monthly expense, our business mobile plans offer customers unlimited calls and SMS's to a variety of UK numbers.
                       </p>
                   </div>
                    
                </div>
                


            </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between p-8 bg-gray-200">
    <div className="flex-1 mb-8 lg:mb-0">
        <h2 className="text-4xl my-4 font-bold">
            <span className="text-gray-600"> Stay connected, stay productive – Fidelity Group UK is your gateway to seamless business mobile communication.</span>
      
        </h2>
  
    </div>
    <div className="flex-1 flex justify-end mt-14">
    <Link to="/quotes"><button className="bg-red-600 text-white py-4 px-10 rounded-lg transition duration-300 transform hover:bg-blue-900 hover:scale-105">
            Switch Now
        </button>
        </Link>
        <button className="bg-blue-900 text-white py-4 px-14 rounded-lg transition duration-300 transform hover:bg-blue-900 hover:scale-105 ml-6">
            Call Us
        </button>
    </div>
</div>
<section className="py-10 mb-16">
    <h2 className="text-center text-gray-500 text-5xl font-bold mb-6">Business Mobile: Frequently Asked Questions</h2>
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

export default BusinessMobile;
