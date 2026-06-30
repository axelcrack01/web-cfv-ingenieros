import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";

const PROJECT_TYPES = [
  "Obras civiles / infraestructura",
  "Edificación comercial",
  "Edificación residencial",
  "Desarrollo inmobiliario",
  "Supervisión de obra",
  "Gestión de proyectos",
  "Consultoría técnica",
  "Otro",
];

type FormData = {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  tipoProyecto: string;
  mensaje: string;
};

export default function Contacto() {
  const [form, setForm] = useState<FormData>({
    nombre: "", empresa: "", email: "", telefono: "", tipoProyecto: "", mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Cuéntanos sobre tu proyecto."
        subtitle="Nuestro equipo técnico revisará tu consulta y te contactará en menos de 24 horas con una propuesta preliminar sin costo ni compromiso."
        breadcrumb="Contacto"
        imgId="photo-1601074231509-dce351c05199"
      />

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12">

            {/* ── FORM ──────────────────────────────────────────────────── */}
            <div>
              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-border shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="text-green-500" size={36} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#12344D] mb-3 font-display">¡Mensaje enviado!</h3>
                    <p className="text-slate-500 text-base leading-relaxed max-w-sm mx-auto">
                      Gracias por contactarnos. Un ingeniero de nuestro equipo te escribirá en las próximas 24 horas hábiles.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ nombre: "", empresa: "", email: "", telefono: "", tipoProyecto: "", mensaje: "" }); }}
                      className="mt-8 text-[#F59E0B] font-semibold text-sm hover:underline"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-[#12344D] mb-2 font-display">Formulario de contacto</h2>
                    <p className="text-slate-500 text-sm mb-8">Todos los campos son requeridos. Respuesta garantizada en 24h hábiles.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-[#12344D] mb-2">Nombre completo *</label>
                          <input
                            name="nombre"
                            value={form.nombre}
                            onChange={handleChange}
                            required
                            placeholder="Ing. Juan García"
                            className="w-full bg-[#F5F7FA] border border-border focus:border-[#12344D]/30 focus:bg-white rounded-xl px-4 py-3 text-sm text-foreground placeholder-slate-400 focus:outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#12344D] mb-2">Empresa *</label>
                          <input
                            name="empresa"
                            value={form.empresa}
                            onChange={handleChange}
                            required
                            placeholder="Nombre de tu empresa"
                            className="w-full bg-[#F5F7FA] border border-border focus:border-[#12344D]/30 focus:bg-white rounded-xl px-4 py-3 text-sm text-foreground placeholder-slate-400 focus:outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-[#12344D] mb-2">Correo electrónico *</label>
                          <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="tu@empresa.com"
                            className="w-full bg-[#F5F7FA] border border-border focus:border-[#12344D]/30 focus:bg-white rounded-xl px-4 py-3 text-sm text-foreground placeholder-slate-400 focus:outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#12344D] mb-2">Teléfono / WhatsApp *</label>
                          <input
                            name="telefono"
                            type="tel"
                            value={form.telefono}
                            onChange={handleChange}
                            required
                            placeholder="+51 999 000 000"
                            className="w-full bg-[#F5F7FA] border border-border focus:border-[#12344D]/30 focus:bg-white rounded-xl px-4 py-3 text-sm text-foreground placeholder-slate-400 focus:outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#12344D] mb-2">Tipo de proyecto *</label>
                        <select
                          name="tipoProyecto"
                          value={form.tipoProyecto}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#F5F7FA] border border-border focus:border-[#12344D]/30 focus:bg-white rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Selecciona el tipo de proyecto</option>
                          {PROJECT_TYPES.map(t => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#12344D] mb-2">Descripción del proyecto *</label>
                        <textarea
                          name="mensaje"
                          value={form.mensaje}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Descríbenos tu proyecto: ubicación, dimensiones, plazo estimado, presupuesto referencial y cualquier información relevante..."
                          className="w-full bg-[#F5F7FA] border border-border focus:border-[#12344D]/30 focus:bg-white rounded-xl px-4 py-3 text-sm text-foreground placeholder-slate-400 focus:outline-none transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="group w-full bg-[#F59E0B] hover:bg-amber-400 text-white py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/30 flex items-center justify-center gap-3"
                      >
                        Enviar consulta
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>

                      <p className="text-slate-400 text-xs text-center">
                        Al enviar, aceptas nuestra política de privacidad. No compartimos tus datos con terceros.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* ── CONTACT INFO ──────────────────────────────────────────── */}
            <div className="space-y-5">
              {/* Contact cards */}
              <div className="bg-[#12344D] rounded-2xl p-7 text-white">
                <h3 className="font-bold text-xl mb-6 font-display">Información de contacto</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F59E0B] rounded-lg flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm font-display mb-0.5">Oficina Principal</p>
                      <p className="text-slate-300 text-sm leading-relaxed">Calle Las Acacias 131<br />San Juan de Miraflores, Lima — Perú</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F59E0B] rounded-lg flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm font-display mb-0.5">Teléfono</p>
                      <a href="tel:+5112345678" className="text-slate-300 text-sm hover:text-white transition-colors">+51 912 830 351</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F59E0B] rounded-lg flex items-center justify-center shrink-0">
                      <MessageCircle size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm font-display mb-0.5">WhatsApp</p>
                      <a href="https://wa.me/51912830351" target="_blank" rel="noopener noreferrer" className="text-slate-300 text-sm hover:text-white transition-colors">+51 912 830 351</a>
                      <p className="text-slate-500 text-xs mt-0.5">Respuesta en menos de 2 horas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F59E0B] rounded-lg flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm font-display mb-0.5">Correo corporativo</p>
                      <a href="mailto:contacto@constructuracfv.com" className="text-slate-300 text-sm hover:text-white transition-colors">contacto@constructuracfv.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F59E0B] rounded-lg flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm font-display mb-0.5">Horario de atención</p>
                      <p className="text-slate-300 text-sm">Lun – Vie: 8:00 AM – 6:00 PM</p>
                      <p className="text-slate-300 text-sm">Sáb: 9:00 AM – 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Offices */}
              <div className="bg-white rounded-2xl p-6 border border-border">
                <h4 className="font-bold text-[#12344D] mb-4 font-display">Sucursales</h4>
                <div className="space-y-4">
                  {[
                    { city: "Apurímac, Perú", addr: "Jr. Guillermo Cáceres T. 675 Andahuaylas" }
                  ].map(({ city, addr }) => (
                    <div key={city} className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-2 shrink-0" />
                      <div>
                        <p className="font-semibold text-[#12344D] text-sm font-display">{city}</p>
                        <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{addr}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Commitment */}
              <div className="bg-[#F59E0B]/8 border border-[#F59E0B]/20 rounded-2xl p-6">
                <h4 className="font-bold text-[#12344D] mb-4 font-display">Nuestro compromiso</h4>
                <div className="space-y-3">
                  {[
                    "Respuesta en menos de 24 horas hábiles",
                    "Propuesta técnica sin costo ni compromiso",
                    "Reunión de diagnóstico con ingeniero senior",
                    "Confidencialidad total de tu información",
                  ].map(item => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="text-[#F59E0B] shrink-0 mt-0.5" size={14} />
                      <span className="text-slate-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP PLACEHOLDER ───────────────────────────────────────────────── */}
      <section className="bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h3 className="font-bold text-[#12344D] text-xl mb-6 font-display text-center">Nuestra ubicación en Lima</h3>
          <div className="rounded-2xl overflow-hidden border border-border h-80 relative bg-[#F5F7FA] flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?w=1400&h=500&fit=crop&auto=format"
              alt="Ubicación Lima"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="relative z-10 text-center">
              <div className="w-12 h-12 bg-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-3 shadow-xl">
                <MapPin className="text-white" size={22} />
              </div>
              <p className="bg-white/90 backdrop-blur-sm text-[#12344D] font-bold text-sm px-5 py-2.5 rounded-full shadow-lg font-display">
                ConstructuraCFV · San Juan de Miraflores, Lima
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
