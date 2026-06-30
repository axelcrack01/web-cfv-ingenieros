import { Link } from "react-router";
import { ArrowLeft, HardHat } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#071929] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="w-24 h-24 bg-[#F59E0B]/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <HardHat className="text-[#F59E0B]" size={40} />
        </div>
        <p className="text-[#F59E0B] text-sm font-bold uppercase tracking-[0.2em] mb-3">Error 404</p>
        <h1 className="text-6xl font-bold text-white mb-4 font-display">Página no encontrada</h1>
        <p className="text-slate-400 text-lg mb-10 max-w-md mx-auto">
          La página que buscas no existe o fue movida. Vuelve al inicio para seguir explorando.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-amber-400 text-white px-8 py-4 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5"
        >
          <ArrowLeft size={16} /> Volver al inicio
        </Link>
      </div>
    </section>
  );
}
