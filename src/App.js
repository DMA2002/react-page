import { BrowserRouter, Route, Routes } from 'react-router-dom';

import logo from './logo.svg';
import Connection from './Page/Connection';
import Enregistrement from './Page/Enregistrement';
import Formulaire from './Page/Formulaire';
import History from './Page/History';

import Home from './Page/Home';
import Patient from './Page/Patient';
import Planing from './Page/Planing';
import "./Style/Style1.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Formulaire/>} />
              <Route path='/patient' element={<Patient/>}/>
              <Route path='/connection' element={<Connection/>}/>
              <Route path='/history' element={<History/>}/>
              <Route path='/pathologie' element={<Enregistrement/>}/>
              <Route path='/planing' element={<Planing/>}/>
              
              
              
              
              
              
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
