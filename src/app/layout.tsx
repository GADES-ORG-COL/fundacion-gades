import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const SITE_URL = "https://www.fundaciongades.org.co";

export const metadata: Metadata = {
  title:
    "Fundación GADES — Gestión agroambiental para el desarrollo social y empresarial",
  description:
    "ONG colombiana sin ánimo de lucro fundada en 1997. Operamos en el Valle del Cauca con tres líneas: gestión agroambiental, desarrollo empresarial y desarrollo social. NIT 815.000.850-0. 11.578 beneficiarios.",
  keywords: [
    "Fundación GADES",
    "gestión agroambiental Colombia",
    "ONG Valle del Cauca",
    "desarrollo social empresarial Palmira",
    "proyectos ambientales Colombia",
    "sostenibilidad agroindustrial",
    "cooperación técnica ambiental",
    "ODS Colombia",
    "protección cuencas Valle del Cauca",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
    languages: {
      "es-CO": "/",
      en: "/en",
    },
  },
  openGraph: {
    title:
      "Fundación GADES — Gestión agroambiental para el desarrollo social y empresarial",
    description:
      "ONG colombiana sin ánimo de lucro. Operador técnico en gestión agroambiental, desarrollo empresarial y desarrollo social en el Valle del Cauca desde 1997.",
    url: SITE_URL,
    siteName: "Fundación GADES",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundación GADES — Valle del Cauca, Colombia",
    description:
      "ONG colombiana. Gestión agroambiental, desarrollo empresarial y desarrollo social desde 1997. NIT 815.000.850-0.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: "/brand/symbol.png" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Fundación GADES",
  alternateName:
    "Fundación para la Gestión Agroambiental y el Desarrollo Empresarial y Social",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/symbol.png`,
  foundingDate: "1997-02-14",
  taxID: "815.000.850-0",
  description:
    "ONG sin ánimo de lucro con base en Palmira, Valle del Cauca. Articula capital privado, recursos públicos y conocimiento técnico para el agro sostenible del trópico desde 1997.",
  email: "gadesinformacion@gmail.com",
  telephone: "+57 319 337 5949",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Palmira",
    addressRegion: "Valle del Cauca",
    addressCountry: "CO",
  },
  areaServed: { "@type": "Country", name: "Colombia" },
  sameAs: ["https://github.com/GADES-ORG/WEB-PAGE"],
  knowsAbout: [
    "Gestión agroambiental",
    "Desarrollo empresarial agroindustrial",
    "Desarrollo social comunitario",
    "Sostenibilidad ambiental",
    "Protección de cuencas hidrográficas",
    "ODS Colombia",
  ],
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 1,
    maxValue: 50,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es Fundación GADES?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fundación GADES (Fundación para la Gestión Agroambiental y el Desarrollo Empresarial y Social) es una ONG colombiana sin ánimo de lucro con sede en Palmira, Valle del Cauca. Fue constituida el 14 de febrero de 1997 con NIT 815.000.850-0. Actúa como operador técnico y humano en tres líneas: gestión agroambiental, desarrollo empresarial y desarrollo social.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde opera Fundación GADES?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Opera principalmente en 8 municipios del Valle del Cauca, Colombia: Palmira, Candelaria, Pradera, Florida, El Cerrito, Guacarí, Darién y Ginebra.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántos beneficiarios tiene Fundación GADES?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fundación GADES documenta 11.578 beneficiarios directos y más de 19 alianzas institucionales activas desde su fundación en 1997.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuáles son las líneas de acción de Fundación GADES?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GADES opera en tres líneas: (1) Gestión agroambiental: protección de cuencas, control de erosión, reforestación y educación ambiental, alineada con ODS 6, 13 y 15. (2) Desarrollo empresarial: asistencia técnica, transformación agroindustrial y encadenamientos productivos, alineada con ODS 2 y 8. (3) Desarrollo social: capacitación, asesoría y acompañamiento comunitario con enfoque diferencial, alineada con ODS 2, 8 y 17.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo contactar a Fundación GADES?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puede contactar a Fundación GADES por correo electrónico en gadesinformacion@gmail.com, por teléfono al +57 319 337 5949, o a través del formulario de contacto en https://www.fundaciongades.org.co/contacto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué marcos de sostenibilidad utiliza Fundación GADES?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GADES alinea su reporte de impacto con el marco GRI (Global Reporting Initiative), ISO 14001 como referencia para gestión ambiental, y los principios del Pacto Global de las Naciones Unidas. Esta alineación es declarativa; no constituye certificación de tercera parte.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${publicSans.variable} bg-[var(--surface-page)] text-[var(--ink-strong)] antialiased`}
      >
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
