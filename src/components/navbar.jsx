import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './Search'; // Asumo que el archivo se llama Search.js
import './NavBar.css';

export default function NavBar() {
  const handleSearch = (searchTerm) => {
    // Aquí puedes realizar la búsqueda utilizando el término de búsqueda (searchTerm)
    console.log('Búsqueda realizada con el término:', searchTerm);
  };

  return (
    <div className="navbar">
      <Link to="/" className="navbar__link">
        Home
      </Link>
      <Link to="/create" className="navbar__link">
        Create
      </Link>
      <Link to="/about" className="navbar__link">
        About
      </Link>
      <Link to="/docs" className="navbar__link">
        Documentation
      </Link>
      <Link to="/more" className="navbar__link">
        More
      </Link>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}
