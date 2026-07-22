import React, { useState } from 'react';
import { Property, FilterState } from '../types';

interface CatalogSectionProps {
  properties: Property[];
  filter: FilterState;
  onSelectProperty: (property: Property) => void;
  onResetFilter: () => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  properties,
  filter,
  onSelectProperty,
  onResetFilter,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('Все');

  // Filter properties based on search bar & category tabs
  const filteredProperties = properties.filter((item) => {
    // Deal Type Filter
    if (filter.dealType !== 'Все' && item.dealType !== filter.dealType) {
      return false;
    }

    // District Filter
    if (filter.district !== 'Все' && !item.district.includes(filter.district) && !item.location.includes(filter.district)) {
      return false;
    }

    // Price Filter
    if (filter.priceRange === '200k' && item.numericPrice < 200000) return false;
    if (filter.priceRange === '500k' && item.numericPrice < 500000) return false;
    if (filter.priceRange === '1m' && item.numericPrice < 1000000) return false;

    // Category Tab Filter
    if (activeCategory === 'Эксклюзив' && item.badge !== 'EXCLUSIVE') return false;
    if (activeCategory === 'Новинки' && item.badge !== 'NEW') return false;
    if (activeCategory === 'Элита' && item.badge !== 'ELITE') return false;

    return true;
  });

  const isFiltered =
    filter.dealType !== 'Все' ||
    filter.district !== 'Все' ||
    filter.priceRange !== 'Все' ||
    activeCategory !== 'Все';

  return (
    <section id="catalog" className="py-16 md:py-24 bg-[#0e0e0e] border-y border-[#4d4635]/20 scroll-mt-20">
      <div className="px-5 md:px-20 max-w-[1440px] mx-auto">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
          <div>
            <span className="font-semibold text-[11px] md:text-[12px] text-[#f2ca50] tracking-[0.2em] uppercase block mb-2">
              Каталог недвижимости
            </span>
            <h2 className="font-serif-display font-semibold text-[28px] sm:text-[36px] md:text-[40px] text-[#f2ca50]">
              Актуальные предложения
            </h2>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 bg-[#131313] p-1 border border-[#4d4635]/30">
              {['Все', 'Эксклюзив', 'Новинки', 'Элита'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 md:px-4 py-1.5 text-[11px] md:text-[12px] uppercase font-semibold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#f2ca50] text-[#3c2f00]'
                      : 'text-[#d0c5af] hover:text-[#f2ca50]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {isFiltered && (
              <button
                onClick={() => {
                  setActiveCategory('Все');
                  onResetFilter();
                }}
                className="font-semibold text-[11px] md:text-[12px] text-[#f2ca50] border-b border-[#f2ca50]/40 pb-0.5 hover:border-[#f2ca50] uppercase"
              >
                Сбросить фильтры
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {filteredProperties.length === 0 ? (
          <div className="py-20 text-center glass-panel max-w-2xl mx-auto p-8">
            <span className="material-symbols-outlined text-[48px] text-[#f2ca50] mb-4 block">
              search_off
            </span>
            <h3 className="font-serif-display text-[22px] text-[#e5e2e1] mb-2">
              Объекты по заданным параметрам не найдены
            </h3>
            <p className="text-[#d0c5af] text-[14px] mb-6">
              Попробуйте смягчить критерии поиска или свяжитесь с нашим экспертом для подбора закрытых вариантов.
            </p>
            <button
              onClick={() => {
                setActiveCategory('Все');
                onResetFilter();
              }}
              className="bg-[#f2ca50] text-[#3c2f00] px-6 py-3 font-semibold text-[12px] uppercase tracking-wider"
            >
              Сбросить фильтр
            </button>
          </div>
        ) : (
          /* Property Cards Grid - 2 columns on mobile, 2/3 on desktop */
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                onClick={() => onSelectProperty(property)}
                className="group bg-[#131313] border border-[#4d4635]/20 hover:border-[#f2ca50]/50 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-video sm:aspect-[16/10]">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url('${property.image}')` }}
                    />
                    <div className="absolute inset-0 property-card-gradient opacity-60 group-hover:opacity-30 transition-opacity" />

                    {/* Badge */}
                    {property.badge && (
                      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 glass-panel px-2 py-0.5 sm:px-3 sm:py-1 text-[8px] sm:text-[10px] font-bold text-[#f2ca50] uppercase tracking-wider shadow-lg">
                        {property.badge}
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="p-3 sm:p-6 space-y-2 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-1 sm:gap-2">
                      <h3 className="font-serif-display font-semibold text-[14px] sm:text-[20px] md:text-[22px] text-[#e5e2e1] group-hover:text-[#f2ca50] transition-colors leading-snug line-clamp-1 sm:line-clamp-none">
                        {property.title}
                      </h3>
                      <div className="text-[#f2ca50] font-serif-display font-bold text-[13px] sm:text-[18px] md:text-[20px] whitespace-nowrap">
                        {property.price}
                      </div>
                    </div>

                    <p className="text-[#d0c5af] text-[11px] sm:text-[14px] line-clamp-1">
                      {property.location}
                    </p>

                    {/* Features row */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 pt-2 sm:pt-3 border-t border-[#4d4635]/20 text-[#e5e2e1]/70 text-[10px] sm:text-[13px]">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] sm:text-[18px] text-[#f2ca50]">
                          bed
                        </span>
                        <span>{property.bedrooms} <span className="hidden sm:inline">Спальни</span></span>
                      </div>

                      {property.bathrooms && (
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px] sm:text-[18px] text-[#f2ca50]">
                            bathtub
                          </span>
                          <span>{property.bathrooms} <span className="hidden sm:inline">Ванные</span></span>
                        </div>
                      )}

                      {property.area && (
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px] sm:text-[18px] text-[#f2ca50]">
                            square_foot
                          </span>
                          <span>{property.area}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="px-3 pb-3 sm:px-6 sm:pb-6 pt-0">
                  <div className="w-full py-1.5 sm:py-2.5 text-center border border-[#f2ca50]/30 group-hover:bg-[#f2ca50] group-hover:text-[#3c2f00] text-[#f2ca50] text-[9px] sm:text-[11px] font-semibold uppercase tracking-widest transition-all">
                    Подробнее
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
