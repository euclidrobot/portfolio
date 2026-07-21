import { useEffect, useState, useRef } from 'react'

function Counter({ target, suffix }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    const ob = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done.current) {
        done.current = true
        let cur = 0
        const step = Math.ceil(target / 40)
        const iv = setInterval(() => {
          cur += step
          if (cur >= target) { setVal(target); clearInterval(iv) }
          else setVal(cur)
        }, 30)
      }
    }, { threshold: .5 })
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [target])

  return <span ref={ref}>{val}{suffix}</span>
}

export default function Hero() {
  const [text, setText] = useState('')
  const full = 'Highly motivated professional dedicated to outstanding service, operational excellence, and exceeding expectations through diligence and reliability.'

  useEffect(() => {
    let i = 0
    const iv = setInterval(() => {
      if (i < full.length) { setText(full.slice(0, i + 1)); i++ }
      else clearInterval(iv)
    }, 18)
    return () => clearInterval(iv)
  }, [])

  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-badge"><i className="fas fa-sparkles"></i> Virtual Assistant — Part Time</div>
        <h1>Robin Euclid<br /><span className="grad">E. Tolang</span></h1>
        <p className="hero-sub">{text}<span style={{animation:'blink .8s infinite'}}>|</span></p>
        <div className="hero-actions">
          <a className="btn btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
            <i className="fas fa-paper-plane"></i> Hire Me
          </a>
          <a className="btn btn-glass" onClick={() => document.getElementById('experience')?.scrollIntoView({behavior:'smooth'})}>
            <i className="fas fa-briefcase"></i> View Experience
          </a>
          <a className="btn btn-glass" href="#" onClick={e => { e.preventDefault(); alert('Downloading resume...') }}>
            <i className="fas fa-download"></i> Resume
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><div className="num"><Counter target={2} suffix="+" /></div><div className="label">Years Experience</div></div>
          <div className="hero-stat"><div className="num"><Counter target={8} suffix="+" /></div><div className="label">Certifications</div></div>
          <div className="hero-stat"><div className="num"><Counter target={50} suffix="+" /></div><div className="label">Projects</div></div>
        </div>
      </div>
    </section>
  )
}
