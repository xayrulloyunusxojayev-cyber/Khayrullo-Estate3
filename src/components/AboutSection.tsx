import React from 'react';
import { ABOUT_BG } from '../data';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-32 px-5 md:px-20 max-w-[1440px] mx-auto scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Side: Framed Image */}
        <div className="relative group max-w-lg lg:max-w-none mx-auto w-full">
          {/* Decorative Gold Top-Left Corner */}
          <div className="absolute -top-3 -left-3 md:-top-5 md:-left-5 w-24 h-24 md:w-36 md:h-36 border-t-2 border-l-2 border-[#f2ca50] z-20 pointer-events-none" />
          
          {/* Main Image Container */}
          <div className="w-full aspect-[4/5] bg-cover bg-center shadow-2xl relative z-10 rounded-sm overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url('${ABOUT_BG}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Decorative Gold Bottom-Right Corner */}
          <div className="absolute -bottom-3 -right-3 md:-bottom-5 md:-right-5 w-24 h-24 md:w-36 md:h-36 border-b-2 border-r-2 border-[#f2ca50] z-20 pointer-events-none" />
        </div>

        {/* Right Side: Text & Stats */}
        <div className="space-y-6 md:space-y-8">
          <div>
            <span className="font-semibold text-[11px] md:text-[12px] text-[#f2ca50] tracking-[0.2em] uppercase block mb-2">
              Наследие
            </span>
            <h2 className="font-serif-display font-semibold text-[28px] sm:text-[36px] md:text-[40px] leading-tight text-[#f2ca50] gold-glow">
              О компании
            </h2>
            <div className="h-[2px] w-12 bg-[#f2ca50] mt-4 mb-6" />
          </div>

          <div className="space-y-4 md:space-y-6 text-[#d0c5af] text-[15px] md:text-[18px] leading-relaxed">
            <p>
              <strong className="text-[#e5e2e1]">Khayrullo Estate</strong> — это символ эксклюзивности на рынке недвижимости Узбекистана. Мы не просто продаем квадратные метры, мы предлагаем стиль жизни, который подчеркивает ваш статус.
            </p>
            <p>
              Более 10 лет мы помогаем самым взыскательным клиентам находить уникальные объекты: от пентхаусов с панорамным видом на Ташкент до закрытых загородных резиденций.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 md:gap-8 pt-6 border-t border-[#4d4635]/40">
            <div>
              <div className="text-[#f2ca50] font-serif-display font-bold text-[32px] md:text-[48px] leading-none mb-1">
                150+
              </div>
              <div className="font-semibold text-[11px] md:text-[12px] text-[#e5e2e1] uppercase tracking-wider">
                Объектов в портфеле
              </div>
            </div>
            <div>
              <div className="text-[#f2ca50] font-serif-display font-bold text-[32px] md:text-[48px] leading-none mb-1">
                10
              </div>
              <div className="font-semibold text-[11px] md:text-[12px] text-[#e5e2e1] uppercase tracking-wider">
                Лет безупречности
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
