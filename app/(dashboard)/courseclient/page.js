// // "use client";

// // import Image from "next/image";
// // import Link from "next/link";
// // import { motion } from "framer-motion";
// // import { assets } from "@/Assests/assets";

// //   const backgroundImages = [
   
// //     assets.edu,
// //     assets.edu2,
// //     assets.grad,
// //     assets.grad2,
// //     assets.care
  
// //     // Add more images if available
// //   ];

// // const courses = [
// //   {
// //     title: "Basic Clinical Skills Program",
// //     image: "images/care.jpg", // ✅ Make sure this path works in /public
// //     description: "Train to become a certified nurse with clinical exposure.",
// //     duration: "3 Months",
// //   },
// //   {
// //     title: "Basic Life Support",
// //     image: "images/care.jpg",
// //     description: "Hands-on learning and experience in maternal care.",
// //     duration: "3 Months",
// //   },
// //   {
// //     title: "Health Education & Sensitization",
// //     image: "images/edu.jpg",
// //     description: "Community health support and drug handling program.",
// //     duration: "3 Months",
// //   },
// //   {
// //     title: "Care Of Special Needs Program",
// //     image: "images/grad.jpg",
// //     description: "Preventive healthcare and rural outreach focus.",
// //     duration: "3 Months",
// //   },
// // ];

// // const CoursesClient = () => {
// //   return (
// //     <section className="px-4 py-10">
// //       <div className="text-center mb-10">
// //         <h2 className="text-2xl md:text-3xl font-bold text-green-800">
// //           Our Courses
// //         </h2>
// //         <p className="text-sm text-gray-600 mt-2">
// //           Explore programs tailored to your healthcare career.
// //         </p>
// //       </div>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {courses.map((course, index) => (
// //           <motion.div
// //             key={index}
// //             className="bg-green-50 rounded-xl shadow-md hover:shadow-yellow-400 transition duration-300 flex flex-col"
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //           >
// //             <div className="relative w-full h-48 sm:h-56">
// //               <Image
// //                 src={course.image}
// //                 alt={course.title}
// //                 layout="fill"
// //                 objectFit="cover"
// //                 className="rounded-t-xl"
// //               />
// //             </div>
// //             <div className="p-4 flex flex-col justify-between flex-grow">
// //               <div>
// //                 <h3 className="text-lg font-semibold text-green-800 mb-1">
// //                   {course.title}
// //                 </h3>
// //                 <p className="text-sm text-gray-700 mb-2">
// //                   {course.description}
// //                 </p>
// //                 <p className="text-xs text-green-700 font-medium">
// //                   Duration: {course.duration}
// //                 </p>
// //               </div>
// //               <div className="mt-4">
// //                 <Link
// //                   href="/tuition"
// //                   className="inline-block bg-yellow-400 text-green-900 font-semibold text-sm px-4 py-2 rounded-full hover:bg-yellow-500 transition"
// //                 >
// //                   Apply Now
// //                 </Link>
// //               </div>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default CoursesClient;
// "use client";
// import Image from "next/image";
// import { assets } from "@/Assests/assets";
// import { motion } from "framer-motion";

// const courses = [
//   {
//     title: "Basic Clinical Skills Program",
//     image: assets.care,
//     description: "Train to become a certified nurse with clinical exposure.",
//     duration: "3 Months",
//   },
//   {
//     title: "Basic Life Support",
//     image: assets.grad2,
//     description: "Hands-on learning and experience in maternal care.",
//     duration: "3 Months",
//   },
//   {
//     title: "Health Education & Sensitization",
//     image: assets.edu,
//     description: "Community health support and drug handling program.",
//     duration: "3 Months",
//   },
//   {
//     title: "Care Of Special Needs Program",
//     image: assets.grad,
//     description: "Preventive healthcare and rural outreach focus.",
//     duration: "3 Months",
//   },
// ];

// const Courses = () => {
//   return (
//     <section className="w-full py-16 bg-gray-50 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
//           Our Courses
//         </h2>
//         <p className="text-gray-600 mb-12 text-sm md:text-base">
//           Explore a variety of health and wellness courses tailored to meet your community needs.
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {courses.map((course, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
//             >
//               <div className="relative h-48 w-full">
//                 <Image
//                   src={course.image}
//                   alt={course.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-4 flex flex-col justify-between flex-1">
//                 <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
//                 <p className="text-sm text-gray-600 mt-2 flex-1">{course.description}</p>
//                 <p className="text-xs text-gray-500 mt-4">{course.duration}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Courses;
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
    image: assets.cover2,
    description: "The goal is to improve access to quality care and strengthen overall community health.",
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
