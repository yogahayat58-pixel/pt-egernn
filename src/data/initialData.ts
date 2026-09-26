import { ServiceItem, ProjectItem, ArticleItem, TestimonialItem, ClientPartner, CompanyInfo, SEOSettings, ThemeSettings } from '../types';

export const initialCompanyInfo: CompanyInfo = {
  name: "PT Industri Nusantara",
  tagline: "Presisi Rekayasa & Solusi Manufaktur Terintegrasi",
  establishedYear: 2004,
  phone: "+62 21 8990 2888",
  email: "kontak@industrinusantara.co.id",
  address: "Kawasan Industri MM2100, Jl. Bali Blok M-12",
  city: "Cikarang Barat, Bekasi, Jawa Barat 17530",
  workingHours: "Senin - Jumat: 08.00 - 17.00 WIB | Sabtu: 08.00 - 13.00 WIB",
  whatsapp: "+62 811 8899 2100",
  socials: {
    linkedin: "https://linkedin.com/company/industri-nusantara",
    instagram: "https://instagram.com/industrinusantara.official",
    youtube: "https://youtube.com/@industrinusantara",
    facebook: "https://facebook.com/industrinusantaragroup"
  },
  certifications: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "ASME 'U' Stamp", "TKDN 68.4%"],
  heroBadge: "Standar Manufaktur Kelas Dunia Berkelanjutan",
  heroTitle: "Solusi Manufaktur Presisi & Otomasi Pabrik Berstandar Global",
  heroDescription: "Kami mengintegrasikan rekayasa teknik tingkat tinggi, teknologi CNC 5-Axis terkini, fabrikasi baja presisi, dan sistem otomasi industri untuk mengakselerasi kapasitas produksi korporasi terdepan di Indonesia."
};

