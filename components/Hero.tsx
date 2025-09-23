'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroVideoRef.current) {
        const scrollY = window.scrollY
        const translateY = scrollY * 0.1
        const scale = 1.1 + scrollY * 0.0001
        heroVideoRef.current.style.transform = `translate3d(0px, ${-translateY}px, 0px) scale3d(${scale}, ${scale}, 1)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Hero Background Video with Parallax */}
      <div className="absolute inset-0 z-0">
        <video
          ref={heroVideoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover absolute inset-0 scale-110 blur-sm"
          style={{
            willChange: 'transform',
            transform: 'translate3d(0px, -20px, 0px) scale3d(1.1, 1.1, 1)',
            filter: 'blur(4px)',
          }}
        >
          <source src="/klaimly_video.m4v" type="video/mp4" />
          <source src="/klaimly_video.mp4" type="video/mp4" />
        </video>
        {/* Overlay with stronger gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 min-h-screen flex items-center">
        <div className="max-w-2xl pt-48 pb-20 -ml-[3%]">
          {/* Animated Heading */}
          <div className="animate-fade-in-up animation-delay-100">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-8" style={{ color: 'white' }}>
              Forschung verdient Förderung.
            </h1>
          </div>

          {/* Animated Paragraph */}
          <div className="animate-fade-in-up animation-delay-200">
            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-12 font-light leading-relaxed">
              Wir holen Ihre Forschungszulage.
              <br />
              Einfach. Sicher. Digital.
            </p>
          </div>

          {/* Fancy Button with Double Arrow Animation */}
          <div className="animate-fade-in-up animation-delay-300">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 bg-white text-[#1a1a1a] px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Jetzt Beratung vereinbaren</span>

              {/* First Arrow */}
              <div className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Second Arrow (Hidden, Slides In) */}
              <div className="absolute right-8 w-5 h-5 opacity-0 -translate-x-10 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-100 {
          animation-delay: 100ms;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </section>
  )
}