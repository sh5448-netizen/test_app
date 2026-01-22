import React from 'react';
import { Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      company: "유통업 대표님",
      name: "김민수 대표",
      content: "창업 초기에 고정비가 부담스러웠는데, 협회 덕분에 기장료 6개월 무료 혜택을 받고 시작했습니다. 조정료 무료 옵션도 있어 선택의 폭이 넓어 정말 좋았습니다.",
      tag: "세무지원"
    },
    {
      company: "스타트업 카페",
      name: "이지은 대표",
      content: "창업 초기 자금이 부족해 막막했는데, 정책자금 컨설팅 덕분에 운전 자금을 저금리로 확보할 수 있었습니다. 혼자였다면 절대 몰랐을 정보들이었어요.",
      tag: "정책자금"
    },
    {
      company: "제조업 대표님",
      name: "박철수 대표",
      content: "정부지원사업이 이렇게 많은 줄 몰랐습니다. 협회 안내로 고용지원금을 신청해서 인건비 부담을 크게 줄였습니다. 주변 사장님들께도 강력 추천합니다.",
      tag: "지원사업"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <span className="text-brand-400 font-bold tracking-wider uppercase text-sm">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              이미 많은 사장님들이<br/>
              <span className="text-brand-400">성공을 경험</span>하셨습니다
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ScrollReveal key={index} delay={index * 150} direction="up">
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-brand-500 transition-colors duration-300 h-full">
                <Quote className="text-brand-500 mb-6" size={40} />
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  "{review.content}"
                </p>
                <div className="flex items-center justify-between border-t border-slate-700 pt-6">
                  <div>
                    <div className="font-bold text-white">{review.name}</div>
                    <div className="text-sm text-slate-400">{review.company}</div>
                  </div>
                  <span className="px-3 py-1 bg-brand-900/50 text-brand-300 text-xs font-medium rounded-full border border-brand-500/30">
                    {review.tag}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;