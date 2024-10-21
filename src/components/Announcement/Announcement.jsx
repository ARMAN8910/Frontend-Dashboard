import React from "react";
import "./Announcement.css"; // Import the CSS file for styling

const Announcement = () => {
  return (
    <div className="announcement-container">
      <h2 className="announcement-header">Announcement</h2>
      <div className="announcement-date">Today, 13 Sep 2021</div>
      <div className="announcement-items">
        <div className="announcement-item">
          <p>Outing schedule for every department</p>
          <p className="announcement-time">5 Minutes ago</p>
          <div className="announcement-actions">
            {/* Add your desired actions here (e.g., star, more options) */}
          </div>
        </div>
        <div className="announcement-item">
          <p>Meeting HR Department</p>
          <p className="announcement-time">Yesterday, 12:30 PM</p>
          <div className="announcement-actions">
            {/* Add your desired actions here (e.g., star, more options) */}
          </div>
        </div>
        <div className="announcement-item">
          <p>IT Department need two more talents for UX/UI Designer position</p>
          <div className="announcement-actions">
            {/* Add your desired actions here (e.g., star, more options) */}
          </div>
        </div>
      </div>
      <a href="#" className="see-all-announcements">
        See All Announcements
      </a>
    </div>
  );
};

export default Announcement;
