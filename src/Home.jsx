import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/detect");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Fake Product Review Detector</h1>
      <p className="text-lg text-center mb-6 max-w-xl">
        This tool helps customers verify the authenticity of product reviews before making a purchase.
        Simply paste a product link from Amazon, and our AI-powered system will analyze and tell you
        if the reviews are mostly genuine or fake.
      </p>
      <button
        onClick={handleStart}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Start Checking Reviews
      </button>
    </div>
  );
};

export default Home;
