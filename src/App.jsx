import { useEffect, useRef, useState } from 'react'
import { RiAddLine, RiArrowRightLine, RiArrowRightUpLine, RiBriefcaseLine, RiCheckLine, RiCloseLine, RiFileCopyLine, RiGraduationCapLine, RiMapPinLine, RiMenuLine, RiPlayFill, RiVideoAddLine, RiYoutubeFill } from '@remixicon/react'
import { validate } from './lib/validate'
import { site, stats, projects, skills, services, jobs, education, testimonials, faqs, articles } from './content'

const Eyebrow = ({ n, children }) => <p className="eyebrow"><span>{n}</span>{children}</p>

const Arrow = () => <RiArrowRightLine className="arrow" size="1.15em" aria-hidden="true" />

function Media({ src, video, alt, placeholder, className = '', eager = false }) {
  return (
    <div className={`media ${className}`}>
      {video
        ? <LazyVideo src={video} poster={src} label={alt} />
        : src
          ? <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" width="800" height="600" />
          : <div className="media-ph">{placeholder}</div>}
    </div>
  )
}

/* Muted loop that only downloads and plays while it's on screen. */
function LazyVideo({ src, poster, label }) {
  const ref = useRef()
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const v = ref.current
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {})
      else v.pause()
    }, { threshold: 0.25 })
    io.observe(v)
    return () => io.disconnect()
  }, [])
  return <video ref={ref} src={src} poster={poster} muted loop playsInline preload="none" aria-label={label} />
}

/* Links like /#services arrive before React has rendered the section, so jump once it exists. */
function useInitialHash() {
  useEffect(() => {
    const el = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)))
    if (el) el.scrollIntoView({ behavior: 'instant' })
  }, [])
}

/* Reveals every [data-reveal] node once it scrolls into view. */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        e.target.classList.add('in')
        io.unobserve(e.target)
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -40px' })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Nav({ page }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <div className="nav-outer">
      <div className="nav-inner">
        <div className={`nav-bar${scrolled ? ' scrolled' : ''}`}>
          <a href="/#top" className="logo">{site.name}<span>.</span></a>
          <nav className="nav-links desktop-only">
            {site.nav.map((l, i) => (
              <a key={l.label} href={l.href} className={(page === 'projects' ? l.href === '/projects/' : i === 0) ? 'active' : ''}>{l.label}</a>
            ))}
          </nav>
          <div className="nav-right">
            <a href="#contact-form" className="btn btn-accent btn-md desktop-only">Book a call <Arrow /></a>
            <button
              className={`burger mobile-only${open ? ' open' : ''}`}
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen(o => !o)}
            >
              {open ? <RiCloseLine size={22} aria-hidden="true" /> : <RiMenuLine size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="menu mobile-only">
            {site.nav.map(l => <a key={l.label} href={l.href} onClick={close}>{l.label}</a>)}
            <div className="menu-actions">
              <a href="#contact-form" className="btn btn-accent" onClick={close}>Book a call <Arrow /></a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-portrait">
        <Media src={site.portrait} alt={site.fullName.join(' ')} placeholder="Drop your portrait" className="portrait" eager />
        {site.available && (
          <div className="badge"><span className="dot-live" />{site.availableLabel}</div>
        )}
      </div>
      <div className="hero-col enter">
        <p className="hero-role">{site.role}</p>
        <h1>{site.fullName[0]}<br /><em>{site.fullName[1]}</em></h1>
        <p className="hero-intro">I turn products and ideas into AI-made ads, films and visuals, and run the project from brief to delivery so it lands on time.</p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-accent">Start a project <Arrow /></a>
          <a href="#projects" className="btn btn-ghost">Watch the work <RiPlayFill size="1.15em" aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section id="about" className="stats" data-reveal>
      {stats.map(s => (
        <div key={s.label}>
          <div className="stat-label">{s.label}</div>
          <div className="stat-value">{s.value}</div>
        </div>
      ))}
    </section>
  )
}

/* Endless strip of service names; the list is doubled so the loop has no seam. */
function Ticker() {
  const words = services.flatMap(g => g.items.map(i => i.label))
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[...words, ...words].map((w, i) => <span key={i}>{w}<i>✦</i></span>)}
      </div>
    </div>
  )
}

