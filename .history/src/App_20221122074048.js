import './App.css';
import Card from './components/Card';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (simples)</h1>

      <div className='linha'>
        <Card title="Card 1" red>1</Card>
      </div>
      <div className='linha'>
        <Card title="Card 2" green>2</Card>
        <Card title="Card 2" blue>3</Card>
        <Card title="Card 2" purple>4</Card>
      </div>
    </div>
  );
}

export default App;
