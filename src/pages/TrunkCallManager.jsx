import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
const TrunkCallManager = () => {
    return (
      <div>
      <Header />
<div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/home.jpg')" }}>
 <div className="absolute inset-0 bg-black opacity-50"></div>
 
 <div className="relative z-10 flex flex-col items-start justify-center min-h-screen text-left p-8 text-white">

     <h1 className="text-6xl font-bold mb-4">
   
     Dependable voice <br /> services with instant <br /> call management
     </h1>
     <p className="text-lg mb-4">Offering unmatched flexibility and seamless continuity</p>
     <div className="flex space-x-4 mt-4">
         <button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-900 hover:scale-105">
             Find Out More
         </button>
     </div>
 </div>
</div>
<section className="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
   
    <div className="md:w-1/2 md:ml-6"> {/* Add margin-left for spacing */}
       
        <p className="text-lg text-gray-700">
        SIP trunk services provide a highly-flexible alternative to ISDN, compatible with all leading IP PBX brands in the UK market, ensuring your PBX hardware works seamlessly with our network service. Compared to ISDN, Fidelity’s SIP trunk services are more cost-effective on a per-channel basis and offer greater flexibility in terms of telephone numbers and locations. Additionally, they are quicker to install and deliver robust business continuity, ensuring your business never loses calls.
            <br /><br />
            Any business with a PBX can switch to our SIP solutions and immediately benefit from a more flexible, affordable, and resilient phone service.
     
        </p>
    </div>
    <div className="md:w-1/2 md:flex md:items-center">
        <img src="/images/contact.jpg" alt="Description" className="w-full h-auto object-cover" />
    </div>
</section>
<section className="flex flex-col md:flex-row items-start justify-between p-10 bg-white">
<div className="md:w-1/2 md:mr-6">
        <img src="/images/contact.jpg" alt="Description" className="w-full h-auto object-cover mb-6" style={{ height: '24rem' }} />
        
        {/* Points below the image */}
        <ul className="list-disc list-inside text-lg text-gray-700 mt-4 space-y-2">
            <li>
                <span className="text-gray-600 font-bold">Destination/Pass-Through:</span>
                <span className="text-gray-500"> Direct calls to specific destinations or pass them through as needed.</span>
            </li>
            <li>
                <span className="text-gray-600 font-bold">Notification:</span>
                <span className="text-gray-500"> Stay informed with real-time call notifications.</span>
            </li>
            <li>
                <span className="text-gray-600 font-bold">Advanced Statistics:</span>
                <span className="text-gray-500"> Gain insights with detailed call reporting and statistics.</span>
            </li>
        </ul>
    </div>
    {/* Left Section: Text and Points */}
    <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">
            <span className="text-gray-500">SIP Trunk Call Manager</span>
        </h2>
        <p className="text-lg text-gray-700 mb-4">
            Delivers a robust business continuity solution, consolidating all your numbers onto a single platform to ensure you never miss a call. Our cloud-based call control system allows you to automatically route calls to predefined destinations such as colleagues, mobile devices, hunt groups, or call queues.
            Equip yourself with a powerful tool that not only enhances your business communications but also provides peace of mind through comprehensive fraud protection and advanced call reporting capabilities. Optimise your business operations and never miss a critical call again.
        </p>

        {/* Points: Displayed in a balanced way */}
        <div className="grid grid-cols-1 gap-y-2">
            <div>
                <span className="text-gray-600 font-bold">Call Queuing:</span>
                <span className="text-gray-500"> Efficiently manage incoming calls with advanced call queuing.</span>
            </div>
            <div>
                <span className="text-gray-600 font-bold">Voicemail:</span>
                <span className="text-gray-500"> Ensure no call goes unanswered with integrated voicemail.</span>
            </div>
            <div>
                <span className="text-gray-600 font-bold">Announcements:</span>
                <span className="text-gray-500"> Keep callers informed with customizable announcements.</span>
            </div>
            <div>
                <span className="text-gray-600 font-bold">Call Divert:</span>
                <span className="text-gray-500"> Seamlessly divert calls on busy, no reply, or failure conditions.</span>
            </div>
            <div>
                <span className="text-gray-600 font-bold">Day and Time of Day Routing:</span>
                <span className="text-gray-500"> Automate call routing based on specific times of the day.</span>
            </div>
            <div>
                <span className="text-gray-600 font-bold">Date Routing:</span>
                <span className="text-gray-500"> Manage calls effectively with date-specific routing.</span>
            </div>
            <div>
                <span className="text-gray-600 font-bold">Interactive Voice Response (IVR):</span>
                <span className="text-gray-500"> Enhance caller experience with IVR menus.</span>
            </div>
            <div>
                <span className="text-gray-600 font-bold">Shortcuts:</span>
                <span className="text-gray-500"> Quickly access key features and functions with customizable shortcuts.</span>
            </div>
            <div>
                <span className="text-gray-600 font-bold">Hunt Groups:</span>
                <span className="text-gray-500"> Distribute calls across multiple lines with hunt groups.</span>
            </div>
        </div>
    </div>

    {/* Right Section: Image and Points */}

</section>
<Testimonials />
<ContactUs />
<Footer />
        </div>
    );
};

export default TrunkCallManager;
