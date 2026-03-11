import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout.jsx'
import HomePage from './components/sections/HomePage.jsx'
import AboutPage from './components/sections/AboutPage.jsx'
import ServicesPage from './components/sections/ServicesPage.jsx'
import ContactPage from './components/sections/ContactPage.jsx'
import TermsOfUse from './components/sections/TermsOfUse.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
