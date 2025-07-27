"use client";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/Assests/assets";
import Image from "next/image";
import { useState } from "react";

const Logo = () => {
     const [data, setData] = useState(null);
  return (
    <div>
      <Link href="/">
        <div className="items-center hidden lg:flex ">
          <Image src={assets.logo} width={50} height={50} alt="true" />
          {/* <p className=" font-semibold text-white text-2xl  ml-2.5">
            Ajocremay Medicare
          </p> */}
        </div>
      </Link>
    </div>
  );
};

export default Logo;
