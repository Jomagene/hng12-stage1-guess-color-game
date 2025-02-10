import { useState } from 'react';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
import gameTitle from '../assets/gameTitle.png';
import resetBtn from '../assets/reset-btn.png';

const Header = ({ score, setScore, setStatusGame }) => {
  const [countdownDate, setCountdownDate] = useState(Date.now() + 120000);
  const resetTimer = () => {
    setCountdownDate(Date.now() + 120000);
    setScore(0);
    setStatusGame('');
  };

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div className="popup-container">
          <div className="popup">
            Game finished: You scored {score} points
            <img
              src={resetBtn}
              alt=""
              onClick={resetTimer}
              className="pointer"
              data-testid="newGameButton"
            />
          </div>
        </div>
      );
    } else {
      return (
        <span>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </span>
      );
    }
  };

  return (
    <header>
      <Link to="/">
        <img src={gameTitle} alt="" className="logo" />
      </Link>
      <img
        src={resetBtn}
        alt=""
        onClick={resetTimer}
        className="pointer"
        data-testid="newGameButton"
      />
      <p>
        Time :{' '}
        <Countdown
          key={countdownDate}
          date={countdownDate}
          renderer={renderer}
        />
      </p>
    </header>
  );
};

export default Header;
