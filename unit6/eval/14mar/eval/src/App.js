import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import Address from './pages/Address';
import Navbar from './components/Navbar';
import AddAdd from './pages/AddAdd';

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
   <Route path='/addAdd' element={<AddAdd/>}/>
   <Route path='/address' element={<Address/>}/>
    
   </Routes>

   </>
  );
}

export default App;
