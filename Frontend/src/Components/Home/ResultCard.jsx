const ResultCard = ({ url, is_phishing, safe_score }) => {
  return (
    <div
      className={`relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg mb-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200 dark:border-gray-700 ${
        is_phishing ? "border-l-4 border-red-500" : "border-l-4 border-green-500"
      }`}
      role="alert"
    >
      {/* Card Header with URL */}
      <div className="flex items-center justify-between">
        <h3
          className={`font-semibold text-xl truncate max-w-[80%] ${
            is_phishing ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"
          }`}
          title={url}
        >
          {url}
        </h3>
        {/* Status Badge */}
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            is_phishing
              ? "bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-300"
              : "bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300"
          }`}
        >
          {is_phishing ? "⚠️ Phishing" : "✅ Legitimate"}
        </span>
      </div>

      {/* Safe Score */}
      <div className="mt-4">
        <p className="text-gray-600 dark:text-gray-300">
          Safe Score:{" "}
          <span className="font-bold text-gray-800 dark:text-gray-100">
            {Number(safe_score).toFixed(2)}%
          </span>
        </p>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
          <div
            className={`h-2.5 rounded-full transition-all duration-500 ${
              is_phishing ? "bg-red-500" : "bg-green-500"
            }`}
            style={{ width: `${safe_score}%` }}
          ></div>
        </div>
      </div>

      {/* Warning or Action Button */}
      <div className="mt-4">
        {is_phishing ? (
          <p className="text-red-600 dark:text-red-400 font-medium animate-pulse">
            Warning: Avoid visiting this phishing URL!
          </p>
        ) : (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${url}`}
            className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 transition-colors duration-200 font-medium"
            onKeyDown={(e) => e.key === "Enter" && window.open(url, "_blank")}
          >
            Visit Page
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>
        )}
      </div>

      {/* Subtle Overlay for Depth */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-gray-100/30 dark:to-gray-800/30 opacity-40 pointer-events-none"></div>
    </div>
  );
};

export default ResultCard;