import React from "react";
import fellowships from "../Data/fellowshipsdata";
import "../Pages/Internships.css";

const Fellowship = () => {
  return (
    <div className="internship-container">
      <h2>"Your Next Big Break: Find the Perfect Fellowship & Mentor!" 🎯</h2>
      <div className="internship-cards">
        {fellowships.map((fellowship) => (
          <div key={fellowship.id} className="internship-card">
            <h3>{fellowship.name}</h3>
            <p><strong>Eligibility:</strong> {fellowship.eligibility}</p>
            <p><strong>Opening:</strong> {fellowship.opening}</p>
            {fellowship.deadline && <p><strong>Deadline:</strong> {fellowship.deadline}</p>}
            <a href={fellowship.applyLink} target="_blank" rel="noopener noreferrer">
              <button className="apply-btn">Apply Now</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fellowship;
