import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <ScrollReveal direction="right" className="h-full">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">무료 경영 진단 신청</h2>
              <p className="text-slate-400 text-lg mb-10">
                지금 바로 상담을 신청하세요. 협회 전문 위원이 24시간 이내에 직접 연락드려
                사장님의 고민을 해결해 드립니다.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-600/20 p-3 rounded-lg text-brand-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">전화 문의</h4>
                    <p className="text-slate-300">1555-5567 (평일 10:00 - 17:00)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-600/20 p-3 rounded-lg text-brand-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">오시는 길</h4>
                    <p className="text-slate-300">세종특별자치시 남세종로 454, 8층 846호</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal direction="left" delay={200}>
            <div className="bg-white p-8 rounded-2xl text-slate-800 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">상담 신청서 작성</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1">업체명</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-500 focus:outline-none" placeholder="예: (주)한국상사" />
                  </div>
                  <div>
                     <label className="block text-sm font-semibold text-slate-700 mb-1">담당자 성함</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-500 focus:outline-none" placeholder="홍길동" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">연락처</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-500 focus:outline-none" placeholder="010-1234-5678" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">상담 희망 분야</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-500 focus:outline-none text-slate-600">
                    <option>세무 기장료 6개월 무료/조정료 무료</option>
                    <option>정책자금 컨설팅</option>
                    <option>정부지원사업 안내</option>
                    <option>기타 경영 자문</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">문의 내용</label>
                  <textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-500 focus:outline-none h-32" placeholder="현재 겪고 계신 어려움이나 궁금한 점을 간단히 적어주세요."></textarea>
                </div>

                <button type="button" className="w-full bg-brand-600 text-white font-bold py-4 rounded-lg hover:bg-brand-700 transition-colors shadow-lg hover:shadow-xl mt-2">
                  무료 상담 신청하기
                </button>
                
                <p className="text-xs text-slate-400 text-center mt-4">
                  보내주신 정보는 상담 목적으로만 사용되며, 개인정보처리방침에 따라 안전하게 보호됩니다.
                </p>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;