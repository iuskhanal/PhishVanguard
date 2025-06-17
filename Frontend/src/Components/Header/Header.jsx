import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { ChevronDown, ChevronRight, Download, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showReportPhishing, setShowReportPhishing] = useState(false);
  const [showTestPhishing, setShowTestPhishing] = useState(false);

  return (
    <nav className="bg-white text-russian-Violet fixed w-full z-10 top-0 shadow-md font-primary overflow-visible">
      {/* SHIFT NAVBAR CONTENT LEFT */}
      <div className="relative max-w-[1000px] mx-auto h-10 flex items-center justify-between px-4 ml-[-40px]">
        <Link to="/" className="flex items-center space-x-2 text-lg sm:text-xl font-bold transition duration-150">
          <img src={logo} alt="Logo" className="w-auto h-10 sm:w-12 sm:h-12 animate-pulse" />
          <div>
            <span className="text-2xl font-secondary text-shadow-zinc-800">Phish</span>
            <span className="text-2xl font-secondary text-blue-300">Van</span>
            <span className="text-2xl font-secondary text-shadow-zinc-800">Guard</span>
          </div>
        </Link>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none focus:ring-1 focus:ring-black-500 p-1 rounded-md">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex space-x-6 text-sm">
          <NavLink to="/" className="rounded-md hover-navbar">Home</NavLink>
          <NavLink to="/about" className="rounded-md hover-navbar">About</NavLink>
          <NavLink to="/usecase" className="rounded-md hover-navbar">Usecase</NavLink>

          {/* RESOURCES MENU */}
          <div className="relative group z-40 overflow-visible">
            <span className="flex items-center justify-between w-24 cursor-pointer rounded-md hover-navbar">
              Resources
              <ChevronDown size={16} />
            </span>

            {/* Main dropdown */}
            <div className="absolute left-[-40px] top-full mt-2 w-56 bg-white text-russian-Violet shadow-lg rounded-md z-40 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-150">
              
              {/* Report Phishing Cases submenu */}
              <div className="relative group/report">
                <div className="px-4 py-3 hover:text-auzure cursor-pointer flex justify-between items-center">
                  Report Phishing Cases
                  <ChevronRight size={12} />
                </div>

                <div className="absolute left-full top-0 mt-0 ml-1 min-w-[14rem] bg-white text-russian-Violet shadow-lg rounded-md z-50 opacity-0 group-hover/report:opacity-100 group-hover/report:block transition-opacity duration-150 whitespace-nowrap">
                  <a
                    href="https://safebrowsing.google.com/safebrowsing/report_phish/?hl=en"
                    className="block px-4 py-2 text-sm hover:text-auzure"
                  >
                    Google Safe Browsing
                  </a>
                  <a
                    href="https://support.google.com/websearch/answer/106318"
                    className="block px-4 py-2 text-sm hover:text-cyan-300"
                  >
                    Google Support
                  </a>
                </div>
              </div>

              {/* Test Phishing Websites submenu */}
              <div className="relative group/test">
                <div className="px-4 py-3 hover:text-auzure cursor-pointer flex justify-between items-center">
                  Test Phishing Websites
                  <ChevronRight size={12} />
                </div>

                <div className="absolute left-full top-0 mt-0 ml-1 min-w-[14rem] bg-white text-russian-Violet shadow-lg rounded-md z-50 opacity-0 group-hover/test:opacity-100 group-hover/test:block transition-opacity duration-150 whitespace-nowrap">
                  <a
                    href="https://www.phishingbox.com/phishing-test"
                    className="block px-4 py-2 text-sm hover:text-auzure"
                  >
                    Phishing Box
                  </a>
                  <a
                    href="https://www.intradyn.com/phishing-quiz/"
                    className="block px-4 py-2 text-sm hover:text-auzure"
                  >
                    Intradyn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Download Link */}
          <a href="http://localhost:5000/download" className="rounded-md hover-navbar">
            <span className="flex hover:text-auzure w-25 justify-between">
              <span>Download</span>
              <ChevronDown size={16} />
            </span>
          </a>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {isOpen && (
        <div
          className={`fixed top-14 right-0 w-54 sm:w-80 bg-russian-Violet text-mint-green z-20 p-4 space-y-4 text-sm transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <Link to="/" onClick={() => setIsOpen(false)} className="block navbar">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block">About Us</Link>
          <Link to="/usecases" onClick={() => setIsOpen(false)} className="block">Use Cases</Link>

          <div className="space-y-1">
            <button onClick={() => setShowResources(!showResources)} className="w-full font-semibold">
              <span className="flex items-center justify-between">
                Resources <ChevronDown size={16} />
              </span>
            </button>

            {showResources && (
              <div className="ml-2 mt-2 space-y-2">
                <button onClick={() => setShowReportPhishing(!showReportPhishing)} className="w-full text-left">
                  <span className="flex items-center justify-between">
                    Report Phishing Cases <ChevronDown size={14} />
                  </span>
                </button>
                {showReportPhishing && (
                  <div className="ml-2 space-y-1">
                    <a href="https://safebrowsing.google.com/safebrowsing/report_phish/?hl=en" className="block hover:text-auzure">
                      Google Safe Browsing
                    </a>
                    <a href="https://support.google.com/websearch/answer/106318" className="block hover:text-auzure">
                      Google Support
                    </a>
                  </div>
                )}

                <button onClick={() => setShowTestPhishing(!showTestPhishing)} className="w-full text-left">
                  <span className="flex items-center justify-between">
                    Test Phishing Website <ChevronDown size={14} />
                  </span>
                </button>
                {showTestPhishing && (
                  <div className="ml-2 space-y-1">
                    <a href="https://www.phishingbox.com/phishing-test" className="block hover:text-auzure">
                      Phishingbox
                    </a>
                    <a href="https://www.intradyn.com/phishing-quiz/" className="block hover:text-auzure">
                      Intradyn
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>

          <a href="http://localhost:5000/download" className="block">
            <span className="flex items-center justify-between">
              Download <Download size={14} />
            </span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
