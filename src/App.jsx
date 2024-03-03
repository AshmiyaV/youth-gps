import logo from './logo.svg';
import './App.css';
import HomeLoginPage from './pages/HomeLoginPage.jsx'
import CandidateInfo from './pages/CandidateInfo.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import VapeView from './pages/VapeView.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Routes>
            <Route path='/' element={<HomeLoginPage />} />
            <Route path='/candidateInfo' element={<CandidateInfo />} />
            <Route path='/vape' element={<VapeView />} />
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
