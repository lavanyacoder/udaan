import React from "react";
import { useNavigate } from "react-router-dom";
import rightImage from "../assets/bulb2.png";
import backgroundImage from "../assets/bgfinal.jpg";
import aboutImage from "../assets/about2.png"; 

export default function About() {
    const navigate = useNavigate();

    const styles = {
        section: {
            position: "relative",
            minHeight: "100vh",
            background: `url(${backgroundImage}) center/cover no-repeat`,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            textAlign: "center",
            padding: "50px",
            flexDirection: "column",
            overflow: "hidden",
        },
        banner: {
            width: "100%",
            padding: "20px 0",
            textAlign: "center",
            background: "linear-gradient(135deg, rgb(67, 74, 86), rgb(128, 147, 150), rgb(250, 67, 97))",
            fontFamily: `"Times New Roman", Times, serif`,
            color: "#fff",
            fontSize: "30px",
            fontWeight: "bold",
            position: "absolute",
            top: "60px",
            left: 0,
            zIndex: "3",
        },
        leftImage: {
            position: "absolute",
            top: "190px",
            left: "80px",
            width: "700px",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
            zIndex: "2",
        },
        rightImage: {
            position: "absolute",
            top: "120px",
            right: "-25px",
            width: "200px",
            height: "200px",
            zIndex: "2",
        },
        speechBubble: {
            maxWidth: "600px",
            background: "rgba(18, 17, 17, 0.8)",
            padding: "25px",
            borderRadius: "30px",
            position: "relative",
            zIndex: "2",
            marginRight: "5%",
            alignSelf: "flex-end",
            boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
        },
        speechBubbleAfter: {
            content: "''",
            position: "absolute",
            bottom: "-20px",
            left: "50px",
            width: "0",
            height: "0",
            borderLeft: "15px solid transparent",
            borderRight: "15px solid transparent",
            borderTop: "20px solid rgba(18, 17, 17, 0.8)",
        },
        button: {
            padding: "10px 20px",
            marginTop: "10px",
            backgroundColor: "rgba(15, 212, 206, 0.81)",
            color: "black",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "17px",
            transition: "0.3s",
        },
    };

    return (
        <section id="about" style={styles.section}>
            <div style={styles.banner}>ABOUT US</div>
            <img src={aboutImage} alt="About Us" style={styles.leftImage} />
            <img src={rightImage} alt="Neon Bulb" style={styles.rightImage} />

            <div style={styles.speechBubble}>
                <p>
                    <strong>UDAAN</strong>  </p> <p>Explore, Apply, Achieve! is a one-stop platform designed to connect students 
                    and professionals with scholarships, internships, fellowships, conferences, and exclusive offers, 
                    ensuring that no valuable opportunity is missed. By providing well-organized listings, smart search 
                    filters, and real-time updates, Udaan simplifies the process of discovering and applying for 
                    career-enhancing opportunities. The platform empowers individuals by bridging the gap between 
                    potential and success, saving time and effort while fostering professional growth and development. 
                    With its user-friendly interface and commitment to accessibility, Udaan serves as a powerful gateway 
                    for students, researchers, and job seekers to explore, apply, and achieve their dreams. 🚀
                </p>
                <button style={styles.button} onClick={() => navigate("/team")}>
                    Meet US
                </button>
                <div style={styles.speechBubbleAfter}></div>
            </div>
        </section>
    );
}


