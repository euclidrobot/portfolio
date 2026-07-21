import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import References from './components/References'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [isLight, setIsLight] = useState(false)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('light', isLight)
  }, [isLight])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMouse = (e) => {
    const orbs = document.querySelectorAll('.bg-orbs .orb')
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
    orbs.forEach((orb, i) => {
      const speed = (i + 1) * 10
      orb.style.transform = `translate(${x * speed - speed / 2}px, ${y * speed - speed / 2}px)`
    })
  }

  return (
    <div onMouseMove={handleMouse}>
      <div className="bg-orbs"><div className="orb"></div><div className="orb"></div><div className="orb"></div></div>
      <div className="bg-grid"></div>

      <Navbar isLight={isLight} onToggleTheme={() => setIsLight(p => !p)} />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <References />
        <Contact />
      </main>

      <Footer />

      <button
        className={'back-top' + (showTop ? ' visible' : '')}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  )
}
