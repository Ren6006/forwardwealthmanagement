import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <header>
        <div>Header</div>
      </header>

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

