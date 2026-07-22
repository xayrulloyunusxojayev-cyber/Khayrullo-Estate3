import React from 'react';
import { HERO_BG } from '../data';
import { FilterState } from '../types';

interface HeroSectionProps {
  filter: FilterState;
  setFilter: React.Dispatch<React.SetStateAction<FilterState>>;
  onSearch: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  filter,
  setFilter,
  onSearch
}) => {
  return (
    <div className="relative">
      {/* Hero Container */}
      <section className="relative min-h-[640px] md:h-[921px] flex flex-col justify-center items-center overflow-hidden pt-24 pb-20 md:py-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/50 to-black/30 z-10" />
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-1000 scale-105"
            style={{ backgroundImage: `url('${HERO_BG}')` }}
          />
        </div>

        <div className="relative z-20 text-center px-5 max-w-5xl mx-auto mt-8 md:mt-0">
          {/* Desktop Subtitle */}
          <span className="hidden md:block font-semibold text-[12px] text-[#f2ca50] tracking-[0.3em] uppercase mb-4">
            Престиж • Уверенность • Стиль
          </span>

          {/* Mobile Subtitle */}
          <span className="md:hidden font-semibold text-[11px] text-[#f2ca50] tracking-[0.2em] uppercase mb-3 block">
            Premium Experience
          </span>

          {/* Main Title */}
          <h1 className="font-serif-display font-bold text-[36px] sm:text-[48px] md:text-[64px] leading-[1.1] md:leading-[72px] text-[#f2ca50] gold-glow mb-6 md:mb-8">
            Элитная недвижимость <br className="hidden md:block" />
            <span className="text-[#e5e2e1] md:text-[#f2ca50]">в Ташкенте</span>
          </h1>

          <div className="w-20 md:w-24 h-[1px] bg-[#f2ca50] mx-auto mb-6 md:mb-8" />
        </div>
      </section>

      {/* Filter Bar Panel */}
      <section className="relative z-30 -mt-16 md:-mt-24 px-5 md:px-20 max-w-[1440px] mx-auto">
        <div className="glass-panel p-6 md:p-10 flex flex-col md:flex-row items-end gap-5 md:gap-6 rounded-sm shadow-2xl">
          {/* Deal Type */}
          <div className="w-full space-y-2">
            <label className="font-semibold text-[10px] md:text-[12px] text-[#d0c5af] uppercase tracking-wider block">
              Тип сделки
            </label>
            <div className="relative">
              <select
                value={filter.dealType}
                onChange={(e) =>
                  setFilter((prev) => ({ ...prev, dealType: e.target.value }))
                }
                className="w-full bg-[#131313] border border-[#4d4635]/40 text-[#e5e2e1] p-3.5 md:p-4 focus:border-[#f2ca50] outline-none transition-colors appearance-none text-[14px] font-medium cursor-pointer"
              >
                <option value="Все">Все варианты</option>
                <option value="Купить">Купить</option>
                <option value="Арендовать">Арендовать</option>
              </select>
              <span className="material-symbols-outlined pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#f2ca50] text-[20px]">
                expand_more
              </span>
            </div>
          </div>

          {/* District */}
          <div className="w-full space-y-2">
            <label className="font-semibold text-[10px] md:text-[12px] text-[#d0c5af] uppercase tracking-wider block">
              Район
            </label>
            <div className="relative">
              <select
                value={filter.district}
                onChange={(e) =>
                  setFilter((prev) => ({ ...prev, district: e.target.value }))
                }
                className="w-full bg-[#131313] border border-[#4d4635]/40 text-[#e5e2e1] p-3.5 md:p-4 focus:border-[#f2ca50] outline-none transition-colors appearance-none text-[14px] font-medium cursor-pointer"
              >
                <option value="Все">Все районы</option>
                <option value="Мирабадский">Мирабадский</option>
                <option value="Мирзо-Улугбекский">Мирзо-Улугбекский</option>
                <option value="Юнусабадский">Юнусабадский</option>
                <option value="Яккасарайский">Яккасарайский</option>
                <option value="Чиланзарский">Чиланзарский</option>
              </select>
              <span className="material-symbols-outlined pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#f2ca50] text-[20px]">
                expand_more
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="w-full space-y-2">
            <label className="font-semibold text-[10px] md:text-[12px] text-[#d0c5af] uppercase tracking-wider block">
              Цена
            </label>
            <div className="relative">
              <select
                value={filter.priceRange}
                onChange={(e) =>
                  setFilter((prev) => ({ ...prev, priceRange: e.target.value }))
                }
                className="w-full bg-[#131313] border border-[#4d4635]/40 text-[#e5e2e1] p-3.5 md:p-4 focus:border-[#f2ca50] outline-none transition-colors appearance-none text-[14px] font-medium cursor-pointer"
              >
                <option value="Все">Любая цена</option>
                <option value="200k">от $200,000</option>
                <option value="500k">от $500,000</option>
                <option value="1m">от $1,000,000</option>
              </select>
              <span className="material-symbols-outlined pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#f2ca50] text-[20px]">
                expand_more
              </span>
            </div>
          </div>

          {/* Submit Search Button */}
          <button
            onClick={onSearch}
            className="w-full md:w-auto min-w-[160px] bg-[#f2ca50] text-[#3c2f00] px-8 md:px-12 py-4 font-semibold text-[12px] uppercase tracking-widest hover:bg-[#d4af37] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">
              search
            </span>
            Найти
          </button>
        </div>
      </section>
    </div>
  );
};
