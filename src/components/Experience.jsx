import { useState } from 'react'

const roles = [
  { id: 'bplo', label: 'BPLO Info Desk' },
  { id: 'itdev', label: 'Freelance' },
]

const data = {
  all: [
    {
      period: 'April 2025 — April 2026',
      title: 'BPLO Information Desk',
      company: 'SM Aura Satellite Office, Taguig, Philippines',
      items: [
        'Handle client concerns and business-related issues professionally, fostering long-term relationships through clear communication',
        'Provide exceptional client service through advice and proactive assistance',
        'Provide information for business permit licensing office process and requirements',
        'Handle meeting areas for government officials including time and agenda of meetings',
        'Assist taxpayers for Real Property Tax payments and inquiries',
        'Hold feedback messages of taxpayers and handle all inquiries needed',
      ],
    },
    {
      period: 'Freelance',
      title: 'Website Developer & Automation Expert',
      company: 'Remote / Philippines',
      items: [
        'Design and develop responsive websites using modern AI-assisted workflows (vibe coding), delivering polished results in record time',
        'Build custom automation solutions for lead generation, email outreach, and CRM integration to streamline business operations',
        'Create tailored website experiences combining clean UI/UX design with functional features tailored to client needs',
        'Manage end-to-end project lifecycle from concept and wireframing to deployment and ongoing maintenance',
      ],
    },
  ],
  bplo: [
    {
      period: 'April 2025 — April 2026',
      title: 'BPLO Information Desk',
      company: 'SM Aura Satellite Office, Taguig, Philippines',
      items: [
        'Handle client concerns and business-related issues professionally',
        'Provide exceptional client service through advice and proactive assistance',
        'Provide information for business permit licensing office process and requirements',
        'Handle meeting areas for government officials including time and agenda',
        'Assist taxpayers for Real Property Tax payments and inquiries',
        'Hold feedback messages of taxpayers and handle all inquiries',
      ],
    },
  ],
  itdev: [
    {
      period: 'Freelance',
      title: 'Website Developer & Automation Expert',
      company: 'Remote / Philippines',
      items: [
        'Design and develop responsive websites using AI-assisted workflows (vibe coding)',
        'Build custom automation for lead generation, email outreach, and CRM integration',
        'Create tailored websites with clean UI/UX design and client-specific features',
        'Manage end-to-end project lifecycle from concept to deployment and maintenance',
      ],
    },
  ],
}

export default function Experience() {
  const [tab, setTab] = useState('all')
  const entries = data[tab]

  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-label"><i className="fas fa-briefcase"></i> Experience</div>
        <h2 className="section-title">Work History</h2>
        <p className="section-sub">Blending design, development, and automation to build modern web experiences and streamline workflows.</p>
        <div className="tabs">
          {[{ id: 'all', label: 'All' }, ...roles].map(r => (
            <button key={r.id} className={'tab-btn' + (tab === r.id ? ' active' : '')} onClick={() => setTab(r.id)}>
              {r.label}
            </button>
          ))}
        </div>
        <div className="timeline glass" style={{padding:30,borderRadius:20}}>
          <div className={'tab-content active'}>
            {entries.map((item, i) => (
              <div className="timeline-item" key={i}>
                <div className="period">{item.period}</div>
                <h4>{item.title}</h4>
                <div className="company">{item.company}</div>
                <ul>{item.items.map((li, j) => <li key={j}>{li}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
