import React from "react";
import "./Schedule.css";

const Schedule = () => {
  return (
    <div className="schedule-container">
      <div className="schedule-box">
        <div className="header">
          <h2 className="title">Upcoming Schedule</h2>
          <button className="date-button">Today, 13 Sep 2021</button>
        </div>
        <div className="priority-section">
          <h3 className="section-title">Priority</h3>
          <div className="task-box">
            <p className="task-title">Review candidate applications</p>
            <span className="task-time">Today - 11:30 AM</span>
          </div>
        </div>
        <div className="other-section">
          <h3 className="section-title">Other</h3>
          <div className="task-box">
            <p className="task-title">Interview with candidates</p>
            <span className="task-time">Today - 10:30 AM</span>
          </div>
          <div className="task-box">
            <p className="task-title">
              Short meeting with product designer from IT Department
            </p>
            <span className="task-time">Today - 09:15 AM</span>
          </div>
        </div>
        <button className="create-schedule-button">
          Create a New Schedule
        </button>
      </div>
    </div>
  );
};

export default Schedule;
