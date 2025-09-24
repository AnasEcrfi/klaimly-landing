import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Klaimly - Ihre Forschungszulage. Einfach. Sicher. Digital.",
  description: "Maximale Förderung für Ihre Forschung und Entwicklung. Bis zu 3,5 Mio. € jährlich mit professioneller Begleitung. ✓ 100% digital ✓ Erfolgsabhängiges Honorar ✓ Für alle Unternehmensgrößen",
  keywords: "Forschungszulage, Fördermittel, F&E Förderung, Forschung und Entwicklung, BSFZ, Steuervergünstigung, Innovation, Förderberatung, Frankfurt",
  authors: [{ name: "Klaimly GmbH" }],
  creator: "Klaimly GmbH",
  publisher: "Klaimly GmbH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://klaimly.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Klaimly - Ihre Forschungszulage. Einfach. Sicher. Digital.",
    description: "Maximale Förderung für Ihre F&E-Projekte. Bis zu 3,5 Mio. € jährlich. 100% digital, erfolgsabhängiges Honorar.",
    url: "https://klaimly.de",
    siteName: "Klaimly",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Klaimly - Forschungszulage und Fördermittelberatung",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-verification-code",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Klaimly GmbH",
  "url": "https://klaimly.de",
  "logo": "https://klaimly.de/logo.png",
  "description": "Ihr Partner für Forschungszulage und Fördermittelberatung in Deutschland",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Taunusanlage 1",
    "addressLocality": "Frankfurt am Main",
    "postalCode": "60329",
    "addressCountry": "DE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49-69-123456",
    "contactType": "customer service",
    "email": "info@klaimly.de",
    "availableLanguage": "German"
  },
  "sameAs": [
    "https://www.linkedin.com/company/klaimly"
  ]
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Forschungszulage Beratung",
  "provider": {
    "@type": "Organization",
    "name": "Klaimly GmbH"
  },
  "description": "Professionelle Beratung und Unterstützung bei der Beantragung der Forschungszulage",
  "areaServed": "DE",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Forschungsförderung Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Förderpotenzialcheck",
          "description": "Kostenlose Analyse Ihrer Förderfähigkeit"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Antragsstellung",
          "description": "Vollständige Unterstützung bei der Antragstellung"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#7A866C" />
      </head>
      <body className="antialiased">
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <Script
          id="json-ld-service"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdService),
          }}
        />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
