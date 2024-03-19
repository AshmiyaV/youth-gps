import logo from './logo.svg';
import './App.css';
import HomeLoginPage from './pages/HomeLoginPage.jsx'
import CandidateInfo from './pages/CandidateInfo.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import VapeView from './pages/VapeView.jsx';
import DrugsView from './pages/DrugsView.jsx';
import MIView1 from './pages/MIView1.jsx';
import MIView2 from './pages/MIView2.jsx';

function App() {
  return (
    // <div className="App">
      <BrowserRouter>
        {/* <header className="App-header"> */}
          <Routes>
            <Route path='/' element={<HomeLoginPage />} />
            <Route path='/candidateInfo' element={<CandidateInfo />} />
            <Route path='/MI' element={<MIView1 />} />
            <Route path='/MI2' element={<MIView2 />} />
            <Route path='/vape' element={<VapeView />} />
            <Route path='/drug' element={<DrugsView />} />
          </Routes>
        {/* </header> */}
      </BrowserRouter>
    // </div>
  );
}

export default App;
