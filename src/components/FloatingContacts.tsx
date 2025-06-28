
import React from 'react';

const FloatingContacts = () => {
  return (
    <div className="floating-contacts">
      <a
        href="https://wa.me/01145188254"
        className="floating-btn whatsapp-btn"
        title="واتساب: 01145188254"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      
      <a
        href="tel:01006227863"
        className="floating-btn phone-btn"
        title="اتصال: 01006227863"
      >
        <i className="fas fa-phone"></i>
      </a>
    </div>
  );
};

export default FloatingContacts;
