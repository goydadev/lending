import { useState } from 'react';
import { ChevronDown, ChevronUp, BarChart3, TrendingUp, Database, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [offerExpanded, setOfferExpanded] = useState(false);

  return (
    <div className="size-full overflow-y-auto bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">DataConsult</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Цены</a>
              <a href="#offer" className="text-gray-600 hover:text-blue-600 transition-colors">Оферта</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Связаться
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Аналитика данных для вашего бизнеса
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Превращаем данные в конкурентные преимущества. Помогаем принимать обоснованные решения на основе глубокого анализа.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg">
                  Начать проект
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-lg">
                  Узнать больше
                </button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                alt="Data Analytics"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Комплексные решения для анализа и визуализации данных вашего бизнеса
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Бизнес-аналитика</h3>
              <p className="text-gray-600 mb-6">
                Анализ ключевых метрик, построение дашбордов и отчетов для мониторинга эффективности бизнеса
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Интерактивные дашборды</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Автоматизированная отчетность</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">KPI мониторинг</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Прогнозное моделирование</h3>
              <p className="text-gray-600 mb-6">
                Предсказательная аналитика для планирования и оптимизации бизнес-процессов
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Прогноз продаж</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Анализ трендов</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Оптимизация ресурсов</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Аудит данных</h3>
              <p className="text-gray-600 mb-6">
                Проверка качества данных, выявление проблем и рекомендации по улучшению
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Оценка качества данных</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Оптимизация хранения</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Стратегия работы с данными</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Прайс-лист</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Прозрачные и фиксированные цены на наши услуги
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Базовый</h3>
                <p className="text-gray-600 mb-4">Для малого бизнеса</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-900">150 000</span>
                  <span className="text-xl text-gray-600">₽</span>
                </div>
                <p className="text-gray-500 mt-2">за проект</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Анализ до 3 источников данных</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">1 интерактивный дашборд</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Базовая визуализация</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">1 месяц поддержки</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Срок выполнения: 2-3 недели</span>
                </li>
              </ul>
              
              <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                Выбрать план
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-600 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Популярный
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Профессиональный</h3>
                <p className="text-gray-600 mb-4">Для среднег�� бизнеса</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-900">350 000</span>
                  <span className="text-xl text-gray-600">₽</span>
                </div>
                <p className="text-gray-500 mt-2">за проект</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Анализ до 10 источников данных</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">До 5 интерактивных дашбордов</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Продвинутая визуализация</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Прогнозное моделирование</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">3 месяца поддержки</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Срок выполнения: 4-6 недель</span>
                </li>
              </ul>
              
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Выбрать план
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Корпоративный</h3>
                <p className="text-gray-600 mb-4">Для крупных компаний</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-900">750 000</span>
                  <span className="text-xl text-gray-600">₽</span>
                </div>
                <p className="text-gray-500 mt-2">за проект</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Неограниченные источники</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Неограниченные дашборды</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Кастомизированные решения</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Machine Learning модели</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">6 месяцев поддержки</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Выделенный менеджер проекта</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Срок выполнения: 8-12 недель</span>
                </li>
              </ul>
              
              <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                Связаться с нами
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Нужно индивидуальное решение? Мы готовы обсуди��ь ваш проект.
            </p>
            <button className="text-blue-600 font-semibold hover:underline">
              Запросить индивидуальное предложение →
            </button>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Публичная оферта</h2>
          
          <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden">
            <button
              onClick={() => setOfferExpanded(!offerExpanded)}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Договор публичной оферты
                </h3>
                <p className="text-gray-600">
                  Нажмите, чтобы ознакомиться с условиями предоставления услуг
                </p>
              </div>
              {offerExpanded ? (
                <ChevronUp className="w-6 h-6 text-gray-600 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-600 flex-shrink-0" />
              )}
            </button>

            {offerExpanded && (
              <div className="px-8 pb-8 border-t border-gray-200">
                <div className="prose max-w-none pt-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">1. Общие положения</h4>
                  <p className="text-gray-700 mb-4">
                    Настоящий договор является публичной офертой ООО "ДатаКонсалт" (далее - Исполнитель) 
                    и содержит все существенные условия оказания услуг по аналитике данных.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-900 mb-4">2. Предмет договора</h4>
                  <p className="text-gray-700 mb-4">
                    2.1. Исполнитель обязуется оказать Заказчику услуги по аналитике данных в соответствии 
                    с выбранным тарифным планом, а Заказчик обязуется принять и оплатить эти услуги.
                  </p>
                  <p className="text-gray-700 mb-4">
                    2.2. Состав услуг определяется выбранным тарифным планом: Базовый, Профессиональный 
                    или Корпоративный.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-900 mb-4">3. Стоимость услуг</h4>
                  <p className="text-gray-700 mb-4">
                    3.1. Стоимость услуг указана в разделе "Прайс-лист" и включает НДС 20%.
                  </p>
                  <p className="text-gray-700 mb-4">
                    3.2. Базовый пакет: 150 000 рублей<br />
                    3.3. Профессиональный пакет: 350 000 рублей<br />
                    3.4. Корпоративный пакет: 750 000 рублей
                  </p>

                  <h4 className="text-xl font-semibold text-gray-900 mb-4">4. Порядок оплаты</h4>
                  <p className="text-gray-700 mb-4">
                    4.1. Оплата производится в следующем порядке: 50% предоплата при заключении договора, 
                    50% по завершении работ.
                  </p>
                  <p className="text-gray-700 mb-4">
                    4.2. Оплата осуществляется на расчетный счет Исполнителя по реквизитам, указанным в счете.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-900 mb-4">5. Сроки выполнения</h4>
                  <p className="text-gray-700 mb-4">
                    5.1. Сроки выполнения работ указаны в описании каждого тарифного плана и начинают 
                    исчисляться с момента получения предоплаты и всех необходимых данных от Заказчика.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-900 mb-4">6. Права и обязанности сторон</h4>
                  <p className="text-gray-700 mb-4">
                    6.1. Исполнитель обязуется выполнить работы качественно и в установленные сроки.
                  </p>
                  <p className="text-gray-700 mb-4">
                    6.2. Заказчик обязуется предоставить полный доступ к данным и своевременно отвечать 
                    на запросы Исполнителя.
                  </p>
                  <p className="text-gray-700 mb-4">
                    6.3. Исполнитель гарантирует конфиденциальность полученных данных.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-900 mb-4">7. Ответственность сторон</h4>
                  <p className="text-gray-700 mb-4">
                    7.1. За нарушение сроков выполнения работ Исполнитель выплачивает пени в размере 0,1% 
                    от стоимости услуг за каждый день просрочки.
                  </p>
                  <p className="text-gray-700 mb-4">
                    7.2. За нарушение сроков оплаты Заказчик выплачивает пени в размере 0,1% от суммы 
                    задолженности за каждый день просрочки.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-900 mb-4">8. Порядок приемки работ</h4>
                  <p className="text-gray-700 mb-4">
                    8.1. После завершения работ Исполнитель направляет Заказчику акт выполненных работ.
                  </p>
                  <p className="text-gray-700 mb-4">
                    8.2. Заказчик обязан в течение 5 рабочих дней подписать акт или направить 
                    мотивированный отказ.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-900 mb-4">9. Прочие условия</h4>
                  <p className="text-gray-700 mb-4">
                    9.1. Договор вступает в силу с момента акцепта оферты (оплаты услуг или подписания 
                    договора).
                  </p>
                  <p className="text-gray-700 mb-4">
                    9.2. Все споры решаются путем переговоров, при недостижении согласия - в суде по 
                    месту нахождения Исполнителя.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <BarChart3 className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-semibold">DataConsult</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Профессиональные консалтинговые услуги в области аналитики данных для бизнеса любого масштаба.
              </p>
              <div className="space-y-2 text-gray-400">
                <p>📧 info@dataconsult.ru</p>
                <p>📞 +7 (495) 123-45-67</p>
                <p>📍 Москва, ул. Примерная, д. 123, офис 456</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Быстрые ссылки</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Услуги</a></li>
                <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Цены</a></li>
                <li><a href="#offer" className="hover:text-blue-400 transition-colors">Оферта</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Контакты</a></li>
              </ul>
            </div>

            {/* Working Hours */}
            <div>
              <h4 className="font-semibold text-lg mb-4">График работы</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Пн-Пт: 9:00 - 18:00</li>
                <li>Сб-Вс: Выходной</li>
                <li className="pt-2">
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Написать в Telegram →
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Info */}
          <div className="border-t border-gray-800 pt-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-sm text-gray-400 space-y-2">
                <p className="font-semibold text-gray-300">Юридическая информация:</p>
                <p>ООО "ДатаКонсалт"</p>
                <p>ИНН: 7701234567</p>
                <p>КПП: 770101001</p>
                <p>ОГРН: 1234567890123</p>
                <p>Юридический адрес: 123456, г. Москва, ул. Примерная, д. 123, офис 456</p>
              </div>
              
              <div className="text-sm text-gray-400 space-y-2">
                <p className="font-semibold text-gray-300">Банковские реквизиты:</p>
                <p>Р/с: 40702810400000001234</p>
                <p>К/с: 30101810400000000225</p>
                <p>БИК: 044525225</p>
                <p>Банк: ПАО "Сбербанк России" г. Москва</p>
                <p className="pt-2">
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Политика конфиденциальности
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
              <p>© 2026 DataConsult. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
