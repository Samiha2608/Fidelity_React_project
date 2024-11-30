import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './pages/Home';
import Services from './pages/Services';
import PartnerPrograms from './pages/PartnerPrograms';


import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import LeaderShipTeam from './pages/LeaderShipTeam';
import Careers from './pages/Careers';
import CaseStudy from './pages/CaseStudy'
import News from './pages/News';
import EmergencyLocation from './pages/EmergencyLocation';
import CloudFault from './pages/CloudFault';
import Connectivity from './pages/Connectivity';
import IoT from './pages/IoT';
import Voice from './pages/Voice';
import Payments from './pages/Payments';
import { Provider } from 'react-redux';
import store from './redux/store';
import ReportFault from './pages/ReportFault';
import Energy from './pages/Energy';
import BusinessMobile from './pages/BusinessMobile';
import CloudAndHosting from './pages/CloudAndHosting';
import IoTConnectivityAndSolutions from './pages/IoTConnectivityAndSolutions';
import SellingPayments from './pages/SellingPayments';
import SoGEABroardband from './pages/SoGEABroadband';
import FibrePremises from './pages/FibrePremises';
import LeasedLineFibre from './pages/LeasedLineFibre';
import IoTStarterPack from './pages/IoTStarterPack';
import VM2M from './pages/VM2M';
import VoiceOverIP from './pages/VoiceOverIP';
import TrunkCallManager from './pages/TrunkCallManager';
import NonGeographicNumbers from './pages/NonGeographicNumbers';
import ContactCenterSolutions from './pages/ContactCenterSolutions';
import MobileCardPayments from './pages/MobileCardPayments';
import VirtualTerminal from './pages/VirtualTerminal';
import PayByLink from './pages/PayByLink';
import BusinessGas from './pages/BusinessGas';
import BusinessElectricity from './pages/BusinessElectricity';
import EVChargePoints from './pages/EVChargePoints';
import GreenEnergy from './pages/GreenEnergy';
import DealerProgramme from './pages/DealerProgramme';
import RefferalPartnerProgramme from './pages/RefferalPartnerProgramme';
import WholesalePartnerProgrammes from './pages/WholesalePartnerProgrammes';
import Quote from './pages/Quote';
import GetCopy from './pages/GetCopy';

const App = () => {
    return (
      <Provider store={store}>
        <Router>

            <main className="p-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/partner-programmes" element={<PartnerPrograms />} />
            
               
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/leadership" element={<LeaderShipTeam />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/case-study" element={<CaseStudy />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/report" element={<ReportFault />} />
                    <Route path="/emergency-location" element={<EmergencyLocation />} />
                    <Route path="/cloud-fault" element={<CloudFault />} />
                    <Route path="/connectivity" element={<Connectivity />} />
                    <Route path="/iot" element={<IoT />} />
                    <Route path="/voice" element={<Voice />} />
                    <Route path="/payments" element={<Payments />} />
                    <Route path="/energy" element={<Energy />} />
                    <Route path="/business-mobile" element={<BusinessMobile />} />
                    <Route path="/cloud-and-hosting" element={<CloudAndHosting />} />
                    <Route path="/iot-connectivity" element={<IoTConnectivityAndSolutions />} />
                    <Route path="/selling-payments" element={<SellingPayments />} />
                    <Route path="/sogea-broadband" element={<SoGEABroardband />} />
                    <Route path="/fibre-to-the-premises" element={<FibrePremises />} />
                    <Route path="/leased-line-fibre" element={<LeasedLineFibre />} />
                    <Route path="/iot-starter-pack" element={<IoTStarterPack />} />
                    <Route path="/vm2m" element={<VM2M />} />
                    <Route path="/voice-over-IP" element={<VoiceOverIP />} />
                    <Route path="/trunk-call-manager" element={<TrunkCallManager />} />
                    <Route path="/non-geographic-numbers" element={<NonGeographicNumbers />} />
                    <Route path="/contact-center-solutions" element={<ContactCenterSolutions />} />
                    <Route path="/mobile-card-payment" element={<MobileCardPayments />} />
                    <Route path="/virtual-terminal" element={<VirtualTerminal />} />
                    <Route path="/pay-by-link" element={<PayByLink />} />
                    <Route path="/business-gas" element={<BusinessGas />} />
                    <Route path="/business-electricity" element={<BusinessElectricity />} />
                    <Route path="/ev-charge-points" element={<EVChargePoints />} />
                    <Route path="/green-energy" element={<GreenEnergy />} />
                    <Route path="/dealer-programme" element={<DealerProgramme />} />
                    <Route path="/refferal-partner-programme" element={<RefferalPartnerProgramme />} />
                    <Route path="/wholesale-partner-programme" element={<WholesalePartnerProgrammes />} />
                    <Route path="/quote" element={<Quote />} />
                    <Route path="/get-copy" element={<GetCopy />} />
                    {/* Additional routes for subpages can be added here */}
                </Routes>
            </main>
    
        </Router>
        </Provider>
    );
};

export default App;