function ProjectCard({ p, style }) {
  const dialog = useRef()
  const video = useRef()
  const isVideo = p.full?.endsWith('.mp4')
  // Full images render (and download) on first open, not with the page
  const [opened, setOpened] = useState(false)
  const open = e => { e.preventDefault(); setOpened(true); dialog.current.showModal(); video.current?.play().catch(() => {}) }
  const pause = () => video.current?.pause()
  const close = () => { pause(); dialog.current.close() }
  return (
    <>
    {p.full && (
      <dialog ref={dialog} className="player" aria-label={p.name} onCancel={pause} onClose={pause} onClick={e => e.target === e.currentTarget && close()}>
        <button className="player-close" aria-label="Close" onClick={close}><RiCloseLine size="1.4em" aria-hidden="true" /></button>
        {isVideo
          ? <video ref={video} src={p.full} width="720" height="1280" onLoadedMetadata={e => { e.target.width = e.target.videoWidth; e.target.height = e.target.videoHeight }} controls playsInline preload="none" />
          : opened && <img src={p.full} alt={p.name} onClick={close} />}
      </dialog>
    )}
    <a href={p.full || p.href} className={`project${p.full ? (isVideo ? ' playable' : ' playable zoomable') : ''}`} style={style} onClick={p.full ? open : undefined}>
      <Media src={p.image} video={p.video} alt={p.name} placeholder={`Project cover — ${p.name}`} />
      <div className="project-meta">
        <div className="project-name">{p.name}</div>
        <div className="tags">
          {p.tags.map(t => <span key={t}><i />{t}</span>)}
        </div>
      </div>
    </a>
    </>
  )
}

function Projects() {
  return (
    <section id="projects" data-reveal>
      <div className="head-row">
        <div>
          <Eyebrow n="01">Selected work</Eyebrow>
          <h2 className="h2">Recent <em>reels</em> &amp; frames</h2>
        </div>
      </div>
      <div className="grid-projects home-grid">
        {projects.filter(p => p.featured).sort((a, b) => a.featured - b.featured).map(p => <ProjectCard key={p.name} p={p} />)}
      </div>
      <div className="center-row">
        <a href="/projects/" className="btn btn-ghost btn-sm">See all {projects.length} projects <Arrow /></a>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" data-reveal>
      <div className="head-row">
        <div>
          <Eyebrow n="02">Skills</Eyebrow>
          <h2 className="h2">What I bring <em>to the table</em></h2>
        </div>
      </div>
      <div className="grid-3">
        {skills.map((col, ci) => (
          <div key={col.title} className="skill-card">
            <div className="skill-head"><span>0{ci + 1}</span>{col.title}</div>
            {col.items.map(it => <div key={it} className="skill-item">{it}</div>)}
          </div>
        ))}
      </div>
      <div className="banner">
        <div style={{ minWidth: 0 }}>
          <div className="banner-title">Have a project in mind?</div>
          <div className="banner-sub">Let's bring your concept to reality.</div>
        </div>
        <div className="banner-actions">
          <a href="#contact" className="btn btn-accent btn-md">Start your next project <Arrow /></a>
          <a href="#contact" className="btn btn-ghost btn-md">Schedule a meeting <RiVideoAddLine size="1.15em" aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" data-reveal>
      <div className="head-row">
        <div>
          <Eyebrow n="03">Services</Eyebrow>
          <h2 className="h2">What I can <em>make for you</em></h2>
        </div>
      </div>
      {services.map(g => (
        <div key={g.title} className="service-group">
          <div className="service-title">{g.title}</div>
          <div className="chips">
            {g.items.map(({ label, icon: Icon }) => <div key={label} className="chip"><b><Icon size={18} aria-hidden="true" /></b>{label}</div>)}
          </div>
        </div>
      ))}
    </section>
  )
}

