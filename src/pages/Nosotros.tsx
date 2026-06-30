import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle2, Target, Eye, Heart } from "lucide-react";
import PageHero from "../components/PageHero";

// ─── Data ────────────────────────────────────────────────────────────────────

const VALORES = [
  { Icon: CheckCircle2, title: "Integridad", desc: "Actuamos con transparencia y honestidad en cada relación con nuestros clientes, proveedores y colaboradores." },
  { Icon: Target, title: "Excelencia", desc: "Buscamos la mejora continua y los más altos estándares de calidad en cada proyecto que ejecutamos." },
  { Icon: Eye, title: "Innovación", desc: "Adoptamos tecnología de vanguardia y metodologías ágiles para entregar soluciones que superen las expectativas." },
  { Icon: Heart, title: "Compromiso", desc: "Nos involucramos de manera total en cada proyecto, tratando los objetivos del cliente como propios." },
];

const HISTORIA = [
  { year: "2009", title: "Fundación", desc: "ConstructuraCFV nace en Lima con un equipo de 5 ingenieros civiles especializados en infraestructura vial." },
  { year: "2012", title: "Expansión regional", desc: "Apertura de operaciones en Colombia y Ecuador. Primer proyecto de más de USD 5M: Vía expresa Norte, Bogotá." },
  { year: "2015", title: "Certificación ISO 9001", desc: "Obtención de la certificación de calidad internacional y lanzamiento de la unidad de Gestión de Proyectos PMI." },
  { year: "2018", title: "Desarrollo inmobiliario", desc: "Creación de la unidad de Desarrollo Inmobiliario. Primer complejo residencial premium en Santiago de Chile." },
  { year: "2021", title: "Tecnología BIM", desc: "Adopción total de metodología BIM Level 2 en todos los proyectos. Más de 60 proyectos ejecutados." },
  { year: "2024", title: "Hoy: Liderazgo", desc: "Más de 100 proyectos, 50 clientes y presencia en 6 países de Latinoamérica. Referentes del sector." },
];

const EQUIPO = [
  { name: "Ing. Marco Villanueva", role: "Gerente General & Fundador", img: "photo-1472099645785-5658abf4ff4e", exp: "25 años de experiencia" },
  { name: "Arq. Claudia Fuentes", role: "Directora de Proyectos", img: "photo-1573496359142-b8d87734a5a2", exp: "18 años de experiencia" },
  { name: "Ing. Rafael Torres", role: "Director de Obras Civiles", img: "photo-1560250097-0b93528c311a", exp: "20 años de experiencia" },
  { name: "Ing. Ana Cristina Paz", role: "Jefa de Supervisión Técnica", img: "photo-1580489944761-15a19d654956", exp: "15 años de experiencia" },
];

