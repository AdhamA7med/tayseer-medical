
import React from 'react';

const Areas = () => {
  const areas = [
    { name: 'مدينة نصر', icon: 'fas fa-building' },
    { name: 'مصر الجديدة', icon: 'fas fa-city' },
    { name: 'التجمع الأول', icon: 'fas fa-home' },
    { name: 'التجمع الخامس', icon: 'fas fa-building' },
    { name: 'الرحاب', icon: 'fas fa-tree' },
    { name: 'حلمية الزيتون', icon: 'fas fa-mosque' },
    { name: 'ألف مسكن', icon: 'fas fa-home' }
  ];

  return (
    <section id="areas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 arabic-text">
            <span className="text-blue-600">المناطق</span> التي نخدمها
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text leading-relaxed">
            نقدم خدماتنا الطبية في جميع أنحاء القاهرة الكبرى مع ضمان الوصول السريع
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 medical-card-hover border border-gray-100"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                <i className={`${area.icon} text-blue-500 text-2xl`}></i>
              </div>
              <h3 className="font-bold text-gray-800 arabic-text">{area.name}</h3>
            </div>
          ))}
        </div>

        {/* Map & Contact Info */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 text-center">
            <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg">
              <i className="fas fa-map-marked-alt text-blue-500 text-4xl medical-cross"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 arabic-text">
              تغطية شاملة للقاهرة الكبرى
            </h3>
            <p className="text-gray-700 arabic-text leading-relaxed">
              فريقنا الطبي موزع استراتيجياً لضمان الوصول السريع إلى جميع المناطق 
              خلال أقل من 30 دقيقة
            </p>
          </div>

          {/* Service Features */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border-r-4 border-blue-500">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-rocket text-blue-500 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 arabic-text">وصول سريع</h4>
                  <p className="text-gray-600 arabic-text">خلال 30 دقيقة أو أقل</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border-r-4 border-green-500">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-users text-green-500 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 arabic-text">فريق متنوع</h4>
                  <p className="text-gray-600 arabic-text">ممرضين وممرضات</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border-r-4 border-purple-500">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-car text-purple-500 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 arabic-text">معدات متنقلة</h4>
                  <p className="text-gray-600 arabic-text">أحدث الأجهزة الطبية</p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-blue-500 to-green-500 p-6 rounded-2xl text-white text-center">
              <h4 className="text-xl font-bold mb-3 arabic-text">
                لست متأكد من تغطية منطقتك؟
              </h4>
              <p className="mb-4 arabic-text">اتصل بنا الآن وسنؤكد لك التغطية</p>
              <a
                href="tel:01006227863"
                className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2 space-x-reverse"
              >
                <i className="fas fa-phone"></i>
                <span>01006227863</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Areas;
