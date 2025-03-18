import "./Home.css"; // Add styles if needed
import React from "react";
import Opportunities from "./Opportunities";
import Calendar from "./Calendar";
import About from "./About";
import Contact from "./Contact";


export default function Home() {
    return (
        <div>
            {/* Home Section */}
            <section id="home" className="home">
            </section>

            {/* Importing Sections */}
            <Opportunities />
            <Calendar />
            <About />
            <Contact />
        </div>
    );
}

  