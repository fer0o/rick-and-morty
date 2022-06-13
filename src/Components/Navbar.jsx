import React from 'react'

const Navbar = (props) => {
  const { brand } = props
  return (
    <div>
      <nav className="navbar  bg-black  m-auto p-4">
        <div className="container">
          <a
            className="text-white text-2xl uppercase block text-center"
            href="/"
          >
            {brand}
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
