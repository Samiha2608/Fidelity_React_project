import React from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
    return (
        <ul className="flex space-x-4 relative group">
            <li className="group">
                <Link to="/services" className="hover:text-gray-400">Services</Link>
                <ul className="absolute left-0 hidden bg-gray-700 text-white group-hover:block">
                    <li className="p-2">
                        <Link to="/services/connectivity" className="hover:text-gray-400">Connectivity</Link>
                        <ul className="ml-4">
                            <li><Link to="/services/sogeabroadband" className="block px-4 py-2 hover:text-gray-400">SoGEA Broadband</Link></li>
                            <li><Link to="/services/fibre" className="block px-4 py-2 hover:text-gray-400">Fibre to the Premises Broadband</Link></li>
                            <li><Link to="/services/dedicatedleasedline" className="block px-4 py-2 hover:text-gray-400">Dedicated Leased Line Fibre</Link></li>
                        </ul>
                    </li>
                    <li className="p-2">
                        <Link to="/services/iot" className="hover:text-gray-400">IoT</Link>
                        <ul className="ml-4">
                            <li><Link to="/services/iotconnectivity" className="block px-4 py-2 hover:text-gray-400">IoT Connectivity and Solutions</Link></li>
                            <li><Link to="/services/iotstarterpack" className="block px-4 py-2 hover:text-gray-400">IoT Starter Pack</Link></li>
                            <li><Link to="/services/vm2m" className="block px-4 py-2 hover:text-gray-400">vM2M</Link></li>
                        </ul>
                    </li>
                    <li className="p-2">
                        <Link to="/services/voice" className="hover:text-gray-400">Voice</Link>
                        <ul className="ml-4">
                            <li>
                                <Link to="/services/voip" className="block px-4 py-2 hover:text-gray-400">Voice Over IP</Link>
                                <ul className="ml-4">
                                    <li><Link to="/services/voipsme" className="block px-4 py-2 hover:text-gray-400">VoIP for SME</Link></li>
                                    <li><Link to="/services/voipenterprises" className="block px-4 py-2 hover:text-gray-400">VoIP for Enterprises</Link></li>
                                    <li><Link to="/services/microsoftteams" className="block px-4 py-2 hover:text-gray-400">Microsoft Teams</Link></li>
                                    <li><Link to="/services/keeptouch" className="block px-4 py-2 hover:text-gray-400">Keep in Touch</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/services/siptrunk" className="block px-4 py-2 hover:text-gray-400">SIP Trunk call manager</Link></li>
                            <li><Link to="/services/nonnumbers" className="block px-4 py-2 hover:text-gray-400">Non-geographic numbers</Link></li>
                            <li><Link to="/services/contactcentre" className="block px-4 py-2 hover:text-gray-400">Contact centre solutions</Link></li>
                        </ul>
                    </li>
                    <li className="p-2">
                        <Link to="/services/payments" className="hover:text-gray-400">Payments</Link>
                        <ul className="ml-4">
                            <li><Link to="/services/merchantpayments" className="block px-4 py-2 hover:text-gray-400">Merchant Payment Solutions</Link></li>
                            <li><Link to="/services/mobilecard" className="block px-4 py-2 hover:text-gray-400">Mobile Card Payment Terminals</Link></li>
                            <li><Link to="/services/virtualterminal" className="block px-4 py-2 hover:text-gray-400">Virtual Terminal</Link></li>
                            <li><Link to="/services/paybylink" className="block px-4 py-2 hover:text-gray-400">Pay by Link</Link></li>
                        </ul>
                    </li>
                    <li className="p-2">
                        <Link to="/services/energy" className="hover:text-gray-400">Energy</Link>
                        <ul className="ml-4">
                            <li><Link to="/services/businessgas" className="block px-4 py-2 hover:text-gray-400">Business Gas</Link></li>
                            <li><Link to="/services/businesselectricity" className="block px-4 py-2 hover:text-gray-400">Business Electricity</Link></li>
                            <li><Link to="/services/evchargepoints" className="block px-4 py-2 hover:text-gray-400">EV Charge Points</Link></li>
                            <li><Link to="/services/greenenergy" className="block px-4 py-2 hover:text-gray-400">Green Energy</Link></li>
                        </ul>
                    </li>
                    <li className="p-2"><Link to="/services/businessmobile" className="block px-4 py-2 hover:text-gray-400">Business Mobile</Link></li>
                    <li className="p-2"><Link to="/services/cloudhosting" className="block px-4 py-2 hover:text-gray-400">Cloud, Hosting and Security</Link></li>
                    <li className="p-2"><Link to="/services/billing" className="block px-4 py-2 hover:text-gray-400">Billing</Link></li>
                </ul>
            </li>
            <li className="group">
                <Link to="/partner-programmes" className="hover:text-gray-400">Partner Programmes</Link>
                <ul className="absolute left-0 hidden bg-gray-700 text-white group-hover:block">
                    <li className="p-2"><Link to="/partner-programmes/dealer" className="block px-4 py-2 hover:text-gray-400">Dealer Programme</Link></li>
                    <li className="p-2"><Link to="/partner-programmes/referral" className="block px-4 py-2 hover:text-gray-400">Referral Partner Programme</Link></li>
                    <li className="p-2"><Link to="/partner-programmes/wholesale" className="block px-4 py-2 hover:text-gray-400">Wholesale Partner Programme</Link></li>
                    <li className="p-2"><Link to="/partner-programmes/iot" className="block px-4 py-2 hover:text-gray-400">IoT Connectivity and Solutions</Link></li>
                    <li className="p-2"><Link to="/partner-programmes/selling" className="block px-4 py-2 hover:text-gray-400">Selling Payments</Link></li>
                    <li className="p-2"><Link to="/partner-programmes/billing" className="block px-4 py-2 hover:text-gray-400">Billing, CRM and Provisioning Platform</Link></li>
                </ul>
            </li>
            <li className="group">
                <Link to="/company" className="hover:text-gray-400">Company</Link>
                <ul className="absolute left-0 hidden bg-gray-700 text-white group-hover:block">
                    <li className="p-2"><Link to="/company/about" className="block px-4 py-2 hover:text-gray-400">About us</Link></li>
                    <li className="p-2"><Link to="/company/leadership" className="block px-4 py-2 hover:text-gray-400">Leadership Team</Link></li>
                    <li className="p-2"><Link to="/company/careers" className="block px-4 py-2 hover:text-gray-400">Careers</Link></li>
                    <li className="p-2"><Link to="/company/casestudies" className="block px-4 py-2 hover:text-gray-400">Case Studies</Link></li>
                    <li className="p-2"><Link to="/company/insights" className="block px-4 py-2 hover:text-gray-400">Insights and News</Link></li>
                </ul>
            </li>
            <li className="group">
                <Link to="/support" className="hover:text-gray-400">Support</Link>
                <ul className="absolute left-0 hidden bg-gray-700 text-white group-hover:block">
                    <li className="p-2"><Link to="/support/reportfault" className="block px-4 py-2 hover:text-gray-400">Report a Fault</Link></li>
                    <li className="p-2"><Link to="/support/emergency" className="block px-4 py-2 hover:text-gray-400">Emergency Location</Link></li>
                    <li className="p-2"><Link to="/support/cloudfault" className="block px-4 py-2 hover:text-gray-400">Cloud Fault</Link></li>
                    <li className="p-2"><Link to="/support/anvillogin" className="block px-4 py-2 hover:text-gray-400">Anvil Login</Link></li>
                    <li className="p-2"><Link to="/support/rdc" className="block px-4 py-2 hover:text-gray-400">RDC Remote Support</Link></li>
                    <li className="p-2"><Link to="/support/terms" className="block px-4 py-2 hover:text-gray-400">Terms and Conditions</Link></li>
                </ul>
            </li>
            <li className="p-2">
                <Link to="/contact" className="hover:text-gray-400">Contact</Link>
            </li>
        </ul>
    );
};

export default DropdownMenu;
