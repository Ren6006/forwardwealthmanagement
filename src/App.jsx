import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Home</div>} />
        <Route path="about" element={<div>About</div>} />
        <Route path="services" element={<div>Services</div>} />
        <Route path="tools" element={<div>Tools</div>} />
        <Route path="account-login" element={<div>Account Login</div>} />
        <Route path="contact" element={<div>Contact</div>} />
      </Route>
    </Routes>
  )
}

export default App
