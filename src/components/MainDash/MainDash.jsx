import React from "react";
import Cards from "../Cards/Cards";
import "./MainDash.css";
import Announcement from "../Announcement/Announcement";
import Schedule from "../Schedule/Schedule";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>

      <Cards />
      <hr />
      <Schedule />

      <hr />
      <Announcement />
    </div>
  );
};

export default MainDash;
