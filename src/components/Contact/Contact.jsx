import "./Contact.css"

export default function ContactPage(){
    return (
        <>
     <div className="contact-container">
    <h1 className="contact-title">📞 Contact Us</h1>
    <p className="contact-subtitle">We’d love to hear from you! Reach out via phone, email, or send us a message below.</p>

    <div className="contact-grid">
      {/* <!-- Left Side --> */}
      <div className="contact-info">
        <div className="info-item">
          <h3>📍 Address</h3>
          <p>XYZ College, Main Road, Peshawar, Pakistan</p>
        </div>
        <div className="info-item">
          <h3>📞 Phone</h3>
          <p>+92 300 1234567</p>
        </div>
        <div className="info-item">
          <h3>📧 Email</h3>
          <p>info@xyzcollege.edu.pk</p>
        </div>
      </div>

      {/* <!-- Right Side --> */}
      <div className="contact-form">
        <form>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" required>

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Enter your email" required>

          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="5" placeholder="Write your message..." required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>

    {/* <!-- Map --> */}
    <iframe 
      className="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13286.059294208855!2d71.5041844!3d34.0151364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dec1b268c5a2c1%3A0xfaa07d4a86b2c4e!2sPeshawar%20University!5e0!3m2!1sen!2s!4v1694208200000!5m2!1sen!2s" 
      allowfullscreen="" loading="lazy">
    </iframe>
  </div>

  </div>
  
        </>
    )
}