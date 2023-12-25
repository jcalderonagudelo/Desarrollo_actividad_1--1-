import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <p>© {new Date().getFullYear()} Sitio Web por Juan Calderón. Todos los derechos reservados.</p>
    </footer>
  );
};

const footerStyles = {
  backgroundColor: '#222222',
  padding: '10px',
  textAlign: 'center',
  position: 'relative',
  left: '0',
  bottom: '0',
  fontSize: '18px',
  
};

export default Footer;
