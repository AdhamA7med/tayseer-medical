
import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-user-injured',
      title: 'رعاية كبار السن',
      description: 'رعاية شاملة لكبار السن في بيئة مألوفة وآمنة مع متابعة طبية دقيقة',
      color: 'text-blue-500'
    },
    {
      icon: 'fas fa-procedures',
      title: 'رعاية ما بعد العمليات',
      description: 'متابعة طبية متخصصة بعد العمليات الجراحية وإعادة التأهيل',
      color: 'text-green-500'
    },
    {
      icon: 'fas fa-home',
      title: 'جلسات علاج منزلي',
      description: 'علاج طبيعي وجلسات تأهيل في راحة المنزل مع أحدث التقنيات',
      color: 'text-purple-500'
    },
    {
      icon: 'fas fa-ambulance',
      title: 'زيارات تمريض سريعة',
      description: 'خدمات تمريض عاجلة تصل إليك خلال 30 دقيقة أو أقل',
      color: 'text-red-500'
    },
    {
      icon: 'fas fa-heartbeat',
      title: 'متابعة الضغط والسكر',
      description: 'مراقبة مستمرة للعلامات الحيوية وضبط جرعات الأدوية',
      color: 'text-orange-500'
    },
    {
      icon: 'fas fa-syringe',
      title: 'حقن وضمادات',
      description: 'إعطاء الحقن وتغيير الضمادات بأعلى معايير النظافة والأمان',
      color: 'text-teal-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 arabic-text">
            خدماتنا <span className="text-blue-600">الطبية</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text leading-relaxed">
            نقدم مجموعة شاملة من الخدمات الطبية والتمريضية المنزلية بأعلى معايير الجودة والأمان
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 medical-card-hover border border-gray-100"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gray-50 rounded-full flex items-center justify-center">
                  <i className={`${service.icon} ${service.color} text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 arabic-text">
                  {service.title}
                </h3>
                <p className="text-gray-600 arabic-text leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 arabic-text">
              هل تحتاج خدمة طارئة؟
            </h3>
            <p className="text-lg mb-6 arabic-text">
              فريقنا الطبي متاح 24 ساعة للحالات الطارئة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/01145188254"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
              >
                <i className="fab fa-whatsapp text-green-500"></i>
                <span>واتساب: 01145188254</span>
              </a>
              <a
                href="tel:01006227863"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse pulse-medical"
              >
                <i className="fas fa-phone"></i>
                <span>اتصال: 01006227863</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
