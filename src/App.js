import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Inicio from './Home/inicio'
import Categorias from './jogo/Categorias'
import Perguntas from './jogo/Perguntas'
import Resultado from './jogo/Resultado'
import Respostas from './jogo/Respostas'
import Ranking from './jogo/Ranking'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Inicio/>
         <Categorias/>
         <Perguntas/>
         <Resultado/>
         <Respostas/>
         <Ranking/>
         <img src={logo} className="App-logo" alt="logo" />
                    <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Logo
          </a>
        </header>
        

      </div>
    );
  }
}

export default App;
