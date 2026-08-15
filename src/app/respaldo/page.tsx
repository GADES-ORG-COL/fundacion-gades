import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "../../components/motion/reveal";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  REPO_URL,
  SITE_URL,
  coverageMunicipalities,
  institutionalFacts,
  sdgFramework,
  standardsFramework,
  timeline,
} from "../../data/institutional";

export const metadata: Metadata = {
  title: "Respaldo institucional — Fundación GADES",
  description:
    "Documentación verificable de Fundación GADES: trayectoria notarial, marcos de referencia declarados (ODS, GRI, ISO 14001) y cobertura territorial en el Valle del Cauca.",
  alternates: { canonical: "/respaldo" },
  openGraph: {
    title: "Respaldo institucional · Fundación GADES",
    description:
      "Trayectoria notarial, marcos de referencia y cobertura territorial verificables.",
    url: `${SITE_URL}/respaldo`,
    siteName: "Fundación GADES",
    locale: "es_CO",
    type: "article",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Respaldo institucional",
      item: `${SITE_URL}/respaldo`,
    },
  ],
};

export default function RespaldoPage() {
  return (
    <main className="bg-[var(--surface-page)]">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Encabezado + breadcrumb visible ----------------------------- */}
      <header className="border-b border-[var(--line-soft)] bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-[1100px]">
          <nav
            aria-label="Ruta de navegación"
            className="text-[0.7rem] uppercase tracking-[0.18em] text-[var(--ink-muted)]"
          >
            <Link className="hover:text-[var(--brand-blue)]" href="/">
              Inicio
            </Link>
            <span className="mx-2 text-[var(--line-strong)]">/</span>
            <span className="text-[var(--ink-body)]">
              Respaldo institucional
            </span>
          </nav>

          <Reveal>
            <p className="mt-8 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--brand-green)]">
              Documentación verificable
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-[var(--brand-blue)] sm:text-4xl lg:text-5xl">
              Respaldo institucional de Fundación GADES.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--ink-body)]">
              Información extraída de la Cámara de Comercio de Palmira y de los
              materiales institucionales cargados en el repositorio público.
              Esta página es la fuente de verdad documental que respalda toda la
              comunicación pública de la fundación.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Datos institucionales -------------------------------------- */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <h2 className="text-2xl font-semibold text-[var(--ink-strong)] sm:text-3xl">
              Datos institucionales
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--ink-body)]">
              Identidad legal y naturaleza jurídica registradas ante el Registro
              de Entidades sin Ánimo de Lucro.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {institutionalFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-xl border border-[var(--line-strong)] bg-white p-5 shadow-sm"
              >
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                  {fact.label}
                </p>
                <p className="mt-2 text-base font-semibold text-[var(--ink-strong)]">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trayectoria notarial --------------------------------------- */}
      <section className="border-t border-[var(--line-soft)] bg-[var(--surface-muted)] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <h2 className="text-2xl font-semibold text-[var(--ink-strong)] sm:text-3xl">
              Trayectoria notarial
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--ink-body)]">
              Cuatro hitos registrados en Notaría y Cámara de Comercio que
              cubren el ciclo desde la constitución hasta la última reforma
              estatutaria.
            </p>
          </Reveal>

          <ol className="mt-10 grid gap-5 md:grid-cols-2">
            {timeline.map((item, index) => (
              <Reveal
                key={item.year}
                className="rounded-2xl border border-[var(--line-strong)] bg-white p-6 shadow-sm"
                delay={0.04 + index * 0.04}
              >
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--brand-green-dark)]">
                  {item.year}
                </span>
                <h3 className="mt-3 text-base font-semibold leading-snug text-[var(--ink-strong)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-body)]">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Marcos de referencia --------------------------------------- */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--brand-teal)]">
              Marcos de referencia
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-[var(--ink-strong)] sm:text-3xl">
              Alineación declarada con estándares internacionales.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--ink-body)]">
              Adopción declarativa para encuadrar el reporte de impacto. No
              constituye certificación de tercera parte; cualquier proceso de
              verificación independiente se comunicará por canales formales.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                Objetivos de Desarrollo Sostenible
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {sdgFramework.map((sdg) => (
                  <li
                    key={sdg.code}
                    className="flex items-baseline gap-3 rounded-lg border border-[var(--line-soft)] bg-white px-3.5 py-2.5"
                  >
                    <span className="text-[0.7rem] font-semibold tracking-[0.04em] text-[var(--brand-green-dark)]">
                      {sdg.code}
                    </span>
                    <span className="text-sm leading-6 text-[var(--ink-body)]">
                      {sdg.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                Marcos técnicos
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-[var(--ink-body)]">
                {standardsFramework.map((std) => (
                  <li
                    key={std}
                    className="flex gap-2.5 before:mt-2.5 before:h-px before:w-3 before:shrink-0 before:bg-[var(--ink-muted)]/40 before:content-['']"
                  >
                    {std}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cobertura territorial -------------------------------------- */}
      <section className="border-t border-[var(--line-soft)] bg-[var(--surface-muted)] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <h2 className="text-2xl font-semibold text-[var(--ink-strong)] sm:text-3xl">
              Cobertura territorial
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--ink-body)]">
              Cobertura nacional con implementación principal en ocho municipios
              del Valle del Cauca.
            </p>
          </Reveal>

          <ul className="mt-8 flex flex-wrap gap-2">
            {coverageMunicipalities.map((m) => (
              <li
                key={m}
                className="rounded-full border border-[var(--line-strong)] bg-white px-4 py-1.5 text-sm text-[var(--ink-body)]"
              >
                {m}
              </li>
            ))}
          </ul>

          <p className="mt-10 text-[0.72rem] leading-6 text-[var(--ink-muted)]">
            Fuente: Cámara de Comercio de Palmira · materiales institucionales
            (marzo 2026).
          </p>
        </div>
      </section>

      {/* Contacto + repo -------------------------------------------- */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-[1100px] rounded-2xl border border-[var(--line-strong)] bg-white p-10 shadow-sm">
          <h2 className="text-2xl font-semibold text-[var(--ink-strong)] sm:text-3xl">
            Verificación documental adicional
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--ink-body)]">
            Para auditoría, due diligence o solicitud de documentos de respaldo
            (escrituras, actas de reforma, certificados), escríbenos al canal
            institucional.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              className="pressable inline-flex items-center justify-center rounded-lg bg-[var(--brand-green)] px-5 py-2.5 text-sm font-medium !text-white shadow-sm transition hover:bg-[var(--brand-green-dark)] hover:!text-white"
              href={`mailto:${CONTACT_EMAIL}?subject=Solicitud%20de%20documentaci%C3%B3n%20de%20respaldo`}
              style={{ color: "#ffffff" }}
            >
              Solicitar documentación
            </a>
            <a
              className="text-sm font-medium text-[var(--brand-blue)] underline underline-offset-[6px] decoration-[var(--brand-blue)]/30 transition hover:decoration-[var(--brand-blue)]"
              href={REPO_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              Repositorio público GADES-ORG/WEB-PAGE
            </a>
            <a
              className="text-sm text-[var(--ink-body)] hover:text-[var(--brand-blue)]"
              href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
            >
              {CONTACT_PHONE}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--line-soft)] bg-[#f7f8fb] px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-2 text-[0.72rem] leading-6 text-[var(--ink-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Fundación GADES · NIT 815.000.850-0 · Palmira, Valle del
            Cauca, Colombia.
          </p>
          <Link className="hover:text-[var(--brand-blue)]" href="/">
            ← Volver al inicio
          </Link>
        </div>
      </footer>
    </main>
  );
}
