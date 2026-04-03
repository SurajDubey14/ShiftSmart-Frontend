import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopHeader from "../components/TopHeader";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <main className="py-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
