'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Datenschutz() {
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
          <h1 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-8">Datenschutzerklärung</h1>

          <div className="prose prose-lg max-w-none text-[#666] space-y-8">
            <section>
              <p className="text-sm text-[#999] mb-8">Stand: Januar 2025</p>

              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4 mt-8">1. Verantwortlicher</h2>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br/>
                KLAIMLY<br/>
                Taunusanlage 1<br/>
                60329 Frankfurt am Main<br/>
                Deutschland<br/>
                E-Mail: info@klaimly.de
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4 mt-8">2. Erhebung und Speicherung personenbezogener Daten</h2>
              <p>
                Bei der Nutzung unserer Website erheben wir personenbezogene Daten nur, wenn Sie uns diese
                freiwillig mitteilen, z.B. beim Ausfüllen des Kontaktformulars oder bei der Anfrage zur
                Forschungszulage. Folgende Daten werden dabei verarbeitet:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Name und Vorname</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer (optional)</li>
                <li>Unternehmen (optional)</li>
                <li>Jährliche F&E-Ausgaben (optional)</li>
                <li>Ihre Nachricht/Anfrage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4 mt-8">3. Zweck der Datenverarbeitung</h2>
              <p>
                Die von Ihnen zur Verfügung gestellten Daten verwenden wir ausschließlich für folgende Zwecke:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Bearbeitung Ihrer Anfragen zur Forschungszulage</li>
                <li>Kontaktaufnahme und Beratung zu Fördermitteln</li>
                <li>Durchführung der beauftragten Dienstleistungen</li>
                <li>Versand von relevanten Informationen zur Forschungszulage (nur mit Ihrer Einwilligung)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4 mt-8">4. Rechtsgrundlage</h2>
              <p>
                Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage von Art. 6 Abs. 1 DSGVO:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</li>
                <li>Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)</li>
                <li>Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4 mt-8">5. Datenweitergabe</h2>
              <p>
                Eine Übermittlung Ihrer persönlichen Daten an Dritte findet nur statt, wenn:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben</li>
                <li>Die Weitergabe zur Durchführung der Beratung zur Forschungszulage erforderlich ist</li>
                <li>Eine gesetzliche Verpflichtung besteht</li>
                <li>Die Weitergabe zur Zusammenarbeit mit unserem Partner GEWI erforderlich ist</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4 mt-8">6. Cookies</h2>
              <p>
                Unsere Website verwendet technisch notwendige Cookies, um die Grundfunktionen der Website
                zu ermöglichen. Diese Cookies speichern keine personenbezogenen Daten und werden nach
                Beendigung der Browser-Sitzung automatisch gelöscht.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4 mt-8">7. Analyse-Tools</h2>
              <p>
                Wir verwenden datenschutzfreundliche Analyse-Tools, die keine personenbezogenen Daten
                speichern und vollständig DSGVO-konform sind. Die Analyse erfolgt ausschließlich auf
                Basis anonymisierter Daten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4 mt-8">8. Ihre Rechte</h2>
              <p>
                Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Auskunftsrecht:</strong> Sie können Auskunft über Ihre gespeicherten Daten verlangen</li>
                <li><strong>Berichtigungsrecht:</strong> Sie können die Berichtigung unrichtiger Daten verlangen</li>
                <li><strong>Löschungsrecht:</strong> Sie können die Löschung Ihrer Daten verlangen</li>
                <li><strong>Einschränkungsrecht:</strong> Sie können die Einschränkung der Verarbeitung verlangen</li>
                <li><strong>Widerspruchsrecht:</strong> Sie können der Verarbeitung widersprechen</li>
                <li><strong>Datenübertragbarkeit:</strong> Sie können die Übertragung Ihrer Daten verlangen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4 mt-8">9. Speicherdauer</h2>
              <p>
                Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies für die Erfüllung der
                jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Nach
                Ablauf der Fristen werden die Daten gelöscht.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4 mt-8">10. Datensicherheit</h2>
              <p>
                Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen
                zufällige oder vorsätzliche Manipulation, Verlust, Zerstörung oder den Zugriff unberechtigter
                Personen zu schützen. Unsere Website verwendet eine SSL-Verschlüsselung für die sichere
                Übertragung Ihrer Daten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4 mt-8">11. Kontaktformular</h2>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
                wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4 mt-8">12. Beschwerderecht</h2>
              <p>
                Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht
                sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-4 mt-8">13. Aktualität und Änderung</h2>
              <p>
                Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung unserer Website
                oder aufgrund geänderter gesetzlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung
                zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf dieser Seite abgerufen werden.
              </p>
            </section>

            <section className="border-t border-gray-200 pt-8 mt-12">
              <p className="text-sm text-[#999]">
                Bei Fragen zum Datenschutz wenden Sie sich bitte an:<br/>
                E-Mail: info@klaimly.de
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}