import { Link } from "react-router";
import {
  Building2, Home as HomeIcon, ClipboardCheck, BarChart3, Lightbulb, HardHat,
  ArrowRight, CheckCircle2,
} from "lucide-react";
import PageHero from "../components/PageHero";

const SERVICES = [
  {
    Icon: Building2,
    title: "Obras Civiles",
    slug: "obras-civiles",
    tagline: "Infraestructura que transforma territorios.",
    desc: "Ejecutamos proyectos de infraestructura vial, hidráulica y urbana con los más altos estándares de ingeniería, garantizando durabilidad, seguridad y eficiencia en cada obra.",
    benefits: [
      "Carreteras, autopistas y vías urbanas",
      "Obras hidráulicas y de saneamiento",
      "Puentes, viaductos y pasos a desnivel",
      "Infraestructura aeroportuaria y portuaria",
      "Movimientos de tierra y excavaciones",
      "Pavimentación y señalización vial",
    ],
    img: "photo-1512187849-463fdb898f21",
  },
  {
    Icon: HomeIcon,
    title: "Edificaciones",
    slug: "edificaciones",
    tagline: "Diseño y construcción de alta arquitectura.",
    desc: "Construimos edificios residenciales, comerciales e institucionales con diseño arquitectónico de vanguardia, materiales premium y acabados de alta calidad que perduran en el tiempo.",
    benefits: [
      "Edificios corporativos y de oficinas",
      "Conjuntos residenciales premium",
      "Centros comerciales y retail",
      "Hospitales, clínicas y centros de salud",
      "Instalaciones educativas e institucionales",
      "Acabados y remodelación de alta gama",
    ],
    img: "photo-1565008447742-97f6f38c985c",
  },
  {
    Icon: ClipboardCheck,
    title: "Supervisión de Obra",
    slug: "supervision",
    tagline: "Control técnico permanente en cada etapa.",
    desc: "Brindamos servicios especializados de supervisión y fiscalización de obras, garantizando que los proyectos se ejecuten conforme a especificaciones técnicas, presupuesto y cronograma.",
    benefits: [
      "Supervisión técnica independiente",
      "Control de calidad de materiales",
      "Gestión de cambios y adicionales",
      "Informes periódicos de avance",
      "Control de costos y presupuesto",
      "Certificación de obra concluida",
    ],
    img: "photo-1760161306014-e2dcc13cbdf8",
  },
  {
    Icon: BarChart3,
    title: "Gestión de Proyectos",
    slug: "gestion-proyectos",
    tagline: "Metodología PMI y BIM para resultados precisos.",
    desc: "Aplicamos metodologías internacionales de gestión —PMI, BIM y Lean Construction— para planificar, coordinar y controlar proyectos complejos desde la conceptualización hasta la entrega.",
    benefits: [
      "Planificación maestra y cronograma BIM 4D",
      "Gestión de riesgos e imprevistos",
      "Control de presupuesto y flujo de caja",
      "Coordinación multidisciplinaria",
      "Reporting ejecutivo en tiempo real",
      "Gestión de stakeholders y contratos",
    ],
    img: "photo-1723107638733-16ef49e5d4de",
  },
  {
    Icon: Lightbulb,
    title: "Consultoría Técnica",
    slug: "consultoria",
    tagline: "Expertise especializado para decisiones críticas.",
    desc: "Ofrecemos asesoría especializada en ingeniería estructural, geotécnica, hidráulica, ambiental y de costos, apoyando a promotores, inversionistas e instituciones públicas en sus decisiones técnicas.",
    benefits: [
      "Estudios de factibilidad técnica y económica",
      "Ingeniería geotécnica y suelos",
      "Análisis estructural y sismicidad",
      "Evaluación técnica de proyectos existentes",
      "Due diligence técnico para inversiones",
      "Elaboración de bases y especificaciones",
    ],
    img: "photo-1758518730151-cf64fddb4f0a",
  },
  {
    Icon: HardHat,
    title: "Desarrollo Inmobiliario",
    slug: "desarrollo-inmobiliario",
    tagline: "De la idea al proyecto rentable y ejecutado.",
    desc: "Estructuramos, desarrollamos y comercializamos proyectos inmobiliarios rentables: desde la identificación del terreno y el análisis de mercado hasta la entrega del proyecto terminado y vendido.",
    benefits: [
      "Análisis de mercado e identificación de terrenos",
      "Estructuración financiera del proyecto",
      "Diseño y gestión de permisos",
      "Construcción y control de costos",
      "Estrategia comercial y preventa",
      "Post-venta y garantía de obra",
    ],
    img: "photo-1694702740570-0a31ee1525c7",
  },
];

