
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const HowItWorks = () => {
  const steps = [
    {
      icon: "ClipboardCheck",
      title: "Заявка",
      description: "Оставьте заявку на сайте или позвоните нам. Мы свяжемся с вами для обсуждения деталей",
    },
    {
      icon: "Calendar",
      title: "Планирование",
      description: "Согласуем удобную дату и время проведения технической проверки квартиры",
    },
    {
      icon: "Ruler",
      title: "Проверка",
      description: "Наш специалист тщательно проверит квартиру на соответствие всем строительным нормам",
    },
    {
      icon: "FileText",
      title: "Отчёт",
      description: "Вы получите подробный отчёт со всеми выявленными дефектами и рекомендациями",
    },
    {
      icon: "UserCheck",
      title: "Сопровождение",
      description: "При необходимости поможем составить претензию застройщику и проконтролируем устранение дефектов",
    }
  ];

  return (
    <section id="how-it-works" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы работаем</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Процесс приёмки квартиры с нашими специалистами — это просто и профессионально
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={step.icon} size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <Icon name="ArrowRight" className="text-primary" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-primary font-semibold">
            Весь процесс от заявки до получения отчёта занимает 1-2 дня
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
