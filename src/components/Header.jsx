import { useState } from 'react';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

const Header = () => {
  const [countdownDate, setCountdownDate] = useState(Date.now() + 60000);
  const resetTimer = () => {
    setCountdownDate(Date.now() + 60000);
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
        <img src="/gameTitle.png" alt="" className="logo" />
      </Link>
      <img
        src="/reset-btn.png"
        alt=""
        onClick={resetTimer}
        className="pointer"
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
