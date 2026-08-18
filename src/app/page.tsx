import Image from "next/image";
import { HeroVideo } from "../components/hero/hero-video";
import { Float, Reveal } from "../components/motion/reveal";
import {
  CONTACT_EMAIL,
  REPO_URL,
  coverageMunicipalities,
  institutionalFacts,
  sdgFramework,
  standardsFramework,
  timeline,
} from "../data/institutional";

import agricultureImage from "../../docs/diseno/assets/raw/image4.jpeg";
import communityImage from "../../docs/diseno/assets/raw/image5.jpeg";
import fieldImage from "../../docs/diseno/assets/raw/image6.jpeg";

// ---------------------------------------------------------------------------
// Datos institucionales (verificados contra documentos en /docs)
// ---------------------------------------------------------------------------

const navigation = [
  { href: "#pilares", label: "Pilares" },
  { href: "#nosotros", label: "Quiénes somos" },
  { href: "#lineas", label: "Líneas" },
  { href: "#inversion", label: "Inversión" },
  { href: "#respaldo", label: "Respaldo" },
];

const metrics = [
  { value: "11.578", label: "Beneficiarios directos" },
  { value: "19+", label: "Alianzas institucionales" },
  { value: "27+", label: "Años de operación" },
  { value: "8", label: "Municipios atendidos" },
];

const pillars: ReadonlyArray<{
  id: string;
  number: string;
  title: string;
  lede: string;
  points: readonly string[];
  accent: string;
  inProgress?: boolean;
}> = [
  {
    id: "nodo",
    number: "I",
    title: "Valle del Cauca como nodo bioregional",
    lede: "Palmira es el epicentro del clúster agroindustrial más dinámico de la cuenca del Pacífico.",
    points: [
      "Proximidad al puerto de Buenaventura",
      "Laboratorio vivo para innovación tropical",
      "Acceso a la red bioindustrial del Valle",
    ],
    accent: "var(--brand-teal)",
  },
  {
    id: "ingenieria",
    number: "II",
    title: "Ingeniería y asistencia técnica de élite",
    lede: "Traducimos complejidad ambiental en protocolos de ejecución con estándares internacionales.",
    points: [
      "Operación llave en mano",
      "Articulación público-privada",
      "Transferencia de conocimiento al sector agro",
    ],
    accent: "var(--brand-blue)",
  },
  {
    id: "valor",
    number: "III",
    title: "Prosperidad en el origen",
    lede: "La protección ambiental se sostiene cuando genera riqueza para las comunidades locales.",
    points: [
      "Fortalecimiento del tejido empresarial rural",
      "Reducción de brechas vía asistencia técnica",
      "Agro sostenible como infraestructura de paz",
    ],
    accent: "var(--brand-green)",
  },
  {
    id: "digital",
    number: "IV",
    title: "Hoja de ruta digital 2026",
    lede: "Estamos migrando la verificación de campo hacia una infraestructura de datos abierta a co-inversión.",
    points: [
      "Fase actual: protocolos de trazabilidad 4.0",
      "Arquitectura para reportes en tiempo real",
      "Plataforma abierta a socios estratégicos",
    ],
    accent: "var(--brand-teal)",
    inProgress: true,
  },
  {
    id: "gobernanza",
    number: "V",
    title: "Gobernanza y transparencia",
    lede: "Nuestra gestión se rige por la integridad y la trazabilidad documental de cada recurso.",
    points: [
      "Alineación declarada con ODS y marcos GRI",
      "Trazabilidad de recursos públicos y privados",
      "Estructura de gobierno corporativo profesionalizada",
    ],
    accent: "var(--brand-blue)",
  },
] as const;

const actionAreas = [
  {
    title: "Gestión agroambiental",
    body: "Proyectos ambientales y agropecuarios con protección de cuencas, control de torrentes y reforestación urbana y rural.",
    points: ["Protección de cuencas", "Control de erosión y torrentes"],
    accent: "text-[var(--brand-teal)]",
    image: agricultureImage,
  },
  {
    title: "Desarrollo empresarial",
    body: "Asistencia técnica, transformación agroindustrial y desarrollo empresarial para comunidades y entidades aliadas.",
    points: [
      "Transformación agroindustrial",
      "Programas agropecuarios",
      "Asistencia técnica",
    ],
    accent: "text-[var(--brand-green)]",
  },
  {
    title: "Desarrollo social",
    body: "Acompañamiento a población urbana, rural y étnica para fortalecer condiciones de vida y procesos de convivencia.",
    points: ["Capacitación", "Asesoría", "Acompañamiento comunitario"],
    accent: "text-[var(--brand-blue)]",
    image: communityImage,
  },
];

