import type { Metadata } from "next";
import Image from "next/image";
import symbolImage from "../../../public/brand/symbol.png";
import fieldImage from "../../../docs/diseno/assets/raw/image4.jpeg";
import communityImage from "../../../docs/diseno/assets/raw/image5.jpeg";
import agricultureImage from "../../../docs/diseno/assets/raw/image6.jpeg";

const SITE_URL = "https://www.fundaciongades.org.co";

export const metadata: Metadata = {
  title:
    "GADES Foundation — Agro-environmental management for social and business development",
  description:
    "Colombian non-profit NGO founded in 1997. Operating across the Valle del Cauca with three complementary programs: agro-environmental management, business development, and social development. Tax ID 815.000.850-0. 11,578 documented beneficiaries.",
  keywords: [
    "GADES Foundation Colombia",
    "agro-environmental management Valle del Cauca",
    "Colombian NGO",
    "sustainable agriculture Colombia",
    "environmental projects Valle del Cauca",
    "social development Palmira",
    "ESG investment Colombia",
    "SDG Colombia",
    "watershed protection Colombia",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/en",
    languages: { "es-CO": "/", en: "/en" },
  },
  openGraph: {
    title:
      "GADES Foundation — Agro-environmental management for social and business development",
    description:
      "Colombian non-profit NGO since 1997. Technical operator in agro-environmental management, business development and social programs across Valle del Cauca.",
    url: `${SITE_URL}/en`,
    siteName: "Fundación GADES",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GADES Foundation — Colombia",
    description:
      "Colombian NGO since 1997. Three action lines: agro-environmental, business development, social programs. Valle del Cauca.",
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
      name: "English",
      item: `${SITE_URL}/en`,
    },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/en`,
  url: `${SITE_URL}/en`,
  name: "GADES Foundation — English",
  description:
    "English-language landing page for Fundación GADES, a Colombian NGO operating in the Valle del Cauca since 1997.",
  inLanguage: "en",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: {
    "@type": "NGO",
    name: "Fundación GADES",
    url: SITE_URL,
    foundingDate: "1997",
    addressCountry: "CO",
  },
};

const actionLines = [
  {
    eyebrow: "Action Line 1",
    title: "Agro-environmental management",
    lede: "Watershed protection, erosion control, reforestation and environmental education across the Valle del Cauca.",
    sdgs: ["SDG 6", "SDG 13", "SDG 15"],
    accentVar: "--brand-teal",
    image: fieldImage,
    imageAlt: "Agricultural field in Valle del Cauca, Colombia",
  },
  {
    eyebrow: "Action Line 2",
    title: "Business development",
    lede: "Technical assistance, agro-industrial transformation and productive linkages for small and medium agricultural producers.",
    sdgs: ["SDG 2", "SDG 8"],
    accentVar: "--brand-green",
    image: agricultureImage,
    imageAlt: "Agricultural development and technical assistance",
  },
  {
    eyebrow: "Action Line 3",
    title: "Social development",
    lede: "Training, advisory services and community accompaniment for urban, rural and ethnic communities with a differential approach.",
    sdgs: ["SDG 2", "SDG 8", "SDG 17"],
    accentVar: "--brand-blue",
    image: communityImage,
    imageAlt: "Community development and social programs",
  },
];

const metrics = [
  { value: "11,578", label: "Documented beneficiaries" },
  { value: "19+", label: "Institutional partnerships" },
  { value: "27+", label: "Years of operation" },
  { value: "8", label: "Municipalities covered" },
];

export default function EnPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {/* ── Navigation ────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-[var(--line-soft)] bg-white/95 px-6 py-4 backdrop-blur-sm lg:px-8">
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
            <a className="hover:text-[var(--brand-blue)]" href="#programs">
              Programs
            </a>
            <a className="hover:text-[var(--brand-blue)]" href="/respaldo">
              Documentation
            </a>
            <a
              className="rounded-lg bg-[var(--brand-blue)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
              href="/contacto"
              style={{ color: "#ffffff" }}
            >
              Contact us
            </a>
            <a
              className="text-[0.72rem] font-medium tracking-[0.1em] text-[var(--ink-muted)] hover:text-[var(--brand-blue)]"
              href="/"
            >
              ES
            </a>
          </nav>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--brand-blue)] px-6 py-28 text-white lg:px-8 lg:py-36">
        <div className="absolute inset-0 opacity-[0.08]">
          <Image
            alt=""
            className="h-full w-full object-cover"
            src={fieldImage}
          />
        </div>
        <div className="relative mx-auto max-w-[1200px]">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/60">
            Palmira · Valle del Cauca · Colombia
          </p>
          <h1 className="mt-6 max-w-3xl text-3xl font-semibold leading-[1.2] text-white sm:text-4xl lg:text-5xl">
            Building the bridge between capital and measurable impact in
            Colombia&rsquo;s tropical agriculture.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
            GADES Foundation has operated as a technical and human operator in
            agro-environmental management, business development, and social
            programs across the Valle del Cauca since 1997.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              className="inline-flex items-center justify-center rounded-xl bg-[var(--brand-green)] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              href="/contacto"
              style={{ color: "#ffffff" }}
            >
              Start a conversation
            </a>
            <a
              className="inline-flex items-center justify-center text-sm text-white/70 underline underline-offset-4 transition hover:text-white"
              href="#programs"
            >
              Explore our programs ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── Metrics ─────────────────────────────────────────────────── */}
      <section className="border-b border-[var(--line-soft)] bg-white px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-[1200px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-3xl font-bold tracking-tight text-[var(--brand-blue)]">
                {m.value}
              </p>
              <p className="mt-1 text-sm text-[var(--ink-muted)]">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What we are ─────────────────────────────────────────────── */}
      <section className="px-6 py-24 lg:px-8" id="about">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[var(--brand-teal)]">
                About the Foundation
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--brand-blue)] sm:text-4xl">
                A technical operator with 27 years of documented impact.
              </h2>
              <p className="mt-6 text-base leading-7 text-[var(--ink-body)]">
                Fundación GADES (
                <em>
                  Fundación para la Gestión Agroambiental y el Desarrollo
                  Empresarial y Social
                </em>
                ) is a Colombian non-profit NGO established by public deed on
                February 14, 1997 in Palmira, Valle del Cauca. Tax ID
                815.000.850-0.
              </p>
              <p className="mt-4 text-base leading-7 text-[var(--ink-body)]">
                We articulate private capital, public resources, and technical
                knowledge to execute sustainable projects with real, measurable,
                and transparent results across eight municipalities in the
                southern Valle del Cauca.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-[var(--brand-blue)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  href="/respaldo"
                  style={{ color: "#ffffff" }}
                >
                  View institutional documentation
                </a>
              </div>
            </div>
            <div className="relative h-72 overflow-hidden rounded-2xl lg:h-96">
              <Image
                alt="Agro-environmental project in Valle del Cauca, Colombia"
                className="h-full w-full object-cover"
                src={agricultureImage}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-blue)]/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Programs ────────────────────────────────────────────────── */}
      <section
        className="bg-[var(--surface-muted)] px-6 py-24 lg:px-8"
        id="programs"
      >
        <div className="mx-auto max-w-[1200px]">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[var(--brand-green)]">
            Action lines
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--brand-blue)] sm:text-4xl">
            Three complementary programs, one territorial strategy.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--ink-body)]">
            GADES operates through three mutually reinforcing action lines that
            address environmental, economic, and social dimensions of sustainable
            development.
          </p>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {actionLines.map((line) => (
              <article
                key={line.title}
                className="overflow-hidden rounded-2xl border border-[var(--line-strong)] bg-white shadow-sm"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    alt={line.imageAlt}
                    className="h-full w-full object-cover"
                    src={line.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <p
                    className="absolute bottom-4 left-5 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-white"
                    style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
                  >
                    {line.eyebrow}
                  </p>
                </div>
                <div className="p-6">
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: `var(${line.accentVar})` }}
                  >
                    {line.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--ink-body)]">
                    {line.lede}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {line.sdgs.map((sdg) => (
                      <span
                        key={sdg}
                        className="rounded-full border border-[var(--line-strong)] bg-[var(--surface-subtle)] px-2.5 py-1 text-[0.65rem] font-medium text-[var(--ink-muted)]"
                      >
                        {sdg}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              className="inline-block text-sm font-medium text-[var(--brand-blue)] underline underline-offset-4 hover:opacity-80"
              href="/lineas-de-accion"
            >
              See detailed action lines (Spanish) →
            </a>
          </div>
        </div>
      </section>

      {/* ── Sustainability frameworks ─────────────────────────────────── */}
      <section className="px-6 py-24 lg:px-8" id="frameworks">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-2xl border border-[var(--line-strong)] bg-white p-8 shadow-sm lg:p-10">
            <div className="flex flex-col gap-3 border-b border-[var(--line-soft)] pb-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-[var(--brand-teal)]">
                  Sustainability frameworks
                </p>
                <h3 className="mt-2 text-xl font-semibold text-[var(--ink-strong)] sm:text-2xl">
                  Declared alignment with international standards.
                </h3>
              </div>
              <p className="max-w-sm text-[0.72rem] leading-6 text-[var(--ink-muted)]">
                Declarative adoption to frame impact reporting; does not
                constitute third-party certification.
              </p>
            </div>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                  UN Sustainable Development Goals
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {[
                    { code: "SDG 2", label: "Zero Hunger" },
                    { code: "SDG 6", label: "Clean Water and Sanitation" },
                    { code: "SDG 8", label: "Decent Work and Economic Growth" },
                    { code: "SDG 13", label: "Climate Action" },
                    { code: "SDG 15", label: "Life on Land" },
                    {
                      code: "SDG 17",
                      label: "Partnerships for the Goals",
                    },
                  ].map((sdg) => (
                    <li
                      key={sdg.code}
                      className="flex items-baseline gap-3 rounded-lg border border-[var(--line-soft)] bg-[var(--surface-subtle)] px-3.5 py-2.5"
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
                  Technical frameworks
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-[var(--ink-body)]">
                  {[
                    "GRI — Global Reporting Initiative (impact reporting reference)",
                    "ISO 14001 — Environmental management reference",
                    "UN Global Compact — Declarative principles",
                  ].map((std) => (
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
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--brand-blue)] px-6 py-28 text-white lg:px-8">
        <div className="absolute inset-0 opacity-[0.08]">
          <Image
            alt=""
            className="h-full w-full object-cover"
            src={communityImage}
          />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/55">
            Work with us
          </p>
          <p className="mt-8 text-2xl font-medium leading-[1.45] text-white sm:text-3xl">
            The Valle del Cauca is the future of sustainable agriculture in the
            tropics. We are the technical and human bridge that turns capital
            into real, measurable, transparent impact.
          </p>
          <div className="mt-10 inline-flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <a
              className="rounded-xl bg-[var(--brand-green)] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              href="/contacto"
              style={{ color: "#ffffff" }}
            >
              Start a conversation
            </a>
            <span className="hidden h-px w-8 bg-white/25 sm:block" />
            <a
              className="text-sm text-white/70 underline-offset-[6px] transition hover:text-white hover:underline"
              href="/respaldo"
            >
              View institutional documentation
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="border-t border-[var(--line-soft)] bg-[#f7f8fb] px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
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
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--ink-body)]">
              Foundation for Agro-environmental Management and Business and
              Social Development. Palmira, Valle del Cauca · Colombia.
            </p>
            <p className="mt-3 text-[0.7rem] text-[var(--ink-muted)]">
              NIT 815.000.850-0 · Non-profit NGO
            </p>
          </div>

          <div>
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-[var(--ink-muted)]">
              Navigation
            </p>
            <ul className="mt-4 grid gap-2.5 text-sm text-[var(--ink-body)]">
              <li>
                <a className="hover:text-[var(--brand-blue)]" href="/#lineas">
                  Action lines
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[var(--brand-blue)]"
                  href="/lineas-de-accion"
                >
                  Detailed programs
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[var(--brand-blue)]"
                  href="/respaldo"
                >
                  Institutional documentation
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[var(--brand-blue)]"
                  href="/contacto"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="text-[var(--ink-muted)] hover:text-[var(--brand-blue)]"
                  href="/"
                >
                  ← Español
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-[var(--ink-muted)]">
              Contact
            </p>
            <ul className="mt-4 grid gap-2.5 text-sm text-[var(--ink-body)]">
              <li>
                <a
                  className="hover:text-[var(--brand-blue)]"
                  href="tel:+573193375949"
                >
                  +57 319 337 5949
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[var(--brand-blue)]"
                  href="mailto:gadesinformacion@gmail.com"
                >
                  gadesinformacion@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="font-medium text-[var(--brand-green-dark)] hover:underline"
                  href="/contacto"
                >
                  Contact form →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-[1200px] flex-col items-start justify-between gap-4 border-t border-[var(--line-soft)] pt-6 text-[0.72rem] leading-6 text-[var(--ink-muted)] sm:flex-row sm:items-center">
          <p>
            © 2026 Fundación GADES · NIT 815.000.850-0 · Palmira, Valle del
            Cauca, Colombia.
          </p>
          <p>Non-profit NGO</p>
        </div>
      </footer>
    </main>
  );
}
