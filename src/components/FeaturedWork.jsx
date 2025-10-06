import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const FeaturedWork = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const featuredProjects = [
    {
      id: 1,
      title: "Elegant Wedding",
      category: "Wedding Photography",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop&crop=center",
      gradient: "from-pink-400 to-red-500"
    },
    {
      id: 2,
      title: "Corporate Event",
      category: "Event Coverage",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&crop=center",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      id: 3,
      title: "Family Portrait",
      category: "Portrait Sessions",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop&crop=center",
      gradient: "from-green-400 to-teal-500"
    },
    {
      id: 4,
      title: "Cinematic Wedding Film",
      category: "Cinematic Videos",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=400&fit=crop&crop=center",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      id: 5,
      title: "Engagement Session",
      category: "Portrait Sessions",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop&crop=center",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      id: 6,
      title: "Birthday Celebration",
      category: "Event Coverage",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop&crop=center",
      gradient: "from-indigo-400 to-blue-500"
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-pink-100 to-yellow-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Featured <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our latest projects showcasing the artistry and passion we bring to every shoot.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-1000 delay-${index * 150} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                  <div className={`text-center text-white transition-all duration-500 ${
                    hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <div className="text-2xl font-bold mb-2">{project.title}</div>
                    <div className="text-sm opacity-90">{project.category}</div>
                    <div className="mt-4">
                      <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                        View Details
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${project.gradient} shadow-lg`}>
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link 
            to="/portfolio" 
            className="group relative inline-flex items-center px-8 py-4 bg-white text-black border-2 border-gray-300 rounded-xl font-medium text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-black"
          >
            <span className="relative z-10 flex items-center">
              <span className="mr-2">🎨</span>
              View Full Portfolio
              <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork
