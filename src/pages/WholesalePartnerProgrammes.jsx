import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Mission from '../components/Mission';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, 
  faLightbulb, 
  faBox, 
  faLaptop, 
  faReceipt, 
  faClock, 
  faUserTie, 
  faChartArea, 
  faWrench ,
  faChevronDown,
  faChevronUp,
  
} from '@fortawesome/free-solid-svg-icons';
const WholesalePartnerProgrammes = () => {
  const [openButtonIndex, setOpenButtonIndex] = useState(null);

  const toggleButton = (index) => {
      if (openButtonIndex === index) {
          setOpenButtonIndex(null);
      } else {
          setOpenButtonIndex(index);
      }
  };

  const buttons = [
      { text: 'Refferal', content: 'Incentive and growth programmes. Sales and product training. Full product suite access. Fidelity branded customer billing. Dual branded customer billing. 24/7/365 customer support service. Inside track market updates.' },
      { text: 'Dealer', content: 'Incentive and growth programmes. Sales and product training. Full product suite access. Anvil Access and training. Dual branded customer billing. 24/7/365 customer support service. Inside track market updates. Dedicated account management. Provisioning and fault management.' },
      { text: 'White Label', content: 'Incentive and growth programmes. Sales and product training. Full product suite access. Anvil Access and training. White label customer billing. 24/7/365 customer support service. Inside track market updates. Dedicated account management.' },
      { text: 'Wholesale', content: 'Incentive and growth programmes. Dual or sole branded marketing collateral. Provisioning and fault management.' },
  ];
  const videos = [
    { id: 'video1', url: 'https://www.youtube.com/watch?v=VIDEO_ID1' },
    { id: 'video2', url: 'https://www.youtube.com/watch?v=VIDEO_ID2' },
    { id: 'video3', url: 'https://www.youtube.com/watch?v=VIDEO_ID3' },
    { id: 'video4', url: 'https://www.youtube.com/watch?v=VIDEO_ID4' },
];

const openVideo = (url) => {
    window.open(url, '_blank');
};
    return (
      
        <div>
          <Header />
          <section className="py-10">
                {/* Section Heading */}
                <div className="text-center mb-14">
                    <p className="text-lg font-bold text-gray-400">
                     
                
Gain <span className="text-red-600">access to competitive wholesale prices</span> from renowned network providers.
                    </p>
                    <h2 className="text-3xl font-bold mt-2 text-gray-600">
                      
                   
                        <span className="text-gray-500"></span>Elevate Your Offering: Unleash Telecom Excellence with our Wholesale Partnership Model
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col md:col-span-2 ml-10">
                        <div className="flex items-center mb-4">
                            <div className="h-36 w-3 bg-blue-900 mr-4"></div> {/* Vertical Blue Line */}
                            <p className="text-gray-800 font-bold text-2xl">
                            We provide professional support to make selling easy for you.
                            </p>
                        </div>
                        
                        {/* Links Section */}
                        <div className="flex flex-col space-y-2 ml-3">
                            <a href="dealer-programme" className="text-red-600 hover:underline">
                                Dealer Programme &gt;
                            </a>
                            <a href="/refferal-partner-programme" className="text-red-600 hover:underline">
                                Referral Partner Programme &gt;
                            </a>
                           
                            <a href="/wholesale-partner-programme" className="text-red-600 hover:underline">
                                Wholsale Partner Programme &gt;
                            </a>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col md:col-span-3">
  
    <p className="text-gray-500 mb-4 text-lg">
    Joining our Wholesale Partnership Program is straightforward. We have designed our wholesale partner program to eliminate convoluted agreements and complex requirements typically associated with partnering with major suppliers.
<br /><br />By joining our wholesale partner programme, you can leverage our strong relationships with all the major network providers in the UK. This means you gain access to their expansive network coverage, dedicated support, and most importantly, wholesale prices.
    </p>
 
</div>

                </div>
            </section>
            <div className="py-16 bg-white">
    <div className="container mx-auto px-4">
        <h2 className="text-left text-xl font-bold mb-12 text-gray-500">
        Why joining our Wholesale partner programme:

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Row 1 */}
            <div className="bg-red-700 text-white p-6 rounded shadow-md flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <FontAwesomeIcon icon={faChartLine} className="text-4xl mb-4" />
                <h3 className="font-semibold text-xl">Incentive & Growth Programs</h3>
            </div>

            <div className="bg-red-700 text-white p-6 rounded shadow-md flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <FontAwesomeIcon icon={faLightbulb} className="text-4xl mb-4" />
                <h3 className="font-semibold text-xl">Sales & Product Training</h3>
            </div>

            <div className="bg-red-700 text-white p-6 rounded shadow-md flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                <FontAwesomeIcon icon={faBox} className="text-4xl mb-4" />
                <h3 className="font-semibold text-xl">Full Product Suite Access</h3>
            </div>


        </div>
        <div className="flex justify-center space-x-6 mt-6"> {/* Center buttons and add spacing between them */}
        <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-14 rounded transition duration-300 ease-in-out hover:bg-blue-900">
        Become a Partner
    </button></Link>
    <button className="border-red-500 bg-white text-red-500 font-semibold py-4 px-14 rounded transition duration-300 ease-in-out hover:bg-blue-900 hover:text-white">
        Speak with a Channel Consultant
    </button>
</div>

    </div>
</div>
<div className="py-16 bg-white">
    <div className="container mx-auto px-4">
        {/* Top Centered Text */}
     

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side Content */}
            <div className="flex flex-col justify-center">
                <p className="text-gray-500 text-lg mb-4 font-bold">
                    Do not settle for less. Partner with the best.
                </p>
                <h3 className="text-4xl font-bold text-gray-500 mb-6">
                Get your copy of our channel <span className="text-red-600">partner brochure.</span>
                </h3>
                <div className="self-start">
                <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-14 rounded transition duration-300 ease-in-out hover:bg-blue-900">
            Get a Copy
        </button>
        </Link>
        </div>
            </div>

            {/* Right Side Image */}
            <div className="flex justify-center md:justify-end">
                <img src="/images/winner1.jpg" alt="Brochure Preview" className="rounded shadow-lg max-w-full h-auto" />
            </div>
        </div>
    </div>
