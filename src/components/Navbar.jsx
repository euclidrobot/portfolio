import { useState } from 'react'

export default function Navbar({ isLight, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav>
      <div className="logo">ROBIN<span style={{color:'rgba(255,255,255,.3)'}}>.dev</span></div>
      <div className={'nav-links' + (open ? ' open' : '')}>
        <a onClick={() => scrollTo('about')}>About</a>
        <a onClick={() => scrollTo('experience')}>Experience</a>
        <a onClick={() => scrollTo('skills')}>Skills</a>
        <a onClick={() => scrollTo('certifications')}>Certifications</a>
        <a onClick={() => scrollTo('contact')}>Contact</a>
      </div>
      <div style={{display:'flex',gap:8,alignItems:'center'}}>
        <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
          <i className={isLight ? 'fas fa-sun' : 'fas fa-moon'}></i>
        </button>
        <button className="mobile-toggle" onClick={() => setOpen(p => !p)} aria-label="Menu">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  )
}
