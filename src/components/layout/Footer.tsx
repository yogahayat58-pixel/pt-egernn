import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2, Shield, ExternalLink } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Footer: React.FC = () => {
  const { companyInfo, navigateTo, services } = useApp();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm tracking-tight shadow-sm">
                IN
              </div>
              <span className="text-xl font-bold text-white tracking-tight font-display">
                {companyInfo.name}
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Perusahaan manufaktur rekayasa presisi, fabrikasi logam berat, pemesinan CNC 5-Axis, dan solusi otomasi industri berstandar internasional ISO 9001:2015 di kawasan industri strategis Cikarang Barat.
            </p>

            {/* Certifications badges */}
            <div className="pt-2">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                Akreditasi & Standar Industri
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {companyInfo.certifications.map((cert, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-slate-200"
                  >
                    <Shield className="w-3 h-3 text-blue-400" />
                    <span>{cert}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Navigasi Cepat (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Navigasi
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigateTo('beranda')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400 hover:translate-x-1 duration-150 inline-block"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('tentang')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400 hover:translate-x-1 duration-150 inline-block"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('layanan')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400 hover:translate-x-1 duration-150 inline-block"
                >
                  Layanan & Kapabilitas
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('proyek')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400 hover:translate-x-1 duration-150 inline-block"
                >
                  Portofolio Proyek
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('artikel')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400 hover:translate-x-1 duration-150 inline-block"
                >
                  Artikel & Wawasan
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('kontak')}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400 hover:translate-x-1 duration-150 inline-block"
                >
                  Hubungi Rekayasa
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('admin')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-blue-400 font-medium hover:translate-x-1 duration-150 inline-block"
                >
                  Dashboard Admin
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Layanan Manufaktur (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Layanan Utama
            </h3>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => navigateTo(`layanan/${service.slug}`)}
                    className="hover:text-white transition-colors cursor-pointer text-slate-400 text-left line-clamp-1 hover:translate-x-1 duration-150 inline-block"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Kontak & Jam Kerja (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Fasilitas & Kantor
            </h3>
            
            <div className="space-y-2.5 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {companyInfo.address}, {companyInfo.city}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-white transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400 leading-tight">
                  {companyInfo.workingHours}
                </span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-200 block mb-1.5">
                Wawasan Teknik & Manufaktur
              </span>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-1.5">
                <input
                  type="email"
                  required
                  placeholder="Email perusahaan Anda..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 w-full"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors shrink-0 cursor-pointer flex items-center justify-center"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Terima kasih telah berlangganan bulletin kami.</span>
                </div>
              )}
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {companyInfo.name}. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-5">
            <a
              href={companyInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={companyInfo.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              Instagram
            </a>
            <a
              href={companyInfo.socials.youtube}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              YouTube
            </a>
            <button
              onClick={() => navigateTo('kontak')}
              className="hover:text-slate-300 transition-colors flex items-center gap-1"
            >
              <span>Peta Lokasi Fasilitas</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
