import React from "react";
import "./StatsCard.css"; // Import CSS file

function StatsCard({ stats }) {
  // Ensure stats exist before rendering
  if (!stats) return <p className="text-gray-500">Loading stats...</p>;

  return (
    <div className="stats-card">
      <h2 className="stats-title">Student Stats</h2>
      <p className="stats-item"><strong>Completed Courses:</strong> {stats.courses || 0}</p>
      <p className="stats-item"><strong>Certifications:</strong> {stats.certifications || 0}</p>
      <p className="stats-item"><strong>Projects Completed:</strong> {stats.projects || 0}</p>
    </div>
  );
}

export default StatsCard;
