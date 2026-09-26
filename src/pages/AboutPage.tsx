import React from 'react';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Calendar,
  Building,
  FileText,
  Users,
  Compass,
  ArrowRight,
  ShieldAlert,
  HardHat
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { companyMilestones, leadershipTeam } from '../data/initialData';
import { IndustrialImage } from '../components/common/IndustrialImage';

export const AboutPage: React.FC = () => {
  const { companyInfo, navigateTo } = useApp();

  const coreValues = [
    {
      title: "Presisi Tanpa Kompromi",
      desc: "Menghormati batas toleransi geometrik mikron di setiap produk. Bagi kami, akurasi adalah janji kehormatan profesional.",
      icon: <Compass className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Keselamatan Kerja (K3) Utama",
      desc: "Menerapkan standar Zero Harm & ISO 45001. Keselamatan setiap operator dan teknisi di bengkel adalah prioritas mutlak.",
      icon: <HardHat className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Integritas & Kepatuhan Standar",
      desc: "Kepatuhan penuh pada standar kode internasional (ASME, AWS, DIN) dan verifikasi sertifikat material mill test report asli.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Kemandirian Rantai Pasok Nasional",
      desc: "Berkomitmen memajukan ekosistem manufaktur lokal dengan capaian TKDN tinggi dan pembinaan tenaga ahli anak bangsa.",
      icon: <Award className="w-6 h-6 text-purple-600" />
    }
  ];

  const legalities = [
    { title: "NIB (Nomor Induk Berusaha)", value: "9120008471291 (OSS RBA Risiko Tinggi)" },
    { title: "Sertifikasi ISO 9001:2015", value: "Sistem Manajemen Mutu Manufaktur" },
    { title: "Sertifikasi ISO 14001:2015", value: "Sistem Manajemen Lingkungan" },
    { title: "Sertifikasi ISO 45001:2018", value: "Keselamatan & Kesehatan Kerja (K3)" },
    { title: "Akreditasi ASME 'U' & 'S' Stamp", value: "The American Society of Mechanical Engineers" },
    { title: "Verifikasi TKDN Kemenperin", value: "Rata-rata Capaian Komponen Lokal 68.4%" }
  ];

  return (
    <div className="pb-24 space-y-20">
      
      {/* 1. Header Banner & Breadcrumbs */}
      <section className="bg-slate-900 text-white pt-10 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-35 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-slate-400">
            <Breadcrumbs items={[{ label: 'Tentang Kami' }]} />
          </div>

          <div className="max-w-3xl space-y-4 mt-4">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-400">
              Profil Perusahaan
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white">
              Membangun Standar Baru Rekayasa & Fabrikasi di Indonesia
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Dua dekade dedikasi tanpa henti dalam menghadirkan suku cadang presisi, bejana tekan bersertifikat, dan lini otomatisasi industri kelas dunia bagi korporasi nasional.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Profil & Sejarah (2-Column Deep Narrative) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold tracking-widest text-blue-600">
                Sejarah & Perjalanan
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                Dari Bengkel Presisi Menjadi Pemimpin Solusi Manufaktur
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {companyInfo.name} didirikan pada tahun 2004 oleh sekelompok insinyur mesin berdedikasi tinggi di Cikarang Barat. Berawal dari workshop seluas 1.500 m² yang melayani jasa pemesinan manual dan perbaikan gear industri tekstil, visi kami selalu terarah pada penguasaan teknologi mutakhir.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Kini, fasilitas terpadu kami menempati area seluas 12.000 m² di Kawasan Industri MM2100, dilengkapi mesin 5-Axis CNC DMG Mori dari Jerman, Fiber Laser 12kW, robot pengelasan otomatis, serta laboratorium uji metrologi ber-AC yang didukung mesin CMM Carl Zeiss.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-blue-600 font-display">12.000 m²</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Area Fasilitas Workshop Terpadu</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-blue-600 font-display">350 Ton</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Kapasitas Fabrikasi Baja / Bulan</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-[4/3]">
              <IndustrialImage
                type="factory_exterior"
                alt="Fasilitas Manufaktur PT Industri Nusantara Cikarang"
                className="w-full h-full"
              />
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs text-xs text-slate-500 flex items-center justify-between">
              <span>Lokasi Strategis: Kawasan Industri MM2100 Cikarang Barat</span>
              <span className="font-semibold text-blue-600">Akses Tol Jakarta-Cikampek KM 24</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Visi, Misi & Nilai Perusahaan */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-600">
              Prinsip & Nilai Dasar
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">
              Fondasi yang Memandu Setiap Tindakan Kami
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs space-y-3 hover:shadow-md transition-shadow"
              >
                <div className="p-2.5 rounded-xl bg-slate-50 w-fit border border-slate-100">
                  {val.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-base">{val.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Timeline Perjalanan 20 Tahun (Milestones) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600">
            Jejak Langkah
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Timeline Pertumbuhan & Inovasi (2004 - 2026)
          </h2>
        </div>

        <div className="relative border-l-2 border-blue-500/30 ml-4 md:ml-32 space-y-10 py-4">
          {companyMilestones.map((item, idx) => (
            <div key={idx} className="relative pl-6 md:pl-10 group">
              {/* Year Marker on Left for large screens */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-blue-600 group-hover:scale-125 transition-transform" />
              <div className="hidden md:block absolute -left-28 top-0 text-sm font-extrabold text-blue-600 tabular-nums font-display">
                {item.year}
              </div>

              <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs group-hover:border-blue-400 transition-colors">
                <span className="md:hidden text-xs font-bold text-blue-600 block mb-1">
                  Tahun {item.year}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Legalitas & Sertifikasi Resmi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600">
            Kepatuhan & Akreditasi
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-display">
            Legalitas & Standar Mutu Tersertifikasi
          </h2>
          <p className="text-slate-500 text-sm">
            Seluruh operasional kami diaudit secara berkala oleh lembaga sertifikasi internasional terakreditasi KAN dan ANAB.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {legalities.map((leg, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3.5 hover:border-slate-300 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-sm">{leg.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{leg.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Susunan Tim Rekayasa & Manajemen */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600">
            Kepemimpinan Teknik
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-display">
            Dewan Direksi & Kepala Divisi Rekayasa
          </h2>
          <p className="text-slate-500 text-sm">
            Insinyur profesional berlisensi dengan rekam jejak puluhan tahun di industri manufaktur berat dan otomotif.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipTeam.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between p-5 space-y-4"
            >
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-extrabold text-xl font-display">
                  {member.name.split(' ')[0][0]}{member.name.split(' ')[1] ? member.name.split(' ')[1][0] : ''}
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-base leading-tight">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-blue-600 mt-1">
                    {member.role}
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {member.background}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] font-medium text-slate-400">
                {member.experience}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-bold font-display">
              Ingin Menjadwalkan Audit Fasilitas atau Factory Visit?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Kami menyambut hangat kunjungan tim engineering dan pengadaan dari perusahaan Anda untuk melihat langsung workshop dan armada mesin kami.
            </p>
          </div>

          <button
            onClick={() => navigateTo('kontak')}
            className="px-6 py-3.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-colors cursor-pointer shrink-0 flex items-center gap-2"
          >
            <span>Jadwalkan Kunjungan Pabrik</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
