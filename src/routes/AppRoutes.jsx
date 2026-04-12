import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppLayout from "../layout/AppLayout.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import Booking from "../pages/Booking.jsx";
import NotFound from "../pages/NotFound.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Layout Wrapper */}
        <Route path="/" element={<AppLayout />}>
          {/* Pages */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />

          {/* Not found page */}
        </Route>
      </Routes>
      
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