function Career() {
  return (
    <section id="journey" className="timeline" data-reveal>
      <h2 className="h2">Career <em>so far</em></h2>
      <div className="timeline-list">
        {jobs.map((j, i) => (
          <div key={i} className="job">
            <div className="pills"><span>{j.company}</span><span>{j.dates}</span></div>
            <div className="job-role">{j.role}</div>
            <div className="job-desc">{j.desc}</div>
            <div className="job-foot">
              <span><RiMapPinLine size={14} aria-hidden="true" />{j.location}</span>
              <span><RiBriefcaseLine size={14} aria-hidden="true" />{j.type}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" data-reveal>
      <div className="head-row">
        <div>
          <Eyebrow n="04">Education</Eyebrow>
          <h2 className="h2">Where I <em>study</em></h2>
        </div>
      </div>
      <div className="edu-list">
        {education.map(e => (
          <div key={e.school + e.degree} className="edu">
            <div className="edu-icon"><RiGraduationCapLine size={26} aria-hidden="true" /></div>
            <div className="edu-main">
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
            </div>
            <div className="edu-level">{e.level}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section data-reveal>
      <h2 className="h2-center">What people say about my work</h2>
      <div className="grid-testimonials">
        {testimonials.map((t, i) => (
          <div key={i} className="quote">
            <div className="quote-brand"><i />{t.company}</div>
            <div className="quote-text">“{t.quote}”</div>
            <div className="quote-foot">
              <Media src={t.avatar} alt={t.name} placeholder="" className="avatar" />
              <div>
                <div className="quote-name">{t.name}</div>
                <div className="quote-title">{t.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="faq-section" data-reveal>
      <div className="faq-aside">
        <div>
          <Eyebrow n="05">FAQ</Eyebrow>
          <h2 className="h2">Good <em>questions</em></h2>
        </div>
        <div className="faq-card">
          <div style={{ fontSize: 15, fontWeight: 600 }}>Need more clarity or details?</div>
          <div style={{ fontSize: 12.5, lineHeight: 1.5, color: 'var(--muted-2)' }}>
            I'm here to answer any additional questions and guide you through the next steps.
          </div>
          <a href="#contact" className="btn btn-accent btn-sm" style={{ justifyContent: 'center', marginTop: 8 }}>
            Let's talk about it <Arrow />
          </a>
        </div>
      </div>
      <div className="faq-list">
        {faqs.map((f, i) => (
          <div key={f.q} className={`faq${open === i ? ' open' : ''}`}>
            <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
              <span>{f.q}</span><RiAddLine size={20} aria-hidden="true" />
            </button>
            <div className="faq-body"><div><p>{f.a}</p></div></div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Articles() {
  return (
    <section id="articles" className="narrow" data-reveal style={{ paddingBottom: 100 }}>
      <div className="head-row" style={{ marginBottom: 40 }}>
        <h2 className="h2" style={{ maxWidth: 420, fontSize: 'clamp(40px,5.5vw,56px)', lineHeight: 1.05 }}>
          Exploring design &amp; creativity
        </h2>
        <a href="#articles" className="btn btn-ghost btn-sm">Explore more <Arrow /></a>
      </div>
      <div className="grid-articles">
        {articles.map(a => (
          <a key={a.title} href={a.href} className="article">
            <Media src={a.image} alt={a.title} placeholder="Article cover" />
            <div className="article-meta"><span>{a.date}</span><span>/</span><span>{a.read}</span></div>
            <div className="article-title">{a.title}</div>
          </a>
        ))}
      </div>
    </section>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = k => e => {
    setForm(f => ({ ...f, [k]: e.target.value }))
    setErrors(er => ({ ...er, [k]: undefined }))
  }

  const submit = e => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) return setErrors(errs)
    setErrors({})
    setSent(true)
    // ponytail: no backend — wire this to Formspree/Resend/your API when you have one.
  }

  if (sent) {
    return (
      <div id="contact-form" className="panel">
        <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-.03em' }}>Let's Connect</div>
        <div className="sent">
          <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: '-.02em' }}>Thanks, {form.name}.</div>
          <div style={{ fontSize: 14, color: 'var(--muted-2)', lineHeight: 1.5 }}>I'll get back to you within two working days.</div>
          <button onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}>Send another</button>
        </div>
      </div>
    )
  }

  return (
    <form id="contact-form" className="panel" onSubmit={submit} noValidate>
      <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-.03em', marginBottom: 8 }}>Let's Connect</div>
      <div className={`field${errors.name ? ' error' : ''}`}>
        <input value={form.name} onChange={set('name')} placeholder="Enter your name" aria-label="Your name" />
        {errors.name && <small>{errors.name}</small>}
      </div>
      <div className={`field${errors.email ? ' error' : ''}`}>
        <input type="email" value={form.email} onChange={set('email')} placeholder="Enter your email" aria-label="Your email" />
        {errors.email && <small>{errors.email}</small>}
      </div>
      <div className={`field${errors.message ? ' error' : ''}`}>
        <textarea value={form.message} onChange={set('message')} placeholder="Tell me about your project..." rows="4" aria-label="Your message" />
        {errors.message && <small>{errors.message}</small>}
      </div>
      <button type="submit" className="submit">Submit</button>
    </form>
  )
}

function Footer() {
  const [copied, setCopied] = useState(false)
  const timer = useRef()

  const copy = () => {
    navigator.clipboard?.writeText(site.email).catch(() => {})
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 1800)
  }
  useEffect(() => () => clearTimeout(timer.current), [])

  return (
    <section id="contact" className="footer" data-reveal>
      <div className="cta">
        <div style={{ minWidth: 0 }}>
          <div className="cta-title">Let's make something <em>worth watching</em></div>
          <div className="cta-sub">Tell me about your product and I'll come back with an idea.</div>
        </div>
        <div className="banner-actions">
          <a href="#contact-form" className="btn btn-accent btn-sm">Start your next project <Arrow /></a>
        </div>
      </div>

      <div className="footer-grid">
        <div className="panel" style={{ justifyContent: 'space-between' }}>
          <div className="footer-links">
            {site.footerNav.map(l => (
              <a key={l.label} href={l.href}><span>{l.label}</span><RiArrowRightUpLine size={22} aria-hidden="true" /></a>
            ))}
          </div>
          <div className="footer-contact">
            {site.email && (
              <button className="copy-btn" onClick={copy}>
                {copied ? 'Copied to clipboard' : site.email} {copied ? <RiCheckLine size={16} aria-hidden="true" /> : <RiFileCopyLine size={16} aria-hidden="true" />}
              </button>
            )}
            <div className="socials">
              {site.socials.filter(s => s.href).map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social" aria-label={s.label}>
                  <s.icon size={20} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <ContactForm />
      </div>

      <div className="colophon">
        <span>© {new Date().getFullYear()} {site.fullName.join(' ')}</span>
        <span>{site.location}</span>
      </div>
    </section>
  )
}

export function ProjectsPage() {
  useInitialHash()
  useReveal()
  const subs = ['All', ...new Set(projects.map(p => p.sub))]
  const [sub, setSub] = useState('All')
  const shown = sub === 'All' ? projects : projects.filter(p => p.sub === sub)

  return (
    <>
      <Nav page="projects" />
      <div id="top" className="wrap">
        <section className="page-head enter">
          <div>
            <Eyebrow n={String(projects.length)}>Projects</Eyebrow>
            <h1 className="page-title">All the <em>work</em></h1>
            <p className="page-sub">AI videos, illustrations and character designs, from client work to personal pieces.</p>
          </div>
          <div className="filters" role="group" aria-label="Filter projects by style">
            {subs.map(s => (
              <button key={s} className={`filter${sub === s ? ' active' : ''}`} aria-pressed={sub === s} onClick={() => setSub(s)}>{s}</button>
            ))}
          </div>
        </section>
        <section>
          <div key={sub} className="grid-projects wide">
            {shown.map((p, i) => <ProjectCard key={p.name} p={p} style={{ animationDelay: `${i * 50}ms` }} />)}
          </div>
          {site.youtube && (
            <div className="center-row">
              <a href={site.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                More on my YouTube channel <RiYoutubeFill size="1.15em" aria-hidden="true" />
              </a>
            </div>
          )}
        </section>
        <Footer />
      </div>
    </>
  )
}

export default function App() {
  useInitialHash()
  useReveal()
  return (
    <>
      <Nav page="home" />
      <div id="top" className="wrap">
        <Hero />
        <Stats />
      </div>
      <Ticker />
      <div className="wrap">
        <Projects />
        <Skills />
        <Services />
        {jobs.length > 0 && <Career />}
        <Education />
        {testimonials.length > 0 && <Testimonials />}
        <Faq />
        {articles.length > 0 && <Articles />}
        <Footer />
      </div>
    </>
  )
}
