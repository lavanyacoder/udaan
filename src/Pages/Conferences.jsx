import React from "react";
import conferences from "../Data/conferencesdata";
import "../Pages/Internships.css";

const Conference = () => {
  return (
    <div className="internship-container">
      <h2>"Network, Learn, Grow: Top Conferences Await!" 🔥</h2>
      <div className="internship-cards">
        {conferences.map((conference) => (
          <div key={conference.id} className="internship-card">
            <h3>{conference.name}</h3>
            <p><strong>Date:</strong> {conference.date}</p>
            <p><strong>Location:</strong> {conference.location}</p>
            <a href={conference.applyLink} target="_blank" rel="noopener noreferrer">
              <button className="apply-btn">Apply Now</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conference;
