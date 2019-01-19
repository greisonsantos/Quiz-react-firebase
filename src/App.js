import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'

import Inicio from './Home/inicio'
import Categorias from './jogo/Categorias'
import Perguntas from './jogo/Perguntas'
import Resultado from './jogo/Resultado'
import Respostas from './jogo/Respostas'
import Ranking from './jogo/Ranking'
import Header from './jogo/Header'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
         <header className="App-header">
          <Header/>
          <Route path='/' exact component={Inicio}/>
          <Route path='/categorias' component={Categorias}/>
          <Route path='/perguntas' component={Perguntas}/>
          <Route path='/Resultado' component={Resultado}/>
          <Route path='/Ranking' component={Ranking}/>
          </header>

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
