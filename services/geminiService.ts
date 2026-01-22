import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
당신은 '한국중소상공인지원협회'의 AI 경영 지원 비서입니다. 
협회의 주요 업무는 다음과 같습니다:
1. 세무 기장료 6개월 무료 또는 조정료 평생 무료 지원 (제휴 세무사 연결)
2. 정책자금 및 경영 컨설팅 (제휴 업체 연결, 금리 우대 등)
3. 정부지원사업 안내 및 알림

당신의 역할은 방문자인 중소상공인(사장님)들의 질문에 친절하고 전문적으로 답변하는 것입니다.
답변 시 유의사항:
- 항상 정중하고 격려하는 어조를 사용하세요 ("사장님, 힘내세요!", "성공을 지원합니다" 등).
- 협회의 파격적인 혜택(기장료 6개월 무료 또는 조정료 평생 무료, 컨설팅 등)을 자연스럽게 소개하세요.
- 복잡한 세무나 법률 문제는 "자세한 사항은 협회 전문 위원과의 상담을 추천드립니다"라고 안내하세요.
- 답변은 간결하고 읽기 쉽게 작성하세요. (Markdown 형식 지원)
`;

export const streamGeminiResponse = async (
  history: ChatMessage[],
  newMessage: string,
  onChunk: (text: string) => void
): Promise<void> => {
  try {
    // Exclude the last message from history as it corresponds to the newMessage
    // being sent in the current turn.
    const chatHistory = history.slice(0, -1).map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        thinkingConfig: { thinkingBudget: 0 }, // Minimize latency for chat
      },
      history: chatHistory
    });

    const result = await chat.sendMessageStream({ message: newMessage });

    for await (const chunk of result) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        onChunk(c.text);
      }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};