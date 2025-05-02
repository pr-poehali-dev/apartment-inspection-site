
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Reviews = () => {
  const allReviews = [
    {
      name: "Анна Иванова",
      date: "15.03.2025",
      rating: 5,
      text: "Обратилась в компанию для приемки новой квартиры в ЖК 'Мечта'. Эксперт обнаружил более 20 дефектов, которые я бы сама никогда не заметила! Застройщик признал все недостатки и устранил их без проблем. Спасибо за профессионализм!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Сергей Петров",
      date: "02.04.2025",
      rating: 5,
      text: "Очень доволен работой специалистов. Тщательная проверка выявила проблемы с электропроводкой и вентиляцией. Без их помощи я бы въехал в потенциально опасную квартиру. Рекомендую всем, кто принимает недвижимость от застройщика.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Елена Смирнова",
      date: "27.03.2025",
      rating: 4,
      text: "Хорошая компания, специалист приехал вовремя, провел тщательную проверку квартиры. Единственное, хотелось бы получить более подробные рекомендации по устранению некоторых дефектов, но в целом я довольна качеством услуги.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Дмитрий Козлов",
      date: "10.04.2025",
      rating: 5,
      text: "Великолепный сервис! Эксперт был очень внимателен к деталям, обнаружил кривизну стен и проблемы с окнами, которые совершенно не бросались в глаза. Благодаря подробному отчету застройщик без вопросов все исправил.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Ольга Николаева",
      date: "05.04.2025",
      rating: 5,
      text: "Приемка прошла быстро и качественно. Получила исчерпывающий отчет с фотографиями всех недочетов. Специалист дал ценные советы по взаимодействию с застройщиком. Результат — все дефекты устранены без лишних споров.",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Алексей Морозов",
      date: "22.03.2025",
      rating: 5,
      text: "Отличная компания! Профессиональный подход, внимание к деталям. Благодаря их помощи удалось выявить и исправить серьезные недостатки в новой квартире до подписания акта приема-передачи. Цена полностью соответствует качеству услуг.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  ];

  const [visibleReviews, setVisibleReviews] = useState(3);

  const handleShowMore = () => {
    setVisibleReviews(allReviews.length);
  };

  return (
    <section id="reviews" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Более 500 клиентов доверили нам приемку своих квартир. Вот что они говорят о нашей работе
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allReviews.slice(0, visibleReviews).map((review, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-gray-500 text-sm">{review.date}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon 
                      key={i}
                      name="Star" 
                      className={i < review.rating ? "text-yellow-400" : "text-gray-300"} 
                      size={18}
                    />
                  ))}
                </div>
                
                <p className="text-gray-700">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {visibleReviews < allReviews.length && (
          <div className="text-center mt-10">
            <Button 
              variant="outline" 
              onClick={handleShowMore}
              className="px-6"
            >
              Показать больше отзывов
              <Icon name="ChevronDown" className="ml-2" size={16} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
