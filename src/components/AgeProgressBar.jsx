import React, { useState } from "react";
import "./App.css";

const tasks = [
  { label: "Sign Up", progress: 0 },
  { label: "Complete Profile", progress: 20 },
  { label: "Upload Resume", progress: 40 },
  { label: "Take Quiz", progress: 60 },
  { label: "Apply for Job", progress: 80 },
  { label: "Get Hired", progress: 100 },
];

const AgeProgressBar = () => {
  const [progress, setProgress] = useState(0);
  
  const nextTask = () => {
    setProgress((prev) => (prev < 100 ? prev + 20 : prev));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-blue-600 text-white">
      <h1 className="text-4xl font-bold text-center">TASK PROGRESS</h1>
      <h2 className="text-xl font-semibold mt-6">Complete Your Career Journey</h2>

      {/* Progress Bar with Task Labels */}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      <p className="text-lg mt-2">Progress: {progress}%</p>

      <button
        className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
        onClick={nextTask}
      >
        Complete Next Task
      </button>
    </div>
  );
};

export default AgeProgressBar;
