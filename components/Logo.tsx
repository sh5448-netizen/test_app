import React from 'react';

interface LogoProps {
  isLight?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isLight = false }) => {
  // Brand color from the provided image (Deep Navy)
  const brandNavy = isLight ? "#FFFFFF" : "#002848";
  const transitionClass = "transition-all duration-300";

  return (
    <div className="flex items-center gap-3 select-none group">
       {/* Emblem Container */}
       <div className="h-10 w-10 md:h-12 md:w-12 relative flex-shrink-0">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
            {/* Outer Circle */}
            <circle 
              cx="50" 
              cy="50" 
              r="46" 
              stroke={brandNavy} 
              strokeWidth="7" 
              className={transitionClass}
            />
            
            {/* Professional Bar Chart - Rounded Tops as in image */}
            <rect x="26" y="48" width="9" height="24" rx="2" fill={brandNavy} className={transitionClass} />
            <rect x="44" y="38" width="9" height="34" rx="2" fill={brandNavy} className={transitionClass} />
            <rect x="62" y="28" width="9" height="44" rx="2" fill={brandNavy} className={transitionClass} />
            
            {/* Smooth Rising Arrow Curve - Matches the uploaded image */}
            <path 
              d="M20 72 C35 72, 45 60, 80 30" 
              stroke={brandNavy} 
              strokeWidth="7" 
              strokeLinecap="round" 
              fill="none"
              className={`animate-draw ${transitionClass}`}
            />
            {/* Arrow Head - Integrated with the curve */}
            <path 
              d="M68 30 H80 V42" 
              stroke={brandNavy} 
              strokeWidth="7" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="none"
              className={`animate-draw ${transitionClass}`}
            />
          </svg>
       </div>
       
       {/* Typography - Matches the 3-line layout in image */}
       <div className={`flex flex-col justify-center ${isLight ? 'text-white' : 'text-[#002848]'} ${transitionClass}`}>
          <span className="text-[10px] md:text-[11px] font-bold leading-none mb-0.5 tracking-widest opacity-90">한국</span>
          <div className="flex flex-col leading-tight font-extrabold">
            <span className="text-lg md:text-xl tracking-tighter">중·소상공인</span>
            <span className="text-lg md:text-xl tracking-tighter">지원협회</span>
          </div>
       </div>
    </div>
  );
}

export default Logo;