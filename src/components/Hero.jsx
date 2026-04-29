import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero__inner">
        {/* Badge */}
        <div className="hero__badge" aria-label="Promotional badge">
          Stop Watching Tutorials!
        </div>

        {/* Headline */}
        <h1 id="hero-heading" className="hero__title">
          Start Building Real<br />Tech Skills That Pay
        </h1>

        {/* Sub-copy */}
        <p className="hero__description">
          Join structured, hands-on bootcamps designed to take you from confused
          beginner to confident talent, with up-to-date curriculum, real
          projects, live classes and AI integrated workflow.
        </p>

        {/* CTAs */}
        <div className="hero__cta-group">
          <Link to="/bootcamps" className="btn btn--primary" id="hero-view-bootcamps">
            View Bootcamps <span className="material-icons">arrow_forward</span>
          </Link>
          <a
            href="https://api.whatsapp.com/send?phone=8139111114"
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
