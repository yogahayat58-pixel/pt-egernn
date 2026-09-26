import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, Filter, Cpu, Flame, Zap, Bot, Activity, Compass, Sliders, Wrench } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { IndustrialImage } from '../components/common/IndustrialImage';

export const ServicesPage: React.FC = () => {
  const { services, navigateTo } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  // Categories list
  const categories = ['Semua', 'Fabrication', 'Machining', 'Cutting', 'Automation', 'Engineering', 'Maintenance'];

  // Filtered services
  const filteredServices = useMemo(() => {
    return services.filter((srv) => {
      const matchesSearch =
        srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        srv.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        srv.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCat =
        selectedCategory === 'Semua' || srv.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCat;
    });
  }, [services, searchQuery, selectedCategory]);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-5 h-5 text-blue-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-blue-600" />;
      case 'Bot': return <Bot className="w-5 h-5 text-blue-600" />;
      case 'Activity': return <Activity className="w-5 h-5 text-blue-600" />;
      case 'Compass': return <Compass className="w-5 h-5 text-blue-600" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-blue-600" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-blue-600" />;
      default: return <Cpu className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="pb-24 space-y-12">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white pt-10 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-35 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-slate-400">
            <Breadcrumbs items={[{ label: 'Layanan' }]} />
          </div>

          <div className="max-w-3xl space-y-4 mt-4">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-400">
              Kapabilitas & Solusi Teknik
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white">
              Layanan Manufaktur & Rekayasa Presisi Terpadu
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Jelajahi kapabilitas fasilitas workshop kami, mulai dari fabrikasi plat baja tebal, pemesinan CNC 5-Axis, fiber laser 12kW, hingga otomasi PLC dan overhaul berat.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs (Segmented Button Group) */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Cari layanan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
            />
          </div>

        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredServices.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-800">Tidak ada layanan yang sesuai</h3>
            <p className="text-xs text-slate-500">Coba ubah kata kunci pencarian atau pilih kategori lain.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('Semua'); }}
              className="text-xs font-semibold text-blue-600 hover:underline pt-2 cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => navigateTo(`layanan/${service.slug}`)}
                className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="aspect-[16/10] bg-slate-900 relative overflow-hidden">
                    <IndustrialImage
                      type={service.imageType}
                      alt={service.title}
                      className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 p-2.5 rounded-xl bg-white/95 backdrop-blur-xs text-blue-600 shadow-xs">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-xs text-[11px] font-semibold text-white">
                      {service.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 line-clamp-3 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="pt-2 space-y-1.5">
                      {service.benefits.slice(0, 2).map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:translate-x-0.5 transition-transform pt-4">
                  <span>Lihat Detail Spesifikasi & FAQ</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};
