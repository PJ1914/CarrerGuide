import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

function Basic() {
  return (
    <div>
      <h1 className="H1">Hey, wanna guide through your Career</h1>
      <h2>Sign-Up for it</h2>
      
      <Link to="/sign-up">
        <button>Sign-Up</button>
      </Link>

      <div className="top_right">
        <h3>Already have an account?</h3>
        <Link to="/login">
          <b>LOG IN</b>
        </Link>
      </div>
    </div>
  );
}

export default Basic;
