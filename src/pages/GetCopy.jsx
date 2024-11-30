import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GetCopy = () => {
    return (
      <div>
        <Header />
      <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/images/home.jpg')" }}
  >
      <div className="absolute inset-0 flex justify-end items-center">
          <div className="w-full max-w-3xl p-10 bg-red-600 text-white shadow-lg rounded-lg mr-10">
              <form>
                <h1 className="text-center text-white font-bold text-3xl">Request your partnership brochure</h1>
                <p className="text-center text-white text-lg mb-3">Please just fill in your details below and you’ll be taken to our downloadable Partnership brochure.

</p>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="relative z-0 w-full group">
                          <input 
                              type="text" 
                              name="name" 
                              id="name" 
                              className="block py-3 px-4 w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600" 
                              placeholder="Name" 
                              required 
                          />
                      </div>
                      <div className="relative z-0 w-full group">
                          <input 
                              type="text" 
                              name="company" 
                              id="company" 
                              className="block py-3 px-4 w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600" 
                              placeholder="Company Name" 
                              required 
                          />
                      </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="relative z-0 w-full group">
                          <input 
                              type="email" 
                              name="email" 
                              id="email" 
                              className="block py-3 px-4 w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600" 
                              placeholder="Email Address" 
                              required 
                          />
                      </div>
                      <div className="relative z-0 w-full group">
                          <input 
                              type="tel" 
                              name="contact_number" 
                              id="contact_number" 
                              className="block py-3 px-4 w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600" 
                              placeholder="Contact Number" 
                              required 
                          />
                      </div>
                  </div>

                  <div className="relative z-0 w-full mb-6 group">
                      <textarea
                          name="message"
                          id="message"
                          className="block py-3 px-4 w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-blue-600 h-32 resize-none"
                          placeholder="Message"
                          required
                      ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                      type="submit" 
                      className="text-red-500 bg-white hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-3 text-center"
                  >
                      Send
                  </button>
              </form>
          </div>
      </div>
      
  </div>
  <Footer />
  </div>
    );
};

export default GetCopy;
