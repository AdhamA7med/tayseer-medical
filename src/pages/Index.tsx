
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Areas from '../components/Areas';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingContacts from '../components/FloatingContacts';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>التيسير ميديكال - خدمات التمريض المنزلي والرعاية الطبية 24 ساعة في القاهرة</title>
        <meta name="description" content="التيسير ميديكال - أفضل خدمات التمريض المنزلي والرعاية الطبية في القاهرة الكبرى. تمريض منزلي، أشعة منزلية، تحاليل طبية، استشاريين في المنزل، مستلزمات طبية. خدمة 24 ساعة. اتصل الآن: 01006227863" />
        <link rel="canonical" href="https://tayseermedical.com/" />
        <meta property="og:title" content="التيسير ميديكال - خدمات التمريض المنزلي والرعاية الطبية 24 ساعة" />
        <meta property="og:description" content="أفضل خدمات التمريض المنزلي والرعاية الطبية في القاهرة الكبرى. تمريض منزلي، أشعة منزلية، تحاليل طبية، استشاريين في المنزل. خدمة 24 ساعة" />
        <meta property="og:url" content="https://tayseermedical.com/" />
      </Helmet>
      
      <Header />
      <Hero />
      <Services />
      <About />
      <Areas />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingContacts />
    </div>
  );
};

export default Index;
