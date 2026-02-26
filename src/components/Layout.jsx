import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'

function Layout() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      <footer>
        <div>Footer</div>
      </footer>
    </div>
  )
}

export default Layout

