import './Certifications.css';

function Certifications() {
  const certifications = [
    {
      id: 1,
      title: 'ServiceNow Certified System Administrator (CSA)',
      issuer: 'ServiceNow',
      type: 'certification'
    },
    {
      id: 2,
      title: 'ServiceNow Certified Application Developer (CAD)',
      issuer: 'ServiceNow',
      type: 'certification'
    },
    {
      id: 3,
      title: 'Solved 180+ LeetCode Problems',
      issuer: 'LeetCode',
      type: 'achievement'
    },
    {
      id: 4,
      title: 'HackerRank Badges',
      issuer: 'HackerRank',
      description: 'Problem Solving, Python',
      type: 'achievement'
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="cert-icon">
                {cert.type === 'certification' ? (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                ) : (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                )}
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              {cert.description && (
                <p className="cert-description">{cert.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;

