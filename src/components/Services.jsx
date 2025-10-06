import React from 'react'

const Services = () => {
  const services = [
    {
      title: "Wedding Photography",
      description: "Capture your special day with stunning, timeless photographs that tell your unique love story.",
      icon: "💒"
    },
    {
      title: "Cinematic Videos",
      description: "Professional videography services that bring your moments to life with cinematic quality.",
      icon: "🎬"
    },
    {
      title: "Portrait Sessions",
      description: "Individual and family portraits that showcase personality and create lasting memories.",
      icon: "📸"
    },
    {
      title: "Event Coverage",
      description: "Complete event documentation with professional photography and videography services.",
      icon: "🎉"
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate portraits to grand celebrations, we offer comprehensive photography and videography services tailored to your unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="btn-primary text-lg px-8 py-4">
            View All Packages
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
