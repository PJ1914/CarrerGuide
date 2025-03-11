import React from "react";
import "./BadgesCard.css"; // Import CSS file

function BadgesCard({ badges = [] }) {
  return (
    <div className="badges-card">
      <h2 className="badges-title">Badges</h2>
      {badges.length === 0 ? (
        <p className="text-gray-500">No badges earned yet.</p>
      ) : (
        <div className="badges-container">
          {badges.map((badge, index) => (
            <div key={index} className="badge-item">
              <img src={badge.image} alt={badge.name} className="badge-image" />
              <p className="badge-name">{badge.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BadgesCard;
