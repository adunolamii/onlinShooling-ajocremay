// "use client";
// import Image from "next/image";
// import Header from "./(dashboard)/Header";
// import { assets } from "@/Assests/assets";
// import { useState } from "react";
// import { MessageCircle } from "lucide-react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import Footer from "./(dashboard)/footer";
// import { Typewriter } from "react-simple-typewriter";

// const backgroundImages = [
//   assets.background,
//   assets.edu,
//   assets.edu2,
//   assets.grad,
//   assets.grad2,
// ];

// export default function Home() {
//   const Slideshow = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//       const timer = setInterval(() => {
//         setCurrentIndex((prevIndex) =>
//           prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
//         );
//       }, 5000); // change slide every 5 seconds

//       return () => clearInterval(timer);
//     }, []);
//   };
//   const [isOpen, setIsOpen] = useState(false);

//   const Navigation = ({ isMobile = false, closeMenu }) => {
//     const navBase = isMobile
//       ? "flex flex-col items-start gap-6 mt-6"
//       : "flex items-center gap-10";
//   };

//   const toggleMenu = () => setIsOpen(!isOpen);
//   const closeMenu = () => setIsOpen(false);

//   const buttonStyle = `
//     text-yellow-400 border border-yellow-400 px-4 py-2 rounded-full
//     font-semibold hover:bg-yellow-400 hover:text-green-900 transition
//     duration-300
//   `;

//   const [data, setData] = useState(null);
//   return (
//     <div>
//       <div>
//         {/* <Header /> */}
//         <header className="bg-green-900 text-white w-full">
//           <div className="max-w-screen-2xl mx-auto px-4">
           
//             <div className="flex items-center justify-between h-20">
              
//               <div className="flex items-center space-x-3">
//                 <div className="w-12 h-12 relative">
//                   <Image
//                     src={assets.logo}
//                     fill
//                     alt="Logo"
//                     className="rounded-full object-cover shadow-md hover:shadow-amber-400 transition duration-300"
//                   />
//                 </div>
//                 <p className="font-semibold text-2xl transition-all duration-300 hover:text-amber-400 hover:underline hover:underline-offset-4 hover:scale-105">
//                   AJOCREMAY MEDICARE CONSORTIUM
//                 </p>
//               </div>

              
//               <div className="hidden lg:flex items-center">
               

//                 <Link
//                   href="/signup"
//                   onClick={closeMenu}
//                   className={buttonStyle}
//                 >
//                   Sign Up
//                 </Link>
//               </div>

             
//               <div className="lg:hidden flex items-center">
//                 <button onClick={toggleMenu} className="text-white">
//                   {isOpen ? <X size={28} /> : <Menu size={28} />}
//                 </button>
//               </div>
//             </div>

//             {/* Mobile nav menu */}
//             {isOpen && (
//               <div className="lg:hidden mt-2 bg-green-800 rounded shadow-md p-4">
//                 <Navigation isMobile={true} closeMenu={closeMenu} />
//               </div>
//             )}
//           </div>
//         </header>

//         <section className=" bg-green-950 text-white">
//           <div className="bg-amber-400 text-white text-center px-4 py-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base lg:text-xl">
//             <p className="text-white">
//               Admission for all academic sessions is ongoing.
//             </p>
//             <Link
//               href={"/courses"}
//               className="bg-red-600 text-white text-lg font-serif px-4 py-2 flex items-center gap-2 hover:scale-110 duration-300"
//             >
//               Apply Now!
//             </Link>
//           </div>

//           <div className="lg:flex lg:h-screen">
//             {/* Left Section */}
//             <div className="bg-green-900 w-full flex items-center justify-center py-10 px-6 lg:px-36">
//               <div className="grid gap-4 text-center lg:text-left">
//                 <p className="text-amber-400 text-xl lg:text-2xl">
//                   Ajocremay Medicare Consortium
//                 </p>
//                 <h1 className="text-2xl lg:text-3xl font-semibold">
//                   Join Thousands Of
//                 </h1>
//                 <h1 className="text-2xl lg:text-3xl font-semibold">
//                   Ajocremay Medicare Students
//                 </h1>
//                 <h2 className="text-base lg:text-xl font-sans">
//                   Gain admission now, Start Classes immediately.
//                 </h2>

//                 <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-4">
//                   <Link
//                     href={"courses"}
//                     className="bg-red-600 text-white text-lg font-serif px-4 py-2 hover:scale-110 duration-300"
//                   >
//                     Programmes
//                   </Link>

//                   <motion.div whileHover={{ scale: 1.05 }}>
//                     <Link
//                       className=" bg-red-600 text-white text-lg font-serif px-4 py-2 flex items-center gap-2 hover:scale-110 duration-300"
//                       href="https://wa.me/2349161518461"
//                       target="_blank"
//                     >
//                       <MessageCircle size={20} />
//                       Chat with our online Advisor
//                     </Link>
//                   </motion.div>
//                   {/* </button> */}
//                 </div>

//                 <p className="text-sm mt-2">*No Application fee</p>
//               </div>
//             </div>

