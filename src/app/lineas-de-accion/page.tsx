import type { Metadata } from "next";
import Image from "next/image";
import {
  CONTACT_EMAIL,
  SITE_URL,
  actionLines,
  sdgFramework,
} from "../../data/institutional";
import { Reveal } from "../../components/motion/reveal";

import image4 from "../../../docs/diseno/assets/raw/image4.jpeg";
import image5 from "../../../docs/diseno/assets/raw/image5.jpeg";
import image6 from "../../../docs/diseno/assets/raw/image6.jpeg";
import image7 from "../../../docs/diseno/assets/raw/image7.jpeg";
import image8 from "../../../docs/diseno/assets/raw/image8.jpeg";
import image9 from "../../../docs/diseno/assets/raw/image9.jpeg";

const imageMap = { image4, image5, image6, image7, image8, image9 } as const;

export const metadata: Metadata = {
  title: "Líneas de acción — Fundación GADES",
  description:
    "Tres frentes integrados que conectan tierra, empresa y sociedad en el Valle del Cauca: gestión agroambiental, desarrollo empresarial y desarrollo social.",
  alternates: { canonical: `${SITE_URL}/lineas-de-accion` },
  openGraph: {
    type: "article",
    url: `${SITE_URL}/lineas-de-accion`,
    title: "Líneas de acción — Fundación GADES",
    description:
      "Gestión agroambiental, desarrollo empresarial y desarrollo social: operación técnica en el Valle del Cauca desde 1997.",
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
      name: "Líneas de acción",
      item: `${SITE_URL}/lineas-de-accion`,
    },
  ],
};

// Map each line slug to a pair of images (hero + detail)
const lineImages: Record<
  string,
  {
    hero: (typeof imageMap)[keyof typeof imageMap];
    detail: (typeof imageMap)[keyof typeof imageMap];
  }
> = {
  agroambiental: { hero: imageMap.image4, detail: imageMap.image7 },
  empresarial: { hero: imageMap.image6, detail: imageMap.image8 },
  social: { hero: imageMap.image5, detail: imageMap.image9 },
};

