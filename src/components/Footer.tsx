import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Logo from "../assets/Logo/LOGO.png";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { PiBracketsCurly } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-2">
          <motion.a href="http://www.clikcatalyst.com" target="_blank" className="w-full flex flex-col justify-center items-center">
            <div className="w-[200px] flex justify-center">
              <img src={Logo} alt="Logo" className="h-auto w-[200px]" />
            </div>
            <div className="text-white mt-4 w-full text-center text-xl">
              Creativity Meets Conversion
            </div>
          </motion.a>
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-2xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.facebook.com/profile.php?id=61563349015321"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="text-white hover:text-[#F17A21]"
              >
                <Facebook style={{ width: 40, height: 40 }} />
              </motion.a>
              <motion.a
                href="https://x.com/clikcatalyst"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="text-white hover:text-[#F17A21]"
              >
                  <i className="bi bi-twitter-x" style={{ fontSize: '30px' }}></i>

              </motion.a>
              <motion.a
                href="http://linkedin.com/company/clikcatalyst"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="text-white hover:text-[#F17A21]"
              >
                <Linkedin style={{ width: 40, height: 40 }} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/clikcatalyst/?igsh=MXdzZDNmZzQ5OHdlcg%3D%3D"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="text-white hover:text-[#F17A21]"
              >
                <Instagram style={{ width: 40, height: 40 }} />
              </motion.a>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start mx-auto">
            <h4 className="text-lg font-semibold mb-2 text-start flex"><IoLocationSharp style={{marginRight: '10px',marginTop:"5px"}} />Address</h4>
            <ul className="space-y-2 text-gray-300 text-start">
              <li>Ahmedabad, Gujarat, India</li>
            </ul>
            <h4 className="text-lg font-semibold mb-2 text-start flex"><FaPhoneVolume style={{marginRight: '10px',marginTop:"5px"}}/>Phone</h4>
            <ul className="space-y-2 text-gray-300 text-start">
              <li>+91 8799478397</li>
              <li>+91 7859977119</li>
            </ul>
            <h4 className="text-lg font-semibold mb-2 text-start flex"><MdMarkEmailUnread style={{marginRight: '10px',marginTop:"5px"}}/>Email</h4>
            <ul className="space-y-2 text-gray-300 text-start ">
              <li>info@clikcatalyst.com</li>
            </ul>
            <h4 className="text-lg font-semibold mb-2 text-start flex"><PiBracketsCurly style={{marginRight: '10px',marginTop:"5px"}} />Website</h4>
            <ul className="space-y-2 text-gray-300 text-start">
              <li>http://www.clikcatalyst.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
