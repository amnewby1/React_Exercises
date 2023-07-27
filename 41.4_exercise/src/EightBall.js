import "./EightBall.css";
import { useState } from "react";

const EightBall = ({ answers, onReset, onColorChange }) => {
  const initialState = {
    color: "black",
    message: "Think of a Question",
  };

  const [ballState, setBallState] = useState(initialState);

  const randomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];
    setBallState({
      color: randomAnswer.color,
      message: randomAnswer.msg,
    });
    onColorChange(randomAnswer.color);
  };

  const handleReset = () => {
    setBallState(initialState);
    onReset();
  };

  return (
    <div className="EightBall-container">
      <div
        className="EightBall"
        style={{ backgroundColor: ballState.color }}
        onClick={randomAnswer}
      >
        <p className="EightBall-message">{ballState.message}</p>
      </div>
      <button className="Eightball-reset-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default EightBall;
