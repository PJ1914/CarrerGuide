import React, { useState } from "react";
import AgeProgressBar from "./AgeProgressBar";
import Navbar from './Navbar';

function Dashboard() {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <div>
      <Navbar />
      </div>
   
    <div className="flex flex-col items-center p-4">
    
      <h1 className="text-2xl font-bold mb-4">WELCOME TO CAREER GUIDANCE AI</h1>
      <AgeProgressBar />
      <div className="w-full max-w-3xl mt-4">
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