const PROCESO = [
  { step: "01", title: "Consulta inicial", desc: "Nos cuentas tu proyecto y necesidades. Sin costo ni compromiso." },
  { step: "02", title: "Análisis técnico", desc: "Nuestro equipo evalúa los requerimientos y condiciones del proyecto." },
  { step: "03", title: "Propuesta técnica", desc: "Presentamos una propuesta detallada con alcance, cronograma y presupuesto." },
  { step: "04", title: "Ejecución", desc: "Iniciamos con un equipo dedicado y reportes periódicos de avance." },
];

export default function Servicios() {
  return (
    <>
      <PageHero
        title="Servicios de ingeniería y construcción de alto estándar."
        subtitle="Seis líneas de servicio especializadas para cubrir cada etapa de tu proyecto, desde la consultoría inicial hasta la entrega y post-venta."
        breadcrumb="Servicios"
        imgId="photo-1694521787162-5373b598945c"
      />

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Ingeniería integral", desc: "Cubrimos cada especialidad: civil, estructural, hidráulica, geotécnica y ambiental." },
              { num: "02", title: "Un solo interlocutor", desc: "Un gerente de proyecto para toda la coordinación. Sin burocracia ni intermediarios." },
              { num: "03", title: "Tecnología BIM", desc: "Modelado 3D, coordinación multidisciplinaria y reportes en tiempo real para todos los proyectos." },
            ].map(({ num, title, desc }) => (
              <div key={num} className="flex gap-5">
                <span className="text-[#F59E0B] font-bold font-display text-2xl shrink-0">{num}</span>
                <div>
                  <h4 className="font-bold text-[#12344D] mb-2 font-display">{title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {SERVICES.map(({ Icon, title, tagline, desc, benefits, img }, i) => (
            <div
              key={title}
              className={`bg-white rounded-2xl overflow-hidden border border-border hover:shadow-2xl hover:shadow-[#12344D]/6 transition-all duration-300 grid lg:grid-cols-[1fr_360px] ${
                i % 2 !== 0 ? "lg:grid-cols-[360px_1fr]" : ""
              }`}
            >
              {/* Image (reversed on odd) */}
              {i % 2 !== 0 && (
                <div className="hidden lg:block relative overflow-hidden bg-slate-200 min-h-[320px]">
                  <img
                    src={`https://images.unsplash.com/${img}?w=600&h=450&fit=crop&auto=format`}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#12344D]/30" />
                </div>
              )}

              {/* Content */}
              <div className="p-8 lg:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-13 h-13 bg-[#F5F7FA] rounded-xl flex items-center justify-center shrink-0 p-3">
                    <Icon className="text-[#12344D]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#12344D] font-display">{title}</h3>
                    <p className="text-[#F59E0B] text-sm font-semibold mt-0.5">{tagline}</p>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-7">{desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {benefits.map(b => (
                    <div key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#F59E0B] shrink-0 mt-0.5" size={14} />
                      <span className="text-slate-600 text-xs leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contacto"
                  className="group inline-flex items-center gap-2 bg-[#12344D] hover:bg-[#F59E0B] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
                >
                  Solicitar información <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Image (normal on even) */}
              {i % 2 === 0 && (
                <div className="hidden lg:block relative overflow-hidden bg-slate-200 min-h-[320px]">
                  <img
                    src={`https://images.unsplash.com/${img}?w=600&h=450&fit=crop&auto=format`}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#12344D]/20" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESO ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#12344D]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#F59E0B] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 block">Cómo empezamos</span>
            <h2 className="text-4xl font-bold text-white font-display">Del primer contacto al inicio de obra</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESO.map(({ step, title, desc }) => (
              <div key={step} className="text-center group">
                <div className="w-16 h-16 rounded-full border-2 border-white/15 group-hover:border-[#F59E0B] bg-white/5 mx-auto flex items-center justify-center mb-5 transition-all duration-300">
                  <span className="text-[#F59E0B] font-bold font-display">{step}</span>
                </div>
                <h4 className="text-white font-bold mb-2 font-display">{title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/contacto"
              className="group inline-flex items-center gap-3 bg-[#F59E0B] hover:bg-amber-400 text-white px-10 py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
            >
              Solicitar Cotización <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
