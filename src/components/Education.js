import './Education.css';

function Education() {
  const education = [
    {
      id: 1,
      degree: 'B.Tech in Computer Science (Artificial Intelligence)',
      institution: 'Sri Vasavi Engineering College, Tadepalligudem',
      cgpa: '7.32/10',
      percentage: '65.69%',
      period: 'Expected April 2026',
      status: 'current'
    },
    {
      id: 2,
      degree: 'Intermediate (MPC)',
      institution: 'Sri Chaitanya Junior College, Guntur',
      percentage: '79.4%',
      period: '2022',
      status: 'completed'
    },
    {
      id: 3,
      degree: 'SSC',
      institution: 'Nandi School, Pedanandipadu',
      percentage: '86%',
      period: '2020',
      status: 'completed'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={edu.id} className="education-item">
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <div className="education-details">
                  {edu.cgpa && <span className="education-score">CGPA: {edu.cgpa}</span>}
                  {edu.percentage && <span className="education-score">Percentage: {edu.percentage}</span>}
                  <span className="education-period">{edu.period}</span>
                </div>
                {edu.status === 'current' && (
                  <span className="education-badge">Current</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

