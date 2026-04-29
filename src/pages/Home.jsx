import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import CTASection from '../components/CTASection.jsx'
import BootcampCard from '../components/BootcampCard.jsx'
import Footer from '../components/Footer.jsx'
import bootcamps from '../data/bootcamps.js'

/* ---- SVG icons for "Why Learn With Us" ---- */
const icons = {
  curriculum: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  mentor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  project: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  community: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  ),
  career: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </svg>
  ),
  recording: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  ),
}

const features = [
  { id: 1, icon: 'curriculum', text: 'We work with modern curriculum that gets updated constantly as tech evolves' },
  { id: 2, icon: 'mentor',     text: 'Our training experts are industry leaders with field experience' },
  { id: 3, icon: 'project',    text: 'Work on real projects that will be part of your portfolio' },
  { id: 4, icon: 'community',  text: 'Gain team experience as you work collaboratively with your peers and a vibrant community' },
  { id: 5, icon: 'career',     text: 'Get career support ranging from portfolio creation, CV & LinkedIn Optimization and more' },
  { id: 6, icon: 'recording',  text: 'Get lifetime access to video recordings of your class sessions.' },
]

const Home = () => {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <CTASection />

        {/* Why Learn With Us */}
        <section className="why-learn" aria-labelledby="why-heading">
          <div className="container">
            <div className="why-learn__header">
              <h2 id="why-heading" className="why-learn__title">Why Learn With Us</h2>
            </div>
            <ul className="why-learn__grid" role="list">
              {features.map((f) => (
                <li key={f.id} className="why-learn__card">
                  <div className="why-learn__card-icon">{icons[f.icon]}</div>
                  <p className="why-learn__card-text">{f.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Motivational quote */}
        <div className="quote-band" role="complementary" aria-label="Motivational quote">
          <div className="container">
            <p className="quote-band__text">
              &ldquo;The best time to plant a tree was ten years ago. The next best time is <em>now.</em>&rdquo;
            </p>
          </div>
        </div>

        {/* Choose a Bootcamp */}
        <section className="bootcamps-section" aria-labelledby="bootcamps-heading">
          <div className="container">
            <div className="bootcamps-section__header">
              <h2 id="bootcamps-heading" className="bootcamps-section__title">Choose a Bootcamp</h2>
            </div>
            {bootcamps.length === 0 ? (
              <p className="bootcamps-section__empty">No bootcamps available right now. Check back soon.</p>
            ) : (
              <ul className="bootcamps-section__grid" role="list">
                {bootcamps.map((b) => (
                  <li key={b.id}>
                    <BootcampCard bootcamp={b} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
