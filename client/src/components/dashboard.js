import React from "react";
import "../styles/dashboard.css";
import logo from "../images/logo.png";

const Dashboard = ({ setCategory }) => {
  return (
    <>
      <div id="main">
        <img src={logo} alt="logo" id="logo" />
        <nav id="categories">
          <button onClick={() => setCategory("sports")}>Sports</button>
          <button onClick={() => setCategory("entertainment")}>
            Entertainment
          </button>
          <button onClick={() => setCategory("technology")}>Technology</button>
          <button onClick={() => setCategory("business")}>Business</button>
          <button onClick={() => setCategory("food")}>Food</button>
        </nav>
      </div>
    </>
  );
};

export default Dashboard;
