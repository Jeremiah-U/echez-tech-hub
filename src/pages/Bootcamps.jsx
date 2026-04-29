import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import BootcampCard from '../components/BootcampCard.jsx'
import bootcamps from '../data/bootcamps.js'

const Bootcamps = () => {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="hero bootcamps-page" aria-labelledby="bootcamps-page-heading">
          <div className="container hero__inner">
            <div className="hero__badge">
              Bootcamp
            </div>
            <h1 id="bootcamps-page-heading" className="hero__title">
              Choose a Bootcamp<br />Build a Future
            </h1>

            {bootcamps.length === 0 ? (
              <p className="bootcamps-section__empty">No bootcamps available right now. Check back soon.</p>
            ) : (
              <ul className="bootcamps-section__grid" role="list">
                {bootcamps.map((b) => (
                  <li key={b.id}>
                    <BootcampCard bootcamp={b} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Bootcamps