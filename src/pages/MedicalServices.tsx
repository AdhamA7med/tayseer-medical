import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContacts from '../components/FloatingContacts';


// استيراد الصور من مجلد src/images
import internalMedicine from '../images/استشاري باطني.jpg';
import physiotherapy from '../images/علاج طبيعي.jpg';
import neurology from '../images/مخ وأعصاب.jpg';
import chest from '../images/دكتور امراض الصدر.jpg';
import orthopedics from '../images/دكتور عظام.jpg';
import xray from '../images/أشعة عادية ديجيتال.jpg';
import ultrasound from '../images/السونار.png';
import doppler from '../images/دوبلر الأوردة والشرايين.jpg';
import echo from '../images/الإيكو على القلب.jpg';
import ecg from '../images/رسم القلب.jpg';
import eeg from '../images/رسم المخ.jpg';
import nerve from '../images/رسم العصب والعضلات.webp';
import holter from '../images/جهاز الهولتر.jpg';


const MedicalServices = () => {
  const consultationServices = [
    {
      icon: 'fas fa-stethoscope',
      title: 'استشاري باطني',
      description: 'كشف وتشخيص أمراض الباطنة والجهاز الهضمي في منزلك',
      image: internalMedicine,
    },
    {
      icon: 'fas fa-user-injured',
      title: 'علاج طبيعي',
      description: 'جلسات علاج طبيعي وإعادة تأهيل في راحة منزلك',
      image: physiotherapy,
    },
    {
      icon: 'fas fa-brain',
      title: 'مخ وأعصاب',
      description: 'استشاري مخ وأعصاب لعلاج اضطرابات الجهاز العصبي',
      image: neurology,
    },
    {
      icon: 'fas fa-lungs',
      title: 'صدر',
      description: 'استشاري أمراض الصدر والجهاز التنفسي',
      image: chest,
    },
    {
      icon: 'fas fa-bone',
      title: 'عظام',
      description: 'استشاري جراحة العظام وعلاج إصابات المفاصل',
      image: orthopedics,
    }
  ];

  const radiologyServices = [
    {
      icon: 'fas fa-x-ray',
      title: 'أشعة عادية ديجيتال',
      description: 'أشعة على جميع أجزاء الجسم - للكسور ومتابعة العمليات وأشعة الصدر',
      image: xray,
    },
    {
      icon: 'fas fa-baby',
      title: 'السونار',
      description: 'أشعة السونار على البطن والحوض في المنزل',
      image: ultrasound,
    },
    {
      icon: 'fas fa-heartbeat',
      title: 'دوبلر الأوردة والشرايين',
      description: 'فحص الدوبلر على الأوردة والشرايين في المنزل',
      image: doppler,
    },
    {
      icon: 'fas fa-heart',
      title: 'الإيكو على القلب',
      description: 'فحص الإيكو على القلب في المنزل مع التقرير الفوري',
      image: echo,
    },
    {
      icon: 'fas fa-chart-line',
      title: 'رسم القلب',
      description: 'رسم القلب الكهربائي في المنزل',
      image: ecg,
    },
    {
      icon: 'fas fa-brain',
      title: 'رسم المخ',
      description: 'رسم المخ للأطفال والكبار في المنزل',
      image: eeg,
    },
    {
      icon: 'fas fa-dumbbell',
      title: 'رسم العصب والعضلات',
      description: 'فحص رسم العصب والعضلات في المنزل',
      image: nerve,
    },
    {
      icon: 'fas fa-clock',
      title: 'جهاز الهولتر',
      description: 'جهاز الهولتر الخاص بالقلب - 24 ساعة و 48 ساعة',
      image: holter,
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>الخدمات الطبية المنزلية - التيسير ميديكال | أطباء وأشعة في المنزل</title>
        <meta name="description" content="خدمات طبية منزلية متكاملة: استشاريين في جميع التخصصات، أشعة منزلية، تحاليل طبية، رسم قلب ومخ، سونار وإيكو في المنزل. اتصل الآن 01006227863" />
        <meta name="keywords" content="استشاري منزلي, أشعة منزلية, سونار منزلي, إيكو منزلي, رسم قلب منزلي, رسم مخ منزلي, دوبلر منزلي, هولتر منزلي, تحاليل طبية منزلية, استشاري باطني منزلي, علاج طبيعي منزلي, استشاري مخ وأعصاب منزلي, استشاري صدر منزلي, استشاري عظام منزلي" />
        <link rel="canonical" href="https://tayseermedical.com/medical-services" />
        <meta property="og:title" content="الخدمات الطبية المنزلية - التيسير ميديكال" />
        <meta property="og:description" content="خدمات طبية منزلية متكاملة: استشاريين في جميع التخصصات، أشعة منزلية، تحاليل طبية في المنزل" />
        <meta property="og:url" content="https://tayseermedical.com/medical-services" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 arabic-text">
              <span className="text-blue-600">الخدمات الطبية</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text leading-relaxed">
              نوفر لك أفضل الخدمات الطبية في منزلك مع نخبة من الأطباء المتخصصين
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-6 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Home Consultation Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-text">
              خدمة <span className="text-blue-600">الكشف المنزلي</span>
            </h2>
            <p className="text-lg text-gray-600 arabic-text">
              استشاريون متخصصون يأتون إليك في المنزل
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultationServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden medical-card-hover">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <i className={`${service.icon} text-blue-600 text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 arabic-text">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 arabic-text leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Radiology Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 arabic-text">
              مركز <span className="text-green-600">الأشعة المتنقل</span>
            </h2>
            <p className="text-lg text-gray-600 arabic-text">
              أحدث أجهزة الأشعة في منزلك مع استلام النتائج فوريًا
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {radiologyServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden medical-card-hover">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <i className={`${service.icon} text-green-600 text-lg`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 arabic-text">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 arabic-text text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 arabic-text">
              مميزات خدماتنا الطبية
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <i className="fas fa-medal text-4xl mb-4"></i>
                <h4 className="text-xl font-bold mb-2">نخبة من الأطباء</h4>
                <p className="arabic-text">أطباء متخصصون وذوو خبرة عالية</p>
              </div>
              <div className="text-center">
                <i className="fas fa-home text-4xl mb-4"></i>
                <h4 className="text-xl font-bold mb-2">في راحة منزلك</h4>
                <p className="arabic-text">نأتي إليك أينما كنت</p>
              </div>
              <div className="text-center">
                <i className="fas fa-clock text-4xl mb-4"></i>
                <h4 className="text-xl font-bold mb-2">استلام فوري</h4>
                <p className="arabic-text">النتائج والتقارير في نفس الوقت</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContacts />
    </div>
  );
};

export default MedicalServices;
