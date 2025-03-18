import React from "react";
import scholarships from "../Data/scholarshipsdata";
import "../Pages/Scholarship.css";

const Scholarship = () => {
  return (
    <div className="scholarship-container">
      <h2>Unlock Your Future With a Scholarship!</h2>
      <div className="scholarship-cards">
        {scholarships.map((scholarship) => (
          <div key={scholarship.id} className="scholarship-card">
            <h3>{scholarship.name}</h3>
            <p><strong>Eligibility:</strong> {scholarship.eligibility}</p>
            <p><strong>Opening Month:</strong> {scholarship.opening}</p>
            <a href={scholarship.applyLink} target="_blank" rel="noopener noreferrer">
              <button className="apply-button">Apply Now</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scholarship;
