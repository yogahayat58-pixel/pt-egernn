import React, { useState } from 'react';
import {
  LayoutDashboard,
  Building,
  Sparkles,
  Layers,
  Briefcase,
  FileText,
  Star,
  Users,
  Image as ImageIcon,
  Globe,
  Palette,
  PhoneCall,
  Share2,
  Mail,
  Download,
  Upload,
  RefreshCw,
  Plus,
  Trash2,
  Edit,
  Eye,
  Check,
  X,
  Search,
  ArrowRight,
  Shield,
  Moon,
  Sun,
  Save,
  ExternalLink,
  Compass
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ServiceItem, ProjectItem, ArticleItem, TestimonialItem, ClientPartner } from '../types';

export const AdminDashboard: React.FC = () => {
  const {
    services,
    projects,
    articles,
    testimonials,
    clients,
    contactMessages,
    companyInfo,
    seoSettings,
    themeSettings,
    mediaLibrary,
    addService,
    updateService,
    deleteService,
    addProject,
    updateProject,
    deleteProject,
    addArticle,
    updateArticle,
    deleteArticle,
    addTestimonial,
    deleteTestimonial,
    addClient,
    deleteClient,
    markMessageRead,
    deleteMessage,
    updateCompanyInfo,
    updateSEOSettings,
    updateThemeSettings,
    addMediaAsset,
    exportDataJSON,
    importDataJSON,
    resetToDefaultData,
    navigateTo
  } = useApp();

  // Active Tab
  const [activeTab, setActiveTab] = useState<
    | 'overview'
    | 'profile'
    | 'hero'
    | 'about'
    | 'services'
    | 'projects'
    | 'articles'
    | 'testimonials'
    | 'clients'
    | 'media'
    | 'seo'
    | 'branding'
    | 'contacts'
    | 'inbox'
    | 'backup'
  >('overview');

  // Sub Tab for SEO
  const [seoSubTab, setSeoSubTab] = useState<'website' | 'services' | 'projects' | 'articles' | 'files'>('website');

  // Dark Mode local toggle for admin
  const [adminDarkMode, setAdminDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; isError?: boolean } | null>(null);

  const showToast = (msg: string, isError: boolean = false) => {
    setToast({ message: msg, isError });
    setTimeout(() => setToast(null), 3500);
  };

  // Confirmation Modal state to avoid window.confirm
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    confirmText?: string;
    onConfirm: () => void;
  } | null>(null);

  // Modals for CRUD
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);
  const [isAddingService, setIsAddingService] = useState(false);

  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [isAddingProject, setIsAddingProject] = useState(false);

  const [editingArticle, setEditingArticle] = useState<ArticleItem | null>(null);
  const [isAddingArticle, setIsAddingArticle] = useState(false);

  // New Service Form State
  const [serviceForm, setServiceForm] = useState({
    title: '',
    category: 'Fabrication',
    shortDesc: '',
    fullDesc: '',
    iconName: 'Flame',
    imageType: 'fabrication',
    benefits: 'Standar pengelasan ASME\nInspeksi NDT 100%\nFinishing Sa 2.5',
    specs: 'Kapasitas: 350 Ton/Bln\nToleransi: ±0.5mm',
    faqs: 'Berapa lead time?: 2 hingga 4 minggu kerja'
  });

  // New Project Form State
  const [projectForm, setProjectForm] = useState({
    title: '',
    client: '',
    location: '',
    category: 'Automation',
    year: '2026',
    imageType: 'conveyor',
    shortDesc: '',
    challenge: '',
    solution: '',
    results: 'Throughput meningkat 40%\nZero defect record',
    technologies: 'Siemens PLC, Servo Motors'
  });

  // New Article Form State
  const [articleForm, setArticleForm] = useState({
    title: '',
    category: 'Teknologi',
    date: '25 September 2026',
    author: 'Tim Rekayasa Industri Nusantara',
    readTime: '4 menit baca',
    imageType: 'article_iot',
    summary: '',
    content: 'Paragraf pertama ulasan teknis...\n\nParagraf kedua kelanjutan kajian...',
    tags: 'Manufaktur, Presisi, Inovasi'
  });

  // Local Form state for Company Profile
  const [companyForm, setCompanyForm] = useState({ ...companyInfo });
  const [seoForm, setSeoForm] = useState({ ...seoSettings });
  const [themeForm, setThemeForm] = useState({ ...themeSettings });

  // Quick New Testimonial State
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    company: '',
    avatarInitials: 'PT',
    quote: '',
    rating: 5,
    projectRef: ''
  });

  // Quick New Client State
  const [newClient, setNewClient] = useState({
    name: '',
    industry: '',
    logoText: ''
  });

  // Media Mock Uploader State
  const [uploadName, setUploadName] = useState('');
  const [uploadCategory, setUploadCategory] = useState('Workshop');
  const [importJsonText, setImportJsonText] = useState('');

  // Handle Save Service
  const handleSaveService = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = serviceForm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const benefitsArr = serviceForm.benefits.split('\n').filter(Boolean);
    const specsArr = serviceForm.specs.split('\n').map(line => {
      const idx = line.indexOf(':');
      if (idx === -1) return { label: line.trim(), value: '-' };
      return { label: line.substring(0, idx).trim(), value: line.substring(idx + 1).trim() };
    }).filter(s => s.label);

    const faqsArr = serviceForm.faqs.split('\n').map(line => {
      const idx = line.indexOf(':');
      if (idx === -1) return { question: line.trim(), answer: '-' };
      let q = line.substring(0, idx).trim().replace(/(\?|:)+$/, '');
      const a = line.substring(idx + 1).trim();
      return { question: `${q}?`, answer: a };
    }).filter(f => f.question && f.answer);

    if (editingService) {
      updateService(editingService.id, {
        title: serviceForm.title,
        slug,
        category: serviceForm.category,
        shortDesc: serviceForm.shortDesc,
        fullDesc: serviceForm.fullDesc,
        iconName: serviceForm.iconName,
        imageType: serviceForm.imageType,
        benefits: benefitsArr,
        specs: specsArr,
        faqs: faqsArr
      });
      showToast('Layanan berhasil diperbarui!');
      setEditingService(null);
    } else {
      addService({
        slug,
        title: serviceForm.title,
        category: serviceForm.category,
        shortDesc: serviceForm.shortDesc,
        fullDesc: serviceForm.fullDesc,
        iconName: serviceForm.iconName,
        imageType: serviceForm.imageType,
        benefits: benefitsArr,
        specs: specsArr,
        faqs: faqsArr,
        featured: true
      });
      showToast('Layanan baru berhasil ditambahkan!');
      setIsAddingService(false);
    }
  };

  // Handle Save Project
  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = projectForm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const resultsArr = projectForm.results.split('\n').filter(Boolean);
    const techArr = projectForm.technologies.split(',').map(t => t.trim()).filter(Boolean);

    if (editingProject) {
      updateProject(editingProject.id, {
        title: projectForm.title,
        slug,
        client: projectForm.client,
        location: projectForm.location,
        category: projectForm.category,
        year: projectForm.year,
        imageType: projectForm.imageType,
        shortDesc: projectForm.shortDesc,
        challenge: projectForm.challenge,
        solution: projectForm.solution,
        results: resultsArr,
        technologies: techArr
      });
      showToast('Proyek berhasil diperbarui!');
      setEditingProject(null);
    } else {
      addProject({
        slug,
        title: projectForm.title,
        client: projectForm.client,
        location: projectForm.location,
        category: projectForm.category,
        year: projectForm.year,
        imageType: projectForm.imageType,
        shortDesc: projectForm.shortDesc,
        challenge: projectForm.challenge,
        solution: projectForm.solution,
        results: resultsArr,
        technologies: techArr,
        gallery: ['project_1']
      });
      showToast('Proyek baru berhasil ditambahkan!');
      setIsAddingProject(false);
    }
  };

  // Handle Save Article
  const handleSaveArticle = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = articleForm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const contentArr = articleForm.content.split('\n\n').filter(Boolean);
    const tagsArr = articleForm.tags.split(',').map(t => t.trim()).filter(Boolean);

    if (editingArticle) {
      updateArticle(editingArticle.id, {
        title: articleForm.title,
        slug,
        category: articleForm.category,
        date: articleForm.date,
        author: articleForm.author,
        readTime: articleForm.readTime,
        imageType: articleForm.imageType,
        summary: articleForm.summary,
        content: contentArr,
        tags: tagsArr
      });
      showToast('Artikel berhasil diperbarui!');
      setEditingArticle(null);
    } else {
      addArticle({
        slug,
        title: articleForm.title,
        category: articleForm.category,
        date: articleForm.date,
        author: articleForm.author,
        readTime: articleForm.readTime,
        imageType: articleForm.imageType,
        summary: articleForm.summary,
        content: contentArr,
        tags: tagsArr
      });
      showToast('Artikel baru berhasil dipublikasikan!');
      setIsAddingArticle(false);
    }
  };

  const navMenuItems = [
    { key: 'overview', label: 'Ringkasan & KPI', icon: <LayoutDashboard className="w-4 h-4" /> },
    { key: 'inbox', label: 'Pesan Masuk (Leads)', icon: <Mail className="w-4 h-4" />, count: contactMessages.filter(m => !m.isRead).length },
    { key: 'services', label: 'Kelola Layanan (CRUD)', icon: <Layers className="w-4 h-4" />, count: services.length },
    { key: 'projects', label: 'Kelola Proyek (CRUD)', icon: <Briefcase className="w-4 h-4" />, count: projects.length },
    { key: 'articles', label: 'Kelola Artikel (CRUD)', icon: <FileText className="w-4 h-4" />, count: articles.length },
    { key: 'testimonials', label: 'Kelola Testimoni', icon: <Star className="w-4 h-4" /> },
    { key: 'clients', label: 'Kelola Mitra Klien', icon: <Users className="w-4 h-4" /> },
    { key: 'profile', label: 'Kelola Profil Perusahaan', icon: <Building className="w-4 h-4" /> },
    { key: 'contacts', label: 'Pengaturan Kontak & Sosmed', icon: <PhoneCall className="w-4 h-4" /> },
    { key: 'hero', label: 'Kelola Hero & Beranda', icon: <Sparkles className="w-4 h-4" /> },
    { key: 'about', label: 'Kelola Tentang Kami', icon: <Compass className="w-4 h-4" /> },
    { key: 'seo', label: 'Pengaturan SEO Global', icon: <Globe className="w-4 h-4" /> },
    { key: 'branding', label: 'Warna & Branding', icon: <Palette className="w-4 h-4" /> },
    { key: 'media', label: 'Media Manager', icon: <ImageIcon className="w-4 h-4" /> },
    { key: 'backup', label: 'Backup & Restore Data', icon: <Download className="w-4 h-4" /> }
  ];

  return (
    <div className={`min-h-screen ${adminDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-100/90 text-slate-800'}`}>
      
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm font-semibold animate-in slide-in-from-bottom duration-200 ${
          toast.isError ? 'bg-rose-600' : 'bg-emerald-600'
        }`}>
          {toast.isError ? <X className="w-4 h-4 text-white" /> : <Check className="w-4 h-4 text-white" />}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Admin Top Header */}
      <header className={`sticky top-0 z-40 border-b px-4 sm:px-6 py-3 flex items-center justify-between ${
        adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-2xs'
      }`}>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
            aria-label="Toggle Sidebar"
          >
            <LayoutDashboard className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-extrabold text-xs">
              IN
            </div>
            <div>
              <span className="font-extrabold text-sm sm:text-base tracking-tight font-display block leading-none">
                Admin Console
              </span>
              <span className="text-[10px] text-slate-400">
                PT Industri Nusantara CMS
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setAdminDarkMode(!adminDarkMode)}
            className={`p-2 rounded-lg border transition-colors cursor-pointer ${
              adminDarkMode
                ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700'
                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
            title="Toggle Dark Mode Admin"
          >
            {adminDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* View Live Website Button */}
          <button
            onClick={() => navigateTo('beranda')}
            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>Lihat Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Admin Main Body Layout */}
      <div className="flex">
        
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-30 w-64 pt-16 lg:pt-0 transform transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } ${
            adminDarkMode ? 'bg-slate-900 border-r border-slate-800' : 'bg-white border-r border-slate-200'
          }`}
        >
          <div className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-60px)]">
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 px-3 block mb-2">
              Menu Pengelolaan
            </span>

            {navMenuItems.map((item) => {
              const isActive = activeTab === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => {
                    setActiveTab(item.key as any);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs font-semibold'
                      : adminDarkMode
                      ? 'text-slate-300 hover:bg-slate-800'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {item.count !== undefined && item.count > 0 && (
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-blue-100 text-blue-700 dark:bg-slate-800 dark:text-blue-400'
                      }`}
                    >
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
          
          {/* TAB 1: OVERVIEW & KPI */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold font-display">Dashboard Ringkasan Operasional</h1>
                <p className="text-xs sm:text-sm text-slate-500">
                  Pantau statistik konten, pesan lead masuk, dan status publikasi website PT Industri Nusantara.
                </p>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className={`p-5 rounded-2xl border ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <span className="text-xs text-slate-400">Total Layanan Aktif</span>
                  <div className="text-3xl font-extrabold text-blue-600 mt-1 font-display tabular-nums">
                    {services.length}
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block">8 kategori manufaktur</span>
                </div>

                <div className={`p-5 rounded-2xl border ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <span className="text-xs text-slate-400">Portofolio Proyek</span>
                  <div className="text-3xl font-extrabold text-slate-800 dark:text-white mt-1 font-display tabular-nums">
                    {projects.length}
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block">Studi kasus industri</span>
                </div>

                <div className={`p-5 rounded-2xl border ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <span className="text-xs text-slate-400">Artikel & Wawasan</span>
                  <div className="text-3xl font-extrabold text-slate-800 dark:text-white mt-1 font-display tabular-nums">
                    {articles.length}
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block">SEO Ready</span>
                </div>

                <div className={`p-5 rounded-2xl border ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <span className="text-xs text-slate-400">Pesan Masuk (Leads)</span>
                  <div className="text-3xl font-extrabold text-orange-500 mt-1 font-display tabular-nums">
                    {contactMessages.filter(m => !m.isRead).length}
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block">Memerlukan tindak lanjut</span>
                </div>
              </div>

              {/* Recent Inquiries List */}
              <div className={`rounded-2xl border p-5 ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-base">Permintaan Penawaran Terbaru</h3>
                  <button
                    onClick={() => setActiveTab('inbox')}
                    className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
                  >
                    Buka Kotak Masuk
                  </button>
                </div>

                {contactMessages.length === 0 ? (
                  <p className="text-xs text-slate-400 py-6 text-center">Belum ada pesan masuk.</p>
                ) : (
                  <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    {contactMessages.slice(0, 3).map((msg) => (
                      <div key={msg.id} className="py-3 flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <strong className="text-xs sm:text-sm font-semibold">{msg.name}</strong>
                            <span className="text-[11px] text-slate-400">({msg.company || 'Perusahaan'})</span>
                            {!msg.isRead && (
                              <span className="px-1.5 py-0.5 rounded bg-orange-100 text-orange-700 text-[10px] font-bold">
                                Baru
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{msg.message}</p>
                        </div>
                        <span className="text-[11px] text-slate-400 shrink-0">{msg.date}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: INBOX LEADS */}
          {activeTab === 'inbox' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold font-display">Kotak Masuk Permintaan Penawaran</h1>
                <p className="text-xs sm:text-sm text-slate-500">
                  Daftar calon klien yang mengirimkan formulir dari halaman kontak atau detail layanan.
                </p>
              </div>

              {contactMessages.length === 0 ? (
                <div className={`p-12 text-center rounded-2xl border ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <Mail className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-500">Belum ada pesan masuk dari pengunjung website.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {contactMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        !msg.isRead
                          ? 'border-blue-300 bg-blue-50/30 dark:bg-slate-900/80 dark:border-blue-800'
                          : adminDarkMode
                          ? 'bg-slate-900 border-slate-800'
                          : 'bg-white border-slate-200'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-sm sm:text-base">{msg.name}</h3>
                            <span className="text-xs text-blue-600 font-semibold">{msg.company}</span>
                            {!msg.isRead && (
                              <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold">
                                Belum Dibaca
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 mt-1">
                            <span>Email: <a href={`mailto:${msg.email}`} className="text-blue-600 hover:underline">{msg.email}</a></span>
                            <span>Telp: <a href={`tel:${msg.phone}`} className="text-blue-600 hover:underline">{msg.phone}</a></span>
                            <span>Minat: <strong>{msg.serviceInterest}</strong></span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-xs text-slate-400">{msg.date}</span>
                          {!msg.isRead && (
                            <button
                              onClick={() => {
                                markMessageRead(msg.id);
                                showToast('Pesan ditandai sudah dibaca');
                              }}
                              className="px-2.5 py-1 text-xs font-semibold rounded bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 cursor-pointer"
                            >
                              Tandai Dibaca
                            </button>
                          )}
                          <button
                            onClick={() => {
                              deleteMessage(msg.id);
                              showToast('Pesan berhasil dihapus');
                            }}
                            className="p-1.5 rounded text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 cursor-pointer"
                            title="Hapus Pesan"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="pt-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-950/50 p-3 rounded-xl mt-3">
                        {msg.message}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: CRUD LAYANAN */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold font-display">Kelola Layanan Manufaktur</h1>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Tambah, perbarui spesifikasi teknis, atau hapus layanan yang tampil di katalog publik.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setEditingService(null);
                    setServiceForm({
                      title: '',
                      category: 'Fabrication',
                      shortDesc: '',
                      fullDesc: '',
                      iconName: 'Flame',
                      imageType: 'fabrication',
                      benefits: 'Standar pengelasan ASME\nInspeksi NDT 100%\nFinishing Sa 2.5',
                      specs: 'Kapasitas: 350 Ton/Bln\nToleransi: ±0.5mm',
                      faqs: 'Berapa lead time?: 2 hingga 4 minggu kerja'
                    });
                    setIsAddingService(true);
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 cursor-pointer self-start sm:self-auto shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Layanan Baru</span>
                </button>
              </div>

              {/* Service Form Modal / Inline Editor */}
              {(isAddingService || editingService) && (
                <div className={`p-6 rounded-2xl border shadow-lg ${adminDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-blue-200'}`}>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-4">
                    <h3 className="font-bold text-base">
                      {editingService ? `Edit Layanan: ${editingService.title}` : 'Tambah Layanan Manufaktur Baru'}
                    </h3>
                    <button
                      onClick={() => {
                        setIsAddingService(false);
                        setEditingService(null);
                      }}
                      className="p-1 rounded text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <form onSubmit={handleSaveService} className="space-y-4 text-xs sm:text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold mb-1">Judul Layanan *</label>
                        <input
                          type="text"
                          required
                          value={serviceForm.title}
                          onChange={e => setServiceForm({ ...serviceForm, title: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Kategori *</label>
                        <select
                          value={serviceForm.category}
                          onChange={e => setServiceForm({ ...serviceForm, category: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                        >
                          <option value="Fabrication">Fabrication</option>
                          <option value="Machining">Machining</option>
                          <option value="Cutting">Cutting</option>
                          <option value="Automation">Automation</option>
                          <option value="Engineering">Engineering</option>
                          <option value="Maintenance">Maintenance</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold mb-1">Deskripsi Singkat (Ringkasan Card) *</label>
                      <textarea
                        rows={2}
                        required
                        value={serviceForm.shortDesc}
                        onChange={e => setServiceForm({ ...serviceForm, shortDesc: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none resize-none"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold mb-1">Deskripsi Lengkap (Halaman Detail) *</label>
                      <textarea
                        rows={4}
                        required
                        value={serviceForm.fullDesc}
                        onChange={e => setServiceForm({ ...serviceForm, fullDesc: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold mb-1">Daftar Keunggulan (Pisahkan per baris)</label>
                        <textarea
                          rows={3}
                          value={serviceForm.benefits}
                          onChange={e => setServiceForm({ ...serviceForm, benefits: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none font-mono text-xs"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Spesifikasi Teknis (Format: Label: Nilai)</label>
                        <textarea
                          rows={3}
                          value={serviceForm.specs}
                          onChange={e => setServiceForm({ ...serviceForm, specs: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none font-mono text-xs"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => { setIsAddingService(false); setEditingService(null); }}
                        className="px-4 py-2 rounded-lg border hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        Batal
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center gap-1.5"
                      >
                        <Save className="w-4 h-4" />
                        <span>Simpan Layanan</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Services Table */}
              <div className={`rounded-2xl border overflow-hidden ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className={`border-b text-[11px] uppercase tracking-wider ${adminDarkMode ? 'bg-slate-800/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <tr>
                      <th className="py-3 px-4">Layanan</th>
                      <th className="py-3 px-4">Kategori</th>
                      <th className="py-3 px-4">Ringkasan</th>
                      <th className="py-3 px-4 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {services.map((srv) => (
                      <tr key={srv.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                        <td className="py-3.5 px-4 font-bold">{srv.title}</td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-slate-800 dark:text-blue-400 text-xs">
                            {srv.category}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 max-w-xs truncate text-slate-500">{srv.shortDesc}</td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => {
                                setEditingService(srv);
                                setServiceForm({
                                  title: srv.title,
                                  category: srv.category,
                                  shortDesc: srv.shortDesc,
                                  fullDesc: srv.fullDesc,
                                  iconName: srv.iconName,
                                  imageType: srv.imageType,
                                  benefits: srv.benefits.join('\n'),
                                  specs: srv.specs.map(s => `${s.label}: ${s.value}`).join('\n'),
                                  faqs: srv.faqs.map(f => `${f.question.replace(/\?+$/, '')}: ${f.answer}`).join('\n')
                                });
                                setIsAddingService(false);
                              }}
                              className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-blue-600"
                              title="Edit Layanan"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => {
                                setConfirmModal({
                                  isOpen: true,
                                  title: 'Hapus Layanan',
                                  message: `Apakah Anda yakin ingin menghapus layanan "${srv.title}"?`,
                                  confirmText: 'Ya, Hapus Layanan',
                                  onConfirm: () => {
                                    deleteService(srv.id);
                                    showToast('Layanan berhasil dihapus');
                                  }
                                });
                              }}
                              className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-rose-500 cursor-pointer"
                              title="Hapus Layanan"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: CRUD PROYEK */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold font-display">Kelola Portofolio Proyek</h1>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Tambah studi kasus rekayasa, tantangan teknis, solusi, dan hasil bisnis terukur.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setEditingProject(null);
                    setProjectForm({
                      title: '',
                      client: '',
                      location: '',
                      category: 'Automation',
                      year: '2026',
                      imageType: 'conveyor',
                      shortDesc: '',
                      challenge: '',
                      solution: '',
                      results: 'Throughput meningkat 40%\nZero defect record',
                      technologies: 'Siemens PLC, Servo Motors'
                    });
                    setIsAddingProject(true);
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 cursor-pointer self-start sm:self-auto shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Proyek Baru</span>
                </button>
              </div>

              {/* Project Form Modal / Inline Editor */}
              {(isAddingProject || editingProject) && (
                <div className={`p-6 rounded-2xl border shadow-lg ${adminDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-blue-200'}`}>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-4">
                    <h3 className="font-bold text-base">
                      {editingProject ? `Edit Proyek: ${editingProject.title}` : 'Tambah Proyek Rekayasa Baru'}
                    </h3>
                    <button
                      onClick={() => { setIsAddingProject(false); setEditingProject(null); }}
                      className="p-1 rounded text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <form onSubmit={handleSaveProject} className="space-y-4 text-xs sm:text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold mb-1">Nama Proyek *</label>
                        <input
                          type="text"
                          required
                          value={projectForm.title}
                          onChange={e => setProjectForm({ ...projectForm, title: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Klien Korporasi *</label>
                        <input
                          type="text"
                          required
                          value={projectForm.client}
                          onChange={e => setProjectForm({ ...projectForm, client: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block font-semibold mb-1">Lokasi Fasilitas *</label>
                        <input
                          type="text"
                          required
                          value={projectForm.location}
                          onChange={e => setProjectForm({ ...projectForm, location: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Kategori *</label>
                        <select
                          value={projectForm.category}
                          onChange={e => setProjectForm({ ...projectForm, category: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                        >
                          <option value="Automation">Automation</option>
                          <option value="Fabrication">Fabrication</option>
                          <option value="Machining">Machining</option>
                          <option value="Custom Machine">Custom Machine</option>
                          <option value="Maintenance">Maintenance</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Tahun Selesai *</label>
                        <input
                          type="text"
                          required
                          value={projectForm.year}
                          onChange={e => setProjectForm({ ...projectForm, year: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold mb-1">Ringkasan Proyek *</label>
                      <textarea
                        rows={2}
                        required
                        value={projectForm.shortDesc}
                        onChange={e => setProjectForm({ ...projectForm, shortDesc: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold mb-1">Tantangan Rekayasa (Challenge) *</label>
                        <textarea
                          rows={3}
                          required
                          value={projectForm.challenge}
                          onChange={e => setProjectForm({ ...projectForm, challenge: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Solusi & Metodologi (Solution) *</label>
                        <textarea
                          rows={3}
                          required
                          value={projectForm.solution}
                          onChange={e => setProjectForm({ ...projectForm, solution: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold mb-1">Hasil Terukur (Pisahkan per baris)</label>
                        <textarea
                          rows={3}
                          value={projectForm.results}
                          onChange={e => setProjectForm({ ...projectForm, results: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none font-mono text-xs"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Teknologi & Standar (Pisahkan dengan koma)</label>
                        <input
                          type="text"
                          value={projectForm.technologies}
                          onChange={e => setProjectForm({ ...projectForm, technologies: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => { setIsAddingProject(false); setEditingProject(null); }}
                        className="px-4 py-2 rounded-lg border hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        Batal
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center gap-1.5"
                      >
                        <Save className="w-4 h-4" />
                        <span>Simpan Proyek</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Projects Table */}
              <div className={`rounded-2xl border overflow-hidden ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className={`border-b text-[11px] uppercase tracking-wider ${adminDarkMode ? 'bg-slate-800/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <tr>
                      <th className="py-3 px-4">Nama Proyek</th>
                      <th className="py-3 px-4">Klien</th>
                      <th className="py-3 px-4">Lokasi</th>
                      <th className="py-3 px-4">Tahun</th>
                      <th className="py-3 px-4 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {projects.map((prj) => (
                      <tr key={prj.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                        <td className="py-3.5 px-4 font-bold">{prj.title}</td>
                        <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300">{prj.client}</td>
                        <td className="py-3.5 px-4 text-slate-500">{prj.location}</td>
                        <td className="py-3.5 px-4 font-mono">{prj.year}</td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => {
                                setEditingProject(prj);
                                setProjectForm({
                                  title: prj.title,
                                  client: prj.client,
                                  location: prj.location,
                                  category: prj.category,
                                  year: prj.year,
                                  imageType: prj.imageType,
                                  shortDesc: prj.shortDesc,
                                  challenge: prj.challenge,
                                  solution: prj.solution,
                                  results: prj.results.join('\n'),
                                  technologies: prj.technologies.join(', ')
                                });
                                setIsAddingProject(false);
                              }}
                              className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-blue-600"
                              title="Edit Proyek"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => {
                                setConfirmModal({
                                  isOpen: true,
                                  title: 'Hapus Proyek',
                                  message: `Apakah Anda yakin ingin menghapus proyek "${prj.title}"?`,
                                  confirmText: 'Ya, Hapus Proyek',
                                  onConfirm: () => {
                                    deleteProject(prj.id);
                                    showToast('Proyek berhasil dihapus');
                                  }
                                });
                              }}
                              className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-rose-500 cursor-pointer"
                              title="Hapus Proyek"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 5: CRUD ARTIKEL */}
          {activeTab === 'articles' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold font-display">Kelola Artikel & Wawasan Industri</h1>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Tulis artikel teknis baru untuk mendongkrak reputasi keahlian (SEO authority) di bidang manufaktur.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setEditingArticle(null);
                    setArticleForm({
                      title: '',
                      category: 'Teknologi',
                      date: '25 September 2026',
                      author: 'Tim Rekayasa Industri Nusantara',
                      readTime: '4 menit baca',
                      imageType: 'article_iot',
                      summary: '',
                      content: 'Paragraf pertama ulasan teknis...\n\nParagraf kedua kelanjutan kajian...',
                      tags: 'Manufaktur, Presisi, Inovasi'
                    });
                    setIsAddingArticle(true);
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 cursor-pointer self-start sm:self-auto shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tulis Artikel Baru</span>
                </button>
              </div>

              {/* Article Form Modal / Inline Editor */}
              {(isAddingArticle || editingArticle) && (
                <div className={`p-6 rounded-2xl border shadow-lg ${adminDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-blue-200'}`}>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-4">
                    <h3 className="font-bold text-base">
                      {editingArticle ? `Edit Artikel: ${editingArticle.title}` : 'Tulis Artikel Teknis Baru'}
                    </h3>
                    <button
                      onClick={() => { setIsAddingArticle(false); setEditingArticle(null); }}
                      className="p-1 rounded text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <form onSubmit={handleSaveArticle} className="space-y-4 text-xs sm:text-sm">
                    <div>
                      <label className="block font-semibold mb-1">Judul Artikel *</label>
                      <input
                        type="text"
                        required
                        value={articleForm.title}
                        onChange={e => setArticleForm({ ...articleForm, title: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block font-semibold mb-1">Kategori *</label>
                        <select
                          value={articleForm.category}
                          onChange={e => setArticleForm({ ...articleForm, category: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                        >
                          <option value="Teknologi">Teknologi</option>
                          <option value="Fabrikasi">Fabrikasi</option>
                          <option value="Manajemen Mutu">Manajemen Mutu</option>
                          <option value="Material Science">Material Science</option>
                          <option value="Maintenance">Maintenance</option>
                          <option value="Regulasi & B2B">Regulasi & B2B</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Nama Penulis *</label>
                        <input
                          type="text"
                          required
                          value={articleForm.author}
                          onChange={e => setArticleForm({ ...articleForm, author: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Waktu Baca</label>
                        <input
                          type="text"
                          value={articleForm.readTime}
                          onChange={e => setArticleForm({ ...articleForm, readTime: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold mb-1">Ringkasan Eksekutif (Meta Summary) *</label>
                      <textarea
                        rows={2}
                        required
                        value={articleForm.summary}
                        onChange={e => setArticleForm({ ...articleForm, summary: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none resize-none"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold mb-1">Isi Artikel Lengkap (Pisahkan paragraf dengan baris ganda) *</label>
                      <textarea
                        rows={6}
                        required
                        value={articleForm.content}
                        onChange={e => setArticleForm({ ...articleForm, content: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold mb-1">Tags (Pisahkan dengan koma)</label>
                      <input
                        type="text"
                        value={articleForm.tags}
                        onChange={e => setArticleForm({ ...articleForm, tags: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => { setIsAddingArticle(false); setEditingArticle(null); }}
                        className="px-4 py-2 rounded-lg border hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        Batal
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center gap-1.5"
                      >
                        <Save className="w-4 h-4" />
                        <span>Publikasikan Artikel</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Articles Table */}
              <div className={`rounded-2xl border overflow-hidden ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className={`border-b text-[11px] uppercase tracking-wider ${adminDarkMode ? 'bg-slate-800/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <tr>
                      <th className="py-3 px-4">Judul Artikel</th>
                      <th className="py-3 px-4">Kategori</th>
                      <th className="py-3 px-4">Penulis</th>
                      <th className="py-3 px-4">Tanggal</th>
                      <th className="py-3 px-4 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {articles.map((art) => (
                      <tr key={art.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                        <td className="py-3.5 px-4 font-bold">{art.title}</td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-slate-800 dark:text-blue-400 text-xs">
                            {art.category}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-500">{art.author}</td>
                        <td className="py-3.5 px-4 text-slate-400 text-xs">{art.date}</td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => {
                                setEditingArticle(art);
                                setArticleForm({
                                  title: art.title,
                                  category: art.category,
                                  date: art.date,
                                  author: art.author,
                                  readTime: art.readTime,
                                  imageType: art.imageType,
                                  summary: art.summary,
                                  content: art.content.join('\n\n'),
                                  tags: art.tags.join(', ')
                                });
                                setIsAddingArticle(false);
                              }}
                              className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-blue-600"
                              title="Edit Artikel"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => {
                                setConfirmModal({
                                  isOpen: true,
                                  title: 'Hapus Artikel',
                                  message: `Apakah Anda yakin ingin menghapus artikel "${art.title}"?`,
                                  confirmText: 'Ya, Hapus Artikel',
                                  onConfirm: () => {
                                    deleteArticle(art.id);
                                    showToast('Artikel berhasil dihapus');
                                  }
                                });
                              }}
                              className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-rose-500 cursor-pointer"
                              title="Hapus Artikel"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB: KELOLA PROFIL PERUSAHAAN */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold font-display">Kelola Profil Perusahaan</h1>
                <p className="text-xs sm:text-sm text-slate-500">
                  Perbarui identitas legal, nama resmi, tagline, dan akreditasi sertifikasi PT Industri Nusantara.
                </p>
              </div>

              <div className={`p-6 rounded-2xl border ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-5`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div>
                    <label className="block font-semibold mb-1">Nama Perusahaan</label>
                    <input
                      type="text"
                      value={companyForm.name}
                      onChange={e => setCompanyForm({ ...companyForm, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1">Tagline Korporat</label>
                    <input
                      type="text"
                      value={companyForm.tagline}
                      onChange={e => setCompanyForm({ ...companyForm, tagline: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1">Tahun Berdiri</label>
                    <input
                      type="number"
                      value={companyForm.establishedYear}
                      onChange={e => setCompanyForm({ ...companyForm, establishedYear: Number(e.target.value) })}
                      className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1">Daftar Sertifikasi (Pisahkan dengan koma)</label>
                    <input
                      type="text"
                      value={companyForm.certifications.join(', ')}
                      onChange={e => setCompanyForm({
                        ...companyForm,
                        certifications: e.target.value.split(',').map(c => c.trim()).filter(Boolean)
                      })}
                      className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <button
                    onClick={() => {
                      updateCompanyInfo(companyForm);
                      showToast('Profil perusahaan berhasil diperbarui!');
                    }}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Save className="w-4 h-4" />
                    <span>Simpan Perubahan Profil</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB: PENGATURAN KONTAK & SOSIAL MEDIA */}
          {activeTab === 'contacts' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold font-display">Pengaturan Kontak & Media Sosial</h1>
                <p className="text-xs sm:text-sm text-slate-500">
                  Kelola saluran komunikasi resmi, nomor WhatsApp, alamat fasilitas pabrik, dan akun media sosial.
                </p>
              </div>

              <div className={`p-6 rounded-2xl border ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-6 text-xs sm:text-sm`}>
                
                {/* Kontak Utama */}
                <div className="space-y-4">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
                    Informasi Kontak Fasilitas & Kantor
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold mb-1">Nomor Telepon Kantor</label>
                      <input
                        type="text"
                        value={companyForm.phone}
                        onChange={e => setCompanyForm({ ...companyForm, phone: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">WhatsApp Resmi</label>
                      <input
                        type="text"
                        value={companyForm.whatsapp}
                        onChange={e => setCompanyForm({ ...companyForm, whatsapp: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Email Resmi</label>
                      <input
                        type="email"
                        value={companyForm.email}
                        onChange={e => setCompanyForm({ ...companyForm, email: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Jam Operasional</label>
                      <input
                        type="text"
                        value={companyForm.workingHours}
                        onChange={e => setCompanyForm({ ...companyForm, workingHours: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block font-semibold mb-1">Alamat Lengkap Fasilitas Workshop</label>
                      <input
                        type="text"
                        value={companyForm.address}
                        onChange={e => setCompanyForm({ ...companyForm, address: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block font-semibold mb-1">Kota / Kawasan</label>
                      <input
                        type="text"
                        value={companyForm.city}
                        onChange={e => setCompanyForm({ ...companyForm, city: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Sosial Media */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
                    Tautan Media Sosial Resmi
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold mb-1">LinkedIn Profile</label>
                      <input
                        type="url"
                        value={companyForm.socials.linkedin}
                        onChange={e => setCompanyForm({
                          ...companyForm,
                          socials: { ...companyForm.socials, linkedin: e.target.value }
                        })}
                        className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Instagram Account</label>
                      <input
                        type="url"
                        value={companyForm.socials.instagram}
                        onChange={e => setCompanyForm({
                          ...companyForm,
                          socials: { ...companyForm.socials, instagram: e.target.value }
                        })}
                        className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">YouTube Channel</label>
                      <input
                        type="url"
                        value={companyForm.socials.youtube}
                        onChange={e => setCompanyForm({
                          ...companyForm,
                          socials: { ...companyForm.socials, youtube: e.target.value }
                        })}
                        className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1">Facebook Page</label>
                      <input
                        type="url"
                        value={companyForm.socials.facebook}
                        onChange={e => setCompanyForm({
                          ...companyForm,
                          socials: { ...companyForm.socials, facebook: e.target.value }
                        })}
                        className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <button
                    onClick={() => {
                      updateCompanyInfo(companyForm);
                      showToast('Pengaturan kontak & sosmed berhasil diperbarui!');
                    }}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Save className="w-4 h-4" />
                    <span>Simpan Kontak & Sosmed</span>
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* TAB: KELOLA TENTANG KAMI */}
          {activeTab === 'about' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold font-display">Kelola Halaman Tentang Kami</h1>
                <p className="text-xs sm:text-sm text-slate-500">
                  Konfigurasikan narasi visi, misi, legalitas sertifikasi, dan kapasitas fasilitas workshop.
                </p>
              </div>

              <div className={`p-6 rounded-2xl border ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-5 text-xs sm:text-sm`}>
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold mb-1">Tahun Pendirian Perusahaan</label>
                    <input
                      type="number"
                      value={companyForm.establishedYear}
                      onChange={e => setCompanyForm({ ...companyForm, establishedYear: Number(e.target.value) })}
                      className="w-full sm:w-48 px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-1">Daftar Sertifikasi & Akreditasi (Pisahkan dengan koma)</label>
                    <input
                      type="text"
                      value={companyForm.certifications.join(', ')}
                      onChange={e => setCompanyForm({
                        ...companyForm,
                        certifications: e.target.value.split(',').map(c => c.trim()).filter(Boolean)
                      })}
                      className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                    />
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                    <span className="font-bold text-slate-700 dark:text-slate-300 block">Status Narasi Tentang Kami:</span>
                    <p className="text-slate-500 leading-relaxed text-xs">
                      Halaman Tentang Kami saat ini telah dilengkapi dengan sejarah terperinci dari tahun 2004 hingga 2026, 4 pilar nilai integritas presisi, legalitas NIB/ISO/ASME/TKDN, serta profil lengkap dewan direksi dan insinyur kepala.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <button
                    onClick={() => {
                      updateCompanyInfo(companyForm);
                      showToast('Pengaturan Tentang Kami tersimpan!');
                    }}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Save className="w-4 h-4" />
                    <span>Simpan Pengaturan Tentang</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: KELOLA HERO & BERANDA */}
          {activeTab === 'hero' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold font-display">Kelola Hero Banner Beranda</h1>
                <p className="text-xs sm:text-sm text-slate-500">
                  Sesuaikan teks headline utama, badge, dan pengantar nilai tambah di layar utama.
                </p>
              </div>

              <div className={`p-6 rounded-2xl border ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-4 text-xs sm:text-sm`}>
                <div>
                  <label className="block font-semibold mb-1">Teks Badge Hero</label>
                  <input
                    type="text"
                    value={companyForm.heroBadge}
                    onChange={e => setCompanyForm({ ...companyForm, heroBadge: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1">Judul Utama (Display Headline)</label>
                  <input
                    type="text"
                    value={companyForm.heroTitle}
                    onChange={e => setCompanyForm({ ...companyForm, heroTitle: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none text-base font-bold"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1">Deskripsi Hero</label>
                  <textarea
                    rows={3}
                    value={companyForm.heroDescription}
                    onChange={e => setCompanyForm({ ...companyForm, heroDescription: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => {
                      updateCompanyInfo(companyForm);
                      showToast('Hero banner berhasil diperbarui!');
                    }}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Save className="w-4 h-4" />
                    <span>Simpan Hero Banner</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: PENGATURAN SEO (WEBSITE, LAYANAN, PROJECT, ARTIKEL) */}
          {activeTab === 'seo' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold font-display">Pengaturan SEO (Search Engine Optimization)</h1>
                <p className="text-xs sm:text-sm text-slate-500">
                  Konfigurasikan optimasi mesin pencari untuk halaman global, katalog layanan, portofolio proyek, artikel teknis, dan file sitemap.
                </p>
              </div>

              {/* Sub-Tabs Selector */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 border-b border-slate-200 dark:border-slate-800">
                {[
                  { id: 'website', label: 'SEO Website Global' },
                  { id: 'services', label: 'SEO Layanan' },
                  { id: 'projects', label: 'SEO Project' },
                  { id: 'articles', label: 'SEO Artikel' },
                  { id: 'files', label: 'Robots.txt & Sitemap' },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setSeoSubTab(st.id as any)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                      seoSubTab === st.id
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>

              {/* Sub-Tab 1: SEO Website Global */}
              {seoSubTab === 'website' && (
                <div className={`p-6 rounded-2xl border ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-4 text-xs sm:text-sm`}>
                  <div>
                    <label className="block font-semibold mb-1">Meta Title Global (Maks 60 karakter disarankan)</label>
                    <input
                      type="text"
                      value={seoForm.metaTitle}
                      onChange={e => setSeoForm({ ...seoForm, metaTitle: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none font-medium"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-1">Meta Description (Maks 160 karakter)</label>
                    <textarea
                      rows={2}
                      value={seoForm.metaDescription}
                      onChange={e => setSeoForm({ ...seoForm, metaDescription: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none resize-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-1">Kata Kunci SEO (Keywords)</label>
                    <input
                      type="text"
                      value={seoForm.keywords}
                      onChange={e => setSeoForm({ ...seoForm, keywords: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-1">URL Kanonikal</label>
                    <input
                      type="text"
                      value={seoForm.canonicalUrl}
                      onChange={e => setSeoForm({ ...seoForm, canonicalUrl: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none font-mono text-xs"
                    />
                  </div>

                  {/* Google Search Result Preview */}
                  <div className="pt-2">
                    <span className="text-xs font-bold text-slate-400 block mb-2">
                      Pratinjau Hasil Pencarian Google (Snippet Preview):
                    </span>
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                      <span className="text-[11px] text-emerald-700 dark:text-emerald-400 block">
                        {seoForm.canonicalUrl}
                      </span>
                      <h4 className="text-base font-medium text-blue-700 dark:text-blue-400 hover:underline cursor-pointer">
                        {seoForm.metaTitle}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                        {seoForm.metaDescription}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                    <button
                      onClick={() => {
                        updateSEOSettings(seoForm);
                        showToast('Pengaturan SEO Global berhasil disimpan!');
                      }}
                      className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <Save className="w-4 h-4" />
                      <span>Simpan SEO Website</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Sub-Tab 2: SEO Layanan */}
              {seoSubTab === 'services' && (
                <div className={`p-6 rounded-2xl border ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-4 text-xs sm:text-sm`}>
                  <h3 className="font-bold text-sm">Konfigurasi SEO Halaman Layanan Manufaktur</h3>
                  <p className="text-xs text-slate-500">
                    Setiap layanan secara otomatis dioptimalkan dengan URL slug ramah mesin pencari dan schema markup Structured Data (Service / Product).
                  </p>

                  <div className="space-y-3 pt-2">
                    <span className="font-semibold text-xs block">Daftar Slug & Status Terindeks ({services.length} Layanan):</span>
                    <div className="divide-y divide-slate-100 dark:divide-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                      {services.map((srv) => (
                        <div key={srv.id} className="p-3 flex items-center justify-between gap-4 bg-slate-50/50 dark:bg-slate-950/40">
                          <div>
                            <strong className="block text-xs font-bold">{srv.title}</strong>
                            <span className="text-[11px] text-blue-600 font-mono">/layanan/{srv.slug}</span>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 dark:bg-slate-800 dark:text-emerald-400 text-[10px] font-bold">
                            Schema: Service Ready
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Sub-Tab 3: SEO Project */}
              {seoSubTab === 'projects' && (
                <div className={`p-6 rounded-2xl border ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-4 text-xs sm:text-sm`}>
                  <h3 className="font-bold text-sm">Konfigurasi SEO Halaman Portofolio Proyek</h3>
                  <p className="text-xs text-slate-500">
                    Setiap studi kasus rekayasa memiliki meta tags dinamis untuk meningkatkan visibilitas pada pencarian B2B dan industri OEM.
                  </p>

                  <div className="space-y-3 pt-2">
                    <span className="font-semibold text-xs block">Daftar Proyek & Status URL ({projects.length} Proyek):</span>
                    <div className="divide-y divide-slate-100 dark:divide-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                      {projects.map((prj) => (
                        <div key={prj.id} className="p-3 flex items-center justify-between gap-4 bg-slate-50/50 dark:bg-slate-950/40">
                          <div>
                            <strong className="block text-xs font-bold">{prj.title}</strong>
                            <span className="text-[11px] text-blue-600 font-mono">/proyek/{prj.slug}</span>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 dark:bg-slate-800 dark:text-emerald-400 text-[10px] font-bold">
                            Klien: {prj.client}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Sub-Tab 4: SEO Artikel */}
              {seoSubTab === 'articles' && (
                <div className={`p-6 rounded-2xl border ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-4 text-xs sm:text-sm`}>
                  <h3 className="font-bold text-sm">Konfigurasi SEO Halaman Artikel & Wawasan</h3>
                  <p className="text-xs text-slate-500">
                    Mendukung Schema.org `Article` / `BlogPosting`, Twitter Large Card, dan meta tags kepenulisan teknik.
                  </p>

                  <div className="space-y-3 pt-2">
                    <span className="font-semibold text-xs block">Daftar Artikel & Meta Kepenulisan ({articles.length} Artikel):</span>
                    <div className="divide-y divide-slate-100 dark:divide-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                      {articles.map((art) => (
                        <div key={art.id} className="p-3 flex items-center justify-between gap-4 bg-slate-50/50 dark:bg-slate-950/40">
                          <div>
                            <strong className="block text-xs font-bold">{art.title}</strong>
                            <span className="text-[11px] text-blue-600 font-mono">/artikel/{art.slug}</span>
                          </div>
                          <span className="text-[11px] text-slate-500 shrink-0">
                            {art.author} · {art.date}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Sub-Tab 5: Robots.txt & Sitemap.xml */}
              {seoSubTab === 'files' && (
                <div className={`p-6 rounded-2xl border ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-6 text-xs sm:text-sm`}>
                  <div>
                    <h3 className="font-bold text-sm mb-1">Pratinjau File robots.txt & sitemap.xml</h3>
                    <p className="text-xs text-slate-500">
                      File konfigurasi crawler bot pencari Google, Bing, dan indexer industri.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs font-mono">/public/robots.txt</span>
                      <span className="text-[10px] text-emerald-600 font-bold">STATUS: AKTIF</span>
                    </div>
                    <pre className="p-3 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto">
{`User-agent: *
Allow: /
Disallow: /#admin

Sitemap: https://industrinusantara.co.id/sitemap.xml`}
                    </pre>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs font-mono">/public/sitemap.xml</span>
                      <span className="text-[10px] text-emerald-600 font-bold">STATUS: TERINDEX</span>
                    </div>
                    <pre className="p-3 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto max-h-48">
{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://industrinusantara.co.id/</loc><priority>1.0</priority></url>
  <url><loc>https://industrinusantara.co.id/#/tentang</loc><priority>0.8</priority></url>
  <url><loc>https://industrinusantara.co.id/#/layanan</loc><priority>0.9</priority></url>
  <url><loc>https://industrinusantara.co.id/#/proyek</loc><priority>0.9</priority></url>
  <url><loc>https://industrinusantara.co.id/#/artikel</loc><priority>0.8</priority></url>
  <url><loc>https://industrinusantara.co.id/#/kontak</loc><priority>0.7</priority></url>
</urlset>`}
                    </pre>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 9: WARNA, LOGO & FAVICON */}
          {activeTab === 'branding' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold font-display">Pengaturan Warna, Logo & Favicon</h1>
                <p className="text-xs sm:text-sm text-slate-500">
                  Sesuaikan identitas visual perusahaan, warna aksen, badge logo navbar, dan icon favicon browser.
                </p>
              </div>

              <div className={`p-6 rounded-2xl border ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-6 text-xs sm:text-sm`}>
                
                {/* 1. Warna Website */}
                <div className="space-y-3">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
                    1. Palet Warna Website (Theme Colors)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold mb-2">Warna Primer (Primary Blue)</label>
                      <div className="flex items-center gap-3">
                        <input
                          type="color"
                          value={themeForm.primaryColor}
                          onChange={e => setThemeForm({ ...themeForm, primaryColor: e.target.value })}
                          className="w-12 h-10 rounded-lg cursor-pointer border-0 bg-transparent p-0"
                        />
                        <input
                          type="text"
                          value={themeForm.primaryColor}
                          onChange={e => setThemeForm({ ...themeForm, primaryColor: e.target.value })}
                          className="px-3 py-2 rounded-lg border font-mono text-xs w-32"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold mb-2">Warna Aksen (Secondary Orange)</label>
                      <div className="flex items-center gap-3">
                        <input
                          type="color"
                          value={themeForm.accentColor}
                          onChange={e => setThemeForm({ ...themeForm, accentColor: e.target.value })}
                          className="w-12 h-10 rounded-lg cursor-pointer border-0 bg-transparent p-0"
                        />
                        <input
                          type="text"
                          value={themeForm.accentColor}
                          onChange={e => setThemeForm({ ...themeForm, accentColor: e.target.value })}
                          className="px-3 py-2 rounded-lg border font-mono text-xs w-32"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Pengaturan Logo */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
                    2. Pengaturan Logo & Wordmark Brand
                  </h3>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-xl text-white font-black text-base flex items-center justify-center shadow-md transition-colors"
                      style={{ backgroundColor: themeForm.primaryColor }}
                    >
                      IN
                    </div>
                    <div>
                      <span className="font-bold text-sm block">{companyForm.name}</span>
                      <span className="text-xs text-slate-500">Wordmark Header Navigasi Resmi</span>
                    </div>
                  </div>
                </div>

                {/* 3. Pengaturan Favicon */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
                    3. Pengaturan Favicon Browser
                  </h3>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <div
                      className="w-8 h-8 rounded-lg text-white font-extrabold text-xs flex items-center justify-center shadow-xs"
                      style={{ backgroundColor: themeForm.primaryColor }}
                    >
                      IN
                    </div>
                    <div>
                      <strong className="text-xs block">Icon Tab Browser (32x32 SVG Favicon)</strong>
                      <span className="text-[11px] text-slate-500">Otomatis sinkron dengan warna primer yang Anda pilih.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => {
                      updateThemeSettings(themeForm);
                      showToast('Pengaturan warna, logo & favicon tersimpan!');
                    }}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Save className="w-4 h-4" />
                    <span>Terapkan Branding</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 10: TESTIMONI & CLIENT */}
          {activeTab === 'testimonials' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold font-display">Kelola Testimoni Klien</h1>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Daftar ulasan dari pimpinan pabrik dan direktur operasional mitra industri.
                  </p>
                </div>
              </div>

              {/* Form Tambah Testimoni Cepat */}
              <div className={`p-5 rounded-2xl border ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-4 text-xs sm:text-sm`}>
                <span className="font-bold block">Tambah Testimoni Baru</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="Nama Klien..."
                    value={newTestimonial.name}
                    onChange={e => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                    className="px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Jabatan (e.g. Plant Director)..."
                    value={newTestimonial.role}
                    onChange={e => setNewTestimonial({ ...newTestimonial, role: e.target.value })}
                    className="px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Nama Perusahaan..."
                    value={newTestimonial.company}
                    onChange={e => setNewTestimonial({ ...newTestimonial, company: e.target.value })}
                    className="px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                  />
                </div>
                <textarea
                  rows={2}
                  placeholder="Kutipan testimoni..."
                  value={newTestimonial.quote}
                  onChange={e => setNewTestimonial({ ...newTestimonial, quote: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none resize-none"
                />
                <button
                  onClick={() => {
                    if (newTestimonial.name && newTestimonial.quote) {
                      addTestimonial({
                        name: newTestimonial.name,
                        role: newTestimonial.role,
                        company: newTestimonial.company,
                        avatarInitials: newTestimonial.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase(),
                        quote: newTestimonial.quote,
                        rating: 5,
                        projectRef: 'Proyek Presisi'
                      });
                      setNewTestimonial({
                        name: '',
                        role: '',
                        company: '',
                        avatarInitials: 'PT',
                        quote: '',
                        rating: 5,
                        projectRef: ''
                      });
                      showToast('Testimoni berhasil ditambahkan!');
                    }
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-xs"
                >
                  Tambah Testimoni
                </button>
              </div>

              {/* Testimonials List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {testimonials.map((testi) => (
                  <div
                    key={testi.id}
                    className={`p-4 rounded-xl border flex flex-col justify-between ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <strong className="font-bold text-sm">{testi.name}</strong>
                        <button
                          onClick={() => {
                            deleteTestimonial(testi.id);
                            showToast('Testimoni dihapus');
                          }}
                          className="text-rose-500 hover:text-rose-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-xs text-blue-600 block">{testi.role} — {testi.company}</span>
                      <p className="text-xs text-slate-500 italic">"{testi.quote}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 11: KELOLA CLIENT */}
          {activeTab === 'clients' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold font-display">Kelola Mitra Klien Korporasi</h1>
                <p className="text-xs sm:text-sm text-slate-500">
                  Logo dan nama brand mitra yang ditampilkan pada section klien beranda.
                </p>
              </div>

              {/* Tambah Klien Cepat */}
              <div className={`p-4 rounded-2xl border ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} flex flex-col sm:flex-row gap-3`}>
                <input
                  type="text"
                  placeholder="Nama Mitra..."
                  value={newClient.name}
                  onChange={e => setNewClient({ ...newClient, name: e.target.value })}
                  className="px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none text-xs sm:text-sm flex-1"
                />
                <input
                  type="text"
                  placeholder="Sektor Industri..."
                  value={newClient.industry}
                  onChange={e => setNewClient({ ...newClient, industry: e.target.value })}
                  className="px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none text-xs sm:text-sm flex-1"
                />
                <input
                  type="text"
                  placeholder="Teks Logo Display..."
                  value={newClient.logoText}
                  onChange={e => setNewClient({ ...newClient, logoText: e.target.value })}
                  className="px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none text-xs sm:text-sm flex-1"
                />
                <button
                  onClick={() => {
                    if (newClient.name) {
                      addClient({
                        name: newClient.name,
                        industry: newClient.industry || 'Manufaktur',
                        logoText: newClient.logoText || newClient.name.toUpperCase()
                      });
                      setNewClient({ name: '', industry: '', logoText: '' });
                      showToast('Mitra baru ditambahkan');
                    }
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-xs"
                >
                  Tambah Mitra
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {clients.map((c) => (
                  <div
                    key={c.id}
                    className={`p-4 rounded-xl border flex items-center justify-between ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}
                  >
                    <div>
                      <strong className="text-xs sm:text-sm font-bold block">{c.logoText}</strong>
                      <span className="text-[11px] text-slate-400">{c.industry}</span>
                    </div>
                    <button
                      onClick={() => {
                        deleteClient(c.id);
                        showToast('Mitra dihapus');
                      }}
                      className="text-rose-500 hover:text-rose-700 p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 12: MEDIA MANAGER */}
          {activeTab === 'media' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold font-display">Media & Visual Manager</h1>
                <p className="text-xs sm:text-sm text-slate-500">
                  Kelola aset gambar workshop dan galeri teknis. Seluruh aset terintegrasi lokal dan siap pakai pada deployment Vercel/VPS.
                </p>
              </div>

              <div className={`p-5 rounded-2xl border ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-4 text-xs sm:text-sm`}>
                <span className="font-bold block">Daftarkan Aset Media Baru</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Nama Aset / Foto..."
                    value={uploadName}
                    onChange={e => setUploadName(e.target.value)}
                    className="px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                  />
                  <select
                    value={uploadCategory}
                    onChange={e => setUploadCategory(e.target.value)}
                    className="px-3 py-2 rounded-lg border bg-slate-50 dark:bg-slate-950 focus:outline-none"
                  >
                    <option value="Workshop">Workshop & Lini Produksi</option>
                    <option value="Machining">CNC & Machining</option>
                    <option value="Fabrication">Fabrikasi & Pengelasan</option>
                    <option value="Inspection">Metrologi & Quality Control</option>
                  </select>
                </div>
                <button
                  onClick={() => {
                    if (uploadName) {
                      addMediaAsset(uploadName, '', uploadCategory);
                      setUploadName('');
                      showToast('Aset media berhasil didaftarkan');
                    }
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-xs"
                >
                  Simpan ke Library
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {mediaLibrary.map((med) => (
                  <div
                    key={med.id}
                    className={`p-4 rounded-xl border ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-2`}
                  >
                    <div className="h-28 rounded-lg bg-slate-950 flex items-center justify-center text-slate-500 font-mono text-xs">
                      [Visual Asset: {med.category}]
                    </div>
                    <strong className="text-xs font-bold block truncate">{med.name}</strong>
                    <span className="text-[10px] text-blue-600">{med.category}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 13: BACKUP & RESTORE DATA */}
          {activeTab === 'backup' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold font-display">Backup, Export & Restore Data CMS</h1>
                <p className="text-xs sm:text-sm text-slate-500">
                  Ekspor seluruh data dummy dan perubahan konten Anda ke format JSON agar dapat langsung dipindahkan ke server VPS, Vercel, maupun shared hosting tanpa perlu database eksternal.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Export Card */}
                <div className={`p-6 rounded-2xl border ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-4`}>
                  <div className="flex items-center gap-2 font-bold text-base">
                    <Download className="w-5 h-5 text-blue-600" />
                    <span>Ekspor Data JSON</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Unduh cadangan data lengkap (layanan, proyek, artikel, testimoni, profil perusahaan, dan SEO) dalam satu file JSON.
                  </p>
                  <button
                    onClick={() => {
                      const json = exportDataJSON();
                      const blob = new Blob([json], { type: 'application/json' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `pt-industri-nusantara-backup-${new Date().toISOString().slice(0, 10)}.json`;
                      a.click();
                      showToast('File backup berhasil diunduh!');
                    }}
                    className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download JSON Backup</span>
                  </button>
                </div>

                {/* Reset Card */}
                <div className={`p-6 rounded-2xl border ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-4`}>
                  <div className="flex items-center gap-2 font-bold text-base text-rose-600">
                    <RefreshCw className="w-5 h-5" />
                    <span>Reset Data ke Awal (Default)</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Kembalikan seluruh data profil, 8 layanan, 8 proyek, dan 6 artikel ke kondisi bawaan pabrik awal.
                  </p>
                  <button
                    onClick={() => {
                      setConfirmModal({
                        isOpen: true,
                        title: 'Reset Seluruh Data Pabrik',
                        message: 'Yakin ingin mereset seluruh data kembali ke bawaan awal? Tindakan ini akan menghapus modifikasi lokal dan mengembalikan data default.',
                        confirmText: 'Ya, Reset Data',
                        onConfirm: () => {
                          resetToDefaultData();
                          showToast('Seluruh data berhasil di-reset ke nilai default!');
                        }
                      });
                    }}
                    className="w-full py-2.5 px-4 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Reset ke Data Default</span>
                  </button>
                </div>

              </div>

              {/* Import Textarea */}
              <div className={`p-6 rounded-2xl border ${adminDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} space-y-4`}>
                <div className="flex items-center gap-2 font-bold text-base">
                  <Upload className="w-5 h-5 text-emerald-600" />
                  <span>Impor / Restore Data JSON</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Tempelkan (paste) teks JSON cadangan di bawah ini untuk memulihkan konten situs secara instan:
                </p>
                <textarea
                  rows={4}
                  placeholder='Tempelkan isi file JSON di sini (misal: { "version": "1.0", ... })'
                  value={importJsonText}
                  onChange={e => setImportJsonText(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border bg-slate-50 dark:bg-slate-950 font-mono text-xs focus:outline-none"
                />
                <button
                  onClick={() => {
                    if (importJsonText.trim()) {
                      const ok = importDataJSON(importJsonText);
                      if (ok) {
                        showToast('Data berhasil diimpor!');
                        setImportJsonText('');
                      } else {
                        showToast('Format JSON tidak valid atau rusak.', true);
                      }
                    }
                  }}
                  className="py-2.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-xs sm:text-sm cursor-pointer shadow-xs"
                >
                  Terapkan Data JSON
                </button>
              </div>

            </div>
          )}

        </main>

      </div>

      {/* Confirmation Dialog Modal */}
      {confirmModal && confirmModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className={`w-full max-w-md p-6 rounded-2xl border shadow-2xl space-y-4 ${
            adminDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-800'
          }`}>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-rose-100 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400">
                <Trash2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base">{confirmModal.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5">Konfirmasi tindakan administratif</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {confirmModal.message}
            </p>
            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setConfirmModal(null)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium border cursor-pointer transition-colors ${
                  adminDarkMode ? 'border-slate-700 hover:bg-slate-800 text-slate-300' : 'border-slate-200 hover:bg-slate-100 text-slate-700'
                }`}
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => {
                  confirmModal.onConfirm();
                  setConfirmModal(null);
                }}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-rose-600 hover:bg-rose-700 text-white cursor-pointer shadow-xs transition-colors"
              >
                {confirmModal.confirmText || 'Ya, Lanjutkan'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
