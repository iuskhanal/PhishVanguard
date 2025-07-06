const ResultCard = ({ url, is_phishing, safe_score }) => {
  return (
    <div
      className="bg-Ghost-white dark:bg-gray-800 p-4 rounded-sm shadow-md mb-4"
      role="alert"
    >
      <div className="font-bold text-lg">
        <h3 className={is_phishing ? "text-red-500" : "text-green-500"}>
          {url}
        </h3>
      </div>
      <p>
        Prediction:{" "}
        <span>{is_phishing ? "⚠️ Phishing" : "✅ Legitimate"}</span>
      </p>
      <p>Safe Score: {Number(safe_score).toFixed(2)}%</p>
      {is_phishing ? (
        <p className="text-red-500">Warning: Do not visit this phishing URL!</p>
      ) : (
        <div className="text-green-500">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${url}`}
            onKeyDown={(e) => e.key === "Enter" && window.open(url, "_blank")}
          >
            <strong className="underline">Visit Page</strong>
          </a>
        </div>
      )}
    </div>
  );
};

export default ResultCard;