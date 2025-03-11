import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css"; // ✅ Importing CSS globally
import Basic from "./components/Basic.jsx";
import Login from "./components/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
    <div className="app_container">
      
      <Router>
        <Routes>
          <Route path="/" element={<Basic />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Sign-up" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </Router>
      
    </div>
    
    </div>
  );
}

export default App;
