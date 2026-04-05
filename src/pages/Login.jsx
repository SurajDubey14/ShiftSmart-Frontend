import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center mb-2">Login</h1>
        {/* Login redirect */}
        <p className="text-sm text-center mb-4">
          If you don't have account, please{" "}
          <Link
            to={"/auth/signup"}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Signup
          </Link>
        </p>

        <form className="flex flex-col gap-4">
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
              className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
