'use client'

import { useState, useEffect } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  })
  const [buttonHovered, setButtonHovered] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isBudgetOpen, setIsBudgetOpen] = useState(false)

  // Auto-close error message after 5 seconds
  useEffect(() => {
    if (submitStatus === 'error') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [submitStatus])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        message: ''
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>

      {/* Error Notification */}
      {submitStatus === 'error' && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 shadow-lg flex items-start gap-3 max-w-sm">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-red-800 font-medium text-sm">Fehler beim Senden</p>
              <p className="text-red-600 text-sm mt-1">Bitte versuchen Sie es erneut.</p>
            </div>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="text-red-400 hover:text-red-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-white to-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Side - Intro */}
          <div>
            <div className="mb-12">
              <span className="text-xs font-medium text-[#7A866C] uppercase tracking-wider">Kontakt</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1a1a1a] leading-[1.1] mt-4 mb-6">
                Lassen Sie uns über Ihre <span className="text-[#7A866C]">Förderung</span> sprechen
              </h2>
              <p className="text-lg text-[#666] leading-relaxed">
                Vereinbaren Sie ein unverbindliches Erstgespräch und erfahren Sie,
                wie viel Forschungszulage Ihrem Unternehmen zusteht.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7A866C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#7A866C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#666] mb-1">E-Mail</p>
                    <a href="mailto:info@klaimly.de" className="text-lg font-medium text-[#1a1a1a] hover:text-[#7A866C] transition-colors">
                      info@klaimly.de
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7A866C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#7A866C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#666] mb-1">Telefon</p>
                    <a href="tel:+4989123456789" className="text-lg font-medium text-[#1a1a1a] hover:text-[#7A866C] transition-colors">
                      +49 89 123 456 789
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#7A866C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#7A866C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#666] mb-1">Bürozeiten</p>
                    <p className="text-lg font-medium text-[#1a1a1a]">Mo-Fr: 9:00 - 18:00 Uhr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b border-[#e5e5e5] focus:border-[#7A866C] outline-none transition-colors bg-transparent"
                  placeholder="Ihr vollständiger Name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b border-[#e5e5e5] focus:border-[#7A866C] outline-none transition-colors bg-transparent"
                  placeholder="ihre.email@beispiel.de"
                />
              </div>

              {/* Company Field */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                  Unternehmen
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b border-[#e5e5e5] focus:border-[#7A866C] outline-none transition-colors bg-transparent"
                  placeholder="Ihr Unternehmen (optional)"
                />
              </div>

              {/* Budget Field - Custom Dropdown */}
              <div className="relative">
                <label htmlFor="budget" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                  Jährliche F&E-Ausgaben
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsBudgetOpen(!isBudgetOpen)}
                    className="w-full px-0 py-3 border-0 border-b border-[#e5e5e5] focus:border-[#7A866C] outline-none transition-colors bg-transparent text-left flex items-center justify-between"
                  >
                    <span className={formData.budget ? 'text-[#1a1a1a]' : 'text-[#666]'}>
                      {formData.budget || 'Bitte wählen'}
                    </span>
                    <svg
                      className={`w-4 h-4 text-[#666] transition-transform duration-200 ${isBudgetOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isBudgetOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-[#e5e5e5] py-2 z-50">
                      {[
                        '< 100.000 €',
                        '100.000 - 500.000 €',
                        '500.000 - 1 Mio. €',
                        '1 - 3 Mio. €',
                        '> 3 Mio. €'
                      ].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, budget: option })
                            setIsBudgetOpen(false)
                          }}
                          className="w-full px-4 py-3 text-left hover:bg-[#7A866C]/5 transition-colors text-[#1a1a1a]"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-0 border-b border-[#e5e5e5] focus:border-[#7A866C] outline-none transition-colors bg-transparent resize-none"
                  placeholder="Erzählen Sie uns von Ihrem Projekt..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#7A866C] to-[#869271] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Förderung anfragen'}
                </button>

              </div>
            </form>

            {/* Success Message - Contained within form */}
            {submitStatus === 'success' && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-40 rounded-3xl animate-fade-in">
                <div className="p-8 md:p-12 max-w-md w-full animate-scale-up">
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
                    Vielen Dank für Ihre Anfrage!
                  </h3>
                  <p className="text-[#666] text-center mb-8 leading-relaxed">
                    Wir haben Ihre Nachricht erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.
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
        </div>
      </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        .animate-slide-in-right {
          animation: slideInRight 0.4s ease-out;
        }

        .animate-check-mark {
          animation: checkMark 0.6s ease-out;
        }

        .animate-draw-check {
          animation: drawCheck 0.6s ease-out 0.3s;
          animation-fill-mode: forwards;
        }
      `}</style>
    </>
  )
}