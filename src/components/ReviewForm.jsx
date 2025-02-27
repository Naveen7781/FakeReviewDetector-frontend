import { useState } from "react";

const ReviewForm = () => {
  const [link, setLink] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult("");

    try {
      const response = await fetch("https://fakereviewdetector-backend.onrender.com/detect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ review_text: link }), // ✅ Send correct request format
      });

      if (!response.ok) {
        throw new Error("Failed to fetch result");
      }

      const data = await response.json();
      setResult(data.result); // ✅ Extract correct response key
    } catch (err) {
      setError("Error connecting to server. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg mt-10 bg-white">
      <h2 className="text-xl font-bold mb-4">Fake Review Detector</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter product link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Check Reviews
        </button>
      </form>
      {result && (
        <div className="mt-4 p-2 text-center font-semibold border rounded bg-gray-100">
          Review Status: {result}
        </div>
      )}
      {error && <div className="mt-4 text-red-500">{error}</div>}
    </div>
  );
};

export default ReviewForm;
