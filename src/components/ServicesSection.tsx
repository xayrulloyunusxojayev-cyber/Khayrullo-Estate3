import React from 'react';
import { SERVICES } from '../data';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-28 px-5 md:px-20 max-w-[1440px] mx-auto scroll-mt-20">
      <div className="text-center mb-12 md:mb-16">
        <span className="font-semibold text-[11px] md:text-[12px] text-[#f2ca50] tracking-[0.2em] uppercase block mb-2">
          Эксклюзивный сервис
        </span>
        <h2 className="font-serif-display font-semibold text-[28px] sm:text-[36px] md:text-[40px] text-[#f2ca50] gold-glow">
          Наши услуги
        </h2>
        <div className="w-16 h-[2px] bg-[#f2ca50] mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="bg-[#1c1b1b] p-8 md:p-10 border-b-2 border-transparent hover:border-[#f2ca50] transition-all duration-300 group rounded-sm shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-[#f2ca50]/10 border border-[#f2ca50]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span
                  className="material-symbols-outlined text-[#f2ca50] text-[36px]"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 400" }}
                >
                  {service.icon}
                </span>
              </div>
              <h3 className="font-serif-display font-semibold text-[22px] md:text-[24px] text-[#e5e2e1] mb-4">
                {service.title}
              </h3>
              <p className="text-[#d0c5af] text-[15px] leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#4d4635]/20 flex items-center gap-2 text-[#f2ca50] text-[12px] font-semibold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
              <span>Подробнее</span>
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
