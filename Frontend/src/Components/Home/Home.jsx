import React, { useEffect, useState } from "react";
import axios from "axios";
import img_1 from "../../assets/hero-first.svg";
import img_2 from "../../assets/hero-second.svg";
import PhishingQuestion from "./PhishingQuestion";
import Up from "./Scroller";
import ResultCard from "./ResultCard";

const Home = () => {
  const [url, setUrl] = useState("");
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleCheckUrl = async (e) => {
    e.preventDefault();
    if (!url && !file) {
      setError("Please enter a URL or select a CSV file");
      return;
    }
    setIsLoading(true);
    setError(null);

    try {
      const API_URL =
        import.meta.env.VITE_API_URL ||
        "https://backend-model-phishing-production.up.railway.app/predict" ||
        "http://localhost:5000/predict";

      const formData = new FormData();
      if (url) formData.append("url", url);
      if (file) formData.append("file", file);

      const response = await axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        timeout: 10000,
      });

      if (
        !response.data ||
        (!response.data.url && !response.data.file_results) ||
        (response.data.url &&
          (typeof response.data.is_phishing !== "boolean" ||
            typeof response.data.safe_score !== "number"))
      ) {
        throw new Error("Invalid API response format");
      }
      console.log("API Response:", response.data);
      setResults([response.data, ...result]);
      setUrl("");
      setFile(null);
    } catch (error) {
      console.error(
        "API Error:",
        error.response ? error.response.data : error.message
      );
      setError(
        `Failed to process request: ${error.message}${
          error.response ? `. Status: ${error.response.status}` : ""
        }`
      );
    }
    setIsLoading(false);
  };

  // Prevent form submission when clicking the file input label
  const handleFileClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen bg-gray-100">
      <section
        id="hero"
        className="w-full h-full bg-Alice-Blue flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20"
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
            online with cutting-edge AI technology.
          </p>

          <form
            onSubmit={handleCheckUrl}
            className="max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-center gap-2"
          >
            <div className="relative w-full">
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter URL or attach CSV"
                className="w-full lg:w-100 p-2 sm:p-3 pr-12 rounded-sm rounded-br-none rounded-tr-none text-dark-purple border-2 focus:outline-none focus:border-cornflower-blue transition duration-300 bg-white"
              />
              <label
                htmlFor="file-upload"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer flex items-center justify-center w-8 h-8 bg-white text-dark-purple hover:bg-gray-100 transition duration-300"
                onClick={handleFileClick}
              >
                <input
                  type="file"
                  accept=".csv"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="hidden"
                  id="file-upload"
                />
                <span className="text-xl">🔗</span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full sm:w-[50%] bg-indigo-700 p-2 sm:p-3 rounded-br-2xl text-dark-purple border-2 focus:outline-none focus:border-cornflower-blue transition duration-300 cursor-pointer hover:bg-purple-600 hover:text-white font-semibold disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? "Checking..." : "Check URL"}
            </button>
          </form>
          {error && (
            <p className="text-red-500 text-sm sm:text-base mb-2 sm:mb-4">
              {error}
            </p>
          )}
          {file && (
            <p className="text-sm text-gray-600 mb-2 sm:mb-4">
              Selected file: {file.name}
            </p>
          )}
          <div className="flex flex-col items-center w-full max-w-md">
            {result.map((result, index) => (
              <div
                key={`result-${index}`}
                className="bg-Alice-Blue shadow-md rounded-lg p-4 w-full max-w-md mt-5 mb-3"
              >
                <ResultCard
                  url={result.url}
                  is_phishing={result.is_phishing}
                  safe_score={result.safe_score}
                />
                <p className="text-gray-700">
                  The URL <strong>{result.url}</strong> is{" "}
                  <span
                    className={
                      result.is_phishing ? "text-red-500" : "text-green-500"
                    }
                  >
                    {result.is_phishing ? "malicious" : "safe"}
                  </span>
                  .
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-center mt-8 px-4">
          <img
            src={img_2}
            alt="Phishing"
            className="w-full max-w-[900px] max-h-[400px] h-auto object-cover rounded-md"
          />
          <img
            src={img_1}
            alt="Phishing"
            className="w-full max-w-[800px] max-h-[400px] h-auto object-fit rounded-md"
          />
        </div>

        <PhishingQuestion />
        <section className="w-full max-w-[1200px] m-15 mx-auto">
          <div className="flex flex-col md:flex-row justify-between p-3 gap-15">
            <iframe
              src="https://www.youtube.com/embed/lc7scxvKQOo"
              title="This is how hackers hack you using simple social engineering"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full md:w-1/2 aspect-video rounded-sm"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/PWVN3Rq4gzw"
              title="Watch this hacker break into a company"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full md:w-1/2 aspect-video rounded-sm"
            ></iframe>
          </div>
        </section>
        <Up />
      </section>
    </div>
  );
};

export default Home;