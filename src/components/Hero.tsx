
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Профессиональная приемка квартир от застройщика
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Защитим ваши интересы и проверим качество квартиры на соответствие строительным нормам. Поможем выявить дефекты и добиться их устранения.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Icon name="ClipboardCheck" className="mr-2" size={20} />
                Заказать приемку
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Icon name="Phone" className="mr-2" size={20} />
                Консультация
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -z-10 w-[80%] h-[80%] bg-blue-200/30 rounded-full blur-3xl -top-10 -left-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
                alt="Приемка квартиры" 
                className="rounded-lg shadow-xl w-full max-w-md object-cover hover-scale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
