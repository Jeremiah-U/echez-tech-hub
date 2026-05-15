import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Bootcamps from './pages/Bootcamps.jsx'
import BootcampDetails from './pages/BootcampDetails.jsx'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bootcamps" element={<Bootcamps />} />
      <Route path="/bootcamps/:slug" element={<BootcampDetails />} />
      {/* Catch-all: redirect unknown routes to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRoutes