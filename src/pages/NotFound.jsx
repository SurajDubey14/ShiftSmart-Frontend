import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <p className="text-sm mb-3 text-gray-600">404 Not Found</p>
      <h1 className="text-2xl font-semibold" >Oops! Page Not Found</h1>
      <p className="text-gray-600 pt-4 pb-5 lg:w-96 text-center">The page you are looking for doesn't exist Click button below to go to the homepage</p>
<Link to={"/"} className="bg-[#262626] text-white px-5 py-2 rounded-xl active:scale-90 mt-5 text-sm font-serif">Back to Homepage</Link>      
    </div>
  );
};

export default NotFound;
