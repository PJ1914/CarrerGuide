import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"

const ProfilePopup = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/user`, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        if (data) setUser(data);
      })
      .catch((err) => console.error("Error fetching user data:", err))
      .finally(() => setLoading(false));
  }, []);

  const togglePopup = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    try {
      await fetch(`http://localhost:5173/`, { method: "POST", credentials: "include" });
    } catch (err) {
      console.error("Logout failed:", err);
    }
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  if (loading) return <p>Loading...</p>;
  if (!user) return null;

  return (
    <div className="container">
      <nav className="navbar">
            <div className="navbar-left">
                <span className="username">{user ? user.name : "Loading..."}</span>
            </div>
            <div className="navbar-center">
                <span className="app-name">Career Compass</span>
            </div>
            <div className="navbar-right">
                {user && user.googleProfile ? (
                    <img src={user.googleProfile} alt="Profile" className="profile-img" />
                ) : (
                  <button className="profile-btn" onClick={togglePopup} aria-label="Open Profile Menu">☰</button>
                )}
            </div>
        </nav>

      {isOpen && (
        <div className="overlay">
          <div className="popup">
            <div className="popup-content">
              <button className="close-btn" onClick={togglePopup} aria-label="Close Profile Menu">×</button>
              
              <h3>My Profile</h3>
              <p><strong>Name:</strong> {user?.displayName || "Unknown"}</p>
              <p><strong>Email:</strong> {user?.emails?.[0]?.value || "N/A"}</p>
              <p><strong>Role:</strong> Admin</p>

              <button className="logout-btn" onClick={handleLogout}>Log Out</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePopup;
