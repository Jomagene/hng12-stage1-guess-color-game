import ColorOptions from '../components/ColorOptions';
import Header from '../components/Header';
import Instruction from '../components/Instruction';
import '../play.css';

const Play = () => {
  return (
    <div className="main play">
      <Header />
      <Instruction />
      <ColorOptions />
    </div>
  );
};
export default Play;
