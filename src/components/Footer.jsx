import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-200">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <h1 className="text-4xl font-bold dark:text-red-500">LOGO</h1>
                        <p className="text-gray-500">Henley: 14 Station Rd, Henley-on-Thames, RG9</p>
                        <p className="text-gray-500">1AY</p>
                        <p className="text-gray-500">London: Fox Court, 14 Grays Inn Rd, London WC1X</p>
                        <p className="text-gray-500">8HN</p>
                        <p className="text-gray-500">Reg. Number: 06765669</p>
                   
                        <a
                            href="https://flowbite.com/"
                            className="text-red-600 hover:text-blue-600 hover:underline transition duration-300"
                        >
                            www.companywebsite.com
                        </a>
                    </div>
                    <div className="grid grid-cols-4 gap-10 sm:gap-10 sm:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-700">Services</h2>
                            <ul className="text-red-600 font-medium">
                                <li className="mb-4">
                                    <a href="/connectivity" className="hover:underline transition duration-300">Connectivity</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/cloud-and-hosting" className="hover:underline transition duration-300">Cloud and Hosting</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/energy" className="hover:underline transition duration-300">Energy</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/iot" className="hover:underline transition duration-300">IoT</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/business-mobile" className="hover:underline transition duration-300">Mobile</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/voice" className="hover:underline transition duration-300">Voice</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/billing" className="hover:underline transition duration-300">Billing</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/payments" className="hover:underline transition duration-300">Payments</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-700">Services</h2>
                            <ul className="text-red-600 font-medium">
                                <li className="mb-4">
                                    <a href="/about-us" className="hover:underline transition duration-300">About</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/contact" className="hover:underline transition duration-300">Contact</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/news" className="hover:underline transition duration-300">Media and News</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/careers" className="hover:underline transition duration-300">Carrers</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://tailwindcss.com/" className="hover:underline transition duration-300">Terms of Use</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/report" className="hover:underline transition duration-300">Privacy Policy</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/report" className="hover:underline transition duration-300">Cookie Policy</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/report" className="hover:underline transition duration-300">Code of Practice</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/voice-over-IP" className="hover:underline transition duration-300">KIT Home VoIP</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-700">Support</h2>
                            <ul className="text-red-600 font-medium">
                                <li className="mb-4">
                                    <a href="https://flowbite.com/" className="hover:underline transition duration-300">Anvil Login</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://tailwindcss.com/" className="hover:underline transition duration-300">RDC Remote Support</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/report" className="hover:underline transition duration-300">Report a Fault</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/emergency-location" className="hover:underline transition duration-300">Emergency Location</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/cloud-fault" className="hover:underline transition duration-300">Cloud Fault</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/emergency-complaints" className="hover:underline transition duration-300">Emergency Complaints Procedure</a>
                                </li>
                              
                            
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M22.5 12a10.5 10.5 0 1 1-21 0 10.5 10.5 0 0 1 21 0zm-3.455 0a7.047 7.047 0 1 0-7.047 7.047 7.047 7.047 0 0 0 7.047-7.047zm-3.455-3.464a3.464 3.464 0 1 0 3.464 3.464 3.465 3.465 0 0 0-3.464-3.464zm-8.63 0a3.464 3.464 0 1 0 3.464 3.464 3.465 3.465 0 0 0-3.464-3.464z" clipRule="evenodd"/>
                            </svg>
                            <span className="sr-only">Instagram page</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
