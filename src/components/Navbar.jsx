import "./Navbar.css";
import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch user data from the backend
        fetch("/api/user")
            .then((res) => res.json())
            .then((data) => setUser(data))
            .catch((err) => console.error("Error fetching user:", err));
    }, []);

    return (
        <nav className="navbar">
            {/* Left Section: User Information */}
            <div className="navbar-left">
                {user ? (
                    <>
                        <img src={user.googleProfile} alt="Profile" className="profile-img" />
                        <span className="username">{user.name}</span>
                    </>
                ) : (
                    <span className="username">Loading...</span>
                )}
            </div>

            {/* Center Section: App Name */}
            <div className="navbar-center">
                <span className="app-name">Career Compass</span>
            </div>

            {/* Right Section: Profile (Google Data) */}
            <div className="navbar-right">
                {user && user.googleProfile ? (
                    <a href="/profile">
                        <img src={user.googleProfile} alt="Profile" className="profile-img-large" />
                    </a>
                ) : (
                    <span className="profile">Profile</span>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
