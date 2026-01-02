import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'Data Analysis',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'SQL', level: 80 },
        { name: 'Excel', level: 85 },
        { name: 'Pandas', level: 80 },
        { name: 'NumPy', level: 75 },
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React.js', level: 80 },
        { name: 'Django', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'Java', level: 70 },
        { name: 'HTML/CSS', level: 85 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Matplotlib', level: 75 },
        { name: 'ServiceNow', level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

