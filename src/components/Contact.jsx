import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Contact = () => {
  const location = useLocation()
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    package: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  useEffect(() => {
    setIsVisible(true)
    
    // Pre-fill package if coming from packages page
    if (location.state?.selectedPackage) {
      setFormData(prev => ({
        ...prev,
        package: location.state.selectedPackage.name
      }))
    }
    
    // Pre-fill message for custom quote or consultation
    if (location.state?.customQuote) {
      setFormData(prev => ({
        ...prev,
        package: 'Custom Package',
        message: 'I would like to request a custom quote for my event. Please provide details about your specific requirements and budget.'
      }))
    }
    
    if (location.state?.consultation) {
      setFormData(prev => ({
        ...prev,
        message: 'I would like to schedule a consultation to discuss my photography and videography needs. Please let me know your available times.'
      }))
    }
  }, [location.state])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        package: '',
        message: ''
      })
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      details: ['info@sharpcinematic.com', 'bookings@sharpcinematic.com'],
      action: 'mailto:info@sharpcinematic.com'
    },
    {
      icon: '📞',
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      action: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Address',
      details: ['123 Photography Lane', 'Creative District, NY 10001'],
      action: 'https://maps.google.com'
    },
    {
      icon: '🕒',
      title: 'Hours',
      details: ['Mon-Fri: 9AM-6PM', 'Sat-Sun: 10AM-4PM'],
      action: null
    }
  ]

  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/sharpcinematic' },
    { name: 'Facebook', icon: '👥', url: 'https://facebook.com/sharpcinematic' },
    { name: 'YouTube', icon: '🎬', url: 'https://youtube.com/sharpcinematic' },
    { name: 'TikTok', icon: '🎵', url: 'https://tiktok.com/@sharpcinematic' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
              Get In <span className="text-gray-600">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
              Ready to capture your special moments? Let's discuss your photography and videography needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-black mb-6">Send us a Message</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    ✅ Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Event Date
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-2">
                      Package Interest
                    </label>
                    <select
                      id="package"
                      name="package"
                      value={formData.package}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a package</option>
                      <option value="Wedding Golden Package">Wedding Golden Package</option>
                      <option value="Wedding Silver Package">Wedding Silver Package</option>
                      <option value="Wedding Premium Package">Wedding Premium Package</option>
                      <option value="Wedding Basic Package">Wedding Basic Package</option>
                      <option value="2-Day Golden Package">2-Day Golden Package</option>
                      <option value="2-Day Silver Package">2-Day Silver Package</option>
                      <option value="2-Day Premium Package">2-Day Premium Package</option>
                      <option value="2-Day Basic Package">2-Day Basic Package</option>
                      <option value="1-Day Golden Package">1-Day Golden Package</option>
                      <option value="1-Day Silver Package">1-Day Silver Package</option>
                      <option value="1-Day Premium Package">1-Day Premium Package</option>
                      <option value="1-Day Basic Package">1-Day Basic Package</option>
                      <option value="Engagement Golden Package">Engagement Golden Package</option>
                      <option value="Engagement Silver Package">Engagement Silver Package</option>
                      <option value="Engagement Premium Package">Engagement Premium Package</option>
                      <option value="Engagement Basic Package">Engagement Basic Package</option>
                      <option value="Prewedding Golden Package">Prewedding Golden Package</option>
                      <option value="Prewedding Silver Package">Prewedding Silver Package</option>
                      <option value="Prewedding Premium Package">Prewedding Premium Package</option>
                      <option value="Prewedding Basic Package">Prewedding Basic Package</option>
                      <option value="Custom Package">Custom Package</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your event, special requirements, or any questions you have..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-black mb-6">Contact Information</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    We're here to help you plan the perfect photography and videography experience. 
                    Reach out to us through any of the channels below.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className={`p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                        info.action ? 'cursor-pointer' : ''
                      }`}
                      onClick={() => info.action && window.open(info.action, '_blank')}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{info.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold text-black mb-2">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600 mb-1">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media */}
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-xl font-semibold text-black mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors duration-200 hover:scale-105 transform transition-transform duration-200"
                      >
                        <span className="text-xl">{social.icon}</span>
                        <span className="text-sm font-medium text-gray-700">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-black mb-6">Visit Our Studio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of the creative district, our studio is the perfect place to discuss your project and view our portfolio.
            </p>
          </div>
          
          <div className={`relative h-96 rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215571012!2d-74.00594168459399!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635950000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sharp Cinematic Studio Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-black mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services and booking process.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How far in advance should I book?",
                answer: "We recommend booking at least 3-6 months in advance, especially for weddings during peak season (May-October). However, we can sometimes accommodate last-minute requests."
              },
              {
                question: "What's included in the packages?",
                answer: "All packages include professional photography/videography, edited photos/videos, online gallery, and USB delivery. Premium packages also include photo albums and additional services."
              },
              {
                question: "Do you travel for destination events?",
                answer: "Yes! We love destination weddings and events. Travel fees are calculated based on location and duration. Contact us for a custom quote."
              },
              {
                question: "What's your cancellation policy?",
                answer: "We require a 50% deposit to secure your date. Cancellations more than 90 days in advance receive a full refund minus a $200 processing fee."
              },
              {
                question: "How long does it take to receive photos?",
                answer: "We typically deliver edited photos within 4-6 weeks of your event. Rush delivery options are available for an additional fee."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <h3 className="text-lg font-semibold text-black mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
