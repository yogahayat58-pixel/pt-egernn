import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const ContactPage: React.FC = () => {
  const { companyInfo, submitContactMessage, services } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: services[0]?.title || 'Fabrikasi Logam Presisi',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContactMessage({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      serviceInterest: formData.serviceInterest,
      message: formData.message
    });
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      serviceInterest: services[0]?.title || 'Fabrikasi Logam Presisi',
      message: ''
    });
  };

  return (
    <div className="pb-24 space-y-16">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white pt-10 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-35 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-slate-400">
            <Breadcrumbs items={[{ label: 'Kontak' }]} />
          </div>

          <div className="max-w-3xl space-y-4 mt-4">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-400">
              Hubungi Tim Rekayasa
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white">
              Diskusikan Kebutuhan Manufaktur & DFM Anda
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Tim engineering estimator kami siap memberikan asistensi kalkulasi beban kerja, toleransi pemesinan, dan penjadwalan lead time produksi secara profesional.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form (7 cols) & Info + Maps (5 cols) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-10 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                Formulir Pertanyaan & Permintaan Penawaran
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mt-1">
                Kirimkan Pesan atau Rincian Proyek
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Mohon lengkapi formulir di bawah ini. Tim kami akan merespons dalam waktu 1x24 jam kerja.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3">
                <div className="flex items-center gap-2 font-bold text-base text-emerald-700">
                  <CheckCircle2 className="w-6 h-6" />
                  <span>Pesan Berhasil Terkirim!</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                  Terima kasih telah menghubungi PT Industri Nusantara. Pesan Anda telah masuk ke sistem kami dan sedang ditinjau oleh tim engineering estimator.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  Kirim Pesan Lainnya
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ir. Dimas Suryo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">
                      Email Perusahaan *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="dimas@perusahaan.co.id"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">
                      Nomor Telepon / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+62 812-3456-7890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">
                      Nama Perusahaan / Institusi
                    </label>
                    <input
                      type="text"
                      placeholder="PT Astra Parts Indonesia"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1.5">
                    Layanan yang Diminati
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                  >
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} ({s.category})
                      </option>
                    ))}
                    <option value="Konsultasi Umum">Konsultasi Rekayasa Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1.5">
                    Rincian Pesan & Kebutuhan *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Sebutkan jenis material, estimasi dimensi, toleransi, volume produksi, atau tautan gambar CAD Anda..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm sm:text-base transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirimkan Formulir Penawaran</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Kerahasiaan dokumen teknis dilindungi perjanjian Non-Disclosure Agreement (NDA).</span>
                </div>

              </form>
            )}
          </div>

          {/* Info & Map Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Card */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-5">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 font-display">
                Kantor Pusat & Fasilitas Pabrik
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold">Alamat Fasilitas:</strong>
                    <span>{companyInfo.address}</span>
                    <span className="block text-slate-500">{companyInfo.city}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold">Telepon Kantor:</strong>
                    <a href={`tel:${companyInfo.phone}`} className="hover:text-blue-600 transition-colors">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold">Email Korespondensi:</strong>
                    <a href={`mailto:${companyInfo.email}`} className="hover:text-blue-600 transition-colors">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold">Jam Operasional:</strong>
                    <span>{companyInfo.workingHours}</span>
                    <span className="block text-[11px] text-emerald-600 font-medium mt-0.5">
                      Tim Siaga Tanggap Darurat Shutdown 24/7
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Chat */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Halo%20PT%20Industri%20Nusantara,%20kami%20ingin%20berdiskusi%20kebutuhan%20rekayasa%20manufaktur.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Hubungi via WhatsApp Resmi</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Interactive Location Visual Map Card */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800 text-sm block">Peta Lokasi Fasilitas</span>
                  <span className="text-[11px] text-slate-400">Kawasan Industri MM2100 Cikarang</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Kawasan+Industri+MM2100+Cikarang"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* High-Tech Blueprint Vector Map Representation */}
              <div className="h-56 bg-slate-900 relative overflow-hidden flex items-center justify-center">
                {/* SVG Blueprint Industrial Map */}
                <svg className="w-full h-full object-cover" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="240" fill="#0B132B" />
                  {/* Highway / Toll Road (Jakarta-Cikampek) */}
                  <path d="M 0 160 Q 200 130 400 140" stroke="#334155" strokeWidth="18" />
                  <path d="M 0 160 Q 200 130 400 140" stroke="#F97316" strokeWidth="2" strokeDasharray="6 4" />
                  
                  {/* Industrial Arterial Roads */}
                  <line x1="200" y1="135" x2="200" y2="40" stroke="#1E293B" strokeWidth="12" />
                  <line x1="200" y1="135" x2="200" y2="40" stroke="#0284C7" strokeWidth="2" />
                  
                  <line x1="100" y1="90" x2="320" y2="90" stroke="#1E293B" strokeWidth="8" />
                  <line x1="100" y1="90" x2="320" y2="90" stroke="#64748B" strokeWidth="1.5" />

                  {/* Factory Plant Plots */}
                  <rect x="80" y="30" width="70" height="40" rx="3" fill="#1C2541" stroke="#334155" strokeWidth="1" />
                  <rect x="230" y="30" width="90" height="45" rx="3" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.5" />
                  
                  {/* Marker Pin on Our Plant */}
                  <g transform="translate(275, 45)">
                    <circle cx="0" cy="0" r="14" fill="#F97316" opacity="0.3" />
                    <circle cx="0" cy="0" r="6" fill="#F97316" />
                    <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
                  </g>
                  
                  <text x="220" y="22" fill="#38BDF8" fontSize="10" fontFamily="sans-serif" fontWeight="bold">
                    PT INDUSTRI NUSANTARA
                  </text>
                  <text x="15" y="185" fill="#94A3B8" fontSize="9" fontFamily="monospace">
                    JALAN TOL JAKARTA - CIKAMPEK KM 24
                  </text>
                </svg>

                {/* Direct Google Maps Direction Pill */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-md flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800">Koordinat: -6.2991, 107.0858</span>
                  <a
                    href="https://maps.google.com/?q=Kawasan+Industri+MM2100+Cikarang"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-blue-600 hover:underline flex items-center gap-1"
                  >
                    Petunjuk Arah
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
