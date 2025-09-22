import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Klaimly - Ihre Forschungszulage. Einfach. Sicher. Digital.",
  description: "Maximale Förderung für Ihre Forschung und Entwicklung. Bis zu 1 Mio. € jährlich mit professioneller Begleitung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