//             {/* Right Section */}
//             <div className="bg-green-900 w-full flex items-center justify-center">
//               <section className="relative w-full h-screen">
//                 <Image
//                   src={assets.grad2}
//                   alt="Background Image"
//                   fill
//                   className="object-cover"
//                   priority
//                 />

//                 <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//                   <h1 className="text-white text-4xl font-bold">
//                     <span className="text-white">&nbsp;</span>
//                     <span className="text-yellow-400">
//                       <Typewriter
//                         words={["Welcome to AJOCREMAY MEDICARE CONSORTIUM"]}
//                         loop={true}
//                         cursor
//                         cursorStyle="|"
//                         typeSpeed={80}
//                         deleteSpeed={60}
//                         delaySpeed={1500}
//                       />
//                     </span>
//                   </h1>
//                 </div>
//               </section>
//             </div>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { assets } from "@/Assests/assets";
import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "./(dashboard)/footer";
import { Typewriter } from "react-simple-typewriter";

const backgroundImages = [
  assets.background,
  assets.edu,
  assets.edu2,
  assets.grad,
  assets.grad2,
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const buttonStyle = `
    text-yellow-400 border border-yellow-400 px-4 py-2 rounded-full
    font-semibold hover:bg-yellow-400 hover:text-green-900 transition
    duration-300
  `;

  return (
    <div>
      <header className="bg-green-900 text-white w-full">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 relative">
                <Image
                  src={assets.logo}
                  fill
                  alt="Logo"
                  className="rounded-full object-cover shadow-md hover:shadow-amber-400 transition duration-300"
                />
              </div>
              <p className="font-semibold text-2xl transition-all duration-300 hover:text-amber-400 hover:underline hover:underline-offset-4 hover:scale-105">
                AJOCREMAY MEDICARE CONSORTIUM
              </p>
            </div>

            {/* Desktop Button */}
            <div className="hidden lg:flex items-center">
              <Link href="/signup" onClick={closeMenu} className={buttonStyle}>
                Sign Up
              </Link>
            </div>

            {/* Hamburger for mobile */}
            <div className="lg:hidden flex items-center">
              <button onClick={toggleMenu} className="text-white">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Nav Menu */}
          {isOpen && (
            <div className="lg:hidden mt-2  rounded shadow-md p-4 space-y-4 text-white">
              {/* <Link href="/" onClick={closeMenu} className="block hover:text-yellow-300">
                Home
              </Link>
              <Link href="/about" onClick={closeMenu} className="block hover:text-yellow-300">
                About
              </Link>
              <Link href="/courses" onClick={closeMenu} className="block hover:text-yellow-300">
                Course Batch
              </Link>
              <Link href="/contacts" onClick={closeMenu} className="block hover:text-yellow-300">
                Contact
              </Link> */}
              <Link href="/signup" onClick={closeMenu} className={buttonStyle}>
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-green-950 text-white">
        <div className="bg-amber-400 text-white text-center px-4 py-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base lg:text-xl">
          <p className="text-white">
            Admission for all academic sessions is ongoing.
          </p>
          <Link
            href={"/tuition"}
            className="bg-red-600 text-white text-lg font-serif px-4 py-2 flex items-center gap-2 hover:scale-110 duration-300"
          >
            Apply Now!
          </Link>
        </div>

        <div className="lg:flex lg:h-screen">
          {/* Left Side */}
          <div className="bg-green-900 w-full flex items-center justify-center py-10 px-6 lg:px-36">
            <div className="grid gap-4 text-center lg:text-left">
              <p className="text-amber-400 text-xl lg:text-2xl">
                Ajocremay Medicare Consortium
              </p>
              <h1 className="text-2xl lg:text-3xl font-semibold">
                Join Thousands Of
              </h1>
              <h1 className="text-2xl lg:text-3xl font-semibold">
                Ajocremay Medicare Students
              </h1>
              <h2 className="text-base lg:text-xl font-sans">
                Gain admission now, Start Classes immediately.
              </h2>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-4">
                <Link
                  href={"courses"}
                  className="bg-red-600 text-white text-lg font-serif px-4 py-2 hover:scale-110 duration-300"
                >
                  Programmes
                </Link>

                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    className=" bg-red-600 text-white text-lg font-serif px-4 py-2 flex items-center gap-2 hover:scale-110 duration-300"
                    href="https://wa.me/2349161518461"
                    target="_blank"
                  >
                    <MessageCircle size={20} />
                    Chat with our online Advisor
                  </Link>
                </motion.div>
              </div>

              <p className="text-sm mt-2">*No Application fee</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-green-900 w-full flex items-center justify-center">
            <section className="relative w-full h-screen">
              <Image
                src={assets.grad2}
                alt="Background Image"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h1 className="text-white text-4xl font-bold">
                  <span className="text-yellow-400">
                    <Typewriter
                      words={["Welcome to AJOCREMAY MEDICARE CONSORTIUM"]}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={80}
                      deleteSpeed={60}
                      delaySpeed={1500}
                    />
                  </span>
                </h1>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Footer remains untouched */}
      <Footer />
    </div>
  );
}



