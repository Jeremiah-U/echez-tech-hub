import { Link } from 'react-router-dom'

const GROUP_LINK = import.meta.env.VITE_GROUP_LINK || 'https://chat.whatsapp.com/your-group-link'

const SuccessModal = ({ session, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="success-page__content">
          <span className="hero__badge">
            Congratulations
          </span>
          
          <h1 className="success-page__title">
            Welcome to the Bootcamp
          </h1>
          
          <p className="success-page__text">
            Payment successful. Your seat is secured for <strong>{session?.title}</strong>.
          </p>

          <a 
            href={GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
            onClick={onClose}
          >
            Join Bootcamp Group <span className="material-icons">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal