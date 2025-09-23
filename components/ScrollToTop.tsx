'use client'

import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToCallback = () => {
    const callbackSection = document.querySelector('#callback')
    if (callbackSection) {
      callbackSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-8 right-8 z-40 flex flex-col items-center gap-3"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Callback Button - appears on hover above the back-to-top button */}
          <button
            onClick={scrollToCallback}
            className={`w-14 h-14 bg-white border border-[#7A866C]/20 text-[#7A866C] rounded-full shadow-lg hover:shadow-xl hover:scale-110 hover:bg-gradient-to-br hover:from-[#7A866C] hover:to-[#869271] hover:text-white hover:border-transparent transition-all duration-500 flex items-center justify-center group ${
              isHovered
                ? 'translate-y-0 opacity-100 scale-100'
                : 'translate-y-8 opacity-0 scale-0 pointer-events-none'
            }`}
            style={{
              transitionProperty: 'all',
              transitionDuration: isHovered ? '300ms' : '200ms',
              transitionTimingFunction: isHovered ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' : 'ease-in'
            }}
            aria-label="Rückruf anfordern"
          >
            <svg
              className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </button>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-14 h-14 bg-gradient-to-br from-[#7A866C] to-[#869271] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
            aria-label="Nach oben scrollen"
          >
            <svg
              className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes popIn {
          0% {
            opacity: 0;
            transform: translateY(8px) scale(0);
          }
          60% {
            transform: translateY(-2px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        button {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  )
}