import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ServiceItem,
  ProjectItem,
  ArticleItem,
  TestimonialItem,
  ClientPartner,
  ContactMessage,
  CompanyInfo,
  SEOSettings,
  ThemeSettings
} from '../types';
import {
  initialServices,
  initialProjects,
  initialArticles,
  initialTestimonials,
  initialClients,
  initialCompanyInfo,
  initialSEOSettings,
  initialThemeSettings
} from '../data/initialData';

interface AppContextType {
  // Navigation
  currentRoute: string;
  routeParam: string | null;
  navigateTo: (path: string) => void;

  // Data
  services: ServiceItem[];
  projects: ProjectItem[];
  articles: ArticleItem[];
  testimonials: TestimonialItem[];
  clients: ClientPartner[];
  contactMessages: ContactMessage[];
  companyInfo: CompanyInfo;
  seoSettings: SEOSettings;
  themeSettings: ThemeSettings;
  mediaLibrary: { id: string; name: string; url: string; category: string }[];

  // CRUD Operations
  addService: (item: Omit<ServiceItem, 'id'>) => void;
  updateService: (id: string, item: Partial<ServiceItem>) => void;
  deleteService: (id: string) => void;

  addProject: (item: Omit<ProjectItem, 'id'>) => void;
  updateProject: (id: string, item: Partial<ProjectItem>) => void;
  deleteProject: (id: string) => void;

  addArticle: (item: Omit<ArticleItem, 'id'>) => void;
  updateArticle: (id: string, item: Partial<ArticleItem>) => void;
  deleteArticle: (id: string) => void;

  addTestimonial: (item: Omit<TestimonialItem, 'id'>) => void;
  updateTestimonial: (id: string, item: Partial<TestimonialItem>) => void;
  deleteTestimonial: (id: string) => void;

  addClient: (item: Omit<ClientPartner, 'id'>) => void;
  updateClient: (id: string, item: Partial<ClientPartner>) => void;
  deleteClient: (id: string) => void;

  submitContactMessage: (msg: Omit<ContactMessage, 'id' | 'date' | 'isRead'>) => boolean;
  markMessageRead: (id: string) => void;
  deleteMessage: (id: string) => void;

  updateCompanyInfo: (info: Partial<CompanyInfo>) => void;
  updateSEOSettings: (settings: Partial<SEOSettings>) => void;
  updateThemeSettings: (settings: Partial<ThemeSettings>) => void;
  addMediaAsset: (name: string, url: string, category: string) => void;

  // Backup & Restore
  exportDataJSON: () => string;
  importDataJSON: (jsonStr: string) => boolean;
  resetToDefaultData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation State
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [routeParam, setRouteParam] = useState<string | null>(null);

