
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'الرئيسية', href: '/' },
    { name: 'الخدمات الطبية', href: '/medical-services' },
    { name: 'المستلزمات الطبية', href: '/medical-supplies' },
    { name: 'التوظيف', href: '/employment' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // إذا كنا في الصفحة الرئيسية، انتقل مباشرة لقسم الاتصال
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // إذا كنا في صفحة أخرى، انتقل للصفحة الرئيسية ثم لقسم الاتصال
      navigate('/', { replace: true });
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="bg-white shadow-lg fixed top-0 right-0 left-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              <i className="fas fa-heartbeat text-white text-lg"></i>
            </div>
            <div className="text-xl font-bold text-gray-800">
              <span className="text-blue-600">التيسير</span>
              <span className="text-green-600 mr-1">ميديكال</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            {menuItems.map((item) => (
              item.href === '#contact' ? (
                <button
                  key={item.name}
                  onClick={handleContactClick}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium arabic-text"
                >
                  {item.name}
                </button>
              ) : item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={scrollToTop}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium arabic-text"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium arabic-text"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* Emergency Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:01006227863"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2 space-x-reverse pulse-medical"
            >
              <i className="fas fa-phone-alt"></i>
              <span className="font-medium">طوارئ 24/7</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                item.href === '#contact' ? (
                  <button
                    key={item.name}
                    onClick={(e) => {
                      handleContactClick(e);
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium arabic-text py-2 text-right"
                  >
                    {item.name}
                  </button>
                ) : item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => {
                      setIsMenuOpen(false);
                      scrollToTop();
                    }}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium arabic-text py-2"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium arabic-text py-2"
                  >
                    {item.name}
                  </a>
                )
              ))}
              <a
                href="tel:01006227863"
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse mt-4"
              >
                <i className="fas fa-phone-alt"></i>
                <span className="font-medium">طوارئ 24/7</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
