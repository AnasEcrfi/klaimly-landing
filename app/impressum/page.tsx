'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Simple Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-8 flex items-center justify-between h-[74px]">
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-wider text-[#1a1a1a] hover:opacity-70 transition-all">
            KLAIMLY
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-[#666] hover:text-[#1a1a1a] transition-colors"
          >
            Zurück zur Startseite
          </Link>
        </nav>
      </header>

      {/* Content */}
      <div className="pt-32 pb-20 min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-8">Impressum</h1>

          <div className="prose prose-lg max-w-none text-[#666] space-y-8">
            <section>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4">Angaben gemäß § 5 TMG</h2>
              <p>
                <strong className="text-[#1a1a1a]">KLAIMLY GmbH</strong><br/>
                Ihr Partner für Forschungszulage<br/>
                Musterstraße 123<br/>
                10115 Berlin<br/>
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4 mt-8">Vertreten durch</h2>
              <p>
                Geschäftsführer: [Name des Geschäftsführers]<br/>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4 mt-8">Kontakt</h2>
              <p>
                Telefon: +49 (0) 30 123456<br/>
                E-Mail: info@klaimly.de<br/>
                Website: www.klaimly.de
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4 mt-8">Registereintrag</h2>
              <p>
                Eintragung im Handelsregister<br/>
                Registergericht: Amtsgericht Berlin-Charlottenburg<br/>
                Registernummer: HRB 123456 B
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4 mt-8">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br/>
                DE123456789
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4 mt-8">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p>
                Berufsbezeichnung: Unternehmensberater<br/>
                Zuständige Kammer: Industrie- und Handelskammer Berlin<br/>
                Verliehen in: Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4 mt-8">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>
                [Name des Verantwortlichen]<br/>
                KLAIMLY GmbH<br/>
                Musterstraße 123<br/>
                10115 Berlin<br/>
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4 mt-8">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#7A866C] hover:underline ml-1">
                  https://ec.europa.eu/consumers/odr/
                </a>
                <br/><br/>
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4 mt-8">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section className="border-t border-gray-200 pt-8 mt-12">
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4">Haftungsausschluss</h2>

              <h3 className="text-xl font-light text-[#1a1a1a] mb-3 mt-6">Haftung für Inhalte</h3>
              <p className="mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>

              <h3 className="text-xl font-light text-[#1a1a1a] mb-3 mt-6">Haftung für Links</h3>
              <p className="mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
              </p>
              <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Links umgehend entfernen.
              </p>

              <h3 className="text-xl font-light text-[#1a1a1a] mb-3 mt-6">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
                nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="mt-4">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>

            <section className="border-t border-gray-200 pt-8 mt-12">
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4">Kooperationspartner</h2>
              <p>
                In Kooperation mit:<br/>
                <strong className="text-[#1a1a1a]">GEWI GmbH & Co. KG</strong><br/>
                [Adresse des Partners]
              </p>
            </section>

            <section className="border-t border-gray-200 pt-8 mt-12">
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4">Website-Entwicklung</h2>
              <p>
                Design und Entwicklung:<br/>
                <a href="https://www.mpagency.ae" target="_blank" rel="noopener noreferrer" className="text-[#7A866C] hover:underline">
                  MP-Agency
                </a>
              </p>
            </section>

            <section className="text-sm text-[#999] mt-12 pt-8 border-t border-gray-200">
              <p>Stand: Januar 2025</p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}