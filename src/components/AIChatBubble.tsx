
import React, { useEffect, useState } from "react";
import { Bot } from "lucide-react";

interface AIChatBubbleProps {
  text: string;
  isLoading?: boolean;
}
const Typewriter = ({ text, speed = 24, onDone }: { text: string; speed?: number; onDone?: () => void }) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    let idx = 0;
    let mounted = true;
    function type() {
      if (!mounted) return;
      if (idx <= text.length) {
        setDisplayed(text.slice(0, idx));
        idx++;
        setTimeout(type, speed);
      } else {
        onDone?.();
      }
    }
    type();
    return () => { mounted = false; };
    // eslint-disable-next-line
  }, [text]);
  return (
    <span>
      {displayed}
      <span className="animate-blink ml-1 text-secondary">|</span>
    </span>
  );
};

const AIChatBubble = ({ text, isLoading }: AIChatBubbleProps) => (
  <div className="flex max-w-full">
    {/* Floating avatar */}
    <div className="flex flex-col items-end pr-2">
      <span className="rounded-full shadow-lg bg-gradient-to-tr from-[#00B4DB] to-[#0083B0] p-2">
        <Bot className="text-white" size={24} />
      </span>
    </div>
    <div className="bg-gradient-to-br from-white/80 via-cyan-100 to-[#E6F8F9] dark:from-navy dark:to-[#112240]/60 dark:via-[#1B2A3A]/70 rounded-2xl rounded-bl-md px-5 py-3 text-[1rem] font-medium text-gray-900 dark:text-white glass-card shadow-xl animate-fade-in ml-1 max-w-[80%] relative">
      {isLoading ? (
        <span className="text-muted-foreground italic">Thinking…</span>
      ) : (
        <Typewriter text={text} speed={16} />
      )}
    </div>
  </div>
);

export default AIChatBubble;
