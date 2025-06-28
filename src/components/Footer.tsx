
import React from 'react';

const Footer = () => {
  const quickLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'عن التيسير', href: '#about' },
    { name: 'المناطق', href: '#areas' }
  ];

  const services = [
    'رعاية كبار السن',
    'رعاية ما بعد العمليات',
    'جلسات علاج منزلي',
    'زيارات تمريض سريعة'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <i className="fas fa-heartbeat text-white text-xl"></i>
              </div>
              <div className="text-2xl font-bold">
                <span className="text-blue-400">التيسير</span>
                <span className="text-green-400 mr-1">ميديكال</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 arabic-text leading-relaxed max-w-md">
              شركة رائدة في مجال الخدمات الطبية المنزلية، نسعى لتقديم أفضل رعاية طبية 
              ممكنة في راحة منزلكم مع فريق متخصص ومعتمد.
            </p>

            <div className="flex space-x-4 space-x-reverse">
              <a
                href="https://wa.me/01145188254"
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="tel:01006227863"
                className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <i className="fas fa-phone"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 arabic-text text-blue-400">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 arabic-text"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 arabic-text text-green-400">خدماتنا</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 arabic-text text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-right">
            <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse">
              <i className="fas fa-phone text-blue-400"></i>
              <div>
                <p className="text-sm text-gray-400">اتصل بنا</p>
                <p className="font-semibold">01006227863</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse">
              <i className="fab fa-whatsapp text-green-400"></i>
              <div>
                <p className="text-sm text-gray-400">واتساب</p>
                <p className="font-semibold">01145188254</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse">
              <i className="fas fa-map-marker-alt text-red-400"></i>
              <div>
                <p className="text-sm text-gray-400">نخدم</p>
                <p className="font-semibold arabic-text">القاهرة الكبرى</p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="mt-8 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-6 text-center">
          <div className="flex items-center justify-center mb-2">
            <i className="fas fa-ambulance text-2xl mr-3 animate-pulse"></i>
            <h4 className="text-xl font-bold arabic-text">خدمة طوارئ 24/7</h4>
          </div>
          <p className="arabic-text">نحن متاحون في أي وقت لخدمتكم في الحالات الطارئة</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-right">
            <p className="text-gray-400 text-sm arabic-text">
              © 2024 التيسير ميديكال. جميع الحقوق محفوظة.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              تم تطوير الموقع بواسطة{' '}
              <a
                href="https://wa.me/01153903786"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-semibold"
              >
                أدهم أحمد
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
