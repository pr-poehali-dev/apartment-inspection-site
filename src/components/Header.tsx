
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Добавляем тень и фон при скролле
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  const navItems = [
    { name: 'Услуги', href: '#services' },
    { name: 'Преимущества', href: '#benefits' },
    { name: 'Как мы работаем', href: '#how-it-works' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img 
            src="https://cdn.poehali.dev/files/8e6ac06d-586d-4d30-b0d9-394a6ce910f9.jpg" 
            alt="LIST Logo" 
            className="h-10 mr-2" 
          />
          <span className="font-bold text-2xl">LIST</span>
        </a>

        {/* Десктопная навигация */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-gray-700 hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+79991234567" className="flex items-center text-gray-800 hover:text-primary transition-colors">
            <Icon name="Phone" className="mr-2" size={18} />
            <span className="font-medium">+7 (999) 123-45-67</span>
          </a>
          <Button>Заказать звонок</Button>
        </div>

        {/* Мобильное меню */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="py-6 flex items-center">
                  <img 
                    src="https://cdn.poehali.dev/files/8e6ac06d-586d-4d30-b0d9-394a6ce910f9.jpg" 
                    alt="LIST Logo" 
                    className="h-8 mr-2" 
                  />
                  <span className="font-bold text-2xl">LIST</span>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="py-2 px-4 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto pt-6 border-t border-gray-200">
                  <a href="tel:+79991234567" className="flex items-center mb-4 text-gray-800">
                    <Icon name="Phone" className="mr-2" size={18} />
                    <span className="font-medium">+7 (999) 123-45-67</span>
                  </a>
                  <Button className="w-full">Заказать звонок</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
