const certs = [
  { icon: 'fa-star', title: 'Filipino Brand of Service Excellence', sub: 'Service Quality Standards' },
  { icon: 'fa-comments', title: 'Participating in Workplace Communication', sub: 'Effective Communication' },
  { icon: 'fa-inbox', title: 'Receiving & Responding to Workplace Communication', sub: 'Workplace Etiquette' },
  { icon: 'fa-globe', title: 'English for Tourism Professionals', sub: 'Language Proficiency' },
  { icon: 'fa-door-open', title: 'Introduction to Front Office Services', sub: 'Front Office Operations' },
  { icon: 'fa-concierge-bell', title: 'Providing Front Office Services', sub: 'Hospitality Services' },
]

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="wrap">
        <div className="section-label"><i className="fas fa-certificate"></i> Certifications</div>
        <h2 className="section-title">Professional Development</h2>
        <p className="section-sub">Continuous learning to deliver the highest quality service.</p>
        <div className="certs-grid">
          {certs.map((c, i) => (
            <div className="cert-card glass" key={i}>
              <div className="icon"><i className={'fas ' + c.icon}></i></div>
              <h4>{c.title}</h4>
              <p>{c.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
