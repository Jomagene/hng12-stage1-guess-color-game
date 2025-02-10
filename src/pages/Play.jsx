import { useState } from 'react';
import ColorOptions from '../components/ColorOptions';
import Header from '../components/Header';
import Instruction from '../components/Instruction';
import '../play.css';

const Play = () => {
  const [score, setScore] = useState(0);
  let [statusGame, setStatusGame] = useState('');

  const trueChoice = Math.floor(Math.random() * 8);

  return (
    <div className="main play">
      <Header setScore={setScore} score={score} setStatusGame={setStatusGame} />
      <Instruction trueChoice={trueChoice} score={score} />
      <ColorOptions
        trueChoice={trueChoice}
        setScore={setScore}
        score={score}
        statusGame={statusGame}
        setStatusGame={setStatusGame}
      />
      <h1>
        Your score is : <span data-testid="score">{score}</span>
      </h1>
    </div>
  );
};
export default Play;
