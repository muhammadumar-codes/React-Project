import "./About.css"
export default function About (){

    return (
        <>

{/* <!-- About Section --> */}
<section className="about">
  <div className="about-container">

    {/* <!-- Intro --> */}
    <div className="about-content">
      <h2>About Our College</h2>
      <p>
        Founded in 1990, <b>XYZ College</b> is dedicated to academic excellence,
        innovation, and student success. With highly qualified faculty and
        modern facilities, we nurture students to become leaders in their fields.
      </p>
    </div>

    {/* <!-- Mission & Vision --> */}
    <div className="about-mission">
      <div className="card">
        <h3>🎯 Our Mission</h3>
        <p>
          To provide quality education and create a learning environment that
          inspires innovation, critical thinking, and lifelong learning.
        </p>
      </div>
      <div className="card">
        <h3>🌍 Our Vision</h3>
        <p>
          To be a globally recognized institution that shapes future leaders
          and contributes to society through knowledge and research.
        </p>
      </div>
      <div className="card">
        <h3>💡 Our Values</h3>
        <p>
          Integrity, Excellence, Innovation, and Commitment to Student Success.
        </p>
      </div>
    </div>

    {/* <!-- Stats --> */}
    <div className="about-stats">
      <div className="stat">
        <h2>5000+</h2>
        <p>Students Enrolled</p>
      </div>
      <div className="stat">
        <h2>50+</h2>
        <p>Programs Offered</p>
      </div>
      <div className="stat">
        <h2>100+</h2>
        <p>Qualified Faculty</p>
      </div>
      <div className="stat">
        <h2>30+</h2>
        <p>Years of Excellence</p>
      </div>
    </div>

    {/* <!-- Read More --> */}
    <div className="about-btn">
      <a href="about.html" className="btn read-more">Read More</a>
    </div>
  </div>
</section>


        
        </>
    )

}