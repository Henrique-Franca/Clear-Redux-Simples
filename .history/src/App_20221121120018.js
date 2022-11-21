import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (simples)</h1>

      <div className='linha'>
        <Card title="Card 1" color={props.red}>
          X
        </Card>
      </div>
      <div className='linha'>
        <Card title="Card 2">
          y
        </Card>
      </div>

    </div>
  );
}

export default App;
