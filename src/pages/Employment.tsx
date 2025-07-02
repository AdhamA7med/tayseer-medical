
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContacts from '../components/FloatingContacts';

const Employment = () => {
  const positions = [
    {
      icon: 'fas fa-user-nurse',
      title: 'أخصائي تمريض',
      description: 'نبحث عن أخصائيين تمريض مؤهلين للعمل في الخدمات المنزلية',
      requirements: ['خبرة في العمل المنزلي', 'مهارات التواصل الجيدة', 'المرونة في العمل']
    },
    {
      icon: 'fas fa-user-md',
      title: 'فني تمريض',
      description: 'فرصة عمل لفنيي التمريض ذوي الخبرة والكفاءة',
      requirements: ['شهادة فني تمريض معتمدة', 'خبرة في العمل المنزلي', 'الالتزام بالمواعيد']
    },
    {
      icon: 'fas fa-hands-helping',
      title: 'مساعد تمريض',
      description: 'انضم لفريقنا كمساعد تمريض لتقديم أفضل الخدمات',
      requirements: ['دورات في الإسعافات الأولية', 'القدرة على التعامل مع المرضى', 'الصبر والتفهم']
    },
    {
      icon: 'fas fa-user-friends',
      title: 'جليسة/جالسة',
      description: 'مطلوب جليسات لرعاية كبار السن والمرضى',
      requirements: ['خبرة في رعاية كبار السن', 'الصبر والحنان', 'المسؤولية والأمانة']
    }
  ];

  const documents = [
    { icon: 'fas fa-id-card', title: 'صورة البطاقة الشخصية', required: true },
    { icon: 'fas fa-camera', title: 'صورة شخصية بالموبايل', required: true },
    { icon: 'fas fa-certificate', title: 'صورة مزاولة المهنة', required: true },
    { icon: 'fas fa-id-badge', title: 'صورة كارنيه النقابة', required: true },
    { icon: 'fas fa-graduation-cap', title: 'صورة شهادة التخرج', required: true },
    { icon: 'fas fa-briefcase', title: 'صورة شهادة الخبرة السابقة', required: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 arabic-text">
              <span className="text-blue-600">انضم لفريقنا</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text leading-relaxed">
              نبحث عن متخصصين في المجال الطبي للانضمام لفريق التيسير ميديكال
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-6 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Available Positions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-text">
              الوظائف <span className="text-blue-600">المتاحة</span>
            </h2>
            <p className="text-lg text-gray-600 arabic-text">
              اختر الوظيفة المناسبة لخبرتك ومؤهلاتك
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 medical-card-hover">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <i className={`${position.icon} text-blue-600 text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 arabic-text">
                    {position.title}
                  </h3>
                  <p className="text-gray-600 arabic-text leading-relaxed mb-4">
                    {position.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-800 arabic-text">المتطلبات:</h4>
                  {position.requirements.map((req, reqIndex) => (
                    <div key={reqIndex} className="flex items-center space-x-2 space-x-reverse">
                      <i className="fas fa-check-circle text-green-500 text-sm"></i>
                      <span className="text-gray-700 arabic-text text-sm">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-text">
              الأوراق <span className="text-green-600">المطلوبة</span>
            </h2>
            <p className="text-lg text-gray-600 arabic-text">
              يرجى تجهيز الأوراق التالية للتقديم
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <i className={`${doc.icon} text-blue-600 text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 arabic-text">
                  {doc.title}
                </h3>
                <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                  doc.required 
                    ? 'bg-red-100 text-red-600' 
                    : 'bg-green-100 text-green-600'
                }`}>
                  {doc.required ? 'مطلوب' : 'اختياري'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-text">
              مميزات <span className="text-blue-600">العمل معنا</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100">
              <i className="fas fa-money-bill-wave text-green-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-3 arabic-text">راتب مجزي</h3>
              <p className="text-gray-600 arabic-text">رواتب تنافسية مع مكافآت الأداء</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100">
              <i className="fas fa-clock text-blue-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-3 arabic-text">مرونة في العمل</h3>
              <p className="text-gray-600 arabic-text">ساعات عمل مرنة تناسب ظروفك</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100">
              <i className="fas fa-graduation-cap text-purple-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800 mb-3 arabic-text">تطوير مهني</h3>
              <p className="text-gray-600 arabic-text">دورات تدريبية وتطوير المهارات</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 arabic-text">
              جاهز للانضمام لفريقنا؟
            </h3>
            <p className="text-lg mb-6 arabic-text">
              تواصل معنا الآن وأرسل أوراقك للبدء في رحلتك المهنية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/01080413287"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
              >
                <i className="fab fa-whatsapp text-green-500"></i>
                <span>تقديم عبر واتساب: 01080413287</span>
              </a>
              <a
                href="tel:01080413287"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse pulse-medical"
              >
                <i className="fas fa-phone"></i>
                <span>اتصال: 01080413287</span>
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

export default Employment;
