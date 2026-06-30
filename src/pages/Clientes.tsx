import { Link } from "react-router";
import { Star, ArrowRight, CheckCircle2, Users, Building2, TrendingUp } from "lucide-react";
import PageHero from "../components/PageHero";

const TESTIMONIALS = [
  {
    name: "Ing. Carlos Mendoza",
    role: "Director de Infraestructura",
    company: "Grupo Andino S.A.",
    text: "ConstructuraCFV superó todas nuestras expectativas. Entregaron el proyecto dos semanas antes del plazo con calidad impecable. Su equipo técnico tiene una capacidad de resolución de problemas que no hemos encontrado en ninguna otra empresa del sector.",
    rating: 5,
    img: "photo-1560250097-0b93528c311a",
    project: "Edificio corporativo 18 pisos · Lima",
  },
  {
    name: "Arq. Patricia Vargas",
    role: "Gerente de Proyectos",
    company: "Inmobiliaria Meridian",
    text: "La gestión técnica y administrativa fue ejemplar. El modelo BIM que implementaron nos permitió coordinar perfectamente con arquitectos y especialistas. El nivel de profesionalismo es de primer mundo.",
    rating: 5,
    img: "photo-1573496359142-b8d87734a5a2",
    project: "Conjunto residencial 320 unidades · Santiago",
  },
  {
    name: "Dr. Roberto Saavedra",
    role: "Presidente Ejecutivo",
    company: "Corporación Vial Pacífico",
    text: "Trabajamos con ConstructuraCFV en tres proyectos viales consecutivos. Su capacidad de resolver imprevistos geotécnicos sin afectar costos ni plazos es simplemente el diferencial más valioso del mercado.",
    rating: 5,
    img: "photo-1472099645785-5658abf4ff4e",
    project: "Bypass vial 12 km · Guayaquil",
  },
  {
    name: "Lic. Mónica Herrera",
    role: "Directora Administrativa",
    company: "Grupo Salud Regional",
    text: "El hospital que construyeron para nosotros es una obra de ingeniería de primer nivel. Cumplieron cada especificación técnica hospitalaria y entregaron en el plazo acordado. 100% recomendables.",
    rating: 5,
    img: "photo-1580489944761-15a19d654956",
    project: "Hospital 180 camas · Arequipa",
  },
  {
    name: "Ing. Fernando Castillo",
    role: "Gerente de Construcción",
    company: "Bancolombia Infraestructura",
    text: "El equipo de supervisión de ConstructuraCFV fue crítico para el éxito de nuestro proyecto. Su rigurosidad técnica y sus informes detallados nos dieron la tranquilidad que necesitábamos como financiadores.",
    rating: 5,
    img: "photo-1519085360753-af0119f7cbe7",
    project: "Supervisión de obra industrial · Medellín",
  },
  {
    name: "Dra. Alejandra Muñoz",
    role: "Vicerrectora de Infraestructura",
    company: "Universidad del Pacífico",
    text: "El nuevo campus universitario que ejecutaron tiene un nivel de acabados y funcionalidad que es admirado por todos los que lo visitan. El proceso de obra fue impecable y sin sorpresas.",
    rating: 5,
    img: "photo-1573497019940-1c28c88b4f3e",
    project: "Campus universitario 22,000 m² · Lima",
  },
];

const CLIENTS = [
  { name: "Grupo Andino", sector: "Energía" },
  { name: "Inmobiliaria Meridian", sector: "Real Estate" },
  { name: "Corporación Vial Pacífico", sector: "Infraestructura" },
  { name: "BancoEstado Obras", sector: "Financiero" },
  { name: "Ministerio de Infraestructura", sector: "Gobierno" },
  { name: "Consorcio Urbano", sector: "Construcción" },
  { name: "Holcim Partners", sector: "Materiales" },
  { name: "Ferrovial Latam", sector: "Infraestructura" },
  { name: "BBVA Capital Obras", sector: "Financiero" },
  { name: "Grupo Salud Regional", sector: "Salud" },
  { name: "Universidad del Pacífico", sector: "Educación" },
  { name: "Bancolombia Infraestructura", sector: "Financiero" },
];

const SECTORES = [
  { Icon: Building2, title: "Sector Privado", items: ["Inmobiliarias", "Corporaciones", "Bancos e inversores", "Grupos industriales", "Cadenas retail"] },
  { Icon: Users, title: "Sector Público", items: ["Ministerios de Obras", "Gobiernos regionales", "Municipalidades", "Empresas estatales", "Organismos internacionales"] },
  { Icon: TrendingUp, title: "Sectores Especializados", items: ["Salud e infraestructura hospitalaria", "Educación y universidades", "Industria y manufactura", "Energía y minería", "Turismo y hotelería"] },
];

const CASOS = [
  {
    img: "photo-1694521787162-5373b598945c",
    client: "Grupo Andino S.A.",
    challenge: "Construcción de edificio corporativo en terreno con restricciones geotécnicas severas y plazo de 18 meses.",
    solution: "Diseño estructural especial con pilotes de gran diámetro, programación acelerada con trabajo en doble turno y metodología Last Planner.",
    result: "Entregado 3 semanas antes del plazo. 0 accidentes. Ahorro de USD 240,000 vs. presupuesto base.",
    metric: "-3 semanas",
    metricLabel: "Antes del plazo",
  },
  {
    img: "photo-1512187849-463fdb898f21",
    client: "Corporación Vial Pacífico",
    challenge: "Ejecución de bypass vial de 12 km en zona de alto tráfico sin interrumpir circulación vehicular.",
    solution: "Plan de manejo de tráfico en tres etapas con desvíos coordinados con autoridades municipales y trabajo nocturno.",
    result: "Cero cortes de tráfico mayores. Obra concluida en plazo. 98.2% de satisfacción en auditoría de calidad independiente.",
    metric: "98.2%",
    metricLabel: "Calidad certificada",
  },
];

