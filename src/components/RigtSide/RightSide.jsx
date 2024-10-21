import React from "react";
import EmployeerReview from "../CustomerReview/EmployeerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Employee's Performance</h3>
        <EmployeerReview />
      </div>
    </div>
  );
};

export default RightSide;
