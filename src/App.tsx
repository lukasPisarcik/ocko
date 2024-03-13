import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NewGame from './pages/NewGame';
import Game from './pages/Game';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="newGame" element={<NewGame />} />
          <Route path="game" element={<Game />} />
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App;