export const initialServices: ServiceItem[] = [
  {
    id: "srv-1",
    slug: "fabrikasi-logam-presisi",
    title: "Fabrikasi Logam Presisi",
    category: "Fabrication",
    shortDesc: "Pengerjaan struktur baja, tangki bertekanan, dan komponen plat logam tebal dengan toleransi ketat.",
    fullDesc: "Layanan fabrikasi logam presisi kami mencakup pembentukan, perakitan, dan pengelasan berbagai jenis logam mulai dari carbon steel, stainless steel SUS304/SUS316, hingga paduan aluminium industri. Didukung bengkel kerja seluas 12.000 m² dan welder bersertifikasi ASME IX.",
    iconName: "Flame",
    imageType: "fabrication",
    benefits: [
      "Standar inspeksi NDT (Non-Destructive Testing) lengkap",
      "Kapasitas beban kerja hingga 50 ton per struktur",
      "Sertifikasi pengelasan AWS D1.1 dan ASME Section IX",
      "Finishing sandblasting Sa 2.5 & epoxy coating multi-layer"
    ],
    specs: [
      { label: "Kapasitas Workshop", value: "350 Ton / Bulan" },
      { label: "Material Support", value: "Carbon Steel, SUS304/316, Al 6061, Hardox" },
      { label: "Metode Pengelasan", value: "GTAW (TIG), GMAW (MIG/MAG), SMAW, SAW" },
      { label: "Toleransi Dimensi", value: "±0.5 mm per meter panjang" }
    ],
    faqs: [
      {
        question: "Apakah bisa membuat custom pressure vessel sesuai ASME Code?",
        answer: "Ya, kami memiliki sertifikasi stempel ASME 'U' dan 'S' serta engineer berlisensi untuk merancang dan memfabrikasi bejana tekan sesuai ASME Section VIII Div. 1."
      },
      {
        question: "Berapa lama lead time pengerjaan pesanan fabrikasi?",
        answer: "Tergantung kompleksitas gambar kerja. Untuk komponen struktural menengah umumnya membutuhkan 2 hingga 4 minggu kerja setelah approval drawing teknis."
      }
    ],
    featured: true
  },
  {
    id: "srv-2",
    slug: "cnc-machining-5-axis",
    title: "CNC Machining 5-Axis",
    category: "Machining",
    shortDesc: "Pemesinan presisi sub-mikron untuk dies, cetakan mold, dan suku cadang aero & otomotif kompleks.",
    fullDesc: "Pusat pemesinan CNC 5-axis mutakhir kami mampu menghasilkan kontur geometris rumit dalam satu kali pencekaman. Mengurangi deviasi kumulatif dan menjamin akurasi profil hingga ±0.005 mm yang diverifikasi dengan mesin CMM Carl Zeiss di ruang berpendingin khusus.",
    iconName: "Cpu",
    imageType: "cnc",
    benefits: [
      "Akurasi geometris tinggi dengan pengujian CMM terkalibrasi",
      "Pencekaman tunggal untuk efisiensi waktu & konsistensi posisi",
      "Dukungan material paduan keras seperti Inconel dan Titanium",
      "Pemeriksaan ketebalan dinding mikro dan kekasaran permukaan Ra 0.2"
    ],
    specs: [
      { label: "Travel Axis (X/Y/Z)", value: "1,200 x 800 x 650 mm" },
      { label: "Spindle Speed", value: "Hingga 24,000 RPM (High Speed Spindle)" },
      { label: "Akurasi Penempatan", value: "±0.003 mm / Full Stroke" },
      { label: "Verifikasi QC", value: "Zeiss Coordinate Measuring Machine (CMM)" }
    ],
    faqs: [
      {
        question: "Apakah menerima pengerjaan reverse engineering suku cadang yang sudah aus?",
        answer: "Ya, tim QC dan metrologi kami dilengkapi 3D Optical Scanner untuk memindai part lama dan merekonstruksi model CAD 3D yang siap dimesin ulang."
      }
    ],
    featured: true
  },
  {
    id: "srv-3",
    slug: "fiber-laser-cutting-12kw",
    title: "Fiber Laser Cutting 12kW",
    category: "Cutting",
    shortDesc: "Pemotongan plat logam kecepatan tinggi dengan akurasi tepi halus tanpa burr hingga tebal 35mm.",
    fullDesc: "Mesin High-Power Fiber Laser 12,000 Watt kami memberikan kemampuan pemotongan super cepat pada plat tebal. Memastikan sudut potong tegak lurus sempurna, celah sayatan minimal, dan penghematan material berkat algoritma nesting otomatis CAD/CAM kami.",
    iconName: "Zap",
    imageType: "laser",
    benefits: [
      "Kecepatan potong 3x lebih efisien dibanding laser CO2 konvensional",
      "Tepi potong bersih dan siap langsung dilas tanpa proses gerinda",
      "Mendukung pemotongan pipa silinder dan profil hollow",
      "Nesting material teroptimasi menghasilkan scrap minimum di bawah 8%"
    ],
    specs: [
      { label: "Daya Sumber Laser", value: "12,000 Watt Fiber Resonator" },
      { label: "Dimensi Meja Kerja", value: "2,500 x 6,000 mm (Dual Shuttle Table)" },
      { label: "Maksimal Tebal Plat", value: "Mild Steel 35mm, Stainless 25mm, Alum 20mm" },
      { label: "Repetisi Posisi", value: "±0.02 mm" }
    ],
    faqs: [
      {
        question: "Berapa kapasitas potong plat stainless steel per hari?",
        answer: "Dengan dual pallet changer otomatis, kami sanggup memotong hingga 40-50 lembar plat standar ukuran 4x8 atau 5x20 kaki per shift kerja."
      }
    ],
    featured: true
  },
  {
    id: "srv-4",
    slug: "robotic-welding-assembly",
    title: "Robotic Welding & Assembly",
    category: "Fabrication",
    shortDesc: "Pengelasan robotik otomatis 6-axis berulang untuk produksi massal dengan penetrasi las seragam.",
    fullDesc: "Sel pengelasan robotik kami didesain khusus untuk pesanan berulang volume tinggi. Menghilangkan faktor kelelahan manusia, memastikan penetrasi las seragam 100%, serta meminimalisir spatter untuk integritas struktural yang lolos uji radiografi X-Ray.",
    iconName: "Bot",
    imageType: "welding",
    benefits: [
      "Penetrasi las seragam dengan zero-defect weld seam",
      "Siklus produksi massal lebih cepat hingga 400%",
      "Pengendalian distorsi panas melalui fixture pneumatik presisi",
      "Pemeriksaan weld seam otomatis dengan sensor laser tracking"
    ],
    specs: [
      { label: "Robot Arm Payload", value: "KUKA 6-Axis Robotic Arm 25kg" },
      { label: "Positioner", value: "Dual Station 2-Axis Servo Tilt & Turn Table" },
      { label: "Proses Las", value: "Pulse MIG/MAG & TIG dengan Cold Wire Feeder" },
      { label: "Standar Uji", value: "ASME IX & ISO 5817 Level B" }
    ],
    faqs: [
      {
        question: "Apakah pembuatan fixture khusus sudah termasuk dalam penawaran?",
        answer: "Ya, divisi tooling kami membuat fixture dan jig penjepit kustom sesuai desain part Anda sebelum proses robotik dimulai."
      }
    ],
    featured: true
  },
  {
    id: "srv-5",
    slug: "otomasi-industri-plc-scada",
    title: "Otomasi Industri & Sistem PLC",
    category: "Automation",
    shortDesc: "Rancang bangun kontrol cerdas, integrasi SCADA, inverter servo, dan IoT monitoring pabrik.",
    fullDesc: "Kami membantu pabrik bermigrasi menuju Industri 4.0. Mulai dari perakitan panel kontrol PLC (Siemens, Mitsubishi, Omron, Rockwell), integrasi sensor IoT, dashboard SCADA real-time, hingga sistem traceability barcode untuk memantau OEE (Overall Equipment Effectiveness).",
    iconName: "Activity",
    imageType: "automation",
    benefits: [
      "Peningkatan OEE lini produksi sebesar 25-40%",
      "Visualisasi kondisi mesin dan konsumsi energi secara real-time",
      "Sistem safety interlock bersertifikasi SIL-3 / Cat 4",
      "Dukungan remote diagnostics via enkripsi VPN industri aman"
    ],
    specs: [
      { label: "Platform PLC", value: "Siemens S7-1500, Mitsubishi iQ-R, Allen-Bradley" },
      { label: "Komunikasi Industri", value: "Profinet, EtherNet/IP, Modbus TCP, OPC-UA" },
      { label: "Standar Panel", value: "IEC 61439-1 & IP65 Enclosure Protection" },
      { label: "Fitur Monitoring", value: "Realtime OEE, Alarm Logs, Trend Predictive Analysis" }
    ],
    faqs: [
      {
        question: "Apakah dapat mengintegrasikan mesin lama (legacy machinery) ke sistem SCADA?",
        answer: "Bisa, kami memasang smart gateway sensor eksternal (suhu, getaran, arus) tanpa perlu membongkar program kontrol asli mesin Anda."
      }
    ],
    featured: true
  },
  {
    id: "srv-6",
    slug: "engineering-reverse-design",
    title: "Design Engineering & Simulasi FEA",
    category: "Engineering",
    shortDesc: "Desain CAD 3D, kalkulasi kekuatan struktur FEA, simulasi fluida CFD, dan optimasi berat komponen.",
    fullDesc: "Tim engineer kami mengubah sketsa konseptual atau problem manufaktur menjadi desain siap produksi (DFM - Design for Manufacturing). Dilengkapi software simulasi FEA (Finite Element Analysis) untuk menganalisis titik tegangan kritis dan beban dinamis sebelum prototipe dibuat.",
    iconName: "Compass",
    imageType: "design",
    benefits: [
      "Mengurangi biaya uji coba fisik berkat simulasi komputer akurat",
      "Dokumentasi lengkap: 3D CAD, 2D Drawing toleransi ISO, & BOM list",
      "Optimasi topologi material untuk mereduksi berat tanpa mengurangi kekuatan",
      "Standarisasi gambar teknis mengacu pada ISO Geometrical Tolerancing (GD&T)"
    ],
    specs: [
      { label: "Software Tool", value: "SolidWorks, Autodesk Inventor, ANSYS, Siemens NX" },
      { label: "Jenis Analisis", value: "Structural Linear/Non-linear, Modal Analysis, Thermal" },
      { label: "Output File", value: "STEP, IGES, DXF, PDF Shop Drawing, Analisis Report" },
      { label: "Lead Time Analisis", value: "3 - 7 hari kerja tergantung kompleksitas" }
    ],
    faqs: [
      {
        question: "Apakah laporan simulasi FEA dapat digunakan untuk keperluan audit sertifikasi?",
        answer: "Ya, laporan perhitungan kami ditandatangani oleh Professional Engineer (IPM/IPU) berlisensi PII yang diakui secara legal."
      }
    ],
    featured: false
  },
  {
    id: "srv-7",
    slug: "custom-industrial-machinery",
    title: "Mesin Khusus Kustom (SPM)",
    category: "Automation",
    shortDesc: "Pembuatan Special Purpose Machinery (SPM) untuk lini perakitan, uji mutu, dan packaging otomatis.",
    fullDesc: "Ketika mesin komersial di pasaran tidak mampu memenuhi spesifikasi unik proses produksi Anda, kami merancang dan memproduksi mesin khusus dari nol (Special Purpose Machinery). Meliputi mesin press hidrolik kustom, leak test station, hingga mesin transfer multi-stasiun.",
    iconName: "Sliders",
    imageType: "spm",
    benefits: [
      "Solusi tailored-fit sesuai batasan layout ruang pabrik Anda",
      "Integrasi komponen pneumatik dan hidrolik merk kelas dunia (Festo, SMC, Rexroth)",
      "Factory Acceptance Test (FAT) di workshop kami sebelum pengiriman",
      "Pelatihan komprehensif untuk operator dan staf maintenance klien"
    ],
    specs: [
      { label: "Tipe Mesin", value: "Assembly Station, Leak Tester, Auto Sorter, Hydraulic Press" },
      { label: "Siklus Kerja (Cycle Time)", value: "Hingga 3-5 detik per siklus komponen" },
      { label: "Standar Keselamatan", value: "Light Curtain, Safety Relays, Emergency Stop Dual Channel" },
      { label: "Garansi", value: "12 Bulan Garansi Suku Cadang & Jasa Servis" }
    ],
    faqs: [
      {
        question: "Bagaimana proses dari awal ide sampai mesin beroperasi di pabrik kami?",
        answer: "Dimulai dari Site Survey & URS (User Requirement Specification) -> Konsep Desain 3D -> Approval -> Fabrikasi & Assembly -> FAT di workshop kami -> Pengiriman & Instalasi -> Site Acceptance Test (SAT) & Training."
      }
    ],
    featured: false
  },
  {
    id: "srv-8",
    slug: "plant-maintenance-overhaul",
    title: "Plant Maintenance & Overhaul",
    category: "Maintenance",
    shortDesc: "Jasa perbaikan komprehensif, rekondisi gearbox berat, balancing rotor dinamis, dan turn-around pabrik.",
    fullDesc: "Mencegah unplanned downtime adalah prioritas pabrik modern. Layanan overhaul kami mencakup pembongkaran, pembersihan, rekondisi toleransi poros aus dengan hard chrome plating, penggantian bearing presisi, serta laser alignment poros dan dynamic balancing di tempat.",
    iconName: "Wrench",
    imageType: "maintenance",
    benefits: [
      "Kesiapan tim siaga 24/7 untuk emergency shutdown pabrik",
      "Peralatan portable canggih: Laser Shaft Alignment & On-site Vibration Tester",
      "Dokumentasi laporan audit mekanis sebelum dan sesudah perbaikan",
      "Jaminan bebas getaran berlebih sesuai standar ISO 10816"
    ],
    specs: [
      { label: "Dynamic Balancing", value: "Rotor hingga 10 Ton, Grade ISO 1940 G2.5" },
      { label: "Laser Alignment", value: "Dual Laser Shaft Alignment Akurasi 0.01 mm" },
      { label: "Scope Kerja", value: "Gearbox, Pompa Multistage, Blower Industri, Crusher" },
      { label: "Respons Tim", value: "Maksimal 4 jam untuk area Jabodetabek & Karawang" }
    ],
    faqs: [
      {
        question: "Apakah bisa melakukan overhaul saat masa libur hari raya pabrik?",
        answer: "Tentu, kami secara berkala menangani major turnaround dan annual shutdown saat operasional pabrik sedang berhenti total."
      }
    ],
    featured: false
  }
];

