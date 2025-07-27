// "use client";
// import React from "react";
// import { Mail, Phone, MessageCircle } from "lucide-react";
// import Link from "next/link";

// const Contact = () => {
//   return (
//     <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
//           Contact Us
//         </h2>
//         <p className="text-gray-700 text-lg md:text-xl mb-12">
//           We'd love to hear from you! Reach out via email or WhatsApp for inquiries,
//           enrollment details, or any assistance.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
//           {/* Email Card */}
//           <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition">
//             <div className="flex items-center mb-4">
//               <Mail className="w-6 h-6 text-green-700 mr-3" />
//               <h3 className="text-xl font-semibold text-green-800">Email</h3>
//             </div>
//             <p className="text-gray-600 mb-3">
//               For general inquiries and official correspondence, contact us via email.
//             </p>
//             <Link
//               href="mailto:ajocremaymedicare@gmail.com"
//               className="text-green-700 font-medium hover:underline"
//             >
//               ajocremaymedicare@gmail.com
//             </Link>
//           </div>

//           {/* WhatsApp Card */}
//           <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition">
//             <div className="flex items-center mb-4">
//               <MessageCircle className="w-6 h-6 text-green-700 mr-3" />
//               <h3 className="text-xl font-semibold text-green-800">WhatsApp</h3>
//             </div>
//             <p className="text-gray-600 mb-3">
//               Send us a message on WhatsApp for quick support or school information.
//             </p>
//             <Link
//               href="https://wa.me/2348012345678"
//               target="_blank"
//               className="text-green-700 font-medium hover:underline"
//             >
//               Chat on WhatsApp (+234 801 234 5678)
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

"use client";
import React from "react";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../Header";

const contact = () => {
  return (
    <div>
      <Header/>
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24" id="contact">
      
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-green-900 mb-10"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-lg md:text-xl text-gray-700 mb-14"
        >
          Reach out to us for inquiries, support, admissions, or collaboration. We're here to help.
        </motion.p>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-green-50 p-6 rounded-xl shadow-md transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <Mail className="text-green-700" />
              <h3 className="text-xl font-semibold text-green-800">Email</h3>
            </div>
            <p className="text-gray-600 mb-2">Send us an email for formal communication.</p>
            <Link
              href="mailto:ajocremaymedicare@gmail.com"
              className="text-green-700 font-medium hover:underline"
            >
              ajocremaymedicare@gmail.com
            </Link>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-green-50 p-6 rounded-xl shadow-md transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="text-green-700" />
              <h3 className="text-xl font-semibold text-green-800">WhatsApp</h3>
            </div>
            <p className="text-gray-600 mb-2">Instant messaging for support or quick questions.</p>
            <Link
              href="https://wa.me/2349161518461"
              target="_blank"
              className="text-green-700 font-medium hover:underline"
            >
              Chat on WhatsApp
            </Link>
          </motion.div>

          {/* Location */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-green-50 p-6 rounded-xl shadow-md transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="text-green-700" />
              <h3 className="text-xl font-semibold text-green-800">Address</h3>
            </div>
            <p className="text-gray-600">123 Ajocremay Avenue, Lagos, Nigeria</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-green-100 p-8 rounded-xl shadow-lg"
        >
          <h4 className="text-2xl font-semibold text-green-800 mb-6">
            Send us a Message
          </h4>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="@email.com"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                rows={4}
                placeholder="Type your message here..."
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-800 text-white px-6 py-3 rounded hover:bg-green-700 transition font-medium"
            >
              Send Message
            </button>
          </form>
        </motion.div>

       </div>
    </section>
    </div>
  );
};

export default contact;

