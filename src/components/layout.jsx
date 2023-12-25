import React from 'react';
import NavBar from './NavBar'; // Asumo que el archivo se llama NavBar.js
import './layout.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />
      <div className="layout__container">{children}</div>
    </div>
  );
}
