import { useState } from "react";
import "./App.css";
import EightBall from "./EightBall";

const answers = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

const App = () => {
  const initialCounts = {
    green: 0,
    goldenrod: 0,
    red: 0,
  };

  const [colorCounts, setColorCounts] = useState(initialCounts);

  const handleReset = () => {
    setColorCounts(initialCounts);
  };

  const handleColorChange = (color) => {
    setColorCounts((prevCounts) => ({
      ...prevCounts,
      [color]: prevCounts[color] + 1,
    }));
  };

  return (
    <div className="app">
      <EightBall
        answers={answers}
        onReset={handleReset}
        onColorChange={handleColorChange}
      />
      <div className="color-counts">
        <p>Green: {colorCounts.green}</p>
        <p>Goldenrod: {colorCounts.goldenrod}</p>
        <p>Red: {colorCounts.red}</p>
      </div>
    </div>
  );
};

export default App;
