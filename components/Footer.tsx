'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#7A866C] via-[#748165] to-[#6E785F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">

          {/* Left Column - Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl sm:text-3xl font-light text-white mb-4">KLAIMLY</h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
              Ihr Partner für Forschungszulage und Fördermittelberatung.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://linkedin.com/company/klaimly" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-medium mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/#about" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">Über uns</Link></li>
              <li><Link href="/#services" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">Leistungen</Link></li>
              <li><Link href="/#process" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">Prozess</Link></li>
              <li><Link href="/#faq" className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">FAQ</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-medium mb-4 sm:mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-white/70 text-sm sm:text-base">Forschungszulage</li>
              <li className="text-white/70 text-sm sm:text-base">Fördermittelberatung</li>
              <li className="text-white/70 text-sm sm:text-base">Dokumentation</li>
              <li className="text-white/70 text-sm sm:text-base">Compliance</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-medium mb-4 sm:mb-6">Kontakt</h4>
            <div className="space-y-3">
              <div>
                <p className="text-white/70 text-sm sm:text-base">Taunusanlage 1</p>
                <p className="text-white/70 text-sm sm:text-base">60329 Frankfurt am Main</p>
              </div>
              <div className="pt-2 space-y-2">
                <a href="mailto:info@klaimly.de" className="block text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base">info@klaimly.de</a>
                <Link href="/#contact" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base group">
                  <span>Kontaktformular</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
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