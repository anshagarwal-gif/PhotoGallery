import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Packages = () => {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredPackage, setHoveredPackage] = useState(null)
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = [
    { id: 'all', name: 'All Packages', icon: '📦' },
    { id: 'wedding', name: 'Wedding', icon: '💒' },
    { id: 'engagement', name: 'Engagement', icon: '💍' }
  ]

  const packageGroups = [
    {
      id: 1,
      category: 'wedding',
      title: 'Both Side 1 Day Wedding',
      description: 'Complete wedding photography and videography coverage for both bride and groom sides.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop&crop=center',
      packages: [
        {
          id: 1,
          name: 'Wedding Golden Package',
          price: 64999,
          tier: 'golden',
          features: [
            'Full day coverage (10 hours)',
            '2 Professional photographers + 2 videographers',
            'Both bride & groom side coverage',
            '1000+ edited photos',
            'Cinematic wedding film (15-20 minutes)',
            'Drone footage included',
            'Online gallery + USB delivery',
            'Premium photo album',
            'Same-day highlights video'
          ]
        },
        {
          id: 2,
          name: 'Wedding Silver Package',
          price: 59999,
          tier: 'silver',
          features: [
            'Full day coverage (8 hours)',
            '2 Professional photographers + 1 videographer',
            'Both bride & groom side coverage',
            '800+ edited photos',
            'Cinematic wedding film (10-15 minutes)',
            'Online gallery + USB delivery',
            'Premium photo album',
            'Same-day highlights video'
          ]
        },
        {
          id: 3,
          name: 'Wedding Premium Package',
          price: 54999,
          tier: 'premium',
          features: [
            'Full day coverage (8 hours)',
            '1 Professional photographer + 1 videographer',
            'Both bride & groom side coverage',
            '600+ edited photos',
            'Cinematic wedding film (8-12 minutes)',
            'Online gallery + USB delivery',
            'Photo album included'
          ]
        },
        {
          id: 4,
          name: 'Wedding Basic Package',
          price: 39999,
          tier: 'basic',
          features: [
            'Full day coverage (6 hours)',
            '1 Professional photographer',
            'Both bride & groom side coverage',
            '400+ edited photos',
            'Online gallery delivery',
            'USB drive with files',
            'Basic editing included'
          ]
        }
      ]
    },
    {
      id: 2,
      category: 'wedding',
      title: 'Both Side 2 Day Wedding',
      description: 'Extended wedding coverage spanning two days with complete photography and videography.',
      image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&h=400&fit=crop&crop=center',
      packages: [
        {
          id: 5,
          name: '2-Day Golden Package',
          price: 89999,
          tier: 'golden',
          features: [
            '2 full days coverage (20 hours total)',
            '2 Professional photographers + 2 videographers',
            'Both bride & groom side coverage',
            '1500+ edited photos',
            'Extended cinematic film (25-30 minutes)',
            'Drone footage included',
            'Engagement session included',
            'Online gallery + USB delivery',
            'Premium photo album',
            'Same-day highlights videos'
          ]
        },
        {
          id: 6,
          name: '2-Day Silver Package',
          price: 79999,
          tier: 'silver',
          features: [
            '2 full days coverage (16 hours total)',
            '2 Professional photographers + 1 videographer',
            'Both bride & groom side coverage',
            '1200+ edited photos',
            'Extended cinematic film (20-25 minutes)',
            'Engagement session included',
            'Online gallery + USB delivery',
            'Premium photo album'
          ]
        },
        {
          id: 7,
          name: '2-Day Premium Package',
          price: 69999,
          tier: 'premium',
          features: [
            '2 full days coverage (14 hours total)',
            '1 Professional photographer + 1 videographer',
            'Both bride & groom side coverage',
            '1000+ edited photos',
            'Extended cinematic film (15-20 minutes)',
            'Online gallery + USB delivery',
            'Photo album included'
          ]
        },
        {
          id: 8,
          name: '2-Day Basic Package',
          price: 54999,
          tier: 'basic',
          features: [
            '2 full days coverage (12 hours total)',
            '1 Professional photographer',
            'Both bride & groom side coverage',
            '800+ edited photos',
            'Online gallery delivery',
            'USB drive with files',
            'Basic editing included'
          ]
        }
      ]
    },
    {
      id: 3,
      category: 'wedding',
      title: '1 Day Wedding',
      description: 'Single day wedding photography coverage for intimate ceremonies.',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop&crop=center',
      packages: [
        {
          id: 9,
          name: '1-Day Golden Package',
          price: 44999,
          tier: 'golden',
          features: [
            'Full day coverage (8 hours)',
            '1 Professional photographer + 1 videographer',
            '500+ edited photos',
            'Cinematic wedding film (10-15 minutes)',
            'Online gallery + USB delivery',
            'Photo album included',
            'Same-day highlights video'
          ]
        },
        {
          id: 10,
          name: '1-Day Silver Package',
          price: 39999,
          tier: 'silver',
          features: [
            'Full day coverage (6 hours)',
            '1 Professional photographer + 1 videographer',
            '400+ edited photos',
            'Cinematic wedding film (8-12 minutes)',
            'Online gallery + USB delivery',
            'Photo album included'
          ]
        },
        {
          id: 11,
          name: '1-Day Premium Package',
          price: 34999,
          tier: 'premium',
          features: [
            'Full day coverage (6 hours)',
            '1 Professional photographer',
            '350+ edited photos',
            'Online gallery + USB delivery',
            'Photo album included'
          ]
        },
        {
          id: 12,
          name: '1-Day Basic Package',
          price: 24999,
          tier: 'basic',
          features: [
            'Full day coverage (4 hours)',
            '1 Professional photographer',
            '250+ edited photos',
            'Online gallery delivery',
            'USB drive with files',
            'Basic editing included'
          ]
        }
      ]
    },
    {
      id: 4,
      category: 'wedding',
      title: '2 Day Weddings',
      description: 'Two-day wedding celebration with comprehensive coverage.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop&crop=center',
      packages: [
        {
          id: 13,
          name: '2-Day Celebration Golden',
          price: 79999,
          tier: 'golden',
          features: [
            '2 days coverage (16 hours total)',
            '2 Professional photographers + 2 videographers',
            '1200+ edited photos',
            'Extended cinematic film (20-25 minutes)',
            'Drone footage included',
            'Online gallery + USB delivery',
            'Premium photo album',
            'Same-day highlights videos'
          ]
        },
        {
          id: 14,
          name: '2-Day Celebration Silver',
          price: 69999,
          tier: 'silver',
          features: [
            '2 days coverage (14 hours total)',
            '1 Professional photographer + 1 videographer',
            '1000+ edited photos',
            'Extended cinematic film (15-20 minutes)',
            'Online gallery + USB delivery',
            'Premium photo album'
          ]
        },
        {
          id: 15,
          name: '2-Day Celebration Premium',
          price: 59999,
          tier: 'premium',
          features: [
            '2 days coverage (12 hours total)',
            '1 Professional photographer + 1 videographer',
            '800+ edited photos',
            'Extended cinematic film (12-15 minutes)',
            'Online gallery + USB delivery',
            'Photo album included'
          ]
        },
        {
          id: 16,
          name: '2-Day Celebration Basic',
          price: 44999,
          tier: 'basic',
          features: [
            '2 days coverage (10 hours total)',
            '1 Professional photographer',
            '600+ edited photos',
            'Online gallery delivery',
            'USB drive with files',
            'Basic editing included'
          ]
        }
      ]
    },
    {
      id: 5,
      category: 'engagement',
      title: 'Engagement Shoot',
      description: 'Romantic engagement session to capture your love story.',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop&crop=center',
      packages: [
        {
          id: 17,
          name: 'Engagement Golden Package',
          price: 19999,
          tier: 'golden',
          features: [
            '3 hours photography session',
            'Professional photographer + videographer',
            '100+ edited photos',
            'Engagement video (3-5 minutes)',
            'Multiple location options',
            'Outfit changes included',
            'Online gallery + USB delivery'
          ]
        },
        {
          id: 18,
          name: 'Engagement Silver Package',
          price: 14999,
          tier: 'silver',
          features: [
            '2.5 hours photography session',
            'Professional photographer',
            '80+ edited photos',
            'Multiple location options',
            'Outfit changes included',
            'Online gallery + USB delivery'
          ]
        },
        {
          id: 19,
          name: 'Engagement Premium Package',
          price: 11999,
          tier: 'premium',
          features: [
            '2 hours photography session',
            'Professional photographer',
            '60+ edited photos',
            'Multiple location options',
            'Online gallery delivery'
          ]
        },
        {
          id: 20,
          name: 'Engagement Basic Package',
          price: 8999,
          tier: 'basic',
          features: [
            '1.5 hours photography session',
            'Professional photographer',
            '40+ edited photos',
            'Single location',
            'Online gallery delivery'
          ]
        }
      ]
    },
    {
      id: 6,
      category: 'engagement',
      title: 'Prewedding',
      description: 'Pre-wedding photography session with multiple locations and themes.',
      image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=400&fit=crop&crop=center',
      packages: [
        {
          id: 21,
          name: 'Prewedding Golden Package',
          price: 24999,
          tier: 'golden',
          features: [
            '4 hours photography session',
            'Professional photographer + videographer',
            '120+ edited photos',
            'Prewedding video (5-8 minutes)',
            'Multiple location shooting',
            'Themed photo sessions',
            'Outfit changes included',
            'Online gallery + USB delivery'
          ]
        },
        {
          id: 22,
          name: 'Prewedding Silver Package',
          price: 19999,
          tier: 'silver',
          features: [
            '3 hours photography session',
            'Professional photographer',
            '100+ edited photos',
            'Multiple location shooting',
            'Themed photo sessions',
            'Outfit changes included',
            'Online gallery + USB delivery'
          ]
        },
        {
          id: 23,
          name: 'Prewedding Premium Package',
          price: 15999,
          tier: 'premium',
          features: [
            '3 hours photography session',
            'Professional photographer',
            '80+ edited photos',
            'Multiple location shooting',
            'Online gallery + USB delivery'
          ]
        },
        {
          id: 24,
          name: 'Prewedding Basic Package',
          price: 11999,
          tier: 'basic',
          features: [
            '2 hours photography session',
            'Professional photographer',
            '60+ edited photos',
            'Single location',
            'Online gallery delivery'
          ]
        }
      ]
    }
  ]

  const filteredPackageGroups = selectedCategory === 'all' 
    ? packageGroups 
    : packageGroups.filter(group => group.category === selectedCategory)

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price)
  }

  const openModal = (pkg) => {
    setSelectedPackage(pkg)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPackage(null)
  }

  const handleBookPackage = () => {
    closeModal()
    navigate('/contact', { state: { selectedPackage } })
  }

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
              Our <span className="text-gray-600">Packages</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
              Browse our package categories to find the perfect fit for your special occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {filteredPackageGroups.map((group, groupIndex) => (
              <div key={group.id} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: `${groupIndex * 200}ms` }}>
                {/* Package Group Header */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{group.title}</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">{group.description}</p>
                  <p className="text-sm text-gray-500">Choose the perfect package that fits your needs. Click on any package to see the full details.</p>
                </div>

                {/* Package Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {group.packages.map((pkg, pkgIndex) => (
                    <div
                      key={pkg.id}
                      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden ${
                        pkg.tier === 'golden' ? 'ring-2 ring-yellow-400' : ''
                      }`}
                      style={{ animationDelay: `${(groupIndex * 200) + (pkgIndex * 100)}ms` }}
                      onMouseEnter={() => setHoveredPackage(pkg.id)}
                      onMouseLeave={() => setHoveredPackage(null)}
                    >
                      {/* Popular Badge */}
                      {pkg.tier === 'golden' && (
                        <div className="absolute top-4 right-4 z-10">
                          <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium flex items-center">
                            ⭐ Most Popular
                          </span>
                        </div>
                      )}

                      {/* Package Header */}
                      <div className={`h-20 flex items-center justify-center ${
                        pkg.tier === 'golden' ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' :
                        pkg.tier === 'silver' ? 'bg-gradient-to-r from-gray-300 to-gray-400' :
                        pkg.tier === 'premium' ? 'bg-gradient-to-r from-purple-400 to-purple-500' :
                        'bg-gradient-to-r from-gray-200 to-gray-300'
                      }`}>
                        <h3 className="text-lg font-bold text-black text-center px-4">{pkg.name}</h3>
                      </div>

                      {/* Package Content */}
                      <div className="p-6">
                        {/* Price */}
                        <div className="text-center mb-6">
                          <div className="text-3xl font-bold text-black mb-2">
                            {formatPrice(pkg.price)}
                          </div>
                          <p className="text-sm text-gray-500">Click to see all details</p>
                        </div>

                        {/* Action Button */}
                        <button 
                          onClick={() => openModal(pkg)}
                          className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 group-hover:scale-105 transform transition-transform duration-200"
                        >
                          View Details
                        </button>
                      </div>

                      {/* Hover Effect Overlay */}
                      {hoveredPackage === pkg.id && (
                        <div className="absolute inset-0 bg-black/5 pointer-events-none transition-opacity duration-300"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Something Custom?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't see exactly what you're looking for? We'd love to create a custom package tailored to your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact', { state: { customQuote: true } })}
                className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 hover:scale-105 transform transition-transform duration-200"
              >
                Request Custom Quote
              </button>
              <button 
                onClick={() => navigate('/contact', { state: { consultation: true } })}
                className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-black transition-colors duration-200 hover:scale-105 transform transition-transform duration-200"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Package Details Modal */}
      {isModalOpen && selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className={`sticky top-0 p-6 border-b border-gray-200 ${
              selectedPackage.tier === 'golden' ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' :
              selectedPackage.tier === 'silver' ? 'bg-gradient-to-r from-gray-300 to-gray-400' :
              selectedPackage.tier === 'premium' ? 'bg-gradient-to-r from-purple-400 to-purple-500' :
              'bg-gradient-to-r from-gray-200 to-gray-300'
            }`}>
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold text-black mb-2">{selectedPackage.name}</h2>
                  <div className="text-4xl font-bold text-black">{formatPrice(selectedPackage.price)}</div>
                  {selectedPackage.tier === 'golden' && (
                    <span className="inline-flex items-center bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium mt-2">
                      ⭐ Most Popular
                    </span>
                  )}
                </div>
                <button
                  onClick={closeModal}
                  className="text-black hover:text-gray-700 transition-colors duration-200 p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Package Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-6">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedPackage.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Information */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-4">Package Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-2">📸</div>
                    <h4 className="font-semibold text-black mb-1">Professional Photography</h4>
                    <p className="text-sm text-gray-600">High-quality images captured by experienced photographers</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-2">🎬</div>
                    <h4 className="font-semibold text-black mb-1">Cinematic Videography</h4>
                    <p className="text-sm text-gray-600">Professional video coverage with cinematic quality</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl mb-2">💾</div>
                    <h4 className="font-semibold text-black mb-1">Digital Delivery</h4>
                    <p className="text-sm text-gray-600">Online gallery and USB drive with all files</p>
                  </div>
                </div>
              </div>

              {/* Booking Information */}
              <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-black mb-4">Booking Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-black">Advance Booking:</span>
                    <span className="text-gray-600 ml-2">Recommended 3-6 months in advance</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black">Deposit Required:</span>
                    <span className="text-gray-600 ml-2">50% to secure your date</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black">Delivery Time:</span>
                    <span className="text-gray-600 ml-2">4-6 weeks for final delivery</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black">Travel:</span>
                    <span className="text-gray-600 ml-2">Additional charges may apply</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 p-6 border-t border-gray-200 bg-white">
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleBookPackage}
                  className="flex-1 bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  Book This Package
                </button>
                <button 
                  onClick={closeModal}
                  className="px-6 py-3 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Packages
