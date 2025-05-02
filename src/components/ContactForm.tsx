
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Сбросить статус успешной отправки через 5 секунд
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Оставьте заявку, и мы перезвоним вам в течение 15 минут для консультации и записи на приемку
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="border-none shadow-lg h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-primary/10 rounded-full">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Адрес</h4>
                      <p className="text-gray-600">г. Москва, ул. Строителей, 15, офис 304</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-primary/10 rounded-full">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Телефон</h4>
                      <p className="text-gray-600">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-primary/10 rounded-full">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-600">info@list.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-primary/10 rounded-full">
                      <Icon name="Clock" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Часы работы</h4>
                      <p className="text-gray-600">Пн-Пт: 9:00-20:00, Сб: 10:00-18:00</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Мы в социальных сетях</h4>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="Instagram" size={18} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="Facebook" size={18} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="Telegram" size={18} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="Youtube" size={18} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="mb-4 flex justify-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <Icon name="Check" className="text-green-600" size={32} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Заявка отправлена!</h3>
                    <p className="text-gray-600">
                      Спасибо за обращение. Наш специалист свяжется с вами в ближайшее время.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-bold mb-6">Отправить сообщение</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Ваше имя *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Введите ваше имя"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                          Телефон *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+7 (___) ___-__-__"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Введите ваш email"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                          Сообщение
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Опишите вашу ситуацию или вопрос"
                          rows={4}
                        />
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full py-6" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Icon name="Loader2" className="mr-2 animate-spin" />
                          Отправка...
                        </>
                      ) : (
                        "Отправить заявку"
                      )}
                    </Button>
                    
                    <p className="text-xs text-gray-500 mt-4">
                      Нажимая кнопку "Отправить заявку", вы соглашаетесь с условиями обработки персональных данных
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
