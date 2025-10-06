import React, { useState, useEffect } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    awards: 0
  })

  const targetCounters = {
    projects: 500,
    clients: 200,
    years: 8,
    awards: 15
  }

  useEffect(() => {
    setIsVisible(true)
    
    // Counter animation
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCounters(prev => ({
          projects: prev.projects < targetCounters.projects ? prev.projects + 10 : targetCounters.projects,
          clients: prev.clients < targetCounters.clients ? prev.clients + 5 : targetCounters.clients,
          years: prev.years < targetCounters.years ? prev.years + 1 : targetCounters.years,
          awards: prev.awards < targetCounters.awards ? prev.awards + 1 : targetCounters.awards
        }))
      }, 50)
      
      setTimeout(() => clearInterval(interval), 3000)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Lead Photographer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "With over 8 years of experience, Sarah specializes in wedding and portrait photography."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Videographer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Michael brings cinematic storytelling to life through his exceptional videography skills."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Emily oversees the creative vision and ensures every project exceeds expectations."
    }
  ]

  const timeline = [
    {
      year: "2016",
      title: "Founded Sharp Cinematic",
      description: "Started with a passion for capturing life's most precious moments."
    },
    {
      year: "2018",
      title: "First Award",
      description: "Won 'Best Wedding Photography' at the Regional Photography Awards."
    },
    {
      year: "2020",
      title: "Expanded Services",
      description: "Added cinematic videography to our portfolio of services."
    },
    {
      year: "2022",
      title: "Team Growth",
      description: "Expanded to a team of 10+ professionals across photography and videography."
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Recognized as one of the top 10 photography studios in the region."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
              About <span className="text-gray-600">Sharp Cinematic</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
              We are passionate storytellers dedicated to capturing your most precious moments with artistry and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-6xl font-bold mb-2 text-white">
                {counters.projects}+
              </div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-6xl font-bold mb-2 text-white">
                {counters.clients}+
              </div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-6xl font-bold mb-2 text-white">
                {counters.years}
              </div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-6xl font-bold mb-2 text-white">
                {counters.awards}
              </div>
              <div className="text-gray-300">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2016, Sharp Cinematic began as a small team with a big dream: to capture life's most precious moments with unparalleled artistry and precision. What started as a passion project has grown into one of the region's most trusted photography and videography studios.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that every moment tells a story, and our mission is to preserve these stories in the most beautiful and authentic way possible. From intimate wedding ceremonies to grand celebrations, we approach each project with creativity, professionalism, and a deep understanding of what makes each moment unique.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to have captured over 500 special moments and created lasting memories for hundreds of families and couples who trust us with their most important days.
              </p>
            </div>
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=400&fit=crop&crop=center"
                  alt="Our Story"
                  className="w-full h-96 object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Talented professionals who bring creativity, passion, and expertise to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`group text-center transition-all duration-1000 delay-${(index + 1) * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="relative mb-6 overflow-hidden rounded-full w-48 h-48 mx-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">{member.name}</h3>
                <p className="text-lg text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that have shaped our growth and success over the years.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
            
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 transition-all duration-1000 delay-${(index + 1) * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 ml-auto'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-2xl font-bold text-black mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎨",
                title: "Creativity",
                description: "We approach every project with fresh eyes and innovative ideas to create unique, memorable content."
              },
              {
                icon: "💎",
                title: "Quality",
                description: "We never compromise on quality, using the best equipment and techniques to deliver exceptional results."
              },
              {
                icon: "❤️",
                title: "Passion",
                description: "Our love for photography and videography drives us to go above and beyond for every client."
              }
            ].map((value, index) => (
              <div
                key={index}
                className={`text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 delay-${(index + 1) * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
