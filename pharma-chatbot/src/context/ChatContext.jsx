
import { createContext, useContext, useState } from "react";
import { getBotResponse } from "../services/chatService";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (text) => {
    const trimmedMessage = text.trim();

    if (!trimmedMessage || isLoading) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      text: trimmedMessage,
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      userMessage,
    ]);

    setIsLoading(true);

    try {
      const response = await getBotResponse(trimmedMessage);

      const botMessage = {
        id: Date.now() + 1,
        role: "bot",
        text: response.text,
        actions: response.actions,
      };

      setMessages((previousMessages) => [
        ...previousMessages,
        botMessage,
      ]);
    } catch (error) {
      setMessages((previousMessages) => [
        ...previousMessages,
        {
          id: Date.now() + 1,
          role: "bot",
          text: "Something went wrong. Please try again.",
          actions: [],
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ChatContext.Provider
      value={{ messages, isLoading, sendMessage }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}
