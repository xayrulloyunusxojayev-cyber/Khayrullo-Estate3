import React from 'react';

interface SuccessToastProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessToast: React.FC<SuccessToastProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md bg-[#131313] border border-[#f2ca50] p-8 text-center shadow-2xl">
        <div className="w-16 h-16 bg-[#f2ca50]/10 border border-[#f2ca50] rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-[#f2ca50] text-[36px]">
            check_circle
          </span>
        </div>

        <h3 className="font-serif-display font-bold text-[24px] text-[#f2ca50] mb-2">
          Заявка успешно принята
        </h3>

        <p className="text-[#d0c5af] text-[14px] leading-relaxed mb-6">
          Благодарим за обращение в Khayrullo Estate. Наш персональный эксперт свяжется с вами в течение 15 минут.
        </p>

        <button
          onClick={onClose}
          className="w-full bg-[#f2ca50] text-[#3c2f00] py-3.5 font-semibold text-[12px] uppercase tracking-widest hover:bg-[#d4af37] transition-all cursor-pointer"
        >
          Хорошо
        </button>
      </div>
    </div>
  );
};
