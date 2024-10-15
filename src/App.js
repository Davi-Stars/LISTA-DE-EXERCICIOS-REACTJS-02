import React from 'react';
import Exercicio1 from './Exercicio1';
import Exercicio2 from './Exercicio2';
import Exercicio3 from './Exercicio3';
import Exercicio4 from './Exercicio4';
import Exercicio5 from './Exercicio5';
import Exercicio6 from './Exercicio6';
import Exercicio7 from './Exercicio7';
import Exercicio8 from './Exercicio8';
import Exercicio9 from './Exercicio9';
import Exercicio10 from './Exercicio10';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Lista de Exercícios 02 de ReactJS</h1>
      <section className="exercise-section">
        <Exercicio1 />
        <Exercicio2 />
        <Exercicio3 />
        <Exercicio4 />
        <Exercicio5 />
        <Exercicio6 />
        <Exercicio7 />
        <Exercicio8 />
        <Exercicio9 />
        <Exercicio10 />
      </section>
    </div>
  );
}

export default App;