export const initialProjects: ProjectItem[] = [
  {
    id: "prj-1",
    slug: "lini-konveyor-otomatis-otomotif-karawang",
    title: "Lini Konveyor & Perakitan Otomatis Pabrik Otomotif",
    client: "PT Indo Astra Component Tbk",
    location: "Kawasan Industri KIIC, Karawang",
    category: "Automation",
    year: "2025",
    imageType: "conveyor",
    shortDesc: "Sistem konveyor roller modular 180 meter terintegrasi barcode scanner dan transfer lift pneumatic.",
    challenge: "Klien memerlukan peningkatan kapasitas transfer komponen bodi kendaraan antar gedung perakitan tanpa menambah tenaga forklift yang berisiko terhadap safety.",
    solution: "Kami merancang dan memasang sistem heavy-duty powered roller conveyor sepanjang 180 meter dengan kecepatan variabel, dilengkapi 6 unit lifter pneumatik vertikal dan sistem sensor RFID untuk routing otomatis.",
    results: [
      "Meningkatkan throughput transfer komponen hingga 65%",
      "Mengurangi risiko insiden forklift dan traffic gudang sebesar 90%",
      "Tercapainya ROI investasi sistem dalam tempo 11 bulan operasional"
    ],
    technologies: ["Siemens S7-1500 PLC", "SEW-Eurodrive Geared Motors", "Sick RFID Sensor", "Festo Pneumatics"],
    gallery: ["conveyor_1", "conveyor_2", "conveyor_3"],
    featured: true
  },
  {
    id: "prj-2",
    slug: "tangki-reaktor-stainless-kimia-cilegon",
    title: "Fabrikasi Tangki Reaktor Kimia Bertekanan 45m³",
    client: "PT Cilegon Petrokimia Nusantara",
    location: "Cilegon, Banten",
    category: "Fabrication",
    year: "2025",
    imageType: "vessel",
    shortDesc: "Bejana tekan SUS316L dengan jaket pemanas dimple dan pengaduk mekanis bersertifikasi ASME U-Stamp.",
    challenge: "Fluida kerja berupa asam korosif suhu 140°C dengan tekanan kerja 8 bar, menuntut material tanpa cacat las dan ketahanan korosi tingkat tinggi.",
    solution: "Fabrikasi menggunakan plat stainless steel SUS316L tebal 16mm dengan bejana jaket pemanas setengah pipa (half-pipe coil). Seluruh sambungan diuji 100% Radiography X-Ray dan hydrotest pada 13 bar.",
    results: [
      "Lolos uji sertifikasi bejana tekan Disnaker dan ASME U-Stamp tanpa revisi",
      "Efisiensi perpindahan panas jaket meningkat 18% dibanding desain lama",
      "Penyelesaian fabrikasi 10 hari lebih cepat dari jadwal kontrak"
    ],
    technologies: ["ASME Section VIII Div 1", "SUS316L Dual Grade", "TIG/MIG Automatic Welding", "Hydrotest 13 Bar"],
    gallery: ["vessel_1", "vessel_2"],
    featured: true
  },
  {
    id: "prj-3",
    slug: "komponen-presisi-turbin-pembangkit-pln",
    title: "Pemesinan CNC 5-Axis Impeller & Roda Gigi Presisi",
    client: "PT Rekayasa Pembangkitan Energi",
    location: "Surabaya, Jawa Timur",
    category: "Machining",
    year: "2024",
    imageType: "impeller",
    shortDesc: "Pembuatan impeler tertutup 5-axis berbahan Titanium Grade 5 untuk turbin fluida tekanan tinggi.",
    challenge: "Bentuk bilah kurva ganda yang sangat rapat menyulitkan akses pahat, ditambah sifat ulet keras titanium yang rentan menimbulkan chatter vibrasi.",
    solution: "Pemrograman CAD/CAM multi-axis dengan toolpath adaptive trochoidal milling pada mesin 5-axis DMG Mori, menggunakan pahat karbida lapis AlCrN dan pendingin cairan bertekanan tinggi 70 bar.",
    results: [
      "Deviasi profil sudu sudu turbin berada di bawah 0.006 mm",
      "Tingkat kekasaran permukaan bilah mencapai Ra 0.35 mikron",
      "Efisiensi aerodinamis impeler terbukti meningkat 4.2% pada uji coba laboratorium"
    ],
    technologies: ["DMG Mori 5-Axis", "Titanium Grade 5 Ti-6Al-4V", "Mastercam Multi-Axis", "Carl Zeiss CMM"],
    gallery: ["impeller_1", "impeller_2"],
    featured: true
  },
  {
    id: "prj-4",
    slug: "mesin-packaging-vakum-fmcg-bekasi",
    title: "Mesin Otomatis Form-Fill-Seal & Kemasan Vakum",
    client: "PT Nutri Sejahtera Abadi",
    location: "Kawasan Industri GIIC, Deltamas",
    category: "Custom Machine",
    year: "2024",
    imageType: "packaging",
    shortDesc: "Rancang bangun mesin pembungkus vakum kontinu berkecepatan 80 pack per menit higienis food-grade.",
    challenge: "Kemasan produk makanan beku sering bocor mikro pada mesin impor lama, dan waktu henti pergantian rol film terlalu panjang.",
    solution: "Kami menciptakan SPM (Special Purpose Machine) berstruktur stainless steel SUS304 penuh, sistem seal ultrasonik dengan sensor suhu digital ganda, dan auto-splicing rol kemasan.",
    results: [
      "Tingkat kebocoran kemasan turun drastis dari 3.8% menjadi 0.08%",
      "Kapasitas output meningkat menjadi 80 pack/menit secara stabil",
      "Kemudahan pengoperasian melalui layar sentuh HMI Bahasa Indonesia"
    ],
    technologies: ["Food Grade SUS304", "Omron Sysmac PLC", "Ultrasonic Sealer", "Proface 10-inch HMI"],
    gallery: ["pack_1", "pack_2"],
    featured: true
  },
  {
    id: "prj-5",
    slug: "rak-gudang-otomatis-heavy-duty-asrs",
    title: "Sistem Rak Gudang Otomatis Heavy-Duty (AS/RS)",
    client: "PT Nusantara Logistik Sentral",
    location: "Marunda Center, Bekasi",
    category: "Fabrication",
    year: "2024",
    imageType: "warehouse",
    shortDesc: "Struktur rak baja tinggi 24 meter dengan kapasitas beban 2.5 ton per palet untuk derek crane otomatis.",
    challenge: "Toleransi ketegakan vertikal struktur baja setinggi 24 meter harus sangat presisi (kurang dari 2 mm deviasi) agar crane otomatis AS/RS tidak macet.",
    solution: "Penggunaan material baja mutu tinggi Q345B dengan laser cutting presisi pada lubang pasak, serta perakitan menggunakan teknik pemandu laser theodolite 3D.",
    results: [
      "Penyimpanan gudang bertambah 300% di atas tapak luas tanah yang sama",
      "Struktur teruji tahan gempa zona 4 sesuai SNI 1726",
      "Kecepatan penarikan palet barang berkurang dari 15 menit menjadi 90 detik"
    ],
    technologies: ["Laser Theodolite 3D Alignment", "High Tensile Q345B Steel", "AS/RS Interface Protocol"],
    gallery: ["rack_1"],
    featured: false
  },
  {
    id: "prj-6",
    slug: "struktur-baja-cleanroom-pabrik-farmasi",
    title: "Modul Struktur Baja & Piping Higienis Farmasi",
    client: "PT Bio Farma Medica Utama",
    location: "Kawasan Industri Jababeka, Cikarang",
    category: "Fabrication",
    year: "2023",
    imageType: "cleanroom",
    shortDesc: "Pemasangan pipa orbital welding SUS316L dan struktur mezzanine stainless steel untuk ruang bersih Kelas 100.",
    challenge: "Kebutuhan kebersihan ekstrem standar cGMP; tidak boleh ada partikel debu, celah sudut mati, atau oksidasi pada sambungan pipa.",
    solution: "Pengelasan pipa otomatis (Orbital Pipe Welding) dengan gas pelindung Argon kemurnian 99.999%, didukung inspeksi boroskop video visual 100% permukaan dalam pipa.",
    results: [
      "Lolos uji validasi cGMP BPOM tanpa cacat mikroba",
      "Kekasaran permukaan pipa bagian dalam Ra < 0.38 μm elektropolish",
      "Zero leak test pada tekanan uji 10 bar selama 24 jam"
    ],
    technologies: ["Orbital TIG Welding", "Video Borescope Inspection", "SUS316L ASME BPE Standard"],
    gallery: ["clean_1"],
    featured: false
  },
  {
    id: "prj-7",
    slug: "rekondisi-gearbox-pabrik-semen-120-ton",
    title: "Overhaul & Rekondisi Gearbox Utama Kiln Semen 120 Ton",
    client: "PT Semen Perkasa Nusantara",
    location: "Tuban, Jawa Timur",
    category: "Maintenance",
    year: "2023",
    imageType: "gearbox",
    shortDesc: "Rekondisi darurat bearing raksasa dan rekondisi gigi pinion helikal diameter 2.8 meter pada masa shutdown.",
    challenge: "Kerusakan pitting pada pinion gigi utama yang mengancam produksi pabrik senilai miliaran rupiah per hari bila terlambat beroperasi.",
    solution: "Tim teknisi kami melakukan mobile on-site machining, rekondisi profil gigi dengan grinding portabel, penyesuaian backlash, dan penggantian spherical roller bearing 800mm.",
    results: [
      "Operasi diselesaikan dalam waktu 7 hari, 2 hari lebih cepat dari jadwal shutdown",
      "Getaran beroperasi turun dari 8.5 mm/s ke angka 1.8 mm/s (kategori Good ISO 10816)",
      "Pabrik semen dapat melanjutkan target produksi tahunan tanpa kendala"
    ],
    technologies: ["Portable Milling Machine", "Vibration FFT Analyzer", "Laser Alignment Optalign"],
    gallery: ["gear_1"],
    featured: false
  },
  {
    id: "prj-8",
    slug: "sel-robotik-stamping-otomatis",
    title: "Retrofit Sel Robotik Transfer Stamping Hidrolik 500 Ton",
    client: "PT Metal Sarana Prima",
    location: "Pulogadung, Jakarta Timur",
    category: "Automation",
    year: "2023",
    imageType: "stamping",
    shortDesc: "Integrasi robot transfer 6-axis berkecepatan tinggi pada mesin stamping press lembaran plat bodi.",
    challenge: "Ketergantungan pada operator manual memasukkan plat ke bawah cetakan press membahayakan keselamatan kerja dan menghasilkan laju scrap tidak menentu.",
    solution: "Instalasi 2 unit robot manipulator dengan vacuum gripper karbon kustom, disinkronkan dengan sensor sudut encoder rotary mesin press.",
    results: [
      "Menghilangkan risiko kecelakaan kerja tangan terjepit hingga 0%",
      "Kapasitas output stamping stabil pada 18 stroke per menit",
      "Tingkat cacat produk (scrap rate) turun dari 2.4% ke 0.15%"
    ],
    technologies: ["ABB 6-Axis Robot", "Custom Carbon Vacuum Gripper", "Safety PLC GuardLogix"],
    gallery: ["stamp_1"],
    featured: false
  }
];

