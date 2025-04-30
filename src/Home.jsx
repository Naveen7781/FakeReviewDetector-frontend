// src/Home.jsx
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Fake Product Review Detection</h1>
      <p className="mb-6 text-gray-700">
        Our platform analyzes reviews from e-commerce product pages using a machine learning model trained on real and fake reviews. It helps customers make smarter buying decisions by identifying suspicious content.
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Paste a product link</li>
        <li>We extract all reviews from that page</li>
        <li>Our model checks for patterns of fake reviews</li>
        <li>You get a report on the likelihood of fake reviews</li>
      </ul>
      <div className="text-center">
        <Link to="/detect">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
