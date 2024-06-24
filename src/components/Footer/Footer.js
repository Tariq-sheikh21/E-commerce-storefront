import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold">E-commerce Store</h2>
            <p className="text-sm">© 2024 All rights reserved</p>
          </div>
          <div className="flex space-x-6 mb-8 md:mb-0">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">123 E-commerce St, Shopsville</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: support@ecommerce.com</p>
          </div>
        </div>
        <div className="flex justify-center">
          <form className="w-full max-w-sm">
            <div className="flex items-center border-b-2 border-gray-500 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Subscribe to our newsletter"
                aria-label="Email"
              />
              <button
                className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
