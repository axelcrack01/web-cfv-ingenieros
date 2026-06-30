import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Inicio", to: "/" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Servicios", to: "/servicios" },
  { label: "Proyectos", to: "/proyectos" },
  { label: "Clientes", to: "/clientes" },
  { label: "Blog", to: "/blog" },
  { label: "Contacto", to: "/contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 60);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [location.pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const solid = !isHome || scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-[#12344D]/98 backdrop-blur-md shadow-xl shadow-[#12344D]/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#F59E0B] rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform duration-200">
            <span className="text-white font-bold text-sm tracking-tight font-display">CFV</span>
          </div>
          <div>
            <span className="text-white font-bold text-lg tracking-tight leading-none block font-display">
              ConstructuraCFV
            </span>
            <span className="text-slate-400/80 text-[9px] uppercase tracking-[0.2em] font-medium">
              Ingeniería &amp; Construcción
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 relative group/link ${
                  isActive ? "text-[#F59E0B]" : "text-slate-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#F59E0B] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover/link:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            to="/contacto"
            className="bg-[#F59E0B] hover:bg-amber-400 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-px tracking-wide"
          >
            Solicitar Cotización
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2 hover:text-[#F59E0B] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#12344D] border-t border-white/10 px-6 py-4">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `block py-3 text-sm font-medium border-b border-white/5 last:border-0 transition-colors ${
                  isActive ? "text-[#F59E0B]" : "text-slate-300 hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contacto"
            className="block w-full mt-5 bg-[#F59E0B] hover:bg-amber-400 text-white py-3 rounded-lg text-sm font-semibold transition-colors text-center"
          >
            Solicitar Cotización
          </Link>
        </div>
      </div>
    </nav>
  );
}
