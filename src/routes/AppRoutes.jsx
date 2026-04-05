import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "../layout/AppLayout.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout Wrapper */}
        <Route path="/" element={<AppLayout />}>
          {/* Pages */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;