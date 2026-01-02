import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Motivated Computer Science undergraduate with a strong foundation in Java, Python, Data Structures,
              and Web Development. Experienced in building scalable applications, working with databases and REST APIs,
              and solving real-world problems through clean and efficient code. Actively preparing for software
              engineering roles with consistent hands-on project development and algorithmic practice.
            </p>
            <p>
              Currently working as a Full Stack Developer intern at SmartBridge, where I work with structured
              datasets while developing web-based applications. I have experience in data handling, database
              queries, and backend logic, which has strengthened my analytical thinking and problem-solving skills.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3>180+</h3>
                <p>LeetCode Problems</p>
              </div>
              <div className="stat-item">
                <h3>2</h3>
                <p>ServiceNow Certifications</p>
              </div>
              <div className="stat-item">
                <h3>7.32</h3>
                <p>CGPA (B.Tech)</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <svg width="400" height="400" viewBox="0 0 400 400">
             

              <rect width="400" height="400" rx="20" fill="#3498db" opacity="0.1" />

              <image
                href="/myphoto.png"
                width="400"
                height="400"
                clipPath="url(#photoClip)"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;