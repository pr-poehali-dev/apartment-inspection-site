
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-blue-600">
            <span className="text-blue-800">Квартир</span>Эксперт
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Услуги</a>
          <a href="#benefits" className="text-gray-700 hover:text-blue-600 font-medium">Преимущества</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium">Как мы работаем</a>
          <a href="#reviews" className="text-gray-700 hover:text-blue-600 font-medium">Отзывы</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Контакты</a>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Phone" className="mr-2" size={18} />
            Заказать звонок
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-gray-700 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#benefits" 
              className="text-gray-700 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Преимущества
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-700 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Как мы работаем
            </a>
            <a 
              href="#reviews" 
              className="text-gray-700 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700 w-full mt-2">
              <Icon name="Phone" className="mr-2" size={18} />
              Заказать звонок
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
