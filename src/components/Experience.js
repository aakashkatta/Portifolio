import './Experience.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Full Stack Developer - Virtual Internship',
      company: 'SmartBridge',
      period: '2025 - Present',
      description: [
        'Working with structured datasets while developing web-based applications',
        'Gaining experience in data handling, database queries, and backend logic',
        'Strengthening analytical thinking and problem-solving through practical assignments',
        'Applying data analysis skills to improve application functionality'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-company">{exp.company}</span>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <ul className="timeline-description">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

