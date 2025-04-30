"use client";  // Required for using useState

import { useState } from "react";
import ReviewForm from "@/components/ReviewForm";

export default function Home() {
  const handleReviewSubmit = async (link) => {
    try {
      const response = await fetch("/api/detect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ link }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("Fake Review Probability:", data.fakeProbability);
        alert(`Fake Review Probability: ${(data.fakeProbability * 100).toFixed(2)}%`);
      } else {
        console.error("Error:", data.error);
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Request failed:", error);
      alert("Failed to analyze the review.");
    }
  };
}  