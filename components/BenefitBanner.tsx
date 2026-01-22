import React, { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';

const BenefitBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 right-6 z-30 animate-fade-in-up">
      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-3 -right-3 bg-slate-800 text-white rounded-full p-1.5 shadow-lg hover:bg-slate-700 transition-colors z-50 border-2 border-white"
        aria-label="배너 닫기"
      >
        <X size={14} />
      </button>

      {/* Banner Card */}
      <div className="w-[260px] md:w-[280px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 ring-1 ring-black/5">
        {/* Header */}
        <div className="bg-blue-600 py-3 text-center">
          <h3 className="text-white font-bold text-base tracking-wide">협회원 특별혜택</h3>
        </div>

        {/* Content */}
        <div className="p-5 text-center">
          {/* Benefit 1 */}
          <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-red-50 text-red-500 text-[11px] font-bold rounded-full mb-1">
              혜택 01
            </span>
            <div className="text-slate-900 font-bold text-xl leading-tight">
              6개월<br />
              기장료 무료
            </div>
          </div>

          {/* Divider */}
          <div className="relative my-3">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-white text-slate-300 font-bold text-[10px] tracking-widest">OR</span>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="mb-5">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-500 text-[11px] font-bold rounded-full mb-1">
              혜택 02
            </span>
            <div className="text-slate-900 font-bold text-xl leading-tight">
              세무조정료<br />
              평생 무료
            </div>
          </div>

          {/* Action Button */}
          <a
            href="#contact"
            className="block w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition-all transform active:scale-95 flex items-center justify-center text-sm shadow-md"
          >
            혜택 신청하기 <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BenefitBanner;