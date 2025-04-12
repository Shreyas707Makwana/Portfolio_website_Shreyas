import { useState, useEffect, useRef } from "react";

interface TypewriterOptions {
  delay?: number;
  startDelay?: number;
  infiniteLoop?: boolean;
  loopDelay?: number;
}

const useTypewriter = (
  text: string,
  {
    delay = 50,
    startDelay = 0,
    infiniteLoop = false,
    loopDelay = 2000,
  }: TypewriterOptions = {}
) => {
  const [displayText, setDisplayText] = useState("");
  const currentIndexRef = useRef(0);
  const isCompletedRef = useRef(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const startTyping = () => {
      timeout = setTimeout(() => {
        if (currentIndexRef.current < text.length) {
          setDisplayText((prev) => prev + text[currentIndexRef.current]);
          currentIndexRef.current += 1;
          startTyping();
        } else {
          isCompletedRef.current = true;
          if (infiniteLoop) {
            timeout = setTimeout(() => {
              setDisplayText("");
              currentIndexRef.current = 0;
              isCompletedRef.current = false;
              startTyping();
            }, loopDelay);
          }
        }
      }, currentIndexRef.current === 0 ? startDelay : delay);
    };

    startTyping();

    return () => {
      clearTimeout(timeout);
    };
  }, [text, delay, startDelay, infiniteLoop, loopDelay]);

  return displayText;
};

export default useTypewriter;
