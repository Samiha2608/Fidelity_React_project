
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
const NonGeographicNumbers = () => {
    return (
      <div>
      <Header />
<div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/home.jpg')" }}>
 <div className="absolute inset-0 bg-black opacity-50"></div>
 
 <div className="relative z-10 flex flex-col items-start justify-center min-h-screen text-left p-8 text-white">

     <h1 className="text-8xl font-bold mb-4">
   
Non Geographic <br /> Numbers
     </h1>

     <div className="flex space-x-4 mt-4">
     <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-900 hover:scale-105">
             Speak With an Expert
         </button></Link>
     </div>
 </div>
</div>
<section className="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
   
    <div className="md:w-1/2 md:ml-6"> {/* Add margin-left for spacing */}
       
        <p className="text-lg text-gray-700">
        Non-geographic numbers are telephone numbers that are not tied to a specific geographic location. They allow businesses to have a national presence, making it easier for customers to reach them from anywhere in the country.
            <br /><br />
            Boost new and existing customer enquiries to your business with a UK freephone number. Enjoy the benefit of no call charges from phone lines and mobiles across the UK. 0800 business phone numbers are non-geographic, allowing your business to attract calls from any town, city, or region across the UK. <br /><br />Additionally, consider 0300 numbers for a cost-effective and professional alternative, ideal for public sector and non-profit organizations. For businesses looking to monetize their calls, premium rate numbers offer a way to generate revenue while providing valuable services. Our range of non-geographic numbers ensures your business maintains a national presence, enhancing customer trust and accessibility.
     
        </p>
    </div>
    <div className="md:w-1/2 md:flex md:items-center">
        <img src="/images/contact.jpg" alt="Description" className="w-full h-auto object-cover" />
    </div>
</section>
<Testimonials />
<ContactUs />
<Footer />
        </div>
    );
};

export default NonGeographicNumbers;
