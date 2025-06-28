
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 arabic-text leading-tight">
              <span className="text-blue-600">التيسير ميديكال</span>
              <br />
              <span className="text-2xl md:text-4xl text-green-600">تمريض منزلي محترف</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 arabic-text leading-relaxed">
              رعاية طبية متكاملة في راحة منزلك
              <br />
              <span className="text-blue-600 font-semibold">24 ساعة - 7 أيام</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://wa.me/01145188254"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse shadow-lg hover:shadow-xl"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
                <span>احجز الآن عبر واتساب</span>
              </a>
              
              <a
                href="tel:01006227863"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-phone text-xl"></i>
                <span>اتصل الآن</span>
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <i className="fas fa-clock text-blue-500 text-2xl mb-2"></i>
                <p className="text-sm font-semibold text-gray-700">وصول خلال 30 دقيقة</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <i className="fas fa-user-nurse text-green-500 text-2xl mb-2"></i>
                <p className="text-sm font-semibold text-gray-700">فريق متخصص</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <i className="fas fa-shield-alt text-blue-500 text-2xl mb-2"></i>
                <p className="text-sm font-semibold text-gray-700">خدمة آمنة ومضمونة</p>
              </div>
            </div>
          </div>

          {/* Medical Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center shadow-2xl">
                <i className="fas fa-stethoscope text-white text-8xl medical-cross"></i>
              </div>
              
              {/* Floating Medical Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <i className="fas fa-heartbeat text-red-500 text-2xl"></i>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <i className="fas fa-user-md text-blue-500 text-2xl"></i>
              </div>
              
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg pulse-medical">
                <i className="fas fa-pills text-green-500 text-xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
