"use client";
import Image from "next/image";
import { assets } from "@/Assests/assets";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Basic Clinical Skills Program",
    image: assets.care,
    description: "It is designed to help people develop the essential abilities they need for daily life, learning, and work.",
    duration: "3 Months",
  },
  {
    title: "Basic Life Support",
    image: assets.clinical2,
    description: "Basic Life Support is the emergency medical care given to someone who is experiencing a life-threatening condition, such as cardiac arrest, choking, or drowning, to keep them alive until professional help arrives.",
    duration: "3 Months",
  },
  {
    title: "Health Education & Sensitization",
    image: assets.clinical,
    description: "The goal is to equip individuals and communities with the knowledge and motivation to live healthier lives.",
    duration: "3 Months",
  },
  {
    title: "Care Of Special Needs Program",
    image: assets.healthassistance2,
    description: "Preventive healthcare and rural outreach focus.",
    duration: "3 Months",
  },
    {
    title: "Care Giving Program",
    image: assets.care2,
    description: "The aim is to promote independence, dignity, and quality of life for people with special needs.",
    duration: "3 Months",
  },
    {
    title: "Nursing Assistance Program",
    image: assets.firstaid,
    description: "The goal is to equip caregivers with the knowledge and compassion needed to support patients health, comfort, and recovery.",
    duration: "6 Months",
  },
    {
    title: "First Aid Program",
    image: assets.first2,
    description: "The aim is to save lives, prevent conditions from worsening, and promote quick recovery.",
    duration: "6 Months",
  },
    {
    title: "Health Assistance Program",
    image: assets.cover,
    description: "The goal is to improve access to quality care and strengthen overall community health.",
    duration: "6 Months",
  },
    {
    title: "Health Assistance Program",
    image: assets.cover2,
    description: "The goal is to improve access to quality care and strengthen overall community health.",
    duration: "6 Months",
  },
    {
    title: "Health Assistance Program",
    image: assets.healthassistance2,
    description: "The goal is to improve access to quality care and strengthen overall community health.",
    duration: "6 Months",
  },
    {
    title: "Basic Life Support Nursing",
    image: assets.healthassistance2,
    description: "It focuses on maintaining circulation, breathing, and airway function until the patient can receive more advanced interventions.",
    duration: "6 Months",
  },
    {
    title: "Public Healthcare",
    image: assets.cover2,
    description: "Its main goal is to ensure that everyone, regardless of income, location, or social status, has access to essential healthcare without facing financial hardship.",
    duration: "6 Months",
  },
    {
    title: "Personnal Support Workers",
    image: assets.cover,
    description: "Their role includes assisting with daily activities like bathing, dressing, meal preparation, medication reminders, light housekeeping, and emotional support.",
    duration: "6 Months",
  },
    {
    title: "Mental Health ",
    image: assets.edu,
    description: "Maintaining mental health involves self-care, support systems, therapy, stress management, and healthy lifestyle choices.",
    duration: "6 Months",
  },
    {
    title: "Acquired Cadiac Life Support",
    image: assets.clinical2,
    description: "Acquired Cardiac Life Support (ACLS) is an advanced set of clinical skills and guidelines used by healthcare professionals to manage and treat serious cardiovascular emergencies, such as cardiac arrest, stroke, or heart attack.",
    duration: "6 Months",
  },
    {
    title: "Health Safety and Environment",
    image: assets.clinical,
    description: "It is basically about keeping people safe, healthy, and environmentally responsible while getting the job done.",
    duration: "6 Months",
  },
    {
    title: "Disaster Management and Digital",
    image: assets.care2,
    description: "In short, it is about integrating technology with disaster management to save more lives, reduce damage, and speed up recovery.",
    duration: "6 Months",
  },
    {
    title: "Cardiopulmonary Resuscitation",
    image: assets.care,
    description: "Cardiopulmonary Resuscitation (CPR) is a life-saving emergency procedure used when a person breathing or heartbeat has stopped.",
    duration: "6 Months",
  },
    {
    title: "Personnal Support Worker",
    image: assets.healthassistance,
    description: "A Personal Support Worker is a trained caregiver who provides assistance with daily living activities for individuals who may be elderly, ill, disabled, or recovering from surgery/illness.",
    duration: "6 Months",
  },
    {
    title: "Medical Social Work",
    image: assets.cover2,
    description: "Medical Social Work is a field of social work that focuses on helping patients and their families cope with the emotional, social, and financial challenges that can come with illness, injury, or hospitalization.",
    duration: "6 Months",
  },
];


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Courses = () => {
  return (
    <section className="w-full py-16 bg-gray-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Our Courses
        </h2>
        <p className="text-gray-600 mb-12 text-sm md:text-base">
          Explore a variety of health and wellness courses tailored to meet your community needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
                <p className="text-sm text-gray-600 mt-2 flex-1">{course.description}</p>
                <p className="text-xs text-gray-500 mt-4">{course.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
