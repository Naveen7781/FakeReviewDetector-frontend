'use client';
import React, { useState } from 'react';
import ReviewForm from '@/components/ReviewForm';

export default function DetectPage() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-black-100 flex flex-col items-center justify-center px-4 py-1">
      <div className="max-w-xl w-full bg-black p-8 shadow-xl rounded-xl">
        <h1 className="text-2xl font-bold text-white-800 text-center mb-1">
          🕵️‍♂️ Fake Review Detection
        </h1>
        <ReviewForm setResult={setResult} />
      </div>

      {result && (
        <div className="max-w-xl w-full bg-black mt-2 p-4 shadow-xl rounded-xl text-center">
          <h2 className="text-xl font-semibold text-green-600 flex items-center justify-center gap-2 mb-2">
            ✅ Detection Complete
          </h2>
          <p className="text-white-700 text-lg mb-4">
            This product has{' '}
            <span className="font-bold">
              {result.result === 'Fake' ? 'Fake' : 'Real'}
            </span>{' '}
            reviews.
          </p>
          <div className="text-sm text-white-900 space-y-2">
            <p>🧪 <strong>Probability of Fake:</strong> {result.prob_fake}%</p>
            <p>✅ <strong>Probability of Real:</strong> {result.prob_real}%</p>
            <p>📝 <strong>Reviews Analyzed:</strong> {result.reviews_count}</p>
          </div>
        </div>
      )}
    </div>
  );
}
