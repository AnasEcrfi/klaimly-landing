'use client'

import { useRef } from 'react'

export default function Companies() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const companies = [
    {
      name: "Strategische Planung",
      category: "VORBEREITUNG",
      description: "Wir analysieren Ihre Projekte im Detail und prüfen alle Fördervoraussetzungen. Diese gründliche Vorbereitung schafft Planungssicherheit und maximiert Ihre Erfolgschancen."
    },
    {
      name: "Vollständige Begleitung",
      category: "BETREUUNG",
      description: "Von der ersten Beratung bis zur finalen Auszahlung - wir sind Ihr verlässlicher Partner während des gesamten Förderprozesses und darüber hinaus."
    },
    {
      name: "Risikominimierung",
      category: "SICHERHEIT",
      description: "Unsere Expertise schützt Sie vor kostspieligen Fehlern, Rückforderungen und unnötigen Verzögerungen bei Ihrer Forschungszulage."
    },
    {
      name: "Dauerhafte Partnerschaft",
      category: "KONTINUITÄT",
      description: "Ihre Förderstrategie entwickelt sich mit Ihren Projekten weiter. Wir passen uns flexibel an neue Anforderungen und Möglichkeiten an."
    },
    {
      name: "Potenziale nutzen",
      category: "OPTIMIERUNG",
      description: "Erschließen Sie das volle Spektrum der Förderung - von F&E-Projekten über Innovationen bis zu Effizienzsteigerungen."
    },
    {
      name: "Maximale Förderung",
      category: "ERFOLG",
      description: "Jeder förderbare Euro zählt. Wir identifizieren alle berechtigten Kosten und sorgen für eine optimale Abrechnung."
    }
  ]

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  return (
    <section id="benefits" className="py-20 md:py-28 bg-white">
      <div>

        {/* Header */}
        <div className="mb-16 max-w-7xl mx-auto px-8 relative">
          <div className="inline-block px-3 py-1.5 bg-[#f8f8f8] rounded-full mb-6">
            <span className="text-xs font-medium text-[#666] uppercase tracking-wider">VORTEILE</span>
          </div>
          <div className="flex justify-between items-start">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-[#1a1a1a] max-w-3xl">
              Warum mit KLAIMLY arbeiten?
            </h2>

            {/* Navigation Buttons */}
            <div className="flex gap-4 flex-shrink-0 ml-8">
              <button
                onClick={scrollLeft}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7A866C] to-[#93A084] hover:from-[#6B7760] hover:to-[#849175] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                aria-label="Previous"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={scrollRight}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7A866C] to-[#93A084] hover:from-[#6B7760] hover:to-[#849175] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                aria-label="Next"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitScrollbar: { display: 'none' } }}
          >
            <div className="flex gap-6">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-[90vw] md:w-[45vw] lg:w-[30vw] max-w-[400px] ${
                    index === 0 ? 'ml-8 lg:ml-[max((100vw-1280px)/2+2rem,2rem)]' : ''
                  } ${
                    index === companies.length - 1 ? 'mr-8' : ''
                  }`}>
                  <div className="relative rounded-3xl overflow-hidden group cursor-pointer h-[440px] md:h-[550px] bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0]">
                    {/* Content */}
                    <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
                      <div>
                        <span className="text-[#666] text-xs font-medium uppercase tracking-wider">
                          {company.category}
                        </span>
                        <h3 className="text-[#1a1a1a] text-2xl md:text-3xl font-light leading-[1.2] mt-3 mb-6">
                          {company.name}
                        </h3>
                      </div>

                      <p className="text-[#666] text-base leading-relaxed">
                        {company.description}
                      </p>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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