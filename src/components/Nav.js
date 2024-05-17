import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navLogo">
      <img src="" className="logo" alt="logo"></img>
      <div className="nav">
        <Link key="home" to="/">
          <div>Home</div>
        </Link>
        <Link to="/categories">
          <div>Categories</div>
        </Link>
      </div>
    </div>
  );
}
