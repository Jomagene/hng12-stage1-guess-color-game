import { useState } from 'react';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
import gameTitle from '../assets/gameTitle.png';
import resetBtn from '../assets/reset-btn.png';

const Header = ({ setScore }) => {
  const [countdownDate, setCountdownDate] = useState(Date.now() + 300000);
  const resetTimer = () => {
    setCountdownDate(Date.now() + 300000);
    setScore(0);
  };

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <span>End</span>;
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
      <img src={resetBtn} alt="" onClick={resetTimer} className="pointer" />
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
