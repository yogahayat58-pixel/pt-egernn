import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Award,
  Users,
  Clock,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Star,
  ExternalLink,
  Cpu,
  Flame,
  Zap,
  Bot,
  Activity,
  Compass,
  Sliders,
  Wrench,
  Building2,
  Calendar,
  User,
  Quote
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { StatsCounter } from '../components/common/StatsCounter';
import { IndustrialImage } from '../components/common/IndustrialImage';

export const HomePage: React.FC = () => {
  const {
    companyInfo,
    services,
    projects,
    articles,
    testimonials,
    clients,
    navigateTo
  } = useApp();

  // Testimonial slider state
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    if (!testimonials || testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (testimonials.length ? (prev + 1) % testimonials.length : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials]);

  const nextTestimonial = () => {
    if (!testimonials.length) return;
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (!testimonials.length) return;
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[currentTestimonialIndex] || testimonials[0];

  // Icon map for services
  const getServiceIcon = (iconName: string) => {
    const key = (iconName || '').toLowerCase();
    switch (key) {
      case 'flame': return <Flame className="w-6 h-6 text-blue-600" />;
      case 'cpu': return <Cpu className="w-6 h-6 text-blue-600" />;
      case 'zap': return <Zap className="w-6 h-6 text-blue-600" />;
      case 'bot': return <Bot className="w-6 h-6 text-blue-600" />;
      case 'activity': return <Activity className="w-6 h-6 text-blue-600" />;
      case 'compass': return <Compass className="w-6 h-6 text-blue-600" />;
      case 'sliders': return <Sliders className="w-6 h-6 text-blue-600" />;
      case 'wrench': return <Wrench className="w-6 h-6 text-blue-600" />;
      default: return <Cpu className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 md:pt-16 pb-12 overflow-hidden">
        {/* Subtle background ambient blueprint glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute -top-20 left-10 w-72 h-72 bg-sky-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Quiet Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold tracking-wide shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>{companyInfo.heroBadge}</span>
              </div>

              {/* Display Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] font-display text-balance">
                {companyInfo.heroTitle}
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {companyInfo.heroDescription}
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => navigateTo('kontak')}
                  className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2 group whitespace-nowrap"
                >
                  <span>Hubungi Tim Rekayasa</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => navigateTo('layanan')}
                  className="px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-xs transition-all duration-200 cursor-pointer whitespace-nowrap"
                >
                  Lihat Seluruh Layanan
                </button>
              </div>

              {/* Quick Trust Kicker */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600 font-medium">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Akreditasi ISO 9001 & ASME</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>TKDN Industri &gt; 68%</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span>Kesiapan Darurat 24/7</span>
                </div>
              </div>

            </div>

            {/* Right Industrial Visual & Floating Metric Cards (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] bg-slate-900 group">
                <IndustrialImage
                  type="hero"
                  alt="Fasilitas Manufaktur Modern PT Industri Nusantara"
                  className="w-full h-full"
                />

                {/* Ambient Corner Flare */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
              </div>

              {/* Floating Card 1: 20+ Tahun Pengalaman (Top Right Offset) */}
              <div className="absolute -top-5 -right-4 sm:-right-6 glass-panel rounded-xl p-3.5 shadow-lg border border-slate-200/90 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-extrabold text-slate-900 tabular-nums">20+ Tahun</div>
                  <div className="text-[11px] text-slate-500 font-medium">Pengalaman Industri</div>
                </div>
              </div>

              {/* Floating Card 2: 500+ Project & 98% Client Satisfaction (Bottom Left Offset) */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 glass-panel rounded-xl p-3.5 shadow-xl border border-slate-200/90 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-extrabold text-slate-900 tabular-nums">500+ Proyek</div>
                  <div className="text-[11px] text-slate-500 font-medium">98% Client Satisfaction</div>
                </div>
              </div>

              {/* Floating Card 3: ISO Certified (Top Left Overlay) */}
              <div className="absolute top-4 left-4 glass-panel bg-slate-950/85 backdrop-blur-md rounded-lg px-3 py-1.5 shadow-md border border-white/20 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white tracking-wide">ISO Certified (9001:2015)</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 2. SECTION CLIENTS & MITRA INDUSTRI */}
      <section className="py-6 border-y border-slate-200/80 bg-slate-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="text-xs uppercase font-bold tracking-widest text-slate-400">
              Dipercaya Oleh Korporasi Terdepan Lintas Sektor
            </span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/70 hover:bg-white border border-slate-200/60 hover:border-slate-300 transition-all duration-200 shadow-2xs group cursor-default"
              >
                <span className="font-extrabold text-slate-700 group-hover:text-blue-600 transition-colors text-xs sm:text-sm tracking-wider uppercase text-center">
                  {client.logoText}
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5 text-center">
                  {client.industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECTION TENTANG KAMI (2 KOLOM) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Kolom Kiri: Visual Workshop & Workshop Spec */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-[4/3]">
              <IndustrialImage
                type="cnc"
                alt="Workshop Fabrikasi Logam PT Industri Nusantara"
                className="w-full h-full"
              />
            </div>
            
            {/* Overlay Specs Card */}
            <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between text-xs sm:text-sm">
              <div>
                <span className="text-slate-500 block">Luas Fasilitas Terpadu</span>
                <strong className="text-slate-900 font-bold">12.000 m² Bengkel Kerja</strong>
              </div>
              <div className="text-right">
                <span className="text-slate-500 block">Kapasitas Fabrikasi</span>
                <strong className="text-blue-600 font-bold">350 Ton / Bulan</strong>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Narasi Perusahaan, Visi & Misi */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-blue-600">
                Profil PT Industri Nusantara
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display text-balance">
                Dua Dekade Membangun Fondasi Rekayasa Manufaktur Nasional
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Berdiri sejak tahun 2004 di jantung koridor industri Jawa Barat, PT Industri Nusantara telah bertransformasi dari bengkel bubut spesialis menjadi integrator manufaktur skala penuh. Kami menjembatani kebutuhan desain teknik rumit dengan kapabilitas produksi modern yang cepat dan presisi.
            </p>

            {/* Visi & Misi Modern Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                  V
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Visi Perusahaan</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Menjadi mitra manufaktur rekayasa dan fabrikasi terpercaya nomor satu di Asia Tenggara yang unggul dalam akurasi, kepatuhan keselamatan, dan integrasi digital.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-sm">
                  M
                </div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Misi Perusahaan</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Menyediakan komponen berstandar toleransi mikron, menjamin kepatuhan zero-defect, mempercepat waktu tunggu pesanan, dan meningkatkan nilai TKDN nasional.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => navigateTo('tentang')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer group"
              >
                <span>Pelajari Selengkapnya Tentang Nilai & Tim Kami</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 4. SECTION LAYANAN UTAMA (MINIMAL 8 LAYANAN) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-600">
              Kapabilitas Manufaktur Terpadu
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Layanan Rekayasa & Fabrikasi Presisi
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-2xl">
              Dari pemotongan fiber laser hingga perakitan lini otomasi penuh, kami menyediakan rantai nilai produksi menyeluruh di bawah satu atap.
            </p>
          </div>

          <button
            onClick={() => navigateTo('layanan')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg shadow-2xs transition-colors shrink-0 cursor-pointer"
          >
            <span>Katalog Lengkap Layanan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 8 Modern Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => navigateTo(`layanan/${service.slug}`)}
              className="group bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              {/* Subtle top indicator line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 transition-colors" />

              <div className="space-y-4">
                {/* Visual Thumbnail */}
                <div className="w-full h-36 rounded-xl overflow-hidden bg-slate-900 relative">
                  <IndustrialImage
                    type={service.imageType}
                    alt={service.title}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 p-2 rounded-lg bg-white/90 backdrop-blur-xs text-blue-600 shadow-xs">
                    {getServiceIcon(service.iconName)}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="text-[11px] font-semibold tracking-wider uppercase text-blue-600">
                    {service.category}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600 group-hover:text-blue-600">
                <span>Spesifikasi & Kapasitas</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SECTION KEUNGGULAN / NILAI KOMPETITIF */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        {/* Subtle industrial blueprint grid background */}
        <div className="absolute inset-0 bg-blueprint-dark opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-400">
              Mengapa Memilih Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display">
              Presisi yang Tidak Pernah Berkompromi
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Kombinasi teknologi permesinan terkini, tenaga ahli tersertifikasi, dan manajemen mutu berulang yang mengamankan jadwal produksi pabrik Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Keunggulan 1 */}
            <div className="glass-panel-dark rounded-2xl p-6 space-y-3 hover:border-blue-500/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center font-bold">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Teknologi Modern & Presisi</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Armada mesin CNC 5-Axis berkecepatan tinggi, fiber laser 12kW, dan robot pengelasan otomatis yang menjamin akurasi profil hingga sub-mikron.
              </p>
            </div>

            {/* Keunggulan 2 */}
            <div className="glass-panel-dark rounded-2xl p-6 space-y-3 hover:border-blue-500/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Tim Rekayasa Berpengalaman</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Didukung oleh lebih dari 120 insinyur mekanikal, programmer CNC, welders berlisensi ASME IX, dan profesional bergelar IPM/IPU.
              </p>
            </div>

            {/* Keunggulan 3 */}
            <div className="glass-panel-dark rounded-2xl p-6 space-y-3 hover:border-blue-500/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Kualitas Terjamin & Zero Defect</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Laboratorium metrologi ber-AC dengan Zeiss CMM, uji NDT ultrasonik, dan validasi FAI yang mengeliminasi risiko ketidaksesuaian produk.
              </p>
            </div>

            {/* Keunggulan 4 */}
            <div className="glass-panel-dark rounded-2xl p-6 space-y-3 hover:border-blue-500/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Ketepatan Waktu (On-Time Delivery)</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Sistem ERP manufaktur terintegrasi melacak status tiap part secara real-time, menghasilkan rekam jejak pengiriman tepat waktu di atas 97%.
              </p>
            </div>

            {/* Keunggulan 5 */}
            <div className="glass-panel-dark rounded-2xl p-6 space-y-3 hover:border-blue-500/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Harga Kompetitif & Efisiensi Material</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Nesting CAD/CAM teroptimasi meminimalisir sisa scrap logam plat tebal, menghasilkan penawaran harga yang transparan dan kompetitif.
              </p>
            </div>

            {/* Keunggulan 6 */}
            <div className="glass-panel-dark rounded-2xl p-6 space-y-3 hover:border-blue-500/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center font-bold">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Garansi Mutu & Purna Jual</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Garansi struktural 12 hingga 24 bulan dan dukungan teknis darurat 24/7 di lapangan untuk seluruh mesin khusus dan sistem otomasi kami.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. SECTION STATISTIK (ANIMATED COUNTER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            
            <div className="pt-4 lg:pt-0 lg:px-4 first:pt-0 first:pl-0">
              <StatsCounter
                end={20}
                suffix="+"
                label="Tahun Pengalaman"
                description="Melayani manufaktur sejak 2004"
              />
            </div>

            <div className="pt-4 lg:pt-0 lg:px-4">
              <StatsCounter
                end={500}
                suffix="+"
                label="Proyek Terselesaikan"
                description="Fabrikasi & otomasi industri"
              />
            </div>

            <div className="pt-4 lg:pt-0 lg:px-4">
              <StatsCounter
                end={120}
                suffix="+"
                label="Karyawan & Insinyur"
                description="Welder ASME & desainer CAD/CAM"
              />
            </div>

            <div className="pt-4 lg:pt-0 lg:px-4">
              <StatsCounter
                end={98}
                suffix="%"
                label="Kepuasan Pelanggan"
                description="Rasio repeat order tahunan"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 7. SECTION PROYEK UNGGULAN (MINIMAL 8 PROYEK) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-600">
              Studi Kasus & Portofolio Rekayasa
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Proyek Rekayasa & Fabrikasi Terpilih
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-2xl">
              Bukti nyata dedikasi kami dalam menyelesaikan tantangan rekayasa terberat di sektor otomotif, petrokimia, energi, dan logistik.
            </p>
          </div>

          <button
            onClick={() => navigateTo('proyek')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg shadow-2xs transition-colors shrink-0 cursor-pointer"
          >
            <span>Lihat Semua Proyek</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 8 Modern Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => navigateTo(`proyek/${project.slug}`)}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Thumbnail */}
                <div className="aspect-[4/3] bg-slate-900 relative overflow-hidden">
                  <IndustrialImage
                    type={project.imageType}
                    alt={project.title}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-xs text-[11px] font-semibold text-white">
                    {project.year}
                  </div>
                </div>

                {/* Metadata & Title */}
                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="text-blue-600 font-semibold">{project.category}</span>
                    <span>·</span>
                    <span className="truncate">{project.location}</span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-blue-600 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2">
                    {project.shortDesc}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-4 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600 group-hover:text-blue-600">
                <span className="truncate max-w-[170px] text-slate-500 font-normal">Klien: {project.client}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. SECTION TESTIMONI (INTERACTIVE SLIDER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-xl border border-slate-700/80">
          
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Header & Controls */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-blue-400">
                  Kepuasan & Kepercayaan Klien
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display mt-1">
                  Apa Kata Mitra Industri Kami
                </h2>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white transition-colors cursor-pointer"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white transition-colors cursor-pointer"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Testimonial Active Slide */}
            {activeTestimonial ? (
              <div className="min-h-[160px] flex flex-col justify-between space-y-6">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(activeTestimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-slate-200 leading-relaxed italic">
                  "{activeTestimonial.quote}"
                </blockquote>

                <div className="flex items-center justify-between pt-4 border-t border-slate-700/60">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-sm shadow-md">
                      {activeTestimonial.avatarInitials}
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">
                        {activeTestimonial.name}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-400">
                        {activeTestimonial.role} — {activeTestimonial.company}
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:block text-right">
                    <span className="text-xs text-slate-400 block">Referensi Proyek</span>
                    <span className="text-xs font-semibold text-blue-400">
                      {activeTestimonial.projectRef}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-slate-400 py-8 text-center text-sm">
                Belum ada data testimoni.
              </div>
            )}

            {/* Slider Dots */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonialIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === currentTestimonialIndex
                      ? 'w-8 bg-blue-500'
                      : 'w-2 bg-slate-700 hover:bg-slate-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 9. SECTION ARTIKEL & WAWASAN INDUSTRI (MINIMAL 6 ARTIKEL) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-600">
              Pengetahuan & Tren Teknik
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Artikel & Wawasan Manufaktur Terbaru
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-2xl">
              Artikel teknis dan kajian mendalam yang disusun oleh insinyur internal kami mengenai permesinan, manajemen mutu, dan strategi industri 4.0.
            </p>
          </div>

          <button
            onClick={() => navigateTo('artikel')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg shadow-2xs transition-colors shrink-0 cursor-pointer"
          >
            <span>Semua Artikel</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(0, 6).map((article) => (
            <div
              key={article.id}
              onClick={() => navigateTo(`artikel/${article.slug}`)}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Cover visual */}
                <div className="aspect-[16/9] bg-slate-900 overflow-hidden relative">
                  <IndustrialImage
                    type={article.imageType}
                    alt={article.title}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded bg-blue-600/90 backdrop-blur-xs text-[11px] font-semibold text-white">
                    {article.category}
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base sm:text-lg group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 mt-2 flex items-center justify-between text-xs font-semibold text-slate-600 border-t border-slate-100 pt-3">
                <span className="text-slate-400 font-normal">Penulis: {article.author}</span>
                <span className="text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Baca Artikel
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. CALL TO ACTION (CTA) SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-blue-600 p-8 sm:p-14 text-white overflow-hidden shadow-2xl">
          {/* Subtle Blueprint Pattern Background */}
          <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-blue-200">
              Konsultasi Rekayasa Bebas Biaya
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
              Siap Mengakselerasi Efisiensi & Kualitas Produksi Pabrik Anda?
            </h2>

            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              Diskusikan gambar kerja CAD Anda atau jadwalkan kunjungan fasilitas ke workshop Cikarang kami. Tim insinyur kami siap memberikan telaah DFM (Design for Manufacturing) dan kalkulasi penawaran kompetitif.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => navigateTo('kontak')}
                className="px-6 py-3.5 text-sm sm:text-base font-bold text-blue-900 bg-white hover:bg-blue-50 rounded-xl shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2 group"
              >
                <span>Mulai Konsultasi Teknis</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Halo%20PT%20Industri%20Nusantara,%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20manufaktur.`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-700/80 hover:bg-blue-700 rounded-xl border border-blue-400/40 transition-all duration-200 inline-flex items-center gap-2"
              >
                <span>WhatsApp Cepat: {companyInfo.whatsapp}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
