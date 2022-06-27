import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <nav>
    <ul>
      <li><Link to="/breakout">Breakout</Link></li>
      <li><Link to="/frogger">Frogger</Link></li>
      <li><Link to="/pac-man">Pac-Man</Link></li>
      <li><Link to="/space-invaders">Space Invaders</Link></li>
      <li><Link to="/tetris">Tetris</Link></li>
    </ul>
  </nav>
);

export default Nav;