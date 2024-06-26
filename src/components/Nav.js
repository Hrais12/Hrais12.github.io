import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ count }) {
  return (
    <div className="navLogo">
      <Link key="home" to="/">
        <img
          src="https://static.vecteezy.com/system/resources/previews/033/539/498/original/keto-friendly-diet-healthy-food-label-icon-for-graphic-design-logo-website-social-media-mobile-app-ui-illustration-vector.jpg"
          className="logo"
          alt="logo"
        ></img>
      </Link>
      <div className="nav">
        <Link key="home" to="/">
          <div>Home</div>
        </Link>
        <Link to="/categories">
          <div>Menu</div>
        </Link>
        <Link key="cart" to="/cart">
          <div className="navCart">
            Cart <span>{count}</span>
          </div>
          <div></div>
        </Link>
      </div>
    </div>
  );
}
