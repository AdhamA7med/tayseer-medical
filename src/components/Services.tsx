
import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-user-md',
      title: 'خدمة الكشف المنزلي',
      description: 'استشاري باطني، علاج طبيعي، مخ وأعصاب، صدر، عظام - كشف في منزلك',
      color: 'text-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      icon: 'fas fa-user-nurse',
      title: 'خدمات التمريض المنزلي',
      description: 'رعاية كبار السن، رعاية ما بعد العمليات، متابعة الضغط والسكر، زيارات تمريضية سريعة',
      color: 'text-green-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
      borderColor: 'border-green-200'
    },
    {
      icon: 'fas fa-home',
      title: 'جلسات علاج منزلي',
      description: 'علاج طبيعي وجلسات تأهيل في راحة المنزل مع أحدث التقنيات',
      color: 'text-purple-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
      borderColor: 'border-purple-200'
    },
    {
      icon: 'fas fa-vial',
      title: 'التحاليل الطبية',
      description: 'نقدم جميع التحاليل الطبية في المنزل مع النتائج السريعة والدقيقة',
      color: 'text-teal-600',
      bgColor: 'bg-gradient-to-br from-teal-50 to-teal-100',
      borderColor: 'border-teal-200'
    },
    {
      icon: 'fas fa-x-ray',
      title: 'الأشعة في بيتك',
      description: 'أشعة عادية، سونار، دوبلر، إيكو القلب، رسم القلب والمخ، هولتر',
      color: 'text-cyan-600',
      bgColor: 'bg-gradient-to-br from-cyan-50 to-cyan-100',
      borderColor: 'border-cyan-200'
    },
    {
      icon: 'fas fa-stethoscope',
      title: 'المستلزمات الطبية',
      description: 'إيجار أجهزة طبية - أكسجين، نوبليزر، فاكيم، مرتبة هوائية وغيرها',
      color: 'text-orange-600',
      bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100',
      borderColor: 'border-orange-200'
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
              className={`${service.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 medical-card-hover border-2 ${service.borderColor}`}
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-md">
                  <i className={`${service.icon} ${service.color} text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 arabic-text">
                  {service.title}
                </h3>
                <p className="text-gray-700 arabic-text leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Service Pages Links */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-text">
              تفاصيل أكثر عن <span className="text-blue-600">خدماتنا</span>
            </h3>
            <p className="text-lg text-gray-600 arabic-text">
              اكتشف المزيد عن خدماتنا المتخصصة واحصل على التفاصيل الكاملة
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-blue-200">
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                <i className="fas fa-stethoscope text-blue-600 text-3xl"></i>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4 arabic-text">الخدمات الطبية</h4>
              <p className="text-gray-700 arabic-text mb-6 leading-relaxed">
                استشاريون متخصصون في جميع التخصصات يأتون إليك في المنزل مع أحدث أجهزة الأشعة والتحاليل
              </p>
              <a
                href="/medical-services"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 space-x-2 space-x-reverse"
              >
                <span>تفاصيل الخدمات الطبية</span>
                <i className="fas fa-arrow-left"></i>
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-green-200">
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                <i className="fas fa-boxes text-green-600 text-3xl"></i>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4 arabic-text">المستلزمات الطبية</h4>
              <p className="text-gray-700 arabic-text mb-6 leading-relaxed">
                إيجار الأجهزة الطبية بأفضل الأسعار مع الصيانة والدعم الفني المستمر
              </p>
              <a
                href="/medical-supplies"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 space-x-2 space-x-reverse"
              >
                <span>تفاصيل المستلزمات</span>
                <i className="fas fa-arrow-left"></i>
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-purple-200">
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                <i className="fas fa-users text-purple-600 text-3xl"></i>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4 arabic-text">التوظيف</h4>
              <p className="text-gray-700 arabic-text mb-6 leading-relaxed">
                انضم لفريقنا الطبي المحترف واحصل على فرصة عمل مميزة في مجال الرعاية الصحية
              </p>
              <a
                href="/employment"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 space-x-2 space-x-reverse"
              >
                <span>فرص التوظيف</span>
                <i className="fas fa-arrow-left"></i>
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white text-center">
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