  // Parse path on initial load and handle browser back/forward buttons
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.replace('#', '') || '/';
      parseAndSetRoute(hash);
    };

    handleLocationChange();
    window.addEventListener('hashchange', handleLocationChange);
    return () => window.removeEventListener('hashchange', handleLocationChange);
  }, []);

  const parseAndSetRoute = (path: string) => {
    // Sanitize path: remove query params, leading hashes/slashes
    const withoutQuery = path.split('?')[0].split('#')[0];
    const clean = withoutQuery.replace(/^[\/#]+/, '').replace(/\/+$/, '');
    const parts = clean.split('/').filter(Boolean);

    if (parts.length === 0 || parts[0] === 'beranda') {
      setCurrentRoute('home');
      setRouteParam(null);
    } else if (parts[0] === 'tentang') {
      setCurrentRoute('about');
      setRouteParam(null);
    } else if (parts[0] === 'layanan') {
      if (parts[1]) {
        setCurrentRoute('service-detail');
        setRouteParam(parts[1]);
      } else {
        setCurrentRoute('services');
        setRouteParam(null);
      }
    } else if (parts[0] === 'proyek') {
      if (parts[1]) {
        setCurrentRoute('project-detail');
        setRouteParam(parts[1]);
      } else {
        setCurrentRoute('projects');
        setRouteParam(null);
      }
    } else if (parts[0] === 'artikel') {
      if (parts[1]) {
        setCurrentRoute('article-detail');
        setRouteParam(parts[1]);
      } else {
        setCurrentRoute('articles');
        setRouteParam(null);
      }
    } else if (parts[0] === 'kontak') {
      setCurrentRoute('contact');
      setRouteParam(null);
    } else if (parts[0] === 'admin') {
      setCurrentRoute('admin');
      setRouteParam(parts[1] || 'dashboard');
    } else {
      setCurrentRoute('home');
      setRouteParam(null);
    }
  };

  const navigateTo = (path: string) => {
    const formatted = path.startsWith('/') ? path : `/${path}`;
    window.location.hash = formatted;
    parseAndSetRoute(formatted);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // State with LocalStorage Persistence
  const [services, setServices] = useState<ServiceItem[]>(() => {
    try {
      const stored = localStorage.getItem('ptin_services');
      return stored ? JSON.parse(stored) : initialServices;
    } catch {
      return initialServices;
    }
  });

  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    try {
      const stored = localStorage.getItem('ptin_projects');
      return stored ? JSON.parse(stored) : initialProjects;
    } catch {
      return initialProjects;
    }
  });

  const [articles, setArticles] = useState<ArticleItem[]>(() => {
    try {
      const stored = localStorage.getItem('ptin_articles');
      return stored ? JSON.parse(stored) : initialArticles;
    } catch {
      return initialArticles;
    }
  });

  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => {
    try {
      const stored = localStorage.getItem('ptin_testimonials');
      return stored ? JSON.parse(stored) : initialTestimonials;
    } catch {
      return initialTestimonials;
    }
  });

  const [clients, setClients] = useState<ClientPartner[]>(() => {
    try {
      const stored = localStorage.getItem('ptin_clients');
      return stored ? JSON.parse(stored) : initialClients;
    } catch {
      return initialClients;
    }
  });

  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() => {
    try {
      const stored = localStorage.getItem('ptin_messages');
      return stored ? JSON.parse(stored) : [
        {
          id: 'msg-demo-1',
          date: '2026-09-24 14:32',
          name: 'Budi Santoso',
          email: 'budi@ptmanufakturmandiri.com',
          phone: '081298765432',
          company: 'PT Manufaktur Mandiri',
          serviceInterest: 'Fabrikasi Logam Presisi',
          message: 'Halo PT Industri Nusantara, kami membutuhkan penawaran harga untuk fabrikasi 4 unit storage tank SUS304 kapasitas 10.000 liter untuk pabrik minuman kami di Sukabumi.',
          isRead: false
        }
      ];
    } catch {
      return [];
    }
  });

  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(() => {
    try {
      const stored = localStorage.getItem('ptin_company');
      return stored ? JSON.parse(stored) : initialCompanyInfo;
    } catch {
      return initialCompanyInfo;
    }
  });

  const [seoSettings, setSeoSettings] = useState<SEOSettings>(() => {
    try {
      const stored = localStorage.getItem('ptin_seo');
      return stored ? JSON.parse(stored) : initialSEOSettings;
    } catch {
      return initialSEOSettings;
    }
  });

  const [themeSettings, setThemeSettings] = useState<ThemeSettings>(() => {
    try {
      const stored = localStorage.getItem('ptin_theme');
      return stored ? JSON.parse(stored) : initialThemeSettings;
    } catch {
      return initialThemeSettings;
    }
  });

  const [mediaLibrary, setMediaLibrary] = useState<{ id: string; name: string; url: string; category: string }[]>(() => {
    try {
      const stored = localStorage.getItem('ptin_media');
      return stored ? JSON.parse(stored) : [
        { id: 'm-1', name: 'Plant Workshop Floor A', url: '', category: 'Facility' },
        { id: 'm-2', name: 'CNC 5-Axis In Action', url: '', category: 'Machining' },
        { id: 'm-3', name: 'Fiber Laser Spark Emission', url: '', category: 'Cutting' }
      ];
    } catch {
      return [];
    }
  });

  // Sync to LocalStorage on change
  useEffect(() => {
    try {
      localStorage.setItem('ptin_services', JSON.stringify(services));
    } catch (e) {
      console.warn('Storage save failed', e);
    }
  }, [services]);

  useEffect(() => {
    try {
      localStorage.setItem('ptin_projects', JSON.stringify(projects));
    } catch (e) {
      console.warn('Storage save failed', e);
    }
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem('ptin_articles', JSON.stringify(articles));
    } catch (e) {
      console.warn('Storage save failed', e);
    }
  }, [articles]);

  useEffect(() => {
    try {
      localStorage.setItem('ptin_testimonials', JSON.stringify(testimonials));
    } catch (e) {
      console.warn('Storage save failed', e);
    }
  }, [testimonials]);

  useEffect(() => {
    try {
      localStorage.setItem('ptin_clients', JSON.stringify(clients));
    } catch (e) {
      console.warn('Storage save failed', e);
    }
  }, [clients]);

  useEffect(() => {
    try {
      localStorage.setItem('ptin_messages', JSON.stringify(contactMessages));
    } catch (e) {
      console.warn('Storage save failed', e);
    }
  }, [contactMessages]);

  useEffect(() => {
    try {
      localStorage.setItem('ptin_company', JSON.stringify(companyInfo));
    } catch (e) {
      console.warn('Storage save failed', e);
    }
  }, [companyInfo]);

  useEffect(() => {
    try {
      localStorage.setItem('ptin_seo', JSON.stringify(seoSettings));
    } catch (e) {
      console.warn('Storage save failed', e);
    }
  }, [seoSettings]);

  useEffect(() => {
    try {
      localStorage.setItem('ptin_theme', JSON.stringify(themeSettings));
      if (typeof document !== 'undefined') {
        document.documentElement.style.setProperty('--primary', themeSettings.primaryColor);
        document.documentElement.style.setProperty('--accent', themeSettings.accentColor);
      }
    } catch (e) {
      console.warn('Storage save failed', e);
    }
  }, [themeSettings]);

  useEffect(() => {
    try {
      localStorage.setItem('ptin_media', JSON.stringify(mediaLibrary));
    } catch (e) {
      console.warn('Storage save failed', e);
    }
  }, [mediaLibrary]);

  // CRUD Implementations
  const addService = (item: Omit<ServiceItem, 'id'>) => {
    const newItem: ServiceItem = {
      ...item,
      id: `srv-${Date.now()}`
    };
    setServices(prev => [newItem, ...prev]);
  };

  const updateService = (id: string, item: Partial<ServiceItem>) => {
    setServices(prev => prev.map(s => s.id === id ? { ...s, ...item } : s));
  };

  const deleteService = (id: string) => {
    setServices(prev => prev.filter(s => s.id !== id));
  };

  const addProject = (item: Omit<ProjectItem, 'id'>) => {
    const newItem: ProjectItem = {
      ...item,
      id: `prj-${Date.now()}`
    };
    setProjects(prev => [newItem, ...prev]);
  };

  const updateProject = (id: string, item: Partial<ProjectItem>) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...item } : p));
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const addArticle = (item: Omit<ArticleItem, 'id'>) => {
    const newItem: ArticleItem = {
      ...item,
      id: `art-${Date.now()}`
    };
    setArticles(prev => [newItem, ...prev]);
  };

  const updateArticle = (id: string, item: Partial<ArticleItem>) => {
    setArticles(prev => prev.map(a => a.id === id ? { ...a, ...item } : a));
  };

  const deleteArticle = (id: string) => {
    setArticles(prev => prev.filter(a => a.id !== id));
  };

  const addTestimonial = (item: Omit<TestimonialItem, 'id'>) => {
    const newItem: TestimonialItem = {
      ...item,
      id: `t-${Date.now()}`
    };
    setTestimonials(prev => [newItem, ...prev]);
  };

  const updateTestimonial = (id: string, item: Partial<TestimonialItem>) => {
    setTestimonials(prev => prev.map(t => t.id === id ? { ...t, ...item } : t));
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials(prev => prev.filter(t => t.id !== id));
  };

  const addClient = (item: Omit<ClientPartner, 'id'>) => {
    const newItem: ClientPartner = {
      ...item,
      id: `c-${Date.now()}`
    };
    setClients(prev => [...prev, newItem]);
  };

  const updateClient = (id: string, item: Partial<ClientPartner>) => {
    setClients(prev => prev.map(c => c.id === id ? { ...c, ...item } : c));
  };

  const deleteClient = (id: string) => {
    setClients(prev => prev.filter(c => c.id !== id));
  };

  const submitContactMessage = (msg: Omit<ContactMessage, 'id' | 'date' | 'isRead'>) => {
    const dateStr = new Date().toISOString().replace('T', ' ').substring(0, 16);
    const newMsg: ContactMessage = {
      ...msg,
      id: `msg-${Date.now()}`,
      date: dateStr,
      isRead: false
    };
    setContactMessages(prev => [newMsg, ...prev]);
    return true;
  };

  const markMessageRead = (id: string) => {
    setContactMessages(prev => prev.map(m => m.id === id ? { ...m, isRead: true } : m));
  };

  const deleteMessage = (id: string) => {
    setContactMessages(prev => prev.filter(m => m.id !== id));
  };

  const updateCompanyInfo = (info: Partial<CompanyInfo>) => {
    setCompanyInfo(prev => ({ ...prev, ...info }));
  };

  const updateSEOSettings = (settings: Partial<SEOSettings>) => {
    setSeoSettings(prev => ({ ...prev, ...settings }));
  };

  const updateThemeSettings = (settings: Partial<ThemeSettings>) => {
    setThemeSettings(prev => ({ ...prev, ...settings }));
  };

  const addMediaAsset = (name: string, url: string, category: string) => {
    setMediaLibrary(prev => [{ id: `med-${Date.now()}`, name, url, category }, ...prev]);
  };

  // Export / Import
  const exportDataJSON = () => {
    const fullState = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      companyInfo,
      services,
      projects,
      articles,
      testimonials,
      clients,
      seoSettings,
      themeSettings
    };
    return JSON.stringify(fullState, null, 2);
  };

  const importDataJSON = (jsonStr: string): boolean => {
    try {
      const data = JSON.parse(jsonStr);
      if (data.services) setServices(data.services);
      if (data.projects) setProjects(data.projects);
      if (data.articles) setArticles(data.articles);
      if (data.testimonials) setTestimonials(data.testimonials);
      if (data.clients) setClients(data.clients);
      if (data.companyInfo) setCompanyInfo(data.companyInfo);
      if (data.seoSettings) setSeoSettings(data.seoSettings);
      if (data.themeSettings) setThemeSettings(data.themeSettings);
      return true;
    } catch (e) {
      console.error('Failed to import JSON data', e);
      return false;
    }
  };

  const resetToDefaultData = () => {
    localStorage.removeItem('ptin_services');
    localStorage.removeItem('ptin_projects');
    localStorage.removeItem('ptin_articles');
    localStorage.removeItem('ptin_testimonials');
    localStorage.removeItem('ptin_clients');
    localStorage.removeItem('ptin_company');
    localStorage.removeItem('ptin_seo');
    localStorage.removeItem('ptin_theme');
    localStorage.removeItem('ptin_messages');
    localStorage.removeItem('ptin_media');

    setServices(initialServices);
    setProjects(initialProjects);
    setArticles(initialArticles);
    setTestimonials(initialTestimonials);
    setClients(initialClients);
    setCompanyInfo(initialCompanyInfo);
    setSeoSettings(initialSEOSettings);
    setThemeSettings(initialThemeSettings);
  };

  return (
    <AppContext.Provider
      value={{
        currentRoute,
        routeParam,
        navigateTo,
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
        updateTestimonial,
        deleteTestimonial,
        addClient,
        updateClient,
        deleteClient,
        submitContactMessage,
        markMessageRead,
        deleteMessage,
        updateCompanyInfo,
        updateSEOSettings,
        updateThemeSettings,
        addMediaAsset,
        exportDataJSON,
        importDataJSON,
        resetToDefaultData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
