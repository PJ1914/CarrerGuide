import React from "react";
import "./CareerPathCard.css"; // Import CSS file

const CareerPathCard = ({ progress }) => {
  return (
    <div className="career-path-card">
      <h2 className="career-path-title">Career Path</h2>
      <p className="career-path-text">Current Stage: {progress.stage}</p>
      <p className="career-path-text">Next Steps: {progress.nextStep}</p>
    </div>
  );
};

export default CareerPathCard;
