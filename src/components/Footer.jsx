import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="flex items-center mb-4 md:mb-0">
            <div className="text-2xl font-bold text-white mr-4">
              Sharp Cinematic
            </div>
            <div className="text-gray-400">
              © 2025 Sharp Cinematic. All rights reserved.
            </div>
          </div>

          {/* Admin Link */}
          <div className="text-gray-400 hover:text-white transition-colors duration-200">
            <a href="#admin" className="text-sm">
              Admin
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
