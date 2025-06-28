
import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: 'fas fa-phone',
      title: 'اتصل بنا',
      info: '01006227863',
      description: 'متاح 24 ساعة للطوارئ',
      action: 'tel:01006227863',
      color: 'text-blue-500'
    },
    {
      icon: 'fab fa-whatsapp',
      title: 'واتساب',
      info: '01145188254',
      description: 'للحجز والاستفسارات',
      action: 'https://wa.me/01145188254',
      color: 'text-green-500'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'نخدم المناطق',
      info: 'القاهرة الكبرى',
      description: 'جميع المناطق المذكورة',
      action: '#areas',
      color: 'text-red-500'
    },
    {
      icon: 'fas fa-clock',
      title: 'ساعات العمل',
      info: '24/7',
      description: 'متاحون طوال الوقت',
      action: '#',
      color: 'text-purple-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 arabic-text">
            <span className="text-blue-600">اتصل</span> بنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text leading-relaxed">
            نحن هنا لخدمتك في أي وقت. تواصل معنا الآن للحصول على أفضل رعاية طبية منزلية
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.action}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 medical-card-hover text-center group border border-gray-100"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <i className={`${contact.icon} ${contact.color} text-3xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 arabic-text">{contact.title}</h3>
              <p className="text-lg font-semibold text-gray-700 mb-2 arabic-text">{contact.info}</p>
              <p className="text-sm text-gray-600 arabic-text">{contact.description}</p>
            </a>
          ))}
        </div>

        {/* Emergency Section */}
        <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-8 text-white text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <i className="fas fa-exclamation-triangle text-4xl mr-4 animate-pulse"></i>
            <h3 className="text-3xl font-bold arabic-text">حالة طارئة؟</h3>
          </div>
          <p className="text-xl mb-6 arabic-text">
            فريقنا الطبي متاح على مدار الساعة للحالات الطارئة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:01006227863"
              className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse pulse-medical"
            >
              <i className="fas fa-phone-alt"></i>
              <span>اتصل فوراً: 01006227863</span>
            </a>
            <a
              href="https://wa.me/01145188254"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
            >
              <i className="fab fa-whatsapp"></i>
              <span>واتساب: 01145188254</span>
            </a>
          </div>
        </div>

        {/* Service Areas Map */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6 arabic-text">
              مناطق <span className="text-blue-600">الخدمة</span>
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                'مدينة نصر',
                'مصر الجديدة', 
                'التجمع الأول',
                'التجمع الخامس',
                'الرحاب',
                'حلمية الزيتون',
                'ألف مسكن',
                'والمزيد...'
              ].map((area, index) => (
                <div key={index} className="flex items-center space-x-2 space-x-reverse">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span className="text-gray-700 arabic-text">{area}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 arabic-text leading-relaxed">
              إذا لم تجد منطقتك في القائمة، اتصل بنا وسنؤكد لك إمكانية تقديم الخدمة.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-12">
              <div className="w-40 h-40 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <i className="fas fa-hospital text-blue-500 text-6xl medical-cross"></i>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4 arabic-text">
                خدمة متميزة في منزلك
              </h4>
              <p className="text-gray-700 arabic-text">
                فريق طبي محترف يصل إليك في أسرع وقت ممكن
              </p>
            </div>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 arabic-text">
              هل لديك استفسار؟
            </h3>
            <p className="text-lg mb-6 arabic-text">
              تواصل معنا الآن واحصل على استشارة مجانية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/01145188254?text=مرحباً، أحتاج استشارة طبية مجانية"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
              >
                <i className="fab fa-whatsapp text-green-500"></i>
                <span>استشارة مجانية عبر واتساب</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
