import type { Metadata } from "next";
import Image from "next/image";
import symbolImage from "../../../public/brand/symbol.png";

const SITE_URL = "https://www.fundaciongades.org.co";

const FORM_SRC =
  "https://docs.google.com/forms/d/e/1FAIpQLSfFh3RjN85ilfJISU_ocztJbwmxTrxfSIKJn7uUz5cxVAeaeA/viewform?embedded=true";

export const metadata: Metadata = {
  title: "Contacto — Fundación GADES",
  description:
    "Contacta a Fundación GADES. Escríbenos para inversión privada ESG, cooperación pública, propuestas técnicas o solicitar documentación institucional. Respondemos en 3 días hábiles.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/contacto",
    languages: { "es-CO": "/contacto", en: "/en#contact" },
  },
  openGraph: {
    title: "Contacto — Fundación GADES",
    description:
      "Escríbenos para colaboraciones, inversión ESG, cooperación pública o documentación institucional.",
    url: `${SITE_URL}/contacto`,
    siteName: "Fundación GADES",
    locale: "es_CO",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contacto",
      item: `${SITE_URL}/contacto`,
    },
  ],
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contacto — Fundación GADES",
  url: `${SITE_URL}/contacto`,
  description:
    "Formulario de contacto oficial de Fundación GADES. Atención a inversores privados, cooperación pública, propuestas técnicas y consultas institucionales.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+57 319 337 5949",
    email: "gadesinformacion@gmail.com",
    contactType: "customer support",
    areaServed: "CO",
    availableLanguage: ["Spanish"],
  },
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-[var(--surface-page)]">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />

      {/* ── Header ──────────────────────────────────────────────────── */}
      <header className="border-b border-[var(--line-soft)] bg-white px-6 py-4 lg:px-8">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          <a className="flex items-center gap-3" href="/">
            <Image
              alt="Fundación GADES"
              className="h-9 w-9 object-contain"
              height={36}
              src={symbolImage}
              width={36}
            />
            <span className="text-base font-semibold tracking-[0.06em] text-[var(--brand-blue)]">
              GADES
            </span>
          </a>
          <nav className="flex items-center gap-6 text-sm text-[var(--ink-body)]">
            <a className="hover:text-[var(--brand-blue)]" href="/#lineas">
              Líneas
            </a>
            <a className="hover:text-[var(--brand-blue)]" href="/respaldo">
              Respaldo
            </a>
          </nav>
        </div>
      </header>

      {/* ── Breadcrumb ──────────────────────────────────────────────── */}
      <div className="border-b border-[var(--line-soft)] bg-[var(--surface-subtle)] px-6 py-3 lg:px-8">
        <nav
          aria-label="Ruta de navegación"
          className="mx-auto flex max-w-[1200px] items-center gap-2 text-xs text-[var(--ink-muted)]"
        >
          <a className="hover:text-[var(--brand-blue)]" href="/">
            Inicio
          </a>
          <span aria-hidden="true">›</span>
          <span aria-current="page" className="text-[var(--ink-strong)]">
            Contacto
          </span>
        </nav>
      </div>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[var(--brand-green)]">
            Contáctanos
          </p>
          <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-[var(--brand-blue)] sm:text-4xl">
            Conversemos sobre cómo podemos trabajar juntos.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--ink-body)]">
            Respondemos en un plazo de tres días hábiles. Utiliza el formulario
            para inversión privada ESG, cooperación pública o multilateral,
            propuestas de proyectos técnicos o solicitudes de documentación
            institucional.
          </p>
        </div>
      </section>

      {/* ── Contenido principal: formulario + datos de contacto ─────── */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1fr_320px] lg:items-start">
          {/* Formulario Google Forms */}
          <div className="rounded-2xl border border-[var(--line-strong)] bg-white p-4 shadow-sm sm:p-6">
            <iframe
              className="w-full rounded-xl"
              frameBorder="0"
              height={1377}
              marginHeight={0}
              marginWidth={0}
              src={FORM_SRC}
              title="Formulario de contacto — Fundación GADES"
            >
              Cargando…
            </iframe>
          </div>

          {/* Panel lateral: datos de contacto */}
          <aside className="space-y-6">
            {/* Datos directos */}
            <div className="rounded-2xl border border-[var(--line-strong)] bg-white p-6 shadow-sm">
              <p className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                Contacto directo
              </p>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                    Correo electrónico
                  </p>
                  <a
                    className="mt-1 block font-medium text-[var(--brand-blue)] hover:underline"
                    href="mailto:gadesinformacion@gmail.com"
                  >
                    gadesinformacion@gmail.com
                  </a>
                </li>
                <li>
                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                    Teléfono
                  </p>
                  <a
                    className="mt-1 block font-medium text-[var(--brand-blue)] hover:underline"
                    href="tel:+573193375949"
                  >
                    +57 319 337 5949
                  </a>
                </li>
                <li>
                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                    Sede
                  </p>
                  <p className="mt-1 leading-6 text-[var(--ink-body)]">
                    Palmira, Valle del Cauca
                    <br />
                    Colombia
                  </p>
                </li>
              </ul>
            </div>

            {/* Tipos de consulta */}
            <div className="rounded-2xl border border-[var(--line-strong)] bg-white p-6 shadow-sm">
              <p className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                Tipos de consulta
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Inversión privada ESG",
                  "Cooperación pública o multilateral",
                  "Propuesta de proyecto técnico",
                  "Solicitud de documentación",
                  "Otro",
                ].map((tipo) => (
                  <li
                    key={tipo}
                    className="flex items-baseline gap-2.5 text-sm leading-6 text-[var(--ink-body)] before:mt-2.5 before:h-px before:w-3 before:shrink-0 before:bg-[var(--ink-muted)]/40 before:content-['']"
                  >
                    {tipo}
                  </li>
                ))}
              </ul>
            </div>

            {/* Respaldo */}
            <div className="rounded-2xl border border-[var(--line-strong)] bg-[var(--surface-subtle)] p-6">
              <p className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                Respaldo institucional
              </p>
              <p className="mt-3 text-sm leading-6 text-[var(--ink-body)]">
                Consulta el expediente notarial, el NIT y la cobertura
                territorial antes de iniciar una conversación formal.
              </p>
              <a
                className="mt-4 inline-block text-sm font-medium text-[var(--brand-blue)] underline underline-offset-4 hover:opacity-80"
                href="/respaldo"
              >
                Ver documentación →
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Mini-footer ──────────────────────────────────────────────── */}
      <footer className="border-t border-[var(--line-soft)] px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between text-[0.72rem] text-[var(--ink-muted)]">
          <a className="hover:text-[var(--brand-blue)]" href="/">
            ← Volver al inicio
          </a>
          <p>© 2026 Fundación GADES · NIT 815.000.850-0</p>
        </div>
      </footer>
    </main>
  );
}
