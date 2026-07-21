import { useEffect, useRef } from 'react'

const cats = [
  {
    title: 'Office & Productivity', icon: 'fa-laptop', items: [
      { label: 'MS Office (Word, Excel, PowerPoint)', pct: 95 },
      { label: 'Google Workspace', pct: 90 },
    ],
  },
  {
    title: 'Project Management', icon: 'fa-tasks', items: [
      { label: 'GHL, ClickUp, Arcads', pct: 85 },
      { label: 'Lead Tracking & CRM', pct: 88 },
    ],
  },
  {
    title: 'Creative & Design', icon: 'fa-paint-brush', items: [
      { label: 'Canva, CapCut', pct: 82 },
      { label: 'Social Media Management', pct: 85 },
    ],
  },
  {
    title: 'Communications', icon: 'fa-envelope', items: [
      { label: 'Email Campaign Setup & Monitoring', pct: 90 },
      { label: 'Market Research & Reporting', pct: 80 },
    ],
  },
]

function SkillBar({ pct }) {
  const ref = useRef(null)

  useEffect(() => {
    const ob = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        ref.current.style.width = pct + '%'
        ob.disconnect()
      }
    }, { threshold: .5 })
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [pct])

  return (
    <div className="skill-item">
      <div className="skill-label"><span>{' '}</span><span>{pct}%</span></div>
      <div className="skill-bar"><div className="skill-bar-fill" ref={ref}></div></div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-label"><i className="fas fa-code"></i> Skills</div>
        <h2 className="section-title">Toolkit & Expertise</h2>
        <p className="section-sub">A diverse skill set spanning office productivity, project management, design tools, and client relations.</p>
        <div className="skills-grid">
          {cats.map((cat, i) => (
            <div className="skill-cat" key={i}>
              <h4><i className={'fas ' + cat.icon}></i> {cat.title}</h4>
              {cat.items.map((item, j) => (
                <div key={j}>
                  <div className="skill-label"><span>{item.label}</span><span>{item.pct}%</span></div>
                  <div className="skill-bar"><SkillBar pct={item.pct} /></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
