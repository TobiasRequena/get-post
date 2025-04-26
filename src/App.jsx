import './App.css'
import Pets  from '../src/Pets'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { División } from './División';
import { Perfiles } from './Perfiles';


function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<División />} />
        <Route path="/animalitos" element={<Pets />} />
        <Route path="/perfil" element={<Perfiles />} />
      </Routes>
    </Router>
  )
}

export default App
