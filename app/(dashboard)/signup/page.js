// "use client"
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import React from 'react'
// import Header from '../Header';
// import Header2 from '../Header2';

// const Page = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError(null);

//     try {
//       const res = await fetch('/api/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, password }),
//       });

//       if (res.ok) {
//         const data = await res.json();
//         console.log('Signup successful:', data);

//         // Redirect to the dashboard
//         router.push('/dashboard');
//       } else {
//         const errorData = await res.json();
//         setError(errorData.error || 'An error occurred');
//       }
//     } catch (err) {
//       console.error('Error signing up:', err);
//       setError('An unexpected error occurred');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
  
//   return (
//     <div>
//       {/* <Header/> */}
//       <Header2/>
//     <div className="max-w-lg mx-auto  bg-white shadow-lg m-auto rounded-lg p-6 sm:p-8 border border-gray-200">
//     <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Create Your Account</h2>
//     {error && <div className="bg-red-100 text-red-600 p-3 mb-4 rounded-md">{error}</div>}
//     <form onSubmit={handleSubmit}>
//       <div className="mb-5">
//         <label className="block text-sm font-medium text-gray-600 mb-2">Full Name</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//           placeholder="Enter your full name"
//           className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
//         />
//       </div>
//       <div className="mb-5">
//         <label className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           placeholder="Enter your email"
//           className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
//         />
//       </div>
//       <div className="mb-5">
//         <label className="block text-sm font-medium text-gray-600 mb-2">Password</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           placeholder="Enter your password"
//           className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
//         />
//       </div>
//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className={`w-full py-3 text-white font-semibold rounded-lg transition-colors ${
//           isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
//         }`}
//       >
//         {isSubmitting ? 'Signing Up...' : 'Sign Up'}
//       </button>
//     </form>
//     <p className="text-sm text-center text-gray-500 mt-6">
//       Already have an account?{' '}
//       <a href="/signin" className="text-blue-600 hover:underline">
//         Log In
//       </a>
//     </p>
//   </div>
//   </div>
    
//   )
// }

// export default Page

// // app/signup/page.tsx or wherever your form is
// // 'use client';
// // import { useRouter } from 'next/navigation';
// // import { useState } from 'react';
// // import axios from 'axios';

// // const SignupPage = () => {
// //   const router = useRouter();
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //   });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const res = await axios.post('/api/signup', formData);

// //       if (res.status === 200) {
// //         // Redirect after signup
// //         router.push('/dashboard'); // or /signin or /welcome
// //       }
// //     } catch (error) {
// //       console.error('Signup error:', error);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       {/* Your form inputs here */}
// //     </form>
// //   );
// // };

// // export default SignupPage;

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import Header2 from "../Header2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("✅ Signup successful! Redirecting...");
        setTimeout(() => router.push("/dashboard"), 2000);
      } else {
        toast.error(`❌ ${data.error || "An error occurred"}`);
      }
    } catch (err) {
      toast.error("❌ An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Header2 />

      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 border border-gray-200">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 text-white font-semibold rounded-lg transition-colors ${
              isSubmitting ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-600 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page;
