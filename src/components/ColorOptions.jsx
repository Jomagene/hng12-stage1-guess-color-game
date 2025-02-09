import colors, { colorList } from '../colors';

const ColorOptions = ({ trueChoice, setScore, score }) => {
  const colorIndex = (score / 5) % colorList.length;
  const color = colorList[colorIndex];

  function handleClick(event, index) {
    if (trueChoice == index) {
      event.target.classList.add('green');
      setScore(score + 5);
    } else event.target.classList.add('red');
  }
  return (
    <div className="choices">
      <span
        style={{
          backgroundColor: colors[color][0],
        }}
        className="choice"
        onClick={(event) => handleClick(event, 0)}></span>
      <span
        style={{
          backgroundColor: colors[color][1],
        }}
        className="choice"
        onClick={(event) => handleClick(event, 1)}></span>
      <span
        style={{
          backgroundColor: colors[color][2],
        }}
        className="choice"
        onClick={(event) => handleClick(event, 2)}></span>
      <span
        style={{
          backgroundColor: colors[color][3],
        }}
        className="choice"
        onClick={(event) => handleClick(event, 3)}></span>
      <span
        style={{
          backgroundColor: colors[color][4],
        }}
        className="choice"
        onClick={(event) => handleClick(event, 4)}></span>
      <span
        style={{
          backgroundColor: colors[color][5],
        }}
        className="choice"
        onClick={(event) => handleClick(event, 5)}></span>
      <span
        style={{
          backgroundColor: colors[color][6],
        }}
        className="choice"
        onClick={(event) => handleClick(event, 6)}></span>
      <span
        style={{
          backgroundColor: colors[color][7],
        }}
        className="choice"
        onClick={(event) => handleClick(event, 7)}></span>
      <span
        style={{
          backgroundColor: colors[color][8],
        }}
        className="choice"
        onClick={(event) => handleClick(event, 8)}></span>
    </div>
  );
};
export default ColorOptions;
