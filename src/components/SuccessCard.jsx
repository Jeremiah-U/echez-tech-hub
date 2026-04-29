const SuccessCard = ({ session }) => {
  const GROUP_LINK = import.meta.env.VITE_GROUP_LINK || 'https://chat.whatsapp.com/your-group-link'
  const SUPPORT_EMAIL = import.meta.env.VITE_SUPPORT_EMAIL || 'support@echeztechhub.com'

  if (!session) return null

  return (
    <div className="success-card" role="main" aria-labelledby="success-heading">
      {/* Icon */}
      <div className="success-card__icon" aria-hidden="true">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="32" fill="var(--color-primary-default)" />
          <path
            d="M20 32l8 8 16-16"
            stroke="var(--color-neutral-white)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h1 id="success-heading" className="success-card__title">
        Congratulations! 🎉
      </h1>

      <p className="success-card__subtitle">
        You have successfully enrolled in:
      </p>

      <div className="success-card__bootcamp-name">
        {session.title}
      </div>

      {/* Next steps */}
      <div className="success-card__steps">
        <h2 className="success-card__steps-title">What happens next?</h2>
        <ol className="success-card__steps-list">
          <li>Join our private community below to get started</li>
          <li>You will receive your class schedule and onboarding guide in the group</li>
          <li>Show up on day one — your journey begins!</li>
        </ol>
      </div>

      {/* Join community CTA */}
      <a
        href={GROUP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn--primary success-card__join-btn"
        id="success-join-community"
      >
        Join Private Community <span className="material-icons">arrow_forward</span>
      </a>

      {/* Payment reference */}
      {session.reference && (
        <p className="success-card__reference">
          Payment reference:{' '}
          <code className="success-card__ref-code">{session.reference}</code>
        </p>
      )}

      <p className="success-card__support">
        Questions? Email us at{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="success-card__support-link">
          {SUPPORT_EMAIL}
        </a>
      </p>
    </div>
  )
}

export default SuccessCard
