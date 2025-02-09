import colors, { colorList } from '../colors';

const ColorOptions = ({ trueChoice, setScore, score }) => {
  const colorIndex = (score / 5) % colorList.length;
  const color = colorList[colorIndex];

  const dummyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function handleClick(event, index) {
    const target = event.target;
    const classToAdd = trueChoice == index ? 'green' : 'red';
    target.classList.add(classToAdd);

    trueChoice == index && setScore(score + 5);

    setTimeout(() => {
      target.classList.remove(classToAdd);
    }, 1500);
  }
  return (
    <div className="choices">
      {dummyArray.map((el, ind) => (
        <span
          key={el}
          style={{
            backgroundColor: colors[color][ind],
          }}
          className="choice"
          onClick={(event) => handleClick(event, ind)}></span>
      ))}
    </div>
  );
};
export default ColorOptions;
