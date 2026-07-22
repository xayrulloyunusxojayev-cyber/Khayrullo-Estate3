import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#4d4635]/30">
      <div className="luxury-divider" />
      <div className="px-5 md:px-20 py-12 md:py-16 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10 pb-10 border-b border-[#4d4635]/20">
          <div className="space-y-3">
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-serif-display font-bold text-[#f2ca50] text-[22px] md:text-[26px] tracking-tighter uppercase cursor-pointer"
            >
              KHAYRULLO ESTATE
            </div>
            <div className="flex items-center gap-2 text-[#d0c5af] text-[14px]">
              <span className="material-symbols-outlined text-[#f2ca50] text-[18px]">
                location_on
              </span>
              <span>г. Ташкент, ул. Амира Темура, 107Б (БЦ "International", 4 этаж)</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#f2ca50] text-[18px]">
                call
              </span>
              <a
                href="tel:+998901234567"
                className="font-semibold text-[#f2ca50] text-[15px] hover:underline"
              >
                +998 90 123 45 67
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#f2ca50] text-[18px]">
                mail
              </span>
              <a
                href="mailto:info@khayrullo.uz"
                className="text-[#d0c5af] text-[14px] hover:text-[#f2ca50] transition-colors"
              >
                info@khayrullo.uz
              </a>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a
              href="#"
              className="text-[#d0c5af]/80 font-semibold text-[11px] hover:text-[#f2ca50] uppercase tracking-wider transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-[#d0c5af]/80 font-semibold text-[11px] hover:text-[#f2ca50] uppercase tracking-wider transition-colors"
            >
              Условия использования
            </a>
            <a
              href="#"
              className="text-[#d0c5af]/80 font-semibold text-[11px] hover:text-[#f2ca50] uppercase tracking-wider transition-colors"
            >
              Карта сайта
            </a>
          </div>

          <div className="text-[#d0c5af]/60 text-[13px]">
            © 2024 Khayrullo Estate. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};
