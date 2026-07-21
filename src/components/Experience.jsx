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
      title: 'Website Developer/Designer',
      company: 'Remote / Philippines',
      items: [
        'Conduct lead generation by researching and qualifying prospects, maintaining organized records in lead trackers',
        'Create marketing creatives (graphics, posts, and promotional materials) to support campaigns and boost engagement',
        'Send out messages and email campaigns to nurture leads and support client outreach efforts',
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
      title: 'Website Developer/Designer',
      company: 'Remote / Philippines',
      items: [
        'Lead generation by researching and qualifying prospects',
        'Maintain organized records in lead trackers',
        'Create marketing creatives (graphics, posts, promotional materials)',
        'Send messages and email campaigns to nurture leads',
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
        <p className="section-sub">Professional experience delivering exceptional client service and operational support.</p>
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
