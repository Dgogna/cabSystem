import react from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import ChooseLocation from './components/ChooseLocation';
import Taxis from './components/Taxis';
import CabState from './context/cab State';
import Cab from './components/cab';
import Bookings from './components/Bookings';

function App() {
    return (
        <div >
            <CabState>
                <Router>
                    <Routes>
                        <Route path='/' element={<Home></Home>}></Route>
                        <Route path='/chooseLocation' element={<ChooseLocation />}></Route>
                        <Route path="/taxis" element={<Taxis />}></Route>
                        <Route path="/cab" element={<Cab />}></Route>
                        <Route path="/bookings" element={<Bookings></Bookings>}></Route>
                    </Routes>
                </Router>
            </CabState>

        </div>
    );
}

export default App;
