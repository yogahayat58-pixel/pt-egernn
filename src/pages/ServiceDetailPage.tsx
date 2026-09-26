import React, { useState } from 'react';
import {
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ShieldCheck,
  Send,
  Sliders,
  Calendar,
  Layers,
  ArrowLeft
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { IndustrialImage } from '../components/common/IndustrialImage';

interface ServiceDetailPageProps {
  slug: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug }) => {
  const { services, navigateTo, submitContactMessage } = useApp();
  
  // Find current service by slug or ID
  const service = services.find((s) => s.slug === slug || s.id === slug) || (!slug ? services[0] : undefined);
  
  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Quick inquiry form state
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryCompany, setInquiryCompany] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState(
    service ? `Halo tim PT Industri Nusantara, kami tertarik untuk berkonsultasi mengenai ${service.title}.` : ''
  );
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-800">Layanan Tidak Ditemukan</h2>
        <p className="text-slate-500 text-sm">Layanan yang Anda cari tidak tersedia dalam direktori kami.</p>
        <button
          onClick={() => navigateTo('layanan')}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-colors cursor-pointer"
        >
          Lihat Katalog Layanan
        </button>
      </div>
    );
  }

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    submitContactMessage({
      name: inquiryName,
      email: inquiryEmail,
      phone: inquiryPhone,
      company: inquiryCompany,
      serviceInterest: service.title,
      message: inquiryMsg
    });
    setFormSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="pb-24 space-y-16">
      
      {/* 1. Detail Hero Section */}
      <section className="bg-slate-900 text-white pt-10 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-35 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-slate-400">
            <Breadcrumbs
              items={[
                { label: 'Layanan', path: 'layanan' },
                { label: service.title }
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-6">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                <span>{service.category}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {service.shortDesc}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#inquiry"
                  className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm inline-flex items-center gap-2"
                >
                  <span>Minta Penawaran Teknis</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => navigateTo('layanan')}
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs sm:text-sm font-semibold transition-colors border border-slate-700 inline-flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Katalog Layanan Lain</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-950 aspect-[4/3]">
                <IndustrialImage
                  type={service.imageType}
                  alt={service.title}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Main Detail Content (2 Column Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Info Column (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Comprehensive Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 font-display">
                Deskripsi & Lingkup Kapabilitas
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {service.fullDesc}
              </p>
            </div>

            {/* Benefits & Value Proposition */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 font-display">
                Keunggulan & Standar Eksekusi
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900 font-display">
                  Tabel Parameter Teknis
                </h2>
                <span className="text-xs text-slate-400 font-mono">STANDAR KALIBRASI TERAKREDITASI</span>
              </div>

              <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-2xs">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-[11px]">
                      <th className="py-3 px-5">Parameter / Kapabilitas</th>
                      <th className="py-3 px-5">Spesifikasi & Nilai Batas</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {service.specs.map((spec, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                        <td className="py-3.5 px-5 text-slate-800">{spec.label}</td>
                        <td className="py-3.5 px-5 text-blue-600 font-mono font-semibold">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Visual Technical Gallery */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 font-display">
                Galeri Visual & Skematik Operasional
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 aspect-[16/10]">
                  <IndustrialImage
                    type={service.imageType}
                    alt={`${service.title} Visual 1`}
                    className="w-full h-full"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 aspect-[16/10]">
                  <IndustrialImage
                    type="default"
                    alt={`${service.title} Blueprint`}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Interactive FAQs Accordion */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 font-display">
                Pertanyaan Umum (FAQ)
              </h2>

              <div className="space-y-3">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer text-sm sm:text-base"
                      >
                        <div className="flex items-center gap-2.5">
                          <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                          <span>{faq.question}</span>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Sticky Inquiry Form Sidebar (4 cols) */}
          <div id="inquiry" className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 space-y-5">
              
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block">
                  Permintaan Penawaran Cepat
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  Konsultasikan Kebutuhan {service.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Kirimkan detail spesifikasi part atau gambar teknis untuk estimasi biaya dan lead time pengerjaan.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm space-y-2">
                  <div className="font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Permintaan Terkirim!</span>
                  </div>
                  <p>
                    Terima kasih. Tim engineering estimator kami akan meninjau kebutuhan Anda dan menghubungi kembali dalam waktu 1x24 jam kerja.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-semibold text-emerald-700 underline mt-2 block cursor-pointer"
                  >
                    Kirim pesan lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickInquiry} className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1 text-xs">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ir. Dimas Suryo"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1 text-xs">
                      Email Perusahaan *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="dimas@perusahaan.com"
                      value={inquiryEmail}
                      onChange={(e) => setInquiryEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1 text-xs">
                        Nomor Telepon / WA *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="08123456789"
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1 text-xs">
                        Perusahaan
                      </label>
                      <input
                        type="text"
                        placeholder="PT Maju Jaya"
                        value={inquiryCompany}
                        onChange={(e) => setInquiryCompany(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1 text-xs">
                      Catatan / Spesifikasi *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={inquiryMsg}
                      onChange={(e) => setInquiryMsg(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirimkan Spesifikasi</span>
                  </button>
                </form>
              )}

              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>NDA (Non-Disclosure Agreement) kerahasiaan desain dijamin 100%.</span>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
