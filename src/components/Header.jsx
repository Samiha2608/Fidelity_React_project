import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isConnectivitySubDropdownOpen, setIsConnectivitySubDropdownOpen] = useState(false);
    const [isIoTSubDropdownOpen, setIsIoTSubDropdownOpen] = useState(false);
    const [isVoiceSubDropdownOpen, setIsVoiceSubDropdownOpen] = useState(false);
    const [isPaymentsSubDropdownOpen, setIsPaymentsSubDropdownOpen] = useState(false);
    const [isEnergySubDropdownOpen, setIsEnergySubDropdownOpen] = useState(false);
    const [isPartnerProgrammesDropdownOpen, setIsPartnerProgrammesDropdownOpen] = useState(false);
    const [isPartnerProgrammesSubDropdownOpen, setIsPartnerProgrammesSubDropdownOpen] = useState(false);
    const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
    const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false);

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white border-gray-200 z-50 relative">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <Link to="/" className="text-4xl font-bold text-red-500">LOGO</Link>
                <button 
                    onClick={toggleMobileMenu} 
                    className="md:hidden p-2 text-red-500 focus:outline-none"
                >
                    <svg 
                        className="w-6 h-6" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <div className="w-full md:block md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'}">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li
                            onMouseEnter={() => setIsServicesDropdownOpen(true)}
                            onMouseLeave={() => setIsServicesDropdownOpen(false)}
                        >
                            <Link to="/services">
                                <button className="flex items-center justify-between w-full py-3 px-3 text-black hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">
                                    Services 
                                    <svg className="w-3 h-3 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                            </Link>
                            {isServicesDropdownOpen && (
                                <div className="z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-64">
                                    <ul className="py-2 text-sm text-black">
                                        <li
                                            onMouseEnter={() => setIsConnectivitySubDropdownOpen(true)}
                                            onMouseLeave={() => setIsConnectivitySubDropdownOpen(false)}
                                        >
                                            <Link to ="/connectivity"><button className="flex items-center justify-between w-full px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">
                                                Connectivity <svg className="w-3 h-3 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                </svg>
                                            </button></Link>
                                            {isConnectivitySubDropdownOpen && (
                                                <div className="absolute left-full top-0 ml-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-64" style={{ marginTop: '0' }}>
                                                    <ul className="py-2 text-sm text-black">
                                                        <li>
                                                            <Link to="/sogea-broadband" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">SoGEA Broadband</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/fibre-to-the-premises" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Fibre to the Premises Broadband</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/leased-line-fibre" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Dedicated Leased Line Fiber</Link>
                                                        </li>
                                                    </ul>
                                                    <div className="h-1 bg-red-500"></div>
                                                </div>
                                            )}
                                        </li>
                                        <li
                                            onMouseEnter={() => setIsIoTSubDropdownOpen(true)}
                                            onMouseLeave={() => setIsIoTSubDropdownOpen(false)}
                                        >
                                            <Link to= "/iot"><button className="flex items-center justify-between w-full px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">
                                                IoT <svg className="w-3 h-3 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                </svg>
                                            </button>
                                            </Link>
                                            {isIoTSubDropdownOpen && (
                                                <div className="absolute left-full top-0 ml-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-64" style={{ marginTop: '0' }}>
                                                    <ul className="py-2 text-sm text-black">
                                                        <li>
                                                            <Link to="/iot" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">IoT Connectivity and Solutions</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/iot-starter-pack" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">IoT Starter Pack</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/vm2m" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">vM2M</Link>
                                                        </li>
                                                    </ul>
                                                    <div className="h-1 bg-red-500"></div>
                                                </div>
                                            )}
                                        </li>
                                        <li
                                            onMouseEnter={() => setIsVoiceSubDropdownOpen(true)}
                                            onMouseLeave={() => setIsVoiceSubDropdownOpen(false)}
                                        >
                                            <Link to="/voice"><button className="flex items-center justify-between w-full px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">
                                                Voice <svg className="w-3 h-3 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                </svg>
                                            </button>
                                            </Link>
                                            {isVoiceSubDropdownOpen && (
                                                <div className="absolute left-full top-0 ml-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-64" style={{ marginTop: '0' }}>
                                                    <ul className="py-2 text-sm text-black">
                                                        <li>
                                                            <Link to="/voice-over-IP" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Voice Over IP</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/trunk-call-manager" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">SIP Trunk Call Manager</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/non-geographic-numbers" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Non-geographic numbers</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/contact-center-solutions" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Contact center solutions</Link>
                                                        </li>
                                                    </ul>
                                                    <div className="h-1 bg-red-500"></div>
                                                </div>
                                            )}
                                        </li>
                                        <li
                                            onMouseEnter={() => setIsPaymentsSubDropdownOpen(true)}
                                            onMouseLeave={() => setIsPaymentsSubDropdownOpen(false)}
                                        >
                                           <Link to ="/payments"><button className="flex items-center justify-between w-full px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">
                                                Payments <svg className="w-3 h-3 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                </svg>
                                            </button>
                                            </Link>
                                            {isPaymentsSubDropdownOpen && (
                                                <div className="absolute left-full top-0 ml-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-64" style={{ marginTop: '0' }}>
                                                    <ul className="py-2 text-sm text-black">
                                                        <li>
                                                            <Link to="/mobile-card-payment" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Mobile Card Payment Terminals</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/virtual-terminal" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Virtual Terminal</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/pay-by-link" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Pay by Link</Link>
                                                        </li>
                                                    </ul>
                                                    <div className="h-1 bg-red-500"></div>
                                                </div>
                                            )}
                                        </li>
                                        <li
                                            onMouseEnter={() => setIsEnergySubDropdownOpen(true)}
                                            onMouseLeave={() => setIsEnergySubDropdownOpen(false)}
                                        >
                                            <Link to ="/energy"><button className="flex items-center justify-between w-full px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">
                                                Energy <svg className="w-3 h-3 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                </svg>
                                            </button>
                                            </Link>
                                            {isEnergySubDropdownOpen && (
                                                <div className="absolute left-full top-0 ml-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-64" style={{ marginTop: '0' }}>
                                                    <ul className="py-2 text-sm text-black">
                                                        <li>
                                                            <Link to="/business-gas" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Business Gas</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/business-electricity" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Business Electricity</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/ev-charge-points" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">EV Charge Points</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/green-energy" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Green Energy</Link>
                                                        </li>
                                                    </ul>
                                                    
                                                    <div className="h-1 bg-red-500"></div>
                                                </div>
                                            )}
                                        </li>
                                        <li>
                                            <Link to="/business-mobile" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Business Mobile</Link>
                                            <Link to="/cloud-and-hosting" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Cloud, Hosting, Security</Link>
                                            <Link to="/partner3" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Billing</Link>
                                        </li>
                                    </ul>
                                    <div className="h-1 bg-red-500"></div>
                                </div>
                            )}
                        </li>
                        <li
    onMouseEnter={() => setIsPartnerProgrammesDropdownOpen(true)}
    onMouseLeave={() => setIsPartnerProgrammesDropdownOpen(false)}
    className="relative"
