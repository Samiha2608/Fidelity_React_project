import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCogs, faShieldAlt, faUsers, faChevronDown, faCheck  } from '@fortawesome/free-solid-svg-icons';
const SoGEABroardband = () => {
    const [visibleSection, setVisibleSection] = useState(null);

    const handleSectionToggle = (section) => {
        setVisibleSection(visibleSection === section ? null : section);
    };
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
      <Header /> {/* Import the Header component */}

      <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/partner.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white p-8">
              <h1 className="text-5xl font-bold mb-4 text-white">
              SoGEA Broadband – super fast business broadband for
              </h1>
              <h1 className="text-8xl font-bold mb-4 text-white">
              £29 per month
              </h1>
              <p>for a superfast 80/20mbps connection</p>
              <div className="flex space-x-4 mt-4">
              <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-900 hover:scale-105">
                      Speak with an Expert
                  </button></Link>
                  <button className="bg-white text-red-500 font-semibold py-4 px-16 rounded transition duration-300 ease-in-out transform hover:bg-red-500 hover:text-white hover:scale-105">
                    Call Us
                  </button>
              </div>
          </div>
      </div>
      <section className="py-10">
                {/* Section Heading */}
                <div className="text-center mb-14">
                    <p className="text-lg font-bold text-gray-400">
                    Business Fibre, Data and Connectivity Packages in the UK.
                    </p>
                    <h2 className="text-4xl font-bold mt-2 text-gray-600">
                        <span className="text-gray-500">SoGEA broadband: a </span>
                        <span className="text-red-500">cost-effective</span>
                        <span className="text-gray-500">  business solution </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col md:col-span-2 ml-10">
                        <div className="flex items-center mb-4 font-bold">
                            <div className="h-24 w-2 bg-blue-900 mr-4"></div> {/* Vertical Blue Line */}
                            <p className="text-gray-800 font-bold text-2xl">
                                <span className="text-red-500">SoGEA </span><span className="text-gray-600">broadband delivers the same performance and data rates as FTTC broadband.</span>
                            </p>
                        </div>
                        
                   
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col md:col-span-3">
 
    <p className="text-gray-500 mb-4 text-lg">
    Discover the best business broadband deals with SoGEA broadband, the Single Order Generic Ethernet Access solution from Fidelity Group. With speed up to 80Mbps, it’s a top choice for businesses looking for affordable broadband. Enjoy the same performance as FTTC (fibre to the cabinet) with just one order and no need for an analogue phone line. <br /> The network availability of SoGEA broadband is comparable to fibre broadband. SoGEA provides a more robust and future-proof connectivity solution as the United Kingdom transitions to an all-IP network. <br /><br /> Whether you’re searching for cheap broadband deals, the fastest broadband in your area, or the best broadband provider, Fidelity Group has you covered, with SoGEA broadband.
    </p>
    <div className="self-start"> {/* Align button to the start of the column */}
    <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-14 rounded transition duration-300 ease-in-out hover:bg-blue-900">
            Get a quote
        </button>
        </Link>
    </div>
</div>

                </div>
            </section>
            <div className="py-16 bg-gray-200">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">
                    <span className="text-gray-600">Why Fidelity for your</span>
                    <span className="text-red-600">  SoGEA connection</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faLightbulb} className="text-red-600 text-3xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">Cheapest broadband deal</h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        Fidelity's SoGEA service provides a comprehensive and reliable solution for your business communication. The high-performance platform enables seamless integration of communication applications via ethernet cables, such as videoconferencing and voice calls, and delivers increased internet speeds and reliability at a cost-effective monthly rate.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faCogs} className="text-red-600 text-3xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">Deal with only one broadband provider</h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        Maximize your business communication capabilities by consolidating all services into a comprehensive solution. Say goodbye to the difficulties posed by multiple contracts and different providers for your line rental and broadband service providers.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faShieldAlt} className="text-red-600 text-3xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">Increased reliability</h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        SoGEA is using an established network without the addition of a phone line so the chance of interference or an unstable connection is lower.

                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white p-6 rounded shadow-md flex flex-col transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faUsers} className="text-red-600 text-3xl" />
                        </div>
                        <h3 className="text-gray-600 font-semibold text-2xl">Future-proof connectivity</h3>
                        <p className="text-gray-600 mt-2 flex-grow">
                        As the phase-out of the PSTN network approaches 2025, it is of utmost importance for businesses to adopt a forward-thinking and future-proof connectivity solution. Fidelity offers a comprehensive array of broadband and ethernet connections that operate independently of the PSTN network, providing a reliable and robust broadband solution for your business communication needs.
                        </p>
                    </div>
                    
                </div>

            </div>
        </div>
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
    onClick={() => handleSectionToggle('sogeaBroadband')}
    className={`bg-white border border-gray-300 text-gray-800 text-lg font-semibold py-2 px-20 rounded transition duration-300 ease-in-out hover:text-red-500 hover:border-red-600 ${
        visibleSection === 'sogeaBroadband' ? 'bg-red-600 text-red-600 border-red-600' : 'hover:bg-white hover:text-red-600 hover:border-red-600'
    }`}
>
    What is SoGEA Broadband?
</button>
<button 
    onClick={() => handleSectionToggle('whySogea')}
    className={`bg-white border border-gray-300 text-gray-800 text-lg font-semibold py-2 px-20 rounded transition duration-300 ease-in-out ${
        visibleSection === 'whySogea' ? 'bg-red-600 text-red-600 border-red-600' : 'hover:bg-white hover:text-red-600 hover:border-red-600'
    }`}
>
    Why was SoGEA created?