export const initialArticles: ArticleItem[] = [
  {
    id: "art-1",
    slug: "tren-otomasi-industri-manufaktur-indonesia-2026",
    title: "Akselerasi Industri 4.0: Bagaimana Pabrik di Indonesia Memanfaatkan Otomasi & Sensor IoT",
    category: "Teknologi",
    date: "18 Februari 2026",
    author: "Ir. Hendra Kusuma, IPM",
    readTime: "5 menit baca",
    imageType: "article_iot",
    summary: "Tinjauan mendalam mengenai langkah strategis industri manufaktur nasional dalam mengadopsi sensor IoT cerdas, data SCADA, dan pemeliharaan prediktif guna meningkatkan efisiensi energi dan OEE.",
    content: [
      "Di tengah persaingan manufaktur global yang kian dinamis, pabrik-pabrik di Indonesia tidak lagi sekadar mengandalkan kapasitas mesin konvensional. Transformasi menuju efisiensi digital telah menjadi pilar utama untuk menjaga daya saing di kawasan Asia Tenggara.",
      "Kombinasi antara programmable logic controller (PLC) generasi baru dengan gateway komputasi tepi (Edge Computing) memungkinkan manajemen pabrik memonitor status kesehatan mesin, fluktuasi konsumsi daya listrik, dan estimasi waktu keausan part secara real-time.",
      "Studi kasus implementasi kami di beberapa kawasan industri di Karawang dan Cikarang membuktikan bahwa pemantauan prediktif berbasis getaran dan temperatur mampu mereduksi unplanned downtime sebesar 35% pada tahun pertama penerapan.",
      "Kunci keberhasilan implementasi ini terletak pada integrasi bertahap: mengawali dari lini kerja yang memiliki beban operasional tertinggi, melakukan standarisasi protokol komunikasi antar mesin, serta membekali teknisi lokal dengan kecakapan analitik data operasional."
    ],
    tags: ["Industri 4.0", "Otomasi", "IoT Industri", "Efisiensi Pabrik", "Smart Factory"],
    featured: true
  },
  {
    id: "art-2",
    slug: "keunggulan-fiber-laser-12kw-vs-plasma-cutting",
    title: "Mengapa Fiber Laser Berdaya Tinggi Menggantikan Metode Plasma Cutting pada Plat Logam Tebal?",
    category: "Fabrikasi",
    date: "12 Januari 2026",
    author: "Bambang Sudiro, ST",
    readTime: "4 menit baca",
    imageType: "article_laser",
    summary: "Analisis perbandingan biaya operasional, kualitas tepi sayatan, toleransi sudut potong, dan kecepatan potong antara Fiber Laser 12kW dengan High-Definition Plasma.",
    content: [
      "Selama beberapa dekade, plasma cutting menjadi standar utama untuk memotong plat baja karbon tebal di atas 16mm. Namun kehadiran fiber laser cutting berdaya 12kW hingga 20kW mengubah peta efisiensi fabrikasi baja.",
      "Pertama, dari aspek presisi dimensi. Sinar laser menghasilkan celah potong (kerf width) sangat sempit sekitar 0.2-0.4 mm dengan Heat Affected Zone (HAZ) yang amat minim, sehingga logam tidak mengalami distorsi akibat panas berlebih.",
      "Kedua, kecepatan potong plat 10mm-20mm melonjak hingga 2.5 kali lebih cepat dibanding plasma. Penggunaan gas bantu oksigen atau nitrogen murni menghasilkan tepi potong yang tegak lurus sempurna tanpa kerak (slag/dross) yang perlu digerinda ulang.",
      "Bagi pemilik proyek, ini berarti penghematan ongkos kerja pasca-potong dan kepastian bahwa komponen plat dapat langsung dirakit pada jig pengelasan dengan tingkat akurasi tinggi."
    ],
    tags: ["Laser Cutting", "Fabrikasi Logam", "Baja Karbon", "CNC", "Presisi"],
    featured: true
  },
  {
    id: "art-3",
    slug: "standar-iso-9001-2015-dalam-pemesinan-presisi",
    title: "Penerapan Standar Mutu ISO 9001:2015 untuk Mengeliminasi Defect pada Komponen Presisi",
    category: "Manajemen Mutu",
    date: "28 November 2025",
    author: "Ratna Dewi, MT",
    readTime: "6 menit baca",
    imageType: "article_iso",
    summary: "Membedah alur Quality Assurance dari penerimaan material bersertifikat mill cert, kalibrasi CMM berkala, hingga dokumentasi FAI (First Article Inspection).",
    content: [
      "Menghasilkan komponen mekanis dengan toleransi di bawah 10 mikron bukanlah semata-mata soal memiliki mesin CNC mutakhir. Jauh lebih penting dari itu adalah disiplin sistem manajemen mutu yang konsisten di setiap tahapan produksi.",
      "Di PT Industri Nusantara, implementasi ISO 9001:2015 diterjemahkan ke dalam Standard Operating Procedure (SOP) nyata di lantai bengkel:",
      "1. Verifikasi Mill Certificate material baja dan uji kekerasan (hardness test) sebelum plat atau poros disentuh alat potong.",
      "2. Protokol First Article Inspection (FAI) ketat, di mana mesin belum diizinkan memulai siklus produksi berulang sebelum part pertama diukur komprehensif pada ruang CMM terkontrol suhu 20°C.",
      "3. Kalibrasi berkala mikrometer, dial gauge, dan instrumen metrologi oleh laboratorium terakreditasi KAN secara terjadwal.",
      "Disiplin ini yang memastikan kepuasan klien tetap berada di atas 98% selama bertahun-tahun."
    ],
    tags: ["ISO 9001", "Quality Control", "Metrologi CMM", "Engineering", "Standardisasi"],
    featured: true
  },
  {
    id: "art-4",
    slug: "panduan-memilih-material-stainless-steel-sus304-vs-sus316",
    title: "Panduan Pemilihan Material Baja Tahan Karat: SUS304 vs SUS316 untuk Aplikasi Kimia & Farmasi",
    category: "Material Science",
    date: "14 Oktober 2025",
    author: "Dr. Ir. Wahyu Wibowo",
    readTime: "5 menit baca",
    imageType: "article_material",
    summary: "Kapan Anda harus menggunakan SUS304 yang lebih ekonomis, dan pada kondisi kimia atau lingkungan laut apa SUS316 mutlak diperlukan.",
    content: [
      "Kesalahan umum dalam pengadaan peralatan industri adalah menganggap semua stainless steel memiliki ketahanan korosi yang setara. Padahal, perbedaan komposisi kimia mikroskopis memiliki dampak signifikan terhadap umur pakai bejana atau perpipaan.",
      "SUS304 (AISI 304) mengandung sekitar 18% Kromium dan 8% Nikel. Sangat ideal untuk aplikasi food-grade umum, tangki air steril, atau struktur interior pabrik makanan.",
      "Sebaliknya, SUS316 mengandung tambahan 2-3% Molibdenum (Mo). Tambahan molibdenum ini secara dramatis meningkatkan resistensi material terhadap 'pitting corrosion' dan serangan klorida, air laut, atau asam klorida encer.",
      "Memilih SUS316 untuk tangki air biasa adalah pemborosan biaya, namun memaksakan SUS304 di pabrik kimia pesisir pantai dapat berujung kebocoran prematur dalam waktu kurang dari dua tahun."
    ],
    tags: ["Material Science", "Stainless Steel", "SUS316", "Korosi", "Pabrik Kimia"],
    featured: false
  },
  {
    id: "art-5",
    slug: "strategi-pencegahan-unplanned-downtime-pada-pabrik-kontinu",
    title: "Strategi Menekan Biaya Kerugian Akibat Unplanned Downtime pada Pabrik Manufaktur",
    category: "Maintenance",
    date: "02 September 2025",
    author: "Bambang Sudiro, ST",
    readTime: "4 menit baca",
    imageType: "article_maintenance",
    summary: "Langkah-langkah praktis menggeser paradigma dari maintenance reaktif (pemadam kebakaran) menuju predictive & condition-based monitoring.",
    content: [
      "Bagi pabrik dengan proses produksi kontinu seperti semen, pupuk, atau perakitan otomotif, setiap menit berhentinya lini produksi dapat menelan kerugian hingga ratusan juta rupiah.",
      "Paradigma konvensional yang menunggu mesin rusak baru diperbaiki (run-to-failure) telah terbukti menjadi penyumbang pemborosan terbesar dalam struktur biaya operasional pabrik.",
      "Pendekatan modern berfokus pada Condition-Based Monitoring (CBM). Dengan mengukur spektrum getaran bearing (vibration analysis) dan termografi inframerah pada panel listrik secara berkala, gejala ketidakseimbangan atau keausan dapat dideteksi 2 hingga 6 minggu sebelum kerusakan fatal terjadi.",
      "Hal ini memberi waktu bagi tim engineering untuk memesan suku cadang dan menjadwalkan perbaikan saat pergantian shift tanpa mengorbankan kuota output harian."
    ],
    tags: ["Predictive Maintenance", "OEE", "Downtime", "Condition Monitoring"],
    featured: false
  },
  {
    id: "art-6",
    slug: "peran-tkdn-dalam-proyek-infrastruktur-manufaktur-nasional",
    title: "Mengoptimalkan Capaian Nilai TKDN dalam Proyek Fabrikasi & Pengadaan Mesin Industri",
    category: "Regulasi & B2B",
    date: "15 Juli 2025",
    author: "Ir. Hendra Kusuma, IPM",
    readTime: "5 menit baca",
    imageType: "article_tkdn",
    summary: "Bagaimana PT Industri Nusantara mencapai nilai TKDN lebih dari 68% pada lini fabrikasi struktur dan perakitan mesin khusus lokal.",
    content: [
      "Kebijakan Tingkat Komponen Dalam Negeri (TKDN) yang digencarkan pemerintah merupakan katalis penting bagi kemandirian rantai pasok industri manufaktur di tanah air.",
      "Tidak sekadar memenuhi prasyarat lelang proyek BUMN dan instansi negara, optimalisasi TKDN memberikan keuntungan strategis berupa ketersediaan suku cadang cepat tanpa kendala izin impor dan fluktuasi nilai tukar valuta asing.",
      "PT Industri Nusantara terus memperluas kemitraan dengan peleburan baja lokal dan bengkel bubut binaan, sembari memberdayakan talenta insinyur lulusan universitas politeknik terkemuka Indonesia.",
      "Hasilnya, bejana tekan, sistem konveyor, dan mesin kustom kami telah mengantongi sertifikat verifikasi TKDN resmi dari Kementerian Perindustrian dengan skor di atas 65%."
    ],
    tags: ["TKDN", "Kemenperin", "Manufaktur Lokal", "Pengadaan Barang B2B"],
    featured: false
  }
];