const roadmapPhases = [
  {
    step: "01",
    label: "Diagnóstico",
    body: "Mapeo de procesos de campo y catalogación de evidencia documental existente.",
    state: "Completado",
  },
  {
    step: "02",
    label: "Trazabilidad 4.0",
    body: "Migración a protocolos digitales para verificación geolocalizada de actividad territorial.",
    state: "En curso",
    active: true,
  },
  {
    step: "03",
    label: "Reportes en tiempo real",
    body: "Tablero abierto a socios para seguimiento de impacto bajo marcos GRI y ODS.",
    state: "Próxima fase",
  },
];

const contactEmail = CONTACT_EMAIL;

const investorTracks = [
  {
    audience: "Para inversión privada",
    eyebrow: "Empresas, fondos, ESG",
    body: "Mitigación de riesgos ambientales y sociales en la cadena agroindustrial del Valle del Cauca, con retorno de valor social documentable.",
    primary: {
      label: "Conversemos sobre viabilidad técnica",
      href: `mailto:${contactEmail}?subject=Conversación%20de%20viabilidad%20técnica%20—%20Inversión%20privada`,
    },
    secondary: {
      label: "Tesis de impacto (bajo solicitud)",
      href: `mailto:${contactEmail}?subject=Solicitud%20de%20Tesis%20de%20Impacto%20ESG`,
    },
  },
  {
    audience: "Para cooperación pública",
    eyebrow: "Gobiernos, multilaterales, cooperación",
    body: "Modelo escalable de gestión agroambiental con alineación directa a Objetivos de Desarrollo Sostenible y agendas de cooperación bilateral.",
    primary: {
      label: "Portafolio de alianzas institucionales",
      href: `mailto:${contactEmail}?subject=Portafolio%20de%20alianzas%20institucionales`,
    },
  },
];

const repoUrl = REPO_URL;

