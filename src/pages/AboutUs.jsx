import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Award from '../components/Award';
import { Link } from 'react-router-dom';
import ContactUs from '../components/ContactUs';

const AboutUs = () => {
      // State for counting numbers
      const [hostedSeats, setHostedSeats] = useState(0);
      const [customers, setCustomers] = useState(0);
      const [callMinutes, setCallMinutes] = useState(0);
      const [dataCircuits, setDataCircuits] = useState(0);
  
      // Function to animate the counting
      const animateCount = (target, setter) => {
          let count = 0;
          const increment = Math.ceil(target / 100); // Adjust for speed of counting
          const interval = setInterval(() => {
              count += increment;
              if (count >= target) {
                  clearInterval(interval);
                  setter(target); // Set final value
              } else {
                  setter(count);
              }
          }, 50); // Adjust the delay for speed
      };
  
      useEffect(() => {
          animateCount(51356, setHostedSeats);
          animateCount(7198, setCustomers);
          animateCount(2249990324, setCallMinutes);
          animateCount(3391, setDataCircuits);
      }, []);

    return (
        <div>
            <Header /> {/* Import the Header component */}

            <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/partner.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-start justify-center min-h-screen text-left text-white p-8">
                    <h1 className="text-8xl font-bold mb-4 text-white ml-20 shadow-lg">
                        About us
                    </h1>
                    <div className="flex space-x-4 mt-4">
                    <Link to="/quote"><button className="bg-red-600 text-white font-semibold py-4 px-8 rounded transition duration-300 ease-in-out transform hover:bg-blue-800 hover:scale-105 ml-20">
                            Talk to us
                        </button></Link>
                    </div>
                </div>
            </div>

            {/* Add the paragraph below the image section */}
            <div className="flex flex-col items-center justify-center text-left text-gray-500 p-8 bg-white">
                <p className="text-lg text-center mx-25 mt-8">
                    At Fidelity Group, we are dedicated to transforming the way people connect. Founded over 30 years ago, with a vision to bring unparalleled communication services to our clients, we pride ourselves on being at the forefront of technological innovation and customer satisfaction.
                    <br /><br />
                    Our team comprises seasoned industry professionals with extensive expertise in designing, deploying, and managing advanced telecom infrastructure.
                    <br /><br />
                    We are committed to offering reliable, high-quality services that meet the diverse needs of businesses and individuals alike.
                </p>
            </div>

            {/* Our Mission Section */}
            <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
                <h2 className="text-3xl font-bold text-gray-600 mb-4">Our Mission</h2>
                <p className="text-lg text-center mb-8 text-gray-500">
                    Our mission is to empower our clients with seamless, efficient, and secure communication solutions. We strive to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mx-25">
                    <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faCheck} className="text-red-600" />
                        <span className="text-gray-500 text-lg">Deliver state-of-the-art telecom services that enhance connectivity and productivity.</span>
                    </div>
                    <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faCheck} className="text-red-600" />
                        <span className="text-gray-500 text-lg">Continuously innovate to stay ahead in the ever-evolving telecom landscape.</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faCheck} className="text-red-600" />
                        <span className="text-gray-500 text-lg">Maintain the highest standards of customer service and support.</span>
                    </div>
                    <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faCheck} className="text-red-600" />
                        <span className="text-gray-500 text-lg">Create a complementary suite of associated high-quality products.</span>
                    </div>
                </div>
            </div>

                  {/* Our Value Section */}
                  <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
                <h2 className="text-3xl font-bold text-gray-600 mb-4">Our Values</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mx-25">
                    <div>
                        <div className="flex items-center space-x-2 mb-2 text-lg">
                            <FontAwesomeIcon icon={faCheck} className="text-red-600" />
                            <h3 className="text-lg font-semibold text-gray-600">Innovation</h3>
                        </div>
                        <span className="text-gray-500 text-lg">We embrace innovation and are always exploring new technologies to improve our services and deliver the best solutions to our clients.</span>
                    </div>
                    <div>
                        <div className="flex items-center space-x-2 mb-2 text-lg">
                            <FontAwesomeIcon icon={faCheck} className="text-red-600" />
                            <h3 className="text-lg font-semibold text-gray-600">Integrity</h3>
                        </div>
                        <span className="text-gray-500 text-lg">Integrity is at the core of our business. We believe in transparency, honesty, and ethical practices in all our business operations.
                        </span>
                    </div>
                    <div>
                        <div className="flex items-center space-x-2 mb-2 text-lg">
                            <FontAwesomeIcon icon={faCheck} className="text-red-600" />
                            <h3 className="text-lg font-semibold text-gray-600">Customer Focus</h3>
                        </div>
                        <span className="text-gray-500 text-lg">Our customers are our top priority. We listen to their needs and work tirelessly to exceed their expectations with our services and support.</span>
                    </div>
                    <div>
                        <div className="flex items-center space-x-2 mb-2 text-lg">
                            <FontAwesomeIcon icon={faCheck} className="text-red-600" />
                            <h3 className="text-lg font-semibold text-gray-600">Reliability</h3>
                        </div>
                        <span className="text-gray-500 text-lg">We understand the importance of dependable communication services. Our commitment to reliability ensures that our clients can count on us for consistent performance.</span>
                    </div>
                </div>
            </div>
            <Award />
            <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
                <h2 className="text-3xl font-bold text-gray-600 mb-8">Fidelity Group in Numbers</h2>
                
                <div className="flex justify-between w-full max-w-4xl ml-16">
                    <div className="flex flex-col items-center text-lg">
                        <h3 className="text-lg font-bold text-gray-600">Over</h3>
                        <h1 className="text-5xl font-bold text-red-600">{hostedSeats}</h1>
                        <p className="text-gray-600">Hosted seats</p>
                    </div>
                    <div className="flex flex-col items-center text-lg">
                        <h3 className="text-lg font-bold text-gray-600">Over</h3>
                        <h1 className="text-5xl font-bold text-red-600">{customers}</h1>
                        <p className="text-gray-600">Customers being billed</p>
                    </div>
                </div>

                <div className="flex justify-between w-full max-w-4xl mt-8">
                    <div className="flex flex-col items-center text-lg">
                        <h3 className="text-lg font-bold text-gray-600">Average of</h3>
                        <h1 className="text-5xl font-bold text-red-600">{callMinutes}</h1>
                        <p className="text-gray-600">Call minutes</p>
                    </div>
                    <div className="flex flex-col items-center text-lg">
                        <h3 className="text-lg font-bold text-gray-600">Over</h3>
                        <h1 className="text-5xl font-bold text-red-600">{dataCircuits}</h1>
                        <p className="text-gray-600">Data circuits</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
            <h2 className="text-3xl font-bold text-gray-600 mb-4">Our Journey</h2>
            <p className="text-lg text-center mx-20 mt-8 text-gray-500 text-lg">At Fidelity Group, we have been creating meaningful connections for decades. Whether you are a business looking to enhance your communication infrastructure or a residential customer seeking reliable services, we are here to help. Join us and experience the difference that comes with every service from Fidelity Group.</p>
            </div>
            <ContactUs />

            <Footer />
        </div>
    );
};

export default AboutUs;
