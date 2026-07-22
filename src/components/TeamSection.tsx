import React from 'react';
import { BROKERS } from '../data';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-16 md:py-28 bg-[#131313] border-y border-[#4d4635]/20 scroll-mt-20">
      <div className="px-5 md:px-20 max-w-[1440px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="font-semibold text-[11px] md:text-[12px] text-[#f2ca50] tracking-[0.2em] uppercase block mb-2">
            Профессионализм и опыт
          </span>
          <h2 className="font-serif-display font-semibold text-[28px] sm:text-[36px] md:text-[40px] text-[#f2ca50] gold-glow">
            Команда экспертов
          </h2>
          <div className="w-16 h-[2px] bg-[#f2ca50] mx-auto mt-4" />
        </div>

        {/* Brokers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {BROKERS.map((broker) => (
            <div key={broker.id} className="text-center space-y-5 group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] rounded-sm border border-[#4d4635]/30">
                <div
                  className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${broker.image}')` }}
                />
                <div className="absolute inset-0 bg-[#f2ca50]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
              <div>
                <h4 className="font-serif-display font-semibold text-[22px] md:text-[24px] text-[#e5e2e1] group-hover:text-[#f2ca50] transition-colors">
                  {broker.name}
                </h4>
                <p className="font-semibold text-[11px] md:text-[12px] text-[#f2ca50] uppercase tracking-wider mt-1">
                  {broker.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
