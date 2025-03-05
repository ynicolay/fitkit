import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EvilRussian from './kits/EvilRussian';
import KenLainBenchPress from './kits/KenLainBench';
// import Wendlers531 from './kits/531';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/kenLain">Ken Lain Bench Press</Link>
          <Link to="/evilRussian">Evil Russian Pushup Challenge</Link>
          <Link to="/531">Jim Wendler's 5/3/1</Link>
        </nav>
        <Routes>
          <Route path="/kenLain" element={<KenLainBenchPress />} />
          <Route path="/evilRussian" element={<EvilRussian />} />
          <Route path="/531" element={<ComingSoon />} />
          <Route path="*" element={<KenLainBenchPress />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
