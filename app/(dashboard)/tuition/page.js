"use client";
import React from "react";
import Header from "../Header";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../footer";

const page = () => {
  const tuitionPlans = [
    {
      program: "Basic Clinical Skills Program",
      duration: "3 Months",
      tuition: "₦35,000",
      // note: "Includes hostel and practicals",
    },
    {
      program: "Basic Life Support",
      duration: "3 Months",
      tuition: "₦35,000",
      // note: "Includes internship opportunities",
    },
    {
      program: "Health Education & Sensitization",
      duration: "3 Months",
      tuition: "₦35,000",
      // note: "Affordable and flexible",
    },
    {
      program: "Care Of Special Needs Program",
      duration: "3 Months",
      tuition: "₦35,000 ",
      // note: "Laboratory and field support included",
    },
    {
      program: "Care Giving Program",
      duration: "3 Months",
      tuition: "₦55,000 ",
      // note: "Laboratory and field support included",
    },
    {
      program: "Nursing Assistance Programe",
      duration: "6 Months",
      tuition: "₦55,000 ",
      // note: "Laboratory and field support included",
    },
    {
      program: "FIRST AIDS Programe",
      duration: "6 Months",
      tuition: "₦55,000 ",
      // note: "Laboratory and field support included",
    },
    {
      program: "Health Assistance Programe",
      duration: "6 Months",
      tuition: "₦55,000 ",
      // note: "Laboratory and field support included",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <Header />

      <section className="bg-green-100 py-16 px-4">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-green-900 mb-4"
            variants={itemVariants}
          >
            Tuition & Duration
          </motion.h2>
          <motion.p
            className="text-gray-700 max-w-xl mx-auto mb-10"
            variants={itemVariants}
          >
            We offer flexible and affordable tuition for all our programs to
            help you reach your healthcare goals.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {tuitionPlans.map((plan, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 hover:shadow-yellow-400 transition duration-300"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-semibold text-green-800 mb-2">
                  {plan.program}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Duration: <span className="font-medium">{plan.duration}</span>
                </p>
                <p className="text-xl text-red-600 font-bold mb-2">
                  {plan.tuition}
                </p>
                <p className="text-sm text-gray-500 italic">{plan.note}</p>
                <Link
                  href="https://wa.me/2349161518461"
                  className="mt-4 bg-yellow-400 text-green-900 font-semibold px-4 py-2 rounded-full hover:bg-yellow-500 transition"
                >
                  Apply Now
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <Footer/>
    </div>
  );
};

export default page;
