"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/detect");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-white to-blue-100 text-gray-900">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Fake Product Review Detection
      </h1>

      <p className="text-center max-w-2xl text-lg md:text-xl mb-8">
        Our AI-powered tool analyzes product reviews from e-commerce websites
        and tells you whether the reviews are likely to be <strong>genuine</strong> or <strong>fake</strong>.
        No more wasting time on unreliable products!
      </p>

      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-3xl mb-10">
        <h2 className="text-2xl font-semibold mb-4">How it works:</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-800">
          <li>Copy a product page link from any e-commerce website (like Amazon).</li>
          <li>Paste the link into our tool.</li>
          <li>We extract the reviews from the page.</li>
          <li>Our trained ML model analyzes the reviews.</li>
          <li>You get instant feedback: Real or Fake!</li>
        </ol>
      </div>

      <button
        onClick={handleStart}
        className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 px-6 rounded-xl transition duration-300"
      >
        Get Started
      </button>
    </div>
  );
}
