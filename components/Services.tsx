import React from 'react';
import { Calculator, Landmark, HandCoins, ArrowRight, Check } from 'lucide-react';
import { ServiceCardProps } from '../types';
import ScrollReveal from './ScrollReveal';

const ServiceCard: React.FC<ServiceCardProps & { features: string[] }> = ({ title, description, icon, features }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-500/10 hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col">
    <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-slate-800 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed mb-6">
      {description}
    </p>
    <ul className="space-y-3 mb-8 flex-grow">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start text-sm text-slate-600">
          <Check size={16} className="text-brand-500 mr-2 mt-0.5 flex-shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center text-brand-600 font-semibold group-hover:text-brand-700 cursor-pointer">
      상담 신청하기 <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
              중소상공인 맞춤형 <span className="text-brand-600">3대 핵심 솔루션</span>
            </h2>
            <p className="text-slate-600 text-lg">
              경영에만 집중하세요. 복잡하고 어려운 행정, 재무 문제는 협회가 전문가와 함께 해결해 드립니다.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          <ScrollReveal delay={0} direction="up">
            <ServiceCard
              title="세무 기장료 파격 지원"
              description="검증된 제휴 세무사와의 매칭을 통해 업계 최고의 혜택으로 고품질 기장 서비스를 제공합니다."
              icon={<Calculator size={32} />}
              features={[
                "기장료 6개월 무료 또는 조정료 평생 무료",
                "업종별 전문 세무사 1:1 매칭",
                "부가세/소득세 신고 대행 및 절세 전략",
                "무료 세무 진단 서비스 제공"
              ]}
            />
          </ScrollReveal>
          <ScrollReveal delay={200} direction="up">
            <ServiceCard
              title="정책자금 및 경영컨설팅"
              description="기업 신용도와 상황에 맞는 최적의 정책자금을 분석하고 승인율을 극대화합니다."
              icon={<HandCoins size={32} />}
              features={[
                "기업 등급 및 자금 조달 가능성 무료 진단",
                "중진공, 소진공, 보증재단 자금 맞춤 설계",
                "경영 컨설팅 비용 최대 50% 지원",
                "사업계획서 작성 및 대면 심사 코칭"
              ]}
            />
          </ScrollReveal>
          <ScrollReveal delay={400} direction="up">
            <ServiceCard
              title="정부지원사업 안내"
              description="우리 기업에 딱 맞는 정부 무상 환급금 및 각종 지원 사업 정보를 놓치지 않게 안내합니다."
              icon={<Landmark size={32} />}
              features={[
                "고용장려금, R&D 지원사업 알림 서비스",
                "기업부설연구소/벤처기업 인증 지원",
                "소상공인 스마트 상점 기술보급 지원",
                "지원사업 신청 자격 및 결격 사유 사전 검토"
              ]}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Services;