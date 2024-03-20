import logo from './logo.svg';
import './App.css';
import HomeLoginPage from './pages/HomeLoginPage.js'
import CandidateInfo from './pages/CandidateInfo';
import SchoolInfo from './pages/SchoolInfo';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Risk from './pages/Risk';
import Abuse from './pages/Abuse';
import Hiv from './pages/HIV';
import Alcohol from './pages/Alcohol';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Routes>
            <Route path='/' element={<HomeLoginPage />} />
            <Route path='/candidateInfo' element={<CandidateInfo />} />
            <Route path='/schoolInfo' element={<SchoolInfo />} />
            <Route path='/risk' element={<Risk />} />
            <Route path='/abuse' element={<Abuse />} />
            <Route path='/hiv' element={<Hiv />} />
            <Route path='/alcohol' element={<Alcohol />} />
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
