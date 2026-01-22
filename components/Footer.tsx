import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0 opacity-90">
             <Logo isLight={true} />
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">오시는길</a>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 text-sm text-center md:text-left">
          <p className="mb-2">상호명: 한국중소상공인지원협회</p>
          <p className="mb-4">주소: 세종특별자치시 남세종로 454, 8층 846호 | 대표전화: 1555-5567</p>
          <p className="text-slate-600">&copy; {new Date().getFullYear()} K-Small Business Support Association. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;