</button>
<button 
    onClick={() => handleSectionToggle('needSogea')}
    className={`bg-white border border-gray-300 text-gray-800 text-lg font-semibold py-2 px-20 rounded transition duration-300 ease-in-out ${
        visibleSection === 'needSogea' ? 'bg-red-600 text-red-600 border-red-600' : 'hover:bg-white hover:text-red-600 hover:border-red-600'
    }`}
>
    Why do you need SoGEA?
</button>

            </div>

     

            {/* SoGEA Broadband Section */}
            {visibleSection === 'sogeaBroadband' && (
                <div className="mt-10 flex transition-opacity duration-500">
                    <div className="w-1/2 pr-4"> {/* Added padding-right to create space */}
                        <img src="/images/mission.jpg" alt="SoGEA Broadband" className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="w-1/2 p-4">
                        <h3 className="text-3xl font-bold mb-4">What is SoGEA Broadband?</h3>
                        <p className="text-gray-500 text-xl mb-4 leading-relaxed">
                            SoGEA stands for Single Order Generic Ethernet Access. Until now you needed to have a traditional phone line installed to deliver broadband to a home or office, but SoGEA broadband doesn’t run over a phone line; instead, it uses the same fibre/copper network without the WLR (Wholesale Line Rental = Phone line) element.
                        </p>
                        <p className="text-gray-500 text-xl mb-4 leading-relaxed">
                            SoGEA is offered at the same data rates as FTTC broadband. It delivers the same performance and has the same geographic availability. The only difference is the need for a phone line has been removed.
                        </p>
                        <p className="text-gray-500 text-xl leading-relaxed">
                            SoGEA is a dedicated line that delivers a broadband connection and includes an underlying version of a phone line. This means that customers moving to SoGEA from a phoneline-reliant broadband solution will need a voice call service that uses VoIP (Voice over Internet Protocol) to continue to be able to make and receive phone calls.
                        </p>
                    </div>
                </div>
            )}

            {/* Why SoGEA Created Section */}
            {visibleSection === 'whySogea' && (
                <div className="mt-10 flex transition-opacity duration-500">
                    <div className="w-1/2 pr-4"> {/* Added padding-right to create space */}
                        <img src="/images/partner.jpg" alt="Why SoGEA was created" className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="w-1/2 p-4">
                        <h3 className="text-3xl font-bold mb-4">Why was SoGEA created?</h3>
                        <p className="text-gray-500 text-xl mb-4 leading-relaxed">
                            In December 2025, the UK PSTN circuits will be shut off completely. This is a major step towards the United Kingdom’s mass IP-network migration, with VoIP core networks set to replace all the legacy PSTN services.
                        </p>
                        <p className="text-gray-500 text-xl leading-relaxed">
                            It means that there is a significant opportunity in terms of both new and existing business. All existing WLR customers need migrating to a non-WLR solution, many in the next 12-24 months as OpenReach continue to service notice on exchanges across the country. And there are around 3 million B2B PSTN and ISDN fixed lines that must be migrated by 2025, so plenty of new business to be won.
                        </p>
                        <p className="text-gray-500 text-xl leading-relaxed">
                            SoGEA provides a broadband solution using the existing fibre/copper network, where fibre to the premises (FTTP) is not yet available.
                        </p>
                    </div>
                </div>
            )}

            {/* Why You Need SoGEA Section */}
            {visibleSection === 'needSogea' && (
                <div className="mt-10 flex transition-opacity duration-500">
                    <div className="w-1/2 pr-4"> {/* Added padding-right to create space */}
                        <img src="/images/winner2.jpg" alt="Why you need SoGEA" className="w-full h-auto rounded-lg" />
                    </div>
                    <div className="w-1/2 p-4">
                        <h3 className="text-3xl font-bold mb-4">Why do you need SoGEA?</h3>
                        <p className="text-gray-500 text-xl mb-4 leading-relaxed">
                            In 2017, British Telecom announced their intention to switch off the existing telephone network completely, having migrated all services to the newer and more efficient fibre broadband network. Therefore, come December 2025 the entire UK Wholesale Line Rental network will cease to exist.
                        </p>
                        <p className="text-gray-500 text-xl leading-relaxed">
                            However, it would be a mistake to think about waiting until nearer the 2025 deadline, as the migration of services is happening today and will pick up pace from June 2021 when notice is served on more than a hundred phone exchanges across the country.
                        </p>
                        <p className="text-gray-500 text-xl leading-relaxed">
                            As such, there is a pressing need to migrate to an IP solution today and start using either SoGEA broadband or FTTP now, ahead of the withdrawal of the WLR network.
                        </p>
                    </div>
                </div>
            )}
        </section>
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
<div className="flex flex-col lg:flex-row items-start justify-between p-8 bg-gray-200">
    <div className="flex-1 mb-8 lg:mb-0">
        <h2 className="text-4xl my-4 font-bold">
            <span className="text-gray-600"> Connect to our latest</span>
            <span className="text-red-500"> business Internet </span>
            <span className="text-gray-600">deals</span>
        </h2>
  
    </div>
    <div className="flex-1 flex justify-end">
    <Link to="/quote"><button className="bg-red-600 text-white py-4 px-10 rounded-lg transition duration-300 transform hover:bg-blue-900 hover:scale-105">
            Get Promo
        </button>
        </Link>
        <button className="bg-blue-900 text-white py-4 px-14 rounded-lg transition duration-300 transform hover:bg-blue-900 hover:scale-105 ml-6">
            Call Us
        </button>
    </div>
</div>

<Testimonials />
<ContactUs />
      <Footer />
        </div>
    );
};

export default SoGEABroardband;
