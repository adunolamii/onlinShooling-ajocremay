"use client";
import React from "react";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import Link from "next/link";
import Header from "../Header";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebookMessenger, FaLinkedin, FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";
import Footer from "../footer";

export default function ContactSection() {
  return (
     <div className=" bg-green-100">
       <Header/>
     <section className="bg-green-100 py-16 px-4">

     </section>
    <motion.section
      
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
    
      <motion.section
      // className="bg-gray-100 py-14 px-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl bg-green-100 mx-auto text-center space-y-10">

        {/* Title & Intro */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl  font-bold">Let us Connect & Create Future Together.</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            We believe that every great idea starts with a conversation. Whether you have a 
            project in mind, need advice, or simply want to share your vision, our team is here 
            to listen. Reach out through any of the channels below and let us explore how we can 
            bring your ideas to life together.  
            <br /><br />
            Our lines are always open, and we respond quickly — because your time matters.
          </p>
        </motion.div>

        {/* Direct Contact */}
        <div className="flex flex-col  md:flex-row justify-center gap-6">
          <motion.a
            href="https://wa.me/2349131240544"
            className="flex items-center gap-3 text-lg text-blue-600 hover:underline"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaPhoneAlt className="text-xl" /> +2349131240544
          </motion.a>

          <motion.a
            href="https://wa.me/2349131240544"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg text-green-600 hover:underline"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <FaWhatsapp className="text-xl" /> Chat on WhatsApp
          </motion.a>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {[
          
           
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${item.color} hover:scale-125 transition`}
              whileHover={{ rotate: 5 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Extra CTA */}
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
       
        </motion.div>

      </div>
    </motion.section>



    </motion.section>
   <Footer/>
   </div>
  );
}


