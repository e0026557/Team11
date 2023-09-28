import React from "react";
import Navbar from "../navigation/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-150">
        <Navbar />
          <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
