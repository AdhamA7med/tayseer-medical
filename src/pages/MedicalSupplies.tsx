import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContacts from '../components/FloatingContacts';

// استيراد الصور من مجلد src/images
import oxygenDevice from '../images/جهاز أكسجين.webp';
import nebulizer from '../images/جهاز نوبليزر.webp';
import vacuumDevice from '../images/جهاز فاكيم.png';
import airMattress from '../images/جهاز فاكيم.png';
import bloodPressure from '../images/جهاز قياس الضغط.webp';
import glucoseMeter from '../images/جهاز قياس السكر.webp';

const MedicalSupplies = () => {
  const supplies = [
    {
      icon: 'fas fa-lungs',
      title: 'جهاز أكسجين',
      description: 'أجهزة أكسجين محمولة ومنزلية بأعلى جودة وأمان تام',
      image: oxygenDevice,
      features: ['متاح 24 ساعة', 'صيانة دورية', 'تدريب على الاستخدام'],
    },
    {
      icon: 'fas fa-wind',
      title: 'جهاز نوبليزر',
      description: 'أجهزة استنشاق حديثة لعلاج أمراض الجهاز التنفسي',
      image: nebulizer,
      features: ['سهل الاستخدام', 'فعال وآمن', 'متاح للأطفال والكبار'],
    },
    {
      icon: 'fas fa-pump-medical',
      title: 'جهاز فاكيم',
      description: 'أجهزة شفط للإفرازات والسوائل طبيًا',
      image: vacuumDevice,
      features: ['قوة شفط عالية', 'هادئ التشغيل', 'سهل التنظيف'],
    },
    {
      icon: 'fas fa-bed',
      title: 'مرتبة هوائية',
      description: 'مراتب هوائية طبية لمنع قرح الفراش للمرضى طريحي الفراش',
      image: airMattress,
      features: ['تغيير ضغط تلقائي', 'مريحة وآمنة', 'سهلة التركيب'],
    },
    {
      icon: 'fas fa-heartbeat',
      title: 'جهاز قياس الضغط',
      description: 'أجهزة قياس ضغط الدم الرقمية الدقيقة',
      image: bloodPressure,
      features: ['قراءات دقيقة', 'شاشة كبيرة واضحة', 'ذاكرة للقراءات'],
    },
    {
      icon: 'fas fa-tint',
      title: 'جهاز قياس السكر',
      description: 'أجهزة قياس مستوى الجلوكوز في الدم',
      image: glucoseMeter,
      features: ['نتائج سريعة', 'استهلاك دم قليل', 'شرائح متوفرة'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 arabic-text">
              <span className="text-blue-600">المستلزمات الطبية</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text leading-relaxed">
              إيجار الأجهزة الطبية بأفضل الأسعار وأعلى جودة مضمونة
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-6 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Supplies Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supplies.map((supply, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden medical-card-hover border border-gray-100">
                <img 
                  src={supply.image} 
                  alt={supply.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <i className={`${supply.icon} text-blue-600 text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 arabic-text text-center">
                    {supply.title}
                  </h3>
                  <p className="text-gray-600 arabic-text leading-relaxed mb-4 text-center">
                    {supply.description}
                  </p>
                  <div className="space-y-2">
                    {supply.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 space-x-reverse">
                        <i className="fas fa-check-circle text-green-500 text-sm"></i>
                        <span className="text-gray-700 arabic-text text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-text">
              لماذا <span className="text-blue-600">مركز رويال؟</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <i className="fas fa-dollar-sign text-green-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-3 arabic-text">أسعار مناسبة</h3>
              <p className="text-gray-600 arabic-text">أفضل الأسعار في السوق مع خدمة ممتازة</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <i className="fas fa-shield-alt text-blue-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-3 arabic-text">جودة مضمونة</h3>
              <p className="text-gray-600 arabic-text">جميع أجهزتنا معتمدة ومفحوصة طبيًا</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <i className="fas fa-tools text-purple-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-3 arabic-text">صيانة دورية</h3>
              <p className="text-gray-600 arabic-text">خدمة صيانة وتنظيف دورية مجانية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 arabic-text">
              احجز جهازك الآن
            </h3>
            <p className="text-lg mb-6 arabic-text">
              تواصل معنا للحصول على أفضل الأجهزة الطبية بأسعار مناسبة
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
      </section>

      <Footer />
      <FloatingContacts />
    </div>
  );
};

export default MedicalSupplies;