>
    <Link to="/partner-programmes">
        <button className="flex items-center justify-between w-full py-3 px-3 text-black hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">
            Partner Programmes 
            <svg className="w-3 h-3 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
        </button>
    </Link>
    {isPartnerProgrammesDropdownOpen && (
        <div
            className="z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-64"
            onMouseEnter={() => setIsPartnerProgrammesDropdownOpen(true)}
            onMouseLeave={() => setIsPartnerProgrammesDropdownOpen(false)}
        >
            <ul className="py-2 text-sm text-black">
                <li
                    onMouseEnter={() => setIsPartnerProgrammesSubDropdownOpen(true)}
                    onMouseLeave={() => setIsPartnerProgrammesSubDropdownOpen(false)}
                    className="relative"
                >
                    <Link to="/partner-programmes">
                        <button className="flex items-center justify-between w-full px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">
                            Partner Programmes 
                            <svg className="w-3 h-3 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                    </Link>
                    {isPartnerProgrammesSubDropdownOpen && (
                        <div
                            className="absolute left-full top-0 ml-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-64"
                            onMouseEnter={() => setIsPartnerProgrammesSubDropdownOpen(true)}
                            onMouseLeave={() => setIsPartnerProgrammesSubDropdownOpen(false)}
                        >
                            <ul className="py-2 text-sm text-black">
                                <li>
                                    <Link to="/dealer-programme" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Dealer Programme</Link>
                                </li>
                                <li>
                                    <Link to="/refferal-partner-programme" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Referral Partner Programme</Link>
                                </li>
                                <li>
                                    <Link to="/wholesale-partner-programme" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Wholesale Partner Programme</Link>
                                </li>
                            </ul>
                            <div className="h-1 bg-red-500"></div>
                        </div>
                    )}
                </li>
                <li>
                    <Link to="/iot-connectivity" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">IoT Connectivity and Solutions</Link>
                </li>
                <li>
                    <Link to="/selling-payments" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Selling Payments</Link>
                </li>
                <li>
                    <Link to="/partner3" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">White Label Solutions</Link>
                </li>
            </ul>
            <div className="h-1 bg-red-500"></div>
        </div>
    )}
