import { Link } from 'react-router-dom'

const WHATSAPP_LINK = import.meta.env.VITE_WHATSAPP_LINK || 'https://wa.me/09180424577'

const Hero = () => {
  return (
    <section className="hero reveal" aria-labelledby="hero-heading">
      <div className="container hero__inner">
        <div className="hero__badge reveal" aria-label="Promotional badge">
          Stop Watching Tutorials!
        </div>

        <h1 id="hero-heading" className="hero__title reveal reveal-delay-1">
          Build Real Tech Skills
        </h1>

        <p className="hero__description reveal reveal-delay-2">
          <span className="hero__text-mobile">Structured, hands-on bootcamps with real projects, live classes, and AI workflows.</span>
          <span className="hero__text-desktop">Join our Structured, hands-on bootcamps with real projects,<span className="hero__break"> </span>live classes, and AI workflows.</span>
        </p>

        <div className="hero__cta-group reveal reveal-delay-3">
          <Link to="/bootcamps" className="btn btn--primary" id="hero-view-bootcamps">
            View Courses <span className="material-icons">arrow_forward</span>
          </Link>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
            id="hero-speak-advisor"
          >
            <span className="material-icons">call</span>
            Speak With an Advisor
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero