import "./App.css";
import Hello from "./Components/Hello";

function App() {
  type Info = {
    name: string;
    age: number;
  };
  const userInfo: Info = {
    name: "Hasan",
    age: 21,
  };

  return (
    <>
      <h1>React With Typescript</h1>
      <Hello userInfo={userInfo} />
    </>
  );
}

export default App;