export const initialTestimonials: TestimonialItem[] = [
  {
    id: "t-1",
    name: "Surya Pratama",
    role: "Plant Operations Director",
    company: "PT Indo Astra Component Tbk",
    avatarInitials: "SP",
    quote: "Pembangunan lini konveyor 180 meter oleh PT Industri Nusantara selesai 2 minggu sebelum target shutdown tahunan kami. Kualitas las dan integrasi PLC Siemens berjalan sangat mulus tanpa kendala pasca serah terima.",
    rating: 5,
    projectRef: "Lini Konveyor Otomotif Karawang"
  },
  {
    id: "t-2",
    name: "Dr. Ir. Faisal Basri",
    role: "Engineering & Project Head",
    company: "PT Cilegon Petrokimia Nusantara",
    avatarInitials: "FB",
    quote: "Untuk fabrikasi bejana tekan kimia korosif SUS316L, kami membutuhkan kepatuhan mutlak pada standar ASME. Industri Nusantara membuktikan ketelitian inspeksi radiografi 100% dan lolos sertifikasi tanpa cacat sedikitpun.",
    rating: 5,
    projectRef: "Reaktor Kimia Bertekanan 45m³"
  },
  {
    id: "t-3",
    name: "Linda Hartanto",
    role: "Supply Chain & Factory Manager",
    company: "PT Nutri Sejahtera Abadi (FMCG)",
    avatarInitials: "LH",
    quote: "Mesin vakum packaging khusus yang mereka rancang berhasil menekan laju kebocoran mikro hingga mendekati nol. Tim engineering mereka sangat komunikatif dan memberikan pelatihan operator yang sangat jelas.",
    rating: 5,
    projectRef: "Mesin Otomatis Kemasan Vakum"
  },
  {
    id: "t-4",
    name: "Agus Wicaksono, ST",
    role: "Mechanical Maintenance Lead",
    company: "PT Semen Perkasa Nusantara",
    avatarInitials: "AW",
    quote: "Respons cepat tim overhaul saat gearbox utama kiln kami mengalami getaran kritis luar biasa. Dalam 7 hari di lapangan, bearing raksasa dan alignment poros tuntas dengan standar getaran ISO yang sangat memuaskan.",
    rating: 5,
    projectRef: "Overhaul Gearbox Utama Kiln Semen"
  }
];

