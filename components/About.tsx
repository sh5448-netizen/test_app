import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  const benefits = [
    "10,000+ 회원사와 함께하는 신뢰받는 네트워크",
    "전문 세무사, 경영 지도사 등 200+ 전문가 그룹 보유",
    "매년 500건 이상의 정책자금 승인 실적",
    "실시간 법률/노무 자문 서비스 제공"
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 relative">
             <ScrollReveal direction="right" delay={200}>
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Business Consultation and Growth"
                className="relative rounded-2xl shadow-2xl z-10 w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-8 -left-8 md:bottom-8 md:-left-12 bg-white p-6 rounded-xl shadow-xl z-20 border border-slate-100 max-w-xs hidden md:block">
                <p className="text-4xl font-black text-brand-600 mb-1">98%</p>
                <p className="text-slate-600 font-medium">회원사 서비스 만족도</p>
              </div>
             </ScrollReveal>
          </div>
          
          <div className="lg:w-1/2">
            <ScrollReveal direction="left" delay={400}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                사장님의 든든한 동반자,<br/>
                <span className="text-brand-600">한국중소상공인지원협회</span>입니다.
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                급변하는 경영 환경 속에서 중소상공인들이 겪는 어려움을 깊이 이해합니다. 
                우리는 단순한 지원을 넘어, 사장님의 사업이 지속 가능하게 성장할 수 있도록 
                실질적인 솔루션을 제공하는 것을 목표로 합니다.
              </p>
              
              <ul className="space-y-4 mb-10">
                {benefits.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="text-brand-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="text-brand-600 font-bold border-b-2 border-brand-600 pb-1 hover:text-brand-700 hover:border-brand-700 transition-colors inline-block">
                협회 비전 더 알아보기
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;