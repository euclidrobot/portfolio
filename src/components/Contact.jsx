import { useState } from 'react'

const contacts = [
  { icon: 'fa-envelope', text: 'robytolang@gmail.com', sub: 'Email me anytime', action: () => window.open('mailto:robytolang@gmail.com') },
  { icon: 'fa-phone', text: '+63 961 353 2290', sub: 'Call or text', action: () => window.open('tel:+639613532290') },
  { icon: 'fa-map-marker-alt', text: 'Manuel Quezon St. Purok #1', sub: 'New Lower Bicutan, Taguig City, Philippines 1631', action: () => window.open('https://maps.google.com/?q=Manuel+Quezon+St+Purok+1+New+Lower+Bicutan+Taguig+City+Philippines') },
  { icon: 'fa-address-book', text: 'References Available', sub: 'Upon request', action: () => window.open('mailto:nnovemgerpascua1019@gmail.com?cc=Kobepadua641@gmail.com') },
]

export default function Contact() {
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setStatus('Thank you! Your message has been sent. I will get back to you soon.')
    setTimeout(() => { setSending(false); setStatus(''); e.target.reset() }, 2000)
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-label"><i className="fas fa-paper-plane"></i> Contact</div>
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-sub">Ready to collaborate? Drop me a message or reach out directly.</p>
        <div className="contact-grid">
          <div className="contact-info glass">
            {contacts.map((c, i) => (
              <div className="contact-item" key={i} onClick={c.action}>
                <div className="ci-icon"><i className={'fas ' + c.icon}></i></div>
                <div><div className="ci-text">{c.text}</div><div className="ci-sub">{c.sub}</div></div>
              </div>
            ))}
          </div>
          <form className="contact-form glass" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>
            <div className="form-group"><input type="text" placeholder="Your Name" required /></div>
            <div className="form-group"><input type="email" placeholder="Your Email" required /></div>
            <div className="form-group"><input type="text" placeholder="Subject" /></div>
            <div className="form-group"><textarea placeholder="Your Message..." required></textarea></div>
            <button type="submit" className="btn btn-primary" style={{width:'100%',justifyContent:'center'}} disabled={sending}>
              {sending ? <><i className="fas fa-spinner fa-spin"></i> Sending...</> : <><i className="fas fa-paper-plane"></i> Send Message</>}
            </button>
            <div className="form-status">{status}</div>
          </form>
        </div>
      </div>
    </section>
  )
}
