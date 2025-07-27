"use client"
import React from 'react'
import Header from '../Header'
import { motion } from "framer-motion";
import Image from 'next/image';
const page = () => {
  const courses = [
  {
    title: "Basic Nursing",
    image: "/images/nursing.jpg", // Replace with your own image paths
    description: "Train to become a certified nurse with practical and clinical exposure.",
  },
  {
    title: "Midwifery",
    image: "/images/midwifery.jpg",
    description: "Hands-on learning and real-world experience in maternal care.",
  },
  {
    title: "Pharmacy Technician",
    image: "/images/pharmacy.jpg",
    description: "Comprehensive program in drug handling and community health support.",
  },
  {
    title: "Community Health",
    image: "/images/community.jpg",
    description: "Focus on preventive healthcare and rural outreach programs.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};


  
  return (
    <div>
      <Header/>

       <section className="bg-white py-16 px-4">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-green-900 mb-4"
          variants={cardVariants}
        >
          Our Course Batches
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-10 max-w-2xl mx-auto"
          variants={cardVariants}
        >
          Explore our carefully designed programs tailored to equip you with the right skills for a successful healthcare career.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-green-50 rounded-xl overflow-hidden shadow-md hover:shadow-yellow-400 transition duration-300"
              variants={cardVariants}
            >
              <div className="relative h-52 w-full">
                <Image
                  // src={course.image}
                  // alt={course.title}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-700">{course.description}</p>
                <button className="mt-4 bg-yellow-400 text-green-900 font-semibold px-4 py-2 rounded-full hover:bg-yellow-500 transition">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>

    </div>
  )
}

export default page