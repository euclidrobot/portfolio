const refs = [
  { initial: 'N', name: 'Novemger Pascua', role: 'Senior IT Developer', phone: '+63 929 536 0588', email: 'nnovemgerpascua1019@gmail.com' },
  { initial: 'K', name: 'Kobe Padua', role: 'Airlines Tour Operator', phone: '+63 954 976 3973', email: 'Kobepadua641@gmail.com' },
]

export default function References() {
  return (
    <section id="references">
      <div className="wrap">
        <div className="section-label"><i className="fas fa-users"></i> References</div>
        <h2 className="section-title">Trusted By</h2>
        <p className="section-sub">Professional connections who can speak to my work ethic and capabilities.</p>
        <div className="ref-grid">
          {refs.map((r, i) => (
            <div className="ref-card glass" key={i}>
              <div className="avatar">{r.initial}</div>
              <h4>{r.name}</h4>
              <div className="role">{r.role}</div>
              <a href={'tel:' + r.phone} className="contact-link"><i className="fas fa-phone"></i> {r.phone}</a>
              <br />
              <a href={'mailto:' + r.email} className="contact-link"><i className="fas fa-envelope"></i> Email</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