</li>

                        <li
                            onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                            onMouseLeave={() => setIsCompanyDropdownOpen(false)}
                        >
                            <Link to="/company">
                                <button className="flex items-center justify-between w-full py-3 px-3 text-black hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">
                                    Company 
                                    <svg className="w-3 h-3 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                            </Link>
                            {isCompanyDropdownOpen && (
                                <div className="z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-64">
                                    <ul className="py-2 text-sm text-black">
                                        <li>
                                            <Link to="/about-us" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">About Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/leadership" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Leadership Team</Link>
                                        </li>
                                        <li>
                                            <Link to="/careers" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Careers</Link>
                                        </li>
                                        <li>
                                            <Link to="/case-study" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Case Studies</Link>
                                        </li>
                                        <li>
                                            <Link to="/news" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Insights and News</Link>
                                        </li>
                                    </ul>
                                    <div className="h-1 bg-red-500"></div>
                                </div>
                            )}
                        </li>
                        <li
                            onMouseEnter={() => setIsSupportDropdownOpen(true)}
                            onMouseLeave={() => setIsSupportDropdownOpen(false)}
                        >
                            <Link to="/support"><button className="flex items-center justify-between w-full py-3 px-3 text-black hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">
                                Support <svg className="w-3 h-3 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button></Link>
                        
                            {isSupportDropdownOpen && (
                                <div className="z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-64">
                                    <ul className="py-2 text-sm text-black">
                                       
                                        <li>
                                                            <Link to="/report" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Report a Fault</Link>
                                                        </li>

                                                        <li>
                                                            <Link to="/emergency-location" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Emergency Location</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/cloud-fault" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Cloud Fault</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/business-mobile" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">Anvil Login</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/business-mobile" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">RDC Remote Support</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/business-mobile" className="block px-6 py-4 hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">
                                                            Terms and Conditions</Link>
                                                        </li>
                                    </ul>
                                    <div className="h-1 bg-red-500"></div>
                                </div>
                            )}
                        </li>
                        <li>
                            <Link to="/contact"> <button className="flex items-center justify-between w-full py-3 px-3 text-black hover:text-red-500 hover:underline decoration-red-500 decoration-2 transition-all duration-300 text-lg">
                                Contact 
                            </button></Link>
                       
                        
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
