import logo from './logo.svg';
import './App.css';
import HomeLoginPage from './pages/HomeLoginPage.js'
import CandidateInfo from './pages/CandidateInfo';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Routes>
            <Route path='/' element={<HomeLoginPage />} />
            <Route path='/candidateInfo' element={<CandidateInfo />} />
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
