import React from "react";
import { Link } from "react-router-dom";
import "./Opportunities.css";

export default function Opportunities() {
    return (
        <section id="opportunities" className="full">
            <h1>OPPORTUNITIES</h1>
            <p>Your Next Big Opportunity Starts Here!</p>

            <div className="opportunity-cards">
                <div className="card">
                    <h3>Internships</h3>
                    <p>🔥 Unlock Top-Tier Internships and Launch Your Dream Career!</p>
                    <Link to="/internships" className="apply-btn">Explore</Link>
                </div>

                <div className="card">
                    <h3>Scholarships</h3>
                    <p>🎓 Discover Scholarships That Power Your Educational Journey!</p>
                    <Link to="/scholarships" className="apply-btn">Explore</Link>
                </div>

                <div className="card">
                    <h3>Hackathons</h3>
                    <p>🚀 Compete in Elite Coding & Innovation Challenges – Showcase Your Skills!</p>
                    <Link to="/hackathons" className="apply-btn">Explore</Link>
                </div>

                <div className="card">
                    <h3>Conferences</h3>
                    <p>🌐 Attend Game-Changing Tech & Leadership Conferences!</p>
                    <Link to="/conferences" className="apply-btn">Explore</Link>
                </div>

                <div className="card">
                    <h3>Mentorships & Fellowships</h3>
                    <p>💡 Apply for Prestigious Fellowships and Propel Your Career Forward!</p>
                    <Link to="/fellowships" className="apply-btn">Explore</Link>
                </div>

                <div className="card">
                    <h3>OfferHub</h3>
                    <p>✨ Take the Next Big Leap in Your Career – Seize Every Opportunity!</p>
                    <Link to="/offerhub" className="apply-btn">Explore</Link>
                </div>
            </div>
        </section>
    );
}
