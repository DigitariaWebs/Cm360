'use client';

import { useEffect, useState, useRef } from 'react';
import MotionWrapper from '../animations/MotionWrapper';

interface CounterProps {
  end: number;
  duration: number;
  prefix?: string;
  suffix?: string;
}

function Counter({ end, duration, prefix = '', suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return (
    <div ref={countRef} className="text-4xl font-serif font-bold text-gold mb-2">
      {prefix}
      {count}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 bg-darkgreen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <MotionWrapper animation="slideUp" delay={0.1}>
            <div>
              <Counter end={12} duration={2} suffix="+" />
              <div className="text-sm uppercase tracking-wider">Ans d'expérience</div>
            </div>
          </MotionWrapper>

          <MotionWrapper animation="slideUp" delay={0.2}>
            <div>
              <Counter end={150} duration={2} suffix="+" />
              <div className="text-sm uppercase tracking-wider">Clients accompagnés</div>
            </div>
          </MotionWrapper>

          <MotionWrapper animation="slideUp" delay={0.3}>
            <div>
              <Counter end={2.5} duration={2} prefix="€" suffix="B" />
              <div className="text-sm uppercase tracking-wider">De trésorerie optimisée</div>
            </div>
          </MotionWrapper>

          <MotionWrapper animation="slideUp" delay={0.4}>
            <div>
              <Counter end={98} duration={2} suffix="%" />
              <div className="text-sm uppercase tracking-wider">Taux de satisfaction</div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
} 