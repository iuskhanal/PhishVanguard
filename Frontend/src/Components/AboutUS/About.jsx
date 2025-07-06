import React from "react";
import logo from "../../assets/logo.svg";
import { Minus } from "lucide-react";
const About = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full pt-10 pb-5 px-4 bg-Alice-Blue py-8 sm:px-6  lg:px-10">
      <img
        src={logo}
        alt="PhishGuard Logo"
        className="w-auto h-10 text-center  "
      />
      <div className="max-w-5xl w-full mx-auto py-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-dark-purple font-bold text-center mb-4">
          About <span className=" text-russian-Violet">PhishVanguard</span>
          <div className="flex flex-row justify-center items-center -mt-2">
            <Minus size={20} className="text-amber-600 h-10 -mb-6 w-100" />
          </div>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600  mb-6 font-primary text-justify">
          <strong>PhishVanguard</strong> is an intelligent phishing detection
          system designed to help users recognize and defend against phishing
          attacks in real time. Built with modern web technologies and backed by
          machine learning, PhishVanguard analyzes URLs, content features, and
          web behavior patterns to identify potential threats with high
          accuracy.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-600  mb-6 font-primary text-justify">
          Whether you're a casual internet user or a business professional, or
          an IT professional, PhishVanguard provides you with the tools to stay
          safe online. Our system is designed to be user-friendly, ensuring that
          anyone can easily check URLs and receive instant feedback on their
          safety. Our goal is to awareness, prevent data breaches, and promote a
          more secure digital environment. The system supports features like
          live URL analysis, educational resources, use cases, and downloadable
          tools — making it not just a product but a learning platform as well.
        </p>
      </div>

      <strong>
        <p className="text-sm sm:text-base md:text-lg text-gray-600  mb-6 font-primary-2 text-justify">
          “Our mission is to create a safer digital environment through
          intelligent phishing detection and user education.”
        </p>
      </strong>

      <div className="max-w-5xl w-full mx-auto py-4">
        <h2 className=" text-3xl sm:text-4xl font-bold text-center text-dark-purple">
          {" "}
          About the <span className=" text-russian-Violet">Author</span>
        </h2>

        <div className=" flex flex-row justify-center -mt-2">
          <Minus size={200} className=" w-100 h-10  text-auzure-mb-6" />
        </div>

        <p className="text-sm sm:text-base md:text-lg text-gray-600  mb-6 font-primary text-justify">
          The author of this research are
          <strong> Ayush Khanal</strong>, 
          <strong> Arabi Basnet</strong>, 
          <strong> Lil Bhadhur Gharti </strong> 
          , final year students of Bachelor of Science in Computer Science and Information Technology at Butwal Multiple Campus, Tribhuwan University, who aspire to leverage technology for enhancing cybersecurity awareness and protection.
        </p>
      </div>
    </section>
  );
};

export default About;