const STATS = [
  { value: 15, suffix: "+", label: "Años de experiencia" },
  { value: 100, suffix: "+", label: "Proyectos ejecutados" },
  { value: 50, suffix: "+", label: "Clientes satisfechos" },
  { value: 98, suffix: "%", label: "Cumplimiento de plazos" },
];

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
  const count = useCountUp(value, 2000, active);
  return (
    <div className="text-center">
      <div className="text-5xl font-bold text-[#12344D] mb-2 font-display">
        {count}<span className="text-[#F59E0B]">{suffix}</span>
      </div>
      <div className="w-6 h-px bg-[#F59E0B]/60 mx-auto mb-2" />
      <p className="text-slate-500 text-sm">{label}</p>
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function Nosotros() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.2 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageHero
        title="Construimos confianza desde hace más de 15 años."
        subtitle="Somos una empresa de ingeniería y construcción comprometida con la excelencia técnica, la innovación y el impacto positivo en las comunidades donde operamos."
        breadcrumb="Nosotros"
        imgId="photo-1758518729685-f88df7890776"
      />

      {/* ── QUIÉNES SOMOS ────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#F59E0B] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 block">Quiénes somos</span>
              <h2 className="text-4xl font-bold text-[#12344D] mb-6 font-display leading-tight">
                Más que una constructora,<br />somos tu socio estratégico.
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-5">
                Fundada en 2009 en Lima, Perú, ConstructuraCFV es una empresa de ingeniería y construcción con presencia activa en seis países de Latinoamérica. Nos especializamos en proyectos de alta complejidad técnica que requieren gestión rigurosa, calidad certificada y cumplimiento estricto de plazos.
              </p>
              <p className="text-slate-500 text-base leading-relaxed mb-8">
                Con más de 100 proyectos ejecutados y un portafolio que abarca desde infraestructura vial hasta desarrollos inmobiliarios premium, nos hemos consolidado como referentes en el mercado latinoamericano de construcción e ingeniería.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Más de 100 proyectos entregados en 6 países",
                  "Certificación ISO 9001 y metodología PMI",
                  "Tecnología BIM Level 2 en todos los proyectos",
                  "Equipo de más de 150 profesionales especializados",
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#F59E0B] shrink-0" size={16} />
                    <span className="text-slate-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1694521787162-5373b598945c?w=800&h=600&fit=crop&auto=format"
                  alt="ConstructuraCFV team on site"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#12344D] text-white rounded-2xl px-6 py-5 shadow-xl hidden lg:block">
                <div className="text-4xl font-bold font-display text-[#F59E0B]">15+</div>
                <div className="text-sm text-slate-300 mt-1">años de experiencia<br />en ingeniería</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section ref={statsRef} className="py-20 bg-[#F5F7FA] border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {STATS.map(({ value, suffix, label }) => (
              <StatItem key={label} value={value} suffix={suffix} label={label} active={statsVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MISIÓN, VISIÓN, VALORES ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[#F59E0B] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 block">Nuestra esencia</span>
            <h2 className="text-4xl font-bold text-[#12344D] font-display">Misión, Visión y Valores</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Misión */}
            <div className="bg-[#12344D] rounded-2xl p-8 text-white">
              <div className="w-12 h-12 bg-[#F59E0B] rounded-xl flex items-center justify-center mb-6">
                <Target size={22} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display">Misión</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Ejecutar proyectos de ingeniería y construcción con los más altos estándares de calidad técnica, cumplimiento de plazos y transparencia, generando valor sostenible para nuestros clientes, colaboradores y las comunidades donde operamos.
              </p>
            </div>
            {/* Visión */}
            <div className="bg-[#F5F7FA] rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 bg-[#12344D] rounded-xl flex items-center justify-center mb-6">
                <Eye size={22} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display text-[#12344D]">Visión</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Ser la empresa de ingeniería y construcción más confiable y reconocida de Latinoamérica al 2030, referentes en innovación tecnológica, gestión de proyectos de alta complejidad y desarrollo sostenible del entorno urbano.
              </p>
            </div>
            {/* Propósito */}
            <div className="bg-[#F59E0B] rounded-2xl p-8 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Heart size={22} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display">Propósito</h3>
              <p className="text-white/85 text-sm leading-relaxed">
                Transformar el entorno urbano de Latinoamérica mediante proyectos de ingeniería que mejoren la calidad de vida de millones de personas, construyendo ciudades más modernas, seguras y resilientes.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALORES.map(({ Icon, title, desc }) => (
              <div key={title} className="group p-6 rounded-2xl border border-border hover:border-[#12344D]/15 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-11 h-11 bg-[#F59E0B]/10 group-hover:bg-[#F59E0B] rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="text-[#F59E0B] group-hover:text-white transition-colors duration-300" size={18} />
                </div>
                <h4 className="font-bold text-[#12344D] mb-2 font-display">{title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HISTORIA ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[#F59E0B] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 block">Nuestra trayectoria</span>
            <h2 className="text-4xl font-bold text-[#12344D] font-display">Historia de ConstructuraCFV</h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#12344D]/20 via-[#12344D]/10 to-transparent -translate-x-1/2" />
            <div className="space-y-8">
              {HISTORIA.map(({ year, title, desc }, i) => (
                <div
                  key={year}
                  className={`flex flex-col lg:flex-row gap-6 lg:gap-0 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className={`lg:w-1/2 ${i % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                    <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow duration-300">
                      <span className="text-[#F59E0B] text-2xl font-bold font-display">{year}</span>
                      <h4 className="text-[#12344D] font-bold text-lg mt-1 mb-2 font-display">{title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex lg:w-0 items-start justify-center relative">
                    <div className="w-4 h-4 rounded-full bg-[#F59E0B] border-4 border-white shadow-md mt-6 shrink-0" />
                  </div>
                  <div className="lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EQUIPO ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[#F59E0B] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 block">Nuestro equipo</span>
            <h2 className="text-4xl font-bold text-[#12344D] font-display">Profesionales que lideran</h2>
            <p className="text-slate-500 mt-4 text-lg leading-relaxed">
              Un equipo directivo con décadas de experiencia en proyectos de alta complejidad a nivel regional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EQUIPO.map(({ name, role, img, exp }) => (
              <div key={name} className="group text-center">
                <div className="relative overflow-hidden rounded-2xl bg-slate-200 aspect-[3/4] mb-5">
                  <img
                    src={`https://images.unsplash.com/${img}?w=400&h=533&fit=crop&crop=face&auto=format`}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12344D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-white/80 text-xs">{exp}</span>
                  </div>
                </div>
                <h4 className="font-bold text-[#12344D] font-display">{name}</h4>
                <p className="text-slate-500 text-sm mt-1">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#12344D]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-5 font-display">
            ¿Listo para trabajar con nosotros?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            Cuéntanos sobre tu proyecto y un miembro de nuestro equipo directivo te contactará en 24 horas.
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
