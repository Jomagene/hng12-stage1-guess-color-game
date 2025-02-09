import { useState } from 'react';
import ColorOptions from '../components/ColorOptions';
import Header from '../components/Header';
import Instruction from '../components/Instruction';
import '../play.css';

const Play = () => {
  const [score, setScore] = useState(0);

  const trueChoice = Math.floor(Math.random() * 8);

  return (
    <div className="main play">
      <Header />
      <Instruction trueChoice={trueChoice} score={score} />
      <ColorOptions trueChoice={trueChoice} setScore={setScore} score={score} />
      <h1>Votre score est : {score}</h1>
    </div>
  );
};
export default Play;