</div>
<Mission />
<div className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-8">
                    Join our White Label Partner Program today and unlock a world of opportunities for your business.
                </h2>
                <div className="flex justify-center space-x-4">
                <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out hover:bg-blue-900">
                        Become a Partner
                    </button></Link>
                    <Link to="/get-copy"><button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out hover:bg-blue-900">
                        Learn More
                    </button>
                    </Link>
                </div>
            </div>
        </div>
<div className="container mx-auto mb-8 mt-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {buttons.map((button, index) => (
                    <div key={index} className="text-center">
                        <button
                            className={`w-full text-xl bg-white text-gray-400 font-bold py-4 px-6 rounded border border-gray-300 transition-colors duration-300 
                                ${openButtonIndex === index ? 'text-red-700' : 'hover:text-red-700'}
                                ${openButtonIndex === index ? 'hover:text-red-700' : 'hover:text-red-700'}
                                ${openButtonIndex === index ? 'hover:text-red-700' : 'hover:text-red-700'}
                                ${openButtonIndex === index ? 'text-blue-600' : ''}`}
                            onClick={() => toggleButton(index)}
                        >
                            <FontAwesomeIcon 
                                icon={openButtonIndex === index ? faChevronUp : faChevronDown} 
                                className={`mr-2 font-bold transition-colors duration-300 ${openButtonIndex === index ? 'text-blue-900' : ''} ${openButtonIndex === index ? 'hover:text-blue-900' : ''}`} 
                            />
                            {button.text}
                        </button>
                        {openButtonIndex === index && (
                            <div className="mt-4 text-gray-600">
                                {button.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
            <h2 className="text-center text-red-600 text-xl mb-12 font-bold">
            Join us today and experience the benefits of our Dealer Partner Program.

        </h2>
        <Link to="/quote"><button
                    className="bg-red-600 text-white border border-gray-300 font-semibold py-3 px-6 rounded transition-colors duration-300 hover:bg-blue-900 hover:text-white"
                >
                    Become a Partner
                </button>
                </Link>
                <Link to="/quote"><button
                    className="bg-white text-red-600 border border-gray-300 font-semibold py-3 px-6 rounded transition-colors duration-300 hover:bg-blue-900 hover:text-white ml-8"
                >
                    Speak with a channel consultant
                </button>
                </Link>
            </div>
        </div>
        
<Footer />
        </div>
    );
};

export default WholesalePartnerProgrammes;
