import './App.css';
import React from 'react';

import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (simples)</h1>

      <div className='linha'>
        <Intervalo ></Intervalo>
      </div>
      <div className='linha'>
        <Media title="Card 2" green>2</Media>
        <Soma title="Card 2" blue>3</Soma>
        <Sorteio title="Card 2" purple>4</Sorteio>
      </div>
    </div>
  );
}

export default App;
