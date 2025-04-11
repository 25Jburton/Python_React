// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './AppHome';

function AppNavigation() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
         </Routes>
      </>
   );
};
 
export default AppNavigation;