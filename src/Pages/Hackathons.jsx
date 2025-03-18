import React from "react";
import hackathons from "../Data/hackathonsdata";
import "../Pages/Hackathon.css";

const Hackathon = () => {
  return (
    <div className="hackathon-container">
      <h2>"Code, Compete, Conquer: Your Ultimate Hackathon Hub!" 🚀</h2>
      <div className="hackathon-cards">
        {hackathons.map((hackathon) => (
          <div key={hackathon.id} className="hackathon-card">
            <h3>{hackathon.name}</h3>
            <p><strong>Date:</strong> {hackathon.date || "TBA"}</p>
            <p><strong>Venue:</strong> {hackathon.venue}</p>
            {hackathon.mode && <p><strong>Mode:</strong> {hackathon.mode}</p>}
            {hackathon.deadline && <p><strong>Deadline:</strong> {hackathon.deadline}</p>}
            <a href={hackathon.applyLink} target="_blank" rel="noopener noreferrer">
              <button className="apply-btn">Apply Now</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hackathon;
