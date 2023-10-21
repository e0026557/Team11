import React, { useEffect } from "react";
import Navbar from "../navigation/Navbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";

const Layout = () => {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  useEffect(() => {
    if (
      sessionStorage.getItem("userId") === null ||
      sessionStorage.getItem("userId") === undefined
    ) {
      console.log("pathname: ", pathname);
      if (pathname === "/login" || pathname === "/register") {
        return;
      }
      navigate("/login");
    }
  }, []);

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
