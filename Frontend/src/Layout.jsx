import React, { useEffect, useState } from 'react'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

import logo from './assets/react.svg'; 
import Home from './Components/Home/Home';


const Layout = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <img src={logo} alt="Loading..." className="w-20 h-20 animate-spin" />

          <h1 className="text-2xl font-bold mt-4">
            <span>Phsih</span>
            <span>Van</span>
            <span>Guard</span>
          </h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Home />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
