import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import {
  Building2, HardHat, ClipboardCheck, BarChart3, Lightbulb, Home as HomeIcon,
  ChevronRight, MapPin, ArrowRight, CheckCircle2, Star, ChevronDown,
  Shield, Clock, Cpu,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const SERVICES = [
  { Icon: Building2, title: "Obras Civiles", desc: "Infraestructura vial, hidráulica y urbana con los más altos estándares técnicos de la región." },
  { Icon: HomeIcon, title: "Edificaciones", desc: "Diseño y construcción de edificios residenciales, comerciales e institucionales de toda escala." },
  { Icon: ClipboardCheck, title: "Supervisión", desc: "Control técnico, de calidad y de costos en cada etapa de la obra con equipo certificado." },
  { Icon: BarChart3, title: "Gestión de Proyectos", desc: "Planificación, coordinación y control integral bajo metodologías PMI y modelado BIM." },
  { Icon: Lightbulb, title: "Consultoría", desc: "Asesoría especializada en ingeniería estructural, geotécnica, hidráulica y medio ambiente." },
  { Icon: HardHat, title: "Desarrollo Inmobiliario", desc: "Estructuración, desarrollo y comercialización de proyectos inmobiliarios rentables y sostenibles." },
];

const METHODOLOGY = [
  { step: "01", title: "Diagnóstico", desc: "Evaluación técnica del terreno y levantamiento de requerimientos." },
  { step: "02", title: "Planificación", desc: "Cronograma maestro, presupuesto base y asignación de recursos." },
  { step: "03", title: "Diseño", desc: "Ingeniería de detalle, modelado BIM 3D y especificaciones técnicas." },
  { step: "04", title: "Construcción", desc: "Ejecución con control de calidad permanente y protocolos OHSAS." },
  { step: "05", title: "Supervisión", desc: "Monitoreo continuo de avance, costos y calidad en tiempo real." },
  { step: "06", title: "Entrega", desc: "Protocolo de cierre, dossier de obra, garantías y acompañamiento." },
];

const PROJECTS = [
  { img: "photo-1565008447742-97f6f38c985c", title: "Torre Empresarial Pacífico", location: "Lima, Perú", type: "Edificación Comercial", budget: "USD 12.4M", tall: true },
  { img: "photo-1512187849-463fdb898f21", title: "Puente Vial Interconexión Norte", location: "Bogotá, Colombia", type: "Obra Civil", budget: "USD 8.7M", tall: false },
  { img: "photo-1557813282-bcd50093e38f", title: "Conjunto Residencial Las Cumbres", location: "Quito, Ecuador", type: "Desarrollo Inmobiliario", budget: "USD 15.2M", tall: false },
  { img: "photo-1479293581560-aee98bb24f7f", title: "Centro Corporativo Meridian", location: "Santiago, Chile", type: "Edificación Comercial", budget: "USD 22.1M", tall: true },
  { img: "photo-1529926691761-20fb82067c71", title: "Bypass Vial Costero", location: "Guayaquil, Ecuador", type: "Infraestructura Vial", budget: "USD 6.9M", tall: false },
  { img: "photo-1694702740570-0a31ee1525c7", title: "Torre Financiera Capital", location: "Buenos Aires, Argentina", type: "Edificación Institucional", budget: "USD 31.5M", tall: false },
];

const STATS = [
  { value: 20, suffix: "+", label: "Proyectos ejecutados" },
  { value: 20, suffix: "+", label: "Clientes satisfechos" },
  { value: 5, suffix: "+", label: "Años de experiencia" },
  { value: 99, suffix: "%", label: "Cumplimiento de plazos" },
];

const REASONS = [
  { Icon: CheckCircle2, title: "Calidad Certificada", desc: "Procesos auditados bajo ISO 9001 y estándares internacionales de construcción y gestión." },
  { Icon: HardHat, title: "Equipo Especializado", desc: "Ingenieros y arquitectos con formación internacional y décadas de experiencia en proyectos complejos." },
  { Icon: Clock, title: "Cumplimiento de Plazos", desc: "Metodología PMI de control de cronograma que garantiza entregas en tiempo y dentro del presupuesto." },
  { Icon: Cpu, title: "Innovación Tecnológica", desc: "Modelado BIM, drones topográficos y software de gestión de proyectos de última generación." },
  { Icon: Shield, title: "Seguridad Total", desc: "Cultura de cero accidentes con protocolos OHSAS 18001 implementados en cada obra." },
  { Icon: CheckCircle2, title: "Atención Personalizada", desc: "Un gerente de proyecto dedicado exclusivamente a tu obra durante todo el ciclo de vida del proyecto." },
];

const TESTIMONIALS = [
  {
    name: "Ing. Carlos Mendoza",
    role: "Director de Infraestructura",
    company: "Grupo Andino S.A.",
    text: "ConstructuraCFV superó todas nuestras expectativas. Entregaron el proyecto dos semanas antes del plazo con calidad impecable. Sin duda nuestro socio estratégico para futuros desarrollos.",
    rating: 5,
    img: "photo-1560250097-0b93528c311a",
  },
  {
    name: "Arq. Patricia Vargas",
    role: "Gerente de Proyectos",
    company: "Inmobiliaria Meridian",
    text: "La gestión técnica y administrativa fue ejemplar. El equipo de ConstructuraCFV demostró un nivel de profesionalismo que rara vez se encuentra en el mercado latinoamericano.",
    rating: 5,
    img: "photo-1573496359142-b8d87734a5a2",
  },
  {
    name: "Dr. Roberto Saavedra",
    role: "Presidente Ejecutivo",
    company: "Corporación Vial Pacífico",
    text: "Trabajamos con ConstructuraCFV en tres proyectos consecutivos. Su capacidad de resolver imprevistos sin afectar costos ni plazos es el diferencial más valioso que tienen.",
    rating: 5,
    img: "photo-1472099645785-5658abf4ff4e",
  },
];

const CLIENTS = [
  "Grupo Andino", "Inmobiliaria Meridian", "Corp. Vial Pacífico",
  "BancoEstado Obras", "Ministerio de Infraestructura", "Consorcio Urbano",
  "Holcim Partners", "Ferrovial Latam", "BBVA Capital Obras",
];

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const totalFrames = Math.round((duration / 1000) * 60);
    const timer = setInterval(() => {
      frame++;
      const eased = 1 - Math.pow(1 - frame / totalFrames, 3);
      setCount(Math.min(Math.round(eased * target), target));
      if (frame >= totalFrames) clearInterval(timer);
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatItem({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp(value, 2200, active);
  return (
    <div className="text-center">
      <div className="text-6xl lg:text-7xl font-bold text-white mb-3 tracking-tight font-display leading-none">
        {count}<span className="text-[#F59E0B]">{suffix}</span>
      </div>
      <div className="w-8 h-px bg-[#F59E0B]/40 mx-auto mb-3" />
      <div className="text-slate-400 text-xs uppercase tracking-[0.15em] font-medium">{label}</div>
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function Home() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.25 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[680px] flex items-center overflow-hidden bg-[#071929]">
        <img
          src="https://images.unsplash.com/photo-1778074762022-c33cc42f79ae?w=1920&h=1080&fit=crop&auto=format"
          alt="Engineers reviewing construction plans on site"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071929]/97 via-[#12344D]/75 to-[#12344D]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071929]/80 via-transparent to-[#071929]/30" />
        <div className="absolute top-1/4 right-[30%] w-px h-48 bg-gradient-to-b from-transparent via-[#F59E0B]/20 to-transparent hidden lg:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-[1fr_380px] gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2.5 bg-white/8 border border-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
              <span className="text-white/70 text-xs font-medium uppercase tracking-[0.18em]">
                Ingeniería de Alto Estándar · Latinoamérica
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-[72px] font-bold text-white leading-[1.03] tracking-tight mb-7 font-display">
              Construimos<br />
              proyectos que<br />
              <span className="text-[#F59E0B]">transforman</span><br />
              ciudades.
            </h1>
            <p className="text-slate-300/90 text-lg leading-relaxed max-w-xl mb-10 font-light">
              Especialistas en ingeniería, construcción y gestión de proyectos con altos estándares de calidad para toda Latinoamérica.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contacto"
                className="group bg-[#F59E0B] hover:bg-amber-400 text-white px-8 py-4 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 hover:shadow-2xl hover:shadow-amber-500/35 hover:-translate-y-0.5 flex items-center gap-2.5"
              >
                Solicitar Cotización
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/proyectos"
                className="border border-white/25 hover:border-white/50 text-white hover:bg-white/6 px-8 py-4 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 flex items-center gap-2"
              >
                Ver Proyectos <ChevronRight size={15} />
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-3">
            {[
              { label: "+100 proyectos", sub: "ejecutados con éxito en la región" },
              { label: "+15 años de experiencia", sub: "en ingeniería y construcción" },
              { label: "Sector público y privado", sub: "clientes en toda Latinoamérica" },
              { label: "Equipo multidisciplinario", sub: "ingenieros, arquitectos y especialistas" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-start gap-3.5 bg-white/7 backdrop-blur-sm border border-white/12 rounded-xl px-5 py-4 hover:bg-white/11 hover:border-white/20 transition-all duration-300 hover:-translate-x-1"
              >
                <CheckCircle2 className="text-[#F59E0B] shrink-0 mt-0.5" size={18} />
                <div>
                  <div className="text-white font-semibold text-sm font-display">{badge.label}</div>
                  <div className="text-slate-400/80 text-xs mt-0.5">{badge.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown size={14} className="animate-bounce" />
        </div>
      </section>

      {/* ── CLIENTS TICKER ───────────────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-8 overflow-hidden">
        <div className="text-center mb-7">
          <p className="text-slate-400 text-[10px] uppercase tracking-[0.22em] font-semibold">
            Empresas que confían en nosotros
          </p>
        </div>
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex animate-marquee whitespace-nowrap will-change-transform">
            {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
              <div key={i} className="mx-14 flex items-center shrink-0">
                <span className="text-slate-300 font-bold text-sm uppercase tracking-[0.12em] hover:text-[#12344D] transition-colors duration-300 cursor-default select-none">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="py-28 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <span className="text-[#F59E0B] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 block">Nuestros Servicios</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#12344D] leading-tight mb-5 font-display">
              Soluciones integrales<br />de ingeniería
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Desde el diagnóstico hasta la entrega, cubrimos cada etapa de tu proyecto con rigurosidad técnica y visión estratégica.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl p-8 border border-border hover:border-[#12344D]/15 hover:shadow-2xl hover:shadow-[#12344D]/6 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#F5F7FA] group-hover:bg-[#12344D] rounded-xl flex items-center justify-center mb-7 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#12344D]/25">
                  <Icon className="text-[#12344D] group-hover:text-white transition-colors duration-300" size={22} />
                </div>
                <h3 className="text-[#12344D] font-bold text-lg mb-3 font-display">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-7">{desc}</p>
                <Link
                  to="/servicios"
                  className="flex items-center gap-2 text-[#F59E0B] text-sm font-semibold opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300"
                >
                  Conocer más <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 border-2 border-[#12344D] text-[#12344D] hover:bg-[#12344D] hover:text-white px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 group"
            >
              Ver todos los servicios <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ──────────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-20">
            <span className="text-[#F59E0B] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 block">Cómo trabajamos</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#12344D] leading-tight mb-5 font-display">Nuestra metodología</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Un proceso estructurado que garantiza resultados predecibles y de alto valor en cada proyecto.
            </p>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute top-[28px] left-[8.33%] right-[8.33%] h-px bg-gradient-to-r from-transparent via-[#12344D]/15 to-transparent" />
            <div className="grid grid-cols-6 gap-6">
              {METHODOLOGY.map(({ step, title, desc }) => (
                <div key={step} className="relative group text-center">
                  <div className="relative z-10 w-14 h-14 rounded-full border-2 border-[#12344D]/15 group-hover:border-[#F59E0B] bg-white mx-auto flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#F59E0B]/20 mb-6">
                    <span className="text-[#F59E0B] font-bold text-xs font-display">{step}</span>
                  </div>
                  <h4 className="font-bold text-[#12344D] mb-2 text-sm font-display">{title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:hidden">
            {METHODOLOGY.map(({ step, title, desc }, i) => (
              <div key={step} className="flex gap-5 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-[#12344D]/20 bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <span className="text-[#F59E0B] font-bold text-xs font-display">{step}</span>
                  </div>
                  {i < METHODOLOGY.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-[#12344D]/15 to-transparent mt-3" />
                  )}
                </div>
                <div className="pt-2.5">
                  <h4 className="font-bold text-[#12344D] mb-1.5 font-display">{title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────────── */}
      <section className="py-28 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-[#F59E0B] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 block">Portafolio</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#12344D] leading-tight font-display">
                Proyectos<br />destacados
              </h2>
            </div>
            <Link
              to="/proyectos"
              className="self-start lg:self-auto border-2 border-[#12344D] text-[#12344D] hover:bg-[#12344D] hover:text-white px-6 py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 flex items-center gap-2 group"
            >
              Ver todos los proyectos <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROJECTS.map(({ img, title, location, type, budget, tall }) => (
              <div
                key={title}
                className={`group relative overflow-hidden rounded-2xl bg-slate-800 cursor-pointer ${tall ? "md:row-span-2" : ""}`}
                style={{ minHeight: tall ? "520px" : "300px" }}
              >
                <img
                  src={`https://images.unsplash.com/${img}?w=800&h=${tall ? "900" : "500"}&fit=crop&auto=format`}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071929]/95 via-[#071929]/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#F59E0B]/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full">
                    {type}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-lg mb-1.5 font-display leading-snug">{title}</h3>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-4">
                    <MapPin size={11} /><span>{location}</span>
                  </div>
                  <div className="flex items-center justify-between translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-white/60 text-xs font-medium">{budget}</span>
                    <Link
                      to="/proyectos"
                      className="bg-[#F59E0B] hover:bg-amber-400 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      Ver caso <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section ref={statsRef} className="py-28 bg-[#12344D] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 -right-24 w-96 h-96 border border-white/5 rounded-full" />
          <div className="absolute -bottom-32 -left-16 w-80 h-80 border border-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-48 h-48 border border-white/4 rounded-full -translate-y-1/2" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#F59E0B] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 block">Nuestro Impacto</span>
            <h2 className="text-4xl font-bold text-white font-display">Resultados que hablan por sí solos</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            {STATS.map(({ value, suffix, label }) => (
              <StatItem key={label} value={value} suffix={suffix} label={label} active={statsVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[360px_1fr] gap-16 items-start">
            <div>
              <span className="text-[#F59E0B] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 block">¿Por qué elegirnos?</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#12344D] leading-tight mb-6 font-display">
                El diferencial<br />ConstructuraCFV
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                No somos solo una constructora. Somos socios estratégicos que comprometemos resultados desde el primer día.
              </p>
              <div className="w-12 h-1 bg-[#F59E0B] rounded-full mb-8" />
              <Link
                to="/nosotros"
                className="inline-flex items-center gap-2 text-[#12344D] font-semibold text-sm hover:text-[#F59E0B] transition-colors group"
              >
                Conoce más sobre nosotros <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {REASONS.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="group flex gap-4 p-6 rounded-2xl border border-border hover:border-[#12344D]/10 hover:bg-[#F5F7FA] hover:shadow-lg hover:shadow-[#12344D]/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 group-hover:bg-[#F59E0B] flex items-center justify-center shrink-0 transition-all duration-300">
                    <Icon className="text-[#F59E0B] group-hover:text-white transition-colors duration-300" size={17} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#12344D] mb-1.5 text-sm font-display">{title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-28 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[#F59E0B] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 block">Testimonios</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#12344D] leading-tight font-display">
              Lo que dicen<br />nuestros clientes
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ name, role, company, text, rating, img }) => (
              <div
                key={name}
                className="bg-white rounded-2xl p-8 border border-border hover:shadow-2xl hover:shadow-[#12344D]/8 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={13} className="text-[#F59E0B] fill-[#F59E0B]" />
                  ))}
                </div>
                <blockquote className="text-slate-600 text-sm leading-relaxed flex-1 mb-8 italic">
                  &ldquo;{text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3.5 pt-6 border-t border-border">
                  <img
                    src={`https://images.unsplash.com/${img}?w=100&h=100&fit=crop&crop=face&auto=format`}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover bg-slate-200 ring-2 ring-[#12344D]/8"
                  />
                  <div>
                    <div className="font-bold text-[#12344D] text-sm font-display">{name}</div>
                    <div className="text-slate-400 text-xs mt-0.5">{role} · {company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative py-36 overflow-hidden bg-[#071929]">
        <img
          src="https://images.unsplash.com/photo-1601074231509-dce351c05199?w=1800&h=900&fit=crop&auto=format"
          alt="Modern construction project"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#12344D]/92 via-[#071929]/85 to-[#071929]/95" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#F59E0B]/60 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="text-[#F59E0B] text-[11px] font-bold uppercase tracking-[0.2em] mb-5 block">Contáctenos hoy</span>
          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-6 font-display">
            Hablemos sobre<br />tu próximo proyecto.
          </h2>
          <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            Cuéntanos tu visión. Nuestro equipo técnico te responderá en menos de 24 horas con una propuesta personalizada sin costo.
          </p>
          <Link
            to="/contacto"
            className="group bg-[#F59E0B] hover:bg-amber-400 text-white px-12 py-5 rounded-xl text-base font-bold tracking-wide transition-all duration-200 hover:shadow-2xl hover:shadow-amber-500/35 hover:-translate-y-0.5 inline-flex items-center gap-3"
          >
            Solicitar Cotización
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <p className="text-slate-500 text-xs mt-5 uppercase tracking-wider">
            Sin compromiso · Respuesta en 24h · Propuesta personalizada
          </p>
        </div>
      </section>
    </>
  );
}
