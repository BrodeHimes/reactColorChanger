import React from "react";
import "./styles.css";

// Cohort React Assessment
// Given the following array of `color` names,
// ['red','green','blue', 'pink', 'orange'], edit the
// ColorChanger component below to include a button, that when clicked,
// changes the color of the 'box' to the next color of the array.
// The default color is black (just so you can visualize the "box"),
// No need to include this once your colors start "cycling"

// When you're at the end of the array, the next click should cycle back
// to the beginning

// look at `styles.css` for a hint

export default function App() {
  return (
    <div className="App">
      <h1>Cohort React Assessment</h1>
      <h2>Color-Changing Box</h2>
      <ColorChanger />
    </div>
  );
}

const ColorChanger = () => {
  const [colorArr, setColorArr] = React.useState([]);
  const colors = ["red", "green", "blue", "pink", "orange"];
  const [count, setCount] = React.useState(-1);

  const handleClick = () => {
    setColorArr(colors);
    if (count < 4) {
      setCount(count + 1);
    } else if (count === 4) {
      setCount(count - 4);
    }
  };

  return (
    <div>
      <div className={`box ${colorArr[count]}`}></div>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
};
