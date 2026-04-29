const TestimonialCard = ({ testimonial }) => {
  return (
    <article className="testimonial-card" aria-label={`Testimonial from ${testimonial?.name}`}>
      <blockquote className="testimonial-card__quote">
        <p className="testimonial-card__text">
          &ldquo;{testimonial?.quote}&rdquo;
        </p>
      </blockquote>

      <footer className="testimonial-card__footer">
        {/* Avatar: initials fallback since no photos provided */}
        <div className="testimonial-card__avatar" aria-hidden="true">
          {testimonial?.initials || '?'}
        </div>
        <div className="testimonial-card__meta">
          <span className="testimonial-card__name">{testimonial?.name}</span>
          <span className="testimonial-card__role">
            {testimonial?.role}
            {testimonial?.company ? ` — ${testimonial.company}` : ''}
          </span>
          {testimonial?.bootcamp && (
            <span className="testimonial-card__bootcamp">
              {testimonial.bootcamp}
            </span>
          )}
        </div>
      </footer>
    </article>
  )
}

export default TestimonialCard
