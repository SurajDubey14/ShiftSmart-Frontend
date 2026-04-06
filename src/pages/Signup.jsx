import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const formsubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <div className="flex items-center justify-center py-16 px-6">
      <div className="bg-white p-6 rounded-lg lg:shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center mb-5">Sign Up</h1>

        <form className="flex flex-col gap-4" onClick={formsubmit}>
          {/* Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="border px-3 py-2 rounded-md w-full outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="border px-3 py-2 rounded-md w-full outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border px-3 py-2 rounded-md w-full pr-10 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {/* Password */}
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="border px-3 py-2 rounded-md w-full pr-10 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
            Create Account
          </button>
        </form>

        {/* Login redirect */}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link
            to={"/auth/login"}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
