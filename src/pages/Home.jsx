import { Link } from 'react-router-dom';
import gameTitle from '../assets/gameTitle.png';
import startBtn from '../assets/start-btn.png';

const Home = () => {
  const gameStart = new Audio('/sounds/gameStart.mp3');
  gameStart.play();
  return (
    <div className="main home">
      <img src={gameTitle} alt="game title" className="game-title" />
      <Link to="/play">
        <img src={startBtn} alt="start button" className="btn start" />
      </Link>
    </div>
  );
};
export default Home;
