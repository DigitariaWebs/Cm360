'use client';

import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
  onOpenModal: (title: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  image, 
  description, 
  onOpenModal
}) => {
  return (
    <button
      type="button"
      onClick={() => {
        console.log('Card clicked:', title);
        onOpenModal(title);
      }}
      className="w-full text-left focus:outline-none cursor-pointer"
    >
      <div 
        className="relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform h-96 group overflow-hidden border-4 border-transparent hover:border-[#D4AF37]"
      >
        {/* Image Container with overflow hidden and border radius */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onError={(e) => {
              // Fallback for missing image
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div class="w-full h-full bg-gradient-to-br from-[#1A3A2F] to-[#D4AF37] flex items-center justify-center">
                    <div class="text-center text-white">
                      <div class="text-6xl mb-4">💼</div>
                      <p class="text-lg font-semibold">Service Image</p>
                    </div>
                  </div>
                `;
              }
            }}
          />
        </div>
        
        {/* Gradient Overlay - Light for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent rounded-2xl transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-black/20 group-hover:via-black/5 group-hover:to-transparent" />
        
        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
          {/* Title at the top */}
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-bold leading-tight drop-shadow-2xl text-shadow-lg transition-transform duration-300 hover:scale-[1.005]">
              {title}
            </h3>
          </div>

          {/* Description at the bottom */}
          <div className="transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-white/20 transition-all duration-300 hover:bg-black/50">
              <p className="text-sm leading-relaxed text-white/90 drop-shadow-lg">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ServiceCard; 