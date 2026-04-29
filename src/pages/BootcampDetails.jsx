import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import bootcamps from '../data/bootcamps.js'
import { initiatePayment } from '../utils/paystack.js'
import frontendImg from '../../assets/frontend-img-webp.webp'

const BootcampDetails = () => {
  const { slug } = useParams()
  const navigate = useNavigate()

  const bootcamp = bootcamps.find((b) => b.slug === slug)

  const [isProcessing, setIsProcessing] = useState(false)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [emailValidation, setEmailValidation] = useState('')

  // Invalid slug — redirect to bootcamps list
  if (!bootcamp) {
    return (
      <>
        <Navbar />
        <main id="main-content">
          <div className="container error-state">
            <h1 className="error-state__title">Bootcamp Not Found</h1>
            <p className="error-state__text">
              The bootcamp you are looking for does not exist.
            </p>
            <Link to="/bootcamps" className="btn btn--primary">
              Browse All Bootcamps
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const handleEnroll = () => {
    if (!email.trim()) {
      setEmailError('Please, enter your email')
      return
    }
    const atIndex = email.indexOf('@')
    const isInvalid = atIndex === -1 || 
      atIndex === 0 || 
      atIndex === email.length - 1 ||
      !email.includes('.', atIndex)
    if (isInvalid) {
      setEmailValidation('Please, use a valid email')
      return
    }
    setEmailError('')
    setEmailValidation('')
    setIsProcessing(true)

    initiatePayment({
      bootcamp,
      email: email.trim(),
      onSuccess: (session) => {
        setIsProcessing(false)
        navigate('/success', { state: { session } })
      },
      onClose: () => {
        setIsProcessing(false)
      },
      onError: (err) => {
        setIsProcessing(false)
        alert(err.message || 'Payment failed. Please try again.')
      },
    })
  }

  const icons = {
    duration: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    level: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
      </svg>
    ),
    mode: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    check: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    )
  }

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="bootcamp-details" aria-labelledby="details-heading">
          <div className="container">
            
            <div className="bootcamp-details__hero-section">
              <img
                src={bootcamp.image}
                alt={bootcamp.title}
                className="bootcamp-details__hero-image"
                onError={(e) => { e.currentTarget.src = frontendImg }}
              />
            </div>

            <div className="bootcamp-details__header" style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
              <span className="bootcamp-details__status-badge">Active</span>
              <h1 id="details-heading" className="bootcamp-details__title">
                {bootcamp.title}
              </h1>
              <p className="bootcamp-details__subtitle">{bootcamp.shortDescription}</p>
              
              <button 
                className="btn btn--primary bootcamp-details__hero-enroll"
                onClick={() => document.getElementById('enroll-box').scrollIntoView({ behavior: 'smooth' })}
              >
                Enroll Now <span className="material-icons">arrow_forward</span>
              </button>
            </div>

            <div className="bootcamp-details__grid">
              {/* Details Column */}
              <div className="bootcamp-details__info-col">
                <h2 className="bootcamp-details__col-title">Details</h2>
                <ul className="bootcamp-details__info-list">
                  <li className="bootcamp-details__info-item">
                    <span className="bootcamp-details__info-icon bootcamp-details__info-icon--yellow">{icons.duration}</span>
                    <span className="bootcamp-details__info-label">Duration :</span>
                    <span className="bootcamp-details__info-value">{bootcamp.duration}</span>
                  </li>
                  <li className="bootcamp-details__info-item">
                    <span className="bootcamp-details__info-icon bootcamp-details__info-icon--green">{icons.level}</span>
                    <span className="bootcamp-details__info-label">Level :</span>
                    <span className="bootcamp-details__info-value">{bootcamp.level}</span>
                  </li>
                  <li className="bootcamp-details__info-item">
                    <span className="bootcamp-details__info-icon bootcamp-details__info-icon--blue">{icons.mode}</span>
                    <span className="bootcamp-details__info-label">Mode :</span>
                    <span className="bootcamp-details__info-value">{bootcamp.mode}</span>
                  </li>
                </ul>
              </div>

              {/* Prerequisites Column */}
              <div className="bootcamp-details__info-col">
                <h2 className="bootcamp-details__col-title">Prerequisites</h2>
                <ul className="bootcamp-details__prereq-list">
                  {bootcamp.prerequisites?.map((item, i) => (
                    <li key={i} className="bootcamp-details__prereq-item">
                      <span className="bootcamp-details__check-icon">{icons.check}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bootcamp-details__learn-section">
            <div className="container">
              <h2 className="bootcamp-details__section-title">You Will Learn</h2>
              <ul className="bootcamp-details__learn-grid">
                {bootcamp.curriculum?.map((item, i) => (
                  <li key={i} className="bootcamp-details__learn-item">
                    <span className="bootcamp-details__check-icon">{icons.check}</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Grab Your Spot Box */}
              <div id="enroll-box" className="bootcamp-details__cta-box">
                <div className="bootcamp-details__cta-content">
                  <h3 className="bootcamp-details__cta-title">Grab Your Spot!</h3>
                  <p className="bootcamp-details__cta-text">
                    There are limited spaces available and admissions are offered on a first come, first served basis.
                  </p>
                </div>
                <div className="bootcamp-details__cta-action">
                  <div className="bootcamp-details__price-wrap">
                    <span className="bootcamp-details__current-price">{bootcamp.displayPrice}</span>
                    {bootcamp.originalPrice && (
                      <span className="bootcamp-details__old-price">{bootcamp.originalPrice}</span>
                    )}
                  </div>

                  <div className="bootcamp-details__enroll-form">
                    <div className="bootcamp-details__email-wrap">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                          const value = e.target.value
                          setEmail(value)
                          if (emailError) setEmailError('')
                          const atIndex = value.indexOf('@')
                          const isInvalid = atIndex === -1 || 
                            atIndex === 0 || 
                            atIndex === value.length - 1 ||
                            !value.includes('.', atIndex)
                          if (isInvalid && value.length > 0) {
                            setEmailValidation('Please, use a valid email')
                          } else {
                            setEmailValidation('')
                          }
                        }}
                        className="bootcamp-details__email-input"
                      />
                      {emailError && (
                        <p className="bootcamp-details__email-error">{emailError}</p>
                      )}
                      {emailValidation && (
                        <p className="bootcamp-details__email-error">{emailValidation}</p>
                      )}
                    </div>
                    <button
                      className="btn btn--secondary bootcamp-details__enroll-button"
                      onClick={handleEnroll}
                      disabled={isProcessing}
                    >
                      {isProcessing ? 'Processing...' : 'Enroll Now'} <span className="material-icons">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default BootcampDetails
