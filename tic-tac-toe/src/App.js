// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './AppHome';
import GameApp from './GameApp';

 
const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<GameApp />} />
         </Routes>
      </>
   );
};
 
export default App;