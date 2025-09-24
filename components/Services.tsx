'use client'

import { useEffect, useRef } from 'react'

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.fade-up')
      elements.forEach(el => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: 'Sorgfältige Prüfung',
      description: 'Vorab-Check aller Kriterien für maximale Erfolgsaussichten',
      image: '/service-card.jpg'
    },
    {
      title: 'Vollständige Begleitung',
      description: 'Von der ersten Beratung bis zur finalen Abrechnung',
      image: '/service-accounts.jpg'
    },
    {
      title: 'Risiko-Minimierung',
      description: 'Expertise, die Rückforderungen und Verzögerungen vermeidet',
      image: '/service-transfers.jpg'
    },
    {
      title: 'Maximale Ausschöpfung',
      description: 'Jeder förderfähige Euro wird für Sie gesichert',
      image: '/service-insights.jpg'
    }
  ]

  return (
    <section id="services" ref={sectionRef} className="section_home1_services py-16 sm:py-20 md:py-28 bg-white">
      <div className="padding-global">
        <div className="container-default max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div
            className="section-header fade-up opacity-0 transition-all duration-700 flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 sm:mb-12 gap-6 sm:gap-8"
            data-w-id="4528315b-24e9-cd4d-a983-e28017084d61"
          >
            <div className="section-header-content">
              <div className="text-style-badge inline-block px-3 py-1.5 bg-[#f8f8f8] rounded-full mb-3">
                <span className="text-xs font-medium text-[#666] uppercase tracking-wider">Services</span>
              </div>
              <div className="spacer-xsmall h-2"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-[#1a1a1a]">
                Klaimly: Ihr Partner von der ersten Idee bis zur letzten Abrechnung
              </h2>
            </div>
          </div>


          {/* Services Box */}
          <div
            className="home1_services_box fade-up opacity-0 transition-all duration-700 delay-100 rounded-2xl overflow-hidden shadow-lg"
            data-w-id="ab54091a-7e06-9e3d-f906-2ee97ea48040"
          >
            <div className="flex flex-col lg:flex-row">

              {/* Left: Highlight Box */}
              <div className="home1_services_highlight lg:w-[35%] bg-gradient-to-br from-[#7A866C] via-[#6F7B62] to-[#647055] p-6 sm:p-8 lg:p-12 flex items-center shadow-inner">
                <div className="heading-style-h5 text-color-alternate">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1]" style={{ color: 'white' }}>
                    Förderung.
                    <br />
                    Neu gedacht.
                  </h3>
                </div>
              </div>

              {/* Right: Services Grid */}
              <div className="lg:w-[65%] bg-[#f9f9f9]">
                <div className="home1_services_grid grid grid-cols-1 sm:grid-cols-2 gap-0">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="home1_services_card group relative bg-white border-r border-b border-[#f0f0f0] last:border-r-0 sm:even:border-r-0 sm:last:border-b-0 sm:[&:nth-child(3)]:border-b-0 hover:shadow-xl hover:z-10 transition-all duration-300 cursor-pointer"
                    >
                      {/* Service Image */}
                      <div className="aspect-[3/2] bg-gradient-to-br from-[#fafafa] to-[#f5f5f5] relative overflow-hidden">
                        {/* Sorgfältige Prüfung - Animated Checkmarks */}
                        {index === 0 && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-24 h-24">
                              {/* Animated circles */}
                              <div className="absolute inset-0 rounded-full border-2 border-[#7A866C]/20 animate-pulse"></div>
                              <div className="absolute inset-2 rounded-full border-2 border-[#7A866C]/30 animate-pulse animation-delay-200"></div>
                              <div className="absolute inset-4 rounded-full border-2 border-[#7A866C]/40 animate-pulse animation-delay-400"></div>

                              {/* Center checkmark */}
                              <svg className="absolute inset-0 w-full h-full text-[#7A866C] opacity-0 animate-check-fade" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                          </div>
                        )}

                        {/* Vollständige Begleitung - Timeline Animation */}
                        {index === 1 && (
                          <div className="absolute inset-0 flex items-center justify-center p-8">
                            <div className="relative w-full h-12">
                              {/* Timeline line */}
                              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#7A866C]/20 -translate-y-1/2"></div>
                              <div className="absolute top-1/2 left-0 h-0.5 bg-[#7A866C] -translate-y-1/2 animate-timeline-grow"></div>

                              {/* Timeline dots */}
                              <div className="absolute top-1/2 left-0 w-3 h-3 bg-[#7A866C] rounded-full -translate-y-1/2 animate-dot-1"></div>
                              <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-[#7A866C] rounded-full -translate-y-1/2 opacity-0 animate-dot-2"></div>
                              <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-[#7A866C] rounded-full -translate-y-1/2 opacity-0 animate-dot-3"></div>
                              <div className="absolute top-1/2 right-0 w-3 h-3 bg-[#7A866C] rounded-full -translate-y-1/2 opacity-0 animate-dot-4"></div>
                            </div>
                          </div>
                        )}

                        {/* Risiko-Minimierung - Shield Animation */}
                        {index === 2 && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative">
                              {/* Shield with pulse effect */}
                              <div className="absolute -inset-4 bg-[#7A866C]/10 rounded-full animate-ping"></div>
                              <svg className="relative w-20 h-20 text-[#7A866C] animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                              </svg>
                            </div>
                          </div>
                        )}

                        {/* Maximale Ausschöpfung - Growing Bars */}
                        {index === 3 && (
                          <div className="absolute inset-0 flex items-center justify-center p-8">
                            <div className="flex items-end gap-2 h-20">
                              <div className="w-4 rounded-t origin-bottom animate-bar-grow-1" style={{height: '30%', backgroundColor: '#7A866C', opacity: 0.3}}></div>
                              <div className="w-4 rounded-t origin-bottom animate-bar-grow-2" style={{height: '50%', backgroundColor: '#7A866C', opacity: 0.4}}></div>
                              <div className="w-4 rounded-t origin-bottom animate-bar-grow-3" style={{height: '70%', backgroundColor: '#7A866C', opacity: 0.5}}></div>
                              <div className="w-4 rounded-t origin-bottom animate-bar-grow-4" style={{height: '85%', backgroundColor: '#7A866C', opacity: 0.6}}></div>
                              <div className="w-4 rounded-t origin-bottom animate-bar-grow-5" style={{height: '100%', backgroundColor: '#7A866C', opacity: 1}}></div>
                            </div>
                          </div>
                        )}

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#7A866C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Service Content */}
                      <div className="home1_services_content p-4 sm:p-5">
                        <div className="text-sm sm:text-base lg:text-lg font-medium text-[#1a1a1a] mb-1">
                          {service.title}
                        </div>
                        <div className="text-color-secondary text-xs sm:text-sm text-[#666]">
                          {service.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes checkFade {
          0%, 50% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes timelineGrow {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes dotAppear {
          from {
            opacity: 0;
            transform: translateY(-50%) scale(0);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes barGrow {
          0% {
            transform: scaleY(0);
          }
          100% {
            transform: scaleY(1);
          }
        }

        .fade-up.animate-in {
          animation: fadeUp 0.8s ease-out forwards;
        }

        .animate-check-fade {
          animation: checkFade 2s ease-in-out infinite;
        }

        .animate-timeline-grow {
          animation: timelineGrow 3s ease-out infinite;
        }

        .animate-dot-1 {
          animation: dotAppear 0.5s ease-out forwards;
        }

        .animate-dot-2 {
          animation: dotAppear 0.5s ease-out 0.5s forwards;
        }

        .animate-dot-3 {
          animation: dotAppear 0.5s ease-out 1s forwards;
        }

        .animate-dot-4 {
          animation: dotAppear 0.5s ease-out 1.5s forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-bar-grow-1 {
          animation: barGrow 2s ease-in-out infinite;
          animation-delay: 0s;
        }

        .animate-bar-grow-2 {
          animation: barGrow 2s ease-in-out infinite;
          animation-delay: 0.1s;
        }

        .animate-bar-grow-3 {
          animation: barGrow 2s ease-in-out infinite;
          animation-delay: 0.2s;
        }

        .animate-bar-grow-4 {
          animation: barGrow 2s ease-in-out infinite;
          animation-delay: 0.3s;
        }

        .animate-bar-grow-5 {
          animation: barGrow 2s ease-in-out infinite;
          animation-delay: 0.4s;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }
      `}</style>
    </section>
  )
}