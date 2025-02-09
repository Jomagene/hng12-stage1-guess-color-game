import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="main home">
      <img
        src="src/assets/gameTitle.png"
        alt="game title"
        className="game-title"
      />
      <Link to="/play">
        <img
          src="src/assets/start-btn.png"
          alt="start button"
          className="btn start"
        />
      </Link>
    </div>
  );
};
export default Home;
