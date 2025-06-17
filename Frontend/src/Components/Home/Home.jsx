import React, { useState } from "react";
import axios from "axios";
import img_1 from "../../assets/hero-first.svg";
import img_2 from "../../assets/hero-second.svg";
import PhishingQuestion from "./PhishingQuestion";

const Home = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCheckUrl = async (e) => {
    e.preventDefault();
    if (!url) {
      setError("Please enter a URL");
      return;
    }
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        { url },
        {
          headers: { "Content-Type": "application/json" },
          timeout: 10000,
        }
      );
      setResults([response.data, ...results]);
      setUrl("");
    } catch (error) {
      console.error(
        "API Error:",
        error.response ? error.response.data : error.message
      );
      setError(
        `Failed to check URL. ${error.message}. Status: ${
          error.response ? error.response.status : "No response"
        }`
      );
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen bg-gray-100">
      <section
        id="hero"
        className=" w-full h-full bg-Alice-Blue flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20"
      >
        <div className="flex flex-col items-center mb-6 sm:px-6 md:px-8 lg:px-0 px-4">
          <div className="pt-14 sm:px-6 md:px-8 lg:px-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-dark-purple font-bold text-center mb-4">
              Protect Yourself with {""}
              <span className="text-russian-Violet text-3xl font-primary-2 font-bold">
                PhishVanguard
              </span>
            </h1>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center mb-6 font-primary">
            PhishVanguard helps you to identify malicious URLs and stay safe
            online with cutting-edge AI technologoy.
          </p>
          <form
            onSubmit={handleCheckUrl}
            className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto mb-4 sm:mb-6 flex items-center justify-center "
          >
            <input
            value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full p-2 sm:p-3 rounded-sm rounded-br-none rounded-tr-none text-dark-purple border-2 focus:outline-none focus:border-cornflower-blue transition duration-300 mb-2 sm:mb-4"
              required
             />
             <button
              type="submit"
               className="w-[50%] bg-indigo-700 p-2 sm:p-3 rounded-br-2xl text-dark-purple border-2 focus:outline-none focus:border-cornflower-blue transition duration-300 mb-2 sm:mb-4 cursor-pointer hover:bg-purple-600 hover:text-white font-semibold disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
              disabled={isLoading}
             >
              { isLoading ? "checking..." : "Check URL"}
             </button>
          </form>
          {error && (
            <p className="text-red-500 text-sm sm:text-base mb-2 sm:mb-4">{error}</p>
          )}
         <div className="flex flex-col items-center w-full max-w-md">
           {result && (
            <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
              <h2 className="text-xl font-bold text-dark-purple mb-2">Result</h2>
              <p className="text-gray-700">
                The URL <strong>{result.url}</strong> is{" "}
                <span className={result.is_phishing ? "text-red-500" : "text-green-500"}>
                  {result.is_phishing ? "malicious" : "safe"}
                </span>.
              </p>
            </div>
          )}
         </div>
        </div>

        <div className="w-full flex flex-col md:flex-row  justify-center   mt-8 px-4">
          <img 
          src={img_1}
           alt="Phising" 
           className="w-[50%] h-auto mb-4 sm:mb-6 rounded-lg shadow-md"
          />
          <img 
          src={img_2}
           alt="Phisng" 
           className="w-[50%] h-auto mb-4 sm:mb-6 rounded-lg shadow-md"
          />
        </div>
          
          <PhishingQuestion />
      </section>
    </div>
  );
};

export default Home;
