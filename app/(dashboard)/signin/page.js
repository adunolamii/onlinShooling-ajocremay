
// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Header from '../Header';
// import Header2 from "../Header2"


// export default function SignIn() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch('/api/signin', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         action: 'signin',
//         email,
//         password,
//       }),
//     });

//     const data = await response.json();

//     if (response.status === 200) {
//       // Store JWT token (you can store it in localStorage, sessionStorage, or a context provider)
//       localStorage.setItem('token', data.token);
//       router.push('/dashboard'); // Redirect to dashboard
//     } else {
//       setError(data.error || 'Something went wrong');
//     }
//   };

//   return (
//     <div>
//       {/* <Header/> */}
//       <Header2/>
//     <div className="bg-white p-8 rounded-lg shadow-lg w-full m-auto max-w-sm">
//       <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
//         {error && <div className="text-red-500 text-center mb-4">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               className="w-full p-2 mt-1 border border-gray-300 rounded-md"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               className="w-full p-2 mt-1 border border-gray-300 rounded-md"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
//           >
//             Sign In
//           </button>
//         </form>
//         <div className="mt-4 text-center">
//           <a href="/forgotPassword" className="text-blue-500 hover:underline">
//             Forgot Password?
//           </a>
//         </div>
//       </div>
//     </div>
    
//   );
// }



// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Header from '../Header';
// import Header2 from "../Header2"

"use client";
import { useState, useEffect } from 'react';
import React from 'react'
import Header from '../Header';
import Header2 from '../Header2';
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || data.error || "Login failed");
      } else {
        localStorage.setItem("token", data.token);
        toast.success("Login successful 🎉");
        setTimeout(() => router.push("/dashboard"), 1500);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
return (
      <div>
       <Header2/>
     <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 "
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg text-white font-semibold transition ${
              loading
                ? "bg-indigo-300 cursor-not-allowed"
                : "bg-indigo-500 hover:bg-indigo-600"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Do not have an account?{" "}
          <a href="/signup" className="text-indigo-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
    </div>
  );
}
