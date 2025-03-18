import React from "react";
import offers from "../Data/offerhubdata";
import "../Pages/OfferHub.css";

const OfferHub = () => {
  return (
    <div className="offerhub-container">
      <h2>"Dream Big, Work Smart: Grab These Career Opportunities!" ✨</h2>
      <div className="offerhub-cards">
        {offers.map((offer) => (
          <div key={offer.id} className="offerhub-card">
            <h3>{offer.name}</h3>
            <p><strong>Role:</strong> {offer.role}</p>
            <p><strong>Eligibility:</strong> {offer.eligibility}</p>
            <a href={offer.applyLink} target="_blank" rel="noopener noreferrer">
              <button>Apply Now</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferHub;
