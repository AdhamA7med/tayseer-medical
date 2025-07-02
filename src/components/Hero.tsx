
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center min-h-[80vh]">
          {/* Centered Content */}
          <div className="text-center max-w-4xl">
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
