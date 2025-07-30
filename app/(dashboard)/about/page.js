"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "../Header";
import Footer from "../footer";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const About = () => {
  return (
    <div>
      <Header />

      <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-green-900 mb-6"
            variants={fadeInUp}
          >
            About AJOCREMAY MEDICARE CONSORTIUM
          </motion.h2>

          <motion.p
            className="text-gray-700 text-lg md:text-xl leading-relaxed mb-12"
            variants={fadeInUp}
          >
            AJOCREMAY MEDICARE CONSORTIUM is a healthcare foundation dedicated
            to empowering healthcare professionals through education,
            mentorship, and career advancement opportunities.
          </motion.p>

          <motion.div className="mb-12 text-left" variants={fadeInUp}>
            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              Our Motto
            </h3>
            <p className="text-gray-700 mb-6">
              Good Health is The Real Earned Wealth, Just Get It!!!
            </p>

            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              Our Reach
            </h3>
            <p className="text-gray-700 mb-6">
              With a diverse network of tutors, sponsors, and volunteers from
              across Nigeria and beyond, including Ghana, Somalia, Ethiopia,
              Toronto, Malabo, Benin, Kenya, just to mention a few. we are
              committed to fostering growth and development in the healthcare
              sector.
            </p>

            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              Our Impact
            </h3>
            <p className="text-gray-700 mb-6">
              Our initiatives have encouraged many to pursue Bachelors degrees
              in medicine and health-related fields. Registered Nurses, Medical
              students, and health practitioners participate in our courses to
              enhance their careers.
            </p>

            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              Learning Approach
            </h3>
            <p className="text-gray-700 mb-6">
              Our programs combine online and physical lectures with practical
              postings, providing hands on experience and comprehensive
              learning. We also provide reading materials to support learning
              and skill development.
            </p>

            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              Strategic Partnerships
            </h3>
            <p className="text-gray-700 mb-6">
              We have established partnerships with well equipped hospitals and
              medical facilities across Nigeria, providing our students with
              access to state of the art training facilities and real-world
              experience.
            </p>

            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700 mb-6">
              To become a leading healthcare foundation in Africa, renowned for
              producing highly skilled and compassionate healthcare
              professionals, and improving healthcare outcomes through
              innovative education, mentorship, and partnerships.
            </p>
            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700 mb-6">
              As we continue to grow and expand our reach beyond our current
              status, we remain committed to providing quality education,
              mentorship, and career advancement opportunities to healthcare
              professional.
            </p>

            
          </motion.div>

          {/* Grid Content */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left"
            variants={staggerContainer}
          >
            {[
              {
                title: "HealthCare Programs",
                content: (
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Nursing Assistant Programme</li>
                    <li>Basic Clinical Skills</li>
                    <li>Basic Life Support</li>
                    <li>Caregiving Program</li>
                    <li>Care for Special Needs</li>
                    <li>And more</li>
                  </ul>
                ),
              },
              {
                title: "Our Philosophy",
                content:
                  "We believe that learning must go beyond academics. We focus on whole-person education—academic, emotional, physical.",
              },
              {
                title: "Our Facilities",
                content:
                  "Our environment includes serene classrooms, smart boards, laboratories, a medical clinic, and recreational spaces to support holistic learning.",
              },
              {
                title: "Why Choose Us?",
                content: (
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Certified and experienced teachers</li>
                    <li>Personalized academic and wellness support</li>
                    <li>Digital learning resources</li>
                    <li>Student leadership & mentorship programs</li>
                    <li>Scholarship and financial aid options</li>
                  </ul>
                ),
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition"
                variants={fadeInUp}
              >
                <h3 className="text-2xl font-semibold text-green-800 mb-2">
                  {item.title}
                </h3>
                {typeof item.content === "string" ? (
                  <p className="text-gray-600">{item.content}</p>
                ) : (
                  item.content
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Core Values */}
          <motion.div className="mt-16 text-left" variants={fadeInUp}>
            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              Our Core Values
            </h3>
            <ul className="text-gray-700 list-disc pl-5 space-y-2">
              <li>
                <strong>Excellence</strong>  We strive for the highest
                standards in academics and service.
              </li>
              <li>
                <strong>Integrity</strong>  We uphold truth, honesty, and
                transparency in all we do.
              </li>
              <li>
                <strong>Empathy</strong>  We nurture kindness and compassion in
                our learners and staff.
              </li>
              <li>
                <strong>Innovation</strong>  We embrace change and empower
                creativity through technology and curiosity.
              </li>
              <li>
                <strong>Discipline</strong> –We encourage respect,
                responsibility, and good character.
              </li>
            </ul>
          </motion.div>

          {/* Message from Director */}
          <motion.div
            className="mt-16 text-left bg-green-100 p-6 rounded-lg shadow"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold text-green-900 mb-3">
              Message from Our Registra
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At AJOCREMAY MEDICARE, we do not just teach, we inspire. We equip
              our students to thrive in a fast changing world by balancing
              strong academics with deep moral grounding. Join us in building a
              future full of promise, purpose, and progress.
            </p>
            <p className="mt-4 font-semibold text-green-800">
               Ogunleye Faith O.  Registra
            </p>
          </motion.div>

          {/* Community Impact */}
          <motion.div className="mt-16 text-left" variants={fadeInUp}>
            
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