export default function LineasDeAccionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Breadcrumb ---------------------------------------------------- */}
        <div className="border-b border-(--line-soft) px-6 py-3 text-xs text-(--ink-muted) lg:px-8">
          <div className="mx-auto flex max-w-[1200px] items-center gap-2">
            <a href="/" className="transition-colors hover:text-(--brand-blue)">
              Inicio
            </a>
            <span>/</span>
            <span className="text-(--ink-body)">Líneas de acción</span>
          </div>
        </div>

        {/* Header -------------------------------------------------------- */}
        <header className="px-6 pt-16 pb-12 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-(--brand-green)">
                Fundación GADES · Valle del Cauca
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-(--brand-blue) sm:text-5xl">
                Tres frentes que conectan tierra, empresa y sociedad.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-(--ink-body)">
                Desde 1997, GADES actúa como operador técnico y humano en tres
                líneas complementarias: gestión del territorio natural,
                desarrollo de capacidades productivas y fortalecimiento del
                tejido social. Cada línea opera de forma independiente o
                integrada según el mandato de cada proyecto.
              </p>
            </Reveal>

            {/* ODS alineados globalmente */}
            <div className="mt-10 flex flex-wrap gap-2">
              {sdgFramework.map((s) => (
                <span
                  key={s.code}
                  className="rounded-full border border-(--line-strong) bg-(--surface-muted) px-3 py-1 text-[0.7rem] font-medium text-(--ink-body)"
                >
                  {s.code} · {s.label}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Lines --------------------------------------------------------- */}
        <main className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-[1200px] space-y-24">
            {actionLines.map((line, idx) => {
              const imgs = lineImages[line.slug];
              const isEven = idx % 2 === 0;

              return (
                <Reveal key={line.slug} id={line.slug}>
                  <section aria-labelledby={`h-${line.slug}`}>
                    {/* Section intro */}
                    <div className="mb-10 border-l-2 border-(--line-strong) pl-5">
                      <p
                        className="text-[0.65rem] font-semibold uppercase tracking-[0.18em]"
                        style={{ color: `var(${line.accentVar})` }}
                      >
                        {line.eyebrow}
                      </p>
                      <h2
                        id={`h-${line.slug}`}
                        className="mt-3 text-3xl font-semibold leading-tight text-(--ink-strong) sm:text-4xl"
                      >
                        {line.title}
                      </h2>
                      <p className="mt-4 max-w-2xl text-base leading-8 text-(--ink-body)">
                        {line.lede}
                      </p>
                    </div>

                    {/* Hero + body */}
                    <div
                      className={`grid gap-8 lg:grid-cols-[1fr_420px] ${isEven ? "" : "lg:[direction:rtl]"}`}
                    >
                      <div className={isEven ? "" : "lg:[direction:ltr]"}>
                        <p className="text-sm leading-8 text-(--ink-body)">
                          {line.body}
                        </p>

                        {/* ODS chips for this line */}
                        <div className="mt-6 flex flex-wrap gap-2">
                          {sdgFramework
                            .filter((s) =>
                              (line.sdgs as readonly string[]).includes(s.code),
                            )
                            .map((s) => (
                              <span
                                key={s.code}
                                className="rounded-full px-3 py-1 text-[0.68rem] font-medium text-white"
                                style={{
                                  backgroundColor: `var(${line.accentVar})`,
                                  opacity: 0.88,
                                }}
                              >
                                {s.code} — {s.label}
                              </span>
                            ))}
                        </div>
                      </div>

                      <div
                        className={`overflow-hidden rounded-2xl shadow-sm ${isEven ? "" : "lg:[direction:ltr]"}`}
                      >
                        <Image
                          src={imgs.hero}
                          alt={line.title}
                          className="h-72 w-full object-cover lg:h-full"
                        />
                      </div>
                    </div>

                    {/* Programs grid */}
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {line.programs.map((prog, pi) => (
                        <article
                          key={pi}
                          className="rounded-xl border border-(--line-soft) bg-(--surface-muted) p-5"
                        >
                          <div
                            className="mb-3 h-0.5 w-6 rounded-full"
                            style={{
                              backgroundColor: `var(${line.accentVar})`,
                            }}
                          />
                          <h3 className="text-sm font-semibold leading-snug text-(--ink-strong)">
                            {prog.title}
                          </h3>
                          <p className="mt-2 text-xs leading-6 text-(--ink-body)">
                            {prog.body}
                          </p>
                        </article>
                      ))}
                    </div>
                  </section>
                </Reveal>
              );
            })}
          </div>
        </main>

        {/* Footer CTA ---------------------------------------------------- */}
        <footer className="border-t border-(--line-soft) bg-(--surface-muted) px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-[1200px]">
            <Reveal className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl font-semibold text-(--ink-strong)">
                  ¿Trabaja en proyectos de impacto territorial?
                </h2>
                <p className="mt-3 text-sm leading-7 text-(--ink-body)">
                  GADES opera como ejecutor técnico y humano para entidades
                  públicas, privadas y de cooperación internacional. Cuéntenos
                  su proyecto.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Propuesta%20de%20proyecto%20—%20Fundación%20GADES`}
                  className="pressable inline-flex items-center justify-center rounded-lg bg-(--brand-green) px-5 py-2.5 text-sm font-medium text-white! shadow-sm transition hover:bg-(--brand-green-dark)"
                >
                  Escribir a GADES
                </a>
                <a
                  href="/respaldo"
                  className="pressable inline-flex items-center justify-center rounded-lg border border-(--line-strong) bg-white px-5 py-2.5 text-sm font-medium text-(--ink-body) shadow-sm transition hover:bg-(--surface-subtle)"
                >
                  Respaldo institucional
                </a>
                <a
                  href="/"
                  className="text-sm text-(--ink-muted) underline-offset-4 transition-colors hover:text-(--brand-blue) hover:underline"
                >
                  ← Inicio
                </a>
              </div>
            </Reveal>
          </div>
        </footer>
      </div>
    </>
  );
}
