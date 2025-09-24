'use client'

import { useState } from 'react'

export default function ServicesTab() {
  const [activeTab, setActiveTab] = useState(0)

  const services = [
    {
      title: "1. Förderpotenzialcheck",
      subtitle: "Honorarfreier Förderpotenzialcheck",
      description: "Förderfähigkeit der Projekte und Abwägung Zuschuss vs. Zulage",
      features: [
        { bold: "Förderfähigkeit prüfen:", text: "Analyse aller Projekte auf ihre Förderfähigkeit" },
        { bold: "Zuschuss vs. Zulage:", text: "Abwägung der optimalen Förderart für Ihr Unternehmen" },
        { bold: "Honorarfrei:", text: "Kostenlose und unverbindliche Erstanalyse" }
      ],
      image: "https://cdn.prod.website-files.com/67fe9d8b2049f2dad5363598/6800b632a301a04d363ae46c_services1.avif"
    },
    {
      title: "2. Projekt planen",
      subtitle: "Projekt planen",
      description: "Basierend auf der Analyse wird das Projekt förderoptimal gestaltet und die Argumentation ausgearbeitet",
      features: [
        { bold: "Förderoptimale Gestaltung:", text: "Strukturierung des Projekts für maximale Förderung" },
        { bold: "Argumentation:", text: "Ausarbeitung überzeugender Projektbegründungen" },
        { bold: "Analyse-basiert:", text: "Aufbau auf den Ergebnissen des Förderchecks" }
      ],
      image: "https://cdn.prod.website-files.com/67fe9d8b2049f2dad5363598/6800b6c8dd1728574b6e7ea4_services2.avif"
    },
    {
      title: "3. Antrag erstellen",
      subtitle: "Antrag erstellen",
      description: "Full Service-Ausarbeitung des Antrags auf Bescheinigung inkl. Bearbeitung eventueller Rückfragen der Bescheinigungsstelle",
      features: [
        { bold: "Full Service:", text: "Komplette Ausarbeitung des Bescheinigungsantrags" },
        { bold: "Rückfragen-Bearbeitung:", text: "Professionelle Beantwortung von Behördenanfragen" },
        { bold: "Bescheinigungsstelle:", text: "Direkte Kommunikation mit der BSFZ" }
      ],
      image: "https://cdn.prod.website-files.com/67fe9d8b2049f2dad5363598/6800b6c8a08f81cbec5732b7_services3.avif"
    },
    {
      title: "4. Bescheinigung",
      subtitle: "Eingang der Bescheinigung",
      description: "Mit Erhalt der positiven Bescheinigung haben Sie Rechtsanspruch auf Erhalt der Forschungszulage für das beantragte Projekt",
      features: [
        { bold: "Positive Bescheinigung:", text: "Bestätigung der Förderfähigkeit" },
        { bold: "Rechtsanspruch:", text: "Gesicherter Anspruch auf Forschungszulage" },
        { bold: "Projektbezogen:", text: "Gültigkeit für das beantragte Projekt" }
      ],
      image: "https://cdn.prod.website-files.com/67fe9d8b2049f2dad5363598/6800b6c88197051e1783c5a9_services4.avif"
    },
    {
      title: "5. Finanzamt",
      subtitle: "Antrag beim Finanzamt",
      description: "Gemeinsame Klärung aller Fragen im Prozess, Antrag auf Festsetzung der Zulage erfolgt i.d.R. durch den Steuerberater",
      features: [
        { bold: "Gemeinsame Klärung:", text: "Abstimmung aller offenen Fragen im Prozess" },
        { bold: "Steuerberater:", text: "Antragstellung erfolgt durch Ihren Steuerberater" },
        { bold: "Festsetzung:", text: "Beantragung der Zulage beim Finanzamt" }
      ],
      image: "https://cdn.prod.website-files.com/67fe9d8b2049f2dad5363598/6800b632a301a04d363ae46c_services1.avif"
    },
    {
      title: "6. Auszahlung",
      subtitle: "Verrechnung bzw. Auszahlung",
      description: "Verrechnung bzw. Auszahlung mit Steuerbescheid",
      features: [
        { bold: "Verrechnung:", text: "Direkte Verrechnung mit der Steuerschuld" },
        { bold: "Auszahlung:", text: "Auszahlung bei Steuererstattung" },
        { bold: "Steuerbescheid:", text: "Abwicklung über den regulären Steuerbescheid" }
      ],
      image: "https://cdn.prod.website-files.com/67fe9d8b2049f2dad5363598/6800b6c8dd1728574b6e7ea4_services2.avif"
    }
  ]

  return (
    <section id="process" className="py-16 sm:py-20 md:py-28 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-[#1a1a1a] mb-6 sm:mb-8">
            Ihr Weg zur Forschungszulage
          </h2>
          <p className="text-sm text-[#666] max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Die Beantragung von Fördermitteln erfordert strukturiertes Vorgehen.
            Wir begleiten Sie durch alle Phasen – von der Analyse bis zur Auszahlung.
            Für Unternehmensverbünde optimieren wir den gesamtbetrieblichen Prozess
            und gewährleisten Auditsicherheit durch lückenlose Dokumentation.
          </p>
        </div>

        {/* Tabs Container */}
        <div>
          {/* Tab Navigation - Mobile Grid */}
          <div className="mb-8">
            {/* Mobile: Grid Layout */}
            <div className="grid grid-cols-2 gap-2 sm:hidden">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-3 py-3 rounded-lg text-xs font-medium transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-[#7A866C] to-[#869271] text-white shadow-sm'
                      : 'bg-white/60 text-[#666] border border-gray-200'
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>

            {/* Desktop: Horizontal Pills */}
            <div className="hidden sm:flex justify-center">
              <div className="inline-flex bg-white/60 backdrop-blur rounded-full p-1">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    onMouseEnter={() => setActiveTab(index)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTab === index
                        ? 'bg-gradient-to-r from-[#7A866C] to-[#869271] text-white shadow-sm'
                        : 'text-[#666] hover:text-[#7A866C]'
                    }`}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left Side - Animated Graphics */}
              <div className="relative h-[300px] lg:h-[450px] bg-gradient-to-br from-[#fafafa] to-[#f5f5f5] overflow-hidden">
                {/* 1. Analyse - Magnifying Glass Animation */}
                {activeTab === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-40 h-40">
                      <svg className="absolute inset-0 w-full h-full text-[#7A866C] animate-search-move" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <div className="absolute top-[45%] left-[45%] w-3 h-3 bg-[#7A866C]/40 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                )}

                {/* 2. Prüfung - Checklist Animation */}
                {activeTab === 1 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 opacity-0 animate-check-item-1">
                        <div className="w-8 h-8 rounded-lg border-2 border-[#7A866C] flex items-center justify-center bg-[#7A866C]/5">
                          <svg className="w-5 h-5 text-[#7A866C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="w-32 h-3 bg-[#7A866C]/20 rounded-full"></div>
                      </div>
                      <div className="flex items-center gap-4 opacity-0 animate-check-item-2">
                        <div className="w-8 h-8 rounded-lg border-2 border-[#7A866C] flex items-center justify-center bg-[#7A866C]/5">
                          <svg className="w-5 h-5 text-[#7A866C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="w-40 h-3 bg-[#7A866C]/20 rounded-full"></div>
                      </div>
                      <div className="flex items-center gap-4 opacity-0 animate-check-item-3">
                        <div className="w-8 h-8 rounded-lg border-2 border-[#7A866C] flex items-center justify-center bg-[#7A866C]/5">
                          <svg className="w-5 h-5 text-[#7A866C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="w-28 h-3 bg-[#7A866C]/20 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Antragsbearbeitung - Document Processing */}
                {activeTab === 2 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-40 h-48">
                      <svg className="absolute inset-0 w-full h-full text-[#7A866C]/15" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2Z" />
                      </svg>
                      <svg className="absolute inset-0 w-full h-full text-[#7A866C] opacity-0 animate-doc-fill" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-[#7A866C] to-transparent opacity-0 animate-scan-line"></div>
                    </div>
                  </div>
                )}

                {/* 4. Bescheinigung - Certificate Stamp */}
                {activeTab === 3 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-40 h-40 rounded-full border-4 border-[#7A866C]/30 opacity-0 animate-stamp-appear">
                        <div className="absolute inset-3 rounded-full border-2 border-[#7A866C]/40">
                          <div className="absolute inset-3 rounded-full bg-[#7A866C]/10 flex items-center justify-center">
                            <svg className="w-14 h-14 text-[#7A866C]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L14.09 8.26L21 9.27L16.5 13.14L17.59 20.02L12 16.77L6.41 20.02L7.5 13.14L3 9.27L9.91 8.26L12 2Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-sm text-[#7A866C] font-medium tracking-wider opacity-0 animate-text-appear">
                        BESTÄTIGT
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. Finanzamt - Building with Arrow */}
                {activeTab === 4 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-48 h-40 flex items-center justify-center">
                      <svg className="w-40 h-40 text-[#7A866C]/30" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75M12,15C13.5,15 16.5,15.75 16.5,17.25V18H7.5V17.25C7.5,15.75 10.5,15 12,15Z" />
                      </svg>
                      <div className="absolute right-0 animate-arrow-move">
                        <svg className="w-10 h-10 text-[#7A866C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                {/* 6. Auszahlung - Money Flow Animation */}
                {activeTab === 5 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="flex flex-col items-center gap-6">
                        <div className="relative">
                          <div className="w-32 h-32 rounded-full bg-[#7A866C]/10 flex items-center justify-center border-2 border-[#7A866C]/20">
                            <span className="text-4xl text-[#7A866C] font-light">€</span>
                          </div>
                          <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#7A866C] rounded-full flex items-center justify-center animate-bounce">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="w-3 h-3 bg-[#7A866C] rounded-full opacity-0 animate-money-dot-1"></div>
                          <div className="w-3 h-3 bg-[#7A866C] rounded-full opacity-0 animate-money-dot-2"></div>
                          <div className="w-3 h-3 bg-[#7A866C] rounded-full opacity-0 animate-money-dot-3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Side - Content */}
              <div className="p-8 lg:p-10">
                <h3 className="text-2xl md:text-3xl font-light leading-[1.2] text-[#1a1a1a] mb-1">
                  {services[activeTab].title}
                </h3>
                <p className="text-[#888] text-sm mb-4">
                  {services[activeTab].subtitle}
                </p>

                <div className="w-10 h-px bg-[#e5e5e5] mb-4" />

                <p className="text-[#666] text-sm mb-12 leading-relaxed">
                  {services[activeTab].description}
                </p>

                <div className="space-y-2.5">
                  {services[activeTab].features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#52c41a]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm text-[#666]">
                        <span className="font-medium text-[#1a1a1a]">{feature.bold}</span> {feature.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes searchMove {
          0%, 100% {
            transform: rotate(-10deg) scale(1);
          }
          50% {
            transform: rotate(10deg) scale(1.1);
          }
        }

        @keyframes checkItem {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes docFill {
          0% {
            opacity: 0;
            clip-path: inset(100% 0 0 0);
          }
          100% {
            opacity: 1;
            clip-path: inset(0 0 0 0);
          }
        }

        @keyframes scanLine {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(180px);
            opacity: 0;
          }
        }

        @keyframes stampAppear {
          0% {
            transform: scale(0) rotate(180deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.1) rotate(90deg);
            opacity: 1;
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes textAppear {
          0%, 60% {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @keyframes arrowMove {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(15px);
          }
        }

        @keyframes moneyDot {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-search-move {
          animation: searchMove 3s ease-in-out infinite;
        }

        .animate-check-item-1 {
          animation: checkItem 0.5s ease-out forwards;
        }

        .animate-check-item-2 {
          animation: checkItem 0.5s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-check-item-3 {
          animation: checkItem 0.5s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-doc-fill {
          animation: docFill 2s ease-out forwards;
        }

        .animate-scan-line {
          animation: scanLine 3s linear infinite;
        }

        .animate-stamp-appear {
          animation: stampAppear 1s ease-out forwards;
        }

        .animate-text-appear {
          animation: textAppear 1s ease-out forwards;
        }

        .animate-arrow-move {
          animation: arrowMove 2s ease-in-out infinite;
        }

        .animate-money-dot-1 {
          animation: moneyDot 1.5s ease-in-out infinite;
        }

        .animate-money-dot-2 {
          animation: moneyDot 1.5s ease-in-out 0.5s infinite;
        }

        .animate-money-dot-3 {
          animation: moneyDot 1.5s ease-in-out 1s infinite;
        }
      `}</style>
    </section>
  )
}