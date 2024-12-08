"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
}

export default function TypingAnimation({
  texts,
  typingSpeed = 150,
  deletingSpeed = 100,
  delayBetweenTexts = 2000,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animateText = () => {
      const currentText = texts[currentTextIndex];
      
      if (!isDeleting) {
        // 打字效果
        if (displayedText.length < currentText.length) {
          timeout = setTimeout(() => {
            setDisplayedText(currentText.slice(0, displayedText.length + 1));
          }, typingSpeed);
        } else {
          // 完成打字，等待后开始删除
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, delayBetweenTexts);
        }
      } else {
        // 删除效果
        if (displayedText.length > 0) {
          timeout = setTimeout(() => {
            setDisplayedText(displayedText.slice(0, -1));
          }, deletingSpeed);
        } else {
          // 完成删除，切换到下一个文本
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    timeout = setTimeout(animateText, 100);

    return () => clearTimeout(timeout);
  }, [displayedText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

  return (
    <h1 className={cn(
      "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
      className
    )}>
      {displayedText}
      <span className="animate-blink">|</span>
    </h1>
  );
}
