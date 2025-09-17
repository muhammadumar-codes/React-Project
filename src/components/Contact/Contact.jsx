import "./Contact.css";

export default function ContactPage() {
  return (
    <>
      <div className="contact-container">
        <h1 className="contact-title">📞 Contact Us</h1>
        <p className="contact-subtitle">
          We’d love to hear from you! Reach out via phone, email, or send us a
          message below.
        </p>

        <div className="contact-grid">
          {/* <!-- Left Side --> */}
          <div className="contact-info">
            <div className="info-item">
              <h3>📍 Address</h3>
              <p>Phase 6 Hayatab Peshawer, Pakistan</p>
            </div>
            <div className="info-item">
              <h3>📞 Phone</h3>
              <p>+92 3010568885</p>
            </div>
            <div className="info-item">
              <h3>📧 Email</h3>
              <p>muhammadumar.codes@gmail.com</p>
            </div>
          </div>

          {/* <!-- Right Side --> */}
          <div className="contact-form">
            <form>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
              />

              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />

              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message..."
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>

        {/* <!-- Map --> */}

        <iframe  className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.674174369757!2d71.44403144662871!3d33.95577853718751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d91a77225d6e47%3A0x41338d425a69b848!2sGovernment%20Degree%20College%20for%20Boys%2C%20Hayatabad!5e0!3m2!1sen!2s!4v1758104369820!5m2!1sen!2s" allowfullscreen="" loading="lazy" ></iframe>
      
      </div>
    </>
  );
}
