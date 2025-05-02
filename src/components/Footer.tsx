
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">LIST</h3>
            <p className="text-gray-400 mb-4">
              Профессиональная приёмка квартир от застройщика. Защищаем ваши интересы и помогаем получить качественное жильё.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Icon name="Telegram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4">Контакты</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Icon name="MapPin" className="mr-2" size={16} />
                <span className="text-gray-400">г. Москва, ул. Строителей, 15</span>
              </div>
              <div className="flex items-center">
                <Icon name="Phone" className="mr-2" size={16} />
                <span className="text-gray-400">+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="mr-2" size={16} />
                <span className="text-gray-400">info@list.ru</span>
              </div>
              <div className="flex items-center">
                <Icon name="Clock" className="mr-2" size={16} />
                <span className="text-gray-400">Пн-Пт: 9:00-20:00, Сб: 10:00-18:00</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Услуги</a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Преимущества</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">Как мы работаем</a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-white transition-colors">Отзывы</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Контакты</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {currentYear} LIST. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
