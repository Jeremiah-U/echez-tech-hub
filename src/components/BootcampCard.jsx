import { Link } from 'react-router-dom'

const FALLBACK_IMAGE = '/assets/images/frontend-img.png'

const BootcampCard = ({ bootcamp }) => {
  const handleImageError = (e) => {
    // Guard: fallback if image fails to load
    e.currentTarget.src = FALLBACK_IMAGE
  }

  return (
    <article className="bootcamp-card" aria-label={`${bootcamp?.title} bootcamp`}>
      <div className="bootcamp-card__image-wrap">
        <img
          src={bootcamp?.image || FALLBACK_IMAGE}
          alt={bootcamp?.title || 'Bootcamp'}
          className="bootcamp-card__image"
          onError={handleImageError}
          loading="lazy"
        />
      </div>

      <div className="bootcamp-card__body">
        <h3 className="bootcamp-card__title">{bootcamp?.title}</h3>
        <p className="bootcamp-card__description">{bootcamp?.shortDescription}</p>

<Link
          to={`/bootcamps/${bootcamp?.slug}`}
          className="bootcamp-card__cta btn btn--outline"
          id={`bootcamp-card-cta-${bootcamp?.id}`}
          aria-label={`View details for ${bootcamp?.title}`}
        >
          View Details <span className="material-icons">arrow_forward</span>
        </Link>
      </div>
    </article>
  )
}

export default BootcampCard
