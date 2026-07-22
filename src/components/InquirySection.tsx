import React, { useState } from 'react';

interface InquirySectionProps {
  onSuccess: () => void;
}

export const InquirySection: React.FC<InquirySectionProps> = ({ onSuccess }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setName('');
      setPhone('');
      onSuccess();
    }, 800);
  };

  return (
    <section id="contacts" className="relative py-16 md:py-28 bg-[#0e0e0e] scroll-mt-20">
      <div className="px-5 md:px-20 max-w-[1440px] mx-auto">
        <div className="glass-panel p-8 md:p-16 rounded-sm shadow-2xl flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left">
            <span className="font-semibold text-[11px] md:text-[12px] text-[#f2ca50] tracking-[0.2em] uppercase block">
              Персональный менеджмент
            </span>
            <h2 className="font-serif-display font-semibold text-[28px] sm:text-[36px] md:text-[40px] text-[#f2ca50] leading-tight gold-glow">
              Оставьте заявку на подбор недвижимости
            </h2>
            <p className="text-[#d0c5af] text-[15px] md:text-[18px] leading-relaxed">
              Наши эксперты свяжутся с вами в течение 15 минут, чтобы предложить лучшие варианты, которых еще нет в открытом доступе.
            </p>
          </div>

          {/* Right Form */}
          <form onSubmit={handleSubmit} className="lg:w-1/2 w-full space-y-5">
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#d0c5af] mb-2">
                Ваше имя
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя Фамилия"
                className="w-full bg-[#050505] border border-[#4d4635]/40 p-4 focus:border-[#f2ca50] outline-none text-[#e5e2e1] placeholder-[#99907c] transition-all text-[15px]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#d0c5af] mb-2">
                Номер телефона
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+998 90 123-45-67"
                className="w-full bg-[#050505] border border-[#4d4635]/40 p-4 focus:border-[#f2ca50] outline-none text-[#e5e2e1] placeholder-[#99907c] transition-all text-[15px]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#f2ca50] text-[#3c2f00] py-4 md:py-5 font-semibold text-[12px] uppercase tracking-[0.2em] hover:bg-[#d4af37] transition-all cursor-pointer shadow-xl active:scale-[0.98] disabled:opacity-50"
            >
              {isSubmitting ? 'ОТПРАВКА...' : 'ОТПРАВИТЬ ЗАЯВКУ'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
