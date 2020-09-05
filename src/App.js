import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Inicio from './pages/home';
import Evolucao from './pages/evolucao';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
      </header>
    {(window.location.hash==='#home' || window.location.hash==='') ? <Inicio /> : <Evolucao /> }
    </div>
  </>
  );
}

export default App;
