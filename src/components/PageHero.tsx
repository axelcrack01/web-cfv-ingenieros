import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
  imgId: string;
  imgHeight?: number;
}

export default function PageHero({ title, subtitle, breadcrumb, imgId, imgHeight = 700 }: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-24 bg-[#071929] overflow-hidden">
      <img
        src={`https://images.unsplash.com/${imgId}?w=1800&h=${imgHeight}&fit=crop&auto=format`}
        alt={breadcrumb}
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071929]/96 via-[#12344D]/80 to-[#071929]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071929]/60 via-transparent to-transparent" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#F59E0B]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 text-slate-500 text-xs mb-6 uppercase tracking-widest">
          <Link to="/" className="hover:text-slate-300 transition-colors">Inicio</Link>
          <ChevronRight size={12} />
          <span className="text-[#F59E0B]">{breadcrumb}</span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 font-display max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-slate-300 text-lg leading-relaxed max-w-xl font-light">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
