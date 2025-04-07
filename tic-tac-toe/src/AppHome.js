import logo from './tic-tac-toe.png';
import './App.css';

function AppHone() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="/game"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play Game
        </a>
      </header>
    </div>
  );
}

export default AppHone;