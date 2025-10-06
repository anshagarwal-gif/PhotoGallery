import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="text-4xl md:text-6xl font-bold text-black mb-4">
            Sharp Cinematic
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
          Capture The Magic.<br />
          Preserve Your Forever.
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Timeless photography and videography for your most precious moments.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/portfolio" className="btn-primary text-lg px-8 py-4">
            View Portfolio
          </Link>
          <button className="btn-secondary text-lg px-8 py-4">
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
