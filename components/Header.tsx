'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Warum Klaimly', href: '#about' },
    { label: 'Leistungen', href: '#services' },
    { label: 'Ihr Weg', href: '#process' },
    { label: 'Vorteile', href: '#benefits' },
    { label: 'FAQ', href: '#faq' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setMobileMenuOpen(false)
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95' : 'bg-transparent'
      } backdrop-blur-sm`}
    >
      <nav className="max-w-7xl mx-auto px-8 flex items-center justify-between h-[74px]">
        {/* Brand Name */}
        <Link href="/" className={`text-xl md:text-2xl font-bold tracking-wider transition-all duration-300 ${
          isScrolled ? 'text-[#1a1a1a]' : 'text-white'
        } hover:opacity-70`}>
          KLAIMLY
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                  isScrolled
                    ? 'text-[#1a1a1a]/80 hover:text-[#1a1a1a]'
                    : 'text-white/90 hover:text-white'
                } hover:tracking-wider`}
              >
                {item.label}
              </Link>
              {/* Animated underline */}
              <div
                className={`absolute bottom-[-4px] left-0 right-0 h-[2px] transition-all duration-300 transform origin-left scale-x-0 group-hover:scale-x-100 ${
                  isScrolled ? 'bg-[#1a1a1a]' : 'bg-white'
                }`}
              />
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          {/* Callback Button */}
          <a
            href="#callback"
            onClick={(e) => handleSmoothScroll(e, '#callback')}
            className={`hidden md:flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
              isScrolled
                ? 'bg-white border border-[#7A866C]/20 text-[#7A866C] hover:bg-[#7A866C]/5 hover:border-[#7A866C]/30 hover:scale-105'
                : 'bg-white/10 text-white border border-white/20 backdrop-blur hover:bg-white/20'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Rückruf
          </a>

          {/* Main CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className={`hidden md:block px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
              isScrolled
                ? 'bg-gradient-to-r from-[#7A866C] via-[#869271] to-[#93A084] text-white hover:from-[#6B7760] hover:via-[#778366] hover:to-[#849175] hover:shadow-xl hover:scale-105'
                : 'bg-white/10 text-white border border-white/20 backdrop-blur hover:bg-white/20'
            }`}
          >
            Förderung sichern
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-[#1a1a1a]' : 'text-white'
            }`}
            aria-label="menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[74px] bg-white transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-lg font-medium text-[#1a1a1a]/80 hover:text-[#1a1a1a]"
              onClick={(e) => handleSmoothScroll(e, item.href)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="block w-full bg-gradient-to-r from-[#7A866C] via-[#869271] to-[#93A084] text-white text-center px-8 py-3 rounded-full text-sm font-medium hover:from-[#6B7760] hover:via-[#778366] hover:to-[#849175] transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Förderung sichern
          </a>
        </div>
      </div>
    </header>
  )
}