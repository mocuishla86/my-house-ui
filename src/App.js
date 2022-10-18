import logo from './logo.svg';
import './App.css';
import ActionList from './action/ActionList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://freesvg.org/img/logo-casa.png" />
        <p>My House</p>

        <span>
        <ActionList />
        </span>
      </header>
    </div>
  );
}

export default App;
