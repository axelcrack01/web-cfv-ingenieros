import { Link } from "react-router";
import { MapPin, Phone, Mail, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const SERVICES_LINKS = [
  "Obras Civiles", "Edificaciones", "Supervisión de Obras",
  "Gestión de Proyectos", "Consultoría Técnica", "Desarrollo Inmobiliario",
];

const COMPANY_LINKS = [
  { label: "Nosotros", to: "/nosotros" },
  { label: "Proyectos", to: "/proyectos" },
  { label: "Clientes", to: "/clientes" },
  { label: "Blog Técnico", to: "/blog" },
  { label: "Trabaja con nosotros", to: "/contacto" },
  { label: "Contacto", to: "/contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#071929] text-slate-400">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[280px_1fr_1fr_280px] gap-12 mb-16">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#F59E0B] rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20">
                <span className="text-white font-bold text-sm font-display">CFV</span>
              </div>
              <div>
                <span className="text-white font-bold text-base font-display block leading-snug">ConstructuraCFV</span>
                <span className="text-slate-600 text-[9px] uppercase tracking-[0.2em]">Ingeniería &amp; Construcción</span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-7">
              Líderes en ingeniería y construcción en Latinoamérica, con más de 15 años transformando ciudades y comunidades con proyectos de alto impacto.
            </p>
            <div className="flex gap-2.5">
              {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Red social"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#F59E0B] flex items-center justify-center transition-all duration-200 hover:scale-105"
                >
                  <Icon size={14} className="text-slate-500" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-xs mb-6 font-display uppercase tracking-[0.15em]">Servicios</h4>
            <ul className="space-y-3">
              {SERVICES_LINKS.map(s => (
                <li key={s}>
                  <Link
                    to="/servicios"
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200 flex items-center gap-2 group/link"
                  >
                    <span className="w-3 h-px bg-slate-700 group-hover/link:bg-[#F59E0B] group-hover/link:w-4 transition-all duration-200" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-xs mb-6 font-display uppercase tracking-[0.15em]">Empresa</h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200 flex items-center gap-2 group/link"
                  >
                    <span className="w-3 h-px bg-slate-700 group-hover/link:bg-[#F59E0B] group-hover/link:w-4 transition-all duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="text-white font-bold text-xs mb-6 font-display uppercase tracking-[0.15em]">Contacto</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#F59E0B] shrink-0 mt-0.5" />
                <span className="text-slate-500 text-sm leading-relaxed">
                  Calle Las Acacias 131 (Oficina Principal), San Juan de Miraflores — Lima, Perú
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#F59E0B] shrink-0" />
                <a href="tel:+5112345678" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                  +51 912 830 351
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-[#F59E0B] shrink-0" />
                <a href="mailto:contacto@constructuracfv.com" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                  contacto@constructuracfv.com
                </a>
              </li>
            </ul>

            <h4 className="text-white font-bold text-xs mb-4 font-display uppercase tracking-[0.15em]">Newsletter</h4>
            <p className="text-slate-600 text-xs mb-3 leading-relaxed">
              Artículos técnicos, noticias del sector y actualización de proyectos.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="tu@empresa.com"
                className="bg-white/5 border border-white/8 hover:border-white/15 focus:border-[#F59E0B]/40 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-700 focus:outline-none transition-colors duration-200"
              />
              <button className="bg-[#F59E0B] hover:bg-amber-400 text-white px-4 py-2.5 rounded-lg text-xs font-bold tracking-wide transition-colors duration-200">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-700 text-xs">
            © 2026 ConstructuraCFV S.A.C. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {["Política de Privacidad", "Términos de Uso", "Cookies"].map(link => (
              <a key={link} href="#" className="text-slate-700 hover:text-slate-500 text-xs transition-colors duration-200">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
