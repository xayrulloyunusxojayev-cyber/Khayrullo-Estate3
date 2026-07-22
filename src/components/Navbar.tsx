import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenCallModal: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCallModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#4d4635]/20 ${
          isScrolled
            ? 'py-4 bg-[#131313]/95 backdrop-blur-xl shadow-lg'
            : 'py-6 bg-[#131313]/80 backdrop-blur-md'
        }`}
      >
        <div className="flex justify-between items-center px-5 md:px-20 max-w-[1440px] mx-auto">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#f2ca50] hover:text-[#ffe088] transition-colors p-1"
            aria-label="Открыть меню"
          >
            <span className="material-symbols-outlined text-[30px] block">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>

          {/* Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer font-serif-display font-bold text-[#f2ca50] tracking-tighter uppercase text-[20px] md:text-[24px] leading-none"
          >
            KHAYRULLO ESTATE
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#e5e2e1]/80 font-semibold text-[12px] uppercase tracking-[0.1em] hover:text-[#f2ca50] transition-colors"
            >
              О компании
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#e5e2e1]/80 font-semibold text-[12px] uppercase tracking-[0.1em] hover:text-[#f2ca50] transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-[#e5e2e1]/80 font-semibold text-[12px] uppercase tracking-[0.1em] hover:text-[#f2ca50] transition-colors"
            >
              Команда
            </button>
            <button
              onClick={() => scrollToSection('catalog')}
              className="text-[#f2ca50] border-b-2 border-[#f2ca50] pb-1 font-semibold text-[12px] uppercase tracking-[0.1em]"
            >
              Каталог
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="text-[#e5e2e1]/80 font-semibold text-[12px] uppercase tracking-[0.1em] hover:text-[#f2ca50] transition-colors"
            >
              Контакты
            </button>
          </nav>

          {/* Right section: Phone & CTA */}
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="tel:+998901234567"
              className="hidden md:block font-semibold text-[12px] uppercase tracking-[0.1em] text-[#e5e2e1]/80 hover:text-[#f2ca50] transition-colors"
            >
              +998 90 123 45 67
            </a>
            <button
              onClick={onOpenCallModal}
              className="bg-[#f2ca50] text-[#3c2f00] px-4 md:px-6 py-2.5 md:py-3 font-semibold text-[10px] md:text-[12px] uppercase tracking-wider hover:bg-[#d4af37] transition-all transform active:scale-95 shadow-md"
            >
              Заказать звонок
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 transition-opacity">
          <div className="flex flex-col gap-6 text-center">
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#e5e2e1] font-semibold text-[16px] uppercase tracking-[0.15em] hover:text-[#f2ca50] py-2 border-b border-[#4d4635]/30"
            >
              О компании
            </button>
            <button
              onClick={() => scrollToSection('catalog')}
              className="text-[#f2ca50] font-semibold text-[16px] uppercase tracking-[0.15em] py-2 border-b border-[#4d4635]/30"
            >
              Каталог объектов
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#e5e2e1] font-semibold text-[16px] uppercase tracking-[0.15em] hover:text-[#f2ca50] py-2 border-b border-[#4d4635]/30"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-[#e5e2e1] font-semibold text-[16px] uppercase tracking-[0.15em] hover:text-[#f2ca50] py-2 border-b border-[#4d4635]/30"
            >
              Команда
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="text-[#e5e2e1] font-semibold text-[16px] uppercase tracking-[0.15em] hover:text-[#f2ca50] py-2 border-b border-[#4d4635]/30"
            >
              Контакты
            </button>
          </div>

          <div className="space-y-4 text-center mt-8">
            <a
              href="tel:+998901234567"
              className="block font-semibold text-[16px] text-[#f2ca50] uppercase tracking-widest"
            >
              +998 90 123 45 67
            </a>
            <p className="text-[12px] text-[#d0c5af]">
              г. Ташкент, ул. Амира Темура, 107Б
            </p>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCallModal();
              }}
              className="w-full bg-[#f2ca50] text-[#3c2f00] py-4 font-semibold text-[12px] uppercase tracking-widest"
            >
              Заказать звонок
            </button>
          </div>
        </div>
      )}
    </>
  );
};
