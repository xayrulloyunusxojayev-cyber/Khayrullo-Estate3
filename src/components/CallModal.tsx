import React, { useState } from 'react';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: () => void;
  propertyTitle?: string;
}

export const CallModal: React.FC<CallModalProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess,
  propertyTitle,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredTime, setPreferredTime] = useState('Ближайшее время');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setName('');
      setPhone('');
      onClose();
      onSubmitSuccess();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#131313] border border-[#f2ca50]/40 p-6 md:p-10 shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 border border-[#f2ca50]/30 text-[#f2ca50] flex items-center justify-center hover:bg-[#f2ca50] hover:text-[#3c2f00] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div className="space-y-6">
          <div>
            <span className="font-semibold text-[11px] text-[#f2ca50] uppercase tracking-[0.2em] block mb-1">
              {propertyTitle ? 'Запись на просмотр' : 'Заказать обратный звонок'}
            </span>
            <h3 className="font-serif-display font-semibold text-[24px] md:text-[28px] text-[#e5e2e1]">
              {propertyTitle ? propertyTitle : 'Консультация эксперта'}
            </h3>
            <p className="text-[#d0c5af] text-[14px] mt-2">
              Оставьте контактные данные, и наш ведущий брокер свяжется с вами в удобное время.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#d0c5af] mb-1.5">
                Ваше имя
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя"
                className="w-full bg-[#050505] border border-[#4d4635]/40 p-3.5 focus:border-[#f2ca50] outline-none text-[#e5e2e1] text-[14px]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#d0c5af] mb-1.5">
                Номер телефона
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+998 90 123-45-67"
                className="w-full bg-[#050505] border border-[#4d4635]/40 p-3.5 focus:border-[#f2ca50] outline-none text-[#e5e2e1] text-[14px]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#d0c5af] mb-1.5">
                Удобное время для звонка
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full bg-[#050505] border border-[#4d4635]/40 p-3.5 focus:border-[#f2ca50] outline-none text-[#e5e2e1] text-[14px] cursor-pointer"
              >
                <option value="Ближайшее время">В ближайшие 15 минут</option>
                <option value="С 10:00 до 14:00">С 10:00 до 14:00</option>
                <option value="С 14:00 до 18:00">С 14:00 до 18:00</option>
                <option value="С 18:00 до 21:00">С 18:00 до 21:00</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#f2ca50] text-[#3c2f00] py-4 font-semibold text-[12px] uppercase tracking-[0.2em] hover:bg-[#d4af37] transition-all cursor-pointer shadow-lg mt-2 active:scale-95 disabled:opacity-50"
            >
              {isSubmitting ? 'ОБРАБОТКА...' : 'ЗАКАЗАТЬ ЗВОНОК'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
