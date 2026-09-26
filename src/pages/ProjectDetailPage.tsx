import React from 'react';
import {
  MapPin,
  Calendar,
  Building,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  ArrowRight,
  ArrowLeft,
  Cpu,
  Layers,
  Award
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { IndustrialImage } from '../components/common/IndustrialImage';

interface ProjectDetailPageProps {
  slug: string;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ slug }) => {
  const { projects, navigateTo } = useApp();

  const project = projects.find((p) => p.slug === slug || p.id === slug) || (!slug ? projects[0] : undefined);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-800">Proyek Tidak Ditemukan</h2>
        <p className="text-slate-500 text-sm">Proyek yang Anda cari tidak tersedia dalam portofolio kami.</p>
        <button
          onClick={() => navigateTo('proyek')}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-colors cursor-pointer"
        >
          Lihat Seluruh Portofolio Proyek
        </button>
      </div>
    );
  }

  return (
    <div className="pb-24 space-y-16">
      
      {/* 1. Project Detail Banner */}
      <section className="bg-slate-900 text-white pt-10 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-35 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-slate-400">
            <Breadcrumbs
              items={[
                { label: 'Proyek', path: 'proyek' },
                { label: project.title }
              ]}
            />
          </div>

          <div className="max-w-4xl space-y-4 mt-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded bg-blue-600/90 text-white text-xs font-semibold uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs text-slate-400">
                Tahun Selesai: {project.year}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
              {project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-blue-400" />
                <span>Klien: <strong>{project.client}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Lokasi: <strong>{project.location}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Info Column (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Visual Featured Banner */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-[16/9]">
              <IndustrialImage
                type={project.imageType}
                alt={project.title}
                className="w-full h-full"
              />
            </div>

            {/* Overview / Deskripsi */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 font-display">
                Ringkasan Eksekutif Proyek
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {project.shortDesc} Proyek ini dikerjakan di bawah standar kepatuhan teknis ketat dengan supervisi langsung dari tim quality assurance dan engineer tersertifikasi PT Industri Nusantara.
              </p>
            </div>

            {/* Challenge & Solution (2-Card High Contrast Comparison) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Tantangan (Challenge) */}
              <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-3">
                <div className="flex items-center gap-2 text-amber-700 font-bold text-base">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>Tantangan Rekayasa</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solusi (Solution) */}
              <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200/80 space-y-3">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-base">
                  <Lightbulb className="w-5 h-5 shrink-0" />
                  <span>Solusi & Metodologi</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>

            </div>

            {/* Key Results / Dampak Terukur */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 font-display">
                Hasil & Dampak Bisnis yang Dicapai
              </h2>

              <div className="space-y-3">
                {project.results.map((result, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                      {result}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Technical Gallery */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 font-display">
                Dokumentasi Lapangan & Fabrikasi
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 aspect-[16/10]">
                  <IndustrialImage
                    type={project.imageType}
                    alt={`${project.title} Detail 1`}
                    className="w-full h-full"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 aspect-[16/10]">
                  <IndustrialImage
                    type="default"
                    alt={`${project.title} Blueprint`}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar Metadata (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
              <h3 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
                Detail Spesifikasi Proyek
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 block text-xs">Klien Korporasi</span>
                  <span className="font-bold text-slate-800">{project.client}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Lokasi Fasilitas</span>
                  <span className="font-semibold text-slate-800">{project.location}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Kategori Rekayasa</span>
                  <span className="font-semibold text-blue-600">{project.category}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Tahun Pengerjaan</span>
                  <span className="font-semibold text-slate-800">{project.year}</span>
                </div>
              </div>

              {/* Technologies / Chips */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-semibold text-slate-500 block mb-2">
                  Teknologi & Standar
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => navigateTo('kontak')}
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-xs sm:text-sm transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Konsultasi Proyek Serupa</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200/80 text-xs text-slate-600 space-y-2">
              <span className="font-bold text-slate-800 block">Jaminan Kualitas Proyek:</span>
              <p className="leading-relaxed">
                Setiap proyek melalui tahapan Factory Acceptance Test (FAT), dokumentasi gambar as-built CAD, dan pelatihan pengoperasian terstruktur untuk tim pemeliharaan klien.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
