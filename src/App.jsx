import { BrowserRouter, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AppRoutes from './routes.jsx'

const ScrollReveal = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    
    requestAnimationFrame(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0, rootMargin: '0px 0px -50px 0px' })

      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        observer.observe(el)
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('visible')
        }
      })
    })
  }, [location])

  return null
}

const App = () => {
  return (
    <BrowserRouter>
      <ScrollReveal />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App