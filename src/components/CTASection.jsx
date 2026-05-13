import { Link } from 'react-router-dom'

const CTASection = () => {
  return (
    <section className="cta-section reveal" aria-labelledby="cta-heading">
      <div className="container cta-section__inner">
        <h2 id="cta-heading" className="cta-section__title reveal">
          We Turn Beginners Into<br />Talents Who Can Compete
        </h2>
        <p className="cta-section__description reveal reveal-delay-1">
          We created this bootcamp for people tired of guessing their way
          through tech. No outdated lessons, no learning without direction.
          Just structured training &amp; real projects. Learn the practical
          skills that matter now and create real opportunities for yourself.
        </p>
        <Link to="/bootcamps" className="btn btn--secondary reveal reveal-delay-2" id="cta-view-bootcamps">
          View Courses <span className="material-icons">arrow_forward</span>
        </Link>
      </div>
    </section>
  )
}

export default CTASection
