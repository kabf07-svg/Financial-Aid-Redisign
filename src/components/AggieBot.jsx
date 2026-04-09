import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Sparkles, Info, ExternalLink, ChevronRight, X } from 'lucide-react';
import { format } from 'date-fns';

// --- STYLING UTILITY (From Document) ---
const cn = (...classes) => classes.filter(Boolean).join(' ');

const AggieBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const messagesEndRef = useRef(null);

  // --- SESSION MANAGEMENT (From Document) ---
  const [sessionId] = useState(() => localStorage.getItem('ncat_chat_session') || crypto.randomUUID());
  
  useEffect(() => {
    localStorage.setItem('ncat_chat_session', sessionId);
  }, [sessionId]);

  const [messages, setMessages] = useState([
    {
      id: 'greeting',
      role: 'assistant',
      text: "Welcome to North Carolina A&T's Financial Aid Assistant! 🐾\n\nI can help you with:\n• Scholarships & Grants\n• FAFSA Deadlines\n• Tuition & Refunds\n\nHow can I help you today? AGGIE PRIDE!",
      timestamp: new Date().toISOString(),
    }
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isThinking]);

  // --- AI API LOGIC (Using your OpenRouter Key) ---
// --- LOCAL OLLAMA LOGIC ---
  const getAIResponse = async (userText) => {
    try {
      const response = await fetch("http://localhost:11434/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "model": "llama3", // Or whatever model you downloaded (mistral, etc.)
          "stream": false,   // Set to false to get the full response at once
          "messages": [
            { 
              "role": "system", 
              "content": "You are the NC A&T Financial Aid Assistant. Rule: Be helpful and always end with [NAV: /path]." 
            },
            { "role": "user", "content": userText }
          ]
        })
      });

      const data = await response.json();
      const aiContent = data.message.content; // Ollama's response structure is slightly different
      
      const navMatch = aiContent.match(/\[NAV: (.*?)\]/);
      const cleanText = aiContent.replace(/\[NAV: (.*?)\]/, "").trim();
      
      return { text: cleanText, path: navMatch ? navMatch[1] : null };
    } catch (error) {
      console.error("Ollama Error:", error);
      return { text: "I'm having trouble connecting to my local brain. Is Ollama running? 🐾", path: null };
    }
  };

  const handleSend = async (manualText) => {
    const textToSend = manualText || input;
    if (!textToSend.trim() || isThinking) return;

    setMessages(prev => [...prev, { id: Date.now(), role: 'user', text: textToSend, timestamp: new Date().toISOString() }]);
    setInput("");
    setIsThinking(true);

    const result = await getAIResponse(textToSend);
    
    setMessages(prev => [...prev, { 
      id: Date.now() + 1,
      role: 'assistant', 
      text: result.text, 
      path: result.path, 
      timestamp: new Date().toISOString() 
    }]);
    
    setIsThinking(false);

    if (result.path && result.path !== location.pathname) {
      setTimeout(() => { navigate(result.path); setIsOpen(false); }, 2500);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="w-[380px] h-[600px] bg-white rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-slate-100 mb-4"
          >
            {/* --- HEADER: From Document --- */}
            <div className="bg-gradient-to-r from-[#004684] to-[#001D54] p-5 text-white relative">
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 border-2 border-[#FDB927]">
                  <Sparkles className="text-[#004684]" size={24} />
                </div>
                <div>
                  <h1 className="font-bold text-sm tracking-tight flex items-center gap-2">
                    Financial Aid Assistant <span className="bg-[#FDB927] text-[#004684] text-[8px] px-1.5 py-0.5 rounded font-black">BETA</span>
                  </h1>
                  <p className="text-[10px] opacity-70">Online & Ready to Help</p>
                </div>
              </div>
            </div>

            {/* --- MESSAGE AREA --- */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
              {messages.map((msg) => (
                <div key={msg.id} className={cn("flex w-full", msg.role === 'user' ? "justify-end" : "justify-start")}>
                  <div className={cn("max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm",
                    msg.role === 'user' ? "bg-[#004684] text-white rounded-tr-none" : "bg-white text-slate-700 border border-slate-100 rounded-tl-none")}>
                    {msg.text}
                    {msg.path && (
                      <div className="mt-2 pt-2 border-t border-slate-100 flex items-center gap-2 text-[10px] font-bold text-[#004684]">
                        <ChevronRight size={12} /> Redirecting to {msg.path}...
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isThinking && (
                <div className="flex gap-1.5 ml-2 p-2 bg-white border rounded-xl w-16 justify-center">
                  <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1.5 h-1.5 bg-[#004684]/40 rounded-full" />
                  <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-[#004684]/60 rounded-full" />
                  <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-[#004684] rounded-full" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* --- INPUT & SUGGESTIONS: From Document --- */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="flex gap-2 mb-3 overflow-x-auto pb-2 no-scrollbar">
                {["Find Scholarships", "FAFSA Deadlines", "Refunds", "SAP Rules"].map(s => (
                  <button key={s} onClick={() => handleSend(s)} className="whitespace-nowrap px-3.5 py-1.5 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 hover:bg-[#004684] hover:text-white transition-all">
                    {s}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input 
                  value={input} onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about financial aid..."
                  className="flex-1 bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#004684]/10"
                />
                <button onClick={() => handleSend()} className="bg-[#004684] text-white p-3 rounded-xl">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 rounded-2xl bg-[#FDB927] text-[#004684] shadow-2xl flex items-center justify-center border-4 border-white transition-transform hover:scale-110">
        {isOpen ? <X size={28} /> : <MessageSquare size={28} fill="currentColor" />}
      </button>
    </div>
  );
};

const MessageSquare = ({ size, fill }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    
  </svg>
);

export default AggieBot;