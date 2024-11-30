import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import Award from '../components/Award';
import Mission from '../components/Mission';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning, faGlobe, faMobileScreenButton, faCalculator, faAddressBook, faChartLine, faShieldAlt, faLaptop, faUserShield, faStar } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const cardData = [
        {
            feedback: "Connectivity and Data",
            name: "Connect to the super fast, reliable business broadband and ethernet connectivity across the UK",
            icon: faGlobe,
            link: "/connectivity",
            linkText: "Learn More About Connectivity",
        },
        {
            feedback: "Business Energy",
            name: "Don't be left in dark or break the bank with high energy costs. We have the know how. Let us procure and manage energy requirements for your business.",
            icon: faBoltLightning,
            link: "/energy",
            linkText: "Discover Global Reach",
        },
        {
            feedback: "Business Mobile",
            name: "Let your business roam with us. We have business mobile plans that won’t let you down. Connect to the UK's biggest networks through us.",
            icon: faMobileScreenButton,
            link: "/business-mobile",
            linkText: "Get Reliable Support",
        },
        {
            feedback: "Internet of Things",
            name: "Experience top-notch service tailored to your needs.",
            icon: faAddressBook,
            link: "/iot",
            linkText: "IoT",
        },
        {
            feedback: "Cloud",
            name: "We prioritize our customers and their satisfaction.",
            icon: faCalculator,
            link: "/cloud-and-hosting",
            linkText: "Read Customer Reviews",
        },
        {
            feedback: "Voice/VoIP & Hosted Telephone",
            name: "Utilize data-driven insights to grow your business.",
            icon: faChartLine,
            link: "/voice",
            linkText: "Voice",
        },
        {
            feedback: "Billing",
            name: "Your security is our top priority.",
            icon: faShieldAlt,
            link: "/billing",
            linkText: "Learn About Our Security Measures",
        },
        {
            feedback: "Payment Solutions",
            name: "Reach out to us anytime, day or night.",
            icon: faLaptop,
            link: "/payments",
            linkText: "Contact Support",
        },
        {
            feedback: "Fidelity Partner Programme",
            name: "Secure your account with advanced protection.",
            icon: faUserShield,
            link: "/partner-programmes",
            linkText: "Enhance Account Security",
        },
    ];

    return (
        <div className="bg-white">
            <Header />
            <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/home.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-screen animate-fadeInDown">
                    <h1 className="text-6xl font-bold animate-bounce">Welcome to Our Website</h1>
                    <p className="text-2xl mt-4 animate-slideInUp">Delivering Solutions for Your Business Needs</p>
                </div>
            </div>

            <section className="py-10">
                <h2 className="text-4xl font-bold text-center mb-4 text-red-600 animate-fadeIn">
                    The X factor for your business
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
                    {cardData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 text-gray-500 group animate-fadeInUp"
                        >
                            <div className="p-6 text-center">
                                <FontAwesomeIcon icon={item.icon} className="text-red-600 text-6xl mb-2 group-hover:rotate-12 transition-transform duration-300 ease-in-out" />
                                <p className="text-gray-600 mt-2 font-bold text-gray-700 group-hover:text-red-600 transition-colors">{item.feedback}</p>
                                <p className="text-gray-600 mt-2">{item.name}</p>
                                <a
                                    href={item.link}
                                    className="flex items-center justify-center mt-4 text-red-600 transition duration-300 ease-in-out hover:text-blue-900 hover:underline"
                                >
                                    {item.linkText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center space-x-6 mt-10">
                    <Link to="/quote">
                        <button className="bg-red-600 text-white text-sm font-semibold py-4 px-8 rounded transition duration-300 ease-in-out hover:bg-blue-900 animate-bounce">
                            Get a Quote
                        </button>
                    </Link>
                    <button className="border border-gray-400 text-red-600 text-sm font-semibold py-2 px-6 rounded transition duration-300 ease-in-out hover:bg-blue-900 hover:text-white hover:border-red-600">
                        Call us Today
                    </button>
                </div>
            </section>

            <Mission />

            <Award />

            <section className="py-10">
                <div className="text-center">
                    <p className="text-lg font-bold text-gray-400">Testimonials</p>
                    <h2 className="text-3xl font-bold mt-2 text-gray-600">
                        Testimonials<br />
                        What our customers have to say.
                    </h2>
                </div>

                <div className="flex justify-center space-x-6 mt-10 max-w-screen-xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-1/2 h-64 transition-transform transform hover:scale-105">
                        <div className="flex items-center mb-2">
                            <div className="flex">
                                {[...Array(5)].map((_, index) => (
                                    <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-400 animate-pulse" />
                                ))}
                            </div>
                        </div>
                        <p className="text-lg font-semibold text-gray-800">John Doe</p>
                        <p className="text-gray-600 mt-2">
                            "This service has significantly improved our business efficiency. Highly recommended!"
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 w-1/2 h-64 transition-transform transform hover:scale-105">
                        <div className="flex items-center mb-2">
                            <div className="flex">
                                {[...Array(5)].map((_, index) => (
                                    <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-400 animate-pulse" />
                                ))}
                            </div>
                        </div>
                        <p className="text-lg font-semibold text-gray-800">Jane Smith</p>
                        <p className="text-gray-600 mt-2">
                            "Exceptional quality and outstanding support! Our team couldn’t be happier."
                        </p>
                    </div>
                </div>
            </section>

            <ContactUs />

            <Footer />
        </div>
    );
};

export default Home;
