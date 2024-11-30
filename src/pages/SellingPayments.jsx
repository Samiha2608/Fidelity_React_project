import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd, faCashRegister, faShoppingCart, faHandshake , faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
const SellingPayments = () => {
 
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
    return (
        <div>
            <Header />
            <section className="py-10">
                {/* Section Heading */}
                <div className="text-center mb-14">
                    <p className="text-lg font-bold text-gray-400">
                        Unlock Limitless Earning Potential with Fidelity Partnerships
                    </p>
                    <h2 className="text-3xl font-bold mt-2 text-gray-600">
                        <span className="text-gray-500">Maximise Your Profits with Fidelity Payment Solutions</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col md:col-span-2 ml-10">
                        <div className="flex items-center mb-4">
                            <div className="h-16 w-1 bg-blue-900 mr-4"></div> {/* Vertical Blue Line */}
                            <p className="font-bold text-2xl">
                                <span className="text-gray-500">Unleash </span>
                                <span className="text-red-500">Unlimited Earnings</span>
                                <span className="text-gray-500"> with Our Revolutionary Payment Solutions</span>
                            </p>
                        </div>

                        {/* Image Section */}
                        <img src="/images/bill.jpg" alt="Payment Solutions" className="w-full h-auto rounded" />
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col md:col-span-3">
                        <p className="text-gray-500 mb-4 text-lg">
                            The UK payment industry, valued at an impressive £12 billion, is experiencing a remarkable surge as innovative payment providers and cutting-edge solutions continue to emerge.
                            <br /><br />
                            Every UK-based business necessitates a payment acceptance method, such as a Chip and Pin machine, a website gateway, a pay-by-link system, or an ordering app connected to a QR code, as customers increasingly opt for cashless transactions. Debit and credit cards have emerged as the favoured means of conducting payments.
                            <br /><br />
                            To process these card payments, customers must secure authorization from an acquiring bank, which assesses multiple factors before granting approval. Acquiring banks subsequently impose flat-rate fees for both business and personal bank cards, with these charges being deducted monthly via a statement. 
                            <br /><br />
                            Fidelity Group has established strategic partnerships with industry-leading software providers and acquiring banks, ensuring enhanced value for both your customers and your business.
                        </p>
                        <div className="self-start space-x-6"> {/* Add spacing between buttons */}
                        <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-14 rounded transition duration-300 ease-in-out hover:bg-blue-900">
                                Become a partner
                            </button></Link>
                            <Link to="/quote"><button className="bg-white text-red-500 font-semibold py-4 px-14 rounded border border-gray-400 transition duration-300 ease-in-out hover:bg-blue-900 hover:text-white">
                                Speak with a Channel Consultant
                            </button></Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold mb-8 text-center">
                    <span className="text-gray-500">Maximize Your Business Potential</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left item-left">
                    {/* Card 1 */}
                    <div className="bg-red-700 text-white px-6 py-16 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <FontAwesomeIcon icon={faHandHoldingUsd} size="8x" className="mb-4" /> {/* Big Sized Icon */}
                        <p className="text-center mt-2">
                            We share our residuals with you, including revenue from ancillary services and paper statements.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-red-700 text-white  px-6 py-16 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <FontAwesomeIcon icon={faCashRegister} size="8x" className="mb-4" /> {/* Big Sized Icon */}
                        <p className="text-center mt-2">
                            Earn upfront commissions from payment terminal sales.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-red-700 text-white  px-6 py-16 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <FontAwesomeIcon icon={faShoppingCart} size="8x" className="mb-4" /> {/* Big Sized Icon */}
                        <p className="text-center mt-2">
                            Receive ongoing transaction commissions for every purchase made by your customers.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-red-700 text-white  px-6 py-16 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <FontAwesomeIcon icon={faHandshake} size="8x" className="mb-4" /> {/* Big Sized Icon */}
                        <p className="text-center mt-2">
                            Access a network of 15 acquiring banks, allowing us to cater to all business types and offer the most competitive rates in the market.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left item-left mt-8">
                    {/* Repeat the above cards in the second row */}
                    <div className="bg-red-700 text-white  px-6 py-16 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <FontAwesomeIcon icon={faHandHoldingUsd} size="8x" className="mb-4" /> {/* Big Sized Icon */}
                        <p className="text-center mt-2">
                            We share our residuals with you, including revenue from ancillary services and paper statements.
                        </p>
                    </div>

                    <div className="bg-red-700 text-white  px-6 py-16 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <FontAwesomeIcon icon={faCashRegister} size="8x" className="mb-4" /> {/* Big Sized Icon */}
                        <p className="text-center mt-2">
                            Earn upfront commissions from payment terminal sales.
                        </p>
                    </div>

                    <div className="bg-red-700 text-white  px-6 py-16 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <FontAwesomeIcon icon={faShoppingCart} size="8x" className="mb-4" /> {/* Big Sized Icon */}
                        <p className="text-center mt-2">
                            Receive ongoing transaction commissions for every purchase made by your customers.
                        </p>
                    </div>

                    <div className="bg-red-700 text-white px-6 py-16 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
                        <FontAwesomeIcon icon={faHandshake} size="8x" className="mb-4" /> {/* Big Sized Icon */}
                        <p className="text-center mt-2">
                            Access a network of 15 acquiring banks, allowing us to cater to all business types and offer the most competitive rates in the market.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full py-12" style={{ background: 'linear-gradient(to right, #FF4500, #FFA500)' }}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-start">
                    <div className="text-white">
                        <h2 className="text-5xl font-bold">
                            Clear and Comprehensive:
                        </h2>
                        <p className="text-4xl mt-4">
                            Our Dual-Faceted Commission Structure
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-16 bg-gray-100">
            {/* Top Line */}
            <div className="w-fullpy-4">
                <p className="text-left text-gray-500 text-lg ml-8">
                    We distribute commissions in a two-part structure and take great pride in maintaining full transparency regarding all commission reports and payments, including the methods by which they are generated.
                </p>
            </div>

            {/* Cards Section */}
            <div className="container mx-auto px-4 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-gradient-to-r from-blue-900 to-blue-500 text-white p-6 rounded-lg shadow-lg flex flex-col">
                        <h3 className="text-xl font-bold mb-4">Residuals</h3>
                        <p className="flex-grow">
                            We share our residuals with you, encompassing ancillary fees, paper statement charges, and any additional revenue we obtain. Our aim is to encourage proper pricing for all merchants, as we strive to secure a mutually beneficial margin for both parties.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gradient-to-r from-blue-900 to-blue-500 text-white p-6 rounded-lg shadow-lg flex flex-col">
                        <h3 className="text-xl font-bold mb-4">Terminal Commissions</h3>
                        <p className="flex-grow">
                            Terminal commissions are provided upfront and calculated based on a 48-month matrix. Should you sell contracts for 12, 24, or 36 months, the commissions will be proportionally adjusted to reflect the respective durations.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gradient-to-r from-blue-900 to-blue-500 text-white p-6 rounded-lg shadow-lg flex flex-col">
                        <h3 className="text-xl font-bold mb-4">Bonus</h3>
                        <p className="flex-grow">
                            As a performance incentive, delivering ten new live deals each month will increase your residual by 5% up to a maximum of 75%. However, if you have two consecutive months without meeting this target, your percentage will decrease by 5% each consecutive month until it reaches a minimum of 50%.
                        </p>
                    </div>
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
            <Link to="/quote"><button
                    className="bg-white text-red-700 border border-gray-300 font-semibold py-3 px-6 rounded transition-colors duration-300 hover:bg-blue-900 hover:text-white"
                >
                    Speak with a channel consultant
                </button></Link>
            </div>
        </div>
        <div className="bg-gray-200 py-12 mb-16">
    <div className="container mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left side text */}
        <div className="text-left md:w-2/3">
            <h2 className="text-3xl font-bold">
                Empowering <span className="text-red-700">Partners </span> 
                <br className="md:hidden" /> 
                Join Club Fidelity
            </h2>
            <p className="mt-4 text-lg text-gray-600">
                The most customer centric <span className="text-red-700">reseller partner programme</span> in the United Kingdom.
            </p>
        </div>

        {/* Right side button */}
        <div className="mt-8 md:mt-0 md:w-1/3 text-right">
        <Link to="/get-copy"> <button
                className="bg-red-700 text-white font-semibold py-3 px-6 rounded transition-colors duration-300 hover:bg-blue-900 hover:text-white"
            >
                Download Our Brochure
            </button>
            </Link>
        </div>
    </div>
</div>

            <Footer />
        </div>
    );
};

export default SellingPayments;
