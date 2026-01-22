import React from 'react';

interface LogoProps {
  isLight?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isLight = false }) => {
  return (
    <div className="flex items-center select-none group">
      {/* 
        JPG 로고는 투명도가 없으므로, 
        isLight(어두운 배경 위)일 때는 이미지를 반전(invert)시켜 
        네이비 로고를 흰색 로고처럼 보이게 하고 배경을 어둡게 처리합니다.
      */}
      <img 
        src="/assets/logo.jpg" 
        alt="한국중소상공인지원협회 로고" 
        className={`h-10 md:h-14 w-auto object-contain transition-all duration-300 ${
          isLight ? 'brightness-0 invert' : ''
        }`}
        onError={(e) => {
          // 이미지 로드 실패 시 대체 텍스트 표시 (개발 시 확인용)
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            const fallback = document.createElement('span');
            fallback.innerText = "한국중소상공인지원협회";
            fallback.className = isLight ? "text-white font-bold" : "text-[#002848] font-bold";
            parent.appendChild(fallback);
          }
        }}
      />
    </div>
  );
}

export default Logo;