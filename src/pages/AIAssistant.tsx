
import React, { useRef, useState } from "react";
import axios from "axios";
import { Bot, User, Send } from "lucide-react";
import AIChatBubble from "../components/AIChatBubble";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const AIAssistant = () => {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState<
    { query: string; reply: string; memories?: string[]; images?: string[] }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const ask = async () => {
    if (!query.trim()) return;
    setLoading(true);
    
    // Store current query to preserve it through state updates
    const currentQuery = query;
    setQuery("");
    
    try {
      const res = await axios.post("http://localhost:8000/chat", { query: currentQuery });
      const { reply, memories_used, images } = res.data;
      
      // Create a new history array instead of spreading the existing one
      setHistory(prevHistory => [
        ...prevHistory,
        {
          query: currentQuery,
          reply,
          memories: memories_used || [],
          images: images || [],
        },
      ]);
      
      setTimeout(() => {
        containerRef.current?.scrollTo({ top: 9999, behavior: "smooth" });
      }, 250);
    } catch (err) {
      // Create a new history array for error case as well
      setHistory(prevHistory => [
        ...prevHistory,
        { 
          query: currentQuery, 
          reply: "Sorry, an error occurred. Please try again.", 
          memories: [], 
          images: [] 
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Place Navbar at the top of the page */}
      <Navbar />
      
      <div className="flex-grow flex flex-col items-center bg-background pt-24 pb-10 px-2 animate-fade-in">
        <div className="w-full max-w-2xl bg-white/80 dark:bg-[#0A192FCC] glass-card rounded-3xl shadow-2xl overflow-hidden border border-secondary/20 backdrop-blur-lg mt-8">
          <header className="flex items-center p-6 border-b border-secondary/10">
            <div className="rounded-full bg-gradient-to-tr from-[#00B4DB] to-[#0083B0] p-2 mr-4 shadow">
              <Bot size={28} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold gradient-text mb-1">AI Memory Clone</h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Chat with your personal memory assistant. Ask questions, retrieve mock memories, explore your digital past!
              </p>
            </div>
          </header>
          <section ref={containerRef} className="transition-all px-5 pt-6 pb-5 h-[50vh] min-h-[325px] max-h-[52vh] overflow-y-auto scrollbar-none">
            {history.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full opacity-75">
                <Bot className="text-cyan-500 mb-2 animate-bounce" size={44} />
                <div className="mb-2 text-center">
                  <span className="text-[1.1rem]">
                    Ask anything – e.g. <br />
                    <span className="text-cyan-600 dark:text-cyan-300">"What project did I work on in 2023?"</span>
                  </span>
                </div>
              </div>
            )}
            {history.map((chat, i) => (
              <React.Fragment key={i}>
                <div className="mb-3 flex items-end">
                  <div className="flex flex-col items-end pr-2">
                    <span className="rounded-full shadow bg-gradient-to-tr from-white to-gray-300 dark:from-gray-700 dark:to-gray-800 p-2">
                      <User className="text-cyan-700 dark:text-cyan-300" size={22} />
                    </span>
                  </div>
                  <div className="bg-cyan-50 dark:bg-gray-800/80 rounded-2xl rounded-br-md px-5 py-2 ml-1 text-gray-900 dark:text-white shadow hover-scale max-w-[80%] border border-cyan-200 dark:border-cyan-700">
                    {chat.query}
                  </div>
                </div>
                <div className="mb-6">
                  <AIChatBubble text={chat.reply} isLoading={loading && i === history.length - 1} />
                  {chat.images && chat.images.length > 0 && (
                    <div className="flex gap-2 mt-2">
                      {chat.images.map((url, idx) => (
                        <img
                          key={idx}
                          src={url}
                          alt={`Memory ${idx}`}
                          className="rounded-md w-24 h-16 object-cover border border-secondary/30 shadow"
                        />
                      ))}
                    </div>
                  )}
                  {chat.memories && chat.memories.length > 0 && (
                    <div className="mt-2">
                      <span className="text-xs font-medium text-secondary">Memories used:</span>
                      <ul className="list-disc list-inside ml-4 text-xs">
                        {chat.memories.map((mem, idx) => (
                          <li key={idx}>{mem}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}
            {loading && (
              <div className="mb-2">
                <AIChatBubble text="..." isLoading />
              </div>
            )}
          </section>
          <form
            className="flex items-center gap-3 p-5 border-t border-secondary/10 bg-white/80 dark:bg-[#0A192FCC] glass-card"
            onSubmit={e => {
              e.preventDefault();
              ask();
            }}
          >
            <Input
              autoFocus
              className="flex-1 bg-background shadow-md dark:text-white"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything about your career, projects, research…"
              disabled={loading}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); ask(); }
              }}
            />
            <Button type="submit" size="lg" disabled={loading || !query.trim()}>
              <Send className="mr-1 -ml-1" size={18} /> Ask
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
