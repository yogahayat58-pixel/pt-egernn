import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Navbar: React.FC = () => {
  const { currentRoute, navigateTo, companyInfo } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Beranda', path: 'beranda', activeKey: 'home' },
    { label: 'Tentang Kami', path: 'tentang', activeKey: 'about' },
    { label: 'Layanan', path: 'layanan', activeKey: 'services' },
    { label: 'Proyek', path: 'proyek', activeKey: 'projects' },
    { label: 'Artikel', path: 'artikel', activeKey: 'articles' },
    { label: 'Kontak', path: 'kontak', activeKey: 'contact' },
  ];

  const handleNavClick = (path: string) => {
    navigateTo(path);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'glass-panel shadow-sm border-b border-slate-200/80 py-3.5'
          : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Single text element wordmark / brand */}
          <button
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-sm tracking-tighter shadow-sm group-hover:bg-blue-700 transition-colors">
              IN
            </div>
            <span className="text-lg md:text-xl font-extrabold tracking-tight text-slate-900 font-display">
              {companyInfo.name}
            </span>
          </button>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive =
                currentRoute === item.activeKey ||
                (item.activeKey === 'services' && currentRoute === 'service-detail') ||
                (item.activeKey === 'projects' && currentRoute === 'project-detail') ||
                (item.activeKey === 'articles' && currentRoute === 'article-detail');

              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-sm font-medium transition-colors cursor-pointer relative py-1 focus:outline-none ${
                    isActive
                      ? 'text-blue-600 font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('admin')}
              className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                currentRoute === 'admin'
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
              }`}
              title="Dashboard Pengelolaan Website"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Admin Panel</span>
            </button>

            <button
              onClick={() => handleNavClick('kontak')}
              className="px-4 py-2 text-xs md:text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm cursor-pointer whitespace-nowrap flex items-center gap-1.5"
            >
              <span>Hubungi Kami</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('admin')}
              className="p-2 text-xs font-medium text-slate-700 rounded-md hover:bg-slate-100"
              aria-label="Admin"
            >
              <ShieldCheck className="w-5 h-5 text-blue-600" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white border-b border-slate-200 shadow-xl px-5 py-6 space-y-3 z-50 animate-in fade-in duration-150">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50 text-left transition-colors"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => handleNavClick('kontak')}
              className="w-full py-2.5 px-4 text-sm font-semibold text-center text-white bg-blue-600 rounded-lg shadow-sm"
            >
              Hubungi Tim Rekayasa
            </button>
            <button
              onClick={() => handleNavClick('admin')}
              className="w-full py-2.5 px-4 text-sm font-semibold text-center text-slate-700 bg-slate-100 rounded-lg flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Kelola Website (Admin)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
