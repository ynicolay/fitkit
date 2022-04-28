import './App.css';
import { useState } from 'react';
import EvilRussian from './kits/EvilRussian';
import KenLainBenchPress from './kits/KenLainBench';

function App() {
  const [page, setPage] = useState("evilRussian");

  return (
    <>
      <div className="App">
        <button onClick={() => setPage("kenLain")}>Ken Lain Bench press</button>
        <button onClick={() => setPage("evilRussian")}>Evil Russian pushup challenge</button>
        {page === "kenLain" ? <KenLainBenchPress /> : <EvilRussian />}
      </div>
    </>
  );
}

export default App;
