import React, { useState, useEffect } from 'react';
import './Global.css';
import './Fonts.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importez le fichier CSS de Bootstrap

function App() {


  return (
    <div className="App">
      <Header />
      <h1>Mon Application</h1>

      {/* Le reste de votre contenu */}
    </div>
  );
}

export default App;