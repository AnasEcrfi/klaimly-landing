'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Was versteht man unter der Forschungszulage?",
      answer: "Die Forschungszulage (FZul) ist ein steuerliches Förderinstrument, das seit 2020 existiert und Unternehmen bei ihren Innovations-, Forschungs- und Entwicklungsaktivitäten unterstützt. Durch das Forschungszulagengesetz haben Sie einen rechtlichen Anspruch auf diese Förderung, die mit Ihrer Steuer verrechnet oder direkt ausgezahlt wird. Der digitale Antragsprozess ist unbürokratisch gestaltet und selbst erfolglose Projekte können gefördert werden."
    },
    {
      question: "Welche Unternehmen profitieren von der Forschungszulage?",
      answer: "Die Förderung steht Unternehmen jeglicher Branche und Größenordnung offen - vom innovativen Start-up bis zum etablierten Konzern. Anders als bei klassischer Projektförderung gibt es keine thematischen Einschränkungen. Besonders attraktiv: Projekte können komplett an externe Dienstleister vergeben werden und die Beantragung ist flexibel vor, während oder nach Projektabschluss möglich."
    },
    {
      question: "Welche Förderbeträge sind möglich?",
      answer: "Durch das Wachstumschancengesetz wurde die jährliche Bemessungsgrundlage auf 10 Millionen Euro erhöht. Großunternehmen erhalten eine Förderquote von 25%, während kleine und mittlere Unternehmen (KMU) sogar 35% ihrer förderfähigen Kosten erstattet bekommen. Dies bedeutet eine maximale Fördersumme von bis zu 3,5 Millionen Euro jährlich pro Unternehmensverbund."
    },
    {
      question: "Welche Projekte und Kosten sind förderfähig?",
      answer: "Gefördert werden vielfältige F&E-Projekte: von Produktneuentwicklungen über Prozessoptimierungen bis hin zu Prototypentests und digitalen Geschäftsmodellen. Förderfähige Kosten umfassen Personalaufwendungen für F&E-Mitarbeiter, Auftragsforschung, Eigenleistungen von Gesellschaftern sowie Abschreibungen auf Forschungsgeräte. Die Projekte müssen dabei Neuheitscharakter aufweisen und technische Unsicherheiten beinhalten."
    },
    {
      question: "Wie schnell erfolgt die Auszahlung?",
      answer: "Der Prozess ist erfreulich zügig: Mit professioneller Unterstützung ist Ihr Antrag binnen weniger Wochen vorbereitet. Nach Einreichung bei der Bescheinigungsstelle und dem Finanzamt erfolgt die Auszahlung üblicherweise innerhalb von 3-4 Monaten."
    },
    {
      question: "Ist eine rückwirkende Beantragung möglich?",
      answer: "Absolut - die Forschungszulage kann bis zu vier Jahre rückwirkend beantragt werden. Für Projekte, die beispielsweise 2020 gestartet wurden, haben Sie noch bis Ende 2024 Zeit für die Antragstellung."
    },
    {
      question: "Wobei hilft KLAIMLY konkret?",
      answer: "KLAIMLY übernimmt den gesamten Prozess für Sie: Von der Identifikation aller förderfähigen Projekte über die rechtssichere Dokumentation bis zur finalen Einreichung beim Finanzamt. Unsere Experten stellen sicher, dass Sie die maximale Förderung erhalten und keine Chance ungenutzt bleibt."
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Column - Header & Image */}
          <div>
            <div className="mb-12">
              <div className="inline-block px-3 py-1.5 bg-[#f8f8f8] rounded-full mb-6">
                <span className="text-xs font-medium text-[#666] uppercase tracking-wider">FAQ</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-[#1a1a1a] mb-8">
                Alles was Sie wissen müssen
              </h2>
              <p className="text-lg text-[#666]">
                Schnelle Antworten zu den wichtigsten Fragen rund um die Forschungszulage
              </p>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#f5f5f5] to-[#fafafa] h-[400px] flex items-center justify-center">
              <div className="text-center px-8">
                <svg className="w-32 h-32 mx-auto text-[#7A866C]/30 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl md:text-3xl font-light leading-[1.2] text-[#1a1a1a] mb-3">Haben Sie Fragen?</h3>
                <p className="text-[#666]">Unser Team ist für Sie da</p>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[#e5e5e5] pb-4"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-4 text-left transition-colors duration-300 group"
                >
                  <h3 className="text-lg md:text-xl font-light leading-[1.3] text-[#1a1a1a] pr-8 group-hover:text-[#1a1a1a]/80">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-[#666] transition-transform duration-500 ease-in-out ${
                        openIndex === index ? 'rotate-45' : 'rotate-0'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[#666] pb-4 pr-12 pt-2 transition-all duration-300">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}