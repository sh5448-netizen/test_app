import React from 'react';
import { ClipboardCheck, UserCheck, Handshake, TrendingUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardCheck size={32} />,
      title: "상담 신청",
      desc: "홈페이지 또는 전화를 통해 경영 애로사항을 접수합니다."
    },
    {
      icon: <UserCheck size={32} />,
      title: "전문가 배정",
      desc: "세무, 자금, 노무 등 분야별 전문 위원이 1:1로 배정됩니다."
    },
    {
      icon: <Handshake size={32} />,
      title: "솔루션 매칭",
      desc: "제휴 세무사 연결 및 최적의 정책자금/지원사업을 제안합니다."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "실행 및 사후관리",
      desc: "지속적인 모니터링으로 사업의 안정적인 성장을 지원합니다."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              복잡한 절차 없이<br/>
              <span className="text-brand-600">원스톱으로 해결</span>해 드립니다
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10 transform -translate-y-1/2"></div>
          
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 150} direction="up" className="h-full">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300 h-full">
                <div className="w-16 h-16 bg-brand-600 text-white rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-brand-500/30 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <div className="text-center">
                  <div className="bg-slate-100 inline-block px-3 py-1 rounded-full text-xs font-bold text-slate-500 mb-3">STEP 0{index + 1}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;