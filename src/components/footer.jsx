import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">© {new Date().getFullYear()} Sitio Web por Juan Calderón. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
