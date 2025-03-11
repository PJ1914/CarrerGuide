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
                    <span className="profile">Profile</span>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
