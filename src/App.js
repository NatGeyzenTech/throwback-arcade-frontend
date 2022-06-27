import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import LoadScreen from './screens/LoadScreen/LoadScreen';
import Breakout from './games/Breakout/Breakout';
import Frogger from './games/Frogger/Frogger';
import PacMan from './games/PacMan/PacMan';
import SpaceInvaders from './games/SpaceInvaders/SpaceInvaders';
import Tetris from './games/Tetris/Tetris';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoadScreen />} />
          <Route path="/breakout" element={<Breakout />} />
          <Route path="/frogger" element={<Frogger />} />
          <Route path="/pac-man" element={<PacMan />} />
          <Route path="/space-invaders" element={<SpaceInvaders />} />
          <Route path="/tetris" element={<Tetris />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;