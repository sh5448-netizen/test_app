import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '협회소개', href: '#about' },
    { name: '지원사업', href: '#services' },
    { name: '성공사례', href: '#testimonials' },
    { name: '문의하기', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Logo isLight={!isScrolled} />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-brand-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-100'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 bg-brand-600 text-white text-sm font-bold rounded-full hover:bg-brand-500 transition-all shadow-lg hover:shadow-brand-500/30"
          >
            상담 신청
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-slate-800' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-700 font-medium hover:text-brand-600 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
           <a
            href="#contact"
            className="px-8 py-3 bg-brand-600 text-white font-bold rounded-full hover:bg-brand-500"
            onClick={() => setIsOpen(false)}
          >
            상담 신청하기
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;