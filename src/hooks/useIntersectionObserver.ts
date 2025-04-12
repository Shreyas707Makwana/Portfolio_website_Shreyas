import { useRef, useState, useEffect } from "react";

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
}

const useIntersectionObserver = ({
  threshold = 0,
  rootMargin = "0px",
}: UseIntersectionObserverProps = {}) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin]);

  return { elementRef, isVisible };
};

export default useIntersectionObserver;
