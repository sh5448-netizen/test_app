import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2, Sparkles } from 'lucide-react';
import { streamGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '안녕하세요! 한국중소상공인지원협회 AI 비서입니다. 세무 할인, 정책 자금, 협회 가입 등 무엇이든 물어보세요.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    // Add user message
    const newHistory = [...messages, { role: 'user', text: userMessage } as ChatMessage];
    setMessages(newHistory);
    setIsLoading(true);

    try {
      let currentResponse = '';
      
      // Add placeholder for model response
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      await streamGeminiResponse(newHistory, userMessage, (chunk) => {
        currentResponse += chunk;
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: 'model', text: currentResponse };
          return updated;
        });
      });
      
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: '죄송합니다. 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 ${isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-gradient-to-tr from-brand-600 to-brand-400 text-white'}`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-full max-w-[380px] h-[550px] max-h-[70vh] bg-white rounded-2xl shadow-2xl border border-slate-200 z-40 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-brand-700 p-4 flex items-center space-x-3 text-white">
          <div className="bg-white/20 p-2 rounded-full">
            <Bot size={24} />
          </div>
          <div>
            <h3 className="font-bold text-base">AI 경영 지원 비서</h3>
            <p className="text-brand-200 text-xs flex items-center">
              <Sparkles size={10} className="mr-1" /> Gemini 2.5 Flash 기반
            </p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'bg-brand-600 text-white rounded-br-none shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none shadow-sm'
                } ${msg.isError ? 'bg-red-50 text-red-600 border-red-200' : ''}`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && messages[messages.length - 1]?.text === '' && (
             <div className="flex justify-start">
               <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-slate-200 shadow-sm flex items-center space-x-2">
                 <Loader2 size={16} className="animate-spin text-brand-600" />
                 <span className="text-slate-400 text-xs">답변 생성 중...</span>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-slate-100">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="예: 기장료 할인은 얼마나 되나요?"
              className="w-full bg-slate-100 border-0 rounded-full py-3 pl-4 pr-12 text-sm text-slate-800 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-shadow"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-2 p-2 bg-brand-600 text-white rounded-full hover:bg-brand-500 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
          <div className="text-center mt-2">
            <p className="text-[10px] text-slate-400">AI는 실수할 수 있습니다. 중요한 정보는 협회에 직접 문의하세요.</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default AIAssistant;
