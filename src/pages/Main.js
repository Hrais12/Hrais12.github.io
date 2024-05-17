import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="mainContainer">
      <div className="home">
        <Link key="home" to="/categories">
          <button>See Menu & Order</button>
        </Link>
      </div>
    </div>
  );
}

export default Main;
