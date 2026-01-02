import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Recipe Lens – AI Food Detection & Recommendation System',
      description: [
        'Developed an AI-powered food detection system that analyzes food images and provides intelligent recipe recommendations.',
        'Implemented image processing and classification algorithms to identify various food items from uploaded images.',
        'Designed and managed a structured MySQL database to store comprehensive recipe data including ingredients, cooking methods, and nutritional information.',
        'Built a Django-based web application with RESTful APIs for seamless integration between the frontend and AI model.',
        'Generated actionable insights from model outputs to enhance recommendation accuracy and user experience.',
        'Created a user-friendly interface that allows users to upload food images and receive personalized recipe suggestions based on detected items.'
      ],
      technologies: ['Python', 'Django', 'MySQL', 'AI/ML'],
      github: 'https://github.com',
      live: '#'
    },
    {
      id: 2,
      title: 'QuizMate – Online Quiz Analysis Platform',
      description: [
        'Developed a Django-based web application for interactive online quizzes with a clean, user-friendly interface.',
        'Implemented real-time score calculation and evaluation system for instant feedback after quiz completion.',
        'Built an integrated admin panel for efficient management of quiz content, questions, and results.',
        'Designed responsive UI using HTML, CSS, and JavaScript for seamless user experience across devices.',
        'Implemented secure authentication system for admin access to manage quizzes and view analytics.',
        'Created database models using Django ORM with SQLite for storing quizzes, questions, answers, and user scores.'
      ],
      technologies: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'SQLite'],
      github: null,
      live: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <ul className="project-description">
                  {project.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <div className="project-footer">
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" title="GitHub">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link" title="Live Demo">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

