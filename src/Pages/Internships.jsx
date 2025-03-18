import React from "react";
import internships from "../Data/internshipsdata";
import "../Pages/Internships.css";

const Internship = () => {
  return (
    <div className="internship-container">
      <h2>"Your Dream Internship is Just One Click Away!" 💻</h2>
      <div className="internship-cards">
        {internships.map((internship) => (
          <div key={internship.id} className="internship-card">
            <h3>{internship.name}</h3>
            <p><strong>Eligibility:</strong> {internship.eligibility}</p>
            <p><strong>Opening:</strong> {internship.opening}</p>
            {internship.deadline && <p><strong>Deadline:</strong> {internship.deadline}</p>}
            <a href={internship.applyLink} target="_blank" rel="noopener noreferrer">
              <button className="apply-btn">Apply Now</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;
