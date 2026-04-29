import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import ethLogoGreen from '../assets/images/eth logo green.png'

const Navbar = () => {
  const location = useLocation()
  const isBootcampsPage = location.pathname === '/bootcamps'
  const isBootcampDetailsPage = location.pathname.startsWith('/bootcamps/')
  
  const linkText = isBootcampDetailsPage ? 'Back to Bootcamps' : 'Bootcamps'
  
  return (
    <header className="navbar" role="banner">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" aria-label="Echez Tech Hub Home">
          <img src={ethLogoGreen} alt="Echez Tech Hub" className="navbar__logo-img" />
        </Link>

        <nav className="navbar__nav" aria-label="Primary navigation">
          <Link
            to="/bootcamps"
            className={isBootcampsPage && !isBootcampDetailsPage ? 'navbar__link navbar__link--active' : 'navbar__link'}
          >
            {linkText}
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar