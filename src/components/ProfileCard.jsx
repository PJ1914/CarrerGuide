import React from "react";
import "./ProfileCard.css"; // Import CSS file

function ProfileCard({ user }) {
  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-card">
      <img src={user.profilePicture} alt="Profile" className="profile-picture" />
      <h2 className="profile-name">{user.name}</h2>
      <p className="profile-email">{user.email}</p>
    </div>
  );
}

export default ProfileCard;
