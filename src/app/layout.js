import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "S&V Solutions | Agencia de Desarrollo Web y Soluciones Tecnológicas",
  description: "S&V Solutions desarrolla páginas web modernas, sistemas digitales y soluciones tecnológicas para empresas y emprendimientos en Colombia.",
  keywords: ["desarrollo web", "páginas web", "Colombia", "agencia digital", "Next.js", "soluciones tecnológicas"],
  authors: [{ name: "S&V Solutions" }],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://syvsolutions.com",
    siteName: "S&V Solutions",
    title: "S&V Solutions | Desarrollo Web & Soluciones Digitales",
    description: "Desarrollamos páginas web modernas, sistemas digitales y soluciones tecnológicas para empresas y emprendimientos que quieren crecer.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "S&V Solutions - Agencia de Desarrollo Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "S&V Solutions | Desarrollo Web & Soluciones Digitales",
    description: "Desarrollamos páginas web modernas y soluciones tecnológicas para empresas en Colombia.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "S&V Solutions",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "url": "https://syvsolutions.com",
              "description": "Agencia de desarrollo web y soluciones tecnológicas en Colombia.",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "COP",
              },
              "author": {
                "@type": "Organization",
                "name": "S&V Solutions",
                "url": "https://syvsolutions.com"
              }
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
