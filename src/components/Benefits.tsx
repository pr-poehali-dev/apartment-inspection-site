
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const Benefits = () => {
  const benefits = [
    {
      icon: "Shield",
      title: "Защита интересов",
      description: "Представляем ваши интересы перед застройщиком и помогаем отстоять права на качественное жилье"
    },
    {
      icon: "CheckCircle",
      title: "Опыт и экспертиза",
      description: "Более 7 лет опыта и свыше 1200 успешно принятых квартир разной сложности"
    },
    {
      icon: "FileSearch",
      title: "Тщательная проверка",
      description: "Проверяем более 100 параметров согласно строительным нормам и стандартам качества"
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем профессиональный подход к решению задач любой сложности и гарантируем качество наших услуг
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover-scale border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Icon name={benefit.icon} size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
