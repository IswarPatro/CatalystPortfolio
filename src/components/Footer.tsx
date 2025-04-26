import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from "../assets/Logo/LOGO.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-2">
          <div className='flex flex-col justify-center items-center'>
          <div className="w-[200px] flex justify-start space-x-8 mr-10">
        <img src={Logo} alt="Logo" className="h-auto w-[200px]" />
      </div>
            <p className="text-white mt-4 text-lg">
            Creativity Meets Conversion
            </p>
          </div>
          
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-lg font-semibold mb-2 text-start">Address</h4>
            <ul className="space-y-2 text-gray-300 text-start">
              <li>Ahmedabad, Gujarat, India</li>
            </ul>
            <h4 className="text-lg font-semibold mb-2 text-start">Phone</h4>
            <ul className="space-y-2 text-gray-300 text-start">
              <li>+91 8799478397</li>
              <li>+91 7859977119</li>
            </ul>
            <h4 className="text-lg font-semibold mb-2 text-start">Email</h4>
            <ul className="space-y-2 text-gray-300 text-start">
              <li>infoAclikcatalyst.com</li>
            </ul>
          </div>
          
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-white hover:text-[#F17A21]"
              >
                <Facebook />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-white hover:text-[#F17A21]"
              >
                <Twitter />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-white hover:text-[#F17A21]"
              >
                <Linkedin />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/clikcatalyst/?igsh=MXdzZDNmZzQ5OHdlcg%3D%3D"
                target='_blank'
                whileHover={{ scale: 1.1 }}
                className="text-white hover:text-[#F17A21]"
              >
                <Instagram />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;