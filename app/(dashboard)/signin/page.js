// "use client";
// import { useState, useEffect } from 'react';
// import React from 'react'
// import Header from '../Header';
// import Header2 from '../Header2';
// import { useRouter } from "next/navigation";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Login() {
//   const router = useRouter();
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.email || !form.password) {
//       toast.error("Please fill in all fields");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch("/api/signin", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email: form.email, password: form.password }),
//       });

//       const data = await res.json();
//       if (!res.ok) {
//         toast.error(data.message || data.error || "Login failed");
//       } else {
//         localStorage.setItem("token", data.token);
//         toast.success("Login successful 🎉");
//         setTimeout(() => router.push("/dashboard"), 1500);
//       }
//     } catch (error) {
//       toast.error("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };
// return (
//       <div>
//        <Header2/>
//      <div className="">
//       <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 border border-gray-200">
//         <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 "
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full py-2 rounded-lg text-white font-semibold transition ${
//               loading
//                 ? "bg-gray-400"
//                 : "bg-blue-600 hover:bg-blue-700"
//             }`}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//         <p className="mt-4 text-sm text-center text-gray-600">
//           Do not have an account?{" "}
//           <a href="/signup" className="text-indigo-500 hover:underline">
//             Sign up
//           </a>
//         </p>
//       </div>
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
//     </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import React from "react";
import Header2 from "../Header2";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EyeIcon, EyeOffIcon } from "lucide-react"; // 👈 Eye icons

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
      <Header2 />
      <div className="">
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email input */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            {/* Password input with toggle */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOffIcon size={20} />
                ) : (
                  <EyeIcon size={20} />
                )}
              </button>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-lg text-white font-semibold transition ${
                loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Signup link */}
          <p className="mt-4 text-sm text-center text-gray-600">
            Do not have an account?{" "}
            <a href="/signup" className="text-indigo-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
        />
      </div>
    </div>
  );
}