export const initialClients: ClientPartner[] = [
  { id: "c-1", name: "PT Indo Astra Component", industry: "Automotive OEM", logoText: "ASTRA COMPONENT" },
  { id: "c-2", name: "PT Cilegon Petrokimia", industry: "Petrochemical", logoText: "CILEGON PETRO" },
  { id: "c-3", name: "PT Nutri Sejahtera Abadi", industry: "FMCG & Food Processing", logoText: "NUTRI SEJAHTERA" },
  { id: "c-4", name: "PT Semen Perkasa Nusantara", industry: "Heavy Industry & Cement", logoText: "SEMEN PERKASA" },
  { id: "c-5", name: "PT Rekayasa Pembangkitan Energi", industry: "Power Generation", logoText: "REKAYASA ENERGI" },
  { id: "c-6", name: "PT Nusantara Logistik Sentral", industry: "Supply Chain & Warehousing", logoText: "NUSANTARA LOGISTICS" }
];

export const initialSEOSettings: SEOSettings = {
  metaTitle: "PT Industri Nusantara - Manufacturing, Fabrikasi Presisi & Otomasi Pabrik",
  metaDescription: "Perusahaan manufaktur rekayasa teknik terkemuka di Indonesia. Layanan fabrikasi logam berat, CNC 5-Axis, laser cutting, otomasi SCADA, dan custom machinery berstandar ISO 9001:2015.",
  keywords: "PT Industri Nusantara, manufaktur indonesia, fabrikasi logam, cnc machining cikarang, laser cutting karawang, otomasi pabrik, mesin industri, bejana tekan asme, tkdn manufaktur",
  canonicalUrl: "https://industrinusantara.co.id",
  ogTitle: "PT Industri Nusantara - Solusi Rekayasa Manufaktur Berstandar Global",
  ogDescription: "Didukung pengalaman 20+ tahun, fasilitas 12.000m² dan sertifikasi internasional untuk kebutuhan industri otomotif, petrokimia, energi, dan FMCG.",
  ogType: "website",
  twitterCard: "summary_large_image",
  enableSchemaOrg: true
};

