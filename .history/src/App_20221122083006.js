import './App.css';
import React, {useState} from 'react';

import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

function App() {

  const [min, setMin] = useState(1)
  const [max, setMax] = useState(10)

  return (
    <div className="App">
      <h1>Exercício React-Redux (simples)</h1>

      <div className='linha'>
        <Intervalo ></Intervalo>
      </div>
      <div className='linha'>
        <Media min={min} max={max}></Media>
        <Soma minimo={min} maximo={max}></Soma>
        <Sorteio minimo={min} maximo={max}></Sorteio>
      </div>
    </div>
  );
}

export default App;
