'use client';
import React, { useState } from 'react';

export default function ReviewForm({ setResult }) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('http://localhost:8000/detect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Server error');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setError('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black-50">
      <form onSubmit={handleSubmit} className="space-y-4 bg-black shadow-md rounded px-8 pt-4 pb-4 w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-4">Fake Review Detection</h2>
        <label htmlFor="url" className="block text-white-700 text-sm font-bold mb-1">
          Paste Amazon Product Link
        </label>
        <input
          id="url"
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://www.amazon.in/..."
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded w-full"
        >
          {loading ? 'Detecting...' : 'Detect Fake Reviews'}
        </button>
        {error && <p className="text-red-600 text-center">{error}</p>}
      </form>
    </div>
  );
}
