import { useState } from 'react';
import Countdown from 'react-countdown';

const Header = () => {
  const [countdownDate] = useState(Date.now() + 30000);

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
      <img src="/gameTitle.png" alt="" className="logo" />
      <nav>
        <img src="/reset-btn.png" alt="" />
        <img src="/quit-btn.png" alt="" />
      </nav>
      <p>
        Time: <Countdown date={countdownDate} renderer={renderer} />
      </p>
    </header>
  );
};

export default Header;
