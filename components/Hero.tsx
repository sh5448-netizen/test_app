import React from 'react';
import { ChevronRight, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const highlightText = "성장의 가치";

  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden bg-slate-900">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Corporate Institution Architecture"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl animate-fadeIn">
          <div className="inline-flex items-center space-x-2 bg-brand-500/10 border border-brand-500/30 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md">
            <ShieldCheck size={16} className="text-brand-400" />
            <span className="text-brand-100 text-sm font-semibold tracking-wide">공식 인증 중소상공인 지원 플랫폼</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            경영의 무게는 나누고<br />
            {/* Staggered text animation with gradient */}
            <span className="relative inline-block pb-2">
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700]">
                  {highlightText.split('').map((char, index) => (
                    <span 
                      key={index} 
                      className="inline-block opacity-0 animate-fadeInUp"
                      style={{ 
                        animationDelay: `${0.4 + index * 0.1}s`,
                      }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
               </span>
            </span>
            는 더합니다.
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light">
            복잡한 세무, 어려운 정책자금, 놓치기 쉬운 정부지원사업.<br/>
            한국중소상공인지원협회가 사장님의 든든한 경영 파트너가 되어드립니다.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-brand-600 text-white text-lg font-bold rounded-xl hover:bg-brand-500 transition-all shadow-lg hover:shadow-brand-500/25 flex items-center justify-center group"
            >
              무료 경영 진단 받기
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white/5 text-slate-200 border border-white/10 text-lg font-medium rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center"
            >
              지원 혜택 자세히 보기
            </a>
          </div>
          
          <div className="mt-12 flex items-center space-x-6 text-slate-400 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-brand-500 rounded-full mr-2"></div>
              <span>누적 상담 5만건</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-brand-500 rounded-full mr-2"></div>
              <span>제휴 전문가 300명+</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-brand-500 rounded-full mr-2"></div>
              <span>평균 절세효과 30%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;