'use client';

export function initFadeInObserver() {
  if (typeof window !== 'undefined') {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          fadeInObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    fadeElements.forEach(element => {
      element.classList.add('opacity-0', 'transition-opacity', 'duration-500');
      fadeInObserver.observe(element);
    });
  }
} 