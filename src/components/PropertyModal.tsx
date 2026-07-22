import React, { useState } from 'react';
import { Property } from '../types';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  onRequestViewing: (propertyTitle: string) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  property,
  onClose,
  onRequestViewing,
}) => {
  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#131313] border border-[#f2ca50]/30 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/60 border border-[#f2ca50]/30 text-[#f2ca50] flex items-center justify-center hover:bg-[#f2ca50] hover:text-[#3c2f00] transition-all cursor-pointer"
          aria-label="Закрыть"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        {/* Modal Content Scroll Area */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-8">
          {/* Header Image */}
          <div className="relative aspect-video sm:aspect-[21/9] w-full overflow-hidden rounded-sm border border-[#4d4635]/30">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            {property.badge && (
              <div className="absolute top-4 left-4 glass-panel px-3 py-1 text-[11px] font-bold text-[#f2ca50] uppercase tracking-wider">
                {property.badge}
              </div>
            )}
            <div className="absolute bottom-4 right-4 glass-panel px-4 py-2 font-serif-display font-bold text-[22px] md:text-[28px] text-[#f2ca50]">
              {property.price}
            </div>
          </div>

          {/* Title & Location */}
          <div className="space-y-2">
            <h2 className="font-serif-display font-bold text-[28px] md:text-[36px] text-[#e5e2e1]">
              {property.title}
            </h2>
            <div className="flex items-center gap-2 text-[#d0c5af] text-[15px]">
              <span className="material-symbols-outlined text-[#f2ca50] text-[18px]">
                location_on
              </span>
              <span>{property.location}</span>
            </div>
          </div>

          {/* Specs bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#1c1b1b] border border-[#4d4635]/30">
            <div className="text-center">
              <span className="text-[11px] text-[#d0c5af] uppercase block mb-1">Спальни</span>
              <span className="font-semibold text-[18px] text-[#f2ca50]">{property.bedrooms}</span>
            </div>
            {property.bathrooms && (
              <div className="text-center">
                <span className="text-[11px] text-[#d0c5af] uppercase block mb-1">Ванные</span>
                <span className="font-semibold text-[18px] text-[#f2ca50]">{property.bathrooms}</span>
              </div>
            )}
            {property.area && (
              <div className="text-center">
                <span className="text-[11px] text-[#d0c5af] uppercase block mb-1">Площадь</span>
                <span className="font-semibold text-[18px] text-[#f2ca50]">{property.area}</span>
              </div>
            )}
            <div className="text-center">
              <span className="text-[11px] text-[#d0c5af] uppercase block mb-1">Тип сделки</span>
              <span className="font-semibold text-[18px] text-[#f2ca50]">{property.dealType}</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="font-serif-display font-semibold text-[20px] text-[#f2ca50]">
              Описание объекта
            </h3>
            <p className="text-[#d0c5af] text-[15px] leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Features */}
          {property.features && property.features.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-serif-display font-semibold text-[20px] text-[#f2ca50]">
                Особенности и преимущества
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {property.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[#e5e2e1] text-[14px]">
                    <span className="material-symbols-outlined text-[#f2ca50] text-[18px]">
                      check_circle
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Action */}
          <div className="pt-4 border-t border-[#4d4635]/30 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div>
              <p className="text-[12px] text-[#d0c5af] uppercase font-semibold">Заинтересовал объект?</p>
              <p className="text-[14px] text-[#e5e2e1]">Запишитесь на закрытый персональный просмотр</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onRequestViewing(property.title);
              }}
              className="w-full sm:w-auto bg-[#f2ca50] text-[#3c2f00] px-8 py-4 font-semibold text-[12px] uppercase tracking-widest hover:bg-[#d4af37] transition-all cursor-pointer shadow-lg active:scale-95"
            >
              Записаться на просмотр
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
