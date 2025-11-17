import { useState } from "react";
import "./Contact.css";
import teamPhoto from "../assets/header-img.webp";
import CakeSlider from "../components/CakeSlider";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  function validateForm() {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      setSuccess("Thank you for your feedback");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(""), 5000);
    }
  }

  return (
    <div className="contact-page">
      <img src={teamPhoto} alt="Our team" className="contact-header-img" />

      <section className="contact">
        <div className="Contact-txt">
          <h1>Get in Touch</h1>
          <p>
            We’d love to hear from you! If you have questions, suggestions, special cake requests, or any other inquiry,
            don't be afraid to send us a message.
          </p>
        </div>

        <div className="cform">
          <form className="contact-form" onSubmit={handleSubmit}>
 
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
              {errors.message && <p className="error">{errors.message}</p>}
            </div>
            {success && <p className="success">{success}</p>}
            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>
      </section>

      <div className="cake-section">
        <div className="curve top">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
          <h2 className="htxt">Featured Cakes</h2>
        </div>

        <section className="cake-gallery">
          <CakeSlider />
        </section>
      </div>
    </div>
  );
}
