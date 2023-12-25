import React from 'react';
import NavBar from "./navbar"
import './layout.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />
      <div className="layout__container">{children}</div>
    </div>
  );
}
