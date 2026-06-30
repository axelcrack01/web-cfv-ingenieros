import { useState } from "react";
import { Link } from "react-router";
import { MapPin, ArrowRight, Calendar, Tag } from "lucide-react";
import PageHero from "../components/PageHero";

const FILTERS = ["Todos", "Obras Civiles", "Edificaciones", "Supervisión", "Inmobiliario"];

const PROJECTS = [
  {
    img: "photo-1565008447742-97f6f38c985c",
    title: "Torre Empresarial Pacífico",
    location: "Lima, Perú",
    category: "Edificaciones",
    type: "Edificación Comercial",
    status: "Entregado",
    year: "2023",
    budget: "USD 12.4M",
    desc: "Torre de oficinas premium de 22 pisos con certificación LEED Gold en el distrito financiero de San Isidro.",
  },
  {
    img: "photo-1512187849-463fdb898f21",
    title: "Puente Vial Interconexión Norte",
    location: "Bogotá, Colombia",
    category: "Obras Civiles",
    type: "Infraestructura Vial",
    status: "Entregado",
    year: "2022",
    budget: "USD 8.7M",
    desc: "Puente vehicular de 320 m sobre el Río Bogotá con accesos y vías de distribución en la Autopista Norte.",
  },
  {
    img: "photo-1557813282-bcd50093e38f",
    title: "Conjunto Residencial Las Cumbres",
    location: "Quito, Ecuador",
    category: "Inmobiliario",
    type: "Desarrollo Inmobiliario",
    status: "Entregado",
    year: "2023",
    budget: "USD 15.2M",
    desc: "Complejo de 8 torres residenciales con 480 departamentos, áreas comunes premium y urbanización completa.",
  },
  {
    img: "photo-1479293581560-aee98bb24f7f",
    title: "Centro Corporativo Meridian",
    location: "Santiago, Chile",
    category: "Edificaciones",
    type: "Edificación Comercial",
    status: "En ejecución",
    year: "2024",
    budget: "USD 22.1M",
    desc: "Desarrollo de uso mixto con torre corporativa de 30 pisos, retail en planta baja y estacionamientos subterráneos.",
  },
  {
    img: "photo-1529926691761-20fb82067c71",
    title: "Bypass Vial Costero",
    location: "Guayaquil, Ecuador",
    category: "Obras Civiles",
    type: "Infraestructura Vial",
    status: "Entregado",
    year: "2021",
    budget: "USD 6.9M",
    desc: "Obra de infraestructura vial urbana de 4.2 km con 3 intercambios y señalización inteligente integrada.",
  },
  {
    img: "photo-1694702740570-0a31ee1525c7",
    title: "Torre Financiera Capital",
    location: "Buenos Aires, Argentina",
    category: "Edificaciones",
    type: "Edificación Institucional",
    status: "En ejecución",
    year: "2025",
    budget: "USD 31.5M",
    desc: "Torre de 35 pisos para sede corporativa bancaria con centro de datos de misión crítica en 4 sótanos.",
  },
  {
    img: "photo-1723107638858-331404b1a09a",
    title: "Planta Industrial Zona Norte",
    location: "Lima, Perú",
    category: "Supervisión",
    type: "Supervisión Industrial",
    status: "Entregado",
    year: "2022",
    budget: "USD 9.3M",
    desc: "Supervisión integral de planta industrial de 18,000 m² con naves de producción, almacenes y oficinas.",
  },
  {
    img: "photo-1568632234157-ce7aecd03d0d",
    title: "Urbanización Altos del Valle",
    location: "Medellín, Colombia",
    category: "Inmobiliario",
    type: "Desarrollo Inmobiliario",
    status: "Entregado",
    year: "2023",
    budget: "USD 18.6M",
    desc: "Urbanización de 650 lotes con infraestructura completa de servicios, parques y vías internas en Bello.",
  },
  {
    img: "photo-1694521787162-5373b598945c",
    title: "Hospital Clínica Regional Sur",
    location: "Arequipa, Perú",
    category: "Edificaciones",
    type: "Edificación Institucional",
    status: "Entregado",
    year: "2021",
    budget: "USD 27.8M",
    desc: "Hospital de tercer nivel con 180 camas, 8 quirófanos y equipamiento de alta tecnología médica.",
  },
];

const STATUS_COLORS: Record<string, string> = {
  "Entregado": "bg-green-500/90",
  "En ejecución": "bg-[#F59E0B]/90",
};

export default function Proyectos() {
  const [active, setActive] = useState("Todos");

  const filtered = active === "Todos"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active);

  return (
    <>
      <PageHero
        title="Portafolio de proyectos destacados."
        subtitle="Más de 100 proyectos ejecutados en 6 países de Latinoamérica. Infraestructura, edificaciones, desarrollo inmobiliario y más."
        breadcrumb="Proyectos"
        imgId="photo-1565008447742-97f6f38c985c"
      />

      {/* ── FILTERS ───────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-border sticky top-[60px] z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-2">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                active === f
                  ? "bg-[#12344D] text-white shadow-md"
                  : "bg-[#F5F7FA] text-slate-500 hover:bg-[#12344D]/8 hover:text-[#12344D]"
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto text-slate-400 text-sm self-center">
            {filtered.length} proyecto{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </section>

      {/* ── GRID ─────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#F5F7FA] min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(({ img, title, location, category, type, status, year, budget, desc }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-2xl hover:shadow-[#12344D]/8 hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-52 bg-slate-200">
                  <img
                    src={`https://images.unsplash.com/${img}?w=700&h=450&fit=crop&auto=format`}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071929]/60 to-transparent" />
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`${STATUS_COLORS[status] || "bg-slate-600/90"} backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full`}>
                      {status}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-[#12344D]/80 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {budget}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag size={11} className="text-[#F59E0B]" />
                    <span className="text-[#F59E0B] text-xs font-bold uppercase tracking-wide">{type}</span>
                  </div>
                  <h3 className="font-bold text-[#12344D] text-lg mb-2 font-display leading-snug">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{desc}</p>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-5">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={11} className="text-[#F59E0B]" />
                      {location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={11} className="text-[#F59E0B]" />
                      {year}
                    </div>
                  </div>
                  <Link
                    to="/contacto"
                    className="group/btn flex items-center justify-between w-full border border-[#12344D]/15 hover:border-[#12344D] hover:bg-[#12344D] text-[#12344D] hover:text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                  >
                    Ver detalle
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg">No hay proyectos en esta categoría.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#12344D]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-5 font-display">
            ¿Tu proyecto podría ser el siguiente?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            Cuéntanos tu visión y construyamos juntos el proyecto que transformará tu comunidad.
          </p>
          <Link
            to="/contacto"
            className="group inline-flex items-center gap-3 bg-[#F59E0B] hover:bg-amber-400 text-white px-10 py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
          >
            Solicitar Cotización <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
