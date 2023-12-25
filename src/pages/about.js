import Layout from "../components/layout";
import React, { useState, useEffect } from 'react';
import "../App.css";
import Footer from "../components/footer";




const About = () => {
  // Estado para controlar el idioma actual (inglés por defecto)
  const [language, setLanguage] = useState('en');





  // Función para cambiar el idioma al hacer clic en el botón
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  useEffect(() => {
    console.log('Se ha cambiado correctamente de idioma');
  }, [language]);


  // Contenido en inglés
  const contentEN = (
    <div>
      <h2>About Library Memo App</h2>
      <img src="http://localhost:3000/img/libreria.png" alt="Imagen libros" />
      <p>
        Welcome to Library Memo App! This is a personal library application designed for book enthusiasts.
        Here, you can catalog and store information about the books you have read.
        The main goal of this project is to provide users with an easy-to-use platform 
        where they can catalog and store information about the books they have read. 
        This application is built with React, a JavaScript library oriented towards 
        building reusable components.
      </p>
      <p>
        Start adding your books and enjoy organizing your reading journey!
      </p>
    </div>
  );

  // Contenido en español
  const contentES = (
    <div>
      <h2>Acerca de Library Memo App</h2>
      <img src="http://localhost:3000/img/libreria.png" alt="Imagen libros" />
      <p>
        ¡Bienvenido a Library Memo App! Esta es una aplicación de biblioteca personal diseñada para entusiastas de los libros.
        Aquí puedes catalogar y almacenar información sobre los libros que has leído.
        El objetivo principal de este proyecto es proporcionar a los usuarios una plataforma 
        fácil de usar donde puedan catalogar y almacenar información sobre los libros que han leído. 
        Esta aplicación está construida con React, una librería de JavaScript orientada hacia la construcción 
        de componentes reutilizables.
      </p>
      <p>
        ¡Comienza a agregar tus libros y disfruta organizando tu viaje de lectura!
      </p>
    </div>
  );

  return (
    <div>
    <Layout>
    <div>

      {language === 'en' ? contentEN : contentES}
    </div>
    <button onClick={toggleLanguage} className="language-button">
        {language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
      </button>

      </Layout>
      <Footer/>
    
    </div>

  );
};

export default About;
