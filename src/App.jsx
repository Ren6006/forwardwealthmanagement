import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout.jsx'
import HomePage from './components/sections/HomePage.jsx'
import AboutPage from './components/sections/AboutPage.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<div>Services</div>} />
          <Route path="contact" element={<div>Contact</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
