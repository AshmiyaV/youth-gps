import logo from './logo.svg';
import './App.css';
import HomeLoginPage from './pages/HomeLoginPage.jsx'
import CandidateInfo from './pages/CandidateInfo.jsx';
import SchoolInfo from './pages/SchoolInfo';
import Risk from './pages/Risk';
import Abuse from './pages/Abuse';
import Hiv from './pages/HIV';
import Alcohol from './pages/Alcohol';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import VapeView from './pages/VapeView.jsx';
// import DrugsView from './pages/DrugsView.jsx';
import MIView1 from './pages/MIView1.jsx';
import MIView2 from './pages/MIView2.jsx';
import MIMetrics1 from './pages/MIMetrics1.jsx';
import MIMetrics2 from './pages/MIMetrics2.jsx';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeLoginPage />} />
            <Route path='/candidateInfo' element={<CandidateInfo />} />
            <Route path='/schoolInfo' element={<SchoolInfo />} />
            <Route path='/risk' element={<Risk />} />
            <Route path='/abuse' element={<Abuse />} />
            <Route path='/hiv' element={<Hiv />} />
            <Route path='/alcohol' element={<Alcohol />} />
            <Route path='/MI' element={<MIView1 />} />
            <Route path='/MI2' element={<MIView2 />} />
            <Route path='/MI/Metrics' element={<MIMetrics1 />} />
            <Route path='/MI2/Metrics' element={<MIMetrics2 />} />
            {/* <Route path='/vape' element={<VapeView />} />
            <Route path='/drug' element={<DrugsView />} /> */}
          </Routes>
      </BrowserRouter>
  );
}

export default App;
