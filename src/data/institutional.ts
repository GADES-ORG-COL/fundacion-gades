// ---------------------------------------------------------------------------
// Datos institucionales compartidos
// Fuente: Cámara de Comercio de Palmira · materiales institucionales (mar 2026)
// ---------------------------------------------------------------------------

export const SITE_URL = "https://www.fundaciongades.org.co";
export const REPO_URL = "https://github.com/GADES-ORG/WEB-PAGE";
export const CONTACT_EMAIL = "gadesinformacion@gmail.com";
export const CONTACT_PHONE = "+57 319 337 5949";

export const institutionalFacts = [
  { label: "NIT", value: "815.000.850-0" },
  { label: "Constitución", value: "14 de febrero de 1997" },
  { label: "Inscripción", value: "24 de abril de 1997" },
  { label: "Naturaleza", value: "ONG sin ánimo de lucro" },
] as const;

export const timeline = [
  {
    year: "14 feb 1997",
    title: "Escritura pública de constitución",
    body: "Escritura Pública No. 346, Notaría Tercera de Palmira.",
  },
  {
    year: "24 abr 1997",
    title: "Inscripción en Cámara de Comercio",
    body: "Registro de Entidades sin Ánimo de Lucro, Cámara de Comercio de Palmira.",
  },
  {
    year: "03 feb 2006",
    title: "Actualización estatutaria",
    body: "Acta No. 013 de la Asamblea General de Palmira.",
  },
  {
    year: "25 abr 2015",
    title: "Reforma extraordinaria",
    body: "Acta No. 022 de la Asamblea Extraordinaria de Palmira.",
  },
] as const;

export const coverageMunicipalities = [
  "Palmira",
  "Candelaria",
  "Pradera",
  "Florida",
  "El Cerrito",
  "Guacarí",
  "Darién",
  "Ginebra",
] as const;

export const sdgFramework: ReadonlyArray<{ code: string; label: string }> = [
  { code: "ODS 2", label: "Hambre cero" },
  { code: "ODS 6", label: "Agua limpia y saneamiento" },
  { code: "ODS 8", label: "Trabajo decente" },
  { code: "ODS 13", label: "Acción por el clima" },
  { code: "ODS 15", label: "Vida de ecosistemas terrestres" },
  { code: "ODS 17", label: "Alianzas para los objetivos" },
];

export const standardsFramework: readonly string[] = [
  "Marco GRI — reportes de sostenibilidad",
  "ISO 14001 — referencia para gestión ambiental",
  "Pacto Global — principios de adhesión declarada",
];

// ---------------------------------------------------------------------------
// Líneas de acción (expandidas para /lineas-de-accion)
// ---------------------------------------------------------------------------

export const actionLines = [
  {
    slug: "agroambiental",
    accentVar: "--brand-teal",
    eyebrow: "Línea agroambiental",
    title: "Gestión agroambiental",
    lede: "Proyectos ambientales y agropecuarios orientados a la protección de cuencas hidrográficas, control de erosión y torrentes, y reforestación en zonas urbanas y rurales del Valle del Cauca.",
    body: "Desde 1997 GADES opera como operador técnico en la gestión de ecosistemas estratégicos del Valle del Cauca. Los proyectos articulan diagnóstico hídrico, intervención física en cauces y laderas, y seguimiento de cobertura vegetal bajo protocolos verificables. Cada intervención documenta línea base, indicadores de impacto y memorias técnicas auditables.",
    programs: [
      {
        title: "Protección de cuencas hidrográficas",
        body: "Diagnóstico, monitoreo y obras de estabilización en afluentes del río Cauca. Incluye censo de cobertura vegetal ribereña e inventarios de fauna íctica.",
      },
      {
        title: "Control de erosión y torrentes",
        body: "Diseño e implementación de obras de bioingeniería en laderas críticas: trinchos, revegetalización y canales de disipación de energía hídrica.",
      },
      {
        title: "Reforestación urbana y rural",
        body: "Producción y siembra de especies nativas en áreas degradas. Vinculación de comunidades locales como custodios del material vegetal.",
      },
      {
        title: "Educación ambiental territorial",
        body: "Talleres, giras de campo y materiales pedagógicos para escuelas, juntas de acción comunal y gremios agropecuarios.",
      },
    ],
    sdgs: ["ODS 6", "ODS 13", "ODS 15"],
    imageKey: "image4" as const,
  },
  {
    slug: "empresarial",
    accentVar: "--brand-green",
    eyebrow: "Línea empresarial",
    title: "Desarrollo empresarial",
    lede: "Asistencia técnica, transformación agroindustrial y fortalecimiento de capacidades para comunidades productoras, cooperativas y entidades aliadas en la región.",
    body: "La línea empresarial acompaña el ciclo completo del productor agropecuario: desde la adopción de buenas prácticas agrícolas (BPA) hasta la agregación de valor post-cosecha y la vinculación a cadenas de abastecimiento formal. GADES actúa como integrador técnico entre el productor, el sector privado y los fondos de cooperación.",
    programs: [
      {
        title: "Transformación agroindustrial",
        body: "Acompañamiento en procesos de poscosecha, certificación de calidad y acceso a mercados locales y regionales para frutas, hortalizas y materias primas.",
      },
      {
        title: "Programas agropecuarios",
        body: "Transferencia de tecnología en manejo integrado de cultivos, sanidad animal y sistemas silvopastoriles para pequeños y medianos productores.",
      },
      {
        title: "Asistencia técnica directa",
        body: "Visitas de campo, planes de mejora predial y seguimiento individual a unidades productivas en los 8 municipios de cobertura.",
      },
      {
        title: "Encadenamientos productivos",
        body: "Articulación de alianzas entre productores primarios, procesadores y compradores institucionales bajo esquemas de compra anticipada.",
      },
    ],
    sdgs: ["ODS 2", "ODS 8"],
    imageKey: "image6" as const,
  },
  {
    slug: "social",
    accentVar: "--brand-blue",
    eyebrow: "Línea social",
    title: "Desarrollo social",
    lede: "Acompañamiento a población urbana, rural y étnica para fortalecer condiciones de vida, promover convivencia y desarrollar capacidades individuales y colectivas.",
    body: "La línea social de GADES trabaja con comunidades en condición de vulnerabilidad, con énfasis en población campesina, afrodescendiente e indígena del sur del Valle del Cauca. Los programas combinan formación, asesoría jurídica y psicosocial, y articulación institucional para el acceso a derechos y servicios del Estado.",
    programs: [
      {
        title: "Capacitación y formación",
        body: "Cursos técnicos en oficios productivos, liderazgo comunitario, derechos humanos y gestión de riesgos para adultos y jóvenes rurales.",
      },
      {
        title: "Asesoría y orientación",
        body: "Atención individual a familias en procesos de acceso a subsidios, formalización de tierras y vinculación a programas gubernamentales.",
      },
      {
        title: "Acompañamiento comunitario",
        body: "Facilitación de asambleas, planes de vida, acuerdos de convivencia y presupuestos participativos en veredas y barrios periurbanos.",
      },
      {
        title: "Enfoque diferencial y étnico",
        body: "Metodologías adaptadas para comunidades afrodescendientes e indígenas, con respeto a sus sistemas de autoridad y conocimiento tradicional.",
      },
    ],
    sdgs: ["ODS 2", "ODS 8", "ODS 17"],
    imageKey: "image5" as const,
  },
] as const;
