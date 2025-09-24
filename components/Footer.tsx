'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#7A866C] via-[#748165] to-[#6E785F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">

          {/* Left Column - Company Info */}
          <div className="md:col-span-1 sm:col-span-2 md:col-span-1">
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Ihr Partner für Forschungszulage und Fördermittelberatung.
              Wir maximieren Ihre Förderung.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              <a href="https://instagram.com/klaimly" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"/>
                  <circle cx="18.406" cy="5.594" r="1.44"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/klaimly" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="text-white/60 text-xs sm:text-sm font-medium uppercase tracking-wider mb-4 sm:mb-6">Entdecken</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/#about" className="text-white/80 hover:text-white transition-colors duration-300 text-sm sm:text-base">Warum Klaimly</Link></li>
              <li><Link href="/#services" className="text-white/80 hover:text-white transition-colors duration-300 text-sm sm:text-base">Leistungen</Link></li>
              <li><Link href="/#process" className="text-white/80 hover:text-white transition-colors duration-300 text-sm sm:text-base">So funktioniert&apos;s</Link></li>
              <li><Link href="/#faq" className="text-white/80 hover:text-white transition-colors duration-300 text-sm sm:text-base">FAQ</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white/60 text-xs sm:text-sm font-medium uppercase tracking-wider mb-4 sm:mb-6">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><span className="text-white/80 text-sm sm:text-base">Forschungszulage</span></li>
              <li><span className="text-white/80 text-sm sm:text-base">Fördermittelberatung</span></li>
              <li><span className="text-white/80 text-sm sm:text-base">Dokumentation</span></li>
              <li><span className="text-white/80 text-sm sm:text-base">Antragsstellung</span></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white/60 text-xs sm:text-sm font-medium uppercase tracking-wider mb-4 sm:mb-6">Kontakt</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="text-white text-sm sm:text-base font-medium">Frankfurt am Main</li>
              <li><span className="text-white/90 text-sm sm:text-base">Taunusanlage 1</span></li>
              <li><span className="text-white/90 text-sm sm:text-base">60329 Frankfurt</span></li>
              <li className="pt-2"><a href="mailto:info@klaimly.de" className="text-white/80 hover:text-white transition-colors duration-300 text-sm sm:text-base">info@klaimly.de</a></li>
              <li><Link href="/#contact" className="text-white/80 hover:text-white transition-colors duration-300 text-sm sm:text-base">Kontaktformular</Link></li>
            </ul>
          </div>
        </div>

        {/* Logo */}
        <div className="mb-12 sm:mb-16">
          <span className="text-3xl sm:text-4xl font-light text-white/90 tracking-wider">KLAIMLY</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 mb-4 md:mb-0">
            <p className="text-white/60 text-xs sm:text-sm">
              © 2025 KLAIMLY - Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-1">
              <span className="text-white/60 text-xs sm:text-sm">Designed by</span>
              <a
                href="https://www.mpagency.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-300 text-xs sm:text-sm font-medium"
              >
                MP-Agency
              </a>
            </div>
          </div>
          <div className="flex gap-4 sm:gap-6">
            <Link href="/datenschutz" className="text-white/60 hover:text-white transition-colors duration-300 text-xs sm:text-sm">Datenschutz</Link>
            <Link href="/impressum" className="text-white/60 hover:text-white transition-colors duration-300 text-xs sm:text-sm">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}