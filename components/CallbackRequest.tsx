'use client'

import { useState } from 'react'

export default function CallbackRequest() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bestTime: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '68bd323f-f6c2-4cf9-a4d5-6f26bbef7a47',
          name: formData.name,
          phone: formData.phone,
          best_time: formData.bestTime || 'Flexibel',
          subject: 'Neue Rückrufanfrage - LEAD',
          from_name: 'Klaimly Rückruf-Service',
          message: `Neue Rückrufanfrage erhalten!\n\nName: ${formData.name}\nTelefon: ${formData.phone}\nBeste Zeit: ${formData.bestTime || 'Flexibel'}\n\nBitte zeitnah zurückrufen - LEAD!`
        })
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', phone: '', bestTime: '' })
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        throw new Error(result.message || 'Fehler beim Senden')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="callback" className="py-20 md:py-28 bg-gradient-to-br from-[#7A866C]/5 via-white to-[#93A084]/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Info */}
          <div>
            <span className="text-xs font-medium text-[#7A866C] uppercase tracking-wider">Kostenloser Service</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] leading-[1.1] mt-4 mb-6">
              Wir rufen Sie <span className="text-[#7A866C]">kostenfrei</span> zurück
            </h2>
            <p className="text-lg text-[#666] leading-relaxed mb-8">
              Keine Zeit für lange Warteschleifen? Hinterlassen Sie uns Ihre Nummer
              und wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#7A866C]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#7A866C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#1a1a1a] font-medium">100% Kostenlos & unverbindlich</p>
                  <p className="text-sm text-[#666]">Keine versteckten Kosten</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#7A866C]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#7A866C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#1a1a1a] font-medium">Rückruf innerhalb von 24 Stunden</p>
                  <p className="text-sm text-[#666]">Garantiert schnelle Reaktionszeit</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#7A866C]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#7A866C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#1a1a1a] font-medium">Persönliche Beratung</p>
                  <p className="text-sm text-[#666]">Individuell auf Ihre Bedürfnisse abgestimmt</p>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-3 bg-white rounded-2xl shadow-sm">
              <div className="flex -space-x-2">
                {/* Avatar 1 - Professional Man */}
                <div className="w-8 h-8 rounded-full ring-2 ring-white overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                {/* Avatar 2 - Professional Woman */}
                <div className="w-8 h-8 rounded-full ring-2 ring-white overflow-hidden bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                {/* Avatar 3 - Company Representative */}
                <div className="w-8 h-8 rounded-full ring-2 ring-white overflow-hidden bg-gradient-to-br from-[#7A866C] to-[#93A084] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
              </div>
              <p className="text-sm text-[#666]">
                <span className="font-semibold text-[#1a1a1a]">500+</span> Unternehmen vertrauen uns
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">

              {/* Phone Icon */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#7A866C] to-[#93A084] rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>

              <h3 className="text-2xl font-light text-[#1a1a1a] mb-6">
                Jetzt Rückruf anfordern
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="callback-name" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                    Ihr Name *
                  </label>
                  <input
                    type="text"
                    id="callback-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-[#e5e5e5] rounded-xl focus:border-[#7A866C] focus:ring-1 focus:ring-[#7A866C] outline-none transition-all"
                    placeholder="Max Mustermann"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="callback-phone" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                    Ihre Telefonnummer *
                  </label>
                  <input
                    type="tel"
                    id="callback-phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-[#e5e5e5] rounded-xl focus:border-[#7A866C] focus:ring-1 focus:ring-[#7A866C] outline-none transition-all"
                    placeholder="+49 123 456789"
                  />
                </div>

                {/* Best Time Field - Custom Dropdown */}
                <div className="relative">
                  <label htmlFor="callback-time" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                    Wann erreichen wir Sie am besten? (optional)
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
                    className="w-full px-4 py-3 border border-[#e5e5e5] rounded-xl focus:border-[#7A866C] focus:ring-1 focus:ring-[#7A866C] outline-none transition-all bg-white text-left flex items-center justify-between"
                  >
                    <span className={formData.bestTime ? 'text-[#1a1a1a]' : 'text-[#999]'}>
                      {formData.bestTime || 'Flexibel'}
                    </span>
                    <svg
                      className={`w-4 h-4 text-[#666] transition-transform duration-200 ${isTimeDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isTimeDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-[#e5e5e5] py-2 z-50">
                      {[
                        'Flexibel',
                        'Morgens (9-12 Uhr)',
                        'Mittags (12-15 Uhr)',
                        'Nachmittags (15-18 Uhr)'
                      ].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, bestTime: option === 'Flexibel' ? '' : option })
                            setIsTimeDropdownOpen(false)
                          }}
                          className="w-full px-4 py-3 text-left hover:bg-[#7A866C]/5 transition-colors text-[#1a1a1a]"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Privacy Notice */}
                <p className="text-xs text-[#999]">
                  Mit dem Absenden stimmen Sie unserer{' '}
                  <a href="/datenschutz" className="text-[#7A866C] hover:underline">
                    Datenschutzerklärung
                  </a>{' '}
                  zu.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#7A866C] to-[#869271] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Wird gesendet...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Kostenlosen Rückruf anfordern</span>
                    </>
                  )}
                </button>


                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 animate-fade-in">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-red-800 font-medium">Fehler beim Senden</p>
                        <p className="text-red-600 text-sm mt-1">Bitte versuchen Sie es erneut.</p>
                      </div>
                    </div>
                  </div>
                )}
              </form>

              {/* Success Message - Overlay Style like Contact Form */}
              {submitStatus === 'success' && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-40 rounded-3xl animate-fade-in">
                  <div className="p-8 md:p-10 max-w-md w-full animate-scale-up">
                    {/* Success Icon */}
                    <div className="w-20 h-20 bg-gradient-to-br from-[#7A866C] to-[#93A084] rounded-full mx-auto mb-6 flex items-center justify-center animate-check-mark">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                          className="animate-draw-check"
                        />
                      </svg>
                    </div>

                    {/* Success Message */}
                    <h3 className="text-2xl md:text-3xl font-light text-[#1a1a1a] text-center mb-4">
                      Rückruf angefordert!
                    </h3>
                    <p className="text-[#666] text-center mb-8 leading-relaxed">
                      Wir rufen Sie innerhalb von 24 Stunden zurück. Halten Sie Ihr Telefon bereit!
                    </p>

                    {/* Close Button */}
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="w-full bg-gradient-to-r from-[#7A866C] to-[#869271] text-white px-6 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                    >
                      Schließen
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#7A866C]/20 to-[#93A084]/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#93A084]/20 to-[#7A866C]/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

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

        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes checkMark {
          0% {
            transform: scale(0) rotate(45deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.2) rotate(-5deg);
          }
          100% {
            transform: scale(1) rotate(0);
            opacity: 1;
          }
        }

        @keyframes drawCheck {
          from {
            stroke-dasharray: 50;
            stroke-dashoffset: 50;
          }
          to {
            stroke-dasharray: 50;
            stroke-dashoffset: 0;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scale-up {
          animation: scaleUp 0.4s ease-out;
        }

        .animate-check-mark {
          animation: checkMark 0.6s ease-out;
        }

        .animate-draw-check {
          animation: drawCheck 0.6s ease-out 0.3s;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  )
}