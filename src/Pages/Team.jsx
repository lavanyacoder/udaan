import React from "react";
import teamImage from "../assets/AboutUS.jpg"; // Import the image

export default function Team() {
    return (
        <div style={styles.content}>
            <h1>Who Are We ?</h1>
            <p style={styles.paragraph}>
                Our amazing team is dedicated to helping students and professionals achieve their dreams!
            </p>
            <img src={teamImage} alt="Our Team" style={styles.image} />
        </div>
    );
}

const styles = {
    content: {
        textAlign: "center",
        padding: "80px",
        color: "white",
    },
    paragraph: {
        margin: "10px auto",
        maxWidth: "600px",
        lineHeight: "1.5",
        fontSize: "22px", // ✅ Adjusts font size
        fontFamily: "Times-New-Roman", // ✅ Changes font
        fontWeight: "400", // ✅ Normal font weight
    },
    image: {
        display: "block",
        margin: "20px 320px",
        width: "100%",
        maxWidth: "800px",
        borderRadius: "15px",
    },
};
