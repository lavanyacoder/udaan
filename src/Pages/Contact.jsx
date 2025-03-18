import { useState } from "react";
import "./Contact.css"; // Ensure this is linked
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Form submitted!" + JSON.stringify(formData));
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await fetch("https://formsubmit.co/udaanofficialcontact@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    if (response.ok) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      alert("Something went wrong. Try again!");
    }
  };
  

  return (
    <div id="contact" className="contact-container"> {/* Added id="contact" */}
      <div className="banner">Let's Get In Touch</div>

      {/* Contact Info (Outside Box) */}
      <p className="contact-info">
        "Stay Connected, Stay Inspired – Reach Out to Us for Any Queries, Support, or Collaborations!"
      </p>

      {/* Main Content: Queries Box + Get in Touch Form */}
      <div className="content-wrapper">
        {/* Left: Queries Box */}
        <div className="left-section">
          <div className="queries-box">
            <p className="email">
              Email ID: <a href="mailto:udaanofficialcontact@gmail.com">udaanofficialcontact@gmail.com</a>
            </p>
            <p className="whatsapp">
              Join our <a href="https://chat.whatsapp.com/IdnWC9SA0FRHyWOPyNfOjx">WhatsApp Community!</a>
            </p>
          </div>

          {/* Names + LinkedIn Icons */}
          <div className="names-container">
            <div className="profile">
              <a href="https://www.linkedin.com/in/divya-72018a283/" target="_blank" rel="noopener noreferrer">Divya</a>
              <a href="https://www.linkedin.com/in/divya-72018a283/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="linkedin-icon" />
              </a>
            </div>
            <div className="profile">
              <a href="https://www.linkedin.com/in/lavanya21/" target="_blank" rel="noopener noreferrer">Lavanya</a>
              <a href="https://www.linkedin.com/in/lavanya21/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="linkedin-icon" />
              </a>
            </div>
            <div className="profile">
              <a href="https://www.linkedin.com/in/harshita-tanwar-ab3569288/" target="_blank" rel="noopener noreferrer">Harshita</a>
              <a href="https://www.linkedin.com/in/harshita-tanwar-ab3569288/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="linkedin-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Get in Touch Form */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
