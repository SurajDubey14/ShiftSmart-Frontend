import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "../layout/AppLayout.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact";

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

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;