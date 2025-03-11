import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import StudentPathCard from "./StudentPathCard";
import StatsCard from "./StatsCard";
import BadgesCard from "./BadgesCard";
import SuggestionsCard from "./SuggestionsCard";
import Navbar from "./Navbar";

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
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Dashboard Content */}
      <div className="flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          WELCOME TO CAREER GUIDANCE AI
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl">
          {/* Left Side - Profile Card */}
          <div className="md:col-span-1">
            {user ? <ProfileCard user={user} /> : <p>Loading Profile...</p>}
          </div>

          {/* Right Side - Main Content */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {/* Student Path and Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StudentPathCard />
              {stats ? <StatsCard stats={stats} /> : <p>Loading Stats...</p>}
            </div>

            {/* Badges Section - Full Width */}
            {badges.length > 0 ? (
              <BadgesCard badges={badges} />
            ) : (
              <p className="text-gray-500 text-center">No badges yet.</p>
            )}

            {/* Suggestions Section */}
            {suggestions.length > 0 ? (
              <SuggestionsCard suggestions={suggestions} />
            ) : (
              <p className="text-gray-500 text-center">No suggestions available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
