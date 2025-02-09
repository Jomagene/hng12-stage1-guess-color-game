import colors from '../colors';
const Instruction = () => {
  return (
    <div className="instruction">
      <p> Hey! Taste your eyes, can you find this color? : </p>
      <div className="choice-border" style={{ borderColor: colors.blue[0] }}>
        <span
          style={{
            backgroundColor: colors.blue[Math.floor(Math.random() * 9)],
          }}
          className="true-choice"></span>
      </div>
    </div>
  );
};
export default Instruction;
