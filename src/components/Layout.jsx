import React from 'react'
import Navbar from './navbar'

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <footer>
        <p>© 2023 My Website</p>
      </footer>
    </div>
  )
}

export default Layout