
'use client';
import Header from '../Header';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle } from "lucide-react";
import { assets } from "@/Assests/assets";
import Image from "next/image";

export default function SignIn() {const backgroundImages = [
  assets.background,
];

 

  return (
    <div>
      <Header/>

      <section className=" bg-green-950 text-white">
          <div className="bg-amber-400 text-white text-center px-4 py-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm sm:text-base lg:text-xl">
            <p className="text-white">
              Admission for all academic sessions is ongoing.
            </p>
            <Link
              href={"/courses"}
              className="bg-red-600 text-white text-lg font-serif px-4 py-2 flex items-center gap-2 hover:scale-110 duration-300"
            >
              Apply Now!
            </Link>
          </div>

          <div className="lg:flex lg:h-screen">
            {/* Left Section */}
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
                  <Link href={"courses"} className="bg-red-600 text-white text-lg font-serif px-4 py-2 hover:scale-110 duration-300">
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
                  {/* </button> */}
                </div>

                <p className="text-sm mt-2">*No Application fee</p>
              </div>
            </div>

            {/* Right Section */}
            <div className="bg-green-900 w-full flex items-center justify-center">
              <section className="relative w-full h-screen">
                <Image
                  src={assets.background}
                  alt="Background Image"
                  fill
                  className="object-cover"
                  priority
                />

                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h1 className="text-white text-4xl font-bold">
                    Welcome to AJOCREMAY MEDICARE
                  </h1>
                </div>
              </section>
            </div>
          </div>
        </section>
    </div>
    
  );
}