export default function Clientes() {
  return (
    <>
      <PageHero
        title="Clientes que confían en ConstructuraCFV."
        subtitle="Más de 50 clientes en sectores público y privado en 6 países de Latinoamérica. Construimos relaciones de largo plazo basadas en resultados."
        breadcrumb="Clientes"
        imgId="photo-1758518729685-f88df7890776"
      />

      {/* ── LOGO GRID ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#F59E0B] text-[11px] font-bold uppercase tracking-[0.2em] mb-3 block">Nuestros clientes</span>
            <h2 className="text-4xl font-bold text-[#12344D] font-display">
              Empresas que eligen ConstructuraCFV
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {CLIENTS.map(({ name, sector }) => (
              <div
                key={name}
                className="group bg-[#F5F7FA] hover:bg-[#12344D] rounded-xl p-5 border border-border hover:border-[#12344D] transition-all duration-300 hover:shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-white group-hover:bg-white/10 rounded-lg mx-auto mb-3 flex items-center justify-center transition-colors duration-300">
                  <span className="text-[#12344D] group-hover:text-[#F59E0B] font-bold text-lg font-display transition-colors duration-300">
                    {name.charAt(0)}
                  </span>
                </div>
                <p className="font-bold text-[#12344D] group-hover:text-white text-sm font-display transition-colors duration-300 leading-tight">
                  {name}
                </p>
                <p className="text-slate-400 group-hover:text-slate-300 text-xs mt-1 transition-colors duration-300">
                  {sector}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTORES ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#F59E0B] text-[11px] font-bold uppercase tracking-[0.2em] mb-3 block">Industrias que atendemos</span>
            <h2 className="text-4xl font-bold text-[#12344D] font-display">Sectores de experiencia</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {SECTORES.map(({ Icon, title, items }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#12344D] rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-white" size={22} />
                </div>
                <h3 className="font-bold text-[#12344D] text-xl mb-5 font-display">{title}</h3>
                <ul className="space-y-2.5">
                  {items.map(item => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="text-[#F59E0B] shrink-0" size={14} />
                      <span className="text-slate-500 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#F59E0B] text-[11px] font-bold uppercase tracking-[0.2em] mb-3 block">Testimonios</span>
            <h2 className="text-4xl font-bold text-[#12344D] font-display">Lo que dicen nuestros clientes</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ name, role, company, text, rating, img, project }) => (
              <div
                key={name}
                className="bg-white rounded-2xl p-7 border border-border hover:shadow-2xl hover:shadow-[#12344D]/8 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={13} className="text-[#F59E0B] fill-[#F59E0B]" />
                  ))}
                </div>
                <blockquote className="text-slate-600 text-sm leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{text}&rdquo;
                </blockquote>
                <div className="border-t border-border pt-5">
                  <p className="text-[#F59E0B] text-[10px] font-bold uppercase tracking-wide mb-3">{project}</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://images.unsplash.com/${img}?w=80&h=80&fit=crop&crop=face&auto=format`}
                      alt={name}
                      className="w-11 h-11 rounded-full object-cover bg-slate-200 ring-2 ring-[#12344D]/8"
                    />
                    <div>
                      <div className="font-bold text-[#12344D] text-sm font-display">{name}</div>
                      <div className="text-slate-400 text-xs mt-0.5">{role} · {company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASOS DE ÉXITO ────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#F59E0B] text-[11px] font-bold uppercase tracking-[0.2em] mb-3 block">Resultados reales</span>
            <h2 className="text-4xl font-bold text-[#12344D] font-display">Casos de éxito</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {CASOS.map(({ img, client, challenge, solution, result, metric, metricLabel }) => (
              <div key={client} className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 bg-slate-200 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${img}?w=700&h=350&fit=crop&auto=format`}
                    alt={client}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#12344D]/60" />
                  <div className="absolute top-4 left-4">
                    <span className="text-white font-bold text-sm font-display">{client}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 text-right">
                    <div className="text-[#F59E0B] text-3xl font-bold font-display">{metric}</div>
                    <div className="text-white/70 text-xs">{metricLabel}</div>
                  </div>
                </div>
                <div className="p-7">
                  <div className="space-y-4">
                    <div>
                      <p className="text-[#F59E0B] text-[10px] font-bold uppercase tracking-wide mb-1">Desafío</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{challenge}</p>
                    </div>
                    <div>
                      <p className="text-[#F59E0B] text-[10px] font-bold uppercase tracking-wide mb-1">Solución</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{solution}</p>
                    </div>
                    <div>
                      <p className="text-[#F59E0B] text-[10px] font-bold uppercase tracking-wide mb-1">Resultado</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#12344D]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-5 font-display">
            Únete a nuestros clientes satisfechos.
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            Somos el socio estratégico que tu proyecto necesita. Conversemos sobre cómo podemos ayudarte.
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
