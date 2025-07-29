"use client";
import React from "react";
import Header from "../Header";
import Footer from "../footer";

const about = () => {
  return (
    <div>
      <Header/>
    <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
          About AJOCREMAY MEDICARE
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-12">
          AJOCREMAY MEDICARE is a forward-thinking institution committed to academic
          excellence, moral discipline, and wellness integration. We nurture our
          students with values that prepare them to become leaders of tomorrow.
        </p>

        {/* Mission and Vision */}
        <div className="mb-12 text-left">
          <h3 className="text-2xl font-semibold text-green-800 mb-3">Our Motto</h3>
          <p className="text-gray-700 mb-6">
           Good Health is The Real Earned Wealth, Just Get It!!!
          </p>

          <h3 className="text-2xl font-semibold text-green-800 mb-3">Our Vision</h3>
          <p className="text-gray-700">
            To be a leading institution where academic excellence meets compassionate care,
            shaping a new generation of morally upright and health-conscious individuals.
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          {/* History */}
          <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-green-800 mb-2">Our History</h3>
            <p className="text-gray-600">
              Since our founding in 2008, AJOCREMAY MEDICARE has grown from a single
              classroom into a full-fledged learning institution, impacting thousands of lives.
            </p>
          </div>

          {/* Philosophy */}
          <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-green-800 mb-2">Our Philosophy</h3>
            <p className="text-gray-600">
              We believe that learning must go beyond academics. We focus on whole-person
              education—academic, emotional, physical.
            </p>
          </div>

          {/* Facilities */}
          <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-green-800 mb-2">Our Facilities</h3>
            <p className="text-gray-600">
              Our environment includes serene classrooms, smart boards, laboratories, a medical
              clinic, and recreational spaces to support holistic learning.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-green-800 mb-2">Why Choose Us?</h3>
            <ul className="text-gray-600 list-disc pl-5 space-y-2">
              <li>Certified and experienced teachers</li>
              <li>Personalized academic and wellness support</li>
              <li>Digital learning resources</li>
              <li>Student leadership & mentorship programs</li>
              <li>Scholarship and financial aid options</li>
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16 text-left">
          <h3 className="text-2xl font-semibold text-green-800 mb-3">Our Core Values</h3>
          <ul className="text-gray-700 list-disc pl-5 space-y-2">
            <li><strong>Excellence</strong> – We strive for the highest standards in academics and service.</li>
            <li><strong>Integrity</strong> – We uphold truth, honesty, and transparency in all we do.</li>
            <li><strong>Empathy</strong> – We nurture kindness and compassion in our learners and staff.</li>
            <li><strong>Innovation</strong> – We embrace change and empower creativity through technology and curiosity.</li>
            <li><strong>Discipline</strong> – We encourage respect, responsibility, and good character.</li>
          </ul>
        </div>

        {/* Leadership Message */}
        <div className="mt-16 text-left bg-green-100 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold text-green-900 mb-3">Message from Our Director</h3>
          <p className="text-gray-700 leading-relaxed">
            “At AJOCREMAY MEDICARE, we don't just teach — we inspire. We equip our students to thrive
            in a fast-changing world by balancing strong academics with deep moral grounding.
            Join us in building a future full of promise, purpose, and progress.”
          </p>
          <p className="mt-4 font-semibold text-green-800">— Dr.Tayo , Founder & Director</p>
        </div>

        {/* Community Impact */}
        <div className="mt-16 text-left">
          <h3 className="text-2xl font-semibold text-green-800 mb-3">Community Impact</h3>
          <p className="text-gray-700">
            We proudly run outreach programs for underprivileged children, host free health awareness campaigns,
            and partner with local organizations to uplift our community. Education at AJOCREMAY is
            not confined to our classrooms — it's extended to our world.
          </p>
        </div>
      </div>
    </section>
    <Footer/>
     </div>
  );
};

export default about;
