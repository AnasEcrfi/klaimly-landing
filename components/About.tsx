'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

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

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column - Image */}
          <div className="fade-up opacity-0 transition-all duration-700">
            <div className="relative aspect-[550/750] w-full overflow-hidden rounded-[2rem]">
              <img
                src="/klaimly_hero_1.jpg"
                alt="Klaimly - Warum Klaimly"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div ref={contentRef} className="space-y-10">

            {/* Title and Description */}
            <div className="fade-up opacity-0 transition-all duration-700 delay-100">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-[#1a1a1a] mb-8">
                Warum Klaimly?
              </h2>
              <p className="text-2xl text-[#1a1a1a]/80 font-light leading-relaxed mb-6">
                „Maximale Förderung. Minimaler Aufwand."
              </p>
              <ul className="space-y-3 text-lg text-[#1a1a1a]/70 font-light mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-[#7A866C]">•</span> Bis zu 3,5 Mio. € jährlich
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#7A866C]">•</span> 100 % digitaler Prozess
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#7A866C]">•</span> Erfolgsabhängiges Honorar
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#7A866C]">•</span> Für Startups, Mittelstand & Konzerne
                </li>
              </ul>

              {/* CTA Button */}
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-3 text-[#1a1a1a] font-medium hover:gap-4 transition-all group"
              >
                <span className="border-b-2 border-[#1a1a1a] pb-1">So funktioniert's</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Card 01 */}
              <div className="fade-up opacity-0 transition-all duration-700 delay-200 group">
                <div className="bg-gradient-to-br from-[#7A866C]/10 via-[#869271]/8 to-[#93A084]/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-[#7A866C]/10 hover:border-[#7A866C]/20">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-[#7A866C] to-[#93A084]">01</span>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white to-[#7A866C]/5 shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <svg
                        className="w-5 h-5 text-[#1a1a1a]/60"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M7 17L17 7M17 7H7M17 7V17"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light leading-[1.2] text-[#1a1a1a] mb-3">
                    Maximale Förderung
                  </h3>
                  <p className="text-sm text-[#1a1a1a]/60 font-light leading-relaxed">
                    Bis zu 3,5 Millionen Euro jährliche Erstattung für Ihre F&E-Projekte
                  </p>
                </div>
              </div>

              {/* Card 02 */}
              <div className="fade-up opacity-0 transition-all duration-700 delay-300 group">
                <div className="bg-gradient-to-br from-[#7A866C]/10 via-[#869271]/8 to-[#93A084]/10 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-[#7A866C]/10 hover:border-[#7A866C]/20">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-[#7A866C] to-[#93A084]">02</span>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white to-[#7A866C]/5 shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <svg
                        className="w-5 h-5 text-[#1a1a1a]/60"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M7 17L17 7M17 7H7M17 7V17"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light leading-[1.2] text-[#1a1a1a] mb-3">
                    100% Digital
                  </h3>
                  <p className="text-sm text-[#1a1a1a]/60 font-light leading-relaxed">
                    Vollständig digitaler Prozess von der Antragstellung bis zur Auszahlung
                  </p>
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

        .fade-up.animate-in {
          animation: fadeUp 0.8s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  )
}