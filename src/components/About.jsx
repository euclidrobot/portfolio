export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-label"><i className="fas fa-user"></i> About Me</div>
        <h2 className="section-title">Dedicated to Service Excellence</h2>
        <p className="section-sub">A highly motivated individual with a strong commitment to providing outstanding service and exceeding customer expectations.</p>
        <div className="about-grid">
          <div className="about-card glass">
            <h3><i className="fas fa-quote-left" style={{color:'#6c5ce7',fontSize:14,marginRight:8}}></i>Summary</h3>
            <p>Committed to leveraging my skills and strengths to exceed client expectations and uphold the highest standards of service. I strive to contribute meaningfully to organizational success through diligence, reliability, and a strong commitment to excellence.</p>
          </div>
          <div className="about-card glass">
            <h3><i className="fas fa-graduation-cap" style={{color:'#6c5ce7',fontSize:14,marginRight:8}}></i>Education</h3>
            <p style={{fontWeight:600,fontSize:16}}>Bachelor of Science in Hospitality Management</p>
            <p>Taguig City University, Taguig, Philippines — 2019-2023</p>
            <div className="about-tags">
              <span>Hospitality</span>
              <span>Service Management</span>
              <span>Customer Relations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
