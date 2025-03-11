import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import StudentPathCard from "./StudentPathCard";
import StatsCard from "./StatsCard";
import BadgesCard from "./BadgesCard";
import SuggestionsCard from "./SuggestionsCard";
import Navbar from "./Navbar";
import "./Dashboard.css";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState(null);
  const [badges, setBadges] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  // Simulating API Call to Fetch Data
  useEffect(() => {
    setUser({
      name: "John Doe",
      email: "johndoe@gmail.com",
      profilePicture: "https://via.placeholder.com/150",
    });

    setStats({
      courses: 5,
      certifications: 2,
      projects: 3,
    });

    setBadges([
      { name: "Top Learner", image: "https://via.placeholder.com/50" },
      { name: "AI Specialist", image: "https://via.placeholder.com/50" },
      { name: "Code Master", image: "https://via.placeholder.com/50" },
    ]);

    setSuggestions([
      "Enroll in a new AI course",
      "Participate in a coding competition",
      "Improve your problem-solving skills",
    ]);
  }, []);

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <Navbar />

      {/* Dashboard Header */}
      <h1 className="dashboard-header">WELCOME TO CAREER GUIDANCE AI</h1>

      {/* Main Dashboard Layout */}
      <div className="dashboard-content">
        {/* Left Side - Profile Card */}
        <div className="dashboard-left">
          {user ? <ProfileCard user={user} /> : <p>Loading Profile...</p>}
        </div>

        {/* Right Side - Main Content */}
        <div className="dashboard-right">
          <div className="stats-grid">
            <StudentPathCard />
            {stats ? <StatsCard stats={stats} /> : <p>Loading Stats...</p>}
          </div>

          {/* Badges Section */}
          {badges.length > 0 ? (
            <BadgesCard badges={badges} />
          ) : (
            <p className="empty-state">No badges yet.</p>
          )}

          {/* Suggestions Section */}
          {suggestions.length > 0 ? (
            <SuggestionsCard suggestions={suggestions} />
          ) : (
            <p className="empty-state">No suggestions available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
