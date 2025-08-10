// "use client";
// import React from "react";
// import { Mail, MessageCircle, MapPin } from "lucide-react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Header from "../Header";
// import Footer from "../footer";


// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// const contact = () => {

  //  const form = useRef();
  // const [status, setStatus] = useState("");

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_2l7878z",      // replace with your EmailJS service ID
  //       "template_127f0vt",     // replace with your EmailJS template ID
  //       form.current,
  //       "a_RhGZpJhMCtKEGkD"       // replace with your EmailJS public key
  //     )
  //     .then(
  //       () => {
  //         setStatus("Email sent successfully!");
  //         form.current.reset();
  //       },
  //       (error) => {
  //         setStatus("Failed to send email. Try again.");
  //         console.error(error);
  //       }
  //     );
  // };

//   return (
//     <div>
//       <Header/>
//     <section className="bg-white py-20 px-6 md:px-12 lg:px-24" id="contact">
      
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-5xl font-bold text-center text-green-900 mb-10"
//         >
//           Get in Touch
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="text-center text-lg md:text-xl text-gray-700 mb-14"
//         >
//           Reach out to us for inquiries, support, admissions, or collaboration. We are here to help.
//         </motion.p>

//         {/* Contact Options */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           {/* Email */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="bg-green-50 p-6 rounded-xl shadow-md transition"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <Mail className="text-green-700" />
//               <h3 className="text-xl font-semibold text-green-800">Email</h3>
//             </div>
//             <p className="text-gray-600 mb-2">Send us an email for formal communication.</p>
//             <Link
//               href="mailto:ajocremaymedicare@gmail.com"
//               className="text-green-700 font-medium hover:underline"
//             >
//               ajocremaymedicare@gmail.com
//             </Link>
//           </motion.div>

//           {/* WhatsApp */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="bg-green-50 p-6 rounded-xl shadow-md transition"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <MessageCircle className="text-green-700" />
//               <h3 className="text-xl font-semibold text-green-800">WhatsApp</h3>
//             </div>
//             <p className="text-gray-600 mb-2">Instant messaging for support or quick questions.</p>
//             <Link
//               href="https://wa.me/2349161518461"
//               target="_blank"
//               className="text-green-700 font-medium hover:underline"
//             >
//               Chat on WhatsApp
//             </Link>
//           </motion.div>

//           {/* Location */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="bg-green-50 p-6 rounded-xl shadow-md transition"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <MapPin className="text-green-700" />
//               <h3 className="text-xl font-semibold text-green-800">Address</h3>
//             </div>
//             <p className="text-gray-600">123 Ajocremay Avenue, Lagos, Nigeria</p>
//           </motion.div>
//         </div>

//         {/* Contact Form */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="bg-green-100 p-8 rounded-xl shadow-lg"
//         >
//           <h4 className="text-2xl font-semibold text-green-800 mb-6">
//             Send us a Message
//           </h4>
//           <form  ref={form} onSubmit={sendEmail} className="space-y-5">
//             <div>
//               <label className="block text-gray-700 mb-1">Name</label>
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 mb-1">Email</label>
//               <input
//                 type="email"
//                 placeholder="@email.com"
//                 className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 mb-1">Message</label>
//               <textarea
//                 rows={4}
//                 placeholder="Type your message here..."
//                 className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="bg-green-800 text-white px-6 py-3 rounded hover:bg-green-700 transition font-medium"
//             >
//               Send Message
//             </button>
//           </form>
//         </motion.div>

//        </div>
//     </section>
//     <Footer/>
//     </div>
//   );
// };

// export default contact;


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
          <h2 className="text-4xl  font-bold">Let us Connect & Future Together.</h2>
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


