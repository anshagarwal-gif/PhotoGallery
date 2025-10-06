import React, { useState, useEffect } from 'react'

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('photos')
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1920&h=1080&fit=crop&crop=center",
      title: "Wedding Photography",
      subtitle: "Capturing your special moments"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop&crop=center",
      title: "Cinematic Videography",
      subtitle: "Bringing stories to life"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1920&h=1080&fit=crop&crop=center",
      title: "Portrait Sessions",
      subtitle: "Timeless memories captured"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop&crop=center",
      title: "Event Coverage",
      subtitle: "Professional documentation"
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const photos = [
    {
      id: 1,
      title: "Wedding Ceremony",
      category: "Wedding Photography",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Engagement Session",
      category: "Portrait Photography",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Family Portrait",
      category: "Portrait Photography",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Corporate Event",
      category: "Event Photography",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "Birthday Celebration",
      category: "Event Photography",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 6,
      title: "Maternity Session",
      category: "Portrait Photography",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 7,
      title: "Anniversary Dinner",
      category: "Event Photography",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=600&fit=crop&crop=center"
    },
    {
      id: 8,
      title: "Graduation Ceremony",
      category: "Event Photography",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop&crop=center"
    }
  ]

  const videos = [
    {
      id: 1,
      title: "Wedding Cinematic Film",
      category: "Wedding Videography",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&crop=center",
      duration: "5:30"
    },
    {
      id: 2,
      title: "Engagement Story",
      category: "Portrait Videography",
      thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop&crop=center",
      duration: "3:45"
    },
    {
      id: 3,
      title: "Corporate Event Highlights",
      category: "Event Videography",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center",
      duration: "4:20"
    },
    {
      id: 4,
      title: "Family Documentary",
      category: "Portrait Videography",
      thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop&crop=center",
      duration: "6:15"
    },
    {
      id: 5,
      title: "Birthday Celebration",
      category: "Event Videography",
      thumbnail: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop&crop=center",
      duration: "2:50"
    },
    {
      id: 6,
      title: "Maternity Journey",
      category: "Portrait Videography",
      thumbnail: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=600&fit=crop&crop=center",
      duration: "7:30"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Slideshow Header */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        {/* Slideshow Container */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">{slide.title}</h1>
                  <p className="text-xl md:text-2xl animate-pulse" style={{ animationDelay: '0.5s' }}>{slide.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 shadow-lg"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 shadow-lg"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentSlide ? 'bg-white shadow-lg' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Enhanced Slide Counter */}
        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
          <span className="animate-pulse">{currentSlide + 1}</span> / <span className="animate-pulse">{slides.length}</span>
        </div>
      </div>

      {/* Toggle Section */}
      <div className="py-12 bg-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-2xl opacity-50"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-pink-100 to-yellow-100 rounded-full blur-2xl opacity-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Toggle Buttons */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-xl border border-gray-100">
              <button
                onClick={() => setActiveTab('photos')}
                className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                  activeTab === 'photos'
                    ? 'bg-gradient-to-r from-black to-gray-800 text-white shadow-lg transform scale-105' 
                    : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
              >
                <span className="flex items-center">
                  <span className="mr-2">📸</span>
                  Photos
                </span>
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                  activeTab === 'videos'
                    ? 'bg-gradient-to-r from-black to-gray-800 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
              >
                <span className="flex items-center">
                  <span className="mr-2">🎬</span>
                  Videos
                </span>
              </button>
            </div>
          </div>

          {/* Content Area */}
          {activeTab === 'photos' && (
            <div>
              <h2 className="text-3xl font-bold text-center text-black mb-8">Photography Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {photos.map((photo) => (
                  <div key={photo.id} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                          <div className="text-lg font-semibold">{photo.title}</div>
                          <div className="text-sm">{photo.category}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'videos' && (
            <div>
              <h2 className="text-3xl font-bold text-center text-black mb-8">Videography Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <div key={video.id} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg aspect-[16/9] mb-4">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Centered Play Button - Always Visible */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <svg className="w-8 h-8 ml-1" fill="white" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>

                      {/* Hover Overlay with Details */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                          <div className="text-lg font-semibold">{video.title}</div>
                          <div className="text-sm">{video.category}</div>
                          <div className="text-xs mt-1">{video.duration}</div>
                        </div>
                      </div>
                      
                      {/* Duration badge */}
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
