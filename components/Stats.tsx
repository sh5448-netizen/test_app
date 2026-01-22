import React from 'react';
import ScrollReveal from './ScrollReveal';

const Stats: React.FC = () => {
  const stats = [
    { label: "누적 회원사", value: "12,000+", desc: "전국 중소상공인 네트워크" },
    { label: "정책자금 승인액", value: "5,000억+", desc: "성공적인 자금 조달 실적" },
    { label: "제휴 전문가", value: "300+", desc: "세무사, 노무사, 경영지도사" },
    { label: "기장료 혜택", value: "6개월 무료", desc: "또는 조정료 평생 무료" },
  ];

  return (
    <section className="bg-white py-12 border-b border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-black text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-bold mb-1">{stat.label}</div>
                <div className="text-xs text-slate-400">{stat.desc}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;