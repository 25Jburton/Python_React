import '../css/App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import GameInstructions from './GameInstructions';
import GameBoard from './GameBoard';
import Score from './Score';


function GameApp() {
  const instructions = ReactDOM.createRoot(document.getElementById('instructions'));
    instructions.render(
      <React.StrictMode>
          <GameInstructions />
      </React.StrictMode>
    );
  const board = ReactDOM.createRoot(document.getElementById('game'));
      board.render(
        <React.StrictMode>
          <GameBoard />
        </React.StrictMode>
    );
    const score = ReactDOM.createRoot(document.getElementById('score'));
      score.render(
        <React.StrictMode>
          <Score />
        </React.StrictMode>
    );
}

export default GameApp;