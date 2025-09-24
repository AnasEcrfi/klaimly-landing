'use client'

import { useState, useEffect, useRef } from 'react'

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const testimonials = [
    {
      review: "Die Zusammenarbeit mit KLAIMLY hat unsere F&E-Förderung revolutioniert. Professionell, effizient und mit beeindruckenden Ergebnissen.",
      reviewTitle: "Exzellente Beratung",
      name: "Dr. Michael Schmidt",
      role: "CTO, TechInnovate GmbH",
      image: "https://cdn.prod.website-files.com/686e5f117daf09c744bbab53/68b58aab5f60a4e38a0ec0c9_Home%20author%20image.webp"
    },
    {
      review: "Innerhalb von 3 Monaten hatten wir unsere erste Auszahlung. Die Expertise des Teams ist unübertroffen.",
      reviewTitle: "Schnelle Ergebnisse",
      name: "Sarah Weber",
      role: "Geschäftsführerin, Digital Solutions",
      image: "https://cdn.prod.website-files.com/686e5f117daf09c744bbab53/686f4811e6b2605289d088d6_Client%20Image%20One.webp"
    },
    {
      review: "KLAIMLY hat uns geholfen, über 400.000€ Forschungszulage zu erhalten. Ein Game-Changer für unser Unternehmen.",
      reviewTitle: "Maximale Förderung",
      name: "Thomas Müller",
      role: "CEO, Innovation Labs",
      image: "https://cdn.prod.website-files.com/686e5f117daf09c744bbab53/68b58aab5f60a4e38a0ec0c9_Home%20author%20image.webp"
    }
  ]

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 3500)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)

    // Reset interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 3500)
  }

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % testimonials.length)
  }

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Two Card Layout with Header aligned */}
        <div className="max-w-6xl mx-auto">
          {/* Header with Navigation */}
          <div className="flex justify-between items-start mb-16 gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-[#1a1a1a] max-w-3xl">
              Was unsere Kunden über unsere Beratung sagen
            </h2>

            {/* Navigation Buttons */}
            <div className="flex gap-4 flex-shrink-0">
              <button
                onClick={prevSlide}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7A866C] to-[#93A084] hover:from-[#6B7760] hover:to-[#849175] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7A866C] to-[#93A084] hover:from-[#6B7760] hover:to-[#849175] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Cards Container with Transition */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-all duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Left Card - Review */}
                    <div className="bg-[#f5f5f5] rounded-2xl p-10 md:p-12 lg:p-14 min-h-[550px] flex flex-col justify-center">
                      <div className="text-sm font-medium text-[#666] uppercase tracking-wider mb-6">
                        {testimonial.reviewTitle}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-light leading-[1.2] text-[#1a1a1a]">
                        &ldquo;{testimonial.review}&rdquo;
                      </h3>
                    </div>

                    {/* Right Card - Person Image */}
                    <div className="relative rounded-2xl min-h-[550px] overflow-hidden">
                      {/* Full Background Image */}
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name} - ${testimonial.role} - Kundenbewertung für Klaimly`}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}