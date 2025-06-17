import React, { useEffect, useState, useRef } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import logo from "./assets/logo.svg";
import Home from "./Components/Home/Home";

const Layout = () => {
  const [initialLoading, setInitialLoading] = useState(true);
  const location = useLocation();
  const outletRef = useRef(null); 

 
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  
  useEffect(() => {
    if (outletRef.current && location.pathname !== "/") {
      const offset = outletRef.current.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: offset, behavior: "smooth" });
    } else if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" }); 
    }
  }, [location.pathname]);

  if (initialLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-mint-green">
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="Loading..."
            className="w-20 h-20 animate-spin"
          />
          <h1 className="text-5xl font-bold mt-4">
            <span className="font-secondary text-auzure">Phsih</span>
            <span className="text-jordy-blue">Van</span>
            <span className="text-cornflower-blue">Guard</span>
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <Home />
      <div ref={outletRef}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;