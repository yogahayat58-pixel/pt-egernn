import React from 'react';

interface IndustrialImageProps {
  type: string;
  alt?: string;
  className?: string;
  customUrl?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1' | 'auto';
}

export const IndustrialImage: React.FC<IndustrialImageProps> = ({
  type,
  alt = "PT Industri Nusantara Visual",
  className = "",
  customUrl,
  aspectRatio = '4:3'
}) => {
  const [imageError, setImageError] = React.useState(false);

  React.useEffect(() => {
    setImageError(false);
  }, [customUrl]);

  // If user provided a valid custom uploaded URL and no error, try rendering it
  if (customUrl && !imageError) {
    return (
      <div className={`relative overflow-hidden bg-slate-900 ${className}`}>
        <img
          src={customUrl}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // High-fidelity self-contained SVG vectors and visual compositions
  const renderVisual = () => {
    switch (type) {
      case 'hero':
      case 'factory_exterior':
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0B132B" />
                <stop offset="50%" stopColor="#1C2541" />
                <stop offset="100%" stopColor="#0284C7" />
              </linearGradient>
              <linearGradient id="metallicGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="50%" stopColor="#64748B" />
                <stop offset="100%" stopColor="#1E293B" />
              </linearGradient>
              <radialGradient id="sparkGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F97316" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
              </radialGradient>
              <pattern id="gridPattern" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              </pattern>
            </defs>
            {/* Background & Grid */}
            <rect width="800" height="450" fill="url(#heroBg)" />
            <rect width="800" height="450" fill="url(#gridPattern)" />
            
            {/* Architectural Factory Bays */}
            <path d="M50 450 L180 200 L320 200 L450 450 Z" fill="url(#metallicGrad)" opacity="0.4" />
            <path d="M260 450 L380 150 L520 150 L640 450 Z" fill="url(#metallicGrad)" opacity="0.6" />
            
            {/* High-Tech Overhead Crane Truss */}
            <line x1="0" y1="120" x2="800" y2="120" stroke="#38BDF8" strokeWidth="4" opacity="0.4" />
            <line x1="0" y1="135" x2="800" y2="135" stroke="#38BDF8" strokeWidth="2" opacity="0.3" />
            {[...Array(16)].map((_, i) => (
              <line key={i} x1={i * 50} y1="120" x2={i * 50 + 25} y2="135" stroke="#38BDF8" strokeWidth="1.5" opacity="0.4" />
            ))}

            {/* Industrial Robotic Arm */}
            <g transform="translate(480, 220)">
              {/* Base */}
              <rect x="-40" y="160" width="80" height="40" rx="4" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
              <circle cx="0" cy="150" r="28" fill="#1E293B" stroke="#0284C7" strokeWidth="3" />
              {/* Lower Arm */}
              <line x1="0" y1="150" x2="-60" y2="60" stroke="#64748B" strokeWidth="18" strokeLinecap="round" />
              <line x1="0" y1="150" x2="-60" y2="60" stroke="#0284C7" strokeWidth="6" strokeLinecap="round" />
              {/* Joint 2 */}
              <circle cx="-60" cy="60" r="20" fill="#0F172A" stroke="#F97316" strokeWidth="3" />
              {/* Forearm */}
              <line x1="-60" y1="60" x2="40" y2="-10" stroke="#94A3B8" strokeWidth="14" strokeLinecap="round" />
              {/* Wrist & End-Effector */}
              <circle cx="40" cy="-10" r="14" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
              <line x1="40" y1="-10" x2="80" y2="-20" stroke="#F97316" strokeWidth="6" />
              {/* Laser / Welding Arc Glow */}
              <circle cx="85" cy="-22" r="45" fill="url(#sparkGlow)" />
              <circle cx="85" cy="-22" r="6" fill="#FFF" />
              {/* Spark Rays */}
              <line x1="85" y1="-22" x2="110" y2="-35" stroke="#FDBA74" strokeWidth="2" />
              <line x1="85" y1="-22" x2="105" y2="-10" stroke="#FED7AA" strokeWidth="2" />
              <line x1="85" y1="-22" x2="95" y2="-45" stroke="#F97316" strokeWidth="1.5" />
            </g>

            {/* Glowing Tech Floor Reflection */}
            <rect x="0" y="410" width="800" height="40" fill="#0284C7" opacity="0.15" />
            <line x1="0" y1="410" x2="800" y2="410" stroke="#38BDF8" strokeWidth="1" opacity="0.5" />

            {/* Precision HUD / Technical Indicators */}
            <g transform="translate(40, 60)">
              <rect x="0" y="0" width="180" height="55" rx="6" fill="rgba(15, 23, 42, 0.75)" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" />
              <text x="14" y="24" fill="#38BDF8" fontSize="11" fontFamily="monospace" fontWeight="bold">PRECISION FACILITY</text>
              <text x="14" y="42" fill="#FFFFFF" fontSize="13" fontFamily="sans-serif" fontWeight="600">ISO 9001:2015 CERTIFIED</text>
            </g>
          </svg>
        );

      case 'cnc':
      case 'impeller':
      case 'machining':
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="450" fill="#0B132B" />
            {/* Concentric CNC Machining Circles & Toolpaths */}
            <circle cx="300" cy="225" r="160" stroke="#1E293B" strokeWidth="4" />
            <circle cx="300" cy="225" r="130" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.8" />
            <circle cx="300" cy="225" r="95" stroke="#38BDF8" strokeWidth="2" opacity="0.6" />
            <circle cx="300" cy="225" r="60" fill="#1E293B" stroke="#64748B" strokeWidth="3" />
            
            {/* 5-Axis Impeller Blades */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <g key={i} transform={`rotate(${angle}, 300, 225)`}>
                <path d="M 300 165 C 330 165, 345 190, 335 225 C 325 210, 310 185, 300 165 Z" fill="#94A3B8" stroke="#E2E8F0" strokeWidth="1" />
                <path d="M 300 165 L 305 130" stroke="#F97316" strokeWidth="2" strokeDasharray="3 3" opacity="0.7" />
              </g>
            ))}

            {/* Spindle Tool Head */}
            <path d="M285 20 L315 20 L310 90 L290 90 Z" fill="#475569" stroke="#94A3B8" strokeWidth="1.5" />
            <line x1="300" y1="90" x2="300" y2="125" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
            <circle cx="300" cy="125" r="8" fill="#F97316" opacity="0.6" />

            {/* Grid and Caliper Coordinate markers */}
            <line x1="300" y1="0" x2="300" y2="450" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" />
            <line x1="0" y1="225" x2="600" y2="225" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" />
            <text x="315" y="420" fill="#38BDF8" fontSize="12" fontFamily="monospace">TOLERANCE: ±0.003 mm</text>
            <text x="30" y="40" fill="#F8FAFC" fontSize="14" fontFamily="sans-serif" fontWeight="bold">5-AXIS CNC MACHINING</text>
          </svg>
        );

      case 'laser':
      case 'cutting':
      case 'article_laser':
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="450" fill="#0F172A" />
            {/* Sheet Metal Plate */}
            <rect x="80" y="110" width="440" height="230" rx="4" fill="#1E293B" stroke="#334155" strokeWidth="2" />
            
            {/* Precision Cut Path */}
            <path d="M120 160 L380 160 L380 280 L220 280 L220 210 L120 210 Z" fill="none" stroke="#F97316" strokeWidth="3" />
            
            {/* Laser Nozzle Head */}
            <polygon points="360,70 400,70 385,145 375,145" fill="#64748B" stroke="#94A3B8" strokeWidth="2" />
            
            {/* Fiber Laser Beam & Golden Sparks */}
            <line x1="380" y1="145" x2="380" y2="160" stroke="#38BDF8" strokeWidth="3" />
            <circle cx="380" cy="160" r="14" fill="#F97316" opacity="0.8" />
            <circle cx="380" cy="160" r="5" fill="#FFFFFF" />

            {/* Spark Explosions */}
            {[
              [395, 175], [410, 150], [405, 180], [365, 180], [350, 165], [415, 170]
            ].map(([x, y], idx) => (
              <circle key={idx} cx={x} cy={y} r="2.5" fill="#FED7AA" />
            ))}

            <text x="30" y="40" fill="#F8FAFC" fontSize="14" fontFamily="sans-serif" fontWeight="bold">12kW FIBER LASER CUTTING</text>
            <text x="30" y="420" fill="#38BDF8" fontSize="12" fontFamily="monospace">KERF: 0.25mm | CLEAN EDGE</text>
          </svg>
        );

      case 'welding':
      case 'fabrication':
      case 'vessel':
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="450" fill="#0A0F1D" />
            
            {/* Heavy Pressure Vessel Cylindrical Tank */}
            <rect x="150" y="120" width="300" height="190" rx="30" fill="#1E293B" stroke="#475569" strokeWidth="3" />
            {/* Reinforcement Rings */}
            <line x1="220" y1="120" x2="220" y2="310" stroke="#0284C7" strokeWidth="4" />
            <line x1="380" y1="120" x2="380" y2="310" stroke="#0284C7" strokeWidth="4" />
            {/* Flange & Nozzle */}
            <rect x="270" y="70" width="60" height="50" fill="#334155" stroke="#64748B" strokeWidth="2" />
            <ellipse cx="300" cy="70" rx="36" ry="10" fill="#475569" stroke="#94A3B8" strokeWidth="2" />
            
            {/* Weld Seam with High Glow */}
            <line x1="300" y1="120" x2="300" y2="310" stroke="#F97316" strokeWidth="3" strokeDasharray="4 2" />
            <circle cx="300" cy="210" r="16" fill="#F97316" opacity="0.4" />
            <circle cx="300" cy="210" r="4" fill="#FFFFFF" />

            {/* ASME Stamp graphic */}
            <circle cx="400" cy="250" r="20" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="2 2" />
            <text x="393" y="254" fill="#38BDF8" fontSize="10" fontFamily="sans-serif" fontWeight="bold">ASME</text>

            <text x="30" y="40" fill="#F8FAFC" fontSize="14" fontFamily="sans-serif" fontWeight="bold">PRESSURE VESSEL & FABRICATION</text>
            <text x="30" y="420" fill="#38BDF8" fontSize="12" fontFamily="monospace">ASME SEC VIII / 100% NDT TESTED</text>
          </svg>
        );

      case 'automation':
      case 'conveyor':
      case 'article_iot':
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="450" fill="#0B132B" />
            
            {/* Conveyor Bed Structure */}
            <rect x="50" y="240" width="500" height="40" rx="4" fill="#1E293B" stroke="#334155" strokeWidth="2" />
            {/* Rollers */}
            {[...Array(14)].map((_, i) => (
              <circle key={i} cx={75 + i * 35} cy={260} r="14" fill="#334155" stroke="#94A3B8" strokeWidth="2" />
            ))}

            {/* Moving Palletized Items */}
            <rect x="140" y="180" width="70" height="60" rx="4" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
            <rect x="310" y="175" width="80" height="65" rx="4" fill="#0369A1" stroke="#38BDF8" strokeWidth="2" />
            
            {/* Sensor & Scanning Beam */}
            <line x1="350" y1="90" x2="350" y2="175" stroke="#F97316" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="350" cy="90" r="8" fill="#F97316" />
            
            {/* SCADA Waveform / Logic Signals */}
            <path d="M 60 90 L 100 90 L 110 60 L 125 120 L 140 90 L 220 90 L 230 70 L 245 110 L 260 90" fill="none" stroke="#38BDF8" strokeWidth="2" />

            <text x="30" y="40" fill="#F8FAFC" fontSize="14" fontFamily="sans-serif" fontWeight="bold">INDUSTRIAL AUTOMATION & PLC</text>
            <text x="30" y="420" fill="#38BDF8" fontSize="12" fontFamily="monospace">SIEMENS S7-1500 / SCADA REALTIME</text>
          </svg>
        );

      case 'gearbox':
      case 'maintenance':
      case 'article_maintenance':
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="450" fill="#0F172A" />
            {/* Heavy Industrial Gear Mesh */}
            <g transform="translate(240, 210)">
              <circle cx="0" cy="0" r="100" fill="#1E293B" stroke="#64748B" strokeWidth="6" />
              {[...Array(12)].map((_, i) => (
                <rect key={i} x="-14" y="-115" width="28" height="24" rx="2" fill="#475569" stroke="#94A3B8" strokeWidth="1" transform={`rotate(${i * 30})`} />
              ))}
              <circle cx="0" cy="0" r="40" fill="#0F172A" stroke="#0284C7" strokeWidth="4" />
            </g>

            <g transform="translate(380, 290)">
              <circle cx="0" cy="0" r="60" fill="#1E293B" stroke="#64748B" strokeWidth="4" />
              {[...Array(8)].map((_, i) => (
                <rect key={i} x="-10" y="-72" width="20" height="18" rx="2" fill="#475569" stroke="#94A3B8" strokeWidth="1" transform={`rotate(${i * 45})`} />
              ))}
              <circle cx="0" cy="0" r="24" fill="#0F172A" stroke="#F97316" strokeWidth="3" />
            </g>

            {/* Laser Alignment Indicator Line */}
            <line x1="120" y1="100" x2="480" y2="100" stroke="#38BDF8" strokeWidth="2" strokeDasharray="6 3" />
            <circle cx="240" cy="100" r="4" fill="#38BDF8" />
            <circle cx="380" cy="100" r="4" fill="#38BDF8" />

            <text x="30" y="40" fill="#F8FAFC" fontSize="14" fontFamily="sans-serif" fontWeight="bold">HEAVY OVERHAUL & ALIGNMENT</text>
            <text x="30" y="420" fill="#38BDF8" fontSize="12" fontFamily="monospace">ISO 10816 VIBRATION ACCREDITED</text>
          </svg>
        );

      default:
        // Default Clean Engineering Blueprint Visual
        return (
          <svg className="w-full h-full object-cover" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="450" fill="#0B132B" />
            {/* Precision Grid lines */}
            <path d="M 0 0 L 600 450 M 600 0 L 0 450" stroke="rgba(2, 132, 199, 0.15)" strokeWidth="1" />
            {[...Array(9)].map((_, i) => (
              <line key={i} x1={i * 75} y1="0" x2={i * 75} y2="450" stroke="rgba(56, 189, 248, 0.1)" strokeWidth="1" />
            ))}
            {[...Array(7)].map((_, i) => (
              <line key={i} x1="0" y1={i * 75} x2="600" y2={i * 75} stroke="rgba(56, 189, 248, 0.1)" strokeWidth="1" />
            ))}
            
            {/* Center Geometric Mechanism */}
            <circle cx="300" cy="225" r="90" stroke="#0284C7" strokeWidth="2" strokeDasharray="4 4" />
            <rect x="235" y="160" width="130" height="130" rx="12" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
            <circle cx="300" cy="225" r="35" fill="#0F172A" stroke="#F97316" strokeWidth="2" />

            <text x="30" y="40" fill="#F8FAFC" fontSize="14" fontFamily="sans-serif" fontWeight="bold">PT INDUSTRI NUSANTARA</text>
            <text x="30" y="420" fill="#38BDF8" fontSize="12" fontFamily="monospace">PRECISION ENGINEERING SPECIFICATION</text>
          </svg>
        );
    }
  };

  return (
    <div className={`relative overflow-hidden bg-slate-900 group ${className}`}>
      {renderVisual()}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};
