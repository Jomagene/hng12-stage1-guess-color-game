import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="main home">
      <img src="/gameTitle.png" alt="game title" className="game-title" />
      <Link to="/play">
        <img src="/start-btn.png" alt="start button" className="btn start" />
      </Link>
    </div>
  );
};
export default Home;