// ---------------------------------------------------------------------------
// Componente
// ---------------------------------------------------------------------------

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* Header --------------------------------------------------------- */}
      <header className="sticky top-0 z-50 border-b border-[var(--line-soft)] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 lg:px-8">
          <a className="flex items-center gap-3" href="#inicio">
            <Image
              alt="Fundación GADES"
              className="h-10 w-10 object-contain"
              height={40}
              priority
              src="/brand/symbol.png"
              width={40}
            />
            <span className="text-base font-semibold tracking-[0.06em] text-[var(--brand-blue)]">
              GADES
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-[var(--ink-body)] md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                className="transition-colors hover:text-[var(--brand-blue)]"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              className="hidden text-sm text-[var(--ink-body)] underline-offset-4 transition-colors hover:text-[var(--brand-blue)] hover:underline lg:inline-flex"
              href="/contacto"
            >
              Contacto
            </a>
            <a
              className="pressable inline-flex items-center justify-center rounded-lg bg-[var(--brand-green)] px-4 py-2 text-sm font-medium tracking-[0.01em] !text-white shadow-sm transition hover:bg-[var(--brand-green-dark)] hover:!text-white"
              href="/contacto"
              style={{ color: "#ffffff" }}
            >
              Apoyar la fundación
            </a>
          </div>
        </div>
      </header>

      {/* Hero — Manifiesto --------------------------------------------- */}
      <section
        className="relative flex min-h-[42rem] items-center overflow-hidden"
        id="inicio"
      >
        <HeroVideo poster={fieldImage} />

        <div className="relative mx-auto grid max-w-[1200px] gap-10 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <Reveal className="max-w-2xl" delay={0.04}>
            <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm">
              Fundación GADES · Palmira, Valle del Cauca
            </span>
            <h1 className="mt-7 max-w-2xl text-3xl font-semibold leading-[1.2] text-white sm:text-4xl lg:text-[2.7rem]">
              No solo gestionamos el entorno:{" "}
              <span className="text-[var(--brand-green-soft)]">
                construimos el ecosistema
              </span>{" "}
              donde la sostenibilidad se encuentra con{" "}
              <span className="font-normal text-white/70">
                la rentabilidad social y el rigor técnico
              </span>
              .
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/82">
              Operamos en el Valle del Cauca desde 1997, articulando capital
              privado, recursos públicos y conocimiento técnico para el agro
              sostenible del trópico.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                className="pressable inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-medium text-[var(--brand-blue)] shadow-sm transition hover:bg-[var(--surface-subtle)]"
                href="#inversion"
              >
                Espacios de conversación
              </a>
              <a
                className="text-sm font-medium text-white/90 underline underline-offset-[6px] decoration-white/35 transition hover:decoration-white"
                href="#nosotros"
              >
                Conocer la trayectoria
              </a>
            </div>
          </Reveal>

          <div className="hidden items-end lg:flex">
            <Float className="ml-auto" aria-hidden>
              <Reveal
                className="hero-sheen relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/15 bg-white/8 p-6 text-white backdrop-blur-md"
                delay={0.16}
              >
                <Image
                  alt=""
                  className="h-14 w-14 object-contain"
                  height={56}
                  src="/brand/symbol.png"
                  width={56}
                />
                <p className="mt-5 text-[0.7rem] uppercase tracking-[0.22em] text-white/65">
                  Desde 1997
                </p>
                <p className="mt-3 text-[0.95rem] leading-7 text-white/85">
                  Fundación para la Gestión Agroambiental y el Desarrollo
                  Empresarial y Social, con base en Palmira y operación en
                  Colombia.
                </p>
                <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-white/10">
                  <div className="bg-white/[0.04] px-4 py-4">
                    <dd className="text-lg font-semibold tracking-tight">
                      815.000.850-0
                    </dd>
                    <dt className="mt-1 text-[0.62rem] uppercase tracking-[0.16em] text-white/60">
                      NIT institucional
                    </dt>
                  </div>
                  <div className="bg-white/[0.04] px-4 py-4">
                    <dd className="text-lg font-semibold tracking-tight">
                      Nacional
                    </dd>
                    <dt className="mt-1 text-[0.62rem] uppercase tracking-[0.16em] text-white/60">
                      Cobertura
                    </dt>
                  </div>
                </dl>
              </Reveal>
            </Float>
          </div>
        </div>
      </section>

      {/* Métricas ancla ------------------------------------------------- */}
      <section className="border-y border-[var(--line-soft)] bg-white px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <Reveal
              key={metric.label}
              className="text-center md:text-left"
              delay={0.04 + index * 0.04}
            >
              <p className="text-3xl font-semibold tracking-tight text-[var(--ink-strong)] sm:text-4xl">
                {metric.value}
              </p>
              <p className="mt-2 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                {metric.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pilares -------------------------------------------------------- */}
      <section className="px-6 py-24 lg:px-8" id="pilares">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="max-w-2xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--brand-green)]">
              Pilares estratégicos
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--brand-blue)] sm:text-4xl">
              Cinco frentes que componen el modelo institucional.
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--ink-body)]">
              Cada pilar se sostiene en hechos verificables o en hojas de ruta
              declaradas. Lo que está en construcción se nombra como tal.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal
                key={pillar.id}
                className="lift-card group relative flex flex-col rounded-2xl border border-[var(--line-strong)] bg-white p-7 shadow-sm"
                delay={0.05 + index * 0.05}
                id={pillar.id}
              >
                <div className="flex items-baseline justify-between">
                  <span
                    className="text-[0.65rem] font-semibold uppercase tracking-[0.18em]"
                    style={{ color: pillar.accent }}
                  >
                    Pilar {pillar.number}
                  </span>
                  {pillar.inProgress ? (
                    <span className="rounded-full border border-[var(--brand-teal)]/40 bg-[var(--brand-teal-soft)] px-2.5 py-0.5 text-[0.6rem] font-medium uppercase tracking-[0.12em] text-[var(--brand-teal)]">
                      En curso
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-4 text-xl font-semibold leading-snug text-[var(--ink-strong)]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-body)]">
                  {pillar.lede}
                </p>
                <ul className="mt-6 space-y-2 border-t border-[var(--line-soft)] pt-5 text-sm text-[var(--ink-body)]">
                  {pillar.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 leading-6 before:mt-2.5 before:h-px before:w-3 before:shrink-0 before:bg-[var(--ink-muted)]/40 before:content-['']"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quiénes somos — Misión / Visión / Trayectoria ----------------- */}
      <section
        className="bg-[var(--surface-muted)] px-6 py-24 lg:px-8"
        id="nosotros"
      >
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="max-w-2xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--brand-green)]">
              Quiénes somos
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--brand-blue)] sm:text-4xl">
              Una organización con propósito documentado.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-[var(--line-strong)] bg-white p-8 shadow-sm">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[var(--brand-green-dark)]">
                Misión
              </p>
              <p className="mt-5 text-base leading-8 text-[var(--ink-body)]">
                Generar dinámicas internas de cualificación de los
                facilitadores, para la resolución de conflictos comunitarios que
                propendan por la convivencia armónica, con enfoques productivos
                técnicamente viables, económicamente rentables y ambientalmente
                sostenibles.
              </p>
            </article>
            <article className="rounded-2xl border border-[var(--line-strong)] bg-white p-8 shadow-sm">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[var(--brand-teal)]">
                Visión
              </p>
              <p className="mt-5 text-base leading-8 text-[var(--ink-body)]">
                Ser los mejores facilitadores de procesos relacionados con el
                fortalecimiento de movimientos sociales, el mejoramiento de los
                niveles de convivencia y el desarrollo humano en las eco
                regiones estratégicas del territorio nacional.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Líneas de acción ---------------------------------------------- */}
      <section className="px-6 py-24 lg:px-8" id="lineas">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="max-w-2xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--brand-green)]">
              Líneas de acción
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--brand-blue)] sm:text-4xl">
              Tres frentes integrados que conectan tierra, empresa y sociedad.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            <article className="rounded-2xl border border-[var(--line-strong)] bg-white p-8 shadow-sm lg:col-span-7">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[var(--brand-teal)]">
                Agroambiental
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--ink-strong)]">
                {actionAreas[0].title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--ink-body)]">
                {actionAreas[0].body}
              </p>
              <ul className="mt-6 grid gap-2 border-t border-[var(--line-soft)] pt-5 text-sm text-[var(--ink-body)] sm:grid-cols-2">
                {actionAreas[0].points.map((point) => (
                  <li key={point} className="leading-6">
                    {point}
                  </li>
                ))}
              </ul>
            </article>

            <div className="overflow-hidden rounded-2xl shadow-sm lg:col-span-5">
              <Image
                alt="Trabajo agroambiental"
                className="h-full w-full object-cover"
                src={actionAreas[0].image!}
              />
            </div>

            <article className="rounded-2xl border border-[var(--line-strong)] bg-white p-8 shadow-sm lg:col-span-4">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[var(--brand-green)]">
                Empresarial
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--ink-strong)]">
                {actionAreas[1].title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--ink-body)]">
                {actionAreas[1].body}
              </p>
              <ul className="mt-6 space-y-2 text-sm leading-6 text-[var(--ink-body)]">
                {actionAreas[1].points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>

            <article className="overflow-hidden rounded-2xl border border-[var(--line-strong)] bg-[var(--surface-subtle)] shadow-sm lg:col-span-8 lg:grid lg:grid-cols-2">
              <div className="p-8">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[var(--brand-blue)]">
                  Social
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[var(--ink-strong)]">
                  {actionAreas[2].title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--ink-body)]">
                  {actionAreas[2].body}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {actionAreas[2].points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-[var(--line-strong)] bg-white px-3 py-1 text-[0.7rem] text-[var(--ink-body)]"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>
              <div className="min-h-[18rem]">
                <Image
                  alt="Trabajo comunitario"
                  className="h-full w-full object-cover"
                  src={actionAreas[2].image!}
                />
              </div>
            </article>
          </div>

          <Reveal className="mt-10 flex justify-end">
            <a
              href="/lineas-de-accion"
              className="pressable inline-flex items-center gap-2 rounded-lg border border-[var(--line-strong)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--ink-body)] shadow-sm transition hover:bg-[var(--surface-subtle)]"
            >
              Ver detalles de las tres líneas →
            </a>
          </Reveal>
        </div>
      </section>

      {/* Roadmap Digital 2026 — Pilar IV explícito --------------------- */}
      <section
        className="bg-[var(--surface-muted)] px-6 py-24 lg:px-8"
        id="roadmap"
      >
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="max-w-2xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--brand-teal)]">
              Hoja de ruta digital · 2026
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--brand-blue)] sm:text-4xl">
              Estamos digitalizando la verificación de impacto.
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--ink-body)]">
              Es un proceso abierto a socios estratégicos. Comunicamos cada fase
              con su estado real para preservar la integridad documental que
              define a la fundación.
            </p>
          </Reveal>

          <ol className="mt-14 grid gap-5 md:grid-cols-3">
            {roadmapPhases.map((phase, index) => (
              <Reveal
                key={phase.step}
                className={[
                  "relative rounded-2xl border bg-white p-7 shadow-sm",
                  phase.active
                    ? "border-[var(--brand-teal)]/40 ring-1 ring-[var(--brand-teal)]/30"
                    : "border-[var(--line-strong)]",
                ].join(" ")}
                delay={0.05 + index * 0.06}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                    {phase.step}
                  </span>
                  <span
                    className={[
                      "rounded-full px-2.5 py-0.5 text-[0.6rem] font-medium uppercase tracking-[0.12em]",
                      phase.active
                        ? "bg-[var(--brand-teal-soft)] text-[var(--brand-teal)]"
                        : "bg-[var(--surface-subtle)] text-[var(--ink-muted)]",
                    ].join(" ")}
                  >
                    {phase.state}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[var(--ink-strong)]">
                  {phase.label}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-body)]">
                  {phase.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Bloque inversión segmentado — Privado / Público --------------- */}
      <section className="px-6 py-24 lg:px-8" id="inversion">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="max-w-2xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--brand-green)]">
              Espacios de inversión
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--brand-blue)] sm:text-4xl">
              Dos puertas, una misma fundación.
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--ink-body)]">
              Atendemos por separado los lenguajes del capital privado y de la
              cooperación pública. Las conversaciones inician en el canal que
              corresponda.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {investorTracks.map((track, index) => (
              <Reveal
                key={track.audience}
                className="flex flex-col rounded-2xl border border-[var(--line-strong)] bg-white p-8 shadow-sm"
                delay={0.05 + index * 0.06}
              >
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                  {track.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-snug text-[var(--ink-strong)]">
                  {track.audience}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--ink-body)]">
                  {track.body}
                </p>
                <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-8">
                  <a
                    className="pressable inline-flex items-center justify-center rounded-lg bg-[var(--brand-green)] px-5 py-2.5 text-sm font-medium !text-white shadow-sm transition hover:bg-[var(--brand-green-dark)] hover:!text-white"
                    href={track.primary.href}
                    style={{ color: "#ffffff" }}
                  >
                    {track.primary.label}
                  </a>
                  {track.secondary && (
                    <a
                      className="text-sm font-medium text-[var(--brand-blue)] underline underline-offset-[6px] decoration-[var(--brand-blue)]/30 transition hover:decoration-[var(--brand-blue)]"
                      href={track.secondary.href}
                    >
                      {track.secondary.label}
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pitch de cierre — peak/end ----------------------------------- */}
      <section className="relative overflow-hidden bg-[var(--brand-blue)] px-6 py-28 text-white lg:px-8">
        <div className="absolute inset-0 opacity-[0.08]">
          <Image
            alt=""
            className="h-full w-full object-cover"
            src={fieldImage}
          />
        </div>
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/55">
            Pitch institucional
          </p>
          <p className="mt-8 text-2xl font-medium leading-[1.45] text-white sm:text-3xl">
            El Valle del Cauca es el futuro del agro sostenible en el trópico.
            Somos el puente técnico y humano que convierte capital en impacto
            real, medible y transparente.
          </p>
          <div className="mt-10 inline-flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <a
              className="text-sm font-medium text-white underline underline-offset-[6px] decoration-white/40 transition hover:decoration-white"
              href="/contacto"
            >
              Conversemos
            </a>
            <span className="hidden h-px w-8 bg-white/25 sm:block" />
            <a
              className="text-sm text-white/70 underline-offset-[6px] transition hover:text-white hover:underline"
              href="/respaldo"
            >
              Ver respaldo documental
            </a>
          </div>
        </Reveal>
      </section>

      {/* Respaldo institucional ---------------------------------------- */}
      <section
        className="bg-[var(--surface-page)] px-6 py-24 lg:px-8"
        id="respaldo"
      >
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="max-w-2xl">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--brand-green)]">
              Gobernanza y respaldo
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[var(--brand-blue)] sm:text-4xl">
              Información verificable contra documento original.
            </h2>
            <p className="mt-5 text-base leading-7 text-[var(--ink-body)]">
              Datos extraídos de la Cámara de Comercio de Palmira y de los
              materiales institucionales cargados en el repositorio.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="grid gap-3 sm:grid-cols-2">
              {institutionalFacts.map((point) => (
                <div
                  key={point.label}
                  className="rounded-xl border border-[var(--line-strong)] bg-white p-5 shadow-sm"
                >
                  <p className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                    {point.label}
                  </p>
                  <p className="mt-2 text-base font-semibold text-[var(--ink-strong)]">
                    {point.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-[var(--line-strong)] bg-white p-8 shadow-sm">
              <p className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                Cobertura territorial
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--ink-body)]">
                Cobertura nacional con implementación principal en ocho
                municipios del Valle del Cauca:
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {coverageMunicipalities.map((m) => (
                  <li
                    key={m}
                    className="rounded-full border border-[var(--line-strong)] bg-[var(--surface-subtle)] px-3 py-1 text-xs text-[var(--ink-body)]"
                  >
                    {m}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[0.7rem] leading-6 text-[var(--ink-muted)]">
                Fuente: Cámara de Comercio de Palmira · materiales
                institucionales (marzo 2026).
              </p>
            </div>
          </div>

          {/* Marcos de referencia ---------------------------------- */}
          <div className="mt-16 rounded-2xl border border-[var(--line-strong)] bg-white p-8 shadow-sm lg:p-10">
            <div className="flex flex-col gap-3 border-b border-[var(--line-soft)] pb-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-[var(--brand-teal)]">
                  Marcos de referencia
                </p>
                <h3 className="mt-2 text-xl font-semibold text-[var(--ink-strong)] sm:text-2xl">
                  Alineación declarada con estándares de sostenibilidad.
                </h3>
              </div>
              <p className="max-w-md text-[0.72rem] leading-6 text-[var(--ink-muted)]">
                Adopción declarativa para encuadrar el reporte de impacto; no
                constituye certificación de tercera parte.
              </p>
            </div>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                  Objetivos de Desarrollo Sostenible
                </p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {sdgFramework.map((sdg) => (
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
        </div>
      </section>

      {/* Footer / Contacto -------------------------------------------- */}
      <footer
        className="border-t border-[var(--line-soft)] bg-[#f7f8fb] px-6 py-16 lg:px-8"
        id="contacto"
      >
        <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                alt="Fundación GADES"
                className="h-9 w-9 object-contain"
                height={36}
                src="/brand/symbol.png"
                width={36}
              />
              <span className="text-base font-semibold tracking-[0.06em] text-[var(--brand-blue)]">
                GADES
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--ink-body)]">
              Fundación para la Gestión Agroambiental y el Desarrollo
              Empresarial y Social. Palmira, Valle del Cauca · Colombia.
            </p>
          </div>

          <div>
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-[var(--ink-muted)]">
              Navegación
            </p>
            <ul className="mt-4 grid gap-2.5 text-sm text-[var(--ink-body)]">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    className="hover:text-[var(--brand-blue)]"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-[var(--ink-muted)]">
              Contacto
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
                  href={`mailto:${contactEmail}`}
                >
                  {contactEmail}
                </a>
              </li>
              <li>
                <a
                  className="font-medium text-[var(--brand-green-dark)] hover:underline"
                  href="/contacto"
                >
                  Formulario de contacto →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-[var(--ink-muted)]">
              Repositorio
            </p>
            <ul className="mt-4 grid gap-2.5 text-sm text-[var(--ink-body)]">
              <li>
                <a
                  className="hover:text-[var(--brand-blue)]"
                  href={repoUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GADES-ORG/WEB-PAGE
                </a>
              </li>
              <li className="text-[var(--ink-muted)]">Código abierto</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-[1200px] flex-col items-start justify-between gap-4 border-t border-[var(--line-soft)] pt-6 text-[0.72rem] leading-6 text-[var(--ink-muted)] sm:flex-row sm:items-center">
          <p>
            © 2026 Fundación GADES · NIT 815.000.850-0 · Palmira, Valle del
            Cauca, Colombia.
          </p>
          <p>ONG sin ánimo de lucro</p>
        </div>
      </footer>
    </main>
  );
}