export const initialThemeSettings: ThemeSettings = {
  primaryColor: "#0284c7", // Blue Primary
  accentColor: "#f97316",  // Orange Secondary Accent
  darkMode: false
};

export const companyMilestones = [
  { year: "2004", title: "Pendirian Perusahaan", desc: "Berdiri di Cikarang dengan workshop awal 1.500 m² melayani jasa bubut konvensional dan perbaikan suku cadang tekstil." },
  { year: "2010", title: "Ekspansi Fasilitas CNC", desc: "Investasi perdana mesin CNC Machining Center 3-Axis dan 4-Axis dari Jepang, membuka pintu kemitraan tier-2 industri otomotif." },
  { year: "2015", title: "Sertifikasi ISO 9001 & ASME", desc: "Ekspansi workshop baru 8.000 m², meraih sertifikasi ISO 9001:2015 dan akreditasi ASME 'U' Stamp untuk fabrikasi pressure vessel." },
  { year: "2019", title: "Divisi Otomasi & Robotika", desc: "Mendirikan divisi khusus Automation & Robotics untuk merespons kebutuhan lini perakitan pabrik berkecepatan tinggi." },
  { year: "2023", title: "Fiber Laser 12kW & CNC 5-Axis", desc: "Modernisasi teknologi permesinan dengan fiber laser 12kW dan mesin 5-Axis DMG Mori, meningkatkan kapasitas hingga 350 ton per bulan." },
  { year: "2026", title: "Kemandirian Industri & TKDN > 68%", desc: "Memperoleh verifikasi capaian TKDN tinggi dan melayani lebih dari 150 klien korporasi skala nasional dan multinasional." }
];

export const leadershipTeam = [
  { name: "Ir. Hendra Kusuma, IPM", role: "President Director & Founder", experience: "28 Tahun Pengalaman Rekayasa Mekanikal", background: "Alumni Teknik Mesin ITB, mantan Senior Engineering Manager di industri alat berat global." },
  { name: "Bambang Sudiro, ST", role: "Director of Operations & Plant", experience: "22 Tahun Pengalaman Manufaktur & Fabrikasi", background: "Spesialisasi pengelasan ASME/AWS dan sistem lean manufacturing Six Sigma Black Belt." },
  { name: "Ratna Dewi, MT", role: "Head of Quality & Metrology", experience: "16 Tahun Pengalaman Quality Assurance", background: "Magister Teknik Industri UI, auditor resmi ISO 9001:2015 dan ahli inspeksi geometrik GD&T." },
  { name: "Arief Wicaksana, M.Sc", role: "Chief of Automation & Technology", experience: "14 Tahun Pengalaman PLC & Robotika Industri", background: "Lulusan Mechatronics TU Munich, berpengalaman mengintegrasikan sistem perakitan otomatis." }
];
