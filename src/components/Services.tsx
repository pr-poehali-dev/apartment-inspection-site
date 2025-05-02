
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      title: "Первичная приемка от застройщика",
      description: "Полная проверка качества строительных и отделочных работ, инженерных систем и документации",
      icon: "Home",
      price: "от 5 000 ₽",
      features: [
        "Проверка инженерных систем",
        "Выявление строительных дефектов",
        "Проверка отделочных работ",
        "Составление акта осмотра"
      ]
    },
    {
      title: "Вторичная приемка после устранения",
      description: "Контроль исправления выявленных дефектов и недостатков застройщиком",
      icon: "CheckSquare",
      price: "от 3 500 ₽",
      features: [
        "Проверка устранения дефектов",
        "Повторное обследование помещений",
        "Корректировка акта осмотра",
        "Рекомендации по дальнейшим действиям"
      ]
    },
    {
      title: "Экспертиза перед покупкой",
      description: "Оценка технического состояния квартиры перед заключением сделки купли-продажи",
      icon: "Search",
      price: "от 4 500 ₽",
      features: [
        "Выявление скрытых дефектов",
        "Проверка коммуникаций",
        "Анализ документации",
        "Консультация по торгу с продавцом"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Предлагаем комплексный подход к приемке квартир с гарантией качества и защитой ваших интересов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Icon name={service.icon} size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
              <ul className="mb-6 space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Icon name="Check" className="text-green-500 mt-1 mr-2" size={16} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Заказать услугу
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
