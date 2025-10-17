
import "/Contact.css";
import teamPhoto from "../assets/grouppic.jpg";

export default function Contact() {
  return (
    <div className="contact-page">
    
      <section className="contact-header">
        <img src={teamPhoto} alt="Our team" className="contact-header-img" />
        <div className="contact-header-text">
          <h1>Get in Touch</h1>
          <p>We’d love to hear from you! Have a question, suggestions, or special cake request?</p>
        </div>
      </section>

      
      <section className="contact">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email"  />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Write your message here..." rows="5"></textarea>
          </div>

          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </section>
    </div>
  );
}
