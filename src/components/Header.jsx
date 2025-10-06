import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-black">
              Sharp Cinematic
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-black transition-colors duration-200">
              Home
            </Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-black transition-colors duration-200">
              Portfolio
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-black transition-colors duration-200">
              About
            </Link>
            <Link to="/packages" className="text-gray-700 hover:text-black transition-colors duration-200">
              Packages
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-black transition-colors duration-200">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-black focus:outline-none focus:text-black transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-black transition-colors duration-200">
                Home
              </Link>
              <Link to="/portfolio" className="text-gray-700 hover:text-black transition-colors duration-200">
                Portfolio
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-black transition-colors duration-200">
                About
              </Link>
              <Link to="/packages" className="text-gray-700 hover:text-black transition-colors duration-200">
                Packages
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-black transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
