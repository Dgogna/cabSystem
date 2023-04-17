import react from 'react';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './components/Home';
import ChooseLocation from './components/ChooseLocation';
import Taxis from './components/Taxis';

function App() {
  return (
    <div >
      <Router>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/chooseLocation' element={<ChooseLocation />}></Route>
            <Route path="/taxis" element={<Taxis />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
