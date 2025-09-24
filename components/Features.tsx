'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Features() {
  const [activeTab, setActiveTab] = useState(0)
  const [isCounterVisible, setIsCounterVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  const tabs = [
    {
      title: "Unabhängig von Steuerlast",
      description: "Förderung auch ohne aktuelle Körperschafts- oder Einkommenssteuer möglich"
    },
    {
      title: "Flexible Antragstellung",
      description: "Jederzeit beantragbar - ohne feste Fristen oder Förderzeitfenster"
    },
    {
      title: "Rückwirkende Förderung",
      description: "Bis zu 4 Jahre rückwirkend für laufende und abgeschlossene Projekte"
    }
  ]


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isCounterVisible) {
            setIsCounterVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [isCounterVisible])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [tabs.length])

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 sm:mb-12 gap-6 sm:gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] max-w-2xl leading-[1.1] mb-6 sm:mb-8">
              Der schnellste Weg zu Ihrer Forschungszulage
            </h2>

            {/* Partner Logo */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-[#666] uppercase tracking-wider">In Kooperation mit</span>
              <img
                src="/GEWI_Logo_rgb.png.webp"
                alt="GEWI - Gesellschaft für Wirtschaftsförderung und Innovationsberatung Partner"
                className="h-8 sm:h-10 w-auto hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#7A866C] via-[#869271] to-[#93A084] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-[#6B7760] hover:via-[#778366] hover:to-[#849175] transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <span className="text-sm sm:text-base font-medium">Mehr erfahren</span>
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:bg-white/30 transition-all">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          {/* Left Column */}
          <div className="space-y-0">

            {/* Counter Card and Image */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-10">
              <div
                ref={counterRef}
                className="bg-gradient-to-br from-[#7A866C] via-[#748060] to-[#6B7760] text-white p-6 sm:p-8 rounded-xl min-w-[120px] sm:min-w-[140px] shadow-xl"
              >
                <div className="flex items-baseline gap-1 text-4xl sm:text-5xl font-light mb-2">
                  <span className={`transition-all duration-1000 ${isCounterVisible ? 'opacity-100' : 'opacity-0'}`}>
                    {isCounterVisible ? '40' : '00'}
                  </span>
                  <span>+</span>
                </div>
                <p className="text-white/90 text-xs sm:text-sm">Jahre Erfahrung</p>
              </div>

              {/* Small Image Card */}
              <div className="flex-1 h-[120px] sm:h-[160px] rounded-xl overflow-hidden bg-gray-100">
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-12 h-12 sm:w-20 sm:h-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Tab List */}
            <div className="space-y-0">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  onClick={() => setActiveTab(index)}
                  onMouseEnter={() => setActiveTab(index)}
                  className="cursor-pointer group"
                >
                  <div className="flex items-center justify-between py-4 sm:py-5 relative">
                    <div className="flex items-center gap-4 sm:gap-8">
                      <span className="text-[#1a1a1a]/40 text-sm font-light">0{index + 1}</span>
                      <h3 className={`text-lg sm:text-xl font-medium transition-all ${
                        activeTab === index ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]/50'
                      }`}>
                        {tab.title}
                      </h3>
                    </div>

                    <div className={`transition-all duration-300 ${
                      activeTab === index ? 'rotate-[-45deg]' : ''
                    }`}>
                      <svg
                        className={`w-4 h-4 transition-all ${
                          activeTab === index ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]/30'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Animated underline */}
                  <div className="relative">
                    {index === 0 && (
                      <div className="absolute inset-x-0 -top-[1px] h-[1px] bg-[#e5e5e5]" />
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-[1px] bg-[#e5e5e5]" />
                    <div
                      className={`absolute inset-x-0 bottom-0 h-[1px] bg-[#1a1a1a] transition-all duration-700 origin-left ${
                        activeTab === index ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden bg-gray-50">
            {tabs.map((_, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  activeTab === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="w-full h-full flex items-center justify-center p-6 sm:p-12">
                  <div className="text-center">
                    <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-gray-100 mx-auto mb-6 sm:mb-8 flex items-center justify-center">
                      <svg className="w-10 h-10 sm:w-16 sm:h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-light text-[#1a1a1a] mb-3 sm:mb-4">{tabs[activeTab].title}</h3>
                    <p className="text-[#1a1a1a]/60 text-sm sm:text-base max-w-md mx-auto">{tabs[activeTab].description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}