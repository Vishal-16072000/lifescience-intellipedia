
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bot,
  Send,
  User,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { useChat } from "../context/ChatContext";

function Chatbot() {
  const { messages, isLoading, sendMessage } = useChat();

  const [input, setInput] = useState("");

  const navigate = useNavigate();
  const messagesEndRef = useRef(null);

  // Scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  // Handle message submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim() || isLoading) return;

    sendMessage(input);
    setInput("");
  };

  // Handle navigation actions
  const handleAction = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] min-h-[560px]">

      {/* Header */}
      <div className="mb-5">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-slate-900">
            AI Assistant
          </h1>

        </div>

        <p className="text-slate-500 mt-1">
          Ask questions about pharmaceutical products and suppliers.
        </p>
      </div>

      {/* Chat Container */}
      <div className="flex-1 min-h-0 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col overflow-hidden">

        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <Bot size={22} />
          </div>

          <div>
            <h2 className="font-semibold text-slate-800">
              Pharmaceutical Assistant
            </h2>

            <p className="text-xs text-emerald-600">
              ● Online
            </p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">

          {/* Empty State */}
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Sparkles size={30} />
              </div>

              <h3 className="text-xl font-semibold text-slate-800">
                Welcome to AI Assistant
              </h3>

              <p className="text-slate-500 mt-2 max-w-md">
                Explore pharmaceutical products, suppliers and product information
              </p>

              <button
                onClick={() =>
                  setInput("Show me suppliers of Paracetamol.")
                }
                className="mt-6 flex items-center gap-2 text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-3 rounded-xl transition"
              >
                Show me suppliers of Paracetamol
                <ArrowRight size={16} />
              </button>
            </div>
          )}

          {/* Message List */}
          {messages.map((message) => {
            const isUser = message.role === "user";

            return (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  isUser ? "justify-end" : "justify-start"
                }`}
              >
                {!isUser && (
                  <div className="w-9 h-9 shrink-0 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Bot size={19} />
                  </div>
                )}

                <div
                  className={`max-w-[75%] ${
                    isUser ? "items-end" : "items-start"
                  } flex flex-col`}
                >
                  <div
                    className={`px-4 py-3 rounded-2xl text-sm leading-6 ${
                      isUser
                        ? "bg-blue-600 text-white rounded-br-sm"
                        : "bg-slate-100 text-slate-800 rounded-bl-sm"
                    }`}
                  >
                    {message.text}
                  </div>

                  {/* Navigation Actions */}
                  {message.actions?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {message.actions.map((action) => (
                        <button
                          key={action.path}
                          onClick={() => handleAction(action.path)}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg border border-blue-200 text-blue-700 text-xs font-medium hover:bg-blue-50 transition"
                        >
                          {action.label}
                          <ArrowRight size={14} />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {isUser && (
                  <div className="w-9 h-9 shrink-0 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center">
                    <User size={18} />
                  </div>
                )}
              </div>
            );
          })}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <Bot size={19} />
              </div>

              <div className="bg-slate-100 px-5 py-4 rounded-2xl flex gap-1">
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-slate-100 bg-white">
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-2 focus-within:border-blue-400 transition"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about pharmaceutical products..."
              className="flex-1 bg-transparent outline-none px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400"
              disabled={isLoading}
            />

            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="w-10 h-10 shrink-0 rounded-lg bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <Send size={18} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Chatbot;
