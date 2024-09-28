import { useState } from "react";
import { TestMessage } from "./components/TestMessage";

export const App = () => {
  const [num, setNum] = useState(0);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  return (
    <>
      <h1 style={{ color: "red"}}>Props練習</h1>
      <TestMessage color="green">how are you?</TestMessage>
      <TestMessage color="blue">I'm fine.</TestMessage>
      <button onClick={onClickCountUp}>カウントアップボタン</button>
      <p>{num}</p>
    </>
  );
};
