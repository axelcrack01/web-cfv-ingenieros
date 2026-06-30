import { useState } from "react";
import { Link } from "react-router";
import { Calendar, Clock, Tag, ArrowRight, Search } from "lucide-react";
import PageHero from "../components/PageHero";

const CATEGORIES = ["Todos", "Ingeniería Civil", "Gestión de Proyectos", "Seguridad", "Innovación", "Tendencias"];

const ARTICLES = [
  {
    img: "photo-1778074762022-c33cc42f79ae",
    category: "Gestión de Proyectos",
    date: "12 Jun 2025",
    readTime: "6 min",
    title: "BIM Level 2 en proyectos latinoamericanos: ¿por qué ya no es opcional?",
    summary: "El modelado BIM dejó de ser una ventaja competitiva para convertirse en un requisito mínimo en proyectos de más de USD 2M. Analizamos cómo implementarlo correctamente y los errores más comunes del mercado.",
    author: "Ing. Rafael Torres",
    featured: true,
  },
  {
    img: "photo-1760161306014-e2dcc13cbdf8",
    category: "Seguridad",
    date: "5 Jun 2025",
    readTime: "4 min",
    title: "Cultura de cero accidentes: cómo ConstructuraCFV logró 3 años sin incidentes graves",
    summary: "Un sistema de gestión de seguridad efectivo no nace de normas, sino de cultura organizacional. Compartimos nuestra metodología OHSAS 18001 y los indicadores que usamos internamente.",
    author: "Arq. Claudia Fuentes",
    featured: false,
  },
  {
    img: "photo-1694521787162-5373b598945c",
    category: "Ingeniería Civil",
    date: "28 May 2025",
    readTime: "8 min",
    title: "Geotecnia en zona andina: los 5 errores que encarecen tus proyectos",
    summary: "Los estudios geotécnicos insuficientes generan el 60% de los sobrecostos en proyectos de infraestructura andina. Detallamos los estándares mínimos que debes exigir antes de iniciar cualquier obra.",
    author: "Ing. Marco Villanueva",
    featured: false,
  },
  {
    img: "photo-1694702740570-0a31ee1525c7",
    category: "Innovación",
    date: "20 May 2025",
    readTime: "5 min",
    title: "Drones en construcción: topografía, supervisión y control de avance en tiempo real",
    summary: "La fotogrametría con drones reduce en un 70% el tiempo de levantamiento topográfico y permite el control de avance semanal sin visitas al terreno. Aquí cómo lo usamos en nuestros proyectos.",
    author: "Ing. Ana Cristina Paz",
    featured: false,
  },
  {
    img: "photo-1723107638733-16ef49e5d4de",
    category: "Tendencias",
    date: "10 May 2025",
    readTime: "7 min",
    title: "Construcción sostenible en Latinoamérica: regulaciones 2025 y cómo prepararse",
    summary: "Colombia, Chile y Perú ya tienen normativas de edificación sostenible obligatorias para proyectos de más de 5,000 m². Analizamos los requisitos actuales y las certificaciones más rentables.",
    author: "Arq. Claudia Fuentes",
    featured: false,
  },
  {
    img: "photo-1758518729685-f88df7890776",
    category: "Gestión de Proyectos",
    date: "2 May 2025",
    readTime: "6 min",
    title: "Last Planner System: la metodología que redujo nuestros retrasos en un 85%",
    summary: "El sistema Last Planner es la herramienta más efectiva para controlar el cronograma de obra en tiempo real. Explicamos cómo lo implementamos y los indicadores PPC que monitoreamos semanalmente.",
    author: "Ing. Rafael Torres",
    featured: false,
  },
  {
    img: "photo-1557813282-bcd50093e38f",
    category: "Ingeniería Civil",
    date: "25 Abr 2025",
    readTime: "9 min",
    title: "Estructuras de concreto de alta resistencia: cuándo usarlas y cuándo evitarlas",
    summary: "El concreto f'c=280 kg/cm² no siempre es la mejor opción. Analizamos los factores técnicos y económicos que determinan la resistencia óptima según tipo de estructura y zona sísmica.",
    author: "Ing. Marco Villanueva",
    featured: false,
  },
  {
    img: "photo-1512187849-463fdb898f21",
    category: "Ingeniería Civil",
    date: "15 Abr 2025",
    readTime: "5 min",
    title: "Diseño de puentes en zonas sísmicas: criterios AASHTO vs. normas locales",
    summary: "La aplicación de AASHTO LRFD en países andinos genera debates técnicos constantes. Analizamos cuándo es mandatorio aplicar la norma internacional y cómo armonizarla con la normativa local.",
    author: "Ing. Ana Cristina Paz",
    featured: false,
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Ingeniería Civil": "bg-blue-100 text-blue-700",
  "Gestión de Proyectos": "bg-emerald-100 text-emerald-700",
  "Seguridad": "bg-red-100 text-red-700",
  "Innovación": "bg-purple-100 text-purple-700",
  "Tendencias": "bg-orange-100 text-orange-700",
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [search, setSearch] = useState("");

  const filtered = ARTICLES.filter(a => {
    const matchCat = activeCategory === "Todos" || a.category === activeCategory;
    const matchSearch = search === "" ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.summary.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered.find(a => a.featured);
  const rest = filtered.filter(a => !a.featured || activeCategory !== "Todos" || search !== "");

  return (
    <>
      <PageHero
        title="Conocimiento técnico para el sector construcción."
        subtitle="Artículos especializados sobre ingeniería, gestión de proyectos, seguridad, innovación y tendencias del sector, escritos por nuestros ingenieros."
        breadcrumb="Blog"
        imgId="photo-1723107638733-16ef49e5d4de"
      />

      {/* ── FILTERS + SEARCH ──────────────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-5 sticky top-[60px] z-40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(c => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeCategory === c
                    ? "bg-[#12344D] text-white"
                    : "bg-[#F5F7FA] text-slate-500 hover:bg-[#12344D]/8 hover:text-[#12344D]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar artículo..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 bg-[#F5F7FA] border border-border rounded-lg text-sm text-foreground placeholder-slate-400 focus:outline-none focus:border-[#12344D]/30 transition-colors w-56"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F7FA] min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Featured article */}
          {featured && activeCategory === "Todos" && search === "" && (
            <div className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-2xl hover:shadow-[#12344D]/6 transition-all duration-300 mb-8 grid lg:grid-cols-[1fr_480px]">
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5">
                  <span className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${CATEGORY_COLORS[featured.category] || "bg-slate-100 text-slate-600"}`}>
                    {featured.category}
                  </span>
                  <span className="bg-[#F59E0B]/10 text-[#F59E0B] text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                    Destacado
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-[#12344D] mb-4 font-display leading-snug">
                  {featured.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-7">{featured.summary}</p>
                <div className="flex items-center gap-5 text-xs text-slate-400 mb-7">
                  <span className="flex items-center gap-1.5"><Calendar size={11} className="text-[#F59E0B]" />{featured.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={11} className="text-[#F59E0B]" />{featured.readTime} lectura</span>
                  <span className="text-slate-500 font-medium">{featured.author}</span>
                </div>
                <Link
                  to="/blog"
                  className="group/btn inline-flex items-center gap-2 bg-[#12344D] hover:bg-[#F59E0B] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 self-start"
                >
                  Leer artículo <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative overflow-hidden bg-slate-200 min-h-[300px]">
                <img
                  src={`https://images.unsplash.com/${featured.img}?w=700&h=500&fit=crop&auto=format`}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          )}

          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory !== "Todos" || search !== "" ? filtered : rest).map(({ img, category, date, readTime, title, summary, author }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:shadow-[#12344D]/6 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative overflow-hidden h-48 bg-slate-200">
                  <img
                    src={`https://images.unsplash.com/${img}?w=600&h=400&fit=crop&auto=format`}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${CATEGORY_COLORS[category] || "bg-slate-100 text-slate-600"}`}>
                      {category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                    <span className="flex items-center gap-1.5"><Calendar size={10} className="text-[#F59E0B]" />{date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={10} className="text-[#F59E0B]" />{readTime}</span>
                  </div>
                  <h3 className="font-bold text-[#12344D] text-base mb-3 font-display leading-snug flex-1">
                    {title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-3">{summary}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-slate-400 text-xs font-medium">{author}</span>
                    <Link
                      to="/blog"
                      className="flex items-center gap-1.5 text-[#F59E0B] text-xs font-bold hover:gap-2.5 transition-all duration-200"
                    >
                      Leer más <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg">No se encontraron artículos.</p>
              <button
                onClick={() => { setActiveCategory("Todos"); setSearch(""); }}
                className="mt-4 text-[#F59E0B] text-sm font-semibold hover:underline"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#12344D]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-[#F59E0B] text-[11px] font-bold uppercase tracking-[0.2em] mb-4 block">Newsletter</span>
          <h2 className="text-4xl font-bold text-white mb-4 font-display">
            Recibe contenido técnico especializado
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Artículos, guías técnicas y noticias del sector en tu bandeja de entrada. Sin spam.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tucorreo@empresa.com"
              className="flex-1 bg-white/8 border border-white/15 focus:border-[#F59E0B]/50 rounded-xl px-5 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
            />
            <button className="bg-[#F59E0B] hover:bg-amber-400 text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-colors shrink-0">
              Suscribirse
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
