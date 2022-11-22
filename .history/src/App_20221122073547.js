import './App.css';
import Card from './components/Card';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (simples)</h1>

      <div className='linha'>
        <Card title="Card 1" red>
          X
        </Card>
      </div>
      <div className='linha'>
        <Card title="Card 2" green>
          y
        </Card>
      </div>

    </div>
  );
}

export default App;
