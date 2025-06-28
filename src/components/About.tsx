
import React from 'react';

const About = () => {
  const features = [
    {
      icon: 'fas fa-certificate',
      title: 'فريق معتمد',
      description: 'جميع أعضاء فريقنا حاصلون على شهادات طبية معتمدة'
    },
    {
      icon: 'fas fa-clock',
      title: '24/7 متاحون',
      description: 'خدماتنا متوفرة على مدار الساعة طوال أيام الأسبوع'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'أمان وسرية',
      description: 'نحافظ على خصوصية المرضى وسرية المعلومات الطبية'
    },
    {
      icon: 'fas fa-money-bill-wave',
      title: 'أسعار مناسبة',
      description: 'خدمات طبية عالية الجودة بأسعار في متناول الجميع'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 arabic-text">
              عن <span className="text-blue-600">التيسير ميديكال</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 arabic-text leading-relaxed">
              التيسير ميديكال هي شركة رائدة في مجال الخدمات الطبية المنزلية، نسعى لتقديم 
              أفضل رعاية طبية ممكنة في راحة منزلكم. فريقنا المتخصص من الأطباء والممرضين 
              يضمن حصولكم على خدمة طبية متميزة تلبي احتياجاتكم الصحية.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    <i className={`${feature.icon} text-blue-500 text-lg`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 arabic-text">{feature.title}</h4>
                    <p className="text-sm text-gray-600 arabic-text leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 arabic-text flex items-center">
                <i className="fas fa-quote-right text-blue-500 ml-3"></i>
                رسالتنا
              </h3>
              <p className="text-gray-700 arabic-text leading-relaxed italic">
                "راحتك... أمانك... شغلنا - نؤمن بأن كل مريض يستحق الحصول على أفضل رعاية 
                طبية في بيئة مريحة وآمنة. هدفنا هو تحسين جودة الحياة لمرضانا وأسرهم."
              </p>
            </div>
          </div>

          {/* Medical Stats & Visual */}
          <div className="text-center">
            <div className="bg-white rounded-3xl p-8 shadow-2xl mb-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-sm text-gray-600 arabic-text">سنوات خبرة</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
                  <div className="text-sm text-gray-600 arabic-text">مريض سعيد</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600 arabic-text">ممرض محترف</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600 arabic-text">خدمة متواصلة</div>
                </div>
              </div>
            </div>

            {/* Medical Icons Circle */}
            <div className="relative w-60 h-60 mx-auto">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center shadow-2xl">
                <i className="fas fa-hospital text-white text-6xl"></i>
              </div>
              
              {/* Orbiting Icons */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <i className="fas fa-stethoscope text-blue-500"></i>
              </div>
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <i className="fas fa-thermometer text-red-500"></i>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg pulse-medical">
                <i className="fas fa-syringe text-green-500"></i>
              </div>
              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <i className="fas fa-pills text-purple-500"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
