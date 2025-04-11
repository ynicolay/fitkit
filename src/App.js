import './App.css';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EvilRussian from './kits/EvilRussian';
import KenLainBenchPress from './kits/KenLainBench';
import Wendlers531 from './kits/531';
import ComingSoon from './components/ComingSoon';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/kenLain">Ken Lain's Bench Press</Link>
          <Link to="/evilRussian">Evil Russian Challenge</Link>
          <Link to="/531">Jim Wendler's 5/3/1</Link>
          {/* <Link to="/help">?</Link> */}
        </nav>
        <Routes>
          <Route path="/kenLain" element={<KenLainBenchPress />} />
          <Route path="/evilRussian" element={<EvilRussian />} />
          <Route path="/531" element={<Wendlers531 />} />
          <Route path="/" element={<KenLainBenchPress />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
