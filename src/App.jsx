import { TestMessage } from "./components/TestMessage";

export const App = () => {

  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red"}}>Props練習</h1>
      <TestMessage color="green">how are you?</TestMessage>
      <TestMessage color="blue">I'm fine.</TestMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
