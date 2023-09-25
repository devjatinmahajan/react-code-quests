import React from "react";
import { textGenerate } from "../../data/challenge-vi-text";

let timer;
export default function ChallengeVI() {
  const [text, setText] = React.useState();
  const [generating, setGenerating] = React.useState();

  const generateText = () => {
    let i = 0;
    let generateCode = "";

    timer = setInterval(() => {
      if (i === textGenerate.length - 1) clearInterval(timer);
      generateCode = generateCode + textGenerate[i];
      i++;
      setText(generateCode);
    }, 10);
  };

  const handleStart = () => {
    setGenerating(true);
  };

  const handleReset = () => {
    setText("");
    clearInterval(timer);
    setGenerating(false);
  };

  React.useEffect(() => {
    if (generating) generateText();
    return () => clearInterval(timer);
  }, [generating]);

  return (
    <>
      <button onClick={handleStart}>Generate Text</button>
      <button onClick={handleReset}>Reset</button>
      {text}
    </>
  );
}
