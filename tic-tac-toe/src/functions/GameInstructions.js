import '../css/App.css';
import logo from '../assets/tic-tac-toe.png'

function GameInstructions() {
  return (
    <div className="App-Instructions">
      Select any open square, first player to match 3 in a row will win.
      <br></br>
      <img src={logo} className="App-logo-mini" alt="logo" />
      Player 1 = X, Player 2 = O 
      <img src={logo} className="App-logo-mini" alt="logo" />
    </div>
  );
}

export default GameInstructions;