import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UseCase from "./../UseCases/UseCase";
import logo from "../../assets/logo.svg";

import { ChevronDown, ChevronRight, Download, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showReportPhishing, setShowReportPhishing] = useState(false);
  const [showTestPhishing, setShowTestPhishing] = useState(false);

  return (
    <nav className="bg-white  text-russian-Violet fixed w-full  z-10 top-0 shadow-md font-primary">
      <div className=" max-w-[1000px] mx-auto h-10 flex items-center justify-between px-4 ml-10 sm:px-6 md:px-8 lg:px-10">
        <Link
          to="/"
          className=" flex items-center space-x-2 text-lg sm:text-xl font-bold transition duration-150"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-auto h-10 sm:w-12 sm:h-12 animate-pulse"
          />
          <div>
            <span className=" text-2xl font-secondary text-shadow-zinc-800">
              Phish
            </span>
            <span className=" text-2xl font-secondary text-blue-300">Van</span>
            <span className=" text-2xl font-secondary text-shadow-zinc-800">
              Guard
            </span>
          </div>
        </Link>

        <div className=" md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="foucus:outline-none focus:ring-1 focus:ring-black-500 p-1 rounded-md"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className="hidden md:flex space-x-6 text-sm">
          <NavLink to="/" className="rounded-md hover-navbar">
            Home
          </NavLink>
          <NavLink to="/about" className="rounded-md hover-navbar">
            About
          </NavLink>
          <NavLink to="/usecase" className="rounded-md hover-navbar">
            Usecase
          </NavLink>

          <div className="relative group z-40">
            <span className="flex items-center justify-between w-24 cursor-pointer rounded-md hover-navbar">
              Resources
              <ChevronDown size={16} />
            </span>

            {/* Main Dropdown */}
            <div className="absolute left-0 top-full mt-2 w-60 bg-white text-russian-Violet shadow-lg rounded-md z-40 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-150">
              {/* Report Phishing Cases Submenu */}
              <div className="relative group/report">
                <div className="px-4 py-3 hover:text-auzure cursor-pointer flex justify-between items-center">
                  Report Phishing Cases
                  <ChevronRight size={12} />
                </div>

                {/* Nested Submenu */}
                <div className="absolute top-0 left-full mt-0 ml-1 w-64 bg-white text-russian-Violet shadow-lg rounded-md z-50 opacity-0 group-hover/report:opacity-100 group-hover/report:block transition-opacity duration-150 whitespace-nowrap">
                  <a
                    href="https://safebrowsing.google.com/safebrowsing/report_phish/?hl=en"
                    className="block px-4 py-2 text-sm hover:text-auzure"
                  >
                    Google Safe Browsing
                  </a>
                  <a
                    href="https://support.google.com/websearch/answer/106318"
                    className="block px-4 py-2 text-sm hover:text-auzure"
                  >
                    Google Support
                  </a>
                </div>
              </div>

              {/* Test Phishing Websites Submenu */}
              <div className="relative group/test">
                <div className="px-4 py-3 hover:text-auzure cursor-pointer flex justify-between items-center">
                  Test Phishing Websites
                  <ChevronRight size={12} />
                </div>

                {/* Nested Submenu */}
                <div className="absolute top-0 left-full mt-0 ml-1 w-64 bg-white text-russian-Violet shadow-lg rounded-md z-50 opacity-0 group-hover/test:opacity-100 group-hover/test:block transition-opacity duration-150 whitespace-nowrap">
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

          <a
            href="http://localhost:5000/download"
            className="rounded-md hover-navbar"
          >
            <span className=" flex hover:text-auzure w-25 justify-between ">
              <span>Download</span>
              <span>
                {""}
                <ChevronDown size={16} />
              </span>
            </span>
          </a>
        </div>
      </div>

      {isOpen && (
        <div
          className={`fixed top-14 right-0 w-54 sm:w-80 bg-russian-Violet text-mint-green z-20 p-4 space-y-4 text-sm transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block navbar"
          >
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block">
            About Us
          </Link>
          <Link
            to="/usecase"
            onClick={() => setIsOpen(false)}
            className="block"
          >
            Use Cases
          </Link>
          <div className="space-y-1">
            <button
              onClick={() => setShowResources(!showResources)}
              className="w-full  font-semibold "
            >
              <span className="flex  items-center justify-between">
                Resources
                <span>
                  <ChevronDown size={16} />
                </span>
              </span>
            </button>

            {/* First-level Dropdown under Resources */}
            {showResources && (
              <div className="ml-2 mt-2 space-y-2">
                {/* Submenu Toggle */}
                <button
                  onClick={() => setShowReportPhishing(!showReportPhishing)}
                  className="w-full text-left"
                >
                  <span className="flex  items-center justify-between">
                    Report Phishing Cases
                    <span>
                      <ChevronDown size={14} />
                    </span>
                  </span>
                </button>

                {/* Submenu Items */}
                {showReportPhishing && (
                  <div className=" ml-2 space-y-1">
                    <a
                      href="https://safebrowsing.google.com/safebrowsing/report_phish/?hl=en"
                      className="block  hover:text-auzure"
                    >
                      Google Safe Browsing
                    </a>
                    <a
                      href="https://support.google.com/websearch/answer/106318"
                      className="block hover:text-auzure "
                    >
                      Google Support
                    </a>
                  </div>
                )}

                <button
                  onClick={() => setShowTestPhishing(!showTestPhishing)}
                  className="w-full text-left"
                >
                  <span className="flex  items-center justify-between">
                    Test Phishing Website
                    <ChevronDown size={14} />
                  </span>
                </button>

                {/* Submenu Items */}
                {showTestPhishing && (
                  <div className="ml-2 space-y-1">
                    <a
                      href="https://www.phishingbox.com/phishing-test"
                      className="block hover:text-auzure"
                    >
                      Phishingbox
                    </a>
                    <a
                      href="https://www.intradyn.com/phishing-quiz/"
                      className="block hover:text-auzure"
                    >
                      Intradyn
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
          {/* downlao */}
          <a
            href="https://backend-model-phishing-production.up.railway.app/download" 
            className="block"
          >
            <span className="flex  items-center justify-between">
              Download
              <span>
                <Download size={14} />
              </span>
            </span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
