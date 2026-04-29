import { Link, useLocation } from 'react-router-dom'
import ethLogoGreen from '../assets/images/eth logo green.png'

const Success = () => {
  const location = useLocation()
  
  const session = location.state?.session || JSON.parse(sessionStorage.getItem('eth_payment_session') || 'null')
  
  const GROUP_LINK = 'https://chat.whatsapp.com/your-group-link'
  
  return (
    <div className="success-page">
      <header className="success-page__header">
        <div className="container">
          <Link to="/" className="success-page__logo">
            <img src={ethLogoGreen} alt="Echez Tech Hub" />
          </Link>
        </div>
      </header>

      <main className="success-page__main">
        <div className="container">
          <div className="success-page__content">
            <span className="hero__badge">
              Congratulations
            </span>
            
            <h1 className="success-page__title">
              Welcome to the Bootcamp
            </h1>
            
            <p className="success-page__text">
              Payment confirmed successfully. Your seat is secured. Join the bootcamp group below.
            </p>

            <a 
              href={GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Join Bootcamp Group <span className="material-icons">arrow_forward</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Success