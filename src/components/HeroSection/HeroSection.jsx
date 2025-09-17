import "./HeroSection.css";
export default function HeroSection() {
  return (
    <>
      <div className="hero-section-container">
        <div class="overlay">
        <div className="center">
            <div className="hero-content">
            <h1>Welcome to Hayatabad Degree College</h1>
            <p>Shaping Future Leaders</p>
            <div className="hero-buttons">
              <a href="#" className="btn apply">
                📘 Apply Now
              </a>
              <a href="#" className="btn programs">
                📅 View Programs
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
