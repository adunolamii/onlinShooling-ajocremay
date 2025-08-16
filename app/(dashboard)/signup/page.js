"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import Header2 from "../Header2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EyeIcon, EyeOffIcon } from "lucide-react"; // 👈 Eye icons

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // 👈 Toggle state
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
        toast.success("✅ Signup successful! ");
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

          <div className="mb-5 relative">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
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
