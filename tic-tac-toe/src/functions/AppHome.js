import logo from '../assets/tic-tac-toe.png';
import '../css/App.css';

function AppHone() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link-img" href="/game">
            <img src={logo} className="App-logo" alt="logo" />
        </a>
        <a className="App-link" href="/game">
          Play Game
        </a>
      </header>
    </div>
  );
}

export default AppHone;