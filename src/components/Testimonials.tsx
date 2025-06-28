
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'أحمد محمد',
      location: 'مدينة نصر',
      rating: 5,
      comment: 'خدمة ممتازة جداً، الممرضة وصلت في الوقت المحدد وكانت محترفة ومتفهمة. أنصح بالتعامل مع التيسير ميديكال.',
      service: 'رعاية كبار السن'
    },
    {
      name: 'فاطمة علي',
      location: 'التجمع الخامس',
      rating: 5,
      comment: 'بعد عملية والدتي، احتجنا لمتابعة طبية منزلية. الفريق كان رائع وساعدنا كثيراً في فترة التعافي.',
      service: 'رعاية ما بعد العمليات'
    },
    {
      name: 'محمد حسن',
      location: 'مصر الجديدة',
      rating: 5,
      comment: 'سرعة في الاستجابة وخدمة على أعلى مستوى. الممرض كان مهني جداً ويفهم احتياجات المريض.',
      service: 'زيارات تمريض سريعة'
    },
    {
      name: 'نورا أحمد',
      location: 'الرحاب',
      rating: 5,
      comment: 'أسعار مناسبة وخدمة ممتازة. جدتي بحاجة لمتابعة السكر والضغط، والممرضة تأتي بانتظام وتهتم بكل التفاصيل.',
      service: 'متابعة الضغط والسكر'
    },
    {
      name: 'يوسف عبدالله',
      location: 'التجمع الأول',
      rating: 5,
      comment: 'خدمة 24 ساعة حقيقية. اتصلت في حالة طارئة ووصل الممرض خلال 20 دقيقة. شكراً للفريق المتميز.',
      service: 'خدمة طوارئ'
    },
    {
      name: 'سارة محمود',
      location: 'حلمية الزيتون',
      rating: 5,
      comment: 'والدي يحتاج علاج طبيعي، والممرض المختص يأتي للبيت ويقوم بالجلسات بشكل ممتاز. الله يبارك فيكم.',
      service: 'علاج طبيعي منزلي'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 arabic-text">
            آراء <span className="text-blue-600">عملائنا</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto arabic-text leading-relaxed">
            نفتخر بثقة عملائنا وسعادتهم بخدماتنا الطبية المتميزة
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 medical-card-hover"
            >
              {/* Quote Icon */}
              <div className="text-blue-500 mb-4">
                <i className="fas fa-quote-right text-3xl"></i>
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-6 arabic-text leading-relaxed italic">
                "{testimonial.comment}"
              </p>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-500 text-lg"></i>
                ))}
              </div>

              {/* Customer Info */}
              <div className="text-center border-t pt-4">
                <h4 className="font-bold text-gray-800 mb-1 arabic-text">{testimonial.name}</h4>
                <p className="text-sm text-gray-600 mb-2 arabic-text">{testimonial.location}</p>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-sm text-gray-600 arabic-text">رضا العملاء</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-sm text-gray-600 arabic-text">تقييم إيجابي</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600 arabic-text">دعم العملاء</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="text-3xl font-bold text-red-600 mb-2">5</div>
            <div className="text-sm text-gray-600 arabic-text">نجوم متوسط</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 arabic-text">
              انضم لعائلة <span className="text-blue-600">التيسير ميديكال</span>
            </h3>
            <p className="text-gray-600 mb-6 arabic-text">
              واحصل على أفضل خدمة طبية منزلية في القاهرة
            </p>
            <a
              href="https://wa.me/01145188254"
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2 space-x-reverse"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              <span>احجز استشارتك المجانية</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
