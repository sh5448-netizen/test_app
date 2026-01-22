import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  width?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '', 
  direction = 'up', 
  delay = 0,
  width = '100%' // Default to full width to behave well in flex/grid
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before the bottom
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getDirectionClasses = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-10';
      case 'down':
        return '-translate-y-10';
      case 'left':
        return 'translate-x-10';
      case 'right':
        return '-translate-x-10';
      default:
        return 'translate-y-10';
    }
  };

  return (
    <div
      ref={ref}
      style={{ 
        transitionDelay: `${delay}ms`, 
        width: width 
      }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-x-0 translate-y-0' 
          : `opacity-0 ${getDirectionClasses()}